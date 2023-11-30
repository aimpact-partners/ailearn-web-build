System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tabs", "@aimpact/ailearn-app@0.0.18/components/ui", "@aimpact/ailearn-app@0.0.18/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0018ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0018ComponentsUi;
    }, function (_aimpactAilearnApp0018ChatMessages) {
      dependency_15 = _aimpactAilearnApp0018ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_17 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi003List) {
      dependency_18 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_19 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/dashboard/participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/tabs', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/alert', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignment-user-detail-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/dashboard/participant.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/participant/${participantId}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/assignments/dashboard/participant.widget');
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
        hash: 1766643740,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2995079103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwiY29uc3RydWN0b3IiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwiTGlzdGVuQXBwQ2hhbmdlcyIsInNldCIsImxhbmd1dWFnZSIsImlkIiwiQXNzaWdubWVudCIsImdsb2JhbFRoaXMiLCJfbSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9pY29ucyIsIl90YWJzIiwiX3BhbmUiLCJfdWkiLCJfYWN0aXZpdHkiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwiYXBwbHlFbGxpcHNpcyIsInRleHQiLCJtYXhMZW5ndGgiLCJsZW5ndGgiLCJzbGljZSIsIm9yZGVyIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwicHVzaCIsIlRhYiIsImtleSIsIlBhbmUiLCJQcm92aWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbmRleCIsIl9tdWx0aXBsZSIsImNvbnRyb2xzIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9tZXNzYWdlcyIsIl9lbXB0eSIsImNoYXQiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiQ291bnRlcnMiLCJkYXRhIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJGcmFnbWVudCIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwia2V5cyIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJzdWJqZWN0IiwiZmVlZGJhY2siLCJjaGlsZHJlbiIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsSUFBSSxDQUFD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