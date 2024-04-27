System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_7 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_9 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Form) {
      dependency_11 = _pragmateUi011Form;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Alert) {
      dependency_15 = _pragmateUi011Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_16 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@aimpact/ailearn-app/coins-layout.widget', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/assessment.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2405820615,
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
            #assignmentId;
            #activityId;
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
              if (this.#assignmentId === this.uri.vars.get('assignmentId') && this.#activityId === this.uri.vars.get('id')) {
                return;
              }
              this.#assignmentId = this.uri.vars.get('assignmentId');
              this.#activityId = this.uri.vars.get('id');
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
        hash: 4013882987,
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
                this.#assignmentId = assignmentId;
                const activity = new _core.AssignmentActivity({
                  id: activityId,
                  assignmentId
                });
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.#model = activity;
                await activity.load({
                  id: activityId,
                  assignmentId
                });
                console.log(30, this.model.materials, this.model.assessment);
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
              this.ready = false;
              let params = {
                answers: data,
                ...this.#paramsUri
              };
              await this.model.publish({
                params,
                type: 'assessment'
              });
              this.ready = true;
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1404005213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _components = require("@aimpact/chat/shared/components");
          var _selection = require("./selection");
          var _beyond_context = require("beyond_context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [title, setTitle] = _react.default.useState(store.model?.title || '');
            const setBreadcrumb = texts => {
              _coinsLayout.LayoutBroker.breadcrumb = [[texts.breadcrumb.assignment, `/assignments/${store.paramsUri.assignmentId}`], [title, '']];
            };
            const [textsReady, texts] = (0, _ui.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store.model], () => setTitle(store.model?.title || ''));
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
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_selection.Selection, {
              assessments: assessment
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/selection/form/Input
      ********************************************/

      ims.set('./views/selection/form/Input', {
        hash: 489088116,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputControl = void 0;
          exports.RadioInput = RadioInput;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _answer = require("../interfaces/answer");
          var _icons = require("pragmate-ui/icons");
          var _formContext = require("./controls/form-context");
          function RadioInput({
            selected,
            questionIndex,
            index,
            label,
            name,
            onChange,
            value
          }) {
            const {
              store
            } = (0, _formContext.useFormContext)();
            const cls = `item__option${selected === index ? ' selected' : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: event => {
                onChange(event);
              }
            }, label, selected === index && _react.default.createElement(_icons.Icon, {
              icon: "circle-check"
            }));
          }
          const InputControl = ({
            questionIndex,
            index,
            done,
            selected,
            value,
            option,
            name,
            isMultiple,
            onChange
          }) => {
            let Control = isMultiple ? _form.CheckBox : RadioInput;
            if (done) Control = _answer.Answer;
            return _react.default.createElement(Control, {
              label: option,
              selected: selected,
              value: value,
              name: name,
              index: index,
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
        hash: 1804000310,
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
        hash: 1795831310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubmitButton = SubmitButton;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
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
            attrs.disabled = props.disabled;
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
        hash: 861037594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionForm = SelectionForm;
          var _formContext = require("./controls/form-context");
          var _question = require("./question");
          var _react = require("react");
          var _submitButton = require("./controls/submit-button");
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
            const [fetching, setFetching] = _react.default.useState(false);
            const ref = _react.default.useRef(null);
            const [isValid, setIsValid] = _react.default.useState(false);
            const disabled = {
              disabled: store.answers.size !== assessments.questions.length
            };
            (0, _hooks.useBinder)([store], () => {
              setAnswers(store.answers.size);
              if (store.answers.size === assessments.questions.length) setIsValid(true);
            }, 'set.answer');
            const handleSubmit = async event => {
              event.preventDefault();
              event.stopPropagation();
              try {
                event.preventDefault();
                setFetching(true);
                const form = event.target;
                const data = {};
                store.answers.forEach((answer, question) => {
                  data[question] = answer;
                });
                await store.save(data);
              } catch (e) {
                setError(e.message);
              } finally {
                setFetching(false);
              }
            };
            const output = assessments.questions.map((question, index) => _react.default.createElement(_question.Question, {
              key: index,
              index: index,
              question: question,
              store: store
            }));
            const value = {
              isValid,
              totalAnswered: totalAnswers,
              fetching,
              store
            };
            return _react.default.createElement(_formContext.FormContext.Provider, {
              value: value
            }, _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "assessment__container",
              ref: ref
            }, output, _react.default.createElement("footer", {
              className: "assessment__footer"
            }, _react.default.createElement(_submitButton.SubmitButton, {
              store: store,
              ...disabled,
              variant: "primary",
              type: "submit"
            }, texts?.finish))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/selection/form/question
      ***********************************************/

      ims.set('./views/selection/form/question', {
        hash: 3269473002,
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
            const [selected, setSelected] = _react.default.useState();
            const onChange = (questionIndex, answerIndex, event) => {
              event.stopPropagation();
              store.setAnswer(questionIndex, answerIndex);
              setSelected(answerIndex);
            };
            const inputs = question.options.map((option, i) => {
              return _react.default.createElement(_Input.InputControl, {
                key: `${index}.${i}`,
                value: `${i}`,
                option: option,
                selected: selected,
                name: index,
                index: i,
                questionIndex: index,
                isMultiple: question.isMultiple,
                onChange: e => onChange(index, i, e)
              });
            });
            return _react.default.createElement("div", {
              className: "question__form-container"
            }, _react.default.createElement("h3", {
              className: "question-title"
            }, question.question), inputs);
          };
          exports.Question = Question;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/selection/index
      ***************************************/

      ims.set('./views/selection/index', {
        hash: 930221062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Selection = Selection;
          var _react = require("react");
          var _results = require("./results");
          var _form = require("./form");
          var _beyond_context = require("beyond_context");
          var _context = require("../context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function Selection({
            assessments
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              store
            } = (0, _context.useAssessmentContext)();
            const model = store.model;
            const view = model?.data ? 'results' : 'form';
            const views = {
              results: _results.Results,
              form: _form.SelectionForm
            };
            const Control = views[store?.model.resources.materials.assessment.selection || view];
            return _react.default.createElement(Control, {
              assessments: assessments,
              texts: texts
            });
          }
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
        hash: 4168001512,
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
        hash: 503683932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Results = void 0;
          var _alert = require("pragmate-ui/alert");
          var _react = require("react");
          var _context = require("../../context");
          /*bundle*/
          const Results = ({
            assessments
          }) => {
            const {
              store,
              texts
            } = (0, _context.useAssessmentContext)();
            const {
              model: {
                tracking
              }
            } = store;
            const {
              counters
            } = tracking;
            const output = assessments.questions.map((question, index) => {
              let data = tracking?.answers ? tracking.answers : tracking?.responses;
              data = data[index];
              const options = question.options.map((option, i) => {
                let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
                if (data.answer === i) {
                  cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
                }
                if (question.correctAnswer === i) cls += ' option--correct';
                return _react.default.createElement("div", {
                  key: option,
                  className: cls
                }, _react.default.createElement("span", null, option));
              });
              return _react.default.createElement("div", {
                key: question.question,
                className: "question__container question__container--results"
              }, _react.default.createElement("h3", {
                className: "question-title"
              }, question.question), options);
            });
            return _react.default.createElement("div", {
              key: "",
              className: "assessment__container"
            }, _react.default.createElement(_alert.Alert, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvcmUiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInNlc3Npb25JZCIsImFjdGl2aXR5IiwiQXNzaWdubWVudEFjdGl2aXR5IiwiaWQiLCJjb25zb2xlIiwibG9nIiwibWF0ZXJpYWxzIiwiYXNzZXNzbWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImVycm9yIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfc2VsZWN0aW9uIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvaW5zTGF5b3V0Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRpdGxlIiwic2V0VGl0bGUiLCJzZXRCcmVhZGNydW1iIiwidGV4dHMiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwiYXNzaWdubWVudCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0c0NhbGxiYWNrIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJjb250ZXh0VmFsdWUiLCJmZXRjaGluZyIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJpY29uIiwiUGFnZUNvbnRhaW5lciIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiQW5zd2VyIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImNoZWNrZWRSYWRpb0dyb3VwcyIsIlNldCIsImhhcyIsInJhZGlvR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwic29tZSIsInJhZGlvIiwiYWRkIiwiSFRNTElucHV0RWxlbWVudCIsImluY2x1ZGVzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiYW5zd2VyIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsInNldFNlbGVjdGVkIiwiYW5zd2VySW5kZXgiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsIl9yZXN1bHRzIiwidXNlVGV4dHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwidHJhY2tpbmciLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsWUFBYTtZQUNiLENBQUFDLFVBQVc7WUFDWEMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUosS0FBTTtZQUNuQjtZQUNBLElBQUlLLE1BQU1BLENBQUE7Y0FDVCxPQUFPUixNQUFBLENBQUFTLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDLENBQUFOLFlBQWEsS0FBSyxJQUFJLENBQUNPLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFSLFVBQVcsS0FBSyxJQUFJLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdHOztjQUVELElBQUksQ0FBQyxDQUFBVCxZQUFhLEdBQUcsSUFB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