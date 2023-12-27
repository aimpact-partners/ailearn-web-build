System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/tabs", "@aimpact/ailearn-app@0.0.24/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
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
    }, function (_aimpactAilearnApp0024ChatMessages) {
      dependency_16 = _aimpactAilearnApp0024ChatMessages;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/tabs', dependency_15], ['@aimpact/ailearn-app/chat/messages', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignment-dashboard-participant.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignment-dashboard-participant.widget');
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
        hash: 1492652646,
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
        hash: 1477176297,
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
            const localData = localStorage.getItem('student.details') ? JSON.parse(localStorage.getItem('student.details')) : {};
            const [studentDetails, setStudentDetails] = _react.default.useState(localData);
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
        hash: 4103687219,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIkhlYWRlciIsImxvY2FsRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdHVkZW50RGV0YWlscyIsInNldFN0dWRlbnREZXRhaWxzIiwidXNlU3RhdGUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIm5hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfdGFicyIsIl9wYW5lIiwiX2FjdGl2aXR5IiwiX2hlYWRlciIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwiYXBwbHlFbGxpcHNpcyIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm9yZGVyIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwicHVzaCIsIlRhYiIsImtleSIsIlBhbmUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJjaGF0IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsIkNvdW50ZXJzIiwiZGF0YSIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiRnJhZ21lbnQiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsImtleXMiLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0IiwiTGlzdCIsImNvbnRhaW5lciIsImNvbnRyb2wiLCJTcG9rZW5JdGVtIiwic3ViamVjdCIsImZlZWRiYWNrIiwiY2hpbGRyZW4iLCJfYWxlcnQiLCJSZXN1bHRzIiwic2VsZWN0aW9uIiwiZXZhbHVhdGlvbiIsImFuc3dlcnMiLCJyZXN1bHRzIiwiQWxlcnQiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDO2dCQUM5QkMsRUFBRSxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM3QkMsYUFBYSxFQUFFLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCO2VBQ25ELENBQUM7Y0FDRixPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUEsSUFBSU8sTUFBTUEsQ0FBQTtjQUNULE9B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