System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/tabs", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "@aimpact/ailearn-app@0.0.32/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/alert"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_14 = _beyondJsReact18Widgets112Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2114939251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
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
              breadcrumb: [[texts.breadcrumb.assignments, `/assignments/${assignmentId}/coach/list`], [texts.breadcrumb.dashboard, `/assignments/${assignmentId}/dashboard/classroom`], [studentDetails.name]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbmF2YmFySGVhZGVyIiwiX2ljb25zIiwiSGVhZGVyIiwibG9jYWxEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0dWRlbnREZXRhaWxzIiwic2V0U3R1ZGVudERldGFpbHMiLCJ1c2VTdGF0ZSIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJhc3NpZ25tZW50cyIsImRhc2hib2FyZCIsIm5hbWUiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfdGFicyIsIl9wYW5lIiwiX3VpIiwiX2FjdGl2aXR5IiwiX2hlYWRlciIsIl9pY29uczIiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ2YWx1ZSIsInRhYnMiLCJwYW5lcyIsIm9yZGVyIiwiZm9yRWFjaCIsImFjdGl2aXR5IiwiaW1nQ2xzIiwicHVzaCIsIlRhYiIsImtleSIsIkljb24iLCJJQ09OUyIsIlBhbmUiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJjaGF0IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50IiwiZGF0YSIsInN5bnRoZXNpcyIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiY2hpbGRyZW4iLCJfYWxlcnQiLCJSZXN1bHRzIiwic2VsZWN0aW9uIiwiZXZhbHVhdGlvbiIsImFuc3dlcnMiLCJyZXN1bHRzIiwiQWxlcnQiLCJ3cm9uZyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDO2dCQUM5QkMsRUFBRSxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUM3QkMsYUFBYSxFQUFF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