System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.32/components/hooks", "@aimpact/ailearn-app@0.0.32/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@aimpact/ailearn-app@0.0.32/components/ui", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/config", "pragmate-ui@0.1.1/alert", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/tabs", "pragmate-ui@0.1.1/dropdown"], function (_export, _context) {
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/voice', dependency_7], ['@aimpact/chat/wrapper', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['@aimpact/ailearn-app/chat/messages', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['@bgroup/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/alert', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/dropdown', dependency_24]]);
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
        hash: 3243807375,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJpZCIsImF0dHJpYnV0ZXMiLCJnZXQiLCJwYXJ0aWNpcGFudElkIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfaG9va3MzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidmFsdWUiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiVmlldyIsIkRlc2t0b3BWaWV3IiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJjaGF0IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50Iiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiX3VpIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsImtleSIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2FjdGl2aXR5IiwiUGFuZSIsImFjdGl2aXR5IiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RhYnMiLCJUYWJBcHAiLCJpbWdDbHMiLCJUYWIiLCJJY29uIiwiSUNPTlMiLCJfdGFiIiwiX3BhbmUiLCJ0YWJzIiwicGFuZXMiLCJvcmRlciIsImZvckVhY2giLCJwdXNoIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJhcyIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJmaWx0ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giLCIvdHMvdmlld3MvdGFiLnRzeCIsIi90cy92aWV3cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxH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