System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.04/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@aimpact/ailearn-app@0.1.6-dev.04/components/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/chat/messages", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.04/config", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp016Dev04DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev04DashboardLayoutWidget;
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_12 = _aimpactChat102SharedHooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_aimpactAilearnApp016Dev04ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp016Dev04ComponentsHooks;
    }, function (_aimpactAilearnApp016Dev04ChatMessages) {
      dependency_15 = _aimpactAilearnApp016Dev04ChatMessages;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_17 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta2List) {
      dependency_18 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev04Config) {
      dependency_19 = _aimpactAilearnApp016Dev04Config;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_20 = _pragmateUi100Beta2Alert;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_22 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_23 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Dropdown) {
      dependency_24 = _pragmateUi100Beta2Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/alert', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/dropdown', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/assignment-dashboard-participant.widget');
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
        hash: 2761274117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _contexts = require("./contexts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            if (!ready || !textsReady) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
        hash: 3941760103,
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
            /**
             * config: https://dev.ailearn.api.aimpact.partners
             * asignmentId: 47d7e3ed-b625-4bb6-83a5-df87d12fd40b
             * activityId: b9b776a9-5cd5-4a93-9e10-2089a60a6887
             * trackingId: tHXKJj7aQsVW9oSvCKRg24dKfds1
             */
            ///assignments/${assignmentId}/activities/${activityId}/tracking/${trackingId}/audio
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX3VpIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50Iiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJ1c2VyUGljdHVyZSIsInBob3RvVVJMIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImljb24iLCJ0ZXh0IiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJfY291bnRlcnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwiX2NvbmZpZyIsImtleXMiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RhYi50c3giLCIvdHMvdmlld3Mvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3Mvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy92aWV3cy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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