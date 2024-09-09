System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.19/main-layout.widget", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.19/components/ui", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
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
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp016Dev19MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp016Dev19MainLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_6 = _aimpactAilearnSdk100Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp016Dev19ComponentsUi) {
      dependency_8 = _aimpactAilearnApp016Dev19ComponentsUi;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_11 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_13 = _pragmateUi100Beta6Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_14 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.19"], ["@aimpact/ailearn-app", "0.1.6-dev.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.19/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/alert', dependency_13], ['@beyond-js/kernel/styles', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.19/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.19/assignments/assessment.widget');
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
        hash: 3437092998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
                const activity = await tracking.activities.load({
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
        hash: 2998685036,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJhZGRNb2RlbCIsIlRyYWNraW5nIiwiYWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwiaWQiLCJlIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJzZXQiLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9jb250ZXh0IiwiX3NlbGVjdGlvbiIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiYXNzZXNzbWVudCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiQWN0aXZpdHlIZWFkZXIiLCJ0aXRsZSIsImljb24iLCJQYWdlQ29udGFpbmVyIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwicmVzb3VyY2VzIiwibWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTixDQUFBQyxZQUFhO1lBQ2IsQ0FBQUMsVUFBVztZQUNYQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFILEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBSixLQUFNO1lBQ25CO1lBQ0EsSUFBSUssTUFBTUEsQ0FBQTtjQUNULE9BQU9SLE1BQUEsQ0FBQVMsSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFQLEtBQU0sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0U7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBZixVQUFBLEdBQUFB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