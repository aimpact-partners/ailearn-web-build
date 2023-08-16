System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@0.0.1/session", "react@18.2.0", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/components", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_2 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive114Model) {
      dependency_3 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk001Session) {
      dependency_5 = _aimpactChatSdk001Session;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat002SharedComponents) {
      dependency_7 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_9 = _pragmateUi0036Spinner;
    }, function (_aimpactAilearnApp100ComponentsTabs) {
      dependency_10 = _aimpactAilearnApp100ComponentsTabs;
    }, function (_pragmateUi0036Collapsible) {
      dependency_11 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Components) {
      dependency_12 = _pragmateUi0036Components;
    }, function (_aimpactChat002SharedHooks) {
      dependency_13 = _aimpactChat002SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_14 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_15 = _pragmateUi0036Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_16 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/components', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/spinner', dependency_9], ['@aimpact/ailearn-app/components/tabs', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/management.widget",
        "is": "page",
        "route": "/lessons/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/lessons/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1615010135,
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
            get Widget() {
              return _views.Page;
            }
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1588833450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #model;
            view = 'FORM';
            get model() {
              return this.#model;
            }
            get isValid() {
              let isValid = !!this.#model.curriculumObjective && !!(this.#model.topicTitles?.length >= 3) && this.#model.topicTitles?.every(topic => topic.trim() !== '');
              return isValid;
            }
            get hasContent() {
              return !!this.#model.has('content');
            }
            constructor() {
              super();
              this.reactiveProps(['view']);
            }
            async load(id) {
              if (this.#model?.id === id) {
                return;
              }
              if (id === 'new') id = undefined;
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Lesson({
                id
              });
              globalThis.m = this.#model;
              await this.#model.isReady;
              if (!id) {
                this.ready = true;
                return;
              }
              await this.#model.load();
              this.ready = true;
            }
            set = (property, value) => {
              const properties = [...this.#model.properties, 'topicTitles'];
              if (!properties.includes(property)) return;
              this.#model[property] = value;
              return;
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 309461877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLessonContext = exports.LessonContext = void 0;
          var React = require("react");
          const LessonContext = React.createContext({});
          exports.LessonContext = LessonContext;
          const useLessonContext = () => React.useContext(LessonContext);
          exports.useLessonContext = useLessonContext;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/generator/index
      ***************************************/

      ims.set('./views/generator/index', {
        hash: 3337472304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Generator = Generator;
          var React = require("react");
          var _context = require("../context");
          var _lessons = require("./lessons");
          var _topics = require("./topics");
          var _components = require("@aimpact/chat/shared/components");
          function Generator() {
            const {
              store,
              store: {
                model
              },
              texts
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const cls = `lesson-view${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: model.curriculumObjective,
              subtitle: texts.title
            }), React.createElement(_lessons.LessonContentGenerator, null), React.createElement(_topics.TopicsGenerator, null));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/generator/lessons/content
      *************************************************/

      ims.set('./views/generator/lessons/content', {
        hash: 2873075988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContent = LessonContent;
          var React = require("react");
          var _context = require("../../context");
          var _emptyContent = require("../shared/empty-content");
          var _content = require("../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _spinner = require("pragmate-ui/spinner");
          function LessonContent({
            area
          }) {
            const {
              store,
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            const element = model.elements.items.get(area);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [value, setValue] = React.useState(element?.value);
            const specs = {
              area,
              setFetching,
              model,
              element
            };
            (0, _hooks.useBinder)([element], () => {
              setFetching(element.fetching);
              setValue(element?.value);
            });
            React.useEffect(() => {
              if (element.id && !element.value) element.load(element.id);
            }, [element.id]);
            const cls = `lesson__content visible ${fetching ? ' is-fetching' : ''}`;
            if (!value && element.id) {
              return React.createElement("article", {
                className: cls
              }, React.createElement(_spinner.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const Control = element?.value ? _content.AreaContent : _emptyContent.EmptyContent;
            return React.createElement("article", {
              className: cls
            }, React.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/generator/lessons/index
      ***********************************************/

      ims.set('./views/generator/lessons/index', {
        hash: 3348345773,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContentGenerator = LessonContentGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _content = require("./content");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _collapsible = require("pragmate-ui/collapsible");
          function LessonContentGenerator() {
            const {
              store,
              texts: {
                lesson: texts
              }
            } = (0, _context.useLessonContext)();
            const [selected, setSelected] = React.useState('content');
            const {
              elements
            } = texts;
            const panesTitles = Object.keys(elements);
            const onChange = (event, index) => {
              console.log(11, panesTitles[index]);
              setSelected(panesTitles[index]);
            };
            const tabs = [];
            const panes = [];
            panesTitles.forEach((item, index) => {
              tabs.push(React.createElement(_tabs.Tab, {
                key: item
              }, item));
              panes.push(React.createElement(_content.LessonContent, {
                key: item,
                area: item
              }));
            });
            return React.createElement("article", {
              className: "lesson-generator lesson-generator--introduction"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", {
              className: "topic-title"
            }, texts.step)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, tabs), React.createElement(_tabs.Panes, null, panes)))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/generator/shared/LoadingBlock
      *****************************************************/

      ims.set('./views/generator/shared/LoadingBlock', {
        hash: 2887429678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingBlock = LoadingBlock;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          function LoadingBlock() {
            const cls = `loading__block`;
            return React.createElement("article", {
              className: cls
            }, React.createElement(_components.Spinner, {
              active: true,
              type: "primary",
              size: "sm"
            }));
          }
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./views/generator/shared/content/MarkedContent
      **************************************************************/

      ims.set('./views/generator/shared/content/MarkedContent', {
        hash: 2494349224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkedContent = MarkedContent;
          var React = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          function MarkedContent({
            content
          }) {
            const mark = (0, _hooks.useMarked)();
            return React.createElement("div", {
              dangerouslySetInnerHTML: {
                __html: mark(content)
              }
            });
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/content/index
      ******************************************************/

      ims.set('./views/generator/shared/content/index', {
        hash: 3487420355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaContent = AreaContent;
          var React = require("react");
          var _questions = require("../questions");
          var _context = require("../../../context");
          var _MarkedContent = require("./MarkedContent");
          function AreaContent({
            area,
            element
          }) {
            const {
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            console.log(13, area);
            const Control = ['assessment', 'previous'].includes(area) ? _questions.QuestionsComponent : _MarkedContent.MarkedContent;
            return React.createElement("div", {
              className: "content-wrapper"
            }, React.createElement(Control, {
              content: element.value
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/empty-content
      ******************************************************/

      ims.set('./views/generator/shared/empty-content', {
        hash: 974938728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyContent = EmptyContent;
          var _react = require("react");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptyContent({
            element,
            area
          }) {
            const {
              texts: {
                empty: texts
              },
              store
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(element.fetching);
            (0, _hooks.useBinder)([element], () => setFetching(element.fetching));
            const generate = async event => {
              event.preventDefault();
              await element.load(true);
            };
            const message = fetching ? texts.generating : texts.message;
            return _react.default.createElement("div", {
              className: "empty-content"
            }, _react.default.createElement("h4", null, _react.default.createElement("strong", null, " ", texts.title), " ", _react.default.createElement("br", null), message));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/generator/shared/questions
      **************************************************/

      ims.set('./views/generator/shared/questions', {
        hash: 283739036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionComponent = QuestionComponent;
          exports.QuestionsComponent = QuestionsComponent;
          exports.TopicComponent = TopicComponent;
          var React = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../../context");
          function QuestionsComponent({
            content
          }) {
            try {
              const data = JSON.parse(content);
              const {
                texts,
                store: {
                  model
                }
              } = (0, _context.useLessonContext)();
              return React.createElement("div", {
                className: "assessment__container"
              }, React.createElement(_alert.Alert, {
                type: "success",
                className: "mb-30"
              }, React.createElement("h5", null, texts.assessmentReview)), data.assessment.map((topic, index) => React.createElement(TopicComponent, {
                key: index,
                topic: topic
              })));
            } catch (e) {
              console.error('error rendering', e);
              return null;
            }
          }
          function TopicComponent({
            topic
          }) {
            return React.createElement("div", {
              className: "topic__container"
            }, React.createElement("h4", null, topic.title), topic.questions.map((question, index) => React.createElement(QuestionComponent, {
              key: index,
              question: question
            })));
          }
          function QuestionComponent({
            question
          }) {
            return React.createElement("div", {
              className: "question__container"
            }, React.createElement("h3", null, question.text), React.createElement("ul", null, question.options.map((option, index) => React.createElement(OptionComponent, {
              key: index,
              option: option,
              isCorrect: index === question.correct_answer
            }))));
          }
          function OptionComponent({
            option,
            isCorrect
          }) {
            return React.createElement("li", null, isCorrect ? React.createElement("span", {
              className: "correct"
            }, option) : option);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/topics/index
      **********************************************/

      ims.set('./views/generator/topics/index', {
        hash: 1556789436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicsGenerator = TopicsGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _topic = require("./topic");
          function TopicsGenerator() {
            const {
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            return React.createElement(React.Fragment, null, model.topics.items?.map((item, index) => React.createElement(_topic.TopicItem, {
              item: item,
              index: index,
              key: index
            })));
          }
        }
      });

      /**************************************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content/ElementTopicContent
      **************************************************************************/

      ims.set('./views/generator/topics/topic/content/ElementTopicContent', {
        hash: 1007897842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ElementTopicContent = ElementTopicContent;
          var React = require("react");
          var _context = require("../context");
          var _emptyContent = require("../../../shared/empty-content");
          var _content = require("../../../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _LoadingBlock = require("../../../shared/LoadingBlock");
          function ElementTopicContent({
            topic,
            element,
            area
          }) {
            const {
              selected
            } = (0, _context.useTopicContext)();
            const [value, setValue] = React.useState(element?.value);
            const [fetching, setFetching] = React.useState(element?.fetching);
            (0, _hooks.useBinder)([element], () => {
              setValue(element.value);
              setFetching(element.fetching);
            });
            const cls = `lesson__content ${fetching ? ' is-fetching' : ''}`;
            const hasElements = !element || !!element?.value;
            if (!hasElements && fetching) return React.createElement(_LoadingBlock.LoadingBlock, null);
            const specs = {
              area,
              model: topic,
              element
            };
            const Control = hasElements ? _content.AreaContent : _emptyContent.EmptyContent;
            return React.createElement("article", {
              className: cls
            }, React.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content/TopicContent
      *******************************************************************/

      ims.set('./views/generator/topics/topic/content/TopicContent', {
        hash: 1671064633,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicContent = TopicContent;
          var React = require("react");
          var _context = require("../../../../context");
          var _ElementTopicContent = require("./ElementTopicContent");
          var _collapsible = require("pragmate-ui/collapsible");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TopicContent({
            item,
            index
          }) {
            const {
              store,
              texts: {
                titles
              },
              texts: {
                topics: texts
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching || item.fetching);
            const [selected, setSelected] = React.useState('content');
            const [topic, setTopic] = React.useState(item);
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
            const {
              elements
            } = texts;
            const panesTitles = Object.keys(elements);
            const tabs = [];
            const panes = [];
            panesTitles.forEach((area, index) => {
              const specs = {
                element: topic.elements.get(area),
                area,
                topic: item
              };
              tabs.push(React.createElement(_tabs.Tab, {
                key: `tab.${area}`
              }, elements[area]));
              panes.push(React.createElement(_ElementTopicContent.ElementTopicContent, {
                ...specs,
                key: index
              }));
            });
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const onChange = (event, selected) => {
              const type = panesTitles[selected];
              console.log(11, type);
              item.elements.load(type);
              setSelected(type);
            };
            return React.createElement(_collapsible.CollapsibleContent, {
              className: cls
            }, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, tabs), React.createElement(_tabs.Panes, null, panes)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/context
      ******************************************************/

      ims.set('./views/generator/topics/topic/context', {
        hash: 3800438969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTopicContext = exports.TopicContext = void 0;
          var React = require("react");
          const TopicContext = React.createContext({});
          exports.TopicContext = TopicContext;
          const useTopicContext = () => React.useContext(TopicContext);
          exports.useTopicContext = useTopicContext;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/index
      ****************************************************/

      ims.set('./views/generator/topics/topic/index', {
        hash: 1657894630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var React = require("react");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _TopicContent = require("./content/TopicContent");
          var _collapsible = require("pragmate-ui/collapsible");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _LoadingBlock = require("../../shared/LoadingBlock");
          function TopicItem({
            item,
            index
          }) {
            const name = item.title;
            const {
              store,
              texts: {
                titles
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching || item.fetching);
            const [selected, setSelected] = React.useState('content');
            // always opened the fist topic.
            const [visible, setVisible] = React.useState(index === 0);
            const [topic, setTopic] = React.useState(item);
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
            const value = {
              selected,
              topic: name,
              store
            };
            const onToggle = () => {
              item.load({
                content: true
              });
            };
            const Control = fetching ? _LoadingBlock.LoadingBlock : _TopicContent.TopicContent;
            return React.createElement(_context2.TopicContext.Provider, {
              value: value
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              className: "lesson-generator"
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", {
              className: "topic-title"
            }, titles.topic, ": ", name)), React.createElement(Control, {
              item: item
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2034191679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _generator = require("./generator");
          function Page({
            store
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready || fetching) return React.createElement(_components.PreloadScreen, null);
            // lessons/:id/suggestions
            const providerValues = {
              texts,
              store
            };
            return React.createElement(_context.LessonContext.Provider, {
              value: providerValues
            }, React.createElement(_generator.Generator, null));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9jb3JlIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidmlldyIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImdsb2JhbFRoaXMiLCJtIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlJlYWN0IiwiTGVzc29uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIl9jb250ZXh0IiwiX2xlc3NvbnMiLCJfdG9waWNzIiwiX2NvbXBvbmVudHMiLCJHZW5lcmF0b3IiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwic3VidGl0bGUiLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiX2VtcHR5Q29udGVudCIsIl9jb250ZW50IiwiX2hvb2tzIiwiX3NwaW5uZXIiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUJpbmRlciIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50IiwiX3RhYnMiLCJfY29sbGFwc2libGUiLCJsZXNzb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFuZXNUaXRsZXMiLCJPYmplY3QiLCJrZXlzIiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsInN0ZXAiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiTG9hZGluZ0Jsb2NrIiwic2l6ZSIsIk1hcmtlZENvbnRlbnQiLCJjb250ZW50IiwibWFyayIsInVzZU1hcmtlZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3F1ZXN0aW9ucyIsIl9NYXJrZWRDb250ZW50IiwiUXVlc3Rpb25zQ29tcG9uZW50IiwiX3JlYWN0IiwiZW1wdHkiLCJkZWZhdWx0IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiX2FsZXJ0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJlcnJvciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiUXVlc3Rpb25Db21wb25lbnQiLCJ0ZXh0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIk9wdGlvbkNvbXBvbmVudCIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwiX3RvcGljIiwiRnJhZ21lbnQiLCJ0b3BpY3MiLCJUb3BpY0l0ZW0iLCJfTG9hZGluZ0Jsb2NrIiwiRWxlbWVudFRvcGljQ29udGVudCIsInVzZVRvcGljQ29udGV4dCIsImhhc0VsZW1lbnRzIiwiX0VsZW1lbnRUb3BpY0NvbnRlbnQiLCJUb3BpY0NvbnRlbnQiLCJ0aXRsZXMiLCJzZXRUb3BpYyIsIlRvcGljQ29udGV4dCIsIl9jb250ZXh0MiIsIl9Ub3BpY0NvbnRlbnQiLCJuYW1lIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJvblRvZ2dsZSIsIlByb3ZpZGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsIl9nZW5lcmF0b3IiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFNTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFFakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWEsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixLQUFBLEdBQUFqQixPQUFBO1VBSU0sTUFBT1MsWUFBYSxTQUFRTyxNQUFBLENBQUFFLGFBQXFCO1lBQ3RELENBQUFDLEtBQU07WUFJTkMs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