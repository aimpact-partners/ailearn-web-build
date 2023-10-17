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
        const dependencies = new Map([["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
        hash: 2919802601,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9OLDZCQUFDaUkseUJBQWEsT0FBRztZQUMvRDtZQUNBLE1BQU1DLGNBQWMsR0FBRztjQUN0QjdILEtBQUs7Y0FDTHJELEtBQUs7Y0FDTFosbUJBQW1CLEVBQUVZLEtBQUssQ0FBQ2xCLEtBQUssRUFBRU07YUFDbEM7WUFFRCxPQUNDNEQsNkJBQUNELHNCQUFhLENBQUM2SCxRQUFRO2NBQUNsSyxLQUFLLEVBQUV3SztZQUFjLEdBQzVDbEksNkJBQUNJLG9CQUFTLE9BQUcsQ0FDVztVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIm1vZGVsIiwicHJvZ3Jlc3MiLCJjbGVhciIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiaGFzQ29udGVudCIsImhhcyIsImdjbGFzc3Jvb21zIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsInN0b3JlIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJjb3Vyc2VzIiwiZ2NsYXNzcm9vbSIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJQcm9ncmVzc01hbmFnZXIiLCJsZXNzb25FbGVtZW50cyIsInRvcGljRWxlbWVudHMiLCJTZXQiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJNYXAiLCJ0b3BpY0VsZW1lbnRzUGVuZGluZyIsImxlc3NvbkVsZW1lbnRzVXBkYXRlZCIsInRvcGljc1VwZGF0ZWQiLCJwYXJlbnQiLCJfcCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImVsZW1lbnQiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwicHJvY2VzcyIsImRhdGEiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsImVsZW1lbnRzIiwicHVzaCIsImRlbGV0ZSIsImFkZCIsInRvcGljcyIsImZvckVhY2giLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkdlbmVyYXRvciIsInRleHRzIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY2xzIiwiaGFuZGxlQ2xvc2UiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiU2hhcmVMZXNzb24iLCJsZXNzb24iLCJvbkNsb3NlIiwiTGVzc29uQ29udGVudCIsImFyZWEiLCJpdGVtcyIsInNldFZhbHVlIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJTcGlubmVyIiwiYWN0aXZlIiwidHlwZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsImluZm8iLCJwYW5lc1RpdGxlcyIsIk9iamVjdCIsImtleXMiLCJvbkNoYW5nZSIsImV2ZW50IiwiaW5kZXgiLCJ0YWJzIiwicGFuZXMiLCJpdGVtIiwiVGFiIiwia2V5IiwidG90YWxFbGVtZW50cyIsImVsZW1lbnRzUmVhZHkiLCJsb2FkaW5nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInN0ZXAiLCJyZWYiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiTGVzc29uVGFicyIsIlBhbmVzIiwiYXR0cnMiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsIlRvcGljSXRlbSIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwidXBkYXRlcyIsInByb3BzIiwiVG9waWNDb250ZXh0IiwidXNlVG9waWNDb250ZXh0IiwibmFtZSIsInRpdGxlcyIsInRvcGljVXBkYXRlZCIsInJlcGxhY2UiLCJvblRvZ2dsZSIsInVwZGF0ZWQiLCJwZW5kaW5nIiwicGVuZGluZ3MiLCJQcm92aWRlciIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJwcm92aWRlclZhbHVlcyJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL3RhYnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L01hcmtlZENvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50L2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3F1ZXN0aW9ucy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9Ub3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljVGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19