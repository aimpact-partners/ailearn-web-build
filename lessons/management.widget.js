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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2349576624,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ1MsUUFBUSxDQUFDSixLQUFLLENBQUNaLEtBQUssQ0FBQztZQUVyRCxxQkFBUyxFQUFDLENBQUNZLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIwRyxRQUFRLENBQUMxRyxLQUFLLENBQUNaLEtBQUssQ0FBQztjQUNyQmUsV0FBVyxDQUFDSCxLQUFLLENBQUNFLFFBQVEsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNxRyxVQUFVLElBQUksQ0FBQ25ILEtBQUssSUFBSWMsUUFBUSxFQUFFLE9BQU9QLG9CQUFDZ0gseUJBQWEsT0FBRztZQUNoRTtZQUNDLE1BQU1DLGNBQWMsR0FBRztjQUN0QjNHLEtBQUs7Y0FDTEQ7YUFDQTtZQUVELE9BQ0NMLG9CQUFDRCxzQkFBYSxDQUFDNEcsUUFBUTtjQUFDL0csS0FBSyxFQUFFcUg7WUFBYyxHQUM1Q2pILG9CQUFDSSxvQkFBUyxPQUFHLENBQ1c7VUFFM0IiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwidmlldyIsIm1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiaGFzQ29udGVudCIsImhhcyIsImdjbGFzc3Jvb21zIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJjb3Vyc2VzIiwiZ2NsYXNzcm9vbSIsImdsb2JhbFRoaXMiLCJtIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkdlbmVyYXRvciIsInN0b3JlIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjbHMiLCJoYW5kbGVDbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiUGFuZXMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiQWxlcnQiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIm1hcCIsIlRvcGljQ29tcG9uZW50IiwiZSIsImVycm9yIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJRdWVzdGlvbkNvbXBvbmVudCIsInRleHQiLCJvcHRpb25zIiwib3B0aW9uIiwiT3B0aW9uQ29tcG9uZW50IiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJ0b3BpY3MiLCJUb3BpY0l0ZW0iLCJFbGVtZW50VG9waWNDb250ZW50IiwiaGFzRWxlbWVudHMiLCJUb3BpY0NvbnRlbnQiLCJ0aXRsZXMiLCJzZXRUb3BpYyIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm9uVG9nZ2xlIiwiUHJvdmlkZXIiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIiwicHJvdmlkZXJWYWx1ZXMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19