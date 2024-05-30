System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.45/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.1.12/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.45/components/hooks", "@aimpact/ailearn-app@0.0.45/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.45/config", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/dropdown"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0045DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0045DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Voice) {
      dependency_8 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0045ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp0045ComponentsHooks;
    }, function (_aimpactAilearnApp0045ChatMessages) {
      dependency_15 = _aimpactAilearnApp0045ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_17 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactMediaManager100AudioPlayer) {
      dependency_18 = _aimpactMediaManager100AudioPlayer;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_20 = _aimpactAilearnApp0045Config;
    }, function (_pragmateUi011Alert) {
      dependency_21 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp0045ComponentsIcons;
    }, function (_pragmateUi011Icons) {
      dependency_23 = _pragmateUi011Icons;
    }, function (_pragmateUi011Tabs) {
      dependency_24 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Dropdown) {
      dependency_25 = _pragmateUi011Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/dropdown', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.45/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/assignment-dashboard-participant.widget');
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
        hash: 1160648927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
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
                this.#model = new _tracking.Tracking({
                  assignmentId: id,
                  chat: true
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
        hash: 560109736,
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
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.assignmentId}/activities/${item.id}/tracking/${store.userId}/audio`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsInVzZXIiLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwiaWQiLCJUcmFja2luZyIsImNoYXQiLCJkYXRhIiwic2V0T3ZlcmxheSIsIm5hbWUiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWZyZXNoIiwiZmV0Y2hpbmciLCJfcmVhY3QiLCJfY2hhdCIsIl9tYXRlcmlhbHMiLCJfY29udGV4dHMiLCJfYXNzZXNzbWVudCIsIl9zcG9rZW4iLCJBY3Rpdml0eSIsIml0ZW0iLCJ0ZXh0cyIsImFjdGl2aXRpZXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50Iiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiX3VpIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsImtleSIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2FjdGl2aXR5IiwiUGFuZSIsImFjdGl2aXR5IiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RhYnMiLCJUYWJBcHAiLCJpbWdDbHMiLCJUYWIiLCJJY29uIiwiSUNPTlMiLCJfdGFiIiwiX3BhbmUiLCJ0YWJzIiwicGFuZXMiLCJvcmRlciIsImZvckVhY2giLCJwdXNoIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJhcyIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJmaWx0ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giLCIvdHMvdmlld3MvdGFiLnRzeCIsIi90cy92aWV3cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxL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