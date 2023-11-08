System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.14/config", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/ailearn-app@0.0.14/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/tabs", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/empty"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0014Config) {
      dependency_10 = _aimpactAilearnApp0014Config;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_11 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactAilearnApp0014ChatMessages) {
      dependency_12 = _aimpactAilearnApp0014ChatMessages;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard/user-detail",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/voice', dependency_6], ['@aimpact/chat/wrapper', dependency_7], ['react', dependency_8], ['@bgroup/media-manager/audio-player', dependency_9], ['@aimpact/ailearn-app/config', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/chat/messages', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/tabs', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/empty', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assigment-user-detail-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard/user-detail.widget",
        "is": "page",
        "route": "/assignments/dashboard/user-detail/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/dashboard/user-detail.widget');
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
        hash: 2474312953,
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
              store,
              texts
            } = (0, _contexts.useStudentDashboardContext)();
            const audioUrl = _config.default.params.apis.ailearn + `/assessments/${store.assessmentId}/user/${store.userId}/audio`;
            return _react.default.createElement(_pane.Pane, {
              className: "assessment-analysis__container"
            }, _react.default.createElement("h2", null, texts.assessments.title), _react.default.createElement("p", null, texts.assessments.oralText), _react.default.createElement(_audioPlayer.AudioPlayer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiX3ZvaWNlIiwiX3dyYXBwZXIiLCJSZWFjdGl2ZU1vZGVsIiwiYXNzZXNzbWVudCIsImFzc2Vzc21lbnRJZCIsInVzZXJJZCIsInBsYXllcnMiLCJ3ZWIiLCJWb2ljZSIsImxhYiIsIlZvaWNlTGFiIiwiY3VycmVudFBsYXllciIsInBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJmZXRjaGluZyIsImFzc2lnbm1lbnRJZCIsIml0ZW1JZCIsInNwbGl0IiwiQXNzZXNzbWVudCIsInRyaWdnZXJFdmVudCIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIl9jb250ZXh0cyIsIl9wYW5lIiwiX2F1ZGlvUGxheWVyIiwiX2NvbmZpZyIsIlNwb2tlbkFuYWx5c2lzIiwidGV4dHMiLCJ1c2VTdHVkZW50RGFzaGJvYXJkQ29udGV4dCIsImF1ZGlvVXJsIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiY3JlYXRlRWxlbWVudCIsIlBhbmUiLCJjbGFzc05hbWUiLCJhc3Nlc3NtZW50cyIsInRpdGxlIiwib3JhbFRleHQiLCJBdWRpb1BsYXllciIsInNyYyIsImFuYWx5c2lzIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5Iiwic3ViamVjdCIsInJlcGxhY2UiLCJGYWNlcyIsImdyYWRlIiwiZXZhbHVhdGlvbiIsIl9ob29rcyIsIl9tZXNzYWdlcyIsIlVzZXJDaGF0IiwicHJvcHMiLCJjaGF0IiwibnVtYmVyIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJNZXNzYWdlcyIsIl9tYXJrZG93biIsIkNvbXBldGVuY2llc0ZlZWRiYWNrIiwiTWFya2Rvd24iLCJjb250ZW50IiwiY29tcGV0ZW5jaWVzRmVlZGJhY2siLCJTdHVkZW50RGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MyIiwiX2NvbXBvbmVudHMyIiwiX3RhYnMiLCJfbXVsdGlwbGUiLCJfY2hhdCIsIl9hbmFseXNpc09yYWwiLCJzZXRSZWFkeSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlRhYiIsInNwb2tlbiIsIm11bHRpcGxlIiwiY29udmVyc2F0aW9uIiwiUGFuZXMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsIl9hbGVydCIsIl9lbXB0eSIsInNlbGVjdGlvbiIsIkVtcHR5IiwidGV4dCIsInNlbGVjY2lvbkVtcHR5IiwiYW5zd2VycyIsImNvdW50ZXJzIiwibG9nIiwib3V0cHV0IiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJkYXRhIiwib3B0aW9ucyIsIm9wdGlvbiIsImkiLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsInJlc3VsdHMiLCJBbGVydCIsInR5cGUiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNoaWxkcmVuIiwiUmVzdWx0cyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FuYWx5c2lzLW9yYWwudHN4IiwiL3RzL3ZpZXdzL2NoYXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBldGVuY2llcy50c3giLCIvdHMvdmlld3MvY29udGV4dHMudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9wYW5lLnRzeCIsIi90cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNJLEVBQUUsQ0FBQ0YsR0FBRyxDQUFDLGNBQWMsQ0FB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