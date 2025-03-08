System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.17/main-layout.widget", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.1.0/tracking", "react@18.2.0", "@aimpact/ailearn-app@0.3.17/components/ui", "@aimpact/ailearn-app@0.3.17/entities/assignments/activities/base", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Form, SelectionForm, Selection, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_2 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp0317MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0317MainLayoutWidget;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_6 = _aimpactAilearnSdk110Tracking;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0317ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0317ComponentsUi;
    }, function (_aimpactAilearnApp0317EntitiesAssignmentsActivitiesBase) {
      dependency_9 = _aimpactAilearnApp0317EntitiesAssignmentsActivitiesBase;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_10 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Form) {
      dependency_11 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_12 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.17"], ["@aimpact/ailearn-app", "0.3.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.17/assignments/assessment",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['@aimpact/ailearn-app/entities/assignments/activities/base', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/alert', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-assessment",
        "vspecifier": "@aimpact/ailearn-app@0.3.17/assignments/assessment.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/assessment/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.17/assignments/assessment.widget');
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
        hash: 4038328634,
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
                const breadcrumb = [[activity.module.title, `/assignments/${assignmentId}`], [activity.title]];
                const backLink = `/assignments/${assignmentId}`;
                _mainLayout.LayoutBroker.set({
                  overlay: true,
                  breadcrumb,
                  backLink
                });
                super.ready = true;
                this.#found = true;
                globalThis.store = this;
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
        hash: 980942222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _base = require("@aimpact/ailearn-app/entities/assignments/activities/base");
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
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_base.ActivityHeader, {
              title: store.model.title,
              icon: "multiple-choice",
              type: store.model.type
            }), _react.default.createElement(_selection.Selection, {
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
        hash: 4268464722,
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
        hash: 209314747,
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
          var _components = require("pragmate-ui/components");
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
            const Control = views[store?.model.getMaterials().assessment.selection || view];
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: !!model.data,
              ternary: true,
              options: {
                true: _react.default.createElement(_results.Results, {
                  assessments: assessments
                }),
                false: _react.default.createElement(_form.SelectionForm, {
                  assessments: assessments
                })
              }
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
        hash: 2428134971,
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
              type: "info mt-1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiYXNzaWdubWVudElkIiwiYWN0aXZpdHlJZCIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiZ2V0Rm9ybURhdGEiLCJmb3JtRWxlbWVudCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5hbWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiX21haW5MYXlvdXQiLCJfbW9kZWwiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfdHJhY2tpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFuc3dlcnMiLCJNYXAiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5IiwiZm91bmQiLCJjYW5Db25zdW1lQ3JlZGl0cyIsInRyYWNraW5nIiwiY29uc3RydWN0b3IiLCJzZXNzaW9uSWQiLCJvbiIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImFkZE1vZGVsIiwiVHJhY2tpbmciLCJpZCIsImFjdGl2aXR5IiwiYWN0aXZpdGllcyIsImxvYWRBY3Rpdml0eSIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsInNldCIsImdsb2JhbFRoaXMiLCJlIiwic2V0QW5zd2VyIiwicXVlc3Rpb24iLCJ0cmlnZ2VyIiwic2F2ZSIsImRhdGEiLCJwYXJhbXMiLCJwdWJsaXNoIiwiX3JlYWN0IiwiQXNzZXNzbWVudENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFzc2Vzc21lbnRDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9iYXNlIiwiX2hvb2tzIiwiX2NvbnRleHQiLCJfc2VsZWN0aW9uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJhc3Nlc3NtZW50IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJQYWdlQ29udGFpbmVyIiwiQWN0aXZpdHlIZWFkZXIiLCJpY29uIiwiU2VsZWN0aW9uIiwiYXNzZXNzbWVudHMiLCJfZm9ybSIsIl9hbnN3ZXIiLCJfaWNvbnMiLCJfZm9ybUNvbnRleHQiLCJSYWRpb0lucHV0Iiwic2VsZWN0ZWQiLCJxdWVzdGlvbkluZGV4IiwiaW5kZXgiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidXNlRm9ybUNvbnRleHQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJJY29uIiwiSW5wdXRDb250cm9sIiwiZG9uZSIsIm9wdGlvbiIsImlzTXVsdGlwbGUiLCJDb250cm9sIiwiQ2hlY2tCb3giLCJBbnN3ZXIiLCJyZXF1aXJlZCIsIkZvcm1Db250ZXh0IiwiRm9ybSIsInByb3BzIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsInJlZiIsInVzZVJlZiIsInRvdGFsQW5zd2VyZWQiLCJzaXplIiwiZGlzYWJsZWQiLCJpc0Zvcm1SZWFkeSIsImZvcm0iLCJjdXJyZW50IiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tlZFJhZGlvR3JvdXBzIiwiU2V0IiwiaGFzIiwicmFkaW9Hcm91cCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzb21lIiwicmFkaW8iLCJhZGQiLCJIVE1MSW5wdXRFbGVtZW50IiwiaW5jbHVkZXMiLCJfY29tcG9uZW50cyIsIlN1Ym1pdEJ1dHRvbiIsInNldERpc2FibGVkIiwiY2hpbGRyZW4iLCJhdHRycyIsIkJ1dHRvbiIsIl9xdWVzdGlvbiIsIl9zdWJtaXRCdXR0b24iLCJTZWxlY3Rpb25Gb3JtIiwic2V0RXJyb3IiLCJ0b3RhbEFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0RmV0Y2hpbmciLCJxdWVzdGlvbnMiLCJsZW5ndGgiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldCIsImFuc3dlciIsIm1lc3NhZ2UiLCJvdXRwdXQiLCJtYXAiLCJRdWVzdGlvbiIsImtleSIsInZhcmlhbnQiLCJmaW5pc2giLCJfSW5wdXQiLCJzZXRTZWxlY3RlZCIsImFuc3dlckluZGV4IiwiaW5wdXRzIiwib3B0aW9ucyIsImkiLCJfcmVzdWx0cyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInZpZXciLCJ2aWV3cyIsInJlc3VsdHMiLCJSZXN1bHRzIiwiZ2V0TWF0ZXJpYWxzIiwic2VsZWN0aW9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5IiwidHJ1ZSIsImZhbHNlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfYWxlcnQiLCJjb3VudGVycyIsInJlc3BvbnNlcyIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIkFsZXJ0IiwiY29ycmVjdCIsInRvdGFsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaGVscGVycy9nZXQtZm9ybS1kYXRhLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL0lucHV0LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9mb3JtLWNvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9mb3JtL2NvbnRyb2xzL2luZGV4LnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9pcy1yZWFkeS1mdW5jdGlvbi50cyIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9jb250cm9scy9zdWJtaXQtYnV0dG9uLnRzeCIsIi90cy92aWV3cy9zZWxlY3Rpb24vZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2Zvcm0vcXVlc3Rpb24udHN4IiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9pbmRleC50c3giLCIvdHMvdmlld3Mvc2VsZWN0aW9uL2ludGVyZmFjZXMvYW5zd2VyLnRzeCIsIi9xdWVzdGlvbnMudHMiLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL3NlbGVjdGlvbi9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOLENBQUFDLFlBQWE7WUFDYixDQUFBQyxVQUFXO1lBQ1hDLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQVEsWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFKLEtBQU07WUFDbkI7WUFDQSxJQUFJSyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1IsTUFBQSxDQUFBUyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FB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