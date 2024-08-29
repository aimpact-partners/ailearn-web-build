System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.07/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.1.0/voice", "@aimpact/chat-sdk@1.1.0/wrapper", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/ailearn-app@0.1.6-dev.07/components/hooks", "@aimpact/ailearn-app@0.1.6-dev.07/chat/messages", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/ailearn-app@0.1.6-dev.07/config", "pragmate-ui@1.0.0-beta.2/alert", "@aimpact/ailearn-app@0.1.6-dev.07/components/icons", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/tabs", "pragmate-ui@1.0.0-beta.2/dropdown"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp016Dev07DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev07DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk100Tracking) {
      dependency_5 = _aimpactAilearnSdk100Tracking;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk110Voice) {
      dependency_8 = _aimpactChatSdk110Voice;
    }, function (_aimpactChatSdk110Wrapper) {
      dependency_9 = _aimpactChatSdk110Wrapper;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_aimpactAilearnApp016Dev07ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp016Dev07ComponentsHooks;
    }, function (_aimpactAilearnApp016Dev07ChatMessages) {
      dependency_14 = _aimpactAilearnApp016Dev07ChatMessages;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_16 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta2List) {
      dependency_17 = _pragmateUi100Beta2List;
    }, function (_aimpactAilearnApp016Dev07Config) {
      dependency_18 = _aimpactAilearnApp016Dev07Config;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_19 = _pragmateUi100Beta2Alert;
    }, function (_aimpactAilearnApp016Dev07ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp016Dev07ComponentsIcons;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_21 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Tabs) {
      dependency_22 = _pragmateUi100Beta2Tabs;
    }, function (_pragmateUi100Beta2Dropdown) {
      dependency_23 = _pragmateUi100Beta2Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['@aimpact/ailearn-app/chat/messages', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['@aimpact/media-manager/audio-player', dependency_16], ['pragmate-ui/list', dependency_17], ['@aimpact/ailearn-app/config', dependency_18], ['pragmate-ui/alert', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20], ['pragmate-ui/icons', dependency_21], ['pragmate-ui/tabs', dependency_22], ['pragmate-ui/dropdown', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/assignment-dashboard-participant.widget');
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
        hash: 4024765045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
          var _voice = require("@aimpact/chat-sdk/voice");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
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
        hash: 3267508299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Widget = Widget;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _contexts = require("./contexts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@aimpact/ailearn-app/components/hooks");
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
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [, setActivities] = _react.default.useState(store.model?.activities?.elements);
            const size = (0, _hooks2.useMediaQuery)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfdWkiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidmFsdWUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiVmlldyIsIkRlc2t0b3BWaWV3IiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJzeW50aGVzaXMiLCJNZXNzYWdlcyIsInVzZXJQaWN0dXJlIiwicGhvdG9VUkwiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsImtleSIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2FjdGl2aXR5IiwiUGFuZSIsImFjdGl2aXR5IiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RhYnMiLCJUYWJBcHAiLCJpbWdDbHMiLCJUYWIiLCJJY29uIiwiSUNPTlMiLCJfdGFiIiwiX3BhbmUiLCJ0YWJzIiwicGFuZXMiLCJvcmRlciIsImZvckVhY2giLCJwdXNoIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJhcyIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJmaWx0ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giLCIvdHMvdmlld3MvdGFiLnRzeCIsIi90cy92aWV3cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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