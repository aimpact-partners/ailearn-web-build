System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Badge) {
      dependency_14 = _pragmateUi0036Badge;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_16 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_17 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_18 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/lessons/assign', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/spinner', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/badge', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
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
        hash: 898370465,
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
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Lesson({
                id
              });
              const courses = await _gclassroom.gclassroom.courses();
              this.#gclassrooms = courses;
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
        hash: 2567540538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLessonContext = exports.LessonContext = void 0;
          var _react = require("react");
          const LessonContext = _react.default.createContext({});
          exports.LessonContext = LessonContext;
          const useLessonContext = () => _react.default.useContext(LessonContext);
          exports.useLessonContext = useLessonContext;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/generator/index
      ***************************************/

      ims.set('./views/generator/index', {
        hash: 3079089926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Generator = Generator;
          var _react = require("react");
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
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [showModal, setShowModal] = _react.default.useState(false);
            const cls = `lesson-view${fetching ? ' is-fetching' : ''}`;
            const handleClose = () => setShowModal(false);
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("header", {
              className: "page__header flex-container space-between"
            }, _react.default.createElement("section", null, _react.default.createElement("h1", null, model.curriculumObjective), _react.default.createElement("small", null, texts.title)), _react.default.createElement("div", {
              className: "header__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: () => setShowModal(true)
            }, "Asignar"))), _react.default.createElement(_lessons.LessonContentGenerator, null), _react.default.createElement(_topics.TopicsGenerator, null), showModal && _react.default.createElement(_assign.ShareLesson, {
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
        hash: 247102893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContent = LessonContent;
          var _react = require("react");
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
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [value, setValue] = _react.default.useState(element?.value);
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
            _react.default.useEffect(() => {
              if (element.id && !element.value) element.load(element.id);
            }, [element.id]);
            const cls = `lesson__content visible ${fetching ? ' is-fetching' : ''}`;
            if (!value && element.id) {
              return _react.default.createElement("article", {
                className: `loading__block ${cls}`
              }, _react.default.createElement(_spinner.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const Control = element?.value ? _content.AreaContent : _emptyContent.EmptyContent;
            return _react.default.createElement("article", {
              className: cls
            }, _react.default.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/generator/lessons/index
      ***********************************************/

      ims.set('./views/generator/lessons/index', {
        hash: 1350978779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContentGenerator = LessonContentGenerator;
          var _react = require("react");
          var _context = require("../../context");
          var _content = require("./content");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _collapsible = require("pragmate-ui/collapsible");
          var _tabs2 = require("./tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function LessonContentGenerator() {
            const {
              store,
              texts: {
                lesson: texts
              }
            } = (0, _context.useLessonContext)();
            const [selected, setSelected] = _react.default.useState('content');
            const [elementsUpdated, setElementsUpdated] = _react.default.useState([]);
            (0, _hooks.useBinder)([store.model.progress], () => {
              setElementsUpdated(store.model.progress.lessonElementsUpdated);
            }, 'lesson.updated');
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
              tabs.push(_react.default.createElement(_tabs.Tab, {
                key: item
              }, item));
              panes.push(_react.default.createElement(_content.LessonContent, {
                key: item,
                area: item
              }));
            });
            return _react.default.createElement("article", {
              className: "lesson-generator lesson-generator--introduction"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h3", {
              className: "topic-title"
            }, texts.step)), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, _react.default.createElement(_tabs2.LessonTabs, null), _react.default.createElement(_tabs.Panes, null, panes)))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/lessons/tabs
      **********************************************/

      ims.set('./views/generator/lessons/tabs', {
        hash: 15599994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonTabs = LessonTabs;
          var _react = require("react");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _badge = require("pragmate-ui/badge");
          var _context = require("../../context");
          function LessonTabs() {
            const {
              store: {
                model
              },
              texts: {
                lesson: texts
              }
            } = (0, _context.useLessonContext)();
            const {
              elements
            } = texts;
            const panesTitles = Object.keys(elements);
            const tabs = [];
            panesTitles.forEach((item, index) => {
              const element = model.elements.items.get(item);
              if (model.progress.lessonElementsUpdated.includes(item)) {
                const onClick = () => model.progress.clearLessonUpdated(item);
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: item,
                  disabled: !element.id,
                  onClick: onClick
                }, _react.default.createElement(_badge.Badge, {
                  visible: true
                }, elements[item])));
              } else {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: item,
                  disabled: !element.id
                }, elements[item]));
              }
            });
            return _react.default.createElement(_tabs.Tabs, null, tabs);
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/generator/shared/LoadingBlock
      *****************************************************/

      ims.set('./views/generator/shared/LoadingBlock', {
        hash: 1310201294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingBlock = LoadingBlock;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function LoadingBlock() {
            const cls = `loading__block`;
            return _react.default.createElement("article", {
              className: cls
            }, _react.default.createElement(_components.Spinner, {
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
        hash: 2063685253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkedContent = MarkedContent;
          var _react = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          function MarkedContent({
            content
          }) {
            const mark = (0, _hooks.useMarked)();
            return _react.default.createElement("div", {
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
        hash: 3622232954,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaContent = AreaContent;
          var _react = require("react");
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
            return _react.default.createElement("div", {
              className: "content-wrapper"
            }, _react.default.createElement(Control, {
              content: element.value
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/empty-content
      ******************************************************/

      ims.set('./views/generator/shared/empty-content', {
        hash: 3855029277,
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
            }, _react.default.createElement("h4", null, texts.title, " ", _react.default.createElement("br", null), message));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/generator/shared/questions
      **************************************************/

      ims.set('./views/generator/shared/questions', {
        hash: 2609308056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionComponent = QuestionComponent;
          exports.QuestionsComponent = QuestionsComponent;
          exports.TopicComponent = TopicComponent;
          var _react = require("react");
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
              return _react.default.createElement("div", {
                className: "assessment__container"
              }, _react.default.createElement(_alert.Alert, {
                type: "success",
                className: "mb-30"
              }, _react.default.createElement("h5", null, texts.assessmentReview)), data.assessment.map((topic, index) => _react.default.createElement(TopicComponent, {
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
            return _react.default.createElement("div", {
              className: "topic__container"
            }, _react.default.createElement("h4", null, topic.title), topic.questions.map((question, index) => _react.default.createElement(QuestionComponent, {
              key: index,
              question: question
            })));
          }
          function QuestionComponent({
            question
          }) {
            return _react.default.createElement("div", {
              className: "question__container"
            }, _react.default.createElement("h3", null, question.text), _react.default.createElement("ul", null, question.options.map((option, index) => _react.default.createElement(OptionComponent, {
              key: index,
              option: option,
              isCorrect: index === question.correct_answer
            }))));
          }
          function OptionComponent({
            option,
            isCorrect
          }) {
            return _react.default.createElement("li", null, isCorrect ? _react.default.createElement("span", {
              className: "correct"
            }, option) : option);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/topics/index
      **********************************************/

      ims.set('./views/generator/topics/index', {
        hash: 1410230415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicsGenerator = TopicsGenerator;
          var _react = require("react");
          var _context = require("../../context");
          var _topic = require("./topic");
          function TopicsGenerator() {
            const {
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            return _react.default.createElement(_react.default.Fragment, null, model.topics.items?.map((item, index) => _react.default.createElement(_topic.TopicItem, {
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
        hash: 361382904,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ElementTopicContent = ElementTopicContent;
          var _react = require("react");
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
            const [value, setValue] = _react.default.useState(element?.value);
            const [fetching, setFetching] = _react.default.useState(element?.fetching);
            (0, _hooks.useBinder)([element], () => {
              setValue(element.value);
              setFetching(element.fetching);
            });
            const cls = `lesson__content ${fetching ? ' is-fetching' : ''}`;
            const hasElements = !element || !!element?.value;
            if (!hasElements && fetching) return _react.default.createElement(_LoadingBlock.LoadingBlock, null);
            const specs = {
              area,
              model: topic,
              element
            };
            const Control = hasElements ? _content.AreaContent : _emptyContent.EmptyContent;
            return _react.default.createElement("article", {
              className: cls
            }, _react.default.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content/TopicContent
      *******************************************************************/

      ims.set('./views/generator/topics/topic/content/TopicContent', {
        hash: 2987566547,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicContent = TopicContent;
          var _react = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../../context");
          var _ElementTopicContent = require("./ElementTopicContent");
          var _TopicTabs = require("./TopicTabs");
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
            const [fetching, setFetching] = _react.default.useState(store.fetching || item.fetching);
            const [selected, setSelected] = _react.default.useState('content');
            const [topic, setTopic] = _react.default.useState(item);
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
              panes.push(_react.default.createElement(_ElementTopicContent.ElementTopicContent, {
                ...specs,
                key: index
              }));
            });
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const onChange = (event, selected) => {
              const type = panesTitles[selected];
              item.elements.load(type);
              setSelected(type);
            };
            return _react.default.createElement(_collapsible.CollapsibleContent, {
              className: cls
            }, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, _react.default.createElement(_TopicTabs.TopicTabs, null), _react.default.createElement(_tabs.Panes, null, panes)));
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content/TopicTabs
      ****************************************************************/

      ims.set('./views/generator/topics/topic/content/TopicTabs', {
        hash: 3394658439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicTabs = TopicTabs;
          var _react = require("react");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _badge = require("pragmate-ui/badge");
          var _context = require("../../../../context");
          var _context2 = require("../context");
          function TopicTabs() {
            const {
              store: {
                model
              },
              texts: {
                topics: texts
              }
            } = (0, _context.useLessonContext)();
            const {
              item
            } = (0, _context2.useTopicContext)();
            const {
              elements
            } = texts;
            const names = {
              content: 'Contenido',
              introduction: 'Introducción',
              synthesis: 'Síntesis',
              assessment: 'Evaluación',
              previous: 'Evaluación Previa'
            };
            const panesTitles = Object.keys(names);
            console.log(0.1, panesTitles);
            const tabs = [];
            let updates = model.progress.topicsUpdated.get(item.id) ?? [];
            panesTitles.forEach((area, index) => {
              const element = item.elements.items.get(area);
              const props = {};
              if (!element.id) props.disabled = true;
              if (updates.includes(area)) {
                const onClick = () => model.progress.clearTopicUpdated(item.id, area);
                _react.default.createElement(_tabs.Tab, {
                  key: area,
                  ...props,
                  onClick: onClick
                }, _react.default.createElement(_badge.Badge, {
                  visible: true
                }, area));
              } else {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: `tab.${area}`,
                  ...props
                }, elements[area]));
              }
            });
            return _react.default.createElement(_tabs.Tabs, null, tabs);
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/context
      ******************************************************/

      ims.set('./views/generator/topics/topic/context', {
        hash: 3275037907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTopicContext = exports.TopicContext = void 0;
          var _react = require("react");
          const TopicContext = _react.default.createContext({});
          exports.TopicContext = TopicContext;
          const useTopicContext = () => _react.default.useContext(TopicContext);
          exports.useTopicContext = useTopicContext;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/index
      ****************************************************/

      ims.set('./views/generator/topics/topic/index', {
        hash: 2460605635,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var _react = require("react");
          var _badge = require("pragmate-ui/badge");
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
              store: {
                model
              },
              texts: {
                titles
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(store.fetching || item.fetching);
            const [selected, setSelected] = _react.default.useState('content');
            // always opened the fist topic.
            const [visible, setVisible] = _react.default.useState(index === 0);
            const [topic, setTopic] = _react.default.useState(item);
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
            const value = {
              selected,
              topic: name,
              store,
              item
            };
            const onToggle = () => {
              item.load({
                content: true
              });
            };
            let pending = model.progress.topicsUpdated.get(item.id);
            const badgeAttrs = {};
            if (pending) {
              badgeAttrs.value = 'updated';
            }
            const Control = fetching ? _LoadingBlock.LoadingBlock : _TopicContent.TopicContent;
            return _react.default.createElement(_context2.TopicContext.Provider, {
              value: value
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              className: "lesson-generator"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h3", {
              className: "topic-title"
            }, titles.topic, ": ", name), _react.default.createElement(_badge.Badge, {
              ...badgeAttrs
            })), _react.default.createElement(Control, {
              item: item
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 706982672,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _generator = require("./generator");
          function Page({
            store
          }) {
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = _react.default.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready || fetching) return _react.default.createElement(_components.PreloadScreen, null);
            // lessons/:id/suggestions
            const providerValues = {
              texts,
              store
            };
            return _react.default.createElement(_context.LessonContext.Provider, {
              value: providerValues
            }, _react.default.createElement(_generator.Generator, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUM3SCxLQUFLLENBQUNaLEtBQUssQ0FBQztjQUNyQmUsV0FBVyxDQUFDSCxLQUFLLENBQUNFLFFBQVEsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUN3SCxVQUFVLElBQUksQ0FBQ3RJLEtBQUssSUFBSWMsUUFBUSxFQUFFLE9BQU9QLDZCQUFDbUkseUJBQWEsT0FBRztZQUMvRDtZQUNBLE1BQU1DLGNBQWMsR0FBRztjQUN0QjlILEtBQUs7Y0FDTEQ7YUFDQTtZQUVELE9BQ0NMLDZCQUFDRCxzQkFBYSxDQUFDK0gsUUFBUTtjQUFDbEksS0FBSyxFQUFFd0k7WUFBYyxHQUM1Q3BJLDZCQUFDSSxvQkFBUyxPQUFHLENBQ1c7VUFFM0IiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsInNob3ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiZ2NsYXNzcm9vbXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkdlbmVyYXRvciIsInN0b3JlIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjbHMiLCJoYW5kbGVDbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsImVsZW1lbnQiLCJlbGVtZW50cyIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVsZW1lbnRzVXBkYXRlZCIsInNldEVsZW1lbnRzVXBkYXRlZCIsInByb2dyZXNzIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwicGFuZXNUaXRsZXMiLCJPYmplY3QiLCJrZXlzIiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwidGFicyIsInBhbmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiVGFiIiwia2V5IiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJzdGVwIiwiQ29sbGFwc2libGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsIkxlc3NvblRhYnMiLCJQYW5lcyIsImNsZWFyTGVzc29uVXBkYXRlZCIsImRpc2FibGVkIiwiQmFkZ2UiLCJ2aXNpYmxlIiwiVGFicyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInRvcGljcyIsIlRvcGljSXRlbSIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGVudCIsInRpdGxlcyIsInNldFRvcGljIiwiVG9waWNUYWJzIiwibmFtZXMiLCJpbnRyb2R1Y3Rpb24iLCJzeW50aGVzaXMiLCJwcmV2aW91cyIsImxvZyIsInVwZGF0ZXMiLCJ0b3BpY3NVcGRhdGVkIiwicHJvcHMiLCJjbGVhclRvcGljVXBkYXRlZCIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJzZXRWaXNpYmxlIiwib25Ub2dnbGUiLCJwZW5kaW5nIiwiYmFkZ2VBdHRycyIsIlByb3ZpZGVyIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19