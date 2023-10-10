System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.2/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@0.0.2/lessons/assign", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/spinner", "pragmate-ui@0.0.37/toast", "@aimpact/ailearn-app@0.0.2/components/tabs", "pragmate-ui@0.0.37/collapsible", "pragmate-ui@0.0.37/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp002ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp002ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp002LessonsAssign) {
      dependency_7 = _aimpactAilearnApp002LessonsAssign;
    }, function (_pragmateUi0037Components) {
      dependency_8 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Spinner) {
      dependency_10 = _pragmateUi0037Spinner;
    }, function (_pragmateUi0037Toast) {
      dependency_11 = _pragmateUi0037Toast;
    }, function (_aimpactAilearnApp002ComponentsTabs) {
      dependency_12 = _aimpactAilearnApp002ComponentsTabs;
    }, function (_pragmateUi0037Collapsible) {
      dependency_13 = _pragmateUi0037Collapsible;
    }, function (_pragmateUi0037Badge) {
      dependency_14 = _pragmateUi0037Badge;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0037Alert) {
      dependency_16 = _pragmateUi0037Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/lessons/assign', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/spinner', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/badge', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/management.widget",
        "is": "page",
        "route": "/lessons/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/lessons/management.widget');
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
        hash: 4054713150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIm1vZGVsIiwicHJvZ3Jlc3MiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJnY2xhc3Nyb29tcyIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsInBhcmVudCIsInRvcGljc0VsZW1lbnRzIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwibGVzc29uUGVuZGluZ3MiLCJTZXQiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY3NQZW5kaW5ncyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInRpbWVzIiwiX3AiLCJjdXJyZW50VGltZW91dCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImVsZW1lbnQiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwicHJvY2VzcyIsImRhdGEiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsImVsZW1lbnRzIiwicHVzaCIsImRlbGV0ZSIsImFkZCIsInRvcGljcyIsImZvckVhY2giLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9yZWFjdCIsIkxlc3NvbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJfbGVzc29ucyIsIl90b3BpY3MiLCJfYXNzaWduIiwiX2NvbXBvbmVudHMiLCJHZW5lcmF0b3IiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImNscyIsImhhbmRsZUNsb3NlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJfZW1wdHlDb250ZW50IiwiX2NvbnRlbnQiLCJfaG9va3MiLCJfc3Bpbm5lciIsIkxlc3NvbkNvbnRlbnQiLCJhcmVhIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlQmluZGVyIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJfdG9hc3QiLCJfdGFicyIsIl9jb2xsYXBzaWJsZSIsIl90YWJzMiIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsImluZm8iLCJwYW5lc1RpdGxlcyIsIk9iamVjdCIsImtleXMiLCJvbkNoYW5nZSIsImV2ZW50IiwiaW5kZXgiLCJ0YWJzIiwicGFuZXMiLCJpdGVtIiwiVGFiIiwia2V5IiwidG90YWxFbGVtZW50cyIsImVsZW1lbnRzUmVhZHkiLCJsb2FkaW5nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInN0ZXAiLCJyZWYiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiTGVzc29uVGFicyIsIlBhbmVzIiwiX2JhZGdlIiwiYXR0cnMiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwidXNlTWFya2VkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcXVlc3Rpb25zIiwiX01hcmtlZENvbnRlbnQiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsIl9hbGVydCIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsIl90b3BpYyIsIkZyYWdtZW50IiwiVG9waWNJdGVtIiwiX0xvYWRpbmdCbG9jayIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJ1c2VUb3BpY0NvbnRleHQiLCJoYXNFbGVtZW50cyIsIl9FbGVtZW50VG9waWNDb250ZW50IiwiX1RvcGljVGFicyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwiX2NvbnRleHQyIiwidXBkYXRlcyIsInByb3BzIiwiVG9waWNDb250ZXh0IiwiX1RvcGljQ29udGVudCIsIm5hbWUiLCJ0aXRsZXMiLCJ0b3BpY1VwZGF0ZWQiLCJyZXBsYWNlIiwib25Ub2dnbGUiLCJ1cGRhdGVkIiwicGVuZGluZyIsInBlbmRpbmdzIiwiUHJvdmlkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2dlbmVyYXRvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBRWpELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjtZQUNBLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gs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