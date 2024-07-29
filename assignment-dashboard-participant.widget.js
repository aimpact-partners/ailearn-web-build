System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-dev.03/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "@aimpact/ailearn-app@0.1.0-dev.03/components/hooks", "@aimpact/ailearn-app@0.1.0-dev.03/chat/messages", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/ailearn-app@0.1.0-dev.03/components/ui", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.0-dev.03/config", "pragmate-ui@1.0.0-beta.1/alert", "@aimpact/ailearn-app@0.1.0-dev.03/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp010Dev03DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Dev03DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Voice) {
      dependency_8 = _aimpactChatSdk101Voice;
    }, function (_aimpactChat102Wrapper) {
      dependency_9 = _aimpactChat102Wrapper;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_11 = _pragmateUi100Beta1Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_12 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_13 = _aimpactChat102SharedHooks;
    }, function (_aimpactAilearnApp010Dev03ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp010Dev03ComponentsHooks;
    }, function (_aimpactAilearnApp010Dev03ChatMessages) {
      dependency_15 = _aimpactAilearnApp010Dev03ChatMessages;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactAilearnApp010Dev03ComponentsUi) {
      dependency_17 = _aimpactAilearnApp010Dev03ComponentsUi;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_18 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta1List) {
      dependency_19 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp010Dev03Config) {
      dependency_20 = _aimpactAilearnApp010Dev03Config;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_21 = _pragmateUi100Beta1Alert;
    }, function (_aimpactAilearnApp010Dev03ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp010Dev03ComponentsIcons;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_23 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_24 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Dropdown) {
      dependency_25 = _pragmateUi100Beta1Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.03"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/dropdown', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.03/assignment-dashboard-participant.widget');
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
        hash: 4274133522,
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
                this.#model = _tracking.Tracking.get({
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
        hash: 3061845489,
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
            console.log(34, item);
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
        hash: 4216258107,
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
            }, texts.title), _react.default.createElement("div", {
              className: "messages__list"
            }, _react.default.createElement(_messages.Messages, {
              userPicture: item.chatModel?.user?.photoURL,
              store: store,
              messages: item.chatModel?.messages?.items,
              texts: texts
            })));
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
        hash: 3468111054,
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
                key: question.question,
                className: "question__container question__container--results"
              }, _react.default.createElement("h5", null, question.question), options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImV4cG9ydHMiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsInVzZXIiLCJjb25zdHJ1Y3RvciIsImxhbmd1YWdlIiwiQXBwV3JhcHBlciIsInJhdGUiLCJhdWRpb1NwZWVkIiwib24iLCJMaXN0ZW5BcHBDaGFuZ2VzIiwic2V0IiwibGFuZ3V1YWdlIiwiaWQiLCJUcmFja2luZyIsImNoYXQiLCJkYXRhIiwic2V0T3ZlcmxheSIsIm5hbWUiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJyZWZyZXNoIiwiZmV0Y2hpbmciLCJfcmVhY3QiLCJfY2hhdCIsIl9tYXRlcmlhbHMiLCJfY29udGV4dHMiLCJfYXNzZXNzbWVudCIsIl9zcG9rZW4iLCJBY3Rpdml0eSIsIml0ZW0iLCJ0ZXh0cyIsImFjdGl2aXRpZXMiLCJ1c2VNb2R1bGVDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsImRlYmF0ZSIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJsb2ciLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50Iiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJ1c2VyUGljdHVyZSIsInBob3RvVVJMIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIl91aSIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImljb24iLCJ0ZXh0IiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJfY291bnRlcnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwiX2NvbmZpZyIsImtleXMiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RhYi50c3giLCIvdHMvdmlld3Mvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3Mvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy92aWV3cy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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