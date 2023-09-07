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
        hash: 3418615389,
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
                }, item)));
              } else {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: item,
                  disabled: !element.id
                }, item));
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
        hash: 2659024555,
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
            const panesTitles = Object.keys(elements);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUNDTCw2QkFBQ0Qsc0JBQWEsQ0FBQzBILFFBQVE7Y0FBQzdILEtBQUssRUFBRW1JO1lBQWMsR0FDNUMvSCw2QkFBQ0ksb0JBQVMsT0FBRyxDQUNXO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiaGFzQ29udGVudCIsImhhcyIsImdjbGFzc3Jvb21zIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJjb3Vyc2VzIiwiZ2NsYXNzcm9vbSIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJHZW5lcmF0b3IiLCJzdG9yZSIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY2xzIiwiaGFuZGxlQ2xvc2UiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiU2hhcmVMZXNzb24iLCJsZXNzb24iLCJvbkNsb3NlIiwiTGVzc29uQ29udGVudCIsImFyZWEiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpdGVtcyIsInNldFZhbHVlIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJwcm9ncmVzcyIsImxlc3NvbkVsZW1lbnRzVXBkYXRlZCIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJMZXNzb25UYWJzIiwiUGFuZXMiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJBbGVydCIsImFzc2Vzc21lbnRSZXZpZXciLCJhc3Nlc3NtZW50IiwibWFwIiwiVG9waWNDb21wb25lbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJRdWVzdGlvbkNvbXBvbmVudCIsInRleHQiLCJvcHRpb25zIiwib3B0aW9uIiwiT3B0aW9uQ29tcG9uZW50IiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJ0b3BpY3MiLCJUb3BpY0l0ZW0iLCJFbGVtZW50VG9waWNDb250ZW50IiwiaGFzRWxlbWVudHMiLCJUb3BpY0NvbnRlbnQiLCJ0aXRsZXMiLCJzZXRUb3BpYyIsIlRvcGljVGFicyIsInVwZGF0ZXMiLCJ0b3BpY3NVcGRhdGVkIiwicHJvcHMiLCJjbGVhclRvcGljVXBkYXRlZCIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJzZXRWaXNpYmxlIiwib25Ub2dnbGUiLCJwZW5kaW5nIiwiYmFkZ2VBdHRycyIsIlByb3ZpZGVyIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19