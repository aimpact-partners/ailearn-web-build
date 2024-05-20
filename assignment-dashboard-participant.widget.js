System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32-dev.48/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32-dev.48/components/hooks", "@aimpact/ailearn-app@0.0.32-dev.48/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "@aimpact/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32-dev.48/config", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32-dev.48/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/dropdown"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0032Dev48DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032Dev48DashboardLayoutWidget;
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
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032Dev48ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032Dev48ComponentsHooks;
    }, function (_aimpactAilearnApp0032Dev48ChatMessages) {
      dependency_14 = _aimpactAilearnApp0032Dev48ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_aimpactMediaManager100AudioPlayer) {
      dependency_17 = _aimpactMediaManager100AudioPlayer;
    }, function (_pragmateUi011List) {
      dependency_18 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_19 = _aimpactAilearnApp0032Dev48Config;
    }, function (_pragmateUi011Alert) {
      dependency_20 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0032Dev48ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0032Dev48ComponentsIcons;
    }, function (_pragmateUi011Icons) {
      dependency_22 = _pragmateUi011Icons;
    }, function (_pragmateUi011Tabs) {
      dependency_23 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Dropdown) {
      dependency_24 = _pragmateUi011Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['@aimpact/ailearn-app/chat/messages', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@aimpact/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/alert', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/dropdown', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/assignment-dashboard-participant.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2481305495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Widget;
            }
            show() {
              _dashboardLayout.LayoutBroker.setBackLink(`/assignments/${this.uri.vars.get('assignmentId')}/dashboard/classroom`); // set the back link
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('participantId'));
            }
            hide() {
              _dashboardLayout.LayoutBroker.removeOverlay();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 968660235,
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
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
            #user;
            get user() {
              return this.#user;
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
                const data = await this.#model.load({
                  id,
                  userId
                });
                this.#user = data.user;
                this.#userId = userId;
                this.#accessed = this.#model.accessed;
                _dashboardLayout.LayoutBroker.setOverlay(data.user.name);
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 17603437,
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
          var _contexts = require("./contexts");
          var _hooks3 = require("@aimpact/ailearn-app/components/hooks");
          var _desktop = require("./views/desktop");
          var _mobile = require("./views/mobile");
          /*bundle*/
          function Widget({
            store,
            store: {
              assessment
            }
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [, setActivities] = _react.default.useState(store.model?.activities?.elements);
            const size = (0, _hooks3.useMediaQuery)();
            const value = {
              store,
              assessment,
              texts,
              size
            };
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.elements), 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const View = size === 'md' || size === 'lg' ? _desktop.DesktopView : _mobile.MobileView;
            return _react.default.createElement(_contexts.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(View, null));
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
        hash: 2258094448,
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
        hash: 1265456538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pane = Pane;
          var _react = require("react");
          var _activity = require("./activity");
          var _contexts = require("./contexts");
          function Pane({
            id,
            className
          }) {
            const {
              store
            } = (0, _contexts.useModuleContext)();
            const activity = store.model.activities.elements.get(id);
            const cls = `pane__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("article", {
              className: cls
            }, _react.default.createElement(_activity.Activity, {
              item: activity
            }));
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

      /***************************
      INTERNAL MODULE: ./views/tab
      ***************************/

      ims.set('./views/tab', {
        hash: 3987010072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabApp = TabApp;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _contexts = require("./contexts");
          function TabApp({
            id,
            index
          }) {
            const {
              store
            } = (0, _contexts.useModuleContext)();
            const activity = store.model.activities.elements.get(id);
            const imgCls = `activity-type__image image--${activity.type}`;
            return _react.default.createElement(_tabs.Tab, {
              index: index
            }, _react.default.createElement("div", null, _react.default.createElement("section", {
              className: imgCls
            }, _react.default.createElement(_icons2.Icon, {
              icon: _icons.ICONS[activity.type]
            }))), _react.default.createElement("span", null, activity.title));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/views/desktop
      *************************************/

      ims.set('./views/views/desktop', {
        hash: 2525857580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopView = DesktopView;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _tabs = require("pragmate-ui/tabs");
          var _tab = require("../tab");
          var _pane = require("../pane");
          var _contexts = require("../contexts");
          function DesktopView() {
            const {
              store
            } = (0, _contexts.useModuleContext)();
            const tabs = [];
            const panes = [];
            store.model.order.forEach((id, index) => {
              tabs.push(_react.default.createElement(_tab.TabApp, {
                key: `${id}`,
                id: id,
                index: index
              }));
              panes.push(_react.default.createElement(_pane.Pane, {
                key: `${id}.pane`,
                id: id
              }));
            });
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_tabs.TabsContainer, {
              className: "dashboard-tabs"
            }, _react.default.createElement(_tabs.Tabs, {
              className: "tab"
            }, tabs), _react.default.createElement(_tabs.Panes, {
              className: "panes"
            }, panes)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/views/mobile
      ************************************/

      ims.set('./views/views/mobile', {
        hash: 3127012801,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileView = MobileView;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _pane = require("../pane");
          var _contexts = require("../contexts");
          var _dropdown = require("pragmate-ui/dropdown");
          var _toggle = require("./toggle");
          function MobileView() {
            const {
              store
            } = (0, _contexts.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(store.model.order[0]);
            const Item = function ({
              id,
              as = _dropdown.DropdownItem
            }) {
              const activity = store.model.activities.elements.get(id);
              const iconCls = `icon-select  icon--${activity.type}`;
              const Control = as;
              const onClick = event => {
                event.preventDefault();
                setSelected(id);
              };
              return _react.default.createElement(Control, {
                className: "select-dropdown",
                onClick: onClick
              }, _react.default.createElement("div", {
                className: "dropdown-toggle__content"
              }, _react.default.createElement("section", {
                className: iconCls
              }, _react.default.createElement(_icons.AppIcon, {
                className: "icon-select",
                icon: activity.type
              })), _react.default.createElement("span", null, activity.title)));
            };
            const items = store.model.order.filter(id => id !== selected).map(id => _react.default.createElement(Item, {
              id: id,
              key: id
            }));
            return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_dropdown.Dropdown, {
              className: "dropdown-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, null, _react.default.createElement(_toggle.ToggleOption, {
              as: "div",
              key: 0,
              id: selected
            })), _react.default.createElement(_dropdown.DropdownMenu, null, items)), _react.default.createElement(_pane.Pane, {
              id: selected
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/views/toggle
      ************************************/

      ims.set('./views/views/toggle', {
        hash: 1908666995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ToggleOption = ToggleOption;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _contexts = require("../contexts");
          var _dropdown = require("pragmate-ui/dropdown");
          function ToggleOption({
            id,
            as = _dropdown.DropdownItem
          }) {
            const {
              store
            } = (0, _contexts.useModuleContext)();
            const activity = store.model.activities.elements.get(id);
            const iconCls = `icon-select  icon--${activity.type}`;
            const Control = as;
            return _react.default.createElement(Control, {
              className: "select-dropdown"
            }, _react.default.createElement("div", {
              className: "dropdown-toggle__content"
            }, _react.default.createElement("section", {
              className: iconCls
            }, _react.default.createElement(_icons.AppIcon, {
              className: "icon-select",
              icon: activity.type
            })), _react.default.createElement("span", null, activity.title)), _react.default.createElement(_icons.AppIcon, {
              icon: "arrowDropDown"
            }));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsIkFzc2lnbm1lbnQiLCJkYXRhIiwic2V0T3ZlcmxheSIsIm5hbWUiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWZyZXNoIiwiZmV0Y2hpbmciLCJfcmVhY3QiLCJfY2hhdCIsIl9tYXRlcmlhbHMiLCJfY29udGV4dHMiLCJfYXNzZXNzbWVudCIsIl9zcG9rZW4iLCJBY3Rpdml0eSIsIml0ZW0iLCJ0ZXh0cyIsImFjdGl2aXRpZXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwiY2hhdCIsIm51bWJlciIsImNoYXRNb2RlbCIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJzZXRNZXNzYWdlcyIsIkVtcHR5TWF0ZXJpYWwiLCJGcmFnbWVudCIsInN5bnRoZXNpcyIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl91aSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImljb24iLCJ0ZXh0IiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJfY291bnRlcnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwiX2NvbmZpZyIsImtleXMiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RhYi50c3giLCIvdHMvdmlld3Mvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3Mvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy92aWV3cy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEs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