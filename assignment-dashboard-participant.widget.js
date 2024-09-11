System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.29/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.1.0/voice", "@aimpact/chat-sdk@1.1.0/wrapper", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.29/components/ui", "@aimpact/ailearn-app@0.1.6-dev.29/components/hooks", "@aimpact/chat-sdk@1.1.0/chat-component.code", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "pragmate-ui@1.0.0-beta.6/empty", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.1.6-dev.29/config", "pragmate-ui@1.0.0-beta.6/alert", "@aimpact/ailearn-app@0.1.6-dev.29/components/icons", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/tabs", "pragmate-ui@1.0.0-beta.6/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp016Dev29DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev29DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev29ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev29ComponentsUi;
    }, function (_aimpactAilearnApp016Dev29ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp016Dev29ComponentsHooks;
    }, function (_aimpactChatSdk110ChatComponentCode) {
      dependency_14 = _aimpactChatSdk110ChatComponentCode;
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_16 = _pragmateUi100Beta6Empty;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_17 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta6List) {
      dependency_18 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp016Dev29Config) {
      dependency_19 = _aimpactAilearnApp016Dev29Config;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_20 = _pragmateUi100Beta6Alert;
    }, function (_aimpactAilearnApp016Dev29ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp016Dev29ComponentsIcons;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_22 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_23 = _pragmateUi100Beta6Tabs;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_24 = _pragmateUi100Beta6Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.29"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat-sdk/wrapper', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['@aimpact/chat-sdk/chat-component.code', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/media-manager/audio-player', dependency_17], ['pragmate-ui/list', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['pragmate-ui/alert', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/icons', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/dropdown', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.29/assignment-dashboard-participant.widget');
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
        hash: 2022707116,
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
        hash: 1688661405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserChat = UserChat;
          var _react = require("react");
          var _contexts = require("../contexts");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./empty");
          var _emptyChat = require("./empty-chat");
          //@ts-ignore

          function UserChat({
            item
          }) {
            const {
              texts: {
                chat: texts
              },
              store
            } = (0, _contexts.useModuleContext)();
            if (!item.chatModel?.id) return _react.default.createElement(_empty.EmptyMaterial, null);
            const chatSpecs = {};
            const chatId = item.chatModel.id;
            return _react.default.createElement(_react.default.Fragment, null, item?.data?.messages?.synthesis && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.synthesis), _react.default.createElement("p", null, item.data.messages?.synthesis)), _react.default.createElement("h4", null, texts.title), _react.default.createElement("div", {
              className: "messages__list"
            }, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _emptyChat.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null))));
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

      /********************************************
      INTERNAL MODULE: ./views/materials/empty-chat
      ********************************************/

      ims.set('./views/materials/empty-chat', {
        hash: 2295812042,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _contexts = require("../contexts");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _contexts.useModuleContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = texts;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfdWkiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidmFsdWUiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiVmlldyIsIkRlc2t0b3BWaWV3IiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIl9lbXB0eUNoYXQiLCJjaGF0TW9kZWwiLCJFbXB0eU1hdGVyaWFsIiwiY2hhdFNwZWNzIiwiY2hhdElkIiwiRnJhZ21lbnQiLCJtZXNzYWdlcyIsInN5bnRoZXNpcyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBZ2VudHNDaGF0UGFuZWwiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiRW1wdHkiLCJtZXNzYWdlIiwiRW1wdHlDYXJkIiwidGV4dCIsIkNvdW50ZXJzIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJBc3Nlc3NtZW50UXVlc3Rpb25zIiwic2hvd0Fuc3dlcnMiLCJJdGVtT3B0aW9uIiwib3B0aW9uIiwiaSIsInF1ZXN0aW9uIiwiY2xzIiwiYW5zd2VyIiwiYWNjdXJhY3kiLCJjb3JyZWN0QW5zd2VyIiwia2V5IiwiX29wdGlvbiIsInJlc3BvbnNlcyIsIm91dHB1dCIsInF1ZXN0aW9ucyIsIm1hcCIsImluZGV4Iiwib3B0aW9ucyIsImF0dHJzIiwiX2xpc3QiLCJfaXRlbSIsIl9jb25maWciLCJrZXlzIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJzdHVkZW50QXVkaW8iLCJwcmVsb2FkIiwic3JjIiwiTGlzdCIsImNvbnRhaW5lciIsIml0ZW1zIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LWNoYXQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9lbXB0eS50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvY291bnRlcnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL29wdGlvbi50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL3Nwb2tlbi9pdGVtLnRzeCIsIi90cy92aWV3cy9wYW5lLnRzeCIsIi90cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCIsIi90cy92aWV3cy90YWIudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL2Rlc2t0b3AudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL21vYmlsZS50c3giLCIvdHMvdmlld3Mvdmlld3MvdG9nZ2xlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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