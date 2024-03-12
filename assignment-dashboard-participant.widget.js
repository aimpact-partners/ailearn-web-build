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
        hash: 3303124398,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 1549540459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1971683865,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _contexts = require("./contexts");
          function Header({
            store
          }) {
            const {
              texts
            } = (0, _contexts.useModuleContext)();
            const localData = localStorage.getItem('student.details') ? JSON.parse(localStorage.getItem('student.details')) : {};
            const [studentDetails, setStudentDetails] = _react.default.useState(localData);
            const {
              assignmentId
            } = store;
            return _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.assignments, `/assignments/${assignmentId}/coach/list`], [texts.breadcrumb.dashboard, `/assignments/${assignmentId}/dashboard/classroom`], [studentDetails.name]]
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
        hash: 2221862281,
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
            const [activities, setActivities] = _react.default.useState(store.model?.activities?.elements);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.elements), 'data.updated');
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
            return _react.default.createElement(_contexts.ModuleContext.Provider, {
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
        hash: 2954736454,
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
        hash: 3878765613,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 705765139,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 2917864446,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 2297740904,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 2358138782,
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
            } = (0, _contexts.useModuleContext)();
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
        hash: 870935196,
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
            } = (0, _contexts.useModuleContext)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaWNvbnMiLCJfY29uZmlnIiwiSGVhZGVyIiwibG9jYWxEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0dWRlbnREZXRhaWxzIiwic2V0U3R1ZGVudERldGFpbHMiLCJ1c2VTdGF0ZSIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsImFzc2lnbm1lbnRzIiwiZGFzaGJvYXJkIiwibmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl90YWJzIiwiX3BhbmUiLCJfYWN0aXZpdHkiLCJfaGVhZGVyIiwiX2ljb25zMiIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwiYWN0aXZpdHkiLCJpbWdDbHMiLCJwdXNoIiwiVGFiIiwia2V5IiwiSWNvbiIsIklDT05TIiwiUGFuZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbmRleCIsIl9tdWx0aXBsZSIsImNvbnRyb2xzIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9tZXNzYWdlcyIsIl9lbXB0eSIsImNoYXQiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJkYXRhIiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsImtleXMiLCJhdWRpb1VybCIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsImNoaWxkcmVuIiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvY29udGV4dHMudHMiLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUM7Z0JBQzlCQyxFQUFFLEVBQUUsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdCQyxhQUFhLEVBQUUsSUFBSSxD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