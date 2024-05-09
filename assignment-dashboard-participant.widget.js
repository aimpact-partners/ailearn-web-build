System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/components/hooks", "@aimpact/ailearn-app@0.0.32/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.32/components/ui", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/dropdown"], function (_export, _context) {
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
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0032ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp0032ComponentsHooks;
    }, function (_aimpactAilearnApp0032ChatMessages) {
      dependency_14 = _aimpactAilearnApp0032ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_17 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi011List) {
      dependency_18 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_19 = _aimpactAilearnApp0032Config;
    }, function (_pragmateUi011Alert) {
      dependency_20 = _pragmateUi011Alert;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Icons) {
      dependency_22 = _pragmateUi011Icons;
    }, function (_pragmateUi011Tabs) {
      dependency_23 = _pragmateUi011Tabs;
    }, function (_pragmateUi011Dropdown) {
      dependency_24 = _pragmateUi011Dropdown;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['@aimpact/ailearn-app/chat/messages', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/alert', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/dropdown', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignment-dashboard-participant.widget');
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
        hash: 3755330979,
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
                console.log(0.1, id, userId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsIkFzc2lnbm1lbnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInNldE92ZXJsYXkiLCJuYW1lIiwicmVhZHkiLCJ0cmlnZ2VyRXZlbnQiLCJlIiwiZXJyb3IiLCJyZWZyZXNoIiwiZmV0Y2hpbmciLCJfcmVhY3QiLCJfY2hhdCIsIl9tYXRlcmlhbHMiLCJfY29udGV4dHMiLCJfYXNzZXNzbWVudCIsIl9zcG9rZW4iLCJBY3Rpdml0eSIsIml0ZW0iLCJ0ZXh0cyIsImFjdGl2aXRpZXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwiY2hhdCIsIm51bWJlciIsImNoYXRNb2RlbCIsIm1lc3NhZ2VzIiwiaXRlbXMiLCJsZW5ndGgiLCJzZXRNZXNzYWdlcyIsIkVtcHR5TWF0ZXJpYWwiLCJGcmFnbWVudCIsInN5bnRoZXNpcyIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl91aSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImljb24iLCJ0ZXh0IiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJfY291bnRlcnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwiX2NvbmZpZyIsImtleXMiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RhYi50c3giLCIvdHMvdmlld3Mvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3Mvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy92aWV3cy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFB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