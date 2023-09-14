System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp100ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp100ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp100LessonsAssign) {
      dependency_7 = _aimpactAilearnApp100LessonsAssign;
    }, function (_pragmateUi0036Components) {
      dependency_8 = _pragmateUi0036Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Spinner) {
      dependency_10 = _pragmateUi0036Spinner;
    }, function (_pragmateUi0036Toast) {
      dependency_11 = _pragmateUi0036Toast;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/lessons/assign', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/spinner', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/badge', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/alert', dependency_17], ['@aimpact/chat/shared/components', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3833413441,
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
              globalThis.store = this;
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
        hash: 1205375907,
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
              className: "page__header flex-container flex-space-between"
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
        hash: 3732401911,
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
            const onChange = async (event, selected) => {
              // console.log(0.8, event, selected);
              const type = panesTitles[selected];
              // console.log(0.9, type, item);
              await item.elements.load(type);
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
        hash: 1790323075,
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
              if (updates.has(area)) {
                // console.log(0.1, 'area', area, 'updated', item);
                const onClick = () => {
                  // console.log(0.7, area, item);
                  model.progress.clearTopicUpdated(item.id, area);
                };
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: area,
                  ...props,
                  onClick: onClick
                }, _react.default.createElement(_badge.Badge, {
                  visible: true
                }, area)));
              } else {
                if (!element.id) props.disabled = true;
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
        hash: 2713433076,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUUsT0FBT04sNkJBQUNpSSx5QkFBYSxPQUFHO1lBQy9EO1lBQ0EsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCN0gsS0FBSztjQUNMckQsS0FBSztjQUNMWixtQkFBbUIsRUFBRVksS0FBSyxDQUFDbEIsS0FBSyxFQUFFTTthQUNsQztZQUVELE9BQ0M0RCw2QkFBQ0Qsc0JBQWEsQ0FBQzZILFFBQVE7Y0FBQ2xLLEtBQUssRUFBRXdLO1lBQWMsR0FDNUNsSSw2QkFBQ0ksb0JBQVMsT0FBRyxDQUNXO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwibW9kZWwiLCJwcm9ncmVzcyIsImNsZWFyIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiZ2NsYXNzcm9vbXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsIlNldCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInBhcmVudCIsIl9wIiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiZWxlbWVudCIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJwcm9jZXNzIiwiZGF0YSIsImxlc3NvbkNoYW5nZXMiLCJsZWZ0IiwicmVkdWNlIiwiYWNjIiwiZWxlbWVudHMiLCJwdXNoIiwiZGVsZXRlIiwiYWRkIiwidG9waWNzIiwiZm9yRWFjaCIsInRvcGljQ2hhbmdlcyIsImxhc3RUb3BpY0RhdGEiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTGVzc29uQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2VuZXJhdG9yIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjbHMiLCJoYW5kbGVDbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50IiwidG90YWxMZWdlbmQiLCJsZXNzb25VcGRhdGVkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVsZW1lbnRzVXBkYXRlZCIsInNldEVsZW1lbnRzVXBkYXRlZCIsInRvdGFsIiwidXNlUmVmIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwiaW5mbyIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsIml0ZW0iLCJUYWIiLCJrZXkiLCJ0b3RhbEVsZW1lbnRzIiwiZWxlbWVudHNSZWFkeSIsImxvYWRpbmciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsInJlZiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJMZXNzb25UYWJzIiwiUGFuZXMiLCJhdHRycyIsImRpc2FibGVkIiwiQmFkZ2UiLCJ2aXNpYmxlIiwiVGFicyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiSlNPTiIsInBhcnNlIiwiQWxlcnQiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIm1hcCIsIlRvcGljQ29tcG9uZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiUXVlc3Rpb25Db21wb25lbnQiLCJ0ZXh0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIk9wdGlvbkNvbXBvbmVudCIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwiVG9waWNJdGVtIiwiRWxlbWVudFRvcGljQ29udGVudCIsImhhc0VsZW1lbnRzIiwiVG9waWNDb250ZW50Iiwic2V0VG9waWMiLCJUb3BpY1RhYnMiLCJ1cGRhdGVzIiwicHJvcHMiLCJUb3BpY0NvbnRleHQiLCJ1c2VUb3BpY0NvbnRleHQiLCJuYW1lIiwidGl0bGVzIiwidG9waWNVcGRhdGVkIiwicmVwbGFjZSIsIm9uVG9nZ2xlIiwidXBkYXRlZCIsInBlbmRpbmciLCJwZW5kaW5ncyIsIlByb3ZpZGVyIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Qcm9ncmVzc01hbmFnZXIudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=