System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Toast) {
      dependency_12 = _pragmateUi0036Toast;
    }, function (_aimpactAilearnApp100ComponentsTabs) {
      dependency_13 = _aimpactAilearnApp100ComponentsTabs;
    }, function (_pragmateUi0036Collapsible) {
      dependency_14 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Badge) {
      dependency_15 = _pragmateUi0036Badge;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Form) {
      dependency_17 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Alert) {
      dependency_18 = _pragmateUi0036Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_19 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_20 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/model/gclassroom', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/lessons/assign', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/spinner', dependency_11], ['pragmate-ui/toast', dependency_12], ['@aimpact/ailearn-app/components/tabs', dependency_13], ['pragmate-ui/collapsible', dependency_14], ['pragmate-ui/badge', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/alert', dependency_18], ['@aimpact/chat/shared/components', dependency_19], ['@beyond-js/kernel/styles', dependency_20]]);
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
        hash: 206420053,
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
              await this.#model.load({
                progress: true
              });
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
        hash: 374119974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContentGenerator = LessonContentGenerator;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          var _content = require("./content");
          var _tabs2 = require("./tabs");
          function LessonContentGenerator() {
            const {
              store: {
                model: {
                  progress
                }
              },
              texts: {
                lesson: texts,
                totalLegend,
                lessonUpdated
              }
            } = (0, _context.useLessonContext)();
            const [selected, setSelected] = _react.default.useState('content');
            const [elementsUpdated, setElementsUpdated] = _react.default.useState(progress.lessonElementsUpdated.length);
            const total = _react.default.useRef(null);
            (0, _hooks.useBinder)([progress], () => {
              setElementsUpdated(progress.lessonElementsUpdated.length);
              total.current.classList.add('accent-text');
              setTimeout(() => total.current.classList.remove('accent-text'), 2000);
              _toast.toast.info(`${lessonUpdated}`);
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
            const totalElements = progress.lessonElements.length;
            const elementsReady = totalElements - progress.lessonElementsPending.length;
            const loading = elementsReady < totalElements;
            return _react.default.createElement("article", {
              className: "lesson-generator lesson-generator--introduction"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h3", {
              className: "topic-title"
            }, _react.default.createElement("span", null, texts.step), _react.default.createElement("small", {
              ref: total,
              className: "elements__quantity"
            }, totalLegend, ": ", elementsReady, "/", totalElements)), _react.default.createElement(_components.Spinner, {
              active: loading,
              type: "primary"
            })), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, _react.default.createElement(_tabs2.LessonTabs, null), _react.default.createElement(_tabs.Panes, null, panes)))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/lessons/tabs
      **********************************************/

      ims.set('./views/generator/lessons/tabs', {
        hash: 3056598631,
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
              const attrs = {};
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
        hash: 2154601289,
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
            item
          }) {
            const {
              store,
              texts: {
                topics: texts
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(store.fetching || item.fetching);
            const [selected, setSelected] = _react.default.useState('content');
            const [topic, setTopic] = _react.default.useState(item);
            const {
              elements
            } = texts;
            const panesTitles = Object.keys(elements);
            const panes = [];
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const onChange = (event, selected) => {
              const type = panesTitles[selected];
              item.elements.load(type);
              setSelected(type);
            };
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
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
        hash: 3996301785,
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
            const tabs = [];
            let updates = model.progress.topicsUpdated.get(item.id) ?? new Set();
            panesTitles.forEach((area, index) => {
              const element = item.elements.items.get(area);
              const props = {};
              if (!element.id) props.disabled = true;
              if (updates.has(area)) {
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
        hash: 4178563797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var _react = require("react");
          var _badge = require("pragmate-ui/badge");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../../context");
          var _context2 = require("./context");
          var _TopicContent = require("./content/TopicContent");
          var _collapsible = require("pragmate-ui/collapsible");
          var _LoadingBlock = require("../../shared/LoadingBlock");
          function TopicItem({
            item,
            index
          }) {
            const name = item.title;
            const {
              store,
              store: {
                model: {
                  progress
                }
              },
              texts: {
                titles,
                totalLegend,
                lessonUpdated
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(store.fetching || item.fetching);
            const [selected, setSelected] = _react.default.useState('content');
            const [elementsUpdated, setElementsUpdated] = _react.default.useState(progress.topicElementsPending.get(item.id)?.size ?? 0);
            const [topic, setTopic] = _react.default.useState(item);
            const total = _react.default.useRef(null);
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
            (0, _hooks.useBinder)([progress], () => {
              setElementsUpdated(progress.topicElementsPending.get(item.id)?.size ?? 0);
              total.current.classList.add('accent-text');
              const content = lessonUpdated.replace('%1', name);
              _toast.toast.info(content);
              setTimeout(() => total.current.classList.remove('accent-text'), 1000);
            }, `topic.${item.id}.updated`);
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
            let updated = progress.topicsUpdated.get(item.id);
            let pending = progress.topicElementsPending.get(item.id);
            const Control = fetching ? _LoadingBlock.LoadingBlock : _TopicContent.TopicContent;
            const totalElements = progress.topicElements.length;
            const elementsReady = totalElements - (pending?.size ?? 0);
            const loading = elementsReady < totalElements;
            const badgeAttrs = {};
            if (updated) {
              badgeAttrs.value = 'updated';
            }
            return _react.default.createElement(_context2.TopicContext.Provider, {
              value: value
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              className: "lesson-generator"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement(_badge.Badge, {
              ...badgeAttrs
            }, _react.default.createElement("h3", {
              className: "topic-title",
              "data-id": item.id
            }, titles.topic, ": ", name, _react.default.createElement("small", {
              ref: total
            }, totalLegend, ": ", elementsReady, "/", totalElements)), _react.default.createElement(_components.Spinner, {
              active: loading,
              type: "primary"
            }))), _react.default.createElement(Control, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsT0FBT1AsNkJBQUNzSix5QkFBYSxPQUFHO1lBQy9EO1lBQ0EsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCakosS0FBSztjQUNMRDthQUNBO1lBRUQsT0FDQ0wsNkJBQUNELHNCQUFhLENBQUNrSixRQUFRO2NBQUNySixLQUFLLEVBQUUySjtZQUFjLEdBQzVDdkosNkJBQUNJLG9CQUFTLE9BQUcsQ0FDVztVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJnY2xhc3Nyb29tcyIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImlkIiwidW5kZWZpbmVkIiwiTGVzc29uIiwiY291cnNlcyIsImdjbGFzc3Jvb20iLCJpc1JlYWR5IiwicmVhZHkiLCJwcm9ncmVzcyIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJHZW5lcmF0b3IiLCJzdG9yZSIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY2xzIiwiaGFuZGxlQ2xvc2UiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiU2hhcmVMZXNzb24iLCJsZXNzb24iLCJvbkNsb3NlIiwiTGVzc29uQ29udGVudCIsImFyZWEiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpdGVtcyIsInNldFZhbHVlIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwidG9hc3QiLCJpbmZvIiwicGFuZXNUaXRsZXMiLCJPYmplY3QiLCJrZXlzIiwib25DaGFuZ2UiLCJldmVudCIsImluZGV4IiwidGFicyIsInBhbmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiVGFiIiwia2V5IiwidG90YWxFbGVtZW50cyIsImxlc3NvbkVsZW1lbnRzIiwiZWxlbWVudHNSZWFkeSIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsImxvYWRpbmciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsInJlZiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJMZXNzb25UYWJzIiwiUGFuZXMiLCJhdHRycyIsImNsZWFyTGVzc29uVXBkYXRlZCIsImRpc2FibGVkIiwiQmFkZ2UiLCJ2aXNpYmxlIiwiVGFicyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInRvcGljcyIsIlRvcGljSXRlbSIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwibmFtZXMiLCJpbnRyb2R1Y3Rpb24iLCJzeW50aGVzaXMiLCJwcmV2aW91cyIsInVwZGF0ZXMiLCJ0b3BpY3NVcGRhdGVkIiwiU2V0IiwicHJvcHMiLCJjbGVhclRvcGljVXBkYXRlZCIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJ0aXRsZXMiLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsInJlcGxhY2UiLCJvblRvZ2dsZSIsInVwZGF0ZWQiLCJwZW5kaW5nIiwidG9waWNFbGVtZW50cyIsImJhZGdlQXR0cnMiLCJQcm92aWRlciIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL3RhYnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L01hcmtlZENvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3F1ZXN0aW9ucy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9Ub3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljVGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==