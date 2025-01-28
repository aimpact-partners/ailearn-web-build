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
        hash: 8000068,
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
                _mainLayout.LayoutBroker.backLink = `/assignments/${assignmentId}`;
                if (assignmentId === this.#assignmentId && this.#activityId === activityId) {
                  _mainLayout.LayoutBroker.addModel(this.#tracking);
                  return;
                }
                this.#assignmentId = assignmentId;
                this.#activityId = activityId;
                const tracking = _tracking.Tracking.get({
                  id: assignmentId
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
        hash: 130355638,
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
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJpZCIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImxvYWRBY3Rpdml0eSIsImUiLCJzZXRBbnN3ZXIiLCJxdWVzdGlvbiIsInNldCIsInRyaWdnZXIiLCJzYXZlIiwiZGF0YSIsInBhcmFtcyIsInB1Ymxpc2giLCJfcmVhY3QiLCJBc3Nlc3NtZW50Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXNzZXNzbWVudENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfc2VsZWN0aW9uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJhc3Nlc3NtZW50IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwiaWNvbiIsIlBhZ2VDb250YWluZXIiLCJTZWxlY3Rpb24iLCJhc3Nlc3NtZW50cyIsIl9mb3JtIiwiX2Fuc3dlciIsIl9pY29ucyIsIl9mb3JtQ29udGV4dCIsIlJhZGlvSW5wdXQiLCJzZWxlY3RlZCIsInF1ZXN0aW9uSW5kZXgiLCJpbmRleCIsImxhYmVsIiwib25DaGFuZ2UiLCJ1c2VGb3JtQ29udGV4dCIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsIkljb24iLCJJbnB1dENvbnRyb2wiLCJkb25lIiwib3B0aW9uIiwiaXNNdWx0aXBsZSIsIkNvbnRyb2wiLCJDaGVja0JveCIsIkFuc3dlciIsInJlcXVpcmVkIiwiRm9ybUNvbnRleHQiLCJGb3JtIiwicHJvcHMiLCJvblN1Ym1pdCIsInJlc3RQcm9wcyIsImlzVmFsaWQiLCJzZXRJc1ZhbGlkIiwicmVmIiwidXNlUmVmIiwidG90YWxBbnN3ZXJlZCIsInNpemUiLCJkaXNhYmxlZCIsImlzRm9ybVJlYWR5IiwiZm9ybSIsImN1cnJlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJjaGVja2VkUmFkaW9Hcm91cHMiLCJTZXQiLCJoYXMiLCJyYWRpb0dyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInNvbWUiLCJyYWRpbyIsImFkZCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJpbmNsdWRlcyIsIl9jb21wb25lbnRzIiwiU3VibWl0QnV0dG9uIiwic2V0RGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJzIiwiQnV0dG9uIiwiX3F1ZXN0aW9uIiwiX3N1Ym1pdEJ1dHRvbiIsIlNlbGVjdGlvbkZvcm0iLCJzZXRFcnJvciIsInRvdGFsQW5zd2VycyIsInNldEFuc3dlcnMiLCJzZXRGZXRjaGluZyIsInF1ZXN0aW9ucyIsImxlbmd0aCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwiYW5zd2VyIiwibWVzc2FnZSIsIm91dHB1dCIsIm1hcCIsIlF1ZXN0aW9uIiwia2V5IiwidmFyaWFudCIsImZpbmlzaCIsIl9JbnB1dCIsInNldFNlbGVjdGVkIiwiYW5zd2VySW5kZXgiLCJpbnB1dHMiLCJvcHRpb25zIiwiaSIsIl9yZXN1bHRzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwidmlldyIsInZpZXdzIiwicmVzdWx0cyIsIlJlc3VsdHMiLCJyZXNvdXJjZXMiLCJtYXRlcmlhbHMiLCJzZWxlY3Rpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9hbGVydCIsImNvdW50ZXJzIiwicmVzcG9uc2VzIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiQWxlcnQiLCJjb3JyZWN0IiwidG90YWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9oZWxwZXJzL2dldC1mb3JtLWRhdGEudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vSW5wdXQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2Zvcm0tY29udGV4dC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vY29udHJvbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2lzLXJlYWR5LWZ1bmN0aW9uLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL3N1Ym1pdC1idXR0b24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9xdWVzdGlvbi50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vaW50ZXJmYWNlcy9hbnN3ZXIudHN4IiwiL3F1ZXN0aW9ucy50cyIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3Mvc2VsZWN0aW9uL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBQ1hDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RTtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztV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