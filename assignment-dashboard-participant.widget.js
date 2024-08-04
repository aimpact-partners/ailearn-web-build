System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.0-test.11/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.0.0/tracking", "@beyond-js/reactive@1.2.0/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/voice", "@aimpact/chat@1.0.2/wrapper", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "@aimpact/ailearn-app@0.1.0-test.11/components/hooks", "@aimpact/ailearn-app@0.1.0-test.11/chat/messages", "@aimpact/chat-sdk@1.0.1/widgets/markdown", "@aimpact/ailearn-app@0.1.0-test.11/components/ui", "@aimpact/media-manager@0.0.1-beta.1/audio-player", "pragmate-ui@1.0.0-beta.1/list", "@aimpact/ailearn-app@0.1.0-test.11/config", "pragmate-ui@1.0.0-beta.1/alert", "@aimpact/ailearn-app@0.1.0-test.11/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/tabs", "pragmate-ui@1.0.0-beta.1/dropdown"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp010Test11DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp010Test11DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp010Test11ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp010Test11ComponentsHooks;
    }, function (_aimpactAilearnApp010Test11ChatMessages) {
      dependency_15 = _aimpactAilearnApp010Test11ChatMessages;
    }, function (_aimpactChatSdk101WidgetsMarkdown) {
      dependency_16 = _aimpactChatSdk101WidgetsMarkdown;
    }, function (_aimpactAilearnApp010Test11ComponentsUi) {
      dependency_17 = _aimpactAilearnApp010Test11ComponentsUi;
    }, function (_aimpactMediaManager001Beta1AudioPlayer) {
      dependency_18 = _aimpactMediaManager001Beta1AudioPlayer;
    }, function (_pragmateUi100Beta1List) {
      dependency_19 = _pragmateUi100Beta1List;
    }, function (_aimpactAilearnApp010Test11Config) {
      dependency_20 = _aimpactAilearnApp010Test11Config;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_21 = _pragmateUi100Beta1Alert;
    }, function (_aimpactAilearnApp010Test11ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp010Test11ComponentsIcons;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_23 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Tabs) {
      dependency_24 = _pragmateUi100Beta1Tabs;
    }, function (_pragmateUi100Beta1Dropdown) {
      dependency_25 = _pragmateUi100Beta1Dropdown;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-test.11"], ["@aimpact/ailearn-app", "0.1.0-test.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/chat-sdk/voice', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14], ['@aimpact/ailearn-app/chat/messages', dependency_15], ['@aimpact/chat-sdk/widgets/markdown', dependency_16], ['@aimpact/ailearn-app/components/ui', dependency_17], ['@aimpact/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['pragmate-ui/icons', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/dropdown', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "old-assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.1.0-test.11/assignment-dashboard-participant.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/dashboard/participant/${participantId}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-test.11/assignment-dashboard-participant.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0Iiwic2hvdyIsIkxheW91dEJyb2tlciIsInNldEJhY2tMaW5rIiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwicmVtb3ZlT3ZlcmxheSIsImNsZWFyIiwiZXhwb3J0cyIsIl90cmFja2luZyIsIl9tb2RlbCIsIl92b2ljZSIsIl93cmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsImFzc2Vzc21lbnQiLCJhc3Nlc3NtZW50SWQiLCJ1c2VySWQiLCJwbGF5ZXJzIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsImFzc2lnbm1lbnRJZCIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJtb2RlbCIsImFjY2Vzc2VkIiwidXNlciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJpZCIsInVuZGVmaW5lZCIsIlRyYWNraW5nIiwiY2hhdCIsImRhdGEiLCJzZXRPdmVybGF5IiwibmFtZSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsImxvZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZU1vZHVsZUNvbnRleHQiLCJ0eXBlcyIsImNvbnZlcnNhdGlvbiIsIlVzZXJDaGF0IiwiZGViYXRlIiwiTWF0ZXJpYWxBc3Nlc3NtZW50Iiwic3Bva2VuIiwiU3Bva2VuQW5hbHlzaXMiLCJDb250cm9sIiwidHlwZSIsIkRlZmF1bHRNYXRlcmlhbCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJzdWJ0eXBlIiwiZGVzY3JpcHRpb24iLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfaG9va3MzIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEFjdGl2aXRpZXMiLCJlbGVtZW50cyIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwidmFsdWUiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiVmlldyIsIkRlc2t0b3BWaWV3IiwiTW9iaWxlVmlldyIsIlByb3ZpZGVyIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW5kZXgiLCJfbXVsdGlwbGUiLCJjb250cm9scyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiaGFzT3duUHJvcGVydHkiLCJfbWVzc2FnZXMiLCJfZW1wdHkiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwibGVuZ3RoIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiRnJhZ21lbnQiLCJzeW50aGVzaXMiLCJNZXNzYWdlcyIsInVzZXJQaWN0dXJlIiwicGhvdG9VUkwiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwiX3VpIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiaWNvbiIsInRleHQiLCJDb3VudGVycyIsImNvdW50ZXJzIiwidG90YWwiLCJjb3JyZWN0IiwiX3F1ZXN0aW9ucyIsIl9jb3VudGVycyIsInNldENvdW50ZXJzIiwiQXNzZXNzbWVudFF1ZXN0aW9ucyIsInNob3dBbnN3ZXJzIiwiSXRlbU9wdGlvbiIsIm9wdGlvbiIsImkiLCJxdWVzdGlvbiIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwiY29ycmVjdEFuc3dlciIsImtleSIsIl9vcHRpb24iLCJyZXNwb25zZXMiLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJtYXAiLCJpbmRleCIsIm9wdGlvbnMiLCJhdHRycyIsIl9saXN0IiwiX2l0ZW0iLCJfY29uZmlnIiwia2V5cyIsImF1ZGlvVXJsIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJhc3Nlc3NtZW50cyIsIm9yYWxUZXh0Iiwic3R1ZGVudEF1ZGlvIiwicHJlbG9hZCIsInNyYyIsIkxpc3QiLCJjb250YWluZXIiLCJjb250cm9sIiwiU3Bva2VuSXRlbSIsImZlZWRiYWNrIiwiX2FjdGl2aXR5IiwiUGFuZSIsImFjdGl2aXR5IiwiX2FsZXJ0IiwiUmVzdWx0cyIsInNlbGVjdGlvbiIsImV2YWx1YXRpb24iLCJhbnN3ZXJzIiwicmVzdWx0cyIsIkFsZXJ0Iiwid3JvbmciLCJfaWNvbnMiLCJfaWNvbnMyIiwiX3RhYnMiLCJUYWJBcHAiLCJpbWdDbHMiLCJUYWIiLCJJY29uIiwiSUNPTlMiLCJfdGFiIiwiX3BhbmUiLCJ0YWJzIiwicGFuZXMiLCJvcmRlciIsImZvckVhY2giLCJwdXNoIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJfZHJvcGRvd24iLCJfdG9nZ2xlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIkl0ZW0iLCJhcyIsIkRyb3Bkb3duSXRlbSIsImljb25DbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkFwcEljb24iLCJmaWx0ZXIiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiVG9nZ2xlT3B0aW9uIiwiRHJvcGRvd25NZW51Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giLCIvdHMvdmlld3MvdGFiLnRzeCIsIi90cy92aWV3cy92aWV3cy9kZXNrdG9wLnRzeCIsIi90cy92aWV3cy92aWV3cy9tb2JpbGUudHN4IiwiL3RzL3ZpZXdzL3ZpZXdzL3RvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFPLE1BQU07WUFDZDtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hQLGdCQUFBLENBQUFRLFlBQVksQ0FBQ0MsV0FBVyxDQUFDLGdCQUFnQixJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztjQUVuRyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN4RjtZQUVBRSxJQUFJQSxDQUFBO2NBQ0hkLGdCQUFBLENBQUFRLFlBQVksQ0FBQ08sYUFBYSxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBaEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBaUIsU0FBQSxHQUFBckIsT0FBQTtVQUVBLElBQUFzQixNQUFBLEdBQUF0QixPQUFBO1VBRUEsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBd0IsUUFBQSxHQUFBeEIsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTSxNQUFPUSxZQUFhLFNBQVFjLE1BQUEsQ0FBQUcsYUFBMkI7WUFDNUQsQ0FBQUMsVUFBVztZQUNYLElBQUlBLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBQSxVQUFXO1lBQ3hCO1lBQ0EsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsT0FBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRVAsTUFBQSxDQUFBUSxLQUFLO2NBQ1ZDLEdBQUcsRUFBRVQsTUFBQSxDQUFBVSxRQUFRLENBQUM7YUFDZDs7WUFDRCxDQUFBQyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxhQUFjO1lBQ2QsQ0FBQUMsTUFBTyxHQUFHLEtBQUs7WUFDZixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUQsYUFBYztZQUMzQjtZQUVBLENBQUFFLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUNBLENBQUFDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUNBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFMLGFBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBTixPQUFRLENBQUMsSUFBSSxDQUFDLENBQUFPLE1BQU8sQ0FBQyxDQUFDO2dCQUNyREssUUFBUSxFQUFFakIsUUFBQSxDQUFBa0IsVUFBVSxDQUFDRCxRQUFRO2dCQUM3QkUsSUFBSSxFQUFFbkIsUUFBQSxDQUFBa0IsVUFBVSxDQUFDRTtlQUNqQixDQUFDO2NBRUZwQixRQUFBLENBQUFrQixVQUFVLENBQUNHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzVEO1lBRUFBLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDdkIsSUFBSSxDQUFDLENBQUFYLGFBQWMsQ0FBQ1ksR0FBRyxDQUFDO2dCQUN2QkosSUFBSSxFQUFFbkIsUUFBQSxDQUFBa0IsVUFBVSxDQUFDRSxVQUFVO2dCQUMzQkksU0FBUyxFQUFFeEIsUUFBQSxDQUFBa0IsVUFBVSxDQUFDRDtlQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU16QixJQUFJQSxDQUFDaUMsRUFBRSxFQUFFckIsTUFBTTtjQUNwQixJQUFJO2dCQUNILElBQUksSUFBSSxDQUFDLENBQUFBLE1BQU8sS0FBS0EsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBTSxZQUFhLEtBQUtlLEVBQUUsRUFBRTtnQkFFMUQsSUFBSSxJQUFJLENBQUMsQ0FBQVosS0FBTSxFQUFFO2tCQUNoQixJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHYSxTQUFTOztnQkFFeEIsSUFBSSxDQUFDLENBQUFoQixZQUFhLEdBQUdlLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBWixLQUFNLEdBQUdoQixTQUFBLENBQUE4QixRQUFRLENBQUNwQyxHQUFHLENBQUM7a0JBQUVtQixZQUFZLEVBQUVlLEVBQUU7a0JBQUVyQixNQUFNO2tCQUFFd0IsSUFBSSxFQUFFO2dCQUFJLENBQUUsQ0FBQztnQkFFcEUsTUFBTUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFoQixLQUFNLENBQUNyQixJQUFJLENBQUM7a0JBQUVpQyxFQUFFO2tCQUFFckI7Z0JBQU0sQ0FBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsQ0FBQVcsSUFBSyxHQUFHYyxJQUFJLENBQUNkLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxDQUFBWCxNQUFPLEdBQUdBLE1BQU07Z0JBQ3JCLElBQUksQ0FBQyxDQUFBVSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFDckNuQyxnQkFBQSxDQUFBUSxZQUFZLENBQUMyQyxVQUFVLENBQUNELElBQUksQ0FBQ2QsSUFBSSxDQUFDZ0IsSUFBSSxDQUFDO2dCQUN2QyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQyxDQUFBekIsS0FBTSxDQUFDckIsSUFBSSxDQUFDO2tCQUFFaUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBZjtnQkFBYSxDQUFFLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxDQUFBSSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFELEtBQU0sQ0FBQ0MsUUFBUTtnQkFDckMsSUFBSSxDQUFDd0IsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQ0wsWUFBWSxDQUFDLGNBQWMsQ0FBQztlQUNqQyxDQUFDLE9BQU9DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQXZDLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQWtCLEtBQU0sR0FBR2EsU0FBUztjQUN2QixJQUFJLENBQUNNLEtBQUssR0FBRyxLQUFLO2NBQ2xCLElBQUksQ0FBQ0MsWUFBWSxFQUFFO2NBQ25CLElBQUksQ0FBQyxDQUFBOUIsWUFBYSxHQUFHdUIsU0FBUztjQUM5QixJQUFJLENBQUMsQ0FBQVosUUFBUyxHQUFHWSxTQUFTO2NBQzFCLElBQUksQ0FBQyxDQUFBdEIsTUFBTyxHQUFHc0IsU0FBUztjQUN4QixJQUFJLENBQUMsQ0FBQXZCLFlBQWEsR0FBR3VCLFNBQVM7Y0FDOUIsSUFBSSxDQUFDLENBQUFYLElBQUssR0FBR1csU0FBUztjQUN0QlMsT0FBTyxDQUFDSSxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ3hCOztVQUNBM0MsT0FBQSxDQUFBWixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUdELElBQUF3RCxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQWlFLEtBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBa0UsVUFBQSxHQUFBbEUsT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQW9FLFdBQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBcUUsT0FBQSxHQUFBckUsT0FBQTtVQUNNLFNBQVVzRSxRQUFRQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUNoQyxNQUFNO2NBQ0xDLEtBQUssRUFBRTtnQkFBRUMsVUFBVSxFQUFFRDtjQUFLO1lBQUUsQ0FDNUIsR0FBRyxJQUFBTCxTQUFBLENBQUFPLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU1DLEtBQUssR0FBRztjQUNiQyxZQUFZLEVBQUVYLEtBQUEsQ0FBQVksUUFBUTtjQUN0QixnQkFBZ0IsRUFBRVosS0FBQSxDQUFBWSxRQUFRO2NBQzFCLGdCQUFnQixFQUFFWixLQUFBLENBQUFZLFFBQVE7Y0FDMUJDLE1BQU0sRUFBRWIsS0FBQSxDQUFBWSxRQUFRO2NBQ2hCLGlCQUFpQixFQUFFVCxXQUFBLENBQUFXLGtCQUFrQjtjQUNyQ3JELFVBQVUsRUFBRTBDLFdBQUEsQ0FBQVcsa0JBQWtCO2NBQzlCQyxNQUFNLEVBQUVYLE9BQUEsQ0FBQVk7YUFDUjtZQUVELE1BQU1DLE9BQU8sR0FBR1AsS0FBSyxDQUFDSixJQUFJLENBQUNZLElBQUksQ0FBQyxJQUFJakIsVUFBQSxDQUFBa0IsZUFBZTtZQUVuRCxPQUNDcEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGNBQ0N0QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQTRCLEdBQzdDdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtmLElBQUksQ0FBQ2lCLEtBQUssQ0FBTSxFQUNyQnhCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBc0IsR0FDeEN2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFDQ3RCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU2QsS0FBSyxDQUFDVyxJQUFJLEUsSUFBVyxFLEtBQUVaLElBQUksQ0FBQ1ksSUFBSSxDQUNuQyxFQUNOWixJQUFJLENBQUNrQixPQUFPLElBQ1p6QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFDQ3RCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU2QsS0FBSyxDQUFDaUIsT0FBTyxFLElBQVcsRSxLQUFFbEIsSUFBSSxDQUFDa0IsT0FBTyxDQUVoRCxDQUNRLEVBRVZ6QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQTZCLEdBQy9DdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtkLEtBQUssQ0FBQ2tCLFdBQVcsQ0FBTSxFQUM1QjFCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFaEIsSUFBSSxDQUFDbUIsV0FBVyxDQUFLLENBQy9CLENBQ0YsRUFDVDFCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixPQUFPO2NBQUNYLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2xCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUFQLE1BQUEsR0FBQWhFLE9BQUE7VUFRTyxNQUFNMkYsYUFBYSxHQUFBdkUsT0FBQSxDQUFBdUUsYUFBQSxHQUFHM0IsTUFBQSxDQUFBcUIsT0FBSyxDQUFDTyxhQUFhLENBQVcsRUFBYyxDQUFDO1VBQ25FLE1BQU1sQixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNVixNQUFBLENBQUFxQixPQUFLLENBQUNRLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUN2RSxPQUFBLENBQUFzRCxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUdEUsSUFBQW9CLGVBQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUErRixXQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQWdHLE1BQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBaUcsT0FBQSxHQUFBakcsT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBRUEsSUFBQWtHLE9BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUFvRyxPQUFBLEdBQUFwRyxPQUFBO1VBRU87VUFBVSxTQUNSUyxNQUFNQSxDQUFDO1lBQUVILEtBQUs7WUFBRUEsS0FBSyxFQUFFO2NBQUVvQjtZQUFVO1VBQUUsQ0FBMkI7WUFDeEUsTUFBTSxDQUFDOEIsS0FBSyxFQUFFNkMsUUFBUSxDQUFDLEdBQUdyQyxNQUFBLENBQUFxQixPQUFLLENBQUNpQixRQUFRLENBQUNoRyxLQUFLLENBQUNrRCxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDK0MsVUFBVSxFQUFFL0IsS0FBSyxDQUFDLEdBQUcsSUFBQXlCLE9BQUEsQ0FBQU8sUUFBUSxFQUFDVixlQUFBLENBQUFXLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sR0FBR0MsYUFBYSxDQUFDLEdBQUczQyxNQUFBLENBQUFxQixPQUFLLENBQUNpQixRQUFRLENBQUNoRyxLQUFLLENBQUMrQixLQUFLLEVBQUVvQyxVQUFVLEVBQUVtQyxRQUFRLENBQUM7WUFFM0UsTUFBTUMsSUFBSSxHQUFHLElBQUFYLE9BQUEsQ0FBQVksYUFBYSxHQUFFO1lBQzVCLE1BQU1DLEtBQUssR0FBRztjQUFFekcsS0FBSztjQUFFb0IsVUFBVTtjQUFFOEMsS0FBSztjQUFFcUM7WUFBSSxDQUFFO1lBQ2hELElBQUFiLE1BQUEsQ0FBQWdCLFNBQVMsRUFBQyxDQUFDMUcsS0FBSyxDQUFDLEVBQUUsTUFBTStGLFFBQVEsQ0FBQy9GLEtBQUssQ0FBQ2tELEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUF3QyxNQUFBLENBQUFnQixTQUFTLEVBQUMsQ0FBQzFHLEtBQUssQ0FBQyxFQUFFLE1BQU1xRyxhQUFhLENBQUNyRyxLQUFLLENBQUMrQixLQUFLLEVBQUVvQyxVQUFVLEVBQUVtQyxRQUFRLENBQUMsRUFBRSxjQUFjLENBQUM7WUFFMUYsSUFBSSxDQUFDcEQsS0FBSyxJQUFJLENBQUMrQyxVQUFVLEVBQUUsT0FBT3ZDLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUyxXQUFBLENBQUFrQixPQUFPO2NBQUNDLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFDM0QsTUFBTUMsSUFBSSxHQUFHTixJQUFJLEtBQUssSUFBSSxJQUFJQSxJQUFJLEtBQUssSUFBSSxHQUFHVixRQUFBLENBQUFpQixXQUFXLEdBQUdoQixPQUFBLENBQUFpQixVQUFVO1lBQ3RFLE9BQ0NyRCxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ25CLFNBQUEsQ0FBQXdCLGFBQWEsQ0FBQzJCLFFBQVE7Y0FBQ1AsS0FBSyxFQUFFQTtZQUFLLEdBQ25DL0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixJQUFJLE9BQUcsQ0FDZ0I7VUFFM0I7Ozs7Ozs7Ozs7O1VDN0JBOztVQUVBSSxNQUFBLENBQUFDLGNBQUEsQ0FBQXBHLE9BQUE7WUFDQTJGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBL0MsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUF5SCxNQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQTBILFNBQUEsR0FBQTFILE9BQUE7VUFFTSxTQUFVK0Usa0JBQWtCQSxDQUFDO1lBQUVSO1VBQUksQ0FBRTtZQUMxQyxNQUFNb0QsUUFBUSxHQUFHO2NBQ2hCLGlCQUFpQixFQUFFRCxTQUFBLENBQUFFO2FBQ25CO1lBRUQsTUFBTTFDLE9BQU8sR0FBR3lDLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDdEQsSUFBSSxDQUFDa0IsT0FBTyxDQUFDLEdBQUdrQyxRQUFRLENBQUNwRCxJQUFJLENBQUNrQixPQUFPLENBQUMsR0FBR2dDLE1BQUEsQ0FBQXJDLGVBQWU7WUFFaEcsT0FDQ3BCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxjQUNDdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUNvQyxTQUFBLENBQUFFLG9CQUFvQjtjQUFDckQsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDL0I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQVAsTUFBQSxHQUFBaEUsT0FBQTtVQUVBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQWdHLE1BQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBOEgsU0FBQSxHQUFBOUgsT0FBQTtVQUNBLElBQUErSCxNQUFBLEdBQUEvSCxPQUFBO1VBQ00sU0FBVTZFLFFBQVFBLENBQUM7WUFBRU47VUFBSSxDQUFFO1lBQ2hDLE1BQU07Y0FDTEMsS0FBSyxFQUFFO2dCQUFFcEIsSUFBSSxFQUFFb0I7Y0FBSyxDQUFFO2NBQ3RCbEU7WUFBSyxDQUNMLEdBQUcsSUFBQTZELFNBQUEsQ0FBQU8sZ0JBQWdCLEdBQUU7WUFDdEIsSUFBSXNELE1BQU0sR0FBRzFILEtBQUssQ0FBQytCLEtBQUssQ0FBQzRGLFNBQVMsRUFBRUMsUUFBUSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sSUFBSSxDQUFDO1lBRTlELE1BQU0sQ0FBQ0YsUUFBUSxFQUFFRyxXQUFXLENBQUMsR0FBR3JFLE1BQUEsQ0FBQXFCLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQzBCLE1BQU0sR0FBR3pELElBQUksQ0FBQzBELFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRTdGLElBQUFuQyxNQUFBLENBQUFnQixTQUFTLEVBQ1IsQ0FBQ3pDLElBQUksQ0FBQyxFQUNOLE1BQUs7Y0FDSjhELFdBQVcsQ0FBQy9ILEtBQUssQ0FBQytCLEtBQUssQ0FBQzRGLFNBQVMsRUFBRUMsUUFBUSxDQUFDQyxLQUFLLENBQUM7WUFDbkQsQ0FBQyxFQUNELGFBQWEsQ0FDYjtZQUVELElBQUksQ0FBQzVELElBQUksQ0FBQzBELFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUUsT0FBT25FLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBTyxhQUFhLE9BQUc7WUFFOUQsT0FDQ3RFLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFBdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBa0QsUUFBQSxRQUNFaEUsSUFBSSxFQUFFbEIsSUFBSSxFQUFFNkUsUUFBUSxFQUFFTSxTQUFTLElBQy9CeEUsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUF0QixNQUFBLENBQUFxQixPQUFBLENBQUFrRCxRQUFBLFFBQ0N2RSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsYUFBS2QsS0FBSyxDQUFDZ0UsU0FBUyxDQUFNLEVBQzFCeEUsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLFlBQUlmLElBQUksQ0FBQ2xCLElBQUksQ0FBQzZFLFFBQVEsRUFBRU0sU0FBUyxDQUFLLENBRXZDLEVBQ0R4RSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQU8sR0FBRWYsS0FBSyxDQUFDZ0IsS0FBSyxDQUFNLEVBQ3hDeEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQixHQUM5QnZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsU0FBQSxDQUFBVyxRQUFRO2NBQ1JDLFdBQVcsRUFBRW5FLElBQUksQ0FBQzBELFNBQVMsRUFBRTFGLElBQUksRUFBRW9HLFFBQVE7Y0FDM0NySSxLQUFLLEVBQUVBLEtBQUs7Y0FDWjRILFFBQVEsRUFBRTNELElBQUksQ0FBQzBELFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2NBQ3pDM0QsS0FBSyxFQUFFQTtZQUFLLEVBQ1gsQ0FDRyxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUFSLE1BQUEsR0FBQWhFLE9BQUE7VUFFQSxJQUFBNEksU0FBQSxHQUFBNUksT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ00sU0FBVTZJLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUV2STtZQUFLLENBQUUsR0FBRyxJQUFBNkQsU0FBQSxDQUFBTyxnQkFBZ0IsR0FBRTtZQUVwQyxPQUFPVixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3NELFNBQUEsQ0FBQUUsUUFBUTtjQUFDQyxPQUFPLEVBQUV6SSxLQUFLLENBQUNvQixVQUFVLENBQUNzSDtZQUFvQixFQUFJO1VBQ3BFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUFoRixNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQWlKLEdBQUEsR0FBQWpKLE9BQUE7VUFDQSxJQUFBbUUsU0FBQSxHQUFBbkUsT0FBQTtVQUNNLFNBQVVzSSxhQUFhQSxDQUFDO1lBQUVZO1VBQU8sQ0FBd0I7WUFDOUQsTUFBTTtjQUFFMUU7WUFBSyxDQUFFLEdBQUcsSUFBQUwsU0FBQSxDQUFBTyxnQkFBZ0IsR0FBRTtZQUNwQ3dFLE9BQU8sR0FBR0EsT0FBTyxJQUFJMUUsS0FBSyxDQUFDQyxVQUFVLENBQUMwRSxLQUFLO1lBQzNDLE9BQU9uRixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQzJELEdBQUEsQ0FBQUcsU0FBUztjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxJQUFJLEVBQUVKLE9BQU87Y0FBRTNELFNBQVMsRUFBQztZQUEwQixFQUFHO1VBQ3JGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF2QixNQUFBLEdBQUFoRSxPQUFBO1VBRU0sU0FBVW9GLGVBQWVBLENBQUM7WUFBRWI7VUFBSSxDQUFFO1lBQ3ZDLE9BQU9QLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxjQUFNZixJQUFJLENBQUNtQixXQUFXLENBQU87VUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTFCLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBbUUsU0FBQSxHQUFBbkUsT0FBQTtVQUNNLFNBQVV1SixRQUFRQSxDQUFDO1lBQUVoRjtVQUFJLENBQUU7WUFDaEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTCxTQUFBLENBQUFPLGdCQUFnQixHQUFFO1lBQ3BDLElBQUksQ0FBQ0gsSUFBSSxDQUFDbEIsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUUzQixNQUFNO2NBQ0xtRyxRQUFRLEVBQUU7Z0JBQUVDLEtBQUs7Z0JBQUVDO2NBQU87WUFBRSxDQUM1QixHQUFHbkYsSUFBSSxDQUFDbEIsSUFBSTtZQUNiLE9BQ0NXLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBZ0UsR0FDbEZ2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsY0FDRWQsS0FBSyxDQUFDaUYsS0FBSyxFLE1BQUlBLEtBQUssRSxPQUFLakYsS0FBSyxDQUFDa0YsT0FBTyxFLE1BQUlBLE9BQU8sQ0FDN0MsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBMUYsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQTJKLFVBQUEsR0FBQTNKLE9BQUE7VUFDQSxJQUFBNEosU0FBQSxHQUFBNUosT0FBQTtVQUVBLElBQUErSCxNQUFBLEdBQUEvSCxPQUFBO1VBQ0EsSUFBQWdHLE1BQUEsR0FBQWhHLE9BQUE7VUFFTztVQUFXLE1BQU00SCxvQkFBb0IsR0FBOEJBLENBQUM7WUFBRXJEO1VBQUksQ0FBRSxLQUFJO1lBQ3RGLE1BQU07Y0FBRWpFLEtBQUs7Y0FBRWtFO1lBQUssQ0FBRSxHQUFHLElBQUFMLFNBQUEsQ0FBQU8sZ0JBQWdCLEdBQUU7WUFFM0MsTUFBTSxDQUFDOEUsUUFBUSxFQUFFSyxXQUFXLENBQUMsR0FBRzdGLE1BQUEsQ0FBQXFCLE9BQUssQ0FBQ2lCLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDbEQsSUFBQU4sTUFBQSxDQUFBZ0IsU0FBUyxFQUFDLENBQUMxRyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCdUosV0FBVyxDQUFDO2dCQUFFLEdBQUd0RixJQUFJLENBQUNpRjtjQUFRLENBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNqRixJQUFJLENBQUNsQixJQUFJLEVBQUU7Y0FDZixPQUFPVyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3lDLE1BQUEsQ0FBQU8sYUFBYTtnQkFBQ1ksT0FBTyxFQUFFMUUsS0FBSyxDQUFDQyxVQUFVLENBQUMwRTtjQUFLLEVBQUk7O1lBRTFELE9BQ0NuRixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQXRCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQWtELFFBQUEsUUFDQ3ZFLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0UsU0FBQSxDQUFBTCxRQUFRO2NBQUNoRixJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUN4QlAsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUNxRSxVQUFBLENBQUFHLG1CQUFtQjtjQUFDdkYsSUFBSSxFQUFFQSxJQUFJO2NBQUV3RixXQUFXLEVBQUU7WUFBSSxFQUFJLENBQ3BEO1VBRUwsQ0FBQztVQUFDM0ksT0FBQSxDQUFBd0csb0JBQUEsR0FBQUEsb0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJGLElBQUE1RCxNQUFBLEdBQUFoRSxPQUFBO1VBQ00sU0FBVWdLLFVBQVVBLENBQUM7WUFBRUMsTUFBTTtZQUFFQyxDQUFDO1lBQUU3RyxJQUFJO1lBQUUwRyxXQUFXO1lBQUVJO1VBQVEsQ0FBRTtZQUNwRSxJQUFJQyxHQUFHLEdBQUcsY0FBYy9HLElBQUksQ0FBQ2dILE1BQU0sS0FBS0gsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRztZQUV2RSxJQUFJN0csSUFBSSxDQUFDZ0gsTUFBTSxLQUFLSCxDQUFDLEVBQUVFLEdBQUcsSUFBSSxTQUFTL0csSUFBSSxDQUFDaUgsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFO1lBQzlGLElBQUlQLFdBQVcsSUFBSUcsQ0FBQyxLQUFLQyxRQUFRLENBQUNJLGFBQWEsRUFBRUgsR0FBRyxJQUFJLGtCQUFrQjtZQUUxRSxPQUNDcEcsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtrRixHQUFHLEVBQUVQLE1BQU07Y0FBRTFFLFNBQVMsRUFBRTZFO1lBQUcsR0FDL0JwRyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFBTzJFLE1BQU0sQ0FBUSxDQUNoQjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFqRyxNQUFBLEdBQUFoRSxPQUFBO1VBRUEsSUFBQXlLLE9BQUEsR0FBQXpLLE9BQUE7VUFFTztVQUFXLE1BQU04SixtQkFBbUIsR0FBOEJBLENBQUM7WUFBRXZGLElBQUk7WUFBRXdGO1VBQVcsQ0FBRSxLQUFJO1lBQ2xHLE1BQU07Y0FBRTFHO1lBQUksQ0FBRSxHQUFHa0IsSUFBSTtZQUVyQixNQUFNbUcsU0FBUyxHQUFHckgsSUFBSSxDQUFDcUgsU0FBUyxJQUFJLEVBQUU7WUFDdEMsTUFBTUMsTUFBTSxHQUFHcEcsSUFBSSxDQUFDN0MsVUFBVSxDQUFDa0osU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1YsUUFBUSxFQUFFVyxLQUFLLEtBQUk7Y0FDaEUsTUFBTXpILElBQUksR0FBRyxDQUFDcUgsU0FBUyxJQUFJQSxTQUFTLENBQUNJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Y0FDbEQsTUFBTUMsT0FBTyxHQUFHWixRQUFRLENBQUNZLE9BQU8sQ0FBQ0YsR0FBRyxDQUFDLENBQUNaLE1BQU0sRUFBRUMsQ0FBQyxLQUFJO2dCQUNsRCxNQUFNYyxLQUFLLEdBQUc7a0JBQUVkLENBQUM7a0JBQUU3RyxJQUFJO2tCQUFFOEcsUUFBUTtrQkFBRUYsTUFBTTtrQkFBRUY7Z0JBQVcsQ0FBRTtnQkFDeEQsT0FBTy9GLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUYsT0FBQSxDQUFBVCxVQUFVO2tCQUFDUSxHQUFHLEVBQUUsWUFBWU4sQ0FBQyxXQUFXWSxLQUFLLEVBQUU7a0JBQUEsR0FBTUU7Z0JBQUssRUFBSTtjQUN2RSxDQUFDLENBQUM7Y0FFRixPQUNDaEgsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2dCQUFLa0YsR0FBRyxFQUFFTCxRQUFRLENBQUNBLFFBQVE7Z0JBQUU1RSxTQUFTLEVBQUM7Y0FBa0QsR0FDeEZ2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsYUFBSzZFLFFBQVEsQ0FBQ0EsUUFBUSxDQUFNLEVBQzNCWSxPQUFPLENBQ0g7WUFFUixDQUFDLENBQUM7WUFDRixPQUFPL0csTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUF0QixNQUFBLENBQUFxQixPQUFBLENBQUFrRCxRQUFBLFFBQUdvQyxNQUFNLENBQUk7VUFDckIsQ0FBQztVQUFDdkosT0FBQSxDQUFBMEksbUJBQUEsR0FBQUEsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJGLElBQUE5RixNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQW1FLFNBQUEsR0FBQW5FLE9BQUE7VUFHQSxJQUFBaUwsS0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUErSCxNQUFBLEdBQUEvSCxPQUFBO1VBQ0EsSUFBQWtMLEtBQUEsR0FBQWxMLE9BQUE7VUFDQSxJQUFBbUwsT0FBQSxHQUFBbkwsT0FBQTtVQUNNLFNBQVVpRixjQUFjQSxDQUFDO1lBQUVWO1VBQUksQ0FBRTtZQUN0QyxNQUFNO2NBQUVDLEtBQUs7Y0FBRWxFO1lBQUssQ0FBRSxHQUFHLElBQUE2RCxTQUFBLENBQUFPLGdCQUFnQixHQUFFO1lBRTNDLElBQUksQ0FBQ0gsSUFBSSxDQUFDbEIsSUFBSSxFQUFFLE9BQU9XLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUMsTUFBQSxDQUFBTyxhQUFhO2NBQUNZLE9BQU8sRUFBRTFFLEtBQUssQ0FBQ0MsVUFBVSxDQUFDMEU7WUFBSyxFQUFJO1lBRXpFLE1BQU12QyxRQUFRLEdBQUdXLE1BQU0sQ0FBQzZELElBQUksQ0FBQzdHLElBQUksQ0FBQ2xCLElBQUksQ0FBQyxDQUFDd0gsR0FBRyxDQUFDTCxHQUFHLElBQUlqRyxJQUFJLENBQUNsQixJQUFJLENBQUNtSCxHQUFHLENBQUMsQ0FBQztZQUNsRTtZQUVBLE1BQU1hLFFBQVEsR0FBRyxHQUFHRixPQUFBLENBQUE5RixPQUFNLENBQUNpRyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxnQkFBZ0JsTCxLQUFLLENBQUMrQixLQUFLLENBQUNILFlBQVksZUFBZXFDLElBQUksQ0FBQ3RCLEVBQUUsYUFBYTNDLEtBQUssQ0FBQ3NCLE1BQU0sUUFBUTtZQUU3SSxPQUNDb0MsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3ZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZCxLQUFLLENBQUNpSCxXQUFXLENBQUNqRyxLQUFLLENBQU0sRUFDbEN4QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRWYsS0FBSyxDQUFDaUgsV0FBVyxDQUFDQyxRQUFRLENBQUssRUFFbEQxSCxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXdELEdBQ3RFdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtkLEtBQUssQ0FBQ21ILFlBQVksQ0FBTSxFQUM3QjNILE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1QnZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFPcUMsUUFBUTtjQUFDaUUsT0FBTyxFQUFDO1lBQVUsR0FDakM1SCxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBUXVHLEdBQUcsRUFBRVI7WUFBUSxFQUFJLEUsbURBRWxCLENBQ0gsQ0FDRCxFQUdOckgsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUMyRixLQUFBLENBQUFhLElBQUk7Y0FBQ0MsU0FBUyxFQUFDLEtBQUs7Y0FBQzVELEtBQUssRUFBRXZCLFFBQVE7Y0FBRW9GLE9BQU8sRUFBRWQsS0FBQSxDQUFBZTtZQUFVLEVBQUksQ0FDekQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQWpJLE1BQUEsR0FBQWhFLE9BQUE7VUFDTyxNQUFNaU0sVUFBVSxHQUFHQSxDQUFDO1lBQUU1STtVQUFJLENBQUUsS0FBSTtZQUN0QyxNQUFNa0IsSUFBSSxHQUFHbEIsSUFBSTtZQUNqQixPQUNDVyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQTJCLEdBQzdDdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUF1QixHQUN6Q3ZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPZixJQUFJLENBQUM4RSxJQUFJLENBQVEsQ0FDZixFQUNWckYsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGtCQUNDdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGlCQUNDdEIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGFBQUtmLElBQUksQ0FBQ2hCLElBQUksQ0FBTSxDQUNaLEVBQ1RTLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFHQyxTQUFTLEVBQUM7WUFBSSxHQUFFaEIsSUFBSSxDQUFDMkgsUUFBUSxDQUFLLENBQzVCLENBQ0Q7VUFFWixDQUFDO1VBQUM5SyxPQUFBLENBQUE2SyxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJGLElBQUFqSSxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQW1NLFNBQUEsR0FBQW5NLE9BQUE7VUFFQSxJQUFBbUUsU0FBQSxHQUFBbkUsT0FBQTtVQU1NLFNBQVVvTSxJQUFJQSxDQUFDO1lBQUVuSixFQUFFO1lBQUVzQztVQUFTLENBQWM7WUFDakQsTUFBTTtjQUFFakY7WUFBSyxDQUFFLEdBQUcsSUFBQTZELFNBQUEsQ0FBQU8sZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTJILFFBQVEsR0FBRy9MLEtBQUssQ0FBQytCLEtBQUssQ0FBQ29DLFVBQVUsQ0FBQ21DLFFBQVEsQ0FBQzdGLEdBQUcsQ0FBQ2tDLEVBQUUsQ0FBQztZQUN4RCxNQUFNbUgsR0FBRyxHQUFHLGtCQUFrQjdFLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEUsT0FDQ3ZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUU2RTtZQUFHLEdBQ3RCcEcsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUM2RyxTQUFBLENBQUE3SCxRQUFRO2NBQUNDLElBQUksRUFBRThIO1lBQVEsRUFBSSxDQUNuQjtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQSxJQUFBckksTUFBQSxHQUFBaEUsT0FBQTtVQUVBLElBQUFzTSxNQUFBLEdBQUF0TSxPQUFBO1VBQ087VUFBVyxNQUFNdU0sT0FBTyxHQUE4QkEsQ0FBQztZQUFFak0sS0FBSztZQUFFa0UsS0FBSztZQUFFaUg7VUFBVyxDQUFFLEtBQUk7WUFDOUYsTUFBTTtjQUNMZSxTQUFTLEVBQUU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZBLFVBQVUsRUFBRTtrQkFBRWpEO2dCQUFRO2NBQUU7WUFDeEIsQ0FDRCxHQUFHbEosS0FBSztZQUVULE1BQU1xSyxNQUFNLEdBQUdjLFdBQVcsQ0FBQ2IsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ1YsUUFBUSxFQUFFVyxLQUFLLEtBQUk7Y0FDNUQsTUFBTXpILElBQUksR0FBR29KLFVBQVUsQ0FBQ0MsT0FBTyxDQUFDNUIsS0FBSyxDQUFDO2NBQ3RDLE1BQU1DLE9BQU8sR0FBR1osUUFBUSxDQUFDWSxPQUFPLENBQUNGLEdBQUcsQ0FBQyxDQUFDWixNQUFNLEVBQUVDLENBQUMsS0FBSTtnQkFDbEQsSUFBSUUsR0FBRyxHQUFHLGNBQWMvRyxJQUFJLENBQUNnSCxNQUFNLEtBQUtILENBQUMsR0FBRyxtQkFBbUIsR0FBRyxFQUFFLEdBQUc7Z0JBQ3ZFLElBQUk3RyxJQUFJLENBQUNnSCxNQUFNLEtBQUtILENBQUMsRUFBRTtrQkFDdEJFLEdBQUcsSUFBSSxTQUFTL0csSUFBSSxDQUFDaUgsUUFBUSxHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixFQUFFOztnQkFHeEUsT0FDQ3RHLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtrQkFBS2tGLEdBQUcsRUFBRVAsTUFBTTtrQkFBRTFFLFNBQVMsRUFBRTZFO2dCQUFHLEdBQy9CcEcsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGVBQU8yRSxNQUFNLENBQVEsQ0FDaEI7Y0FFUixDQUFDLENBQUM7Y0FDRixPQUNDakcsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2dCQUFLa0YsR0FBRyxFQUFFTCxRQUFRLENBQUNiLElBQUk7Z0JBQUUvRCxTQUFTLEVBQUM7Y0FBa0QsR0FDcEZ2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsYUFBSzZFLFFBQVEsQ0FBQ2IsSUFBSSxDQUFNLEVBQ3ZCeUIsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBRUYsT0FDQy9HLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBdUIsR0FDckN2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsYUFBS2QsS0FBSyxDQUFDbUksT0FBTyxDQUFNLEVBQ3hCM0ksTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUNnSCxNQUFBLENBQUFNLEtBQUs7Y0FBQ3pILElBQUksRUFBQztZQUFNLEdBQ2pCbkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QyxHQUMxRHZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU2QsS0FBSyxDQUFDa0YsT0FBTyxFLElBQVcsRUFDakMxRixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsa0JBQ0N0QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFBT2tFLFFBQVEsQ0FBQ0UsT0FBTyxDQUFRLEUsS0FBQzFGLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPa0UsUUFBUSxDQUFDQyxLQUFLLENBQVEsQ0FDcEQsQ0FDTCxFQUNOekYsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QyxHQUMxRHZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxpQkFBU2QsS0FBSyxDQUFDcUksS0FBSyxFLElBQVcsRUFDL0I3SSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsa0JBQ0N0QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFBT2tFLFFBQVEsQ0FBQ3FELEtBQUssQ0FBUSxFLEtBQUM3SSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsZUFBT2tFLFFBQVEsQ0FBQ0MsS0FBSyxDQUFRLENBQ2xELENBQ0wsQ0FDQyxFQUNQa0IsTUFBTSxDQUNGO1VBRVIsQ0FBQztVQUFDdkosT0FBQSxDQUFBbUwsT0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JERixJQUFBdkksTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE4TSxNQUFBLEdBQUE5TSxPQUFBO1VBQ0EsSUFBQStNLE9BQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBZ04sS0FBQSxHQUFBaE4sT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBRU0sU0FBVWlOLE1BQU1BLENBQUM7WUFBRWhLLEVBQUU7WUFBRTZIO1VBQUssQ0FBRTtZQUNuQyxNQUFNO2NBQUV4SztZQUFLLENBQUUsR0FBRyxJQUFBNkQsU0FBQSxDQUFBTyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNMkgsUUFBUSxHQUFHL0wsS0FBSyxDQUFDK0IsS0FBSyxDQUFDb0MsVUFBVSxDQUFDbUMsUUFBUSxDQUFDN0YsR0FBRyxDQUFDa0MsRUFBRSxDQUFDO1lBQ3hELE1BQU1pSyxNQUFNLEdBQUcsK0JBQStCYixRQUFRLENBQUNsSCxJQUFJLEVBQUU7WUFDN0QsT0FDQ25CLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEgsS0FBQSxDQUFBRyxHQUFHO2NBQUNyQyxLQUFLLEVBQUVBO1lBQUssR0FDaEI5RyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsY0FDQ3RCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUUySDtZQUFNLEdBQ3pCbEosTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUN5SCxPQUFBLENBQUFLLElBQUk7Y0FBQy9ELElBQUksRUFBRXlELE1BQUEsQ0FBQU8sS0FBSyxDQUFDaEIsUUFBUSxDQUFDbEgsSUFBSTtZQUFDLEVBQUksQ0FDM0IsQ0FDTCxFQUVObkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLGVBQU8rRyxRQUFRLENBQUM3RyxLQUFLLENBQVEsQ0FDeEI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQXhCLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUosR0FBQSxHQUFBakosT0FBQTtVQUNBLElBQUFnTixLQUFBLEdBQUFoTixPQUFBO1VBQ0EsSUFBQXNOLElBQUEsR0FBQXROLE9BQUE7VUFDQSxJQUFBdU4sS0FBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ00sU0FBVW9ILFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFOUc7WUFBSyxDQUFFLEdBQUcsSUFBQTZELFNBQUEsQ0FBQU8sZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTThJLElBQUksR0FBRyxFQUFFO1lBQ2YsTUFBTUMsS0FBSyxHQUFHLEVBQUU7WUFFaEJuTixLQUFLLENBQUMrQixLQUFLLENBQUNxTCxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDMUssRUFBRSxFQUFFNkgsS0FBSyxLQUFJO2NBQ3ZDMEMsSUFBSSxDQUFDSSxJQUFJLENBQUM1SixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2dJLElBQUEsQ0FBQUwsTUFBTTtnQkFBQ3pDLEdBQUcsRUFBRSxHQUFHdkgsRUFBRSxFQUFFO2dCQUFFQSxFQUFFLEVBQUVBLEVBQUU7Z0JBQUU2SCxLQUFLLEVBQUVBO2NBQUssRUFBSSxDQUFDO2NBQ3pEMkMsS0FBSyxDQUFDRyxJQUFJLENBQUM1SixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2lJLEtBQUEsQ0FBQW5CLElBQUk7Z0JBQUM1QixHQUFHLEVBQUUsR0FBR3ZILEVBQUUsT0FBTztnQkFBRUEsRUFBRSxFQUFFQTtjQUFFLEVBQUksQ0FBQztZQUNoRCxDQUFDLENBQUM7WUFFRixPQUNDZSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQzJELEdBQUEsQ0FBQTRFLGFBQWEsUUFDYjdKLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEgsS0FBQSxDQUFBYyxhQUFhO2NBQUN2SSxTQUFTLEVBQUM7WUFBZ0IsR0FDeEN2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQzBILEtBQUEsQ0FBQWUsSUFBSTtjQUFDeEksU0FBUyxFQUFDO1lBQUssR0FBRWlJLElBQUksQ0FBUSxFQUNuQ3hKLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEgsS0FBQSxDQUFBZ0IsS0FBSztjQUFDekksU0FBUyxFQUFDO1lBQU8sR0FBRWtJLEtBQUssQ0FBUyxDQUN6QixDQUNEO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBekosTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFpSixHQUFBLEdBQUFqSixPQUFBO1VBRUEsSUFBQThNLE1BQUEsR0FBQTlNLE9BQUE7VUFJQSxJQUFBdU4sS0FBQSxHQUFBdk4sT0FBQTtVQUNBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQWlPLFNBQUEsR0FBQWpPLE9BQUE7VUFDQSxJQUFBa08sT0FBQSxHQUFBbE8sT0FBQTtVQUNNLFNBQVVxSCxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRS9HO1lBQUssQ0FBRSxHQUFHLElBQUE2RCxTQUFBLENBQUFPLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ3lKLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdwSyxNQUFBLENBQUFxQixPQUFLLENBQUNpQixRQUFRLENBQUNoRyxLQUFLLENBQUMrQixLQUFLLENBQUNxTCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsTUFBTVcsSUFBSSxHQUFHLFNBQUFBLENBQVU7Y0FBRXBMLEVBQUU7Y0FBRXFMLEVBQUUsR0FBR0wsU0FBQSxDQUFBTTtZQUFZLENBQTRCO2NBQ3pFLE1BQU1sQyxRQUFRLEdBQUcvTCxLQUFLLENBQUMrQixLQUFLLENBQUNvQyxVQUFVLENBQUNtQyxRQUFRLENBQUM3RixHQUFHLENBQUNrQyxFQUFFLENBQUM7Y0FFeEQsTUFBTXVMLE9BQU8sR0FBRyxzQkFBc0JuQyxRQUFRLENBQUNsSCxJQUFJLEVBQUU7Y0FDckQsTUFBTUQsT0FBTyxHQUFHb0osRUFBRTtjQUNsQixNQUFNRyxPQUFPLEdBQUdDLEtBQUssSUFBRztnQkFDdkJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO2dCQUN0QlAsV0FBVyxDQUFDbkwsRUFBRSxDQUFDO2NBQ2hCLENBQUM7Y0FDRCxPQUNDZSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0osT0FBTztnQkFBQ0ssU0FBUyxFQUFDLGlCQUFpQjtnQkFBQ2tKLE9BQU8sRUFBRUE7Y0FBTyxHQUNwRHpLLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQTBCLEdBQ3hDdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2dCQUFTQyxTQUFTLEVBQUVpSjtjQUFPLEdBQzFCeEssTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUN3SCxNQUFBLENBQUE4QixPQUFPO2dCQUFDckosU0FBUyxFQUFDLGFBQWE7Z0JBQUM4RCxJQUFJLEVBQUVnRCxRQUFRLENBQUNsSDtjQUFJLEVBQUksQ0FDL0MsRUFDVm5CLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPK0csUUFBUSxDQUFDN0csS0FBSyxDQUFRLENBQ3hCLENBQ0c7WUFFWixDQUFDO1lBRUQsTUFBTTJDLEtBQUssR0FBRzdILEtBQUssQ0FBQytCLEtBQUssQ0FBQ3FMLEtBQUssQ0FBQ21CLE1BQU0sQ0FBQzVMLEVBQUUsSUFBSUEsRUFBRSxLQUFLa0wsUUFBUSxDQUFDLENBQUN0RCxHQUFHLENBQUM1SCxFQUFFLElBQUllLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0ksSUFBSTtjQUFDcEwsRUFBRSxFQUFFQSxFQUFFO2NBQUV1SCxHQUFHLEVBQUV2SDtZQUFFLEVBQUksQ0FBQztZQUVsRyxPQUNDZSxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQzJELEdBQUEsQ0FBQTRFLGFBQWEsUUFDYjdKLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkksU0FBQSxDQUFBYSxRQUFRO2NBQUN2SixTQUFTLEVBQUM7WUFBZSxHQUNsQ3ZCLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkksU0FBQSxDQUFBYyxjQUFjLFFBQUUvSyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQzRJLE9BQUEsQ0FBQWMsWUFBWTtjQUFDVixFQUFFLEVBQUMsS0FBSztjQUFDOUQsR0FBRyxFQUFFLENBQUM7Y0FBRXZILEVBQUUsRUFBRWtMO1lBQVEsRUFBSSxDQUFrQixFQUNsRm5LLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkksU0FBQSxDQUFBZ0IsWUFBWSxRQUFFOUcsS0FBSyxDQUFnQixDQUMxQixFQUNYbkUsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBLENBQUNpSSxLQUFBLENBQUFuQixJQUFJO2NBQUNuSixFQUFFLEVBQUVrTDtZQUFRLEVBQUksQ0FDUDtVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0EsSUFBQW5LLE1BQUEsR0FBQWhFLE9BQUE7VUFFQSxJQUFBOE0sTUFBQSxHQUFBOU0sT0FBQTtVQUVBLElBQUFtRSxTQUFBLEdBQUFuRSxPQUFBO1VBQ0EsSUFBQWlPLFNBQUEsR0FBQWpPLE9BQUE7VUFDTSxTQUFVZ1AsWUFBWUEsQ0FBQztZQUFFL0wsRUFBRTtZQUFFcUwsRUFBRSxHQUFHTCxTQUFBLENBQUFNO1VBQVksQ0FBNEI7WUFDL0UsTUFBTTtjQUFFak87WUFBSyxDQUFFLEdBQUcsSUFBQTZELFNBQUEsQ0FBQU8sZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTJILFFBQVEsR0FBRy9MLEtBQUssQ0FBQytCLEtBQUssQ0FBQ29DLFVBQVUsQ0FBQ21DLFFBQVEsQ0FBQzdGLEdBQUcsQ0FBQ2tDLEVBQUUsQ0FBQztZQUV4RCxNQUFNdUwsT0FBTyxHQUFHLHNCQUFzQm5DLFFBQVEsQ0FBQ2xILElBQUksRUFBRTtZQUNyRCxNQUFNRCxPQUFPLEdBQUdvSixFQUFFO1lBRWxCLE9BQ0N0SyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ0osT0FBTztjQUFDSyxTQUFTLEVBQUM7WUFBaUIsR0FDbkN2QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDdkIsTUFBQSxDQUFBcUIsT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBRWlKO1lBQU8sR0FDMUJ4SyxNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3dILE1BQUEsQ0FBQThCLE9BQU87Y0FBQ3JKLFNBQVMsRUFBQyxhQUFhO2NBQUM4RCxJQUFJLEVBQUVnRCxRQUFRLENBQUNsSDtZQUFJLEVBQUksQ0FDL0MsRUFDVm5CLE1BQUEsQ0FBQXFCLE9BQUEsQ0FBQUMsYUFBQSxlQUFPK0csUUFBUSxDQUFDN0csS0FBSyxDQUFRLENBQ3hCLEVBQ054QixNQUFBLENBQUFxQixPQUFBLENBQUFDLGFBQUEsQ0FBQ3dILE1BQUEsQ0FBQThCLE9BQU87Y0FBQ3ZGLElBQUksRUFBQztZQUFlLEVBQUcsQ0FDdkI7VUFFWiJ9