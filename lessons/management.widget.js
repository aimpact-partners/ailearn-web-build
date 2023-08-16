System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@0.0.11/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_3 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactChat101SharedComponents) {
      dependency_7 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_9 = _pragmateUi0036Spinner;
    }, function (_aimpactAilearnApp0011ComponentsTabs) {
      dependency_10 = _aimpactAilearnApp0011ComponentsTabs;
    }, function (_pragmateUi0036Collapsible) {
      dependency_11 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Components) {
      dependency_12 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedHooks) {
      dependency_13 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_14 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_15 = _pragmateUi0036Alert;
    }, function (_beyondJsKernel019Styles) {
      dependency_16 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['react', dependency_6], ['@aimpact/chat/shared/components', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/spinner', dependency_9], ['@aimpact/ailearn-app/components/tabs', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/alert', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/management.widget",
        "is": "page",
        "route": "/lessons/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/lessons/management.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akcsb0JBQUM0QixPQUFPO2NBQUNpQixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNELENBQ0E7VUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBRU0sU0FBVWpGLElBQUksQ0FBQztZQUFFeUM7VUFBSyxDQUEyQjtZQUN0RCxNQUFNLENBQUNFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDSixLQUFLLENBQUNFLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUMrRixVQUFVLEVBQUVoRyxLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDaUcsc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQy9HLEtBQUssRUFBRWdILFFBQVEsQ0FBQyxHQUFHekcsS0FBSyxDQUFDUyxRQUFRLENBQUNKLEtBQUssQ0FBQ1osS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ1ksS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2Qm9HLFFBQVEsQ0FBQ3BHLEtBQUssQ0FBQ1osS0FBSyxDQUFDO2NBQ3JCZSxXQUFXLENBQUNILEtBQUssQ0FBQ0UsUUFBUSxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQytGLFVBQVUsSUFBSSxDQUFDN0csS0FBSyxJQUFJYyxRQUFRLEVBQUUsT0FBT1Asb0JBQUMwRyx5QkFBYSxPQUFHO1lBQ2hFO1lBQ0MsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCckcsS0FBSztjQUNMRDthQUNBO1lBRUQsT0FDQ0wsb0JBQUNELHNCQUFhLENBQUNzRyxRQUFRO2NBQUN6RyxLQUFLLEVBQUUrRztZQUFjLEdBQzVDM0csb0JBQUNJLG9CQUFTLE9BQUcsQ0FDVztVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJ2aWV3IiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJnbG9iYWxUaGlzIiwibSIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJHZW5lcmF0b3IiLCJzdG9yZSIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwiY2xzIiwiY2xhc3NOYW1lIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsInN1YnRpdGxlIiwiTGVzc29uQ29udGVudEdlbmVyYXRvciIsIlRvcGljc0dlbmVyYXRvciIsIkxlc3NvbkNvbnRlbnQiLCJhcmVhIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJsZXNzb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFuZXNUaXRsZXMiLCJPYmplY3QiLCJrZXlzIiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsInN0ZXAiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiTG9hZGluZ0Jsb2NrIiwic2l6ZSIsIk1hcmtlZENvbnRlbnQiLCJjb250ZW50IiwibWFyayIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiUXVlc3Rpb25zQ29tcG9uZW50IiwiZW1wdHkiLCJnZW5lcmF0ZSIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsImdlbmVyYXRpbmciLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiQWxlcnQiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIm1hcCIsIlRvcGljQ29tcG9uZW50IiwiZSIsImVycm9yIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJRdWVzdGlvbkNvbXBvbmVudCIsInRleHQiLCJvcHRpb25zIiwib3B0aW9uIiwiT3B0aW9uQ29tcG9uZW50IiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJ0b3BpY3MiLCJUb3BpY0l0ZW0iLCJFbGVtZW50VG9waWNDb250ZW50IiwiaGFzRWxlbWVudHMiLCJUb3BpY0NvbnRlbnQiLCJ0aXRsZXMiLCJzZXRUb3BpYyIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm9uVG9nZ2xlIiwiUHJvdmlkZXIiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwicHJvdmlkZXJWYWx1ZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19