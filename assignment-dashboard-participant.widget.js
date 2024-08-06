System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "@aimpact/ailearn-app@0.1.1/components/hooks", "@aimpact/ailearn-app@0.1.1/chat/messages", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/ailearn-app@0.1.1/components/ui", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.1/config", "pragmate-ui@1.0.0-beta.1/alert", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp011DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp011DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp011ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp011ComponentsHooks;
    }, function (_aimpactAilearnApp011ChatMessages) {
      dependency_15 = _aimpactAilearnApp011ChatMessages;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_17 = _aimpactAilearnApp011ComponentsUi;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_18 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta1List) {
      dependency_19 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp011Config) {
      dependency_20 = _aimpactAilearnApp011Config;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_21 = _pragmateUi100Beta1Alert;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp011ComponentsIcons;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_23 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_24 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Dropdown) {
      dependency_25 = _pragmateUi100Beta1Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/dropdown', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.1/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/assignment-dashboard-participant.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4204674960,
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
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1097086350,
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
                if (this.#userId === userId && this.#assignmentId === id) return;
                if (this.#model) {
                  this.#model = undefined;
                }
                this.#assignmentId = id;
                this.#model = _tracking.Tracking.get({
                  assignmentId: id,
                  userId,
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
            clear() {
              this.#model = undefined;
              this.ready = false;
              this.triggerEvent();
              this.#assessmentId = undefined;
              this.#accessed = undefined;
              this.#userId = undefined;
              this.#assessmentId = undefined;
              this.#user = undefined;
              console.log('clean...');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfaG9va3MzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidmFsdWUiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiVmlldyIsIkRlc2t0b3BWaWV3IiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJzeW50aGVzaXMiLCJNZXNzYWdlcyIsInVzZXJQaWN0dXJlIiwicGhvdG9VUkwiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiX3VpIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsImtleSIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2FjdGl2aXR5IiwiUGFuZSIsImFjdGl2aXR5IiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RhYnMiLCJUYWJBcHAiLCJpbWdDbHMiLCJUYWIiLCJJY29uIiwiSUNPTlMiLCJfdGFiIiwiX3BhbmUiLCJ0YWJzIiwicGFuZXMiLCJvcmRlciIsImZvckVhY2giLCJwdXNoIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJhcyIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJmaWx0ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giLCIvdHMvdmlld3MvdGFiLnRzeCIsIi90cy92aWV3cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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