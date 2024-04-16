System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/tabs", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "@aimpact/ailearn-app@0.0.32/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_3 = _beyondJsReact18Widgets111Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_9 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Image) {
      dependency_10 = _pragmateUi011Image;
    }, function (_pragmateUi011Icons) {
      dependency_11 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_12 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_14 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Tabs) {
      dependency_16 = _pragmateUi011Tabs;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_aimpactAilearnApp0032ChatMessages) {
      dependency_19 = _aimpactAilearnApp0032ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_20 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_21 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi011List) {
      dependency_22 = _pragmateUi011List;
    }, function (_pragmateUi011Alert) {
      dependency_23 = _pragmateUi011Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/tabs', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['@aimpact/ailearn-app/chat/messages', dependency_19], ['@aimpact/chat-sdk/widgets/markdown', dependency_20], ['@bgroup/media-manager/audio-player', dependency_21], ['pragmate-ui/list', dependency_22], ['pragmate-ui/alert', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant.widget');
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
        hash: 464371282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            return _react.default.createElement(_navbarHeader.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2ljb25zIiwiX2NvbmZpZyIsIkhlYWRlciIsImxvY2FsRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdHVkZW50RGV0YWlscyIsInNldFN0dWRlbnREZXRhaWxzIiwidXNlU3RhdGUiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJhc3NpZ25tZW50cyIsImRhc2hib2FyZCIsIm5hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfdGFicyIsIl9wYW5lIiwiX3VpIiwiX2FjdGl2aXR5IiwiX2hlYWRlciIsIl9pY29uczIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ2YWx1ZSIsInRhYnMiLCJwYW5lcyIsIm9yZGVyIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwiaW1nQ2xzIiwicHVzaCIsIlRhYiIsImtleSIsIkljb24iLCJJQ09OUyIsIlBhbmUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJjaGF0IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50IiwiZGF0YSIsInN5bnRoZXNpcyIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJrZXlzIiwiYXVkaW9VcmwiLCJhcGlzIiwiYWlsZWFybiIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJzdHVkZW50QXVkaW8iLCJwcmVsb2FkIiwic3JjIiwiTGlzdCIsImNvbnRhaW5lciIsImNvbnRyb2wiLCJTcG9rZW5JdGVtIiwiZmVlZGJhY2siLCJjaGlsZHJlbiIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9wYW5lLnRzeCIsIi90cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUM7Z0JBQzlCQyxFQUFFLEVBQUUsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQzdC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UixDQUFDLENBQUM7Y0FDRixPQUNDbEksTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2dCQUFLMkQsR0FBRyxFQUFFbUQsUUFBUSxDQUFDYixJQUFJO2dCQUFFaEcsU0FBUyxFQUFDO2NBQWtELEdBQ3BGdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUs4RyxRQUFRLENBQUNiLElBQUksQ0FBTSxFQUN2QndCLE9BQU8sQ0FDSDtZQUVSLENBQUMsQ0FBQztZQUVGLE9BQ0MvSSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtkLEtBQUssQ0FBQytKLE9BQU8sQ0FBTSxFQUN4QnZLLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEksTUFBQSxDQUFBTSxLQUFLO2NBQUNySixJQUFJLEVBQUM7WUFBTSxHQUNqQm5CLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMUR2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsaUJBQVNkLEtBQUssQ0FBQ21ILE9BQU8sRSxJQUFXLEVBQ2pDM0gsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGtCQUNDdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGVBQU9tRyxRQUFRLENBQUNFLE9BQU8sQ0FBUSxFLEtBQUMzSCxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFBT21HLFFBQVEsQ0FBQ0MsS0FBSyxDQUFRLENBQ3BELENBQ0wsRUFDTjFILE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMUR2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsaUJBQVNkLEtBQUssQ0FBQ2lLLEtBQUssRSxJQUFXLEVBQy9CekssTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGtCQUNDdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGVBQU9tRyxRQUFRLENBQUNnRCxLQUFLLENBQVEsRSxLQUFDekssTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGVBQU9tRyxRQUFRLENBQUNDLEtBQUssQ0FBUSxDQUNsRCxDQUNMLENBQ0MsRUFDUGlCLE1BQU0sQ0FDRjtVQUVSLENBQUM7VUFBQ2hMLE9BQUEsQ0FBQXdNLE9BQUEsR0FBQUEsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==