System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3-test.07/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "@aimpact/ailearn-app@0.1.3-test.07/components/ui", "@aimpact/ailearn-app@0.1.3-test.07/components/hooks", "@aimpact/ailearn-app@0.1.3-test.07/chat/messages", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.3-test.07/config", "pragmate-ui@1.0.0-beta.1/alert", "@aimpact/ailearn-app@0.1.3-test.07/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp013Test07DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013Test07DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp013Test07ComponentsUi) {
      dependency_14 = _aimpactAilearnApp013Test07ComponentsUi;
    }, function (_aimpactAilearnApp013Test07ComponentsHooks) {
      dependency_15 = _aimpactAilearnApp013Test07ComponentsHooks;
    }, function (_aimpactAilearnApp013Test07ChatMessages) {
      dependency_16 = _aimpactAilearnApp013Test07ChatMessages;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_18 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta1List) {
      dependency_19 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp013Test07Config) {
      dependency_20 = _aimpactAilearnApp013Test07Config;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_21 = _pragmateUi100Beta1Alert;
    }, function (_aimpactAilearnApp013Test07ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp013Test07ComponentsIcons;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_23 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_24 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Dropdown) {
      dependency_25 = _pragmateUi100Beta1Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.07"], ["@aimpact/ailearn-app", "0.1.3-test.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/hooks', dependency_15], ['@aimpact/ailearn-app/chat/messages', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@aimpact/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/dropdown', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.07/assignment-dashboard-participant.widget');
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
        hash: 2517989642,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJfaG9va3MyIiwiX3VpIiwiX2hvb2tzMyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsInZhbHVlIiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsIlZpZXciLCJEZXNrdG9wVmlldyIsIk1vYmlsZVZpZXciLCJQcm92aWRlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2luZGV4IiwiX211bHRpcGxlIiwiY29udHJvbHMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsImhhc093blByb3BlcnR5IiwiX21lc3NhZ2VzIiwiX2VtcHR5IiwibnVtYmVyIiwiY2hhdE1vZGVsIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwiRW1wdHlNYXRlcmlhbCIsIkZyYWdtZW50Iiwic3ludGhlc2lzIiwiTWVzc2FnZXMiLCJ1c2VyUGljdHVyZSIsInBob3RvVVJMIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIm1lc3NhZ2UiLCJlbXB0eSIsIkVtcHR5Q2FyZCIsImljb24iLCJ0ZXh0IiwiQ291bnRlcnMiLCJjb3VudGVycyIsInRvdGFsIiwiY29ycmVjdCIsIl9xdWVzdGlvbnMiLCJfY291bnRlcnMiLCJzZXRDb3VudGVycyIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJrZXkiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwiX2NvbmZpZyIsImtleXMiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiYXNzZXNzbWVudHMiLCJvcmFsVGV4dCIsInN0dWRlbnRBdWRpbyIsInByZWxvYWQiLCJzcmMiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJmZWVkYmFjayIsIl9hY3Rpdml0eSIsIlBhbmUiLCJhY3Rpdml0eSIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIiwiX2ljb25zIiwiX2ljb25zMiIsIl90YWJzIiwiVGFiQXBwIiwiaW1nQ2xzIiwiVGFiIiwiSWNvbiIsIklDT05TIiwiX3RhYiIsIl9wYW5lIiwidGFicyIsInBhbmVzIiwib3JkZXIiLCJmb3JFYWNoIiwicHVzaCIsIlBhZ2VDb250YWluZXIiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiX2Ryb3Bkb3duIiwiX3RvZ2dsZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJJdGVtIiwiYXMiLCJEcm9wZG93bkl0ZW0iLCJpY29uQ2xzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJBcHBJY29uIiwiZmlsdGVyIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlRvZ2dsZU9wdGlvbiIsIkRyb3Bkb3duTWVudSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9jb250ZXh0cy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvc2VsZWN0aW9uLXByb3BzLnRzIiwiL3RzL3ZpZXdzL21hdGVyaWFscy9hc3Nlc3NtZW50LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY2hhdC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9jb3VudGVycy50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvb3B0aW9uLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2luZGV4LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvc3Bva2VuL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3BhbmUudHN4IiwiL3RzL3ZpZXdzL3Jlc3VsdHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3RhYi50c3giLCIvdHMvdmlld3Mvdmlld3MvZGVza3RvcC50c3giLCIvdHMvdmlld3Mvdmlld3MvbW9iaWxlLnRzeCIsIi90cy92aWV3cy92aWV3cy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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