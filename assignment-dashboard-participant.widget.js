System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tabs", "@aimpact/ailearn-app@0.0.19/components/ui", "pragmate-ui@0.0.3/image", "@aimpact/ailearn-app@0.0.19/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "@bgroup/media-manager@1.0.0/audio-player", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/alert"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Widget, MultipleChoiceReport, AssessmentQuestions, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Widget: void 0,
    MultipleChoiceReport: void 0,
    AssessmentQuestions: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Base) {
      dependency_3 = _beyondJsReact18Widgets103Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi003Components) {
      dependency_9 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_10 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_pragmateUi003Tabs) {
      dependency_13 = _pragmateUi003Tabs;
    }, function (_aimpactAilearnApp0019ComponentsUi) {
      dependency_14 = _aimpactAilearnApp0019ComponentsUi;
    }, function (_pragmateUi003Image) {
      dependency_15 = _pragmateUi003Image;
    }, function (_aimpactAilearnApp0019ChatMessages) {
      dependency_16 = _aimpactAilearnApp0019ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_18 = _bgroupMediaManager100AudioPlayer;
    }, function (_pragmateUi003List) {
      dependency_19 = _pragmateUi003List;
    }, function (_pragmateUi003Alert) {
      dependency_20 = _pragmateUi003Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.19"], ["@aimpact/ailearn-app", "0.0.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['pragmate-ui/icons', dependency_12], ['pragmate-ui/tabs', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/image', dependency_15], ['@aimpact/ailearn-app/chat/messages', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['@bgroup/media-manager/audio-player', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/alert', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "assignment-dashboard-participant",
        "attrs": ["id", "participant-id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.19/assignment-dashboard-participant.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2265801594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2678712100,
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
                await this.#model.load({
                  id,
                  userId
                });
                this.#userId = userId;
                this.#accessed = this.#model.accessed;
                globalThis._m = this.#model;
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
        hash: 3970301262,
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
            } = (0, _contexts.useStudentDashboardContext)();
            const types = {
              conversation: _chat.UserChat,
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
        hash: 2076317421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStudentDashboardContext = exports.StudentDashboardContext = void 0;
          var _react = require("react");
          const StudentDashboardContext = exports.StudentDashboardContext = _react.default.createContext({});
          const useStudentDashboardContext = () => _react.default.useContext(StudentDashboardContext);
          exports.useStudentDashboardContext = useStudentDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2748054873,
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
          var _icons = require("pragmate-ui/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _pane = require("./pane");
          var _contexts = require("./contexts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("./activity");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function Widget({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [studentDetails, setStudentDetails] = (0, _react.useState)(JSON.parse(localStorage.getItem('student.details')));
            const [activities, setActivities] = _react.default.useState(store.model?.activities?.elements);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setActivities(store.model?.activities?.elements);
            }, 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              assessment: store.assessment,
              texts
            };
            const tabs = [];
            const panes = [];
            function applyEllipsis(text, maxLength) {
              return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
            }
            store.model.order.forEach(id => {
              const activity = store.model.activities.elements.get(id);
              tabs.push(_react.default.createElement(_tabs.Tab, {
                key: id
              }, applyEllipsis(activity.title, 23)));
              panes.push(_react.default.createElement(_pane.Pane, {
                key: `${id}.pane`
              }, _react.default.createElement(_activity.Activity, {
                item: activity
              })));
            });
            return _react.default.createElement(_contexts.StudentDashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageHeader, {
              className: "flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "user-section__modal-header"
            }, _react.default.createElement(_image.Image, {
              src: studentDetails?.photoUrl ? studentDetails.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${studentDetails.name}-avatar-modal`,
              className: "avatar__image"
            }), _react.default.createElement("div", {
              className: "user-section__text-header-container"
            }, _react.default.createElement("h3", {
              className: "h3"
            }, studentDetails.name), _react.default.createElement("span", {
              className: "text-header-detail__modal p2"
            }, texts.percentileDetail.replace('percentile%', studentDetails.percentile)))), _react.default.createElement("div", null, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: () => store.refresh()
            }))), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, tabs), _react.default.createElement(_tabs.Panes, null, panes))));
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
        hash: 3321314054,
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
            return _react.default.createElement("div", null, _react.default.createElement(Control, {
              item: item
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/materials/chat
      **************************************/

      ims.set('./views/materials/chat', {
        hash: 1387713767,
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
            } = (0, _contexts.useStudentDashboardContext)();
            let number = store.model.chatModel?.messages.items.length ?? 0;
            const [messages, setMessages] = _react.default.useState(number ? item.chatModel?.messages?.items : []);
            (0, _hooks.useBinder)([item], () => {
              setMessages(store.model.chatModel?.messages.items);
            }, 'chat.loaded');
            if (!item.chatModel?.messages?.items) return _react.default.createElement(_empty.EmptyMaterial, null);
            return _react.default.createElement(_messages.Messages, {
              store: store,
              messages: item.chatModel?.messages?.items,
              texts: texts
            });
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/materials/competencies
      **********************************************/

      ims.set('./views/materials/competencies', {
        hash: 1525925994,
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
            } = (0, _contexts.useStudentDashboardContext)();
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
        hash: 731603979,
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
            } = (0, _contexts.useStudentDashboardContext)();
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
        hash: 2768502476,
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
            } = (0, _contexts.useStudentDashboardContext)();
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
        hash: 646504304,
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
            } = (0, _contexts.useStudentDashboardContext)();
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
        hash: 2693686310,
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
          function SpokenAnalysis({
            item
          }) {
            const {
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            if (!item.data) return _react.default.createElement(_empty.EmptyMaterial, {
              message: texts.activities.empty
            });
            const elements = Object.keys(item.data).map(key => item.data[key]);
            // const audioUrl = config.params.apis.ailearn + `/assessments/${store.assessmentId}/user/${store.userId}/audio`;
            return _react.default.createElement("div", {
              className: "assessment-analysis__container"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.assessments.title), _react.default.createElement("p", {
              className: "p2"
            }, texts.assessments.oralText)), _react.default.createElement(_list.List, {
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
        hash: 3159067656,
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
            }, _react.default.createElement("span", null, item.icon)), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", {
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
        hash: 3679478205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pane = Pane;
          var _react = require("react");
          function Pane({
            children,
            className
          }) {
            const cls = `pane__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("article", {
              className: cls
            }, children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImlkIiwiYXR0cmlidXRlcyIsImdldCIsInBhcnRpY2lwYW50SWQiLCJXaWRnZXQiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfdm9pY2UiLCJfd3JhcHBlciIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwicGxheWVycyIsIndlYiIsIlZvaWNlIiwibGFiIiwiVm9pY2VMYWIiLCJhc3NpZ25tZW50SWQiLCJjdXJyZW50UGxheWVyIiwicGxheWVyIiwibW9kZWwiLCJhY2Nlc3NlZCIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJsb2FkIiwic2V0IiwibGFuZ3V1YWdlIiwiQXNzaWdubWVudCIsImdsb2JhbFRoaXMiLCJfbSIsInJlYWR5IiwidHJpZ2dlckV2ZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlZnJlc2giLCJmZXRjaGluZyIsIl9yZWFjdCIsIl9jaGF0IiwiX21hdGVyaWFscyIsIl9jb250ZXh0cyIsIl9hc3Nlc3NtZW50IiwiX3Nwb2tlbiIsIkFjdGl2aXR5IiwiaXRlbSIsInRleHRzIiwiYWN0aXZpdGllcyIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidHlwZXMiLCJjb252ZXJzYXRpb24iLCJVc2VyQ2hhdCIsIk1hdGVyaWFsQXNzZXNzbWVudCIsInNwb2tlbiIsIlNwb2tlbkFuYWx5c2lzIiwiQ29udHJvbCIsInR5cGUiLCJEZWZhdWx0TWF0ZXJpYWwiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwic3VidHlwZSIsImRlc2NyaXB0aW9uIiwiU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9pY29ucyIsIl90YWJzIiwiX3BhbmUiLCJfdWkiLCJfYWN0aXZpdHkiLCJfaW1hZ2UiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic3R1ZGVudERldGFpbHMiLCJzZXRTdHVkZW50RGV0YWlscyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRBY3Rpdml0aWVzIiwiZWxlbWVudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwidmFsdWUiLCJ0YWJzIiwicGFuZXMiLCJhcHBseUVsbGlwc2lzIiwidGV4dCIsIm1heExlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwib3JkZXIiLCJmb3JFYWNoIiwiYWN0aXZpdHkiLCJwdXNoIiwiVGFiIiwia2V5IiwiUGFuZSIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJhbHQiLCJuYW1lIiwicGVyY2VudGlsZURldGFpbCIsInJlcGxhY2UiLCJwZXJjZW50aWxlIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pbmRleCIsIl9tdWx0aXBsZSIsImNvbnRyb2xzIiwiTXVsdGlwbGVDaG9pY2VSZXBvcnQiLCJoYXNPd25Qcm9wZXJ0eSIsIl9tZXNzYWdlcyIsIl9lbXB0eSIsImNoYXQiLCJudW1iZXIiLCJjaGF0TW9kZWwiLCJtZXNzYWdlcyIsIml0ZW1zIiwic2V0TWVzc2FnZXMiLCJFbXB0eU1hdGVyaWFsIiwiTWVzc2FnZXMiLCJfbWFya2Rvd24iLCJDb21wZXRlbmNpZXNGZWVkYmFjayIsIk1hcmtkb3duIiwiY29udGVudCIsImNvbXBldGVuY2llc0ZlZWRiYWNrIiwibWVzc2FnZSIsImVtcHR5IiwiRW1wdHlDYXJkIiwiQ291bnRlcnMiLCJkYXRhIiwiY291bnRlcnMiLCJ0b3RhbCIsImNvcnJlY3QiLCJfcXVlc3Rpb25zIiwiX2NvdW50ZXJzIiwic2V0Q291bnRlcnMiLCJGcmFnbWVudCIsIkFzc2Vzc21lbnRRdWVzdGlvbnMiLCJzaG93QW5zd2VycyIsIkl0ZW1PcHRpb24iLCJvcHRpb24iLCJpIiwicXVlc3Rpb24iLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsImNvcnJlY3RBbnN3ZXIiLCJfb3B0aW9uIiwicmVzcG9uc2VzIiwib3V0cHV0IiwicXVlc3Rpb25zIiwibWFwIiwiaW5kZXgiLCJvcHRpb25zIiwiYXR0cnMiLCJfbGlzdCIsIl9pdGVtIiwia2V5cyIsImFzc2Vzc21lbnRzIiwib3JhbFRleHQiLCJMaXN0IiwiY29udGFpbmVyIiwiY29udHJvbCIsIlNwb2tlbkl0ZW0iLCJzdWJqZWN0IiwiZmVlZGJhY2siLCJjaGlsZHJlbiIsIl9hbGVydCIsIlJlc3VsdHMiLCJzZWxlY3Rpb24iLCJldmFsdWF0aW9uIiwiYW5zd2VycyIsInJlc3VsdHMiLCJBbGVydCIsIndyb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9zZWxlY3Rpb24tcHJvcHMudHMiLCIvdHMvdmlld3MvbWF0ZXJpYWxzL2Fzc2Vzc21lbnQudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9jaGF0LnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvY29tcGV0ZW5jaWVzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9pbmRleC50c3giLCIvdHMvdmlld3MvbWF0ZXJpYWxzL211bHRpcGxlL2NvdW50ZXJzLnRzeCIsIi90cy92aWV3cy9tYXRlcmlhbHMvbXVsdGlwbGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9vcHRpb24udHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9tdWx0aXBsZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21hdGVyaWFscy9zcG9rZW4vaXRlbS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQztnQkFDOUJDLEVBQUUsRUFBRSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDN0JDLGFBQWEsRUFBRSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQjtlQUNuRCxDQUFDO2NBQ0YsT0FBTyxJQUFJLENBQUMsQ0FBQUwsS0FBTTtZQUNuQjtZ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