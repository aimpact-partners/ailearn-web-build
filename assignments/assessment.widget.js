System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.3.1/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Form: void 0,
    SelectionForm: void 0,
    Selection: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_8 = _aimpactAilearnApp031ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_11 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/assessment.widget');
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
        hash: 2300826494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _model = require("@aimpact/reactive/model");
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
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.canConsumeCredits = true;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  assignmentId
                });
                this.#tracking = tracking;
                const activity = await tracking.activities.loadActivity({
                  id: activityId
                });
                this.#model = activity;
                _mainLayout.LayoutBroker.addModel(this.#tracking);
                super.ready = true;
                this.#found = true;
                this.triggerEvent();
              } catch (e) {
                super.ready = true;
                this.#found = false;
                _mainLayout.LayoutBroker.canConsumeCredits = false;
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
        hash: 2618700156,
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
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
            }, _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_selection.Selection, {
              assessments: assessment
            }))));
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
        hash: 4173962036,
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
        hash: 2276256325,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwibG9hZEFjdGl2aXR5IiwiaWQiLCJlIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9jb250ZXh0IiwiX3NlbGVjdGlvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsVUFBVztZQUNYQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ0EsSUFBSUssTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxD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