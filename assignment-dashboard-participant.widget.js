System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/image", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/config", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/tabs", "@aimpact/ailearn-app@0.0.24/components/icons", "@aimpact/ailearn-app@0.0.24/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Image) {
      dependency_10 = _pragmateUi006Image;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_12 = _aimpactAilearnApp0024Config;
    }, function (_pragmateUi006Components) {
      dependency_13 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_14 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Tabs) {
      dependency_16 = _pragmateUi006Tabs;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_aimpactAilearnApp0024ChatMessages) {
      dependency_18 = _aimpactAilearnApp0024ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_19 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_20 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi006List) {
      dependency_21 = _pragmateUi006List;
    }, function (_pragmateUi006Alert) {
      dependency_22 = _pragmateUi006Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/tabs', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@aimpact/ailearn-app/chat/messages', dependency_18], ['@aimpact/chat-sdk/widgets/markdown', dependency_19], ['@bgroup/media-manager/audio-player', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/alert', dependency_22]]);
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
        hash: 2551635026,
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
              'content-theory': _chat.UserChat,
              'character-talk': _chat.UserChat,
              debate: _chat.UserChat,
              'multiple-choice': _assessment.MaterialAssessment,
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
        hash: 1118852186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          function Header({
            store
          }) {
            const localData = localStorage.getItem('student.details') ? JSON.parse(localStorage.getItem('student.details')) : {};
            const [studentDetails, setStudentDetails] = _react.default.useState(localData);
            const {
              assignmentId
            } = store;
            return _react.default.createElement(NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignments', `/assignments/${assignmentId}/coach/list`], ['Dashboard', `/assignments/${assignmentId}/dashboard/classroom`], [studentDetails.name]]
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
        hash: 1140013437,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
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
            store.model.order.forEach(id => {
              const activity = store.model.activities.elements.get(id);
              console.log(0.3, activity, id);
              const imgCls = `activity-type__image image--${activity.type}`;
              tabs.push(_react.default.createElement(_tabs.Tab, {
                key: id
              }, _react.default.createElement("div", null, _react.default.createElement("section", {
                className: imgCls
              }, _react.default.createElement(_icons2.Icon, {
                icon: _icons.ICONS[activity.type]
              }))), _react.default.createElement("span", null, activity.title)));
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
            }), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_tabs.TabsContainer, {
              className: "dashboard-tabs"
            }, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, panes))));
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
        hash: 3835408553,
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
            console.log(12, item);
            const Control = controls.hasOwnProperty(item.subtype) ? controls[item.subtype] : _index.DefaultMaterial;
            return _react.default.createElement("div", null, _react.default.createElement(_multiple.MultipleChoiceReport, {
              item: item
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/materials/chat
      **************************************/

      ims.set('./views/materials/chat', {
        hash: 3467061915,
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
            return _react.default.createElement(_react.default.Fragment, null, item?.data?.messages?.synthesis && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.synthesis), _react.default.createElement("p", null, item.data.messages?.synthesis)), _react.default.createElement("h4", {
              className: "mb-30"
            }, texts.title), _react.default.createElement(_messages.Messages, {
              store: store,
              messages: item.chatModel?.messages?.items,
              texts: texts
            }));
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
        hash: 1678692662,
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
          var _config = require("@aimpact/ailearn-app/config");
          function SpokenAnalysis({
            item
          }) {
            const {
              texts,
              store
            } = (0, _contexts.useStudentDashboardContext)();
            if (!item.data) return _react.default.createElement(_empty.EmptyMaterial, {
              message: texts.activities.empty
            });
            const elements = Object.keys(item.data).map(key => item.data[key]);
            ///assignments/:id/activities/:activityId/tracking/:userId/audio
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/tracking/${store.userId}/audio`;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("h4", null, texts.assessments.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.assessments.oralText), _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h4", null, texts.studentAudio), _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: audioUrl
            }), "Your browser does not support the audio element."))), _react.default.createElement(_list.List, {
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
        hash: 419659886,
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
            }, _react.default.createElement("span", null, item.icon)), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h5", null, item.name)), _react.default.createElement("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIl9jb25maWciLCJIZWFkZXIiLCJsb2NhbERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3R1ZGVudERldGFpbHMiLCJzZXRTdHVkZW50RGV0YWlscyIsInVzZVN0YXRlIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl90YWJzIiwiX3BhbmUiLCJfdWkiLCJfYWN0aXZpdHkiLCJfaGVhZGVyIiwiX2ljb25zMiIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwiYWN0aXZpdHkiLCJsb2ciLCJpbWdDbHMiLCJwdXNoIiwiVGFiIiwia2V5IiwiSWNvbiIsIklDT05TIiwiUGFuZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbmRleCIsIl9tdWx0aXBsZSIsImNvbnRyb2xzIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9tZXNzYWdlcyIsIl9lbXB0eSIsImNoYXQiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJkYXRhIiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsImtleXMiLCJhdWRpb1VybCIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsImNoaWxkcmVuIiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGV4dHMudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUM7Z0JBQzlCQyxFQUFFLEVBQUUsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCQyxhQUFhLEVBQUUsSUFBSSxD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