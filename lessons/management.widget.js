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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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

      /***************************************
      INTERNAL MODULE: ./views/ProgressManager
      ***************************************/

      ims.set('./views/ProgressManager', {
        hash: 1209903105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ProgressManager extends _model.ReactiveModel {
            #parent;
            #topicsElements = ['content', 'introduction', 'synthesis', 'assessment', 'previous'];
            #lessonElements = ['content', 'introduction', 'synthesis', 'assessment'];
            get lessonElements() {
              return this.#lessonElements;
            }
            get topicElements() {
              return this.#topicsElements;
            }
            #lessonPendings = new Set();
            get lessonElementsPending() {
              return [...this.#lessonPendings];
            }
            #topicsPendings = new Map();
            get topicElementsPending() {
              return this.#topicsPendings;
            }
            #lessonElementsUpdated = [];
            get lessonElementsUpdated() {
              return this.#lessonElementsUpdated;
            }
            #topicsUpdated = new Map();
            get topicsUpdated() {
              return this.#topicsUpdated;
            }
            #times = 0;
            constructor(parent) {
              super();
              this.#parent = parent;
              globalThis._p = this;
              globalThis.progress = this;
            }
            #currentTimeout;
            clearLessonUpdated = element => {
              if (!this.#lessonElementsUpdated.includes(element)) return;
              this.#lessonElementsUpdated.splice(this.#lessonElementsUpdated.indexOf(element), 1);
              this.triggerEvent('lesson.updated');
            };
            clearTopicUpdated = (topicId, element) => {
              if (!this.#topicsUpdated.has(topicId)) return;
              const topic = this.#topicsUpdated.get(topicId);
              if (!topic.includes(element)) return;
              topic.splice(topic.indexOf(element), 1);
              this.triggerEvent(`topic.${topicId}.updated`);
            };
            process(data) {
              globalThis.data = data;
              this.#times++;
              this.#topicsUpdated = new Map();
              let lessonChanges = false;
              let left = this.#lessonElements.reduce((acc, element) => {
                if (data.elements[element]?.id) {
                  if (this.#lessonPendings.has(element)) {
                    lessonChanges = true;
                    this.#lessonElementsUpdated.push(element);
                    this.#lessonPendings.delete(element);
                  }
                  return acc;
                }
                this.#lessonPendings.add(element);
                return acc + 1;
              }, 0);
              if (lessonChanges) this.triggerEvent('lesson.updated');
              data.topics.forEach(topic => {
                let topicChanges = false;
                this.#topicsElements.forEach(element => {
                  const lastTopicData = this.#topicsPendings.get(topic.id) ?? new Set();
                  if (lastTopicData.has(element) && topic.elements[element]?.id) {
                    if (!this.#topicsUpdated.has(topic.id)) this.#topicsUpdated.set(topic.id, new Set());
                    this.#topicsUpdated.get(topic.id).add(element);
                    topicChanges = true;
                  }
                  if (!topic.elements[element]?.id) {
                    if (!this.#topicsPendings.has(topic.id)) this.#topicsPendings.set(topic.id, new Set());
                    this.#topicsPendings.get(topic.id).add(element);
                    left++;
                  }
                });
                if (topicChanges) {
                  this.triggerEvent(`topic.${topic.id}.updated`);
                }
              });
              if (left > 0 && this.#times < 20) {
                this.#currentTimeout = globalThis.setTimeout(() => {
                  this.#parent.load({
                    progress: true
                  });
                }, 5000);
              }
            }
            clear() {
              this.#lessonPendings.clear();
              this.#topicsPendings.clear();
              this.#lessonElementsUpdated = [];
              this.#topicsUpdated = new Map();
              this.#times = 0;
              if (this.#currentTimeout) globalThis.clearTimeout(this.#currentTimeout);
            }
          }
          exports.ProgressManager = ProgressManager;
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
        hash: 3355579778,
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
        hash: 3270280520,
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
            const panesTitles = model.progress.topicElements;
            const tabs = [];
            let updates = model.progress.topicsUpdated.get(item.id) ?? new Set();
            panesTitles.forEach((area, index) => {
              const element = item.elements.items.get(area);
              const props = {};
              if (!element.id) props.disabled = true;
              if (updates.has(area)) {
                const onClick = () => model.progress.clearTopicUpdated(item.id, area);
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: area,
                  ...props,
                  onClick: onClick
                }, _react.default.createElement(_badge.Badge, {
                  visible: true
                }, area)));
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
        hash: 3388465488,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var _react = require("react");
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
              setElementsUpdated(progress.topicElementsPending.get(item.id)?.size ?? 0);
              total.current.classList.add('accent-text');
              const content = topicUpdated.replace('%1', name);
              _toast.toast.info(content);
              setTimeout(() => total.current.classList.remove('accent-text'), 1000);
            }, `topic.${item.id}.updated`);
            const onToggle = () => {
              item.load({
                content: true
              });
            };
            let updated = progress.topicsUpdated.get(item.id);
            let pending = progress.topicElementsPending.get(item.id) ?? new Set();
            const Control = fetching ? _LoadingBlock.LoadingBlock : _TopicContent.TopicContent;
            const totalElements = progress.topicElements.length;
            const elementsReady = totalElements - (pending?.size ?? 0);
            const loading = elementsReady < totalElements;
            const badgeAttrs = {};
            const value = {
              selected,
              topic: name,
              store,
              item,
              pendings: totalElements - elementsReady
            };
            return _react.default.createElement(_context2.TopicContext.Provider, {
              value: value
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              className: "lesson-generator"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("h3", {
              className: "topic-title",
              "data-id": item.id
            }, titles.topic, ": ", name, _react.default.createElement("small", {
              ref: total
            }, totalLegend, ": ", elementsReady, "/", totalElements)), _react.default.createElement(_components.Spinner, {
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
        hash: 382028306,
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
              store,
              curriculumObjective: store.model?.curriculumObjective
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FDdEI5SCxLQUFLO2NBQ0xELEtBQUs7Y0FDTGhFLG1CQUFtQixFQUFFZ0UsS0FBSyxDQUFDdEUsS0FBSyxFQUFFTTthQUNsQztZQUVELE9BQ0MyRCw2QkFBQ0Qsc0JBQWEsQ0FBQytILFFBQVE7Y0FBQ3JLLEtBQUssRUFBRTJLO1lBQWMsR0FDNUNwSSw2QkFBQ0ksb0JBQVMsT0FBRyxDQUNXO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwibW9kZWwiLCJwcm9ncmVzcyIsImNsZWFyIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiZ2NsYXNzcm9vbXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsIlNldCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInBhcmVudCIsImdsb2JhbFRoaXMiLCJfcCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImVsZW1lbnQiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwicHJvY2VzcyIsImRhdGEiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsImVsZW1lbnRzIiwicHVzaCIsImRlbGV0ZSIsImFkZCIsInRvcGljcyIsImZvckVhY2giLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkdlbmVyYXRvciIsInN0b3JlIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjbHMiLCJoYW5kbGVDbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50IiwidG90YWxMZWdlbmQiLCJsZXNzb25VcGRhdGVkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVsZW1lbnRzVXBkYXRlZCIsInNldEVsZW1lbnRzVXBkYXRlZCIsInRvdGFsIiwidXNlUmVmIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwiaW5mbyIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsIml0ZW0iLCJUYWIiLCJrZXkiLCJ0b3RhbEVsZW1lbnRzIiwiZWxlbWVudHNSZWFkeSIsImxvYWRpbmciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsInJlZiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJMZXNzb25UYWJzIiwiUGFuZXMiLCJhdHRycyIsImRpc2FibGVkIiwiQmFkZ2UiLCJ2aXNpYmxlIiwiVGFicyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiSlNPTiIsInBhcnNlIiwiQWxlcnQiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIm1hcCIsIlRvcGljQ29tcG9uZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiUXVlc3Rpb25Db21wb25lbnQiLCJ0ZXh0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIk9wdGlvbkNvbXBvbmVudCIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwiVG9waWNJdGVtIiwiRWxlbWVudFRvcGljQ29udGVudCIsImhhc0VsZW1lbnRzIiwiVG9waWNDb250ZW50Iiwic2V0VG9waWMiLCJUb3BpY1RhYnMiLCJ1cGRhdGVzIiwicHJvcHMiLCJUb3BpY0NvbnRleHQiLCJ1c2VUb3BpY0NvbnRleHQiLCJuYW1lIiwidGl0bGVzIiwidG9waWNVcGRhdGVkIiwicmVwbGFjZSIsIm9uVG9nZ2xlIiwidXBkYXRlZCIsInBlbmRpbmciLCJiYWRnZUF0dHJzIiwicGVuZGluZ3MiLCJQcm92aWRlciIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL3RhYnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L01hcmtlZENvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3F1ZXN0aW9ucy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9Ub3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljVGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19