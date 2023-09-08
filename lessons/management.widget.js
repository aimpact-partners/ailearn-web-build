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
        hash: 705904184,
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
            hide() {
              this.#store.model.progress.clear();
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
        hash: 3035091398,
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
              console.log(10, 'evento lesson');
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
        hash: 1098577042,
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
        hash: 1667186550,
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
                topicUpdated
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
              console.log('topic updated', progress.topicElementsPending.get(item.id)?.size);
              setElementsUpdated(progress.topicElementsPending.get(item.id)?.size ?? 0);
              total.current.classList.add('accent-text');
              const content = topicUpdated.replace('%1', name);
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
            console.log(88, 'topic item', item.id, pending, 'size:', pending.size, progress.topicElementsPending);
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
            }, totalLegend, ": ", elementsReady, "/", totalElements))), _react.default.createElement(_components.Spinner, {
              active: loading,
              type: "primary"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDSixLQUFLLENBQUNFLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUM2SSxVQUFVLEVBQUU5SSxLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDK0ksc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzdKLEtBQUssRUFBRThKLFFBQVEsQ0FBQyxHQUFHdkosY0FBSyxDQUFDUyxRQUFRLENBQUNKLEtBQUssQ0FBQ1osS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ1ksS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QmtKLFFBQVEsQ0FBQ2xKLEtBQUssQ0FBQ1osS0FBSyxDQUFDO2NBQ3JCZSxXQUFXLENBQUNILEtBQUssQ0FBQ0UsUUFBUSxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQzZJLFVBQVUsSUFBSSxDQUFDM0osS0FBSyxJQUFJYyxRQUFRLEVBQUUsT0FBT1AsNkJBQUN3Six5QkFBYSxPQUFHO1lBQy9EO1lBQ0EsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCbkosS0FBSztjQUNMRDthQUNBO1lBRUQsT0FDQ0wsNkJBQUNELHNCQUFhLENBQUNvSixRQUFRO2NBQUN2SixLQUFLLEVBQUU2SjtZQUFjLEdBQzVDekosNkJBQUNJLG9CQUFTLE9BQUcsQ0FDVztVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIm1vZGVsIiwicHJvZ3Jlc3MiLCJjbGVhciIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiaGFzQ29udGVudCIsImhhcyIsImdjbGFzc3Jvb21zIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJjb3Vyc2VzIiwiZ2NsYXNzcm9vbSIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJHZW5lcmF0b3IiLCJzdG9yZSIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY2xzIiwiaGFuZGxlQ2xvc2UiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiU2hhcmVMZXNzb24iLCJsZXNzb24iLCJvbkNsb3NlIiwiTGVzc29uQ29udGVudCIsImFyZWEiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpdGVtcyIsInNldFZhbHVlIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJsZXNzb25FbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInRvYXN0IiwiaW5mbyIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsImtleSIsInRvdGFsRWxlbWVudHMiLCJsZXNzb25FbGVtZW50cyIsImVsZW1lbnRzUmVhZHkiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJsb2FkaW5nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInN0ZXAiLCJyZWYiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiTGVzc29uVGFicyIsIlBhbmVzIiwiYXR0cnMiLCJjbGVhckxlc3NvblVwZGF0ZWQiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJBbGVydCIsImFzc2Vzc21lbnRSZXZpZXciLCJhc3Nlc3NtZW50IiwibWFwIiwiVG9waWNDb21wb25lbnQiLCJlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInRvcGljcyIsIlRvcGljSXRlbSIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwibmFtZXMiLCJpbnRyb2R1Y3Rpb24iLCJzeW50aGVzaXMiLCJwcmV2aW91cyIsInVwZGF0ZXMiLCJ0b3BpY3NVcGRhdGVkIiwiU2V0IiwicHJvcHMiLCJjbGVhclRvcGljVXBkYXRlZCIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsIm5hbWUiLCJ0aXRsZXMiLCJ0b3BpY1VwZGF0ZWQiLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsInJlcGxhY2UiLCJvblRvZ2dsZSIsInVwZGF0ZWQiLCJwZW5kaW5nIiwidG9waWNFbGVtZW50cyIsImJhZGdlQXR0cnMiLCJQcm92aWRlciIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL3RhYnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L01hcmtlZENvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3F1ZXN0aW9ucy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9Ub3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljVGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==