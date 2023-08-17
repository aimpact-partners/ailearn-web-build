System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_6 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp100LessonsAssign) {
      dependency_8 = _aimpactAilearnApp100LessonsAssign;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_11 = _pragmateUi0036Spinner;
    }, function (_aimpactAilearnApp100ComponentsTabs) {
      dependency_12 = _aimpactAilearnApp100ComponentsTabs;
    }, function (_pragmateUi0036Collapsible) {
      dependency_13 = _pragmateUi0036Collapsible;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_15 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_16 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/lessons/assign', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/spinner', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
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
        hash: 3132355795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _gclassroom = require("@aimpact/ailearn-app/model/gclassroom");
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
            #gclassrooms = [];
            get gclassrooms() {
              return this.#gclassrooms;
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
              const courses = await _gclassroom.gclassroom.courses();
              this.#gclassrooms = courses;
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
        hash: 221515281,
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
          var _assign = require("@aimpact/ailearn-app/lessons/assign");
          var _components = require("pragmate-ui/components");
          function Generator() {
            const {
              store,
              store: {
                model
              },
              texts
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const [showModal, setShowModal] = React.useState(false);
            const cls = `lesson-view${fetching ? ' is-fetching' : ''}`;
            const handleClose = () => setShowModal(false);
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "page__header flex-container space-between"
            }, React.createElement("section", null, React.createElement("h1", null, model.curriculumObjective), React.createElement("small", null, texts.title)), React.createElement("div", {
              className: "header__actions"
            }, React.createElement(_components.Button, {
              onClick: () => setShowModal(true)
            }, "Asignar"))), React.createElement(_lessons.LessonContentGenerator, null), React.createElement(_topics.TopicsGenerator, null), showModal && React.createElement(_assign.ShareLesson, {
              gclassrooms: store.gclassrooms,
              texts: texts.gclassrooms,
              lesson: model,
              onClose: handleClose
            }));
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
        hash: 290796140,
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
        hash: 3693404420,
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
              console.log('data', data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3JILEtBQUssRUFBRXNILFFBQVEsQ0FBQyxHQUFHL0csS0FBSyxDQUFDUyxRQUFRLENBQUNKLEtBQUssQ0FBQ1osS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ1ksS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjBHLFFBQVEsQ0FBQzFHLEtBQUssQ0FBQ1osS0FBSyxDQUFDO2NBQ3JCZSxXQUFXLENBQUNILEtBQUssQ0FBQ0UsUUFBUSxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3FHLFVBQVUsSUFBSSxDQUFDbkgsS0FBSyxJQUFJYyxRQUFRLEVBQUUsT0FBT1Asb0JBQUNnSCx5QkFBYSxPQUFHO1lBQ2hFO1lBQ0MsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCM0csS0FBSztjQUNMRDthQUNBO1lBRUQsT0FDQ0wsb0JBQUNELHNCQUFhLENBQUM0RyxRQUFRO2NBQUMvRyxLQUFLLEVBQUVxSDtZQUFjLEdBQzVDakgsb0JBQUNJLG9CQUFTLE9BQUcsQ0FDVztVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJ2aWV3IiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiZ2NsYXNzcm9vbXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiZ2xvYmFsVGhpcyIsIm0iLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwiTGVzc29uQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2VuZXJhdG9yIiwic3RvcmUiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImNscyIsImhhbmRsZUNsb3NlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJCdXR0b24iLCJvbkNsaWNrIiwiTGVzc29uQ29udGVudEdlbmVyYXRvciIsIlRvcGljc0dlbmVyYXRvciIsIlNoYXJlTGVzc29uIiwibGVzc29uIiwib25DbG9zZSIsIkxlc3NvbkNvbnRlbnQiLCJhcmVhIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFuZXNUaXRsZXMiLCJPYmplY3QiLCJrZXlzIiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJBbGVydCIsImFzc2Vzc21lbnRSZXZpZXciLCJhc3Nlc3NtZW50IiwibWFwIiwiVG9waWNDb21wb25lbnQiLCJlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInRvcGljcyIsIlRvcGljSXRlbSIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGVudCIsInRpdGxlcyIsInNldFRvcGljIiwiVG9waWNDb250ZXh0IiwidXNlVG9waWNDb250ZXh0IiwibmFtZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib25Ub2dnbGUiLCJQcm92aWRlciIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvTG9hZGluZ0Jsb2NrLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2VtcHR5LWNvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvRWxlbWVudFRvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=