System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.11/config", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/ailearn-app@0.0.11/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/tabs", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/empty"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, MultipleChoiceReport, Results, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    MultipleChoiceReport: void 0,
    Results: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Voice) {
      dependency_6 = _aimpactChatSdk100Voice;
    }, function (_aimpactChat101Wrapper) {
      dependency_7 = _aimpactChat101Wrapper;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_bgroupMediaManager100AudioPlayer) {
      dependency_9 = _bgroupMediaManager100AudioPlayer;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_10 = _aimpactAilearnApp0011Config;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_11 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactAilearnApp0011ChatMessages) {
      dependency_12 = _aimpactAilearnApp0011ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi003Components) {
      dependency_14 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Tabs) {
      dependency_17 = _pragmateUi003Tabs;
    }, function (_pragmateUi003Alert) {
      dependency_18 = _pragmateUi003Alert;
    }, function (_pragmateUi003Empty) {
      dependency_19 = _pragmateUi003Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/assignments/dashboard/user-detail",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/chat/messages', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/empty', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assigment-user-detail-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/assignments/dashboard/user-detail.widget",
        "is": "page",
        "route": "/assignments/dashboard/user-detail/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/assignments/dashboard/user-detail.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2639968138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'), this.uri.qs.get('assignmentId'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1448999479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
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

            #currentPlayer;
            #player = 'web';
            get player() {
              return this.#currentPlayer;
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
            async load(userId, assessmentId) {
              try {
                this.fetching = true;
                this.#userId = userId;
                const [assignmentId, itemId] = assessmentId.split('.');
                this.#assessmentId = assessmentId;
                this.#assessment = new _core.Assessment({
                  assignmentId,
                  userId: userId
                });
                this.#assessment.on('chat.loaded', () => this.triggerEvent('chat.loaded'));
                this.#assessment.on('change', this.triggerEvent);
                await this.#assessment.load(itemId, userId);
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/analysis-oral
      *************************************/

      ims.set('./views/analysis-oral', {
        hash: 735820096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenAnalysis = SpokenAnalysis;
          var _react = require("react");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _contexts = require("./contexts");
          var _pane = require("./pane");
          var _audioPlayer = require("@bgroup/media-manager/audio-player");
          var _config = require("@aimpact/ailearn-app/config");
          function SpokenAnalysis() {
            const {
              store
            } = (0, _contexts.useStudentDashboardContext)();
            const audioUrl = _config.default.params.apis.ailearn + `/assessments/${store.assessmentId}/user/${store.userId}/audio`;
            return _react.default.createElement(_pane.Pane, {
              className: "assessment-analysis__container"
            }, _react.default.createElement(_audioPlayer.AudioPlayer, {
              src: audioUrl
            }), store.assessment.analysis.map((item, index) => {
              return _react.default.createElement("article", {
                key: item.subject.replace(' ', ''),
                className: "assessment__analysis-item"
              }, _react.default.createElement("section", {
                className: "item__icon__container"
              }, _core.Faces[item.grade]), _react.default.createElement("section", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, item.subject)), _react.default.createElement("p", null, item.evaluation)));
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/chat
      ****************************/

      ims.set('./views/chat', {
        hash: 3626998474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserChat = UserChat;
          var _react = require("react");
          var _pane = require("./pane");
          var _contexts = require("./contexts");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _messages = require("@aimpact/ailearn-app/chat/messages");
          function UserChat(props) {
            const {
              texts: {
                chat: texts
              },
              store
            } = (0, _contexts.useStudentDashboardContext)();
            let number = store?.assessment?.chat?.messages.items.length ?? 0;
            const [messages, setMessages] = _react.default.useState(number ? store.assessment.chat.messages.items : []);
            (0, _hooks.useBinder)([store], () => {
              setMessages(store.assessment?.chat?.messages.items);
            }, 'chat.loaded');
            return _react.default.createElement(_pane.Pane, {
              className: "assessment-analysis__container"
            }, _react.default.createElement("h2", null, texts.title, " "), _react.default.createElement(_messages.Messages, {
              store: store,
              messages: messages,
              texts: texts
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/competencies
      ************************************/

      ims.set('./views/competencies', {
        hash: 75015283,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CompetenciesFeedback = CompetenciesFeedback;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _contexts = require("./contexts");
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

      /********************************
      INTERNAL MODULE: ./views/contexts
      ********************************/

      ims.set('./views/contexts', {
        hash: 2895740203,
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
        hash: 2723106353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _components2 = require("@aimpact/chat/shared/components");
          var _tabs = require("pragmate-ui/tabs");
          var _contexts = require("./contexts");
          var _multiple = require("./multiple");
          var _chat = require("./chat");
          var _analysisOral = require("./analysis-oral");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const value = {
              store,
              assessment: store.assessment,
              texts
            };
            return _react.default.createElement(_contexts.StudentDashboardContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement(_components2.CollapsibleHeader, {
              collapsed: true,
              title: texts.title
            }), _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.spoken), _react.default.createElement(_tabs.Tab, null, texts.multiple), _react.default.createElement(_tabs.Tab, null, texts.conversation)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_analysisOral.SpokenAnalysis, null), _react.default.createElement(_multiple.MultipleChoiceReport, null), _react.default.createElement(_chat.UserChat, null)))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/multiple
      ********************************/

      ims.set('./views/multiple', {
        hash: 3261613439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceReport = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _pane = require("./pane");
          var _contexts = require("./contexts");
          var _empty = require("pragmate-ui/empty");
          /*bundle*/
          const MultipleChoiceReport = props => {
            const {
              assessment,
              store,
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            const {
              // selection: {
              // 	evaluation,
              // 	evaluation: { counters }
              // }
              selection
            } = assessment;
            if (!selection) {
              return _react.default.createElement(_pane.Pane, null, _react.default.createElement(_empty.Empty, {
                text: texts.seleccionEmpty
              }));
            }
            const {
              evaluation: {
                answers,
                counters
              }
            } = selection;
            console.log(3, selection, assessment);
            const output = selection.questions.map((question, index) => {
              const data = answers[index];
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
            return _react.default.createElement(_pane.Pane, null, _react.default.createElement("h3", null, texts.results), _react.default.createElement(_alert.Alert, {
              type: "info"
            }, _react.default.createElement("div", {
              className: "flex-container flex-100 flex-space-between"
            }, _react.default.createElement("strong", null, texts.correct, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.correct), "/", _react.default.createElement("span", null, counters.total))), _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("strong", null, texts.wrong, ":"), _react.default.createElement("section", null, _react.default.createElement("span", null, counters.wrong), "/", _react.default.createElement("span", null, counters.total)))), output);
          };
          exports.MultipleChoiceReport = MultipleChoiceReport;
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
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/multiple",
        "from": "MultipleChoiceReport",
        "name": "MultipleChoiceReport"
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
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'MultipleChoiceReport') && _export("MultipleChoiceReport", MultipleChoiceReport = require ? require('./views/multiple').MultipleChoiceReport : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXNzZXNzbWVudCIsImFzc2Vzc21lbnRJZCIsInVzZXJJZCIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwiY3VycmVudFBsYXllciIsInBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJmZXRjaGluZyIsImFzc2lnbm1lbnRJZCIsIml0ZW1JZCIsInNwbGl0IiwiQXNzZXNzbWVudCIsInRyaWdnZXJFdmVudCIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0cyIsIl9wYW5lIiwiX2F1ZGlvUGxheWVyIiwiX2NvbmZpZyIsIlNwb2tlbkFuYWx5c2lzIiwidXNlU3R1ZGVudERhc2hib2FyZENvbnRleHQiLCJhdWRpb1VybCIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsImNyZWF0ZUVsZW1lbnQiLCJQYW5lIiwiY2xhc3NOYW1lIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJhbmFseXNpcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsInN1YmplY3QiLCJyZXBsYWNlIiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJfaG9va3MiLCJfbWVzc2FnZXMiLCJVc2VyQ2hhdCIsInByb3BzIiwidGV4dHMiLCJjaGF0IiwibnVtYmVyIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJ0aXRsZSIsIk1lc3NhZ2VzIiwiX21hcmtkb3duIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIlN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rczIiLCJfY29tcG9uZW50czIiLCJfdGFicyIsIl9tdWx0aXBsZSIsIl9jaGF0IiwiX2FuYWx5c2lzT3JhbCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsInZhbHVlIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsImNvbGxhcHNlZCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwic3Bva2VuIiwibXVsdGlwbGUiLCJjb252ZXJzYXRpb24iLCJQYW5lcyIsIk11bHRpcGxlQ2hvaWNlUmVwb3J0IiwiX2FsZXJ0IiwiX2VtcHR5Iiwic2VsZWN0aW9uIiwiRW1wdHkiLCJ0ZXh0Iiwic2VsZWNjaW9uRW1wdHkiLCJhbnN3ZXJzIiwiY291bnRlcnMiLCJsb2ciLCJvdXRwdXQiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsImRhdGEiLCJvcHRpb25zIiwib3B0aW9uIiwiaSIsImNscyIsImFuc3dlciIsImFjY3VyYWN5IiwicmVzdWx0cyIsIkFsZXJ0IiwidHlwZSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY2hpbGRyZW4iLCJSZXN1bHRzIiwiYXNzZXNzbWVudHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmFseXNpcy1vcmFsLnRzeCIsIi90cy92aWV3cy9jaGF0LnRzeCIsIi90cy92aWV3cy9jb21wZXRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHRzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvcGFuZS50c3giLCIvdHMvdmlld3MvcmVzdWx0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDSSxFQUFFLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFF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