System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tabs", "@aimpact/ailearn-app@0.0.15/components/ui", "@aimpact/ailearn-app@0.0.15/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/empty", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_pragmateUi003Tabs) {
      dependency_13 = _pragmateUi003Tabs;
    }, function (_aimpactAilearnApp0015ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0015ComponentsUi;
    }, function (_aimpactAilearnApp0015ChatMessages) {
      dependency_15 = _aimpactAilearnApp0015ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi003Empty) {
      dependency_17 = _pragmateUi003Empty;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi003List) {
      dependency_19 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_20 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.15"], ["@aimpact/ailearn-app", "0.0.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.15/assignments/dashboard/participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/tabs', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['pragmate-ui/empty', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-user-detail-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.15/assignments/dashboard/participant.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/participant/${participantId}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.15/assignments/dashboard/participant.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1943985769,
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
            show() {
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'), this.uri.vars.get('participantId'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3090890478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat/wrapper");
          class StoreManager extends _model.ReactiveModel {
            #assessment;
            get assessment() {
              return this.#assessment;
            }
            #assessmentId;
            get assessmentId() {
              return this.#assessmentId;
            }
            #userId;
            get userId() {
              return this.#userId;
            }
            #players = {
              web: _voice.Voice,
              lab: _voice.VoiceLab // brings support to manage voice lab audios
            };

            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            #currentPlayer;
            #player = 'web';
            get player() {
              return this.#currentPlayer;
            }
            #model;
            get model() {
              return this.#model;
            }
            #accessed;
            get accessed() {
              return this.#accessed;
            }
            constructor() {
              super();
              this.#currentPlayer = new this.#players[this.#player]({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.ListenAppChanges);
            }
            ListenAppChanges = () => {
              this.#currentPlayer.set({
                rate: _wrapper.AppWrapper.audioSpeed,
                languuage: _wrapper.AppWrapper.language
              });
            };
            async load(id) {
              try {
                this.#assignmentId = id;
                this.#model = new _core.Assignment({
                  id
                });
                await this.#model.load({
                  id
                });
                this.#accessed = this.#model.accessed;
                globalThis._m = this.#model;
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            async refresh() {
              try {
                this.fetching = true;
                await this.#model.load({
                  id: this.#assignmentId
                });
                this.#accessed = this.#model.accessed;
                this.fetching = false;
                this.triggerEvent('data.updated');
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/activity/index
      **************************************/

      ims.set('./views/activity/index', {
        hash: 1325907829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Activity = Activity;
          var _react = require("react");
          var _chat = require("../materials/chat");
          var _materials = require("../materials");
          var _contexts = require("../contexts");
          var _assessment = require("../materials/assessment");
          var _spoken = require("../materials/spoken");
          function Activity({
            item
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _contexts.useStudentDashboardContext)();
            const types = {
              conversation: _chat.UserChat,
              assessment: _assessment.MaterialAssessment,
              spoken: _spoken.SpokenAnalysis
            };
            const Control = types[item.type] ?? _materials.DefaultMaterial;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "dashboard-activity__header"
            }, _react.default.createElement("h2", null, item.title), _react.default.createElement("section", {
              className: "activity-information"
            }, _react.default.createElement("span", null, _react.default.createElement("strong", null, texts.type, ":"), " ", item.type), item.subtype && _react.default.createElement("span", null, _react.default.createElement("strong", null, texts.subtype, ":"), " ", item.subtype)), _react.default.createElement("section", {
              className: "activity__description"
            }, _react.default.createElement("h3", null, texts.description), _react.default.createElement("p", {
              className: "p2"
            }, item.description))), _react.default.createElement(Control, {
              item: item
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/contexts
      ********************************/

      ims.set('./views/contexts', {
        hash: 2076317421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStudentDashboardContext = exports.StudentDashboardContext = void 0;
          var _react = require("react");
          const StudentDashboardContext = exports.StudentDashboardContext = _react.default.createContext({});
          const useStudentDashboardContext = () => _react.default.useContext(StudentDashboardContext);
          exports.useStudentDashboardContext = useStudentDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 400577484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _icons = require("pragmate-ui/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _pane = require("./pane");
          var _contexts = require("./contexts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("./activity");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [activities, setActivities] = _react.default.useState(store.model?.activities?.elements);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setActivities(store.model?.activities?.elements);
            }, 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              assessment: store.assessment,
              texts
            };
            const tabs = [];
            const panes = [];
            store.model.order.forEach(id => {
              const activity = store.model.activities.elements.get(id);
              tabs.push(_react.default.createElement(_tabs.Tab, {
                key: id
              }, activity.title));
              panes.push(_react.default.createElement(_pane.Pane, {
                key: `${id}.pane`
              }, _react.default.createElement(_activity.Activity, {
                item: activity
              })));
            });
            return _react.default.createElement(_contexts.StudentDashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageHeader, {
              className: "flex-container flex-space-between",
              breadcrumb: [['AI-Learn', '/'], ['General Dashboard', `/assignments/${store.assignmentId}/dashboard/classroom`], ['Detail', '']]
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: () => store.refresh()
            }))), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, panes))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/interfaces/selection-props
      **************************************************/

      ims.set('./views/interfaces/selection-props', {
        hash: 1293687720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/materials/assessment
      ********************************************/

      ims.set('./views/materials/assessment', {
        hash: 3321314054,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MaterialAssessment = MaterialAssessment;
          var _react = require("react");
          var _index = require("./index");
          var _multiple = require("./multiple");
          function MaterialAssessment({
            item
          }) {
            const controls = {
              'multiple-choice': _multiple.MultipleChoiceReport
            };
            const Control = controls.hasOwnProperty(item.subtype) ? controls[item.subtype] : _index.DefaultMaterial;
            return _react.default.createElement("div", null, _react.default.createElement(Control, {
              item: item
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/materials/chat
      **************************************/

      ims.set('./views/materials/chat', {
        hash: 769181650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserChat = UserChat;
          var _react = require("react");
          var _contexts = require("../contexts");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _messages = require("@aimpact/ailearn-app/chat/messages");
          var _empty = require("./empty");
          function UserChat({
            item
          }) {
            const {
              texts: {
                chat: texts
              },
              store
            } = (0, _contexts.useStudentDashboardContext)();
            let number = store.model.chatModel?.messages.items.length ?? 0;
            const [messages, setMessages] = _react.default.useState(number ? item.chatModel?.messages?.items : []);
            (0, _hooks.useBinder)([item], () => {
              console.log(33, store.model.chatModel);
              setMessages(store.model.chatModel?.messages.items);
            }, 'chat.loaded');
            console.log('messages', item, store.model, store.model?.chatModel?.id, messages, store.model.chatModel?.messages?.items);
            if (!item.chatModel?.messages?.items) return _react.default.createElement(_empty.EmptyMaterial, null);
            return _react.default.createElement(_messages.Messages, {
              store: store,
              messages: item.chatModel?.messages?.items,
              texts: texts
            });
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/materials/competencies
      **********************************************/

      ims.set('./views/materials/competencies', {
        hash: 1525925994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompetenciesFeedback = CompetenciesFeedback;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _contexts = require("../contexts");
          function CompetenciesFeedback() {
            const {
              store
            } = (0, _contexts.useStudentDashboardContext)();
            return _react.default.createElement(_markdown.Markdown, {
              content: store.assessment.competenciesFeedback
            });
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/materials/empty
      ***************************************/

      ims.set('./views/materials/empty', {
        hash: 2068649233,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _contexts = require("../contexts");
          function EmptyMaterial({
            message
          }) {
            const {
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            message = message ?? texts.activities.emtpy;
            return _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: "empty-section__container"
            }, _react.default.createElement("h3", null, message));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/materials/index
      ***************************************/

      ims.set('./views/materials/index', {
        hash: 3713624883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultMaterial = DefaultMaterial;
          var _react = require("react");
          function DefaultMaterial({
            item
          }) {
            return _react.default.createElement("div", null, item.description);
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/materials/multiple/counters
      ***************************************************/

      ims.set('./views/materials/multiple/counters', {
        hash: 3388803857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Counters = Counters;
          var _react = require("react");
          var _contexts = require("../../contexts");
          function Counters({
            item
          }) {
            const {
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            if (!item.data) return null;
            console.log('item.data', item.data);
            const {
              counters: {
                total,
                correct
              }
            } = item.data;
            return _react.default.createElement("section", {
              className: "assessment-counters flex-container my-15 flex-end primary-text"
            }, _react.default.createElement("div", null, texts.total, ": ", total, " / ", texts.correct, ": ", correct));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/materials/multiple/index
      ************************************************/

      ims.set('./views/materials/multiple/index', {
        hash: 646504304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceReport = void 0;
          var _react = require("react");
          var _contexts = require("../../contexts");
          var _questions = require("./questions");
          var _counters = require("./counters");
          var _empty = require("../empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          const MultipleChoiceReport = ({
            item
          }) => {
            const {
              store,
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            const [counters, setCounters] = _react.default.useState({});
            (0, _hooks.useBinder)([store], () => {
              setCounters({
                ...item.counters
              });
            });
            if (!item.data) {
              return _react.default.createElement(_empty.EmptyMaterial, {
                message: texts.activities.empty
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_counters.Counters, {
              item: item
            }), _react.default.createElement(_questions.AssessmentQuestions, {
              item: item,
              showAnswers: true
            }));
          };
          exports.MultipleChoiceReport = MultipleChoiceReport;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/materials/multiple/option
      *************************************************/

      ims.set('./views/materials/multiple/option', {
        hash: 3009204594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemOption = ItemOption;
          var _react = require("react");
          function ItemOption({
            option,
            i,
            data,
            showAnswers,
            question
          }) {
            let cls = `option-item${data.answer === i ? ' option--selected' : ''} `;
            if (data.answer === i) cls += `option${data.accuracy ? ' option--correct' : ' option--wrong'}`;
            if (showAnswers && i === question.correctAnswer) cls += ' option--correct';
            return _react.default.createElement("div", {
              key: option,
              className: cls
            }, _react.default.createElement("span", null, option));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/materials/multiple/questions
      ****************************************************/

      ims.set('./views/materials/multiple/questions', {
        hash: 3114050947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssessmentQuestions = void 0;
          var _react = require("react");
          var _option = require("./option");
          /*bundle*/
          const AssessmentQuestions = ({
            item,
            showAnswers
          }) => {
            const {
              data
            } = item;
            const responses = data.responses ?? [];
            const output = item.assessment.questions.map((question, index) => {
              const data = (responses && responses[index]) ?? {};
              const options = question.options.map((option, i) => {
                const attrs = {
                  i,
                  data,
                  question,
                  option,
                  showAnswers
                };
                return _react.default.createElement(_option.ItemOption, {
                  key: `question.${i}.option.${index}`,
                  ...attrs
                });
              });
              return _react.default.createElement("div", {
                key: question.text,
                className: "question__container question__container--results"
              }, _react.default.createElement("h5", null, question.text), options);
            });
            return _react.default.createElement(_react.default.Fragment, null, output);
          };
          exports.AssessmentQuestions = AssessmentQuestions;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/materials/spoken/index
      **********************************************/

      ims.set('./views/materials/spoken/index', {
        hash: 2693686310,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenAnalysis = SpokenAnalysis;
          var _react = require("react");
          var _contexts = require("../../contexts");
          var _list = require("pragmate-ui/list");
          var _empty = require("../empty");
          var _item = require("./item");
          function SpokenAnalysis({
            item
          }) {
            const {
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            if (!item.data) return _react.default.createElement(_empty.EmptyMaterial, {
              message: texts.activities.empty
            });
            const elements = Object.keys(item.data).map(key => item.data[key]);
            // const audioUrl = config.params.apis.ailearn + `/assessments/${store.assessmentId}/user/${store.userId}/audio`;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.assessments.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.assessments.oralText)), _react.default.createElement(_list.List, {
              container: "div",
              items: elements,
              control: _item.SpokenItem
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/materials/spoken/item
      *********************************************/

      ims.set('./views/materials/spoken/item', {
        hash: 3159067656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenItem = void 0;
          var _react = require("react");
          const SpokenItem = ({
            data
          }) => {
            const item = data;
            return _react.default.createElement("article", {
              className: "assessment__analysis-item"
            }, _react.default.createElement("section", {
              className: "item__icon__container"
            }, _react.default.createElement("span", null, item.icon)), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", {
              className: "p2"
            }, item.feedback)));
          };
          exports.SpokenItem = SpokenItem;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/pane
      ****************************/

      ims.set('./views/pane', {
        hash: 3679478205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pane = Pane;
          var _react = require("react");
          function Pane({
            children,
            className
          }) {
            const cls = `pane__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("article", {
              className: cls
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/results/index
      *************************************/

      ims.set('./views/results/index', {
        hash: 3428475853,
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
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/materials/multiple/index",
        "from": "MultipleChoiceReport",
        "name": "MultipleChoiceReport"
      }, {
        "im": "./views/materials/multiple/questions",
        "from": "AssessmentQuestions",
        "name": "AssessmentQuestions"
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
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MultipleChoiceReport') && _export("MultipleChoiceReport", MultipleChoiceReport = require ? require('./views/materials/multiple/index').MultipleChoiceReport : value);
        (require || prop === 'AssessmentQuestions') && _export("AssessmentQuestions", AssessmentQuestions = require ? require('./views/materials/multiple/questions').AssessmentQuestions : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwiY29uc3RydWN0b3IiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsImlkIiwiQXNzaWdubWVudCIsImdsb2JhbFRoaXMiLCJfbSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9pY29ucyIsIl90YWJzIiwiX3BhbmUiLCJfdWkiLCJfYWN0aXZpdHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwiYWN0aXZpdHkiLCJwdXNoIiwiVGFiIiwia2V5IiwiUGFuZSIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJQYW5lcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwiY2hhdCIsIm51bWJlciIsImNoYXRNb2RlbCIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJzZXRNZXNzYWdlcyIsImxvZyIsIkVtcHR5TWF0ZXJpYWwiLCJNZXNzYWdlcyIsIl9tYXJrZG93biIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiTWFya2Rvd24iLCJjb250ZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJtZXNzYWdlIiwiZW10cHkiLCJFbXB0eSIsIkNvdW50ZXJzIiwiZGF0YSIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiZW1wdHkiLCJGcmFnbWVudCIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJ0ZXh0IiwiX2xpc3QiLCJfaXRlbSIsImtleXMiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0IiwiTGlzdCIsImNvbnRhaW5lciIsImNvbnRyb2wiLCJTcG9rZW5JdGVtIiwic3ViamVjdCIsImZlZWRiYWNrIiwiY2hpbGRyZW4iLCJfYWxlcnQiLCJSZXN1bHRzIiwic2VsZWN0aW9uIiwiZXZhbHVhdGlvbiIsImFuc3dlcnMiLCJyZXN1bHRzIiwiQWxlcnQiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7O1lBRS9FO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFFQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixRQUFBLEdBQUFwQixPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRVyxNQUFBLENBQUFHLGFBQTJCO1lBQzVELENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUNBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBLENBQUFDLE9BQVEsR0FBRztjQUNWQyxHQUFHLEVBQUVQLE1BQUEsQ0FBQVEsS0FBSztjQUNWQyxHQUFHLEVBQUVULE1BQUEsQ0FBQVUsUUFBUSxDQUFDO2FBQ2Q7O1lBQ0QsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsYUFBYztZQUNkLENBQUFDLE1BQU8sR0FBRyxLQUFLO1lBQ2YsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFELGFBQWM7WUFDM0I7WUFFQSxDQUFBRSxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxDQUFBQyxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQUMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBSixhQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQU4sT0FBUSxDQUFDLElBQUksQ0FBQyxDQUFBTyxNQUFPLENBQUMsQ0FBQztnQkFDckRJLFFBQVEsRUFBRWhCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0QsUUFBUTtnQkFDN0JFLElBQUksRUFBRWxCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0U7ZUFDakIsQ0FBQztjQUVGbkIsUUFBQSxDQUFBaUIsVUFBVSxDQUFDRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQztZQUM1RDtZQUVBQSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLElBQUksQ0FBQyxDQUFBVixhQUFjLENBQUNXLEdBQUcsQ0FBQztnQkFDdkJKLElBQUksRUFBRWxCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0UsVUFBVTtnQkFDM0JJLFNBQVMsRUFBRXZCLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0Q7ZUFDdEIsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNdEIsSUFBSUEsQ0FBQzhCLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBZCxZQUFhLEdBQUdjLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBWCxLQUFNLEdBQUcsSUFBSWhCLEtBQUEsQ0FBQTRCLFVBQVUsQ0FBQztrQkFBRUQ7Z0JBQUUsQ0FBRSxDQUFDO2dCQUVwQyxNQUFNLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNuQixJQUFJLENBQUM7a0JBQUU4QjtnQkFBRSxDQUFFLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxDQUFBVixRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFFckNZLFVBQVUsQ0FBQ0MsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBZCxLQUFNO2dCQUMzQixJQUFJLENBQUNlLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDbkIsSUFBSSxDQUFDO2tCQUFFOEIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBZDtnQkFBYSxDQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxDQUFBSSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFDckMsSUFBSSxDQUFDb0IsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ0wsWUFBWSxDQUFDLGNBQWMsQ0FBQztlQUNqQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FsQyxPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkQsSUFBQWdELE1BQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBd0QsS0FBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUF5RCxVQUFBLEdBQUF6RCxPQUFBO1VBQ0EsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBMkQsV0FBQSxHQUFBM0QsT0FBQTtVQUNBLElBQUE0RCxPQUFBLEdBQUE1RCxPQUFBO1VBQ00sU0FBVTZELFFBQVFBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQ2hDLE1BQU07Y0FDTEMsS0FBSyxFQUFFO2dCQUFFQyxVQUFVLEVBQUVEO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFMLFNBQUEsQ0FBQU8sMEJBQTBCLEdBQUU7WUFDaEMsTUFBTUMsS0FBSyxHQUFHO2NBQ2JDLFlBQVksRUFBRVgsS0FBQSxDQUFBWSxRQUFRO2NBQ3RCOUMsVUFBVSxFQUFFcUMsV0FBQSxDQUFBVSxrQkFBa0I7Y0FDOUJDLE1BQU0sRUFBRVYsT0FBQSxDQUFBVzthQUNSO1lBRUQsTUFBTUMsT0FBTyxHQUFHTixLQUFLLENBQUNKLElBQUksQ0FBQ1csSUFBSSxDQUFDLElBQUloQixVQUFBLENBQUFpQixlQUFlO1lBRW5ELE9BQ0NuQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsY0FDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBNEIsR0FDN0N0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsYUFBS2QsSUFBSSxDQUFDZ0IsS0FBSyxDQUFNLEVBQ3JCdkIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFzQixHQUN4Q3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUNVLElBQUksRSxJQUFXLEUsS0FBRVgsSUFBSSxDQUFDVyxJQUFJLENBQ25DLEVBQ05YLElBQUksQ0FBQ2lCLE9BQU8sSUFDWnhCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUNnQixPQUFPLEUsSUFBVyxFLEtBQUVqQixJQUFJLENBQUNpQixPQUFPLENBRWhELENBQ1EsRUFFVnhCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBdUIsR0FDekN0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsYUFBS2IsS0FBSyxDQUFDaUIsV0FBVyxDQUFNLEVBQzVCekIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVmLElBQUksQ0FBQ2tCLFdBQVcsQ0FBSyxDQUMvQixDQUNGLEVBQ1R6QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0osT0FBTztjQUFDVixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBUCxNQUFBLEdBQUF2RCxPQUFBO1VBUU8sTUFBTWlGLHVCQUF1QixHQUFBakUsT0FBQSxDQUFBaUUsdUJBQUEsR0FBRzFCLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ08sYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUM3RSxNQUFNakIsMEJBQTBCLEdBQUdBLENBQUEsS0FBTVYsTUFBQSxDQUFBb0IsT0FBSyxDQUFDUSxVQUFVLENBQUNGLHVCQUF1QixDQUFDO1VBQUNqRSxPQUFBLENBQUFpRCwwQkFBQSxHQUFBQSwwQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUMUYsSUFBQW1CLGVBQUEsR0FBQXBGLE9BQUE7VUFDQSxJQUFBdUQsTUFBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFxRixXQUFBLEdBQUFyRixPQUFBO1VBQ0EsSUFBQXNGLE1BQUEsR0FBQXRGLE9BQUE7VUFDQSxJQUFBdUYsT0FBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUF3RixNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXlGLEtBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEYsS0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUEwRCxTQUFBLEdBQUExRCxPQUFBO1VBRUEsSUFBQTJGLEdBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBNEYsU0FBQSxHQUFBNUYsT0FBQTtVQUNPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQzJDLEtBQUssRUFBRTZDLFFBQVEsQ0FBQyxHQUFHdEMsTUFBQSxDQUFBb0IsT0FBSyxDQUFDbUIsUUFBUSxDQUFDekYsS0FBSyxDQUFDMkMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQytDLFVBQVUsRUFBRWhDLEtBQUssQ0FBQyxHQUFHLElBQUF3QixPQUFBLENBQUFTLFFBQVEsRUFBQ1osZUFBQSxDQUFBYSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUV0RCxNQUFNLENBQUNsQyxVQUFVLEVBQUVtQyxhQUFhLENBQUMsR0FBRzVDLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ21CLFFBQVEsQ0FBQ3pGLEtBQUssQ0FBQzRCLEtBQUssRUFBRStCLFVBQVUsRUFBRW9DLFFBQVEsQ0FBQztZQUNyRixJQUFBZCxNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDaEcsS0FBSyxDQUFDLEVBQUUsTUFBTXdGLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQzJDLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUFzQyxNQUFBLENBQUFlLFNBQVMsRUFDUixDQUFDaEcsS0FBSyxDQUFDLEVBQ1AsTUFBSztjQUNKOEYsYUFBYSxDQUFDOUYsS0FBSyxDQUFDNEIsS0FBSyxFQUFFK0IsVUFBVSxFQUFFb0MsUUFBUSxDQUFDO1lBQ2pELENBQUMsRUFDRCxjQUFjLENBQ2Q7WUFDRCxJQUFJLENBQUNwRCxLQUFLLElBQUksQ0FBQytDLFVBQVUsRUFBRSxPQUFPeEMsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNTLFdBQUEsQ0FBQWlCLE9BQU87Y0FBQ0MsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUUzRCxNQUFNQyxLQUFLLEdBQUc7Y0FDYm5HLEtBQUs7Y0FDTGlCLFVBQVUsRUFBRWpCLEtBQUssQ0FBQ2lCLFVBQVU7Y0FDNUJ5QzthQUNBO1lBRUQsTUFBTTBDLElBQUksR0FBRyxFQUFFO1lBQ2YsTUFBTUMsS0FBSyxHQUFHLEVBQUU7WUFFaEJyRyxLQUFLLENBQUM0QixLQUFLLENBQUMwRSxLQUFLLENBQUNDLE9BQU8sQ0FBQ2hFLEVBQUUsSUFBRztjQUM5QixNQUFNaUUsUUFBUSxHQUFHeEcsS0FBSyxDQUFDNEIsS0FBSyxDQUFDK0IsVUFBVSxDQUFDb0MsUUFBUSxDQUFDdkYsR0FBRyxDQUFDK0IsRUFBRSxDQUFDO2NBQ3hENkQsSUFBSSxDQUFDSyxJQUFJLENBQUN2RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsS0FBQSxDQUFBc0IsR0FBRztnQkFBQ0MsR0FBRyxFQUFFcEU7Y0FBRSxHQUFHaUUsUUFBUSxDQUFDL0IsS0FBSyxDQUFPLENBQUM7Y0FDL0M0QixLQUFLLENBQUNJLElBQUksQ0FDVHZELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxLQUFBLENBQUF1QixJQUFJO2dCQUFDRCxHQUFHLEVBQUUsR0FBR3BFLEVBQUU7Y0FBTyxHQUN0QlcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNnQixTQUFBLENBQUEvQixRQUFRO2dCQUFDQyxJQUFJLEVBQUUrQztjQUFRLEVBQUksQ0FDdEIsQ0FDUDtZQUNGLENBQUMsQ0FBQztZQUVGLE9BQ0N0RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLFNBQUEsQ0FBQXVCLHVCQUF1QixDQUFDaUMsUUFBUTtjQUFDVixLQUFLLEVBQUVBO1lBQUssR0FDN0NqRCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2UsR0FBQSxDQUFBd0IsVUFBVTtjQUNWdEMsU0FBUyxFQUFDLG1DQUFtQztjQUM3Q3VDLFVBQVUsRUFBRSxDQUNYLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixDQUFDLG1CQUFtQixFQUFFLGdCQUFnQi9HLEtBQUssQ0FBQ3lCLFlBQVksc0JBQXNCLENBQUMsRUFDL0UsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO1lBQ2QsR0FFRHlCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxjQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNZLE1BQUEsQ0FBQTZCLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1sSCxLQUFLLENBQUNnRCxPQUFPO1lBQUUsRUFBSSxDQUN4RCxDQUNNLEVBQ2JFLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxHQUFBLENBQUE2QixhQUFhLFFBQ2JqRSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsS0FBQSxDQUFBZ0MsYUFBYSxRQUNibEUsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNhLEtBQUEsQ0FBQWlDLElBQUksUUFBRWpCLElBQUksQ0FBUSxFQUNuQmxELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxLQUFBLENBQUFrQyxLQUFLLFFBQUVqQixLQUFLLENBQVMsQ0FDUCxDQUNELENBQ2tCO1VBRXJDOzs7Ozs7Ozs7OztVQ3JFQTs7VUFFQWtCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBN0csT0FBQTtZQUNBd0YsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFqRCxNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQThILE1BQUEsR0FBQTlILE9BQUE7VUFDQSxJQUFBK0gsU0FBQSxHQUFBL0gsT0FBQTtVQUVNLFNBQVVxRSxrQkFBa0JBLENBQUM7WUFBRVA7VUFBSSxDQUFFO1lBQzFDLE1BQU1rRSxRQUFRLEdBQUc7Y0FDaEIsaUJBQWlCLEVBQUVELFNBQUEsQ0FBQUU7YUFDbkI7WUFFRCxNQUFNekQsT0FBTyxHQUFHd0QsUUFBUSxDQUFDRSxjQUFjLENBQUNwRSxJQUFJLENBQUNpQixPQUFPLENBQUMsR0FBR2lELFFBQVEsQ0FBQ2xFLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQyxHQUFHK0MsTUFBQSxDQUFBcEQsZUFBZTtZQUVoRyxPQUNDbkIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGNBQ0NyQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0osT0FBTztjQUFDVixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBUCxNQUFBLEdBQUF2RCxPQUFBO1VBRUEsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBc0YsTUFBQSxHQUFBdEYsT0FBQTtVQUNBLElBQUFtSSxTQUFBLEdBQUFuSSxPQUFBO1VBQ0EsSUFBQW9JLE1BQUEsR0FBQXBJLE9BQUE7VUFDTSxTQUFVb0UsUUFBUUEsQ0FBQztZQUFFTjtVQUFJLENBQUU7WUFDaEMsTUFBTTtjQUNMQyxLQUFLLEVBQUU7Z0JBQUVzRSxJQUFJLEVBQUV0RTtjQUFLLENBQUU7Y0FDdEIxRDtZQUFLLENBQ0wsR0FBRyxJQUFBcUQsU0FBQSxDQUFBTywwQkFBMEIsR0FBRTtZQUNoQyxJQUFJcUUsTUFBTSxHQUFHakksS0FBSyxDQUFDNEIsS0FBSyxDQUFDc0csU0FBUyxFQUFFQyxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUM7WUFFOUQsTUFBTSxDQUFDRixRQUFRLEVBQUVHLFdBQVcsQ0FBQyxHQUFHcEYsTUFBQSxDQUFBb0IsT0FBSyxDQUFDbUIsUUFBUSxDQUFDd0MsTUFBTSxHQUFHeEUsSUFBSSxDQUFDeUUsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFN0YsSUFBQW5ELE1BQUEsQ0FBQWUsU0FBUyxFQUNSLENBQUN2QyxJQUFJLENBQUMsRUFDTixNQUFLO2NBQ0pYLE9BQU8sQ0FBQ3lGLEdBQUcsQ0FBQyxFQUFFLEVBQUV2SSxLQUFLLENBQUM0QixLQUFLLENBQUNzRyxTQUFTLENBQUM7Y0FDdENJLFdBQVcsQ0FBQ3RJLEtBQUssQ0FBQzRCLEtBQUssQ0FBQ3NHLFNBQVMsRUFBRUMsUUFBUSxDQUFDQyxLQUFLLENBQUM7WUFDbkQsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVEdEYsT0FBTyxDQUFDeUYsR0FBRyxDQUNWLFVBQVUsRUFDVjlFLElBQUksRUFDSnpELEtBQUssQ0FBQzRCLEtBQUssRUFDWDVCLEtBQUssQ0FBQzRCLEtBQUssRUFBRXNHLFNBQVMsRUFBRTNGLEVBQUUsRUFDMUI0RixRQUFRLEVBQ1JuSSxLQUFLLENBQUM0QixLQUFLLENBQUNzRyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxDQUN0QztZQUNELElBQUksQ0FBQzNFLElBQUksQ0FBQ3lFLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsT0FBT2xGLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsTUFBQSxDQUFBUyxhQUFhLE9BQUc7WUFDOUQsT0FBT3RGLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUQsU0FBQSxDQUFBVyxRQUFRO2NBQUN6SSxLQUFLLEVBQUVBLEtBQUs7Y0FBRW1JLFFBQVEsRUFBRTFFLElBQUksQ0FBQ3lFLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2NBQUUxRSxLQUFLLEVBQUVBO1lBQUssRUFBSTtVQUMzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQVIsTUFBQSxHQUFBdkQsT0FBQTtVQUVBLElBQUErSSxTQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFDTSxTQUFVZ0osb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRTNJO1lBQUssQ0FBRSxHQUFHLElBQUFxRCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBRTlDLE9BQU9WLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUUsU0FBQSxDQUFBRSxRQUFRO2NBQUNDLE9BQU8sRUFBRTdJLEtBQUssQ0FBQ2lCLFVBQVUsQ0FBQzZIO1lBQW9CLEVBQUk7VUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQTVGLE1BQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBb0ksTUFBQSxHQUFBcEksT0FBQTtVQUNBLElBQUEwRCxTQUFBLEdBQUExRCxPQUFBO1VBQ00sU0FBVTZJLGFBQWFBLENBQUM7WUFBRU87VUFBTyxDQUF3QjtZQUM5RCxNQUFNO2NBQUVyRjtZQUFLLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBQzlDbUYsT0FBTyxHQUFHQSxPQUFPLElBQUlyRixLQUFLLENBQUNDLFVBQVUsQ0FBQ3FGLEtBQUs7WUFDM0MsT0FDQzlGLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsTUFBQSxDQUFBa0IsS0FBSztjQUFDaEMsSUFBSSxFQUFDLE1BQU07Y0FBQ3pDLFNBQVMsRUFBQztZQUEwQixHQUN0RHRCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLd0UsT0FBTyxDQUFNLENBQ1g7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBN0YsTUFBQSxHQUFBdkQsT0FBQTtVQUVNLFNBQVUwRSxlQUFlQSxDQUFDO1lBQUVaO1VBQUksQ0FBRTtZQUN2QyxPQUFPUCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsY0FBTWQsSUFBSSxDQUFDa0IsV0FBVyxDQUFPO1VBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUF6QixNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFDTSxTQUFVdUosUUFBUUEsQ0FBQztZQUFFekY7VUFBSSxDQUFFO1lBQ2hDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUwsU0FBQSxDQUFBTywwQkFBMEIsR0FBRTtZQUM5QyxJQUFJLENBQUNILElBQUksQ0FBQzBGLElBQUksRUFBRSxPQUFPLElBQUk7WUFDM0JyRyxPQUFPLENBQUN5RixHQUFHLENBQUMsV0FBVyxFQUFFOUUsSUFBSSxDQUFDMEYsSUFBSSxDQUFDO1lBQ25DLE1BQU07Y0FDTEMsUUFBUSxFQUFFO2dCQUFFQyxLQUFLO2dCQUFFQztjQUFPO1lBQUUsQ0FDNUIsR0FBRzdGLElBQUksQ0FBQzBGLElBQUk7WUFDYixPQUNDakcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFnRSxHQUNsRnRCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxjQUNFYixLQUFLLENBQUMyRixLQUFLLEUsTUFBSUEsS0FBSyxFLE9BQUszRixLQUFLLENBQUM0RixPQUFPLEUsTUFBSUEsT0FBTyxDQUM3QyxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFwRyxNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFDQSxJQUFBNEosVUFBQSxHQUFBNUosT0FBQTtVQUNBLElBQUE2SixTQUFBLEdBQUE3SixPQUFBO1VBRUEsSUFBQW9JLE1BQUEsR0FBQXBJLE9BQUE7VUFDQSxJQUFBc0YsTUFBQSxHQUFBdEYsT0FBQTtVQUVPO1VBQVcsTUFBTWlJLG9CQUFvQixHQUE4QkEsQ0FBQztZQUFFbkU7VUFBSSxDQUFFLEtBQUk7WUFDdEYsTUFBTTtjQUFFekQsS0FBSztjQUFFMEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUwsU0FBQSxDQUFBTywwQkFBMEIsR0FBRTtZQUVyRCxNQUFNLENBQUN3RixRQUFRLEVBQUVLLFdBQVcsQ0FBQyxHQUFHdkcsTUFBQSxDQUFBb0IsT0FBSyxDQUFDbUIsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNsRCxJQUFBUixNQUFBLENBQUFlLFNBQVMsRUFBQyxDQUFDaEcsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QnlKLFdBQVcsQ0FBQztnQkFBRSxHQUFHaEcsSUFBSSxDQUFDMkY7Y0FBUSxDQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDM0YsSUFBSSxDQUFDMEYsSUFBSSxFQUFFO2NBQ2YsT0FBT2pHLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0QsTUFBQSxDQUFBUyxhQUFhO2dCQUFDTyxPQUFPLEVBQUVyRixLQUFLLENBQUNDLFVBQVUsQ0FBQytGO2NBQUssRUFBSTs7WUFFMUQsT0FDQ3hHLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFBckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBcUYsUUFBQSxRQUNDekcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNpRixTQUFBLENBQUFOLFFBQVE7Y0FBQ3pGLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQ3hCUCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2dGLFVBQUEsQ0FBQUssbUJBQW1CO2NBQUNuRyxJQUFJLEVBQUVBLElBQUk7Y0FBRW9HLFdBQVcsRUFBRTtZQUFJLEVBQUksQ0FDcEQ7VUFFTCxDQUFDO1VBQUNsSixPQUFBLENBQUFpSCxvQkFBQSxHQUFBQSxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkYsSUFBQTFFLE1BQUEsR0FBQXZELE9BQUE7VUFDTSxTQUFVbUssVUFBVUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLENBQUM7WUFBRWIsSUFBSTtZQUFFVSxXQUFXO1lBQUVJO1VBQVEsQ0FBRTtZQUNwRSxJQUFJQyxHQUFHLEdBQUcsY0FBY2YsSUFBSSxDQUFDZ0IsTUFBTSxLQUFLSCxDQUFDLEdBQUcsbUJBQW1CLEdBQUcsRUFBRSxHQUFHO1lBRXZFLElBQUliLElBQUksQ0FBQ2dCLE1BQU0sS0FBS0gsQ0FBQyxFQUFFRSxHQUFHLElBQUksU0FBU2YsSUFBSSxDQUFDaUIsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFO1lBQzlGLElBQUlQLFdBQVcsSUFBSUcsQ0FBQyxLQUFLQyxRQUFRLENBQUNJLGFBQWEsRUFBRUgsR0FBRyxJQUFJLGtCQUFrQjtZQUUxRSxPQUNDaEgsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtvQyxHQUFHLEVBQUVvRCxNQUFNO2NBQUV2RixTQUFTLEVBQUUwRjtZQUFHLEdBQy9CaEgsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU93RixNQUFNLENBQVEsQ0FDaEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBN0csTUFBQSxHQUFBdkQsT0FBQTtVQUVBLElBQUEySyxPQUFBLEdBQUEzSyxPQUFBO1VBRU87VUFBVyxNQUFNaUssbUJBQW1CLEdBQThCQSxDQUFDO1lBQUVuRyxJQUFJO1lBQUVvRztVQUFXLENBQUUsS0FBSTtZQUNsRyxNQUFNO2NBQUVWO1lBQUksQ0FBRSxHQUFHMUYsSUFBSTtZQUVyQixNQUFNOEcsU0FBUyxHQUFHcEIsSUFBSSxDQUFDb0IsU0FBUyxJQUFJLEVBQUU7WUFDdEMsTUFBTUMsTUFBTSxHQUFHL0csSUFBSSxDQUFDeEMsVUFBVSxDQUFDd0osU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1QsUUFBUSxFQUFFVSxLQUFLLEtBQUk7Y0FDaEUsTUFBTXhCLElBQUksR0FBRyxDQUFDb0IsU0FBUyxJQUFJQSxTQUFTLENBQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Y0FDbEQsTUFBTUMsT0FBTyxHQUFHWCxRQUFRLENBQUNXLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDLENBQUNYLE1BQU0sRUFBRUMsQ0FBQyxLQUFJO2dCQUNsRCxNQUFNYSxLQUFLLEdBQUc7a0JBQUViLENBQUM7a0JBQUViLElBQUk7a0JBQUVjLFFBQVE7a0JBQUVGLE1BQU07a0JBQUVGO2dCQUFXLENBQUU7Z0JBQ3hELE9BQU8zRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQytGLE9BQUEsQ0FBQVIsVUFBVTtrQkFBQ25ELEdBQUcsRUFBRSxZQUFZcUQsQ0FBQyxXQUFXVyxLQUFLLEVBQUU7a0JBQUEsR0FBTUU7Z0JBQUssRUFBSTtjQUN2RSxDQUFDLENBQUM7Y0FFRixPQUNDM0gsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2dCQUFLb0MsR0FBRyxFQUFFc0QsUUFBUSxDQUFDYSxJQUFJO2dCQUFFdEcsU0FBUyxFQUFDO2NBQWtELEdBQ3BGdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGFBQUswRixRQUFRLENBQUNhLElBQUksQ0FBTSxFQUN2QkYsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBQ0YsT0FBTzFILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFBckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBcUYsUUFBQSxRQUFHYSxNQUFNLENBQUk7VUFDckIsQ0FBQztVQUFDN0osT0FBQSxDQUFBaUosbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJGLElBQUExRyxNQUFBLEdBQUF2RCxPQUFBO1VBQ0EsSUFBQTBELFNBQUEsR0FBQTFELE9BQUE7VUFHQSxJQUFBb0wsS0FBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUFvSSxNQUFBLEdBQUFwSSxPQUFBO1VBQ0EsSUFBQXFMLEtBQUEsR0FBQXJMLE9BQUE7VUFDTSxTQUFVdUUsY0FBY0EsQ0FBQztZQUFFVDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBRTlDLElBQUksQ0FBQ0gsSUFBSSxDQUFDMEYsSUFBSSxFQUFFLE9BQU9qRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3dELE1BQUEsQ0FBQVMsYUFBYTtjQUFDTyxPQUFPLEVBQUVyRixLQUFLLENBQUNDLFVBQVUsQ0FBQytGO1lBQUssRUFBSTtZQUV6RSxNQUFNM0QsUUFBUSxHQUFHd0IsTUFBTSxDQUFDMEQsSUFBSSxDQUFDeEgsSUFBSSxDQUFDMEYsSUFBSSxDQUFDLENBQUN1QixHQUFHLENBQUMvRCxHQUFHLElBQUlsRCxJQUFJLENBQUMwRixJQUFJLENBQUN4QyxHQUFHLENBQUMsQ0FBQztZQUVsRTtZQUVBLE9BQ0N6RCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdDLEdBQzlDdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGFBQUtiLEtBQUssQ0FBQ3dILFdBQVcsQ0FBQ3pHLEtBQUssQ0FBTSxFQUNsQ3ZCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFZCxLQUFLLENBQUN3SCxXQUFXLENBQUNDLFFBQVEsQ0FBSyxDQUMxQyxFQUdUakksTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUN3RyxLQUFBLENBQUFLLElBQUk7Y0FBQ0MsU0FBUyxFQUFDLEtBQUs7Y0FBQ2pELEtBQUssRUFBRXJDLFFBQVE7Y0FBRXVGLE9BQU8sRUFBRU4sS0FBQSxDQUFBTztZQUFVLEVBQUksQ0FDekQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQXJJLE1BQUEsR0FBQXZELE9BQUE7VUFDTyxNQUFNNEwsVUFBVSxHQUFHQSxDQUFDO1lBQUVwQztVQUFJLENBQUUsS0FBSTtZQUN0QyxNQUFNMUYsSUFBSSxHQUFHMEYsSUFBSTtZQUNqQixPQUNDakcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUEyQixHQUM3Q3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBdUIsR0FDekN0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFBT2QsSUFBSSxDQUFDd0QsSUFBSSxDQUFRLENBQ2YsRUFDVi9ELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZCxJQUFJLENBQUMrSCxPQUFPLENBQU0sQ0FDZixFQUNUdEksTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVmLElBQUksQ0FBQ2dJLFFBQVEsQ0FBSyxDQUM1QixDQUNEO1VBRVosQ0FBQztVQUFDOUssT0FBQSxDQUFBNEssVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRixJQUFBckksTUFBQSxHQUFBdkQsT0FBQTtVQUNNLFNBQVVpSCxJQUFJQSxDQUFDO1lBQUU4RSxRQUFRO1lBQUVsSDtVQUFTLENBQStDO1lBQ3hGLE1BQU0wRixHQUFHLEdBQUcsa0JBQWtCMUYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoRSxPQUFPdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBRTBGO1lBQUcsR0FBR3dCLFFBQVEsQ0FBVztVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBeEksTUFBQSxHQUFBdkQsT0FBQTtVQUVBLElBQUFnTSxNQUFBLEdBQUFoTSxPQUFBO1VBQ087VUFBVyxNQUFNaU0sT0FBTyxHQUE4QkEsQ0FBQztZQUFFNUwsS0FBSztZQUFFMEQsS0FBSztZQUFFd0g7VUFBVyxDQUFFLEtBQUk7WUFDOUYsTUFBTTtjQUNMVyxTQUFTLEVBQUU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZBLFVBQVUsRUFBRTtrQkFBRTFDO2dCQUFRO2NBQUU7WUFDeEIsQ0FDRCxHQUFHcEosS0FBSztZQUVULE1BQU13SyxNQUFNLEdBQUdVLFdBQVcsQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1QsUUFBUSxFQUFFVSxLQUFLLEtBQUk7Y0FDNUQsTUFBTXhCLElBQUksR0FBRzJDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDcEIsS0FBSyxDQUFDO2NBQ3RDLE1BQU1DLE9BQU8sR0FBR1gsUUFBUSxDQUFDVyxPQUFPLENBQUNGLEdBQUcsQ0FBQyxDQUFDWCxNQUFNLEVBQUVDLENBQUMsS0FBSTtnQkFDbEQsSUFBSUUsR0FBRyxHQUFHLGNBQWNmLElBQUksQ0FBQ2dCLE1BQU0sS0FBS0gsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRztnQkFDdkUsSUFBSWIsSUFBSSxDQUFDZ0IsTUFBTSxLQUFLSCxDQUFDLEVBQUU7a0JBQ3RCRSxHQUFHLElBQUksU0FBU2YsSUFBSSxDQUFDaUIsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFOztnQkFHeEUsT0FDQ2xILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtrQkFBS29DLEdBQUcsRUFBRW9ELE1BQU07a0JBQUV2RixTQUFTLEVBQUUwRjtnQkFBRyxHQUMvQmhILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUFPd0YsTUFBTSxDQUFRLENBQ2hCO2NBRVIsQ0FBQyxDQUFDO2NBQ0YsT0FDQzdHLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS29DLEdBQUcsRUFBRXNELFFBQVEsQ0FBQ2EsSUFBSTtnQkFBRXRHLFNBQVMsRUFBQztjQUFrRCxHQUNwRnRCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMEYsUUFBUSxDQUFDYSxJQUFJLENBQU0sRUFDdkJGLE9BQU8sQ0FDSDtZQUVSLENBQUMsQ0FBQztZQUVGLE9BQ0MxSCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGFBQUtiLEtBQUssQ0FBQ3NJLE9BQU8sQ0FBTSxFQUN4QjlJLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0gsTUFBQSxDQUFBTSxLQUFLO2NBQUM3SCxJQUFJLEVBQUM7WUFBTSxHQUNqQmxCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMUR0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsaUJBQVNiLEtBQUssQ0FBQzRGLE9BQU8sRSxJQUFXLEVBQ2pDcEcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGtCQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU82RSxRQUFRLENBQUNFLE9BQU8sQ0FBUSxFLEtBQUNwRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFBTzZFLFFBQVEsQ0FBQ0MsS0FBSyxDQUFRLENBQ3BELENBQ0wsRUFDTm5HLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMUR0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsaUJBQVNiLEtBQUssQ0FBQ3dJLEtBQUssRSxJQUFXLEVBQy9CaEosTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGtCQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU82RSxRQUFRLENBQUM4QyxLQUFLLENBQVEsRSxLQUFDaEosTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU82RSxRQUFRLENBQUNDLEtBQUssQ0FBUSxDQUNsRCxDQUNMLENBQ0MsRUFDUG1CLE1BQU0sQ0FDRjtVQUVSLENBQUM7VUFBQzdKLE9BQUEsQ0FBQWlMLE9BQUEsR0FBQUEsT0FBQSJ9