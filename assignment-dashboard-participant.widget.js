System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.21/components/ui", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/tabs", "@aimpact/ailearn-app@0.0.21/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0,
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
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
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
    }, function (_aimpactAilearnApp0021ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0021ComponentsUi;
    }, function (_pragmateUi003Image) {
      dependency_10 = _pragmateUi003Image;
    }, function (_pragmateUi003Icons) {
      dependency_11 = _pragmateUi003Icons;
    }, function (_pragmateUi003Components) {
      dependency_12 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_13 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Tabs) {
      dependency_15 = _pragmateUi003Tabs;
    }, function (_aimpactAilearnApp0021ChatMessages) {
      dependency_16 = _aimpactAilearnApp0021ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi003List) {
      dependency_19 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_20 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/tabs', dependency_15], ['@aimpact/ailearn-app/chat/messages', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2265801594,
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
              this.#store = new _store.StoreManager({
                id: this.attributes.get('id'),
                participantId: this.attributes.get('participant-id')
              });
              return this.#store;
            }
            get Widget() {
              return _views.Widget;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2678712100,
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
            constructor({
              id,
              participantId
            }) {
              super();
              this.#currentPlayer = new this.#players[this.#player]({
                language: _wrapper.AppWrapper.language,
                rate: _wrapper.AppWrapper.audioSpeed
              });
              _wrapper.AppWrapper.on('app.settings.change', this.ListenAppChanges);
              this.load(id, participantId);
            }
            ListenAppChanges = () => {
              this.#currentPlayer.set({
                rate: _wrapper.AppWrapper.audioSpeed,
                languuage: _wrapper.AppWrapper.language
              });
            };
            async load(id, userId) {
              try {
                this.#assignmentId = id;
                this.#model = new _core.Assignment({
                  id
                });
                await this.#model.load({
                  id,
                  userId
                });
                this.#userId = userId;
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
        hash: 3970301262,
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
              className: "activity__description mb-30"
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1021249915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          function Header({
            store
          }) {
            const [studentDetails, setStudentDetails] = _react.default.useState(JSON.parse(localStorage.getItem('student.details')));
            const {
              assignmentId
            } = store;
            return _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignments', `/assignments/${assignmentId}/coach/list`], ['Dashboard', `/assignments/${assignmentId}/dashboard/classroom`], [studentDetails.name]]
            }, _react.default.createElement("div", null, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: () => store.refresh()
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2683783737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _tabs = require("pragmate-ui/tabs");
          var _pane = require("./pane");
          var _contexts = require("./contexts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("./activity");
          var _header = require("./header");
          /*bundle*/
          function Widget({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [studentDetails, setStudentDetails] = (0, _react.useState)(JSON.parse(localStorage.getItem('student.details')));
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
            function applyEllipsis(text, maxLength) {
              return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
            }
            store.model.order.forEach(id => {
              const activity = store.model.activities.elements.get(id);
              tabs.push(_react.default.createElement(_tabs.Tab, {
                key: id
              }, applyEllipsis(activity.title, 23)));
              panes.push(_react.default.createElement(_pane.Pane, {
                key: `${id}.pane`
              }, _react.default.createElement(_activity.Activity, {
                item: activity
              })));
            });
            return _react.default.createElement(_contexts.StudentDashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_header.Header, {
              store: store
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, panes))));
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
        hash: 1387713767,
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
              setMessages(store.model.chatModel?.messages.items);
            }, 'chat.loaded');
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
        hash: 731603979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _contexts = require("../contexts");
          function EmptyMaterial({
            message
          }) {
            const {
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            message = message ?? texts.activities.empty;
            return _react.default.createElement(_ui.EmptyCard, {
              icon: "info",
              text: message,
              className: "empty-section__container"
            });
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
        hash: 2768502476,
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
        "from": "Widget",
        "name": "Widget"
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
        (require || prop === 'Widget') && _export("Widget", Widget = require ? require('./views/index').Widget : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsImdsb2JhbFRoaXMiLCJfbSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIkhlYWRlciIsInN0dWRlbnREZXRhaWxzIiwic2V0U3R1ZGVudERldGFpbHMiLCJ1c2VTdGF0ZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIm5hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfdGFicyIsIl9wYW5lIiwiX2FjdGl2aXR5IiwiX2hlYWRlciIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwiYXBwbHlFbGxpcHNpcyIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm9yZGVyIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwicHVzaCIsIlRhYiIsImtleSIsIlBhbmUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJjaGF0IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsIkNvdW50ZXJzIiwiZGF0YSIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiRnJhZ21lbnQiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsImtleXMiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0IiwiTGlzdCIsImNvbnRhaW5lciIsImNvbnRyb2wiLCJTcG9rZW5JdGVtIiwic3ViamVjdCIsImZlZWRiYWNrIiwiY2hpbGRyZW4iLCJfYWxlcnQiLCJSZXN1bHRzIiwic2VsZWN0aW9uIiwiZXZhbHVhdGlvbiIsImFuc3dlcnMiLCJyZXN1bHRzIiwiQWxlcnQiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDO2dCQUM5QkMsRUFBRSxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM3QkMsYUFBYSxFQUFFLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCO2VBQ25ELENBQUM7Y0FDRixPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUEsSUFBSU8sTUFBTUEsQ0FBQTtjQUNULE9BQU9WLE1BQUEsQ0FBQVUsTUFBTTtZQUNkOztVQUNBQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkQsSUFBQVcsS0FBQSxHQUFBZCxPQUFBO1VBRUEsSUFBQWUsTUFBQSxHQUFBZixPQUFBO1VBRUEsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVEsTUFBQSxDQUFBRyxhQUEyQjtZQUM1RCxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFDQSxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxPQUFRLEdBQUc7Y0FDVkMsR0FBRyxFQUFFUCxNQUFBLENBQUFRLEtBQUs7Y0FDVkMsR0FBRyxFQUFFVCxNQUFBLENBQUFVLFFBQVEsQ0FBQzthQUNkOztZQUNELENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFDLGFBQWM7WUFDZCxDQUFBQyxNQUFPLEdBQUcsS0FBSztZQUNmLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBRCxhQUFjO1lBQzNCO1lBRUEsQ0FBQUUsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQUMsUUFBUztZQUNULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUFDLFlBQVk7Y0FBRXhCLEVBQUU7Y0FBRUc7WUFBYSxDQUFFO2NBQ2hDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBaUIsYUFBYyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFOLE9BQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQU8sTUFBTyxDQUFDLENBQUM7Z0JBQ3JESSxRQUFRLEVBQUVoQixRQUFBLENBQUFpQixVQUFVLENBQUNELFFBQVE7Z0JBQzdCRSxJQUFJLEVBQUVsQixRQUFBLENBQUFpQixVQUFVLENBQUNFO2VBQ2pCLENBQUM7Y0FFRm5CLFFBQUEsQ0FBQWlCLFVBQVUsQ0FBQ0csRUFBRSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM7Y0FDM0QsSUFBSSxDQUFDQyxJQUFJLENBQUMvQixFQUFFLEVBQUVHLGFBQWEsQ0FBQztZQUM3QjtZQUVBMkIsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztjQUN2QixJQUFJLENBQUMsQ0FBQVYsYUFBYyxDQUFDWSxHQUFHLENBQUM7Z0JBQ3ZCTCxJQUFJLEVBQUVsQixRQUFBLENBQUFpQixVQUFVLENBQUNFLFVBQVU7Z0JBQzNCSyxTQUFTLEVBQUV4QixRQUFBLENBQUFpQixVQUFVLENBQUNEO2VBQ3RCLENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTU0sSUFBSUEsQ0FBQy9CLEVBQUUsRUFBRWEsTUFBTTtjQUNwQixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBTSxZQUFhLEdBQUduQixFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQXNCLEtBQU0sR0FBRyxJQUFJaEIsS0FBQSxDQUFBNEIsVUFBVSxDQUFDO2tCQUFFbEM7Z0JBQUUsQ0FBRSxDQUFDO2dCQUVwQyxNQUFNLElBQUksQ0FBQyxDQUFBc0IsS0FBTSxDQUFDUyxJQUFJLENBQUM7a0JBQUUvQixFQUFFO2tCQUFFYTtnQkFBTSxDQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Z0JBQ3JCLElBQUksQ0FBQyxDQUFBVSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFFckNZLFVBQVUsQ0FBQ0MsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFBZCxLQUFNO2dCQUMzQixJQUFJLENBQUNlLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQyxDQUFBckIsS0FBTSxDQUFDUyxJQUFJLENBQUM7a0JBQUUvQixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUFtQjtnQkFBYSxDQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxDQUFBSSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFDckMsSUFBSSxDQUFDb0IsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ0wsWUFBWSxDQUFDLGNBQWMsQ0FBQztlQUNqQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7O1VBQ0FsQyxPQUFBLENBQUFOLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkQsSUFBQTZDLE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBcUQsS0FBQSxHQUFBckQsT0FBQTtVQUNBLElBQUFzRCxVQUFBLEdBQUF0RCxPQUFBO1VBQ0EsSUFBQXVELFNBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBd0QsV0FBQSxHQUFBeEQsT0FBQTtVQUNBLElBQUF5RCxPQUFBLEdBQUF6RCxPQUFBO1VBQ00sU0FBVTBELFFBQVFBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQ2hDLE1BQU07Y0FDTEMsS0FBSyxFQUFFO2dCQUFFQyxVQUFVLEVBQUVEO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFMLFNBQUEsQ0FBQU8sMEJBQTBCLEdBQUU7WUFDaEMsTUFBTUMsS0FBSyxHQUFHO2NBQ2JDLFlBQVksRUFBRVgsS0FBQSxDQUFBWSxRQUFRO2NBQ3RCOUMsVUFBVSxFQUFFcUMsV0FBQSxDQUFBVSxrQkFBa0I7Y0FDOUJDLE1BQU0sRUFBRVYsT0FBQSxDQUFBVzthQUNSO1lBRUQsTUFBTUMsT0FBTyxHQUFHTixLQUFLLENBQUNKLElBQUksQ0FBQ1csSUFBSSxDQUFDLElBQUloQixVQUFBLENBQUFpQixlQUFlO1lBRW5ELE9BQ0NuQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsY0FDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBNEIsR0FDN0N0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsYUFBS2QsSUFBSSxDQUFDZ0IsS0FBSyxDQUFNLEVBQ3JCdkIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFzQixHQUN4Q3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUNVLElBQUksRSxJQUFXLEUsS0FBRVgsSUFBSSxDQUFDVyxJQUFJLENBQ25DLEVBQ05YLElBQUksQ0FBQ2lCLE9BQU8sSUFDWnhCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUNnQixPQUFPLEUsSUFBVyxFLEtBQUVqQixJQUFJLENBQUNpQixPQUFPLENBRWhELENBQ1EsRUFFVnhCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBNkIsR0FDL0N0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsYUFBS2IsS0FBSyxDQUFDaUIsV0FBVyxDQUFNLEVBQzVCekIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVmLElBQUksQ0FBQ2tCLFdBQVcsQ0FBSyxDQUMvQixDQUNGLEVBQ1R6QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0osT0FBTztjQUFDVixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNsQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBUCxNQUFBLEdBQUFwRCxPQUFBO1VBUU8sTUFBTThFLHVCQUF1QixHQUFBakUsT0FBQSxDQUFBaUUsdUJBQUEsR0FBRzFCLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ08sYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUM3RSxNQUFNakIsMEJBQTBCLEdBQUdBLENBQUEsS0FBTVYsTUFBQSxDQUFBb0IsT0FBSyxDQUFDUSxVQUFVLENBQUNGLHVCQUF1QixDQUFDO1VBQUNqRSxPQUFBLENBQUFpRCwwQkFBQSxHQUFBQSwwQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUMUYsSUFBQVYsTUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUFpRixHQUFBLEdBQUFqRixPQUFBO1VBRUEsSUFBQWtGLE1BQUEsR0FBQWxGLE9BQUE7VUFFTSxTQUFVbUYsTUFBTUEsQ0FBQztZQUFFOUU7VUFBSyxDQUFFO1lBQy9CLE1BQU0sQ0FBQytFLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBR2pDLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ2MsUUFBUSxDQUN6REMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FDbkQ7WUFDRCxNQUFNO2NBQUUvRDtZQUFZLENBQUUsR0FBR3RCLEtBQUs7WUFDOUIsT0FDQytDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxHQUFBLENBQUFVLFVBQVU7Y0FDVkMsVUFBVSxFQUFFLENBQ1gsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEVBQ2pCLENBQUMsYUFBYSxFQUFFLGdCQUFnQmpFLFlBQVksYUFBYSxDQUFDLEVBQzFELENBQUMsV0FBVyxFQUFFLGdCQUFnQkEsWUFBWSxzQkFBc0IsQ0FBQyxFQUNqRSxDQUFDeUQsY0FBYyxDQUFDUyxJQUFJLENBQUM7WUFDckIsR0FFRHpDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxjQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNTLE1BQUEsQ0FBQVksVUFBVTtjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTTNGLEtBQUssQ0FBQzZDLE9BQU87WUFBRSxFQUFJLENBQ3hELENBQ007VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQStDLGVBQUEsR0FBQWpHLE9BQUE7VUFDQSxJQUFBb0QsTUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUFrRyxXQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLE1BQUEsR0FBQW5HLE9BQUE7VUFDQSxJQUFBb0csT0FBQSxHQUFBcEcsT0FBQTtVQUVBLElBQUFxRyxLQUFBLEdBQUFyRyxPQUFBO1VBQ0EsSUFBQXNHLEtBQUEsR0FBQXRHLE9BQUE7VUFDQSxJQUFBdUQsU0FBQSxHQUFBdkQsT0FBQTtVQUVBLElBQUFpRixHQUFBLEdBQUFqRixPQUFBO1VBQ0EsSUFBQXVHLFNBQUEsR0FBQXZHLE9BQUE7VUFFQSxJQUFBd0csT0FBQSxHQUFBeEcsT0FBQTtVQUVPO1VBQVUsU0FDUlksTUFBTUEsQ0FBQztZQUFFUDtVQUFLLENBQTJCO1lBQ2pELE1BQU0sQ0FBQ3dDLEtBQUssRUFBRTRELFFBQVEsQ0FBQyxHQUFHckQsTUFBQSxDQUFBb0IsT0FBSyxDQUFDYyxRQUFRLENBQUNqRixLQUFLLENBQUN3QyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDNkQsVUFBVSxFQUFFOUMsS0FBSyxDQUFDLEdBQUcsSUFBQXdDLE9BQUEsQ0FBQU8sUUFBUSxFQUFDVixlQUFBLENBQUFXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3pCLGNBQWMsRUFBRUMsaUJBQWlCLENBQUMsR0FBRyxJQUFBakMsTUFBQSxDQUFBa0MsUUFBUSxFQUFNQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzlHLE1BQU0sQ0FBQzdCLFVBQVUsRUFBRWlELGFBQWEsQ0FBQyxHQUFHMUQsTUFBQSxDQUFBb0IsT0FBSyxDQUFDYyxRQUFRLENBQUNqRixLQUFLLENBQUN5QixLQUFLLEVBQUUrQixVQUFVLEVBQUVrRCxRQUFRLENBQUM7WUFDckYsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQzNHLEtBQUssQ0FBQyxFQUFFLE1BQU1vRyxRQUFRLENBQUNwRyxLQUFLLENBQUN3QyxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFBc0QsTUFBQSxDQUFBYSxTQUFTLEVBQ1IsQ0FBQzNHLEtBQUssQ0FBQyxFQUNQLE1BQUs7Y0FDSnlHLGFBQWEsQ0FBQ3pHLEtBQUssQ0FBQ3lCLEtBQUssRUFBRStCLFVBQVUsRUFBRWtELFFBQVEsQ0FBQztZQUNqRCxDQUFDLEVBQ0QsY0FBYyxDQUNkO1lBRUQsSUFBSSxDQUFDbEUsS0FBSyxJQUFJLENBQUM2RCxVQUFVLEVBQUUsT0FBT3RELE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUIsV0FBQSxDQUFBZSxPQUFPO2NBQUNDLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFFM0QsTUFBTUMsS0FBSyxHQUFHO2NBQ2I5RyxLQUFLO2NBQ0xjLFVBQVUsRUFBRWQsS0FBSyxDQUFDYyxVQUFVO2NBQzVCeUM7YUFDQTtZQUVELE1BQU13RCxJQUFJLEdBQUcsRUFBRTtZQUNmLE1BQU1DLEtBQUssR0FBRyxFQUFFO1lBRWhCLFNBQVNDLGFBQWFBLENBQUNDLElBQVksRUFBRUMsU0FBaUI7Y0FDckQsT0FBT0QsSUFBSSxDQUFDRSxNQUFNLEdBQUdELFNBQVMsR0FBR0QsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFRixTQUFTLENBQUMsR0FBRyxLQUFLLEdBQUdELElBQUk7WUFDekU7WUFFQWxILEtBQUssQ0FBQ3lCLEtBQUssQ0FBQzZGLEtBQUssQ0FBQ0MsT0FBTyxDQUFDcEgsRUFBRSxJQUFHO2NBQzlCLE1BQU1xSCxRQUFRLEdBQUd4SCxLQUFLLENBQUN5QixLQUFLLENBQUMrQixVQUFVLENBQUNrRCxRQUFRLENBQUNyRyxHQUFHLENBQUNGLEVBQUUsQ0FBQztjQUN4RDRHLElBQUksQ0FBQ1UsSUFBSSxDQUFDMUUsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUM0QixLQUFBLENBQUEwQixHQUFHO2dCQUFDQyxHQUFHLEVBQUV4SDtjQUFFLEdBQUc4RyxhQUFhLENBQUNPLFFBQVEsQ0FBQ2xELEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBTyxDQUFDO2NBQ2xFMEMsS0FBSyxDQUFDUyxJQUFJLENBQ1QxRSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzZCLEtBQUEsQ0FBQTJCLElBQUk7Z0JBQUNELEdBQUcsRUFBRSxHQUFHeEgsRUFBRTtjQUFPLEdBQ3RCNEMsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUM4QixTQUFBLENBQUE3QyxRQUFRO2dCQUFDQyxJQUFJLEVBQUVrRTtjQUFRLEVBQUksQ0FDdEIsQ0FDUDtZQUNGLENBQUMsQ0FBQztZQUVGLE9BQ0N6RSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2xCLFNBQUEsQ0FBQXVCLHVCQUF1QixDQUFDb0QsUUFBUTtjQUFDZixLQUFLLEVBQUVBO1lBQUssR0FDN0MvRCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQytCLE9BQUEsQ0FBQXJCLE1BQU07Y0FBQzlFLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3hCK0MsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNRLEdBQUEsQ0FBQWtELGFBQWEsUUFDYi9FLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsS0FBQSxDQUFBK0IsYUFBYSxRQUNiaEYsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUM0QixLQUFBLENBQUFnQyxJQUFJLFFBQUVqQixJQUFJLENBQVEsRUFDbkJoRSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLEtBQUEsQ0FBQWlDLEtBQUssUUFBRWpCLEtBQUssQ0FBUyxDQUNQLENBQ0QsQ0FDa0I7VUFFckM7Ozs7Ozs7Ozs7O1VDbEVBOztVQUVBa0IsTUFBQSxDQUFBQyxjQUFBLENBQUEzSCxPQUFBO1lBQ0FzRyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQS9ELE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBeUksTUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUEwSSxTQUFBLEdBQUExSSxPQUFBO1VBRU0sU0FBVWtFLGtCQUFrQkEsQ0FBQztZQUFFUDtVQUFJLENBQUU7WUFDMUMsTUFBTWdGLFFBQVEsR0FBRztjQUNoQixpQkFBaUIsRUFBRUQsU0FBQSxDQUFBRTthQUNuQjtZQUVELE1BQU12RSxPQUFPLEdBQUdzRSxRQUFRLENBQUNFLGNBQWMsQ0FBQ2xGLElBQUksQ0FBQ2lCLE9BQU8sQ0FBQyxHQUFHK0QsUUFBUSxDQUFDaEYsSUFBSSxDQUFDaUIsT0FBTyxDQUFDLEdBQUc2RCxNQUFBLENBQUFsRSxlQUFlO1lBRWhHLE9BQ0NuQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsY0FDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixPQUFPO2NBQUNWLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2xCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFQLE1BQUEsR0FBQXBELE9BQUE7VUFFQSxJQUFBdUQsU0FBQSxHQUFBdkQsT0FBQTtVQUNBLElBQUFtRyxNQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQThJLFNBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBK0ksTUFBQSxHQUFBL0ksT0FBQTtVQUNNLFNBQVVpRSxRQUFRQSxDQUFDO1lBQUVOO1VBQUksQ0FBRTtZQUNoQyxNQUFNO2NBQ0xDLEtBQUssRUFBRTtnQkFBRW9GLElBQUksRUFBRXBGO2NBQUssQ0FBRTtjQUN0QnZEO1lBQUssQ0FDTCxHQUFHLElBQUFrRCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBQ2hDLElBQUltRixNQUFNLEdBQUc1SSxLQUFLLENBQUN5QixLQUFLLENBQUNvSCxTQUFTLEVBQUVDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDM0IsTUFBTSxJQUFJLENBQUM7WUFFOUQsTUFBTSxDQUFDMEIsUUFBUSxFQUFFRSxXQUFXLENBQUMsR0FBR2pHLE1BQUEsQ0FBQW9CLE9BQUssQ0FBQ2MsUUFBUSxDQUFDMkQsTUFBTSxHQUFHdEYsSUFBSSxDQUFDdUYsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFN0YsSUFBQWpELE1BQUEsQ0FBQWEsU0FBUyxFQUNSLENBQUNyRCxJQUFJLENBQUMsRUFDTixNQUFLO2NBQ0owRixXQUFXLENBQUNoSixLQUFLLENBQUN5QixLQUFLLENBQUNvSCxTQUFTLEVBQUVDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1lBQ25ELENBQUMsRUFDRCxhQUFhLENBQ2I7WUFFRCxJQUFJLENBQUN6RixJQUFJLENBQUN1RixTQUFTLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLE9BQU9oRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLE1BQUEsQ0FBQU8sYUFBYSxPQUFHO1lBQzlELE9BQU9sRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3FFLFNBQUEsQ0FBQVMsUUFBUTtjQUFDbEosS0FBSyxFQUFFQSxLQUFLO2NBQUU4SSxRQUFRLEVBQUV4RixJQUFJLENBQUN1RixTQUFTLEVBQUVDLFFBQVEsRUFBRUMsS0FBSztjQUFFeEYsS0FBSyxFQUFFQTtZQUFLLEVBQUk7VUFDM0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJBLElBQUFSLE1BQUEsR0FBQXBELE9BQUE7VUFFQSxJQUFBd0osU0FBQSxHQUFBeEosT0FBQTtVQUNBLElBQUF1RCxTQUFBLEdBQUF2RCxPQUFBO1VBQ00sU0FBVXlKLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUVwSjtZQUFLLENBQUUsR0FBRyxJQUFBa0QsU0FBQSxDQUFBTywwQkFBMEIsR0FBRTtZQUU5QyxPQUFPVixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQytFLFNBQUEsQ0FBQUUsUUFBUTtjQUFDQyxPQUFPLEVBQUV0SixLQUFLLENBQUNjLFVBQVUsQ0FBQ3lJO1lBQW9CLEVBQUk7VUFDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXhHLE1BQUEsR0FBQXBELE9BQUE7VUFDQSxJQUFBaUYsR0FBQSxHQUFBakYsT0FBQTtVQUNBLElBQUF1RCxTQUFBLEdBQUF2RCxPQUFBO1VBQ00sU0FBVXNKLGFBQWFBLENBQUM7WUFBRU87VUFBTyxDQUF3QjtZQUM5RCxNQUFNO2NBQUVqRztZQUFLLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBQzlDK0YsT0FBTyxHQUFHQSxPQUFPLElBQUlqRyxLQUFLLENBQUNDLFVBQVUsQ0FBQ2lHLEtBQUs7WUFDM0MsT0FBTzFHLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUSxHQUFBLENBQUE4RSxTQUFTO2NBQUNoRSxJQUFJLEVBQUMsTUFBTTtjQUFDd0IsSUFBSSxFQUFFc0MsT0FBTztjQUFFbkYsU0FBUyxFQUFDO1lBQTBCLEVBQUc7VUFDckY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXRCLE1BQUEsR0FBQXBELE9BQUE7VUFFTSxTQUFVdUUsZUFBZUEsQ0FBQztZQUFFWjtVQUFJLENBQUU7WUFDdkMsT0FBT1AsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGNBQU1kLElBQUksQ0FBQ2tCLFdBQVcsQ0FBTztVQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBekIsTUFBQSxHQUFBcEQsT0FBQTtVQUNBLElBQUF1RCxTQUFBLEdBQUF2RCxPQUFBO1VBQ00sU0FBVWdLLFFBQVFBLENBQUM7WUFBRXJHO1VBQUksQ0FBRTtZQUNoQyxNQUFNO2NBQUVDO1lBQUssQ0FBRSxHQUFHLElBQUFMLFNBQUEsQ0FBQU8sMEJBQTBCLEdBQUU7WUFDOUMsSUFBSSxDQUFDSCxJQUFJLENBQUNzRyxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRTNCLE1BQU07Y0FDTEMsUUFBUSxFQUFFO2dCQUFFQyxLQUFLO2dCQUFFQztjQUFPO1lBQUUsQ0FDNUIsR0FBR3pHLElBQUksQ0FBQ3NHLElBQUk7WUFDYixPQUNDN0csTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFnRSxHQUNsRnRCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxjQUNFYixLQUFLLENBQUN1RyxLQUFLLEUsTUFBSUEsS0FBSyxFLE9BQUt2RyxLQUFLLENBQUN3RyxPQUFPLEUsTUFBSUEsT0FBTyxDQUM3QyxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFoSCxNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXVELFNBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBcUssVUFBQSxHQUFBckssT0FBQTtVQUNBLElBQUFzSyxTQUFBLEdBQUF0SyxPQUFBO1VBRUEsSUFBQStJLE1BQUEsR0FBQS9JLE9BQUE7VUFDQSxJQUFBbUcsTUFBQSxHQUFBbkcsT0FBQTtVQUVPO1VBQVcsTUFBTTRJLG9CQUFvQixHQUE4QkEsQ0FBQztZQUFFakY7VUFBSSxDQUFFLEtBQUk7WUFDdEYsTUFBTTtjQUFFdEQsS0FBSztjQUFFdUQ7WUFBSyxDQUFFLEdBQUcsSUFBQUwsU0FBQSxDQUFBTywwQkFBMEIsR0FBRTtZQUVyRCxNQUFNLENBQUNvRyxRQUFRLEVBQUVLLFdBQVcsQ0FBQyxHQUFHbkgsTUFBQSxDQUFBb0IsT0FBSyxDQUFDYyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ2xELElBQUFhLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUMzRyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCa0ssV0FBVyxDQUFDO2dCQUFFLEdBQUc1RyxJQUFJLENBQUN1RztjQUFRLENBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUN2RyxJQUFJLENBQUNzRyxJQUFJLEVBQUU7Y0FDZixPQUFPN0csTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNzRSxNQUFBLENBQUFPLGFBQWE7Z0JBQUNPLE9BQU8sRUFBRWpHLEtBQUssQ0FBQ0MsVUFBVSxDQUFDaUc7Y0FBSyxFQUFJOztZQUUxRCxPQUNDMUcsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUFyQixNQUFBLENBQUFvQixPQUFBLENBQUFnRyxRQUFBLFFBQ0NwSCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzZGLFNBQUEsQ0FBQU4sUUFBUTtjQUFDckcsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDeEJQLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEYsVUFBQSxDQUFBSSxtQkFBbUI7Y0FBQzlHLElBQUksRUFBRUEsSUFBSTtjQUFFK0csV0FBVyxFQUFFO1lBQUksRUFBSSxDQUNwRDtVQUVMLENBQUM7VUFBQzdKLE9BQUEsQ0FBQStILG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRixJQUFBeEYsTUFBQSxHQUFBcEQsT0FBQTtVQUNNLFNBQVUySyxVQUFVQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsQ0FBQztZQUFFWixJQUFJO1lBQUVTLFdBQVc7WUFBRUk7VUFBUSxDQUFFO1lBQ3BFLElBQUlDLEdBQUcsR0FBRyxjQUFjZCxJQUFJLENBQUNlLE1BQU0sS0FBS0gsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRztZQUV2RSxJQUFJWixJQUFJLENBQUNlLE1BQU0sS0FBS0gsQ0FBQyxFQUFFRSxHQUFHLElBQUksU0FBU2QsSUFBSSxDQUFDZ0IsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFO1lBQzlGLElBQUlQLFdBQVcsSUFBSUcsQ0FBQyxLQUFLQyxRQUFRLENBQUNJLGFBQWEsRUFBRUgsR0FBRyxJQUFJLGtCQUFrQjtZQUUxRSxPQUNDM0gsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUt1RCxHQUFHLEVBQUU0QyxNQUFNO2NBQUVsRyxTQUFTLEVBQUVxRztZQUFHLEdBQy9CM0gsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU9tRyxNQUFNLENBQVEsQ0FDaEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBeEgsTUFBQSxHQUFBcEQsT0FBQTtVQUVBLElBQUFtTCxPQUFBLEdBQUFuTCxPQUFBO1VBRU87VUFBVyxNQUFNeUssbUJBQW1CLEdBQThCQSxDQUFDO1lBQUU5RyxJQUFJO1lBQUUrRztVQUFXLENBQUUsS0FBSTtZQUNsRyxNQUFNO2NBQUVUO1lBQUksQ0FBRSxHQUFHdEcsSUFBSTtZQUVyQixNQUFNeUgsU0FBUyxHQUFHbkIsSUFBSSxDQUFDbUIsU0FBUyxJQUFJLEVBQUU7WUFDdEMsTUFBTUMsTUFBTSxHQUFHMUgsSUFBSSxDQUFDeEMsVUFBVSxDQUFDbUssU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1QsUUFBUSxFQUFFVSxLQUFLLEtBQUk7Y0FDaEUsTUFBTXZCLElBQUksR0FBRyxDQUFDbUIsU0FBUyxJQUFJQSxTQUFTLENBQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Y0FDbEQsTUFBTUMsT0FBTyxHQUFHWCxRQUFRLENBQUNXLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDLENBQUNYLE1BQU0sRUFBRUMsQ0FBQyxLQUFJO2dCQUNsRCxNQUFNYSxLQUFLLEdBQUc7a0JBQUViLENBQUM7a0JBQUVaLElBQUk7a0JBQUVhLFFBQVE7a0JBQUVGLE1BQU07a0JBQUVGO2dCQUFXLENBQUU7Z0JBQ3hELE9BQU90SCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzBHLE9BQUEsQ0FBQVIsVUFBVTtrQkFBQzNDLEdBQUcsRUFBRSxZQUFZNkMsQ0FBQyxXQUFXVyxLQUFLLEVBQUU7a0JBQUEsR0FBTUU7Z0JBQUssRUFBSTtjQUN2RSxDQUFDLENBQUM7Y0FFRixPQUNDdEksTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2dCQUFLdUQsR0FBRyxFQUFFOEMsUUFBUSxDQUFDdkQsSUFBSTtnQkFBRTdDLFNBQVMsRUFBQztjQUFrRCxHQUNwRnRCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLcUcsUUFBUSxDQUFDdkQsSUFBSSxDQUFNLEVBQ3ZCa0UsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBQ0YsT0FBT3JJLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxDQUFBckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBZ0csUUFBQSxRQUFHYSxNQUFNLENBQUk7VUFDckIsQ0FBQztVQUFDeEssT0FBQSxDQUFBNEosbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJGLElBQUFySCxNQUFBLEdBQUFwRCxPQUFBO1VBQ0EsSUFBQXVELFNBQUEsR0FBQXZELE9BQUE7VUFHQSxJQUFBMkwsS0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUErSSxNQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQTRMLEtBQUEsR0FBQTVMLE9BQUE7VUFDTSxTQUFVb0UsY0FBY0EsQ0FBQztZQUFFVDtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFPLDBCQUEwQixHQUFFO1lBRTlDLElBQUksQ0FBQ0gsSUFBSSxDQUFDc0csSUFBSSxFQUFFLE9BQU83RyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLE1BQUEsQ0FBQU8sYUFBYTtjQUFDTyxPQUFPLEVBQUVqRyxLQUFLLENBQUNDLFVBQVUsQ0FBQ2lHO1lBQUssRUFBSTtZQUV6RSxNQUFNL0MsUUFBUSxHQUFHd0IsTUFBTSxDQUFDc0QsSUFBSSxDQUFDbEksSUFBSSxDQUFDc0csSUFBSSxDQUFDLENBQUNzQixHQUFHLENBQUN2RCxHQUFHLElBQUlyRSxJQUFJLENBQUNzRyxJQUFJLENBQUNqQyxHQUFHLENBQUMsQ0FBQztZQUVsRTtZQUVBLE9BQ0M1RSxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWdDLEdBQzlDdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUNDckIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGFBQUtiLEtBQUssQ0FBQ2tJLFdBQVcsQ0FBQ25ILEtBQUssQ0FBTSxFQUNsQ3ZCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFZCxLQUFLLENBQUNrSSxXQUFXLENBQUNDLFFBQVEsQ0FBSyxDQUMxQyxFQUdUM0ksTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLENBQUNrSCxLQUFBLENBQUFLLElBQUk7Y0FBQ0MsU0FBUyxFQUFDLEtBQUs7Y0FBQzdDLEtBQUssRUFBRXJDLFFBQVE7Y0FBRW1GLE9BQU8sRUFBRU4sS0FBQSxDQUFBTztZQUFVLEVBQUksQ0FDekQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQS9JLE1BQUEsR0FBQXBELE9BQUE7VUFDTyxNQUFNbU0sVUFBVSxHQUFHQSxDQUFDO1lBQUVsQztVQUFJLENBQUUsS0FBSTtZQUN0QyxNQUFNdEcsSUFBSSxHQUFHc0csSUFBSTtZQUNqQixPQUNDN0csTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUEyQixHQUM3Q3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBdUIsR0FDekN0QixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFBT2QsSUFBSSxDQUFDb0MsSUFBSSxDQUFRLENBQ2YsRUFDVjNDLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZCxJQUFJLENBQUN5SSxPQUFPLENBQU0sQ0FDZixFQUNUaEosTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUVmLElBQUksQ0FBQzBJLFFBQVEsQ0FBSyxDQUM1QixDQUNEO1VBRVosQ0FBQztVQUFDeEwsT0FBQSxDQUFBc0wsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCRixJQUFBL0ksTUFBQSxHQUFBcEQsT0FBQTtVQUNNLFNBQVVpSSxJQUFJQSxDQUFDO1lBQUVxRSxRQUFRO1lBQUU1SDtVQUFTLENBQStDO1lBQ3hGLE1BQU1xRyxHQUFHLEdBQUcsa0JBQWtCckcsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoRSxPQUFPdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBRXFHO1lBQUcsR0FBR3VCLFFBQVEsQ0FBVztVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBbEosTUFBQSxHQUFBcEQsT0FBQTtVQUVBLElBQUF1TSxNQUFBLEdBQUF2TSxPQUFBO1VBQ087VUFBVyxNQUFNd00sT0FBTyxHQUE4QkEsQ0FBQztZQUFFbk0sS0FBSztZQUFFdUQsS0FBSztZQUFFa0k7VUFBVyxDQUFFLEtBQUk7WUFDOUYsTUFBTTtjQUNMVyxTQUFTLEVBQUU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZBLFVBQVUsRUFBRTtrQkFBRXhDO2dCQUFRO2NBQUU7WUFDeEIsQ0FDRCxHQUFHN0osS0FBSztZQUVULE1BQU1nTCxNQUFNLEdBQUdTLFdBQVcsQ0FBQ1IsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1QsUUFBUSxFQUFFVSxLQUFLLEtBQUk7Y0FDNUQsTUFBTXZCLElBQUksR0FBR3lDLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDbkIsS0FBSyxDQUFDO2NBQ3RDLE1BQU1DLE9BQU8sR0FBR1gsUUFBUSxDQUFDVyxPQUFPLENBQUNGLEdBQUcsQ0FBQyxDQUFDWCxNQUFNLEVBQUVDLENBQUMsS0FBSTtnQkFDbEQsSUFBSUUsR0FBRyxHQUFHLGNBQWNkLElBQUksQ0FBQ2UsTUFBTSxLQUFLSCxDQUFDLEdBQUcsbUJBQW1CLEdBQUcsRUFBRSxHQUFHO2dCQUN2RSxJQUFJWixJQUFJLENBQUNlLE1BQU0sS0FBS0gsQ0FBQyxFQUFFO2tCQUN0QkUsR0FBRyxJQUFJLFNBQVNkLElBQUksQ0FBQ2dCLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0IsRUFBRTs7Z0JBR3hFLE9BQ0M3SCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7a0JBQUt1RCxHQUFHLEVBQUU0QyxNQUFNO2tCQUFFbEcsU0FBUyxFQUFFcUc7Z0JBQUcsR0FDL0IzSCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsZUFBT21HLE1BQU0sQ0FBUSxDQUNoQjtjQUVSLENBQUMsQ0FBQztjQUNGLE9BQ0N4SCxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Z0JBQUt1RCxHQUFHLEVBQUU4QyxRQUFRLENBQUN2RCxJQUFJO2dCQUFFN0MsU0FBUyxFQUFDO2NBQWtELEdBQ3BGdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGFBQUtxRyxRQUFRLENBQUN2RCxJQUFJLENBQU0sRUFDdkJrRSxPQUFPLENBQ0g7WUFFUixDQUFDLENBQUM7WUFFRixPQUNDckksTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ3RCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxhQUFLYixLQUFLLENBQUNnSixPQUFPLENBQU0sRUFDeEJ4SixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUEsQ0FBQzhILE1BQUEsQ0FBQU0sS0FBSztjQUFDdkksSUFBSSxFQUFDO1lBQU0sR0FDakJsQixNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTRDLEdBQzFEdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUN3RyxPQUFPLEUsSUFBVyxFQUNqQ2hILE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUFPeUYsUUFBUSxDQUFDRSxPQUFPLENBQVEsRSxLQUFDaEgsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGVBQU95RixRQUFRLENBQUNDLEtBQUssQ0FBUSxDQUNwRCxDQUNMLEVBQ04vRyxNQUFBLENBQUFvQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTRDLEdBQzFEdEIsTUFBQSxDQUFBb0IsT0FBQSxDQUFBQyxhQUFBLGlCQUFTYixLQUFLLENBQUNrSixLQUFLLEUsSUFBVyxFQUMvQjFKLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ3JCLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUFPeUYsUUFBUSxDQUFDNEMsS0FBSyxDQUFRLEUsS0FBQzFKLE1BQUEsQ0FBQW9CLE9BQUEsQ0FBQUMsYUFBQSxlQUFPeUYsUUFBUSxDQUFDQyxLQUFLLENBQVEsQ0FDbEQsQ0FDTCxDQUNDLEVBQ1BrQixNQUFNLENBQ0Y7VUFFUixDQUFDO1VBQUN4SyxPQUFBLENBQUEyTCxPQUFBLEdBQUFBLE9BQUEifQ==