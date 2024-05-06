System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/tabs", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "@aimpact/ailearn-app@0.0.32/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_7 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_8 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_10 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Image) {
      dependency_11 = _pragmateUi011Image;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_13 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Components) {
      dependency_14 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_15 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011Tabs) {
      dependency_17 = _pragmateUi011Tabs;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_18 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_aimpactAilearnApp0032ChatMessages) {
      dependency_20 = _aimpactAilearnApp0032ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_21 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_22 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi011List) {
      dependency_23 = _pragmateUi011List;
    }, function (_pragmateUi011Alert) {
      dependency_24 = _pragmateUi011Alert;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_10], ['pragmate-ui/image', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/react-18-widgets/hooks', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/tabs', dependency_17], ['@aimpact/ailearn-app/components/ui', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['@aimpact/ailearn-app/chat/messages', dependency_20], ['@aimpact/chat-sdk/widgets/markdown', dependency_21], ['@bgroup/media-manager/audio-player', dependency_22], ['pragmate-ui/list', dependency_23], ['pragmate-ui/alert', dependency_24]]);
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
        hash: 1127642037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
            show() {
              _dashboardLayout.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get('id')}/dashboard/classroom`); // set the back link
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
        hash: 559998578,
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
            }, _react.default.createElement(_tabs.Tabs, {
              className: "tab"
            }, tabs), _react.default.createElement(_tabs.Panes, {
              className: "panes"
            }, panes))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJpZCIsImF0dHJpYnV0ZXMiLCJnZXQiLCJwYXJ0aWNpcGFudElkIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwiY29uc3RydWN0b3IiLCJsYW5ndWFnZSIsIkFwcFdyYXBwZXIiLCJyYXRlIiwiYXVkaW9TcGVlZCIsIm9uIiwiTGlzdGVuQXBwQ2hhbmdlcyIsImxvYWQiLCJzZXQiLCJsYW5ndXVhZ2UiLCJBc3NpZ25tZW50IiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVmcmVzaCIsImZldGNoaW5nIiwiX3JlYWN0IiwiX2NoYXQiLCJfbWF0ZXJpYWxzIiwiX2NvbnRleHRzIiwiX2Fzc2Vzc21lbnQiLCJfc3Bva2VuIiwiQWN0aXZpdHkiLCJpdGVtIiwidGV4dHMiLCJhY3Rpdml0aWVzIiwidXNlTW9kdWxlQ29udGV4dCIsInR5cGVzIiwiY29udmVyc2F0aW9uIiwiVXNlckNoYXQiLCJkZWJhdGUiLCJNYXRlcmlhbEFzc2Vzc21lbnQiLCJzcG9rZW4iLCJTcG9rZW5BbmFseXNpcyIsIkNvbnRyb2wiLCJ0eXBlIiwiRGVmYXVsdE1hdGVyaWFsIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInN1YnR5cGUiLCJkZXNjcmlwdGlvbiIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJIZWFkZXIiLCJsb2NhbERhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic3R1ZGVudERldGFpbHMiLCJzZXRTdHVkZW50RGV0YWlscyIsInVzZVN0YXRlIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsImFzc2lnbm1lbnRzIiwiZGFzaGJvYXJkIiwibmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl90YWJzIiwiX3BhbmUiLCJfdWkiLCJfYWN0aXZpdHkiLCJfaGVhZGVyIiwiX2ljb25zMiIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0QWN0aXZpdGllcyIsImVsZW1lbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwiYWN0aXZpdHkiLCJpbWdDbHMiLCJwdXNoIiwiVGFiIiwia2V5IiwiSWNvbiIsIklDT05TIiwiUGFuZSIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbmRleCIsIl9tdWx0aXBsZSIsImNvbnRyb2xzIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9tZXNzYWdlcyIsIl9lbXB0eSIsImNoYXQiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJkYXRhIiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsIl9jb25maWciLCJrZXlzIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJzdHVkZW50QXVkaW8iLCJwcmVsb2FkIiwic3JjIiwiTGlzdCIsImNvbnRhaW5lciIsImNvbnRyb2wiLCJTcG9rZW5JdGVtIiwiZmVlZGJhY2siLCJjaGlsZHJlbiIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3NlbGVjdGlvbi1wcm9wcy50cyIsIi90cy92aWV3cy9tYXRlcmlhbHMvYXNzZXNzbWVudC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9wYW5lLnRzeCIsIi90cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0scUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUws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