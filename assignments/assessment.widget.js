System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.45/coins-layout.widget", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0045CoinsLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0045CoinsLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/coins-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/assignments/assessment.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3196055500,
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
        hash: 1487407023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          class StoreManager extends _model.ReactiveModel {
            #model;
            #activityId;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #found;
            get found() {
              return this.#found;
            }
            get canConsumeCredits() {
              return this.#found;
            }
            #tracking;
            get tracking() {
              return this.#tracking;
            }
            constructor() {
              super();
              if (!this.assignmentId) this.#assignmentId = this.sessionId;
              this.#texts.on('change', this.triggerEvent);
            }
            async load(assignmentId, activityId) {
              try {
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _coinsLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = new _tracking.Tracking({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.load({
                  id: activityId
                });
                this.#model = activity;
                _coinsLayout.LayoutBroker.addModel(this.#model);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _coinsLayout.LayoutBroker.canConsumeCredits = false;
              }
            }
            setAnswer(question, value) {
              this.#answers.set(question, value);
              this.trigger('set.answer');
            }
            async save(data) {
              super.ready = false;
              let params = {
                answers: data,
                assignmentId: this.assignmentId,
                activityId: this.#activityId
              };
              console.log(10, this.#paramsUri);
              await this.model.publish({
                params,
                type: 'assessment'
              });
              super.ready = true;
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
        hash: 2099369638,
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
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing", null);
            if (!ready) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              model: {
                assessment
              }
            } = store;
            const contextValue = {
              texts,
              fetching: store.fetching,
              store
            };
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
        hash: 1841192681,
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
                data: tracking
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX2NvaW5zTGF5b3V0IiwiX21vZGVsIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3RyYWNraW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXRlbXMiLCJwYXJhbXNVcmkiLCJhbnN3ZXJzIiwiTWFwIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsImZvdW5kIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJ0cmFja2luZyIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJvdmVybGF5IiwiYWRkTW9kZWwiLCJUcmFja2luZyIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImlkIiwiZSIsInNldEFuc3dlciIsInF1ZXN0aW9uIiwic2V0IiwidHJpZ2dlciIsInNhdmUiLCJkYXRhIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9zZWxlY3Rpb24iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWRTY3JlZW4iLCJhc3Nlc3NtZW50IiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJpY29uIiwiUGFnZUNvbnRhaW5lciIsIlNlbGVjdGlvbiIsImFzc2Vzc21lbnRzIiwiX2Zvcm0iLCJfYW5zd2VyIiwiX2ljb25zIiwiX2Zvcm1Db250ZXh0IiwiUmFkaW9JbnB1dCIsInNlbGVjdGVkIiwicXVlc3Rpb25JbmRleCIsImluZGV4IiwibGFiZWwiLCJvbkNoYW5nZSIsInVzZUZvcm1Db250ZXh0IiwiY2xzIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwiSWNvbiIsIklucHV0Q29udHJvbCIsImRvbmUiLCJvcHRpb24iLCJpc011bHRpcGxlIiwiQ29udHJvbCIsIkNoZWNrQm94IiwiQW5zd2VyIiwicmVxdWlyZWQiLCJGb3JtQ29udGV4dCIsIkZvcm0iLCJwcm9wcyIsIm9uU3VibWl0IiwicmVzdFByb3BzIiwiaXNWYWxpZCIsInNldElzVmFsaWQiLCJyZWYiLCJ1c2VSZWYiLCJ0b3RhbEFuc3dlcmVkIiwic2l6ZSIsImRpc2FibGVkIiwiaXNGb3JtUmVhZHkiLCJmb3JtIiwiY3VycmVudCIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJTdWJtaXRCdXR0b24iLCJzZXREaXNhYmxlZCIsImNoaWxkcmVuIiwiYXR0cnMiLCJCdXR0b24iLCJfcXVlc3Rpb24iLCJfc3VibWl0QnV0dG9uIiwiU2VsZWN0aW9uRm9ybSIsInNldEVycm9yIiwidG90YWxBbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldEZldGNoaW5nIiwicXVlc3Rpb25zIiwibGVuZ3RoIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJhbnN3ZXIiLCJtZXNzYWdlIiwib3V0cHV0IiwibWFwIiwiUXVlc3Rpb24iLCJrZXkiLCJ2YXJpYW50IiwiZmluaXNoIiwiX0lucHV0Iiwic2V0U2VsZWN0ZWQiLCJhbnN3ZXJJbmRleCIsImlucHV0cyIsIm9wdGlvbnMiLCJpIiwiX3Jlc3VsdHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJ2aWV3Iiwidmlld3MiLCJyZXN1bHRzIiwiUmVzdWx0cyIsInJlc291cmNlcyIsIm1hdGVyaWFscyIsInNlbGVjdGlvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2FsZXJ0IiwiY291bnRlcnMiLCJyZXNwb25zZXMiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJBbGVydCIsImNvcnJlY3QiLCJ0b3RhbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL2hlbHBlcnMvZ2V0LWZvcm0tZGF0YS50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9JbnB1dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvZm9ybS1jb250ZXh0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaXMtcmVhZHktZnVuY3Rpb24udHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvc3VibWl0LWJ1dHRvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL3F1ZXN0aW9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbnRlcmZhY2VzL2Fuc3dlci50c3giLCIvcXVlc3Rpb25zLnRzIiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBQ1hDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENB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