System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/voice", "@aimpact/chat@1.0.1/wrapper", "react@18.2.0", "@bgroup/media-manager@1.0.0/audio-player", "@aimpact/ailearn-app@0.0.11/config", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/ailearn-app@0.0.11/chat/messages", "@aimpact/chat-sdk@1.0.0/widgets/markdown", "pragmate-ui@0.0.37/components", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/tabs", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/empty"], function (_export, _context) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
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
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactAilearnApp0011ChatMessages) {
      dependency_12 = _aimpactAilearnApp0011ChatMessages;
    }, function (_aimpactChatSdk100WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk100WidgetsMarkdown;
    }, function (_pragmateUi0037Components) {
      dependency_14 = _pragmateUi0037Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi0037Tabs) {
      dependency_17 = _pragmateUi0037Tabs;
    }, function (_pragmateUi0037Alert) {
      dependency_18 = _pragmateUi0037Alert;
    }, function (_pragmateUi0037Empty) {
      dependency_19 = _pragmateUi0037Empty;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
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
          const StudentDashboardContext = _react.default.createContext({});
          exports.StudentDashboardContext = StudentDashboardContext;
          const useStudentDashboardContext = () => _react.default.useContext(StudentDashboardContext);
          exports.useStudentDashboardContext = useStudentDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2780049041,
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
            }), _react.default.createElement(_tabs.TabsContainer, null, _react.default.createElement(_tabs.Tabs, null, _react.default.createElement(_tabs.Tab, null, texts.spoken), _react.default.createElement(_tabs.Tab, null, texts.multiple), _react.default.createElement(_tabs.Tab, null, texts.conversation)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_chat.UserChat, null), _react.default.createElement(_analysisOral.SpokenAnalysis, null), _react.default.createElement(_multiple.MultipleChoiceReport, null)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBRU87VUFBVSxNQUNYQSxVQUFXLFNBQVFDLCtCQUF5QjtZQUNqRCxNQUFNO1lBQ05DLFdBQVc7Y0FDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUlDLG1CQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNuQjtZQUNBLElBQUlDLE1BQU07Y0FDVCxPQUFPQyxXQUFJO1lBQ1o7WUFFQUMsSUFBSTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDSSxFQUFFLENBQUNGLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7WUFFNUU7WUFFQTs7O1lBR0FHLElBQUksSUFBSTs7VUFDUkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJEO1VBQ0E7VUFDQTtVQUNBO1VBRU0sTUFBT1YsWUFBYSxTQUFRVyxvQkFBMkI7WUFDNUQsV0FBVztZQUNYLElBQUlDLFVBQVU7Y0FDYixPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3hCO1lBQ0EsYUFBYTtZQUNiLElBQUlDLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCO1lBQ0EsT0FBTztZQUNQLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ3BCO1lBRUEsUUFBUSxHQUFHO2NBQ1ZDLEdBQUcsRUFBRUMsWUFBSztjQUNWQyxHQUFHLEVBQUVDLGVBQVEsQ0FBQzthQUNkOztZQUNELGNBQWM7WUFDZCxPQUFPLEdBQUcsS0FBSztZQUNmLElBQUlDLE1BQU07Y0FDVCxPQUFPLElBQUksQ0FBQyxjQUFjO1lBQzNCO1lBRUFDO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyREMsUUFBUSxFQUFFQyxtQkFBVSxDQUFDRCxRQUFRO2dCQUM3QkUsSUFBSSxFQUFFRCxtQkFBVSxDQUFDRTtlQUNqQixDQUFDO2NBRUZGLG1CQUFVLENBQUNHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUNDLGdCQUFnQixDQUFDO1lBQzVEO1lBRUFBLGdCQUFnQixHQUFHLE1BQUs7Y0FDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQ0MsR0FBRyxDQUFDO2dCQUN2QkosSUFBSSxFQUFFRCxtQkFBVSxDQUFDRSxVQUFVO2dCQUMzQkksU0FBUyxFQUFFTixtQkFBVSxDQUFDRDtlQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU1kLElBQUksQ0FBQ08sTUFBTSxFQUFFRCxZQUFZO2NBQzlCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDZ0IsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUdmLE1BQU07Z0JBQ3JCLE1BQU0sQ0FBQ2dCLFlBQVksRUFBRUMsTUFBTSxDQUFDLEdBQUdsQixZQUFZLENBQUNtQixLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHbkIsWUFBWTtnQkFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJb0IsZ0JBQVUsQ0FBQztrQkFDakNILFlBQVk7a0JBQ1poQixNQUFNLEVBQUVBO2lCQUNSLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQ1csRUFBRSxDQUFDLGFBQWEsRUFBRSxNQUFNLElBQUksQ0FBQ1MsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsV0FBVyxDQUFDVCxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ1MsWUFBWSxDQUFDO2dCQUNoRCxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMzQixJQUFJLENBQUN3QixNQUFNLEVBQUVqQixNQUFNLENBQUM7Z0JBRTNDLElBQUksQ0FBQ3FCLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUCxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0FuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuRUQ7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ00sU0FBVTZCLGNBQWM7WUFDN0IsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyx3Q0FBMEIsR0FBRTtZQUU5QyxNQUFNQyxRQUFRLEdBQUdDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sR0FBRyxnQkFBZ0JMLEtBQUssQ0FBQzNCLFlBQVksU0FBUzJCLEtBQUssQ0FBQzFCLE1BQU0sUUFBUTtZQUU3RyxPQUNDZ0MsNkJBQUNDLFVBQUk7Y0FBQ0MsU0FBUyxFQUFDO1lBQWdDLEdBQy9DRiw2QkFBQ0csd0JBQVc7Y0FBQ0MsR0FBRyxFQUFFVDtZQUFRLEVBQUksRUFDN0JELEtBQUssQ0FBQzVCLFVBQVUsQ0FBQ3VDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRUMsS0FBSyxLQUFJO2NBQzlDLE9BQ0NSO2dCQUFTUyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztnQkFBRVQsU0FBUyxFQUFDO2NBQTJCLEdBQ2pGRjtnQkFBU0UsU0FBUyxFQUFDO2NBQXVCLEdBQUVVLFdBQUssQ0FBQ0wsSUFBSSxDQUFDTSxLQUFLLENBQUMsQ0FBVyxFQUN4RWIsOENBQ0NBLDZDQUNDQSx5Q0FBS08sSUFBSSxDQUFDRyxPQUFPLENBQU0sQ0FDZixFQUNUVix3Q0FBSU8sSUFBSSxDQUFDTyxVQUFVLENBQUssQ0FDZixDQUNEO1lBRVosQ0FBQyxDQUFDLENBQ0k7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNNLFNBQVVDLFFBQVEsQ0FBQ0MsS0FBSztZQUM3QixNQUFNO2NBQ0xDLEtBQUssRUFBRTtnQkFBRUMsSUFBSSxFQUFFRDtjQUFLLENBQUU7Y0FDdEJ2QjtZQUFLLENBQ0wsR0FBRyx3Q0FBMEIsR0FBRTtZQUNoQyxJQUFJeUIsTUFBTSxHQUFHekIsS0FBSyxFQUFFNUIsVUFBVSxFQUFFb0QsSUFBSSxFQUFFRSxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUM7WUFFaEUsTUFBTSxDQUFDRixRQUFRLEVBQUVHLFdBQVcsQ0FBQyxHQUFHdkIsY0FBSyxDQUFDd0IsUUFBUSxDQUFDTCxNQUFNLEdBQUd6QixLQUFLLENBQUM1QixVQUFVLENBQUNvRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVsRyxvQkFBUyxFQUNSLENBQUMzQixLQUFLLENBQUMsRUFDUCxNQUFLO2NBQ0o2QixXQUFXLENBQUM3QixLQUFLLENBQUM1QixVQUFVLEVBQUVvRCxJQUFJLEVBQUVFLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1lBQ3BELENBQUMsRUFDRCxhQUFhLENBQ2I7WUFFRCxPQUNDckIsNkJBQUNDLFVBQUk7Y0FBQ0MsU0FBUyxFQUFDO1lBQWdDLEdBQy9DRix5Q0FBS2lCLEtBQUssQ0FBQ1EsS0FBSyxNQUFPLEVBQ3ZCekIsNkJBQUMwQixrQkFBUTtjQUFDaEMsS0FBSyxFQUFFQSxLQUFLO2NBQUUwQixRQUFRLEVBQUVBLFFBQVE7Y0FBRUgsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FDdEQ7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkE7VUFFQTtVQUNBO1VBQ00sU0FBVVUsb0JBQW9CO1lBQ25DLE1BQU07Y0FBRWpDO1lBQUssQ0FBRSxHQUFHLHdDQUEwQixHQUFFO1lBRTlDLE9BQU9NLDZCQUFDNEIsa0JBQVE7Y0FBQ0MsT0FBTyxFQUFFbkMsS0FBSyxDQUFDNUIsVUFBVSxDQUFDZ0U7WUFBb0IsRUFBSTtVQUNwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQTtVQVFPLE1BQU1DLHVCQUF1QixHQUFHL0IsY0FBSyxDQUFDZ0MsYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUFDcEU7VUFDOUUsTUFBTXFFLDBCQUEwQixHQUFHLE1BQU1qQyxjQUFLLENBQUNrQyxVQUFVLENBQUNILHVCQUF1QixDQUFDO1VBQUNuRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUMUY7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUVBO1VBQ0E7VUFDQTtVQUNPO1VBQVUsU0FDUlIsSUFBSSxDQUFDO1lBQUVzQztVQUFLLENBQTJCO1lBQy9DLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFOEMsUUFBUSxDQUFDLEdBQUduQyxjQUFLLENBQUN3QixRQUFRLENBQUM5QixLQUFLLENBQUNMLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMrQyxVQUFVLEVBQUVuQixLQUFLLENBQUMsR0FBRyxvQkFBUSxFQUFDb0Isc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELG9CQUFTLEVBQUMsQ0FBQzVDLEtBQUssQ0FBQyxFQUFFLE1BQU15QyxRQUFRLENBQUN6QyxLQUFLLENBQUNMLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUMrQyxVQUFVLEVBQUUsT0FBT3BDLDZCQUFDdUMsbUJBQU87Y0FBQ0MsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUUzRCxNQUFNQyxLQUFLLEdBQUc7Y0FDYi9DLEtBQUs7Y0FDTDVCLFVBQVUsRUFBRTRCLEtBQUssQ0FBQzVCLFVBQVU7Y0FDNUJtRDthQUNBO1lBQ0QsT0FDQ2pCLDZCQUFDK0IsaUNBQXVCLENBQUNXLFFBQVE7Y0FBQ0QsS0FBSyxFQUFFQTtZQUFLLEdBQzdDekM7Y0FBS0UsU0FBUyxFQUFDO1lBQWlCLEdBQy9CRiw2QkFBQzJDLDhCQUFpQjtjQUFDQyxTQUFTLEVBQUUsSUFBSTtjQUFFbkIsS0FBSyxFQUFFUixLQUFLLENBQUNRO1lBQUssRUFBSSxFQUMxRHpCLDZCQUFDNkMsbUJBQWEsUUFDYjdDLDZCQUFDOEMsVUFBSSxRQUNKOUMsNkJBQUMrQyxTQUFHLFFBQUU5QixLQUFLLENBQUMrQixNQUFNLENBQU8sRUFDekJoRCw2QkFBQytDLFNBQUcsUUFBRTlCLEtBQUssQ0FBQ2dDLFFBQVEsQ0FBTyxFQUMzQmpELDZCQUFDK0MsU0FBRyxRQUFFOUIsS0FBSyxDQUFDaUMsWUFBWSxDQUFPLENBQ3pCLEVBQ1BsRCw2QkFBQ21ELFdBQUssUUFDTG5ELDZCQUFDZSxjQUFRLE9BQUcsRUFDWmYsNkJBQUNQLDRCQUFjLE9BQUcsRUFDbEJPLDZCQUFDb0QsOEJBQW9CLE9BQUcsQ0FDakIsQ0FDTyxDQUNYLENBQzRCO1VBRXJDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBRU87VUFBVyxNQUFNQSxvQkFBb0IsR0FBOEJwQyxLQUFLLElBQUc7WUFDakYsTUFBTTtjQUFFbEQsVUFBVTtjQUFFNEIsS0FBSztjQUFFdUI7WUFBSyxDQUFFLEdBQUcsd0NBQTBCLEdBQUU7WUFDakUsTUFBTTtjQUNMO2NBQ0E7Y0FDQTtjQUNBO2NBQ0FvQztZQUFTLENBQ1QsR0FBR3ZGLFVBQVU7WUFFZCxJQUFJLENBQUN1RixTQUFTLEVBQUU7Y0FDZixPQUNDckQsNkJBQUNDLFVBQUksUUFDSkQsNkJBQUNzRCxZQUFLO2dCQUFDQyxJQUFJLEVBQUV0QyxLQUFLLENBQUN1QztjQUFjLEVBQUksQ0FDL0I7O1lBR1QsTUFBTTtjQUNMMUMsVUFBVSxFQUFFO2dCQUFFMkMsT0FBTztnQkFBRUM7Y0FBUTtZQUFFLENBQ2pDLEdBQUdMLFNBQVM7WUFDYjlELE9BQU8sQ0FBQ29FLEdBQUcsQ0FBQyxDQUFDLEVBQUVOLFNBQVMsRUFBRXZGLFVBQVUsQ0FBQztZQUNyQyxNQUFNOEYsTUFBTSxHQUFHUCxTQUFTLENBQUNRLFNBQVMsQ0FBQ3ZELEdBQUcsQ0FBQyxDQUFDd0QsUUFBUSxFQUFFdEQsS0FBSyxLQUFJO2NBQzFELE1BQU11RCxJQUFJLEdBQUdOLE9BQU8sQ0FBQ2pELEtBQUssQ0FBQztjQUMzQixNQUFNd0QsT0FBTyxHQUFHRixRQUFRLENBQUNFLE9BQU8sQ0FBQzFELEdBQUcsQ0FBQyxDQUFDMkQsTUFBTSxFQUFFQyxDQUFDLEtBQUk7Z0JBQ2xELElBQUlDLEdBQUcsR0FBRyxjQUFjSixJQUFJLENBQUNLLE1BQU0sS0FBS0YsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRztnQkFDdkUsSUFBSUgsSUFBSSxDQUFDSyxNQUFNLEtBQUtGLENBQUMsRUFBRTtrQkFDdEJDLEdBQUcsSUFBSSxTQUFTSixJQUFJLENBQUNNLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0IsRUFBRTs7Z0JBR3hFLE9BQ0NyRTtrQkFBS1MsR0FBRyxFQUFFd0QsTUFBTTtrQkFBRS9ELFNBQVMsRUFBRWlFO2dCQUFHLEdBQy9CbkUsMkNBQU9pRSxNQUFNLENBQVEsQ0FDaEI7Y0FFUixDQUFDLENBQUM7Y0FDRixPQUNDakU7Z0JBQUtTLEdBQUcsRUFBRXFELFFBQVEsQ0FBQ1AsSUFBSTtnQkFBRXJELFNBQVMsRUFBQztjQUFrRCxHQUNwRkYseUNBQUs4RCxRQUFRLENBQUNQLElBQUksQ0FBTSxFQUN2QlMsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBRUYsT0FDQ2hFLDZCQUFDQyxVQUFJLFFBQ0pELHlDQUFLaUIsS0FBSyxDQUFDcUQsT0FBTyxDQUFNLEVBQ3hCdEUsNkJBQUN1RSxZQUFLO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQ2pCeEU7Y0FBS0UsU0FBUyxFQUFDO1lBQTRDLEdBQzFERiw2Q0FBU2lCLEtBQUssQ0FBQ3dELE9BQU8sTUFBVyxFQUNqQ3pFLDhDQUNDQSwyQ0FBTzBELFFBQVEsQ0FBQ2UsT0FBTyxDQUFRLE9BQUN6RSwyQ0FBTzBELFFBQVEsQ0FBQ2dCLEtBQUssQ0FBUSxDQUNwRCxDQUNMLEVBQ04xRTtjQUFLRSxTQUFTLEVBQUM7WUFBNEMsR0FDMURGLDZDQUFTaUIsS0FBSyxDQUFDMEQsS0FBSyxNQUFXLEVBQy9CM0UsOENBQ0NBLDJDQUFPMEQsUUFBUSxDQUFDaUIsS0FBSyxDQUFRLE9BQUMzRSwyQ0FBTzBELFFBQVEsQ0FBQ2dCLEtBQUssQ0FBUSxDQUNsRCxDQUNMLENBQ0MsRUFDUGQsTUFBTSxDQUNEO1VBRVQsQ0FBQztVQUFDaEc7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVGO1VBQ00sU0FBVXFDLElBQUksQ0FBQztZQUFFMkUsUUFBUTtZQUFFMUU7VUFBUyxDQUErQztZQUN4RixNQUFNaUUsR0FBRyxHQUFHLGtCQUFrQmpFLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDaEUsT0FBT0Y7Y0FBU0UsU0FBUyxFQUFFaUU7WUFBRyxHQUFHUyxRQUFRLENBQVc7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkE7VUFFQTtVQUNPO1VBQVcsTUFBTUMsT0FBTyxHQUE4QixDQUFDO1lBQUVuRixLQUFLO1lBQUV1QixLQUFLO1lBQUU2RDtVQUFXLENBQUUsS0FBSTtZQUM5RixNQUFNO2NBQ0x6QixTQUFTLEVBQUU7Z0JBQ1Z2QyxVQUFVO2dCQUNWQSxVQUFVLEVBQUU7a0JBQUU0QztnQkFBUTtjQUFFO1lBQ3hCLENBQ0QsR0FBR2hFLEtBQUs7WUFFVCxNQUFNa0UsTUFBTSxHQUFHa0IsV0FBVyxDQUFDakIsU0FBUyxDQUFDdkQsR0FBRyxDQUFDLENBQUN3RCxRQUFRLEVBQUV0RCxLQUFLLEtBQUk7Y0FDNUQsTUFBTXVELElBQUksR0FBR2pELFVBQVUsQ0FBQzJDLE9BQU8sQ0FBQ2pELEtBQUssQ0FBQztjQUN0QyxNQUFNd0QsT0FBTyxHQUFHRixRQUFRLENBQUNFLE9BQU8sQ0FBQzFELEdBQUcsQ0FBQyxDQUFDMkQsTUFBTSxFQUFFQyxDQUFDLEtBQUk7Z0JBQ2xELElBQUlDLEdBQUcsR0FBRyxjQUFjSixJQUFJLENBQUNLLE1BQU0sS0FBS0YsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLEVBQUUsR0FBRztnQkFDdkUsSUFBSUgsSUFBSSxDQUFDSyxNQUFNLEtBQUtGLENBQUMsRUFBRTtrQkFDdEJDLEdBQUcsSUFBSSxTQUFTSixJQUFJLENBQUNNLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxnQkFBZ0IsRUFBRTs7Z0JBR3hFLE9BQ0NyRTtrQkFBS1MsR0FBRyxFQUFFd0QsTUFBTTtrQkFBRS9ELFNBQVMsRUFBRWlFO2dCQUFHLEdBQy9CbkUsMkNBQU9pRSxNQUFNLENBQVEsQ0FDaEI7Y0FFUixDQUFDLENBQUM7Y0FDRixPQUNDakU7Z0JBQUtTLEdBQUcsRUFBRXFELFFBQVEsQ0FBQ1AsSUFBSTtnQkFBRXJELFNBQVMsRUFBQztjQUFrRCxHQUNwRkYseUNBQUs4RCxRQUFRLENBQUNQLElBQUksQ0FBTSxFQUN2QlMsT0FBTyxDQUNIO1lBRVIsQ0FBQyxDQUFDO1lBRUYsT0FDQ2hFO2NBQUtFLFNBQVMsRUFBQztZQUF1QixHQUNyQ0YseUNBQUtpQixLQUFLLENBQUNxRCxPQUFPLENBQU0sRUFDeEJ0RSw2QkFBQ3VFLFlBQUs7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sR0FDakJ4RTtjQUFLRSxTQUFTLEVBQUM7WUFBNEMsR0FDMURGLDZDQUFTaUIsS0FBSyxDQUFDd0QsT0FBTyxNQUFXLEVBQ2pDekUsOENBQ0NBLDJDQUFPMEQsUUFBUSxDQUFDZSxPQUFPLENBQVEsT0FBQ3pFLDJDQUFPMEQsUUFBUSxDQUFDZ0IsS0FBSyxDQUFRLENBQ3BELENBQ0wsRUFDTjFFO2NBQUtFLFNBQVMsRUFBQztZQUE0QyxHQUMxREYsNkNBQVNpQixLQUFLLENBQUMwRCxLQUFLLE1BQVcsRUFDL0IzRSw4Q0FDQ0EsMkNBQU8wRCxRQUFRLENBQUNpQixLQUFLLENBQVEsT0FBQzNFLDJDQUFPMEQsUUFBUSxDQUFDZ0IsS0FBSyxDQUFRLENBQ2xELENBQ0wsQ0FDQyxFQUNQZCxNQUFNLENBQ0Y7VUFFUixDQUFDO1VBQUNoRyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJhc3Nlc3NtZW50IiwiYXNzZXNzbWVudElkIiwidXNlcklkIiwid2ViIiwiVm9pY2UiLCJsYWIiLCJWb2ljZUxhYiIsInBsYXllciIsImNvbnN0cnVjdG9yIiwibGFuZ3VhZ2UiLCJBcHBXcmFwcGVyIiwicmF0ZSIsImF1ZGlvU3BlZWQiLCJvbiIsIkxpc3RlbkFwcENoYW5nZXMiLCJzZXQiLCJsYW5ndXVhZ2UiLCJmZXRjaGluZyIsImFzc2lnbm1lbnRJZCIsIml0ZW1JZCIsInNwbGl0IiwiQXNzZXNzbWVudCIsInRyaWdnZXJFdmVudCIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIlNwb2tlbkFuYWx5c2lzIiwic3RvcmUiLCJhdWRpb1VybCIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwiUmVhY3QiLCJQYW5lIiwiY2xhc3NOYW1lIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJhbmFseXNpcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImtleSIsInN1YmplY3QiLCJyZXBsYWNlIiwiRmFjZXMiLCJncmFkZSIsImV2YWx1YXRpb24iLCJVc2VyQ2hhdCIsInByb3BzIiwidGV4dHMiLCJjaGF0IiwibnVtYmVyIiwibWVzc2FnZXMiLCJpdGVtcyIsImxlbmd0aCIsInNldE1lc3NhZ2VzIiwidXNlU3RhdGUiLCJ0aXRsZSIsIk1lc3NhZ2VzIiwiQ29tcGV0ZW5jaWVzRmVlZGJhY2siLCJNYXJrZG93biIsImNvbnRlbnQiLCJjb21wZXRlbmNpZXNGZWVkYmFjayIsIlN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0dWRlbnREYXNoYm9hcmRDb250ZXh0IiwidXNlQ29udGV4dCIsInNldFJlYWR5IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlRhYiIsInNwb2tlbiIsIm11bHRpcGxlIiwiY29udmVyc2F0aW9uIiwiUGFuZXMiLCJNdWx0aXBsZUNob2ljZVJlcG9ydCIsInNlbGVjdGlvbiIsIkVtcHR5IiwidGV4dCIsInNlbGVjY2lvbkVtcHR5IiwiYW5zd2VycyIsImNvdW50ZXJzIiwibG9nIiwib3V0cHV0IiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJkYXRhIiwib3B0aW9ucyIsIm9wdGlvbiIsImkiLCJjbHMiLCJhbnN3ZXIiLCJhY2N1cmFjeSIsInJlc3VsdHMiLCJBbGVydCIsInR5cGUiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNoaWxkcmVuIiwiUmVzdWx0cyIsImFzc2Vzc21lbnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9hbmFseXNpcy1vcmFsLnRzeCIsInRzL3ZpZXdzL2NoYXQudHN4IiwidHMvdmlld3MvY29tcGV0ZW5jaWVzLnRzeCIsInRzL3ZpZXdzL2NvbnRleHRzLnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvbXVsdGlwbGUudHN4IiwidHMvdmlld3MvcGFuZS50c3giLCJ0cy92aWV3cy9yZXN1bHRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==