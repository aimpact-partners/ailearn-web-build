System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@1.0.0/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@1.0.0/lessons/assign", "pragmate-ui@0.0.36/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/spinner", "pragmate-ui@0.0.36/toast", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_beyondJsReactive115Model) {
      dependency_3 = _beyondJsReactive115Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIm1vZGVsIiwicHJvZ3Jlc3MiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJnY2xhc3Nyb29tcyIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsInBhcmVudCIsInRvcGljc0VsZW1lbnRzIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwibGVzc29uUGVuZGluZ3MiLCJTZXQiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY3NQZW5kaW5ncyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInRpbWVzIiwiX3AiLCJjdXJyZW50VGltZW91dCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImVsZW1lbnQiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwicHJvY2VzcyIsImRhdGEiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsImVsZW1lbnRzIiwicHVzaCIsImRlbGV0ZSIsImFkZCIsInRvcGljcyIsImZvckVhY2giLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9yZWFjdCIsIkxlc3NvbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJfbGVzc29ucyIsIl90b3BpY3MiLCJfYXNzaWduIiwiX2NvbXBvbmVudHMiLCJHZW5lcmF0b3IiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImNscyIsImhhbmRsZUNsb3NlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJfZW1wdHlDb250ZW50IiwiX2NvbnRlbnQiLCJfaG9va3MiLCJfc3Bpbm5lciIsIkxlc3NvbkNvbnRlbnQiLCJhcmVhIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlQmluZGVyIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJfdG9hc3QiLCJfdGFicyIsIl9jb2xsYXBzaWJsZSIsIl90YWJzMiIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsImluZm8iLCJwYW5lc1RpdGxlcyIsIk9iamVjdCIsImtleXMiLCJvbkNoYW5nZSIsImV2ZW50IiwiaW5kZXgiLCJ0YWJzIiwicGFuZXMiLCJpdGVtIiwiVGFiIiwia2V5IiwidG90YWxFbGVtZW50cyIsImVsZW1lbnRzUmVhZHkiLCJsb2FkaW5nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInN0ZXAiLCJyZWYiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiTGVzc29uVGFicyIsIlBhbmVzIiwiX2JhZGdlIiwiYXR0cnMiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwidXNlTWFya2VkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcXVlc3Rpb25zIiwiX01hcmtlZENvbnRlbnQiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsIl9hbGVydCIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsIl90b3BpYyIsIkZyYWdtZW50IiwiVG9waWNJdGVtIiwiX0xvYWRpbmdCbG9jayIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJ1c2VUb3BpY0NvbnRleHQiLCJoYXNFbGVtZW50cyIsIl9FbGVtZW50VG9waWNDb250ZW50IiwiX1RvcGljVGFicyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwiX2NvbnRleHQyIiwidXBkYXRlcyIsInByb3BzIiwiVG9waWNDb250ZXh0IiwiX1RvcGljQ29udGVudCIsIm5hbWUiLCJ0aXRsZXMiLCJ0b3BpY1VwZGF0ZWQiLCJyZXBsYWNlIiwib25Ub2dnbGUiLCJ1cGRhdGVkIiwicGVuZGluZyIsInBlbmRpbmdzIiwiUHJvdmlkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2dlbmVyYXRvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFNTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFFakQsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9ILE1BQUEsQ0FBQUksSUFBSTtZQUNaO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFRLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUFHLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO1lBQ25DOztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFpQixNQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLEtBQUEsR0FBQXJCLE9BQUE7VUFFQSxJQUFBc0IsV0FBQSxHQUFBdEIsT0FBQTtVQUVNLE1BQU9TLFlBQWEsU0FBUVcsTUFBQSxDQUFBRyxhQUFxQjtZQUN0RCxDQUFBUCxLQUFNO1lBS04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJUSxPQUFPQSxDQUFBO2NBQ1YsSUFBSUEsT0FBTyxHQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxtQkFBbUIsSUFDakMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLFdBQVcsRUFBRUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUN4QyxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDVSxXQUFXLEVBQUVFLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQSxLQUFLLENBQUNDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztjQUU3RCxPQUFPTixPQUFPO1lBQ2Y7WUFFQSxJQUFJTyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFmLEtBQU0sQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDcEM7WUFDQSxDQUFBQyxXQUFZLEdBQVUsRUFBRTtZQUN4QixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUNBQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztjQUM1QkMsVUFBVSxDQUFDN0IsS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFFQSxNQUFNSSxJQUFJQSxDQUFDMEIsRUFBVTtjQUNwQixJQUFJLElBQUksQ0FBQyxDQUFBckIsS0FBTSxFQUFFcUIsRUFBRSxLQUFLQSxFQUFFLEVBQUU7Z0JBQzNCOztjQUdELElBQUksSUFBSSxDQUFDLENBQUFyQixLQUFNLElBQUksSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ3FCLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsQ0FBQXJCLEtBQU0sR0FBR3NCLFNBQVM7O2NBR3hCLElBQUksQ0FBQyxDQUFBdEIsS0FBTSxHQUFHLElBQUlLLEtBQUEsQ0FBQWtCLE1BQU0sQ0FBQztnQkFBRUY7Y0FBRSxDQUFFLENBQUM7Y0FDaEMsTUFBTUcsT0FBTyxHQUFHLE1BQU1sQixXQUFBLENBQUFtQixVQUFVLENBQUNELE9BQU8sRUFBRTtjQUMxQyxJQUFJLENBQUMsQ0FBQVAsV0FBWSxHQUFHTyxPQUFPO2NBRTNCLE1BQU0sSUFBSSxDQUFDLENBQUF4QixLQUFNLENBQUMwQixPQUFPO2NBRXpCLElBQUksQ0FBQ0wsRUFBRSxFQUFFO2dCQUNSLElBQUksQ0FBQ00sS0FBSyxHQUFHLElBQUk7Z0JBQ2pCOztjQUVELE1BQU0sSUFBSSxDQUFDLENBQUEzQixLQUFNLENBQUNMLElBQUksQ0FBQztnQkFBRU0sUUFBUSxFQUFFO2NBQUksQ0FBRSxDQUFDO2NBRTFDLElBQUksQ0FBQzBCLEtBQUssR0FBRyxJQUFJO1lBQ2xCO1lBRUFDLEdBQUcsR0FBR0EsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEtBQVU7Y0FDL0IsTUFBTUMsVUFBVSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQS9CLEtBQU0sQ0FBQytCLFVBQVUsRUFBRSxhQUFhLENBQUM7Y0FDN0QsSUFBSSxDQUFDQSxVQUFVLENBQUNDLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDLEVBQUU7Y0FFcEMsSUFBSSxDQUFDLENBQUE3QixLQUFNLENBQUM2QixRQUFRLENBQUMsR0FBR0MsS0FBSztjQUU3QjtZQUNELENBQUM7O1VBQ0QzQixPQUFBLENBQUFWLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUQsSUFBQVcsTUFBQSxHQUFBcEIsT0FBQTtVQUdNLE1BQU9pRCxlQUFnQixTQUFRN0IsTUFBQSxDQUFBRyxhQUE4QjtZQUNsRSxDQUFBMkIsTUFBTztZQUNQLENBQUFDLGNBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUM7WUFDcEYsQ0FBQUMsY0FBZSxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO1lBQ3hFLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUYsY0FBZTtZQUM1QjtZQUNBLENBQUFHLGNBQWUsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDM0IsSUFBSUMscUJBQXFCQSxDQUFBO2NBQ3hCLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixjQUFlLENBQUM7WUFDakM7WUFDQSxDQUFBRyxjQUFlLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzNCLElBQUlDLG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBRixjQUFlO1lBQzVCO1lBRUEsQ0FBQUcscUJBQXNCLEdBQWEsRUFBRTtZQUNyQyxJQUFJQSxxQkFBcUJBLENBQUE7Y0FDeEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEscUJBQXNCO1lBQ25DO1lBRUEsQ0FBQUMsYUFBYyxHQUFHLElBQUlILEdBQUcsRUFBRTtZQUMxQixJQUFJRyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGFBQWM7WUFDM0I7WUFDQSxDQUFBQyxLQUFNLEdBQUcsQ0FBQztZQUNWNUIsWUFBWWdCLE1BQU07Y0FDakIsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFBLE1BQU8sR0FBR0EsTUFBTTtjQUNyQmQsVUFBVSxDQUFDMkIsRUFBRSxHQUFHLElBQUk7Y0FDcEIzQixVQUFVLENBQUNuQixRQUFRLEdBQUcsSUFBSTtZQUMzQjtZQUVBLENBQUErQyxjQUFlO1lBQ2ZDLGtCQUFrQixHQUFHQyxPQUFPLElBQUc7Y0FDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBTixxQkFBc0IsQ0FBQ1osUUFBUSxDQUFDa0IsT0FBTyxDQUFDLEVBQUU7Y0FDcEQsSUFBSSxDQUFDLENBQUFOLHFCQUFzQixDQUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUFQLHFCQUFzQixDQUFDUSxPQUFPLENBQUNGLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUNuRixJQUFJLENBQUNHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxDQUFDO1lBRURDLGlCQUFpQixHQUFHQSxDQUFDQyxPQUFPLEVBQUVMLE9BQU8sS0FBSTtjQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFMLGFBQWMsQ0FBQzdCLEdBQUcsQ0FBQ3VDLE9BQU8sQ0FBQyxFQUFFO2NBQ3ZDLE1BQU0xQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFnQyxhQUFjLENBQUMvQyxHQUFHLENBQUN5RCxPQUFPLENBQUM7Y0FDOUMsSUFBSSxDQUFDMUMsS0FBSyxDQUFDbUIsUUFBUSxDQUFDa0IsT0FBTyxDQUFDLEVBQUU7Y0FDOUJyQyxLQUFLLENBQUNzQyxNQUFNLENBQUN0QyxLQUFLLENBQUN1QyxPQUFPLENBQUNGLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUN2QyxJQUFJLENBQUNHLFlBQVksQ0FBQyxTQUFTRSxPQUFPLFVBQVUsQ0FBQztZQUM5QyxDQUFDO1lBQ0RDLE9BQU9BLENBQUNDLElBQUk7Y0FDWHJDLFVBQVUsQ0FBQ3FDLElBQUksR0FBR0EsSUFBSTtjQUN0QixJQUFJLENBQUMsQ0FBQVgsS0FBTSxFQUFFO2NBQ2IsSUFBSSxDQUFDLENBQUFELGFBQWMsR0FBRyxJQUFJSCxHQUFHLEVBQUU7Y0FFL0IsSUFBSWdCLGFBQWEsR0FBRyxLQUFLO2NBQ3pCLElBQUlDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQXZCLGNBQWUsQ0FBQ3dCLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVYLE9BQU8sS0FBSTtnQkFDdkQsSUFBSU8sSUFBSSxDQUFDSyxRQUFRLENBQUNaLE9BQU8sQ0FBQyxFQUFFN0IsRUFBRSxFQUFFO2tCQUMvQixJQUFJLElBQUksQ0FBQyxDQUFBaUIsY0FBZSxDQUFDdEIsR0FBRyxDQUFDa0MsT0FBTyxDQUFDLEVBQUU7b0JBQ3RDUSxhQUFhLEdBQUcsSUFBSTtvQkFDcEIsSUFBSSxDQUFDLENBQUFkLHFCQUFzQixDQUFDbUIsSUFBSSxDQUFDYixPQUFPLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxDQUFBWixjQUFlLENBQUMwQixNQUFNLENBQUNkLE9BQU8sQ0FBQzs7a0JBRXJDLE9BQU9XLEdBQUc7O2dCQUdYLElBQUksQ0FBQyxDQUFBdkIsY0FBZSxDQUFDMkIsR0FBRyxDQUFDZixPQUFPLENBQUM7Z0JBQ2pDLE9BQU9XLEdBQUcsR0FBRyxDQUFDO2NBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztjQUVMLElBQUlILGFBQWEsRUFBRSxJQUFJLENBQUNMLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztjQUV0REksSUFBSSxDQUFDUyxNQUFNLENBQUNDLE9BQU8sQ0FBQ3RELEtBQUssSUFBRztnQkFDM0IsSUFBSXVELFlBQVksR0FBRyxLQUFLO2dCQUV4QixJQUFJLENBQUMsQ0FBQWpDLGNBQWUsQ0FBQ2dDLE9BQU8sQ0FBQ2pCLE9BQU8sSUFBRztrQkFDdEMsTUFBTW1CLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQTVCLGNBQWUsQ0FBQzNDLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDUSxFQUFFLENBQUMsSUFBSSxJQUFJa0IsR0FBRyxFQUFFO2tCQUVyRSxJQUFJOEIsYUFBYSxDQUFDckQsR0FBRyxDQUFDa0MsT0FBTyxDQUFDLElBQUlyQyxLQUFLLENBQUNpRCxRQUFRLENBQUNaLE9BQU8sQ0FBQyxFQUFFN0IsRUFBRSxFQUFFO29CQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF3QixhQUFjLENBQUM3QixHQUFHLENBQUNILEtBQUssQ0FBQ1EsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUF3QixhQUFjLENBQUNqQixHQUFHLENBQUNmLEtBQUssQ0FBQ1EsRUFBRSxFQUFFLElBQUlrQixHQUFHLEVBQUUsQ0FBQztvQkFDcEYsSUFBSSxDQUFDLENBQUFNLGFBQWMsQ0FBQy9DLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDUSxFQUFFLENBQUMsQ0FBQzRDLEdBQUcsQ0FBQ2YsT0FBTyxDQUFDO29CQUM5Q2tCLFlBQVksR0FBRyxJQUFJOztrQkFHcEIsSUFBSSxDQUFDdkQsS0FBSyxDQUFDaUQsUUFBUSxDQUFDWixPQUFPLENBQUMsRUFBRTdCLEVBQUUsRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBb0IsY0FBZSxDQUFDekIsR0FBRyxDQUFDSCxLQUFLLENBQUNRLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBb0IsY0FBZSxDQUFDYixHQUFHLENBQUNmLEtBQUssQ0FBQ1EsRUFBRSxFQUFFLElBQUlrQixHQUFHLEVBQUUsQ0FBQztvQkFDdEYsSUFBSSxDQUFDLENBQUFFLGNBQWUsQ0FBQzNDLEdBQUcsQ0FBQ2UsS0FBSyxDQUFDUSxFQUFFLENBQUMsQ0FBQzRDLEdBQUcsQ0FBQ2YsT0FBTyxDQUFDO29CQUUvQ1MsSUFBSSxFQUFFOztnQkFFUixDQUFDLENBQUM7Z0JBQ0YsSUFBSVMsWUFBWSxFQUFFO2tCQUNqQixJQUFJLENBQUNmLFlBQVksQ0FBQyxTQUFTeEMsS0FBSyxDQUFDUSxFQUFFLFVBQVUsQ0FBQzs7Y0FFaEQsQ0FBQyxDQUFDO2NBRUYsSUFBSXNDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUFiLEtBQU0sR0FBRyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBRSxjQUFlLEdBQUc1QixVQUFVLENBQUNrRCxVQUFVLENBQUMsTUFBSztrQkFDakQsSUFBSSxDQUFDLENBQUFwQyxNQUFPLENBQUN2QyxJQUFJLENBQUM7b0JBQUVNLFFBQVEsRUFBRTtrQkFBSSxDQUFFLENBQUM7Z0JBQ3RDLENBQUMsRUFBRSxJQUFJLENBQUM7O1lBRVY7WUFFQUMsS0FBS0EsQ0FBQTtjQUNKLElBQUksQ0FBQyxDQUFBb0MsY0FBZSxDQUFDcEMsS0FBSyxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFBdUMsY0FBZSxDQUFDdkMsS0FBSyxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFBMEMscUJBQXNCLEdBQUcsRUFBRTtjQUNoQyxJQUFJLENBQUMsQ0FBQUMsYUFBYyxHQUFHLElBQUlILEdBQUcsRUFBRTtjQUMvQixJQUFJLENBQUMsQ0FBQUksS0FBTSxHQUFHLENBQUM7Y0FDZixJQUFJLElBQUksQ0FBQyxDQUFBRSxjQUFlLEVBQUU1QixVQUFVLENBQUNtRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUF2QixjQUFlLENBQUM7WUFDeEU7O1VBQ0E3QyxPQUFBLENBQUE4QixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkhELElBQUF1QyxNQUFBLEdBQUF4RixPQUFBO1VBTU8sTUFBTXlGLGFBQWEsR0FBR0QsTUFBQSxDQUFBRSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQUN4RSxPQUFBLENBQUFzRSxhQUFBLEdBQUFBLGFBQUE7VUFDaEUsTUFBTUcsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTUosTUFBQSxDQUFBRSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0osYUFBYSxDQUFDO1VBQUN0RSxPQUFBLENBQUF5RSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQdEUsSUFBQUosTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUE4RixRQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQStGLFFBQUEsR0FBQS9GLE9BQUE7VUFDQSxJQUFBZ0csT0FBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFpRyxPQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQWtHLFdBQUEsR0FBQWxHLE9BQUE7VUFDTSxTQUFVbUcsU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0w1RixLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRVM7Y0FBSyxDQUFFO2NBQ2hCb0Y7WUFBSyxDQUNMLEdBQUcsSUFBQU4sUUFBQSxDQUFBRixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUNTLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYSxRQUFRLENBQUNoRyxLQUFLLENBQUM4RixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDRyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHakIsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTUcsR0FBRyxHQUFHLGNBQWNMLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBQzFELE1BQU1NLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixZQUFZLENBQUMsS0FBSyxDQUFDO1lBRTdDLE9BQ0NqQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0MsU0FBUyxFQUFFSDtZQUFHLEdBQ2xCbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFnRCxHQUNqRXJCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxrQkFDQ3BCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxhQUFLNUYsS0FBSyxDQUFDUyxtQkFBbUIsQ0FBTSxFQUNwQytELE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxnQkFBUVIsS0FBSyxDQUFDVSxLQUFLLENBQVMsQ0FDbkIsRUFDVnRCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JyQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ1YsV0FBQSxDQUFBYSxNQUFNO2NBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUCxZQUFZLENBQUMsSUFBSTtZQUFDLGFBQWtCLENBQ3RELENBQ0UsRUFDVGpCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDYixRQUFBLENBQUFrQixzQkFBc0IsT0FBRyxFQUMxQnpCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDWixPQUFBLENBQUFrQixlQUFlLE9BQUcsRUFDbEJWLFNBQVMsSUFDVGhCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDWCxPQUFBLENBQUFrQixXQUFXO2NBQ1hsRixXQUFXLEVBQUUxQixLQUFLLENBQUMwQixXQUFXO2NBQzlCbUUsS0FBSyxFQUFFQSxLQUFLLENBQUNuRSxXQUFXO2NBQ3hCbUYsTUFBTSxFQUFFcEcsS0FBSztjQUNicUcsT0FBTyxFQUFFVjtZQUFXLEVBRXJCLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQW5CLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUFzSCxhQUFBLEdBQUF0SCxPQUFBO1VBQ0EsSUFBQXVILFFBQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF5SCxRQUFBLEdBQUF6SCxPQUFBO1VBU00sU0FBVTBILGFBQWFBLENBQUM7WUFBRUM7VUFBSSxDQUFFO1lBQ3JDLE1BQU07Y0FDTHBILEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFUztjQUFLO1lBQUUsQ0FDaEIsR0FBRyxJQUFBOEUsUUFBQSxDQUFBRixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNMUIsT0FBTyxHQUFHbEQsS0FBSyxDQUFDOEQsUUFBUSxDQUFDOEMsS0FBSyxDQUFDOUcsR0FBRyxDQUFDNkcsSUFBSSxDQUFDO1lBQzlDLE1BQU0sQ0FBQ3RCLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYSxRQUFRLENBQUNoRyxLQUFLLENBQUM4RixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDdkQsS0FBSyxFQUFFK0UsUUFBUSxDQUFDLEdBQUdyQyxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDckMsT0FBTyxFQUFFcEIsS0FBSyxDQUFDO1lBRXhELE1BQU1nRixLQUFLLEdBQVc7Y0FBRUgsSUFBSTtjQUFFckIsV0FBVztjQUFFdEYsS0FBSztjQUFFa0Q7WUFBTyxDQUFFO1lBRTNELElBQUFzRCxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDN0QsT0FBTyxDQUFDLEVBQUUsTUFBSztjQUN6Qm9DLFdBQVcsQ0FBQ3BDLE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQztjQUM3QndCLFFBQVEsQ0FBQzNELE9BQU8sRUFBRXBCLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUM7WUFDRjBDLE1BQUEsQ0FBQUUsT0FBSyxDQUFDc0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSTlELE9BQU8sQ0FBQzdCLEVBQUUsSUFBSSxDQUFDNkIsT0FBTyxDQUFDcEIsS0FBSyxFQUFFb0IsT0FBTyxDQUFDdkQsSUFBSSxDQUFDdUQsT0FBTyxDQUFDN0IsRUFBRSxDQUFDO1lBQzNELENBQUMsRUFBRSxDQUFDNkIsT0FBTyxDQUFDN0IsRUFBRSxDQUFDLENBQUM7WUFFaEIsTUFBTXFFLEdBQUcsR0FBRywyQkFBMkJMLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRXZFLElBQUksQ0FBQ3ZELEtBQUssSUFBSW9CLE9BQU8sQ0FBQzdCLEVBQUUsRUFBRTtjQUN6QixPQUNDbUQsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2dCQUFTQyxTQUFTLEVBQUUsa0JBQWtCSCxHQUFHO2NBQUUsR0FDMUNsQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2EsUUFBQSxDQUFBUSxPQUFPO2dCQUFDQyxNQUFNLEVBQUUsSUFBSTtnQkFBRUMsSUFBSSxFQUFDO2NBQVMsRUFBRyxDQUMvQjs7WUFJWixNQUFNQyxPQUFPLEdBQUdsRSxPQUFPLEVBQUVwQixLQUFLLEdBQUd5RSxRQUFBLENBQUFjLFdBQVcsR0FBR2YsYUFBQSxDQUFBZ0IsWUFBWTtZQUUzRCxPQUNDOUMsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQVNDLFNBQVMsRUFBRUg7WUFBRyxHQUN0QmxCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDd0IsT0FBTztjQUFBLEdBQUtOO1lBQUssRUFBSSxDQUNiO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBLElBQUF0QyxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXVJLE1BQUEsR0FBQXZJLE9BQUE7VUFDQSxJQUFBa0csV0FBQSxHQUFBbEcsT0FBQTtVQUNBLElBQUF3SSxLQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUksWUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUE4RixRQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQXVILFFBQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUVNLFNBQVVpSCxzQkFBc0JBLENBQUE7WUFDckMsTUFBTTtjQUNMMUcsS0FBSyxFQUFFO2dCQUNOUyxLQUFLLEVBQUU7a0JBQUVDO2dCQUFRO2NBQUUsQ0FDbkI7Y0FDRG1GLEtBQUssRUFBRTtnQkFBRWdCLE1BQU0sRUFBRWhCLEtBQUs7Z0JBQUV1QyxXQUFXO2dCQUFFQztjQUFhO1lBQUUsQ0FDcEQsR0FBRyxJQUFBOUMsUUFBQSxDQUFBRixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUNpRCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDekQsTUFBTSxDQUFDd0MsZUFBZSxFQUFFQyxrQkFBa0IsQ0FBQyxHQUFHeEQsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQ3RGLFFBQVEsQ0FBQzJDLHFCQUFxQixDQUFDakMsTUFBTSxDQUFDO1lBQ25HLE1BQU1zSCxLQUFLLEdBQUd6RCxNQUFBLENBQUFFLE9BQUssQ0FBQ3dELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBQTFCLE1BQUEsQ0FBQU8sU0FBUyxFQUNSLENBQUM5RyxRQUFRLENBQUMsRUFDVixNQUFLO2NBQ0orSCxrQkFBa0IsQ0FBQy9ILFFBQVEsQ0FBQzJDLHFCQUFxQixDQUFDakMsTUFBTSxDQUFDO2NBQ3pEc0gsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFNBQVMsQ0FBQ25FLEdBQUcsQ0FBQyxhQUFhLENBQUM7Y0FDMUNLLFVBQVUsQ0FBQyxNQUFNMkQsS0FBSyxDQUFDRSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUVyRWQsTUFBQSxDQUFBZSxLQUFLLENBQUNDLElBQUksQ0FBQyxHQUFHWCxhQUFhLEVBQUUsQ0FBQztZQUMvQixDQUFDLEVBQ0QsZ0JBQWdCLENBQ2hCO1lBQ0QsTUFBTTtjQUFFOUQ7WUFBUSxDQUFFLEdBQUdzQixLQUFLO1lBQzFCLE1BQU1vRCxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDNUUsUUFBUSxDQUFDO1lBQ3pDLE1BQU02RSxRQUFRLEdBQUdBLENBQUNDLEtBQUssRUFBRUMsS0FBSyxLQUFJO2NBQ2pDZixXQUFXLENBQUNVLFdBQVcsQ0FBQ0ssS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVELE1BQU1DLElBQUksR0FBRyxFQUFFO1lBQ2YsTUFBTUMsS0FBSyxHQUFHLEVBQUU7WUFDaEJQLFdBQVcsQ0FBQ3JFLE9BQU8sQ0FBQyxDQUFDNkUsSUFBSSxFQUFFSCxLQUFLLEtBQUk7Y0FDbkNDLElBQUksQ0FBQy9FLElBQUksQ0FBQ1MsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM0QixLQUFBLENBQUF5QixHQUFHO2dCQUFDQyxHQUFHLEVBQUVGO2NBQUksR0FBR0EsSUFBSSxDQUFPLENBQUM7Y0FDdkNELEtBQUssQ0FBQ2hGLElBQUksQ0FBQ1MsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUNXLFFBQUEsQ0FBQUcsYUFBYTtnQkFBQ3dDLEdBQUcsRUFBRUYsSUFBSTtnQkFBRXJDLElBQUksRUFBRXFDO2NBQUksRUFBSSxDQUFDO1lBQ3JELENBQUMsQ0FBQztZQUVGLE1BQU1HLGFBQWEsR0FBR2xKLFFBQVEsQ0FBQ21DLGNBQWMsQ0FBQ3pCLE1BQU07WUFDcEQsTUFBTXlJLGFBQWEsR0FBR0QsYUFBYSxHQUFHbEosUUFBUSxDQUFDdUMscUJBQXFCLENBQUM3QixNQUFNO1lBQzNFLE1BQU0wSSxPQUFPLEdBQUdELGFBQWEsR0FBR0QsYUFBYTtZQUM3QyxPQUNDM0UsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFpRCxHQUNuRXJCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNkIsWUFBQSxDQUFBNkIsb0JBQW9CLFFBQ3BCOUUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM2QixZQUFBLENBQUE4QixpQkFBaUIsUUFDakIvRSxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQWEsR0FDMUJyQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsZUFBT1IsS0FBSyxDQUFDb0UsSUFBSSxDQUFRLEVBQ3pCaEYsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQU82RCxHQUFHLEVBQUV4QixLQUFLO2NBQUVwQyxTQUFTLEVBQUM7WUFBb0IsR0FDL0M4QixXQUFXLEUsTUFBSXlCLGFBQWEsRSxLQUFHRCxhQUFhLENBQ3RDLENBQ0osRUFDTDNFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDVixXQUFBLENBQUErQixPQUFPO2NBQUNDLE1BQU0sRUFBRW1DLE9BQU87Y0FBRWxDLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDeEIsRUFDcEIzQyxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzZCLFlBQUEsQ0FBQWlDLGtCQUFrQixRQUNsQmxGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsS0FBQSxDQUFBbUMsYUFBYTtjQUFDaEIsUUFBUSxFQUFFQTtZQUFRLEdBQ2hDbkUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM4QixNQUFBLENBQUFrQyxVQUFVLE9BQUcsRUFDZHBGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsS0FBQSxDQUFBcUMsS0FBSyxRQUFFZCxLQUFLLENBQVMsQ0FDUCxDQUNJLENBQ0MsQ0FDZDtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFQSxJQUFBdkUsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF3SSxLQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQThLLE1BQUEsR0FBQTlLLE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQU1NLFNBQVU0SyxVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FDTHJLLEtBQUssRUFBRTtnQkFBRVM7Y0FBSyxDQUFFO2NBQ2hCb0YsS0FBSyxFQUFFO2dCQUFFZ0IsTUFBTSxFQUFFaEI7Y0FBSztZQUFFLENBQ3hCLEdBQUcsSUFBQU4sUUFBQSxDQUFBRixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNO2NBQUVkO1lBQVEsQ0FBRSxHQUFHc0IsS0FBSztZQUMxQixNQUFNb0QsV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQzVFLFFBQVEsQ0FBQztZQUN6QyxNQUFNZ0YsSUFBSSxHQUFHLEVBQUU7WUFDZk4sV0FBVyxDQUFDckUsT0FBTyxDQUFDLENBQUM2RSxJQUFJLEVBQUVILEtBQUssS0FBSTtjQUNuQyxNQUFNM0YsT0FBTyxHQUFHbEQsS0FBSyxDQUFDOEQsUUFBUSxDQUFDOEMsS0FBSyxDQUFDOUcsR0FBRyxDQUFDa0osSUFBSSxDQUFDO2NBRTlDLE1BQU1lLEtBQUssR0FBVyxFQUFFO2NBQ3hCLElBQUkvSixLQUFLLENBQUNDLFFBQVEsQ0FBQzJDLHFCQUFxQixDQUFDWixRQUFRLENBQUNnSCxJQUFJLENBQUMsRUFBRTtnQkFDeEQsTUFBTWhELE9BQU8sR0FBR0EsQ0FBQSxLQUFNaEcsS0FBSyxDQUFDQyxRQUFRLENBQUNnRCxrQkFBa0IsQ0FBQytGLElBQUksQ0FBQztnQkFFN0RGLElBQUksQ0FBQy9FLElBQUksQ0FDUlMsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM0QixLQUFBLENBQUF5QixHQUFHO2tCQUFDQyxHQUFHLEVBQUVGLElBQUk7a0JBQUVnQixRQUFRLEVBQUUsQ0FBQzlHLE9BQU8sQ0FBQzdCLEVBQUU7a0JBQUUyRSxPQUFPLEVBQUVBO2dCQUFPLEdBQ3REeEIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUNrRSxNQUFBLENBQUFHLEtBQUs7a0JBQUNDLE9BQU8sRUFBRTtnQkFBSSxHQUFHcEcsUUFBUSxDQUFDa0YsSUFBSSxDQUFDLENBQVMsQ0FDekMsQ0FDTjtlQUNELE1BQU07Z0JBQ05GLElBQUksQ0FBQy9FLElBQUksQ0FDUlMsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM0QixLQUFBLENBQUF5QixHQUFHO2tCQUFDQyxHQUFHLEVBQUVGLElBQUk7a0JBQUVnQixRQUFRLEVBQUUsQ0FBQzlHLE9BQU8sQ0FBQzdCO2dCQUFFLEdBQ25DeUMsUUFBUSxDQUFDa0YsSUFBSSxDQUFDLENBQ1YsQ0FDTjs7WUFFSCxDQUFDLENBQUM7WUFDRixPQUFPeEUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM0QixLQUFBLENBQUEyQyxJQUFJLFFBQUVyQixJQUFJLENBQVE7VUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUF0RSxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQWtHLFdBQUEsR0FBQWxHLE9BQUE7VUFDTSxTQUFVb0wsWUFBWUEsQ0FBQTtZQUMzQixNQUFNMUUsR0FBRyxHQUFHLGdCQUFnQjtZQUM1QixPQUNDbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQVNDLFNBQVMsRUFBRUg7WUFBRyxHQUN0QmxCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDVixXQUFBLENBQUErQixPQUFPO2NBQUNDLE1BQU0sRUFBRSxJQUFJO2NBQUVDLElBQUksRUFBQyxTQUFTO2NBQUNrRCxJQUFJLEVBQUM7WUFBSSxFQUFHLENBQ3pDO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQTdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQUNNLFNBQVVzTCxhQUFhQSxDQUFDO1lBQUVDO1VBQU8sQ0FBRTtZQUN4QyxNQUFNQyxJQUFJLEdBQUcsSUFBQWhFLE1BQUEsQ0FBQWlFLFNBQVMsR0FBRTtZQUN4QixPQUFPakcsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQUs4RSx1QkFBdUIsRUFBRTtnQkFBRUMsTUFBTSxFQUFFSCxJQUFJLENBQUNELE9BQU87Y0FBQztZQUFFLEVBQUk7VUFDbkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQS9GLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBNEwsVUFBQSxHQUFBNUwsT0FBQTtVQUNBLElBQUE4RixRQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQTZMLGNBQUEsR0FBQTdMLE9BQUE7VUFRTSxTQUFVcUksV0FBV0EsQ0FBQztZQUFFVixJQUFJO1lBQUV6RDtVQUFPLENBQXFCO1lBQy9ELE1BQU07Y0FDTDNELEtBQUssRUFBRTtnQkFBRVM7Y0FBSztZQUFFLENBQ2hCLEdBQUcsSUFBQThFLFFBQUEsQ0FBQUYsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTXdDLE9BQU8sR0FBRyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQ3BGLFFBQVEsQ0FBQzJFLElBQUksQ0FBQyxHQUFHaUUsVUFBQSxDQUFBRSxrQkFBa0IsR0FBR0QsY0FBQSxDQUFBUCxhQUFhO1lBRTlGLE9BQ0M5RixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CckIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUN3QixPQUFPO2NBQUNtRCxPQUFPLEVBQUVySCxPQUFPLENBQUNwQjtZQUFLLEVBQUksQ0FDOUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQTBDLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUVBLElBQUF3SCxNQUFBLEdBQUF4SCxPQUFBO1VBRU0sU0FBVXNJLFlBQVlBLENBQUM7WUFBRXBFLE9BQU87WUFBRXlEO1VBQUksQ0FBRTtZQUM3QyxNQUFNO2NBQ0x2QixLQUFLLEVBQUU7Z0JBQUUyRixLQUFLLEVBQUUzRjtjQUFLLENBQUU7Y0FDdkI3RjtZQUFLLENBQ0wsR0FBRyxJQUFBdUYsUUFBQSxDQUFBRixnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUNTLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYSxRQUFRLENBQUNyQyxPQUFPLENBQUNtQyxRQUFRLENBQUM7WUFFaEUsSUFBQW1CLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUM3RCxPQUFPLENBQUMsRUFBRSxNQUFNb0MsV0FBVyxDQUFDcEMsT0FBTyxDQUFDbUMsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTTJGLFFBQVEsR0FBRyxNQUFNcEMsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUNxQyxjQUFjLEVBQUU7Y0FDdEIsTUFBTS9ILE9BQU8sQ0FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU11TCxPQUFPLEdBQUc3RixRQUFRLEdBQUdELEtBQUssQ0FBQytGLFVBQVUsR0FBRy9GLEtBQUssQ0FBQzhGLE9BQU87WUFDM0QsT0FDQzFHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBZSxHQUM3QnJCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxhQUNFUixLQUFLLENBQUNVLEtBQUssRSxLQUFFdEIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLFlBQU0sRUFDbkJzRixPQUFPLENBQ0osQ0FDQTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUExRyxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQW9NLE1BQUEsR0FBQXBNLE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUNNLFNBQVU4TCxrQkFBa0JBLENBQUM7WUFBRVA7VUFBTyxDQUFFO1lBQzdDLElBQUk7Y0FDSCxNQUFNOUcsSUFBSSxHQUFHNEgsSUFBSSxDQUFDQyxLQUFLLENBQUNmLE9BQU8sQ0FBQztjQUNoQyxNQUFNO2dCQUNMbkYsS0FBSztnQkFDTDdGLEtBQUssRUFBRTtrQkFBRVM7Z0JBQUs7Y0FBRSxDQUNoQixHQUFHLElBQUE4RSxRQUFBLENBQUFGLGdCQUFnQixHQUFFO2NBRXRCLE9BQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQTtnQkFBS0MsU0FBUyxFQUFDO2NBQXVCLEdBQ3JDckIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUN3RixNQUFBLENBQUFHLEtBQUs7Z0JBQUNwRSxJQUFJLEVBQUMsU0FBUztnQkFBQ3RCLFNBQVMsRUFBQztjQUFPLEdBQ3RDckIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLGFBQUtSLEtBQUssQ0FBQ29HLGdCQUFnQixDQUFNLENBQzFCLEVBRVAvSCxJQUFJLENBQUNnSSxVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDN0ssS0FBSyxFQUFFZ0ksS0FBSyxLQUNqQ3JFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDK0YsY0FBYztnQkFBQ3pDLEdBQUcsRUFBRUwsS0FBSztnQkFBRWhJLEtBQUssRUFBRUE7Y0FBSyxFQUN4QyxDQUFDLENBQ0c7YUFFUCxDQUFDLE9BQU8rSyxDQUFDLEVBQUU7Y0FDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsaUJBQWlCLEVBQUVGLENBQUMsQ0FBQztjQUNuQyxPQUFPLElBQUk7O1VBRWI7VUFFTSxTQUFVRCxjQUFjQSxDQUFDO1lBQUU5SztVQUFLLENBQUU7WUFDdkMsT0FDQzJELE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENyQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsYUFBSy9FLEtBQUssQ0FBQ2lGLEtBQUssQ0FBTSxFQUNyQmpGLEtBQUssQ0FBQ2tMLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLENBQUNNLFFBQVEsRUFBRW5ELEtBQUssS0FDcENyRSxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3FHLGlCQUFpQjtjQUFDL0MsR0FBRyxFQUFFTCxLQUFLO2NBQUVtRCxRQUFRLEVBQUVBO1lBQVEsRUFDakQsQ0FBQyxDQUNHO1VBRVI7VUFFTSxTQUFVQyxpQkFBaUJBLENBQUM7WUFBRUQ7VUFBUSxDQUFFO1lBQzdDLE9BQ0N4SCxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFCLEdBQ25DckIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLGFBQUtvRyxRQUFRLENBQUNFLElBQUksQ0FBTSxFQUN4QjFILE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxhQUNFb0csUUFBUSxDQUFDRyxPQUFPLENBQUNULEdBQUcsQ0FBQyxDQUFDVSxNQUFNLEVBQUV2RCxLQUFLLEtBQ25DckUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUN5RyxlQUFlO2NBQUNuRCxHQUFHLEVBQUVMLEtBQUs7Y0FBRXVELE1BQU0sRUFBRUEsTUFBTTtjQUFFRSxTQUFTLEVBQUV6RCxLQUFLLEtBQUttRCxRQUFRLENBQUNPO1lBQWMsRUFDekYsQ0FBQyxDQUNFLENBQ0E7VUFFUjtVQUVBLFNBQVNGLGVBQWVBLENBQUM7WUFBRUQsTUFBTTtZQUFFRTtVQUFTLENBQUU7WUFDN0MsT0FBTzlILE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxhQUFLMEcsU0FBUyxHQUFHOUgsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFTLEdBQUV1RyxNQUFNLENBQVEsR0FBR0EsTUFBTSxDQUFNO1VBQ2pGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQSxJQUFBNUgsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUE4RixRQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQXdOLE1BQUEsR0FBQXhOLE9BQUE7VUFFTSxTQUFVa0gsZUFBZUEsQ0FBQTtZQUM5QixNQUFNO2NBQ0wzRyxLQUFLLEVBQUU7Z0JBQUVTO2NBQUs7WUFBRSxDQUNoQixHQUFHLElBQUE4RSxRQUFBLENBQUFGLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFBcEIsTUFBQSxDQUFBRSxPQUFBLENBQUErSCxRQUFBLFFBQ0V6TSxLQUFLLENBQUNrRSxNQUFNLENBQUMwQyxLQUFLLEVBQUU4RSxHQUFHLENBQUMsQ0FBQzFDLElBQUksRUFBRUgsS0FBSyxLQUNwQ3JFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEcsTUFBQSxDQUFBRSxTQUFTO2NBQUMxRCxJQUFJLEVBQUVBLElBQUk7Y0FBRUgsS0FBSyxFQUFFQSxLQUFLO2NBQUVLLEdBQUcsRUFBRUw7WUFBSyxFQUMvQyxDQUFDLENBQ0E7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQXJFLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUFzSCxhQUFBLEdBQUF0SCxPQUFBO1VBQ0EsSUFBQXVILFFBQUEsR0FBQXZILE9BQUE7VUFDQSxJQUFBd0gsTUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUEyTixhQUFBLEdBQUEzTixPQUFBO1VBVU0sU0FBVTROLG1CQUFtQkEsQ0FBQztZQUFFL0wsS0FBSztZQUFFcUMsT0FBTztZQUFFeUQ7VUFBSSxDQUFFO1lBQzNELE1BQU07Y0FBRWtCO1lBQVEsQ0FBRSxHQUFHLElBQUEvQyxRQUFBLENBQUErSCxlQUFlLEdBQUU7WUFDdEMsTUFBTSxDQUFDL0ssS0FBSyxFQUFFK0UsUUFBUSxDQUFDLEdBQUdyQyxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDckMsT0FBTyxFQUFFcEIsS0FBSyxDQUFDO1lBQ3hELE1BQU0sQ0FBQ3VELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdkLE1BQUEsQ0FBQUUsT0FBSyxDQUFDYSxRQUFRLENBQUNyQyxPQUFPLEVBQUVtQyxRQUFRLENBQUM7WUFFakUsSUFBQW1CLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUM3RCxPQUFPLENBQUMsRUFBRSxNQUFLO2NBQ3pCMkQsUUFBUSxDQUFDM0QsT0FBTyxDQUFDcEIsS0FBSyxDQUFDO2NBQ3ZCd0QsV0FBVyxDQUFDcEMsT0FBTyxDQUFDbUMsUUFBUSxDQUFDO1lBQzlCLENBQUMsQ0FBQztZQUVGLE1BQU1LLEdBQUcsR0FBRyxtQkFBbUJMLFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBQy9ELE1BQU15SCxXQUFXLEdBQUcsQ0FBQzVKLE9BQU8sSUFBSSxDQUFDLENBQUNBLE9BQU8sRUFBRXBCLEtBQUs7WUFFaEQsSUFBSSxDQUFDZ0wsV0FBVyxJQUFJekgsUUFBUSxFQUFFLE9BQU9iLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDK0csYUFBQSxDQUFBdkMsWUFBWSxPQUFHO1lBRXJELE1BQU10RCxLQUFLLEdBQVc7Y0FBRUgsSUFBSTtjQUFFM0csS0FBSyxFQUFFYSxLQUFLO2NBQUVxQztZQUFPLENBQUU7WUFDckQsTUFBTWtFLE9BQU8sR0FBRzBGLFdBQVcsR0FBR3ZHLFFBQUEsQ0FBQWMsV0FBVyxHQUFHZixhQUFBLENBQUFnQixZQUFZO1lBRXhELE9BQ0M5QyxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUE7Y0FBU0MsU0FBUyxFQUFFSDtZQUFHLEdBQ3RCbEIsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUN3QixPQUFPO2NBQUEsR0FBS047WUFBSyxFQUFJLENBQ2I7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXRDLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUksWUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUF3SSxLQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUErTixvQkFBQSxHQUFBL04sT0FBQTtVQUNBLElBQUFnTyxVQUFBLEdBQUFoTyxPQUFBO1VBQ00sU0FBVWlPLFlBQVlBLENBQUM7WUFBRWpFO1VBQUksQ0FBRTtZQUNwQyxNQUFNO2NBQ0x6SixLQUFLO2NBQ0w2RixLQUFLLEVBQUU7Z0JBQUVsQixNQUFNLEVBQUVrQjtjQUFLO1lBQUUsQ0FDeEIsR0FBRyxJQUFBTixRQUFBLENBQUFGLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sQ0FBQ1MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2QsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQ2hHLEtBQUssQ0FBQzhGLFFBQVEsSUFBSTJELElBQUksQ0FBQzNELFFBQVEsQ0FBQztZQUMvRSxNQUFNLENBQUN3QyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEQsTUFBQSxDQUFBRSxPQUFLLENBQUNhLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFDekQsTUFBTSxDQUFDMUUsS0FBSyxFQUFFcU0sUUFBUSxDQUFDLEdBQUcxSSxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDeUQsSUFBSSxDQUFDO1lBQzlDLE1BQU07Y0FBRWxGO1lBQVEsQ0FBRSxHQUFHc0IsS0FBSztZQUMxQixNQUFNb0QsV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQzVFLFFBQVEsQ0FBQztZQUN6QyxNQUFNaUYsS0FBSyxHQUFHLEVBQUU7WUFDaEIsTUFBTXJELEdBQUcsR0FBRyxlQUFlTCxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUMzRCxNQUFNc0QsUUFBUSxHQUFHLE1BQUFBLENBQU9DLEtBQUssRUFBRWYsUUFBUSxLQUFJO2NBQzFDO2NBQ0EsTUFBTVYsSUFBSSxHQUFHcUIsV0FBVyxDQUFDWCxRQUFRLENBQUM7Y0FDbEM7Y0FDQSxNQUFNbUIsSUFBSSxDQUFDbEYsUUFBUSxDQUFDbkUsSUFBSSxDQUFDd0gsSUFBSSxDQUFDO2NBQzlCVyxXQUFXLENBQUNYLElBQUksQ0FBQztZQUNsQixDQUFDO1lBRUQsSUFBQVgsTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ2lDLElBQUksQ0FBQyxFQUFFLE1BQUs7Y0FDdEJrRSxRQUFRLENBQUNsRSxJQUFJLENBQUM7Y0FDZDFELFdBQVcsQ0FBQzBELElBQUksQ0FBQzNELFFBQVEsQ0FBQztZQUMzQixDQUFDLENBQUM7WUFFRm1ELFdBQVcsQ0FBQ3JFLE9BQU8sQ0FBQyxDQUFDd0MsSUFBSSxFQUFFa0MsS0FBSyxLQUFJO2NBQ25DLE1BQU0vQixLQUFLLEdBQUc7Z0JBQ2I1RCxPQUFPLEVBQUVyQyxLQUFLLENBQUNpRCxRQUFRLENBQUNoRSxHQUFHLENBQUM2RyxJQUFJLENBQUM7Z0JBQ2pDQSxJQUFJO2dCQUNKOUYsS0FBSyxFQUFFbUk7ZUFDUDtjQUNERCxLQUFLLENBQUNoRixJQUFJLENBQUNTLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDbUgsb0JBQUEsQ0FBQUgsbUJBQW1CO2dCQUFBLEdBQUs5RixLQUFLO2dCQUFFb0MsR0FBRyxFQUFFTDtjQUFLLEVBQUksQ0FBQztZQUMzRCxDQUFDLENBQUM7WUFFRixPQUNDckUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM2QixZQUFBLENBQUFpQyxrQkFBa0I7Y0FBQzdELFNBQVMsRUFBRUg7WUFBRyxHQUNqQ2xCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsS0FBQSxDQUFBbUMsYUFBYTtjQUFDaEIsUUFBUSxFQUFFQTtZQUFRLEdBQ2hDbkUsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUNvSCxVQUFBLENBQUFHLFNBQVMsT0FBRyxFQUNiM0ksTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUM0QixLQUFBLENBQUFxQyxLQUFLLFFBQUVkLEtBQUssQ0FBUyxDQUNQLENBQ0k7VUFFdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUF2RSxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXdJLEtBQUEsR0FBQXhJLE9BQUE7VUFDQSxJQUFBOEssTUFBQSxHQUFBOUssT0FBQTtVQUNBLElBQUE4RixRQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQW9PLFNBQUEsR0FBQXBPLE9BQUE7VUFDTSxTQUFVbU8sU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQ0w1TixLQUFLLEVBQUU7Z0JBQUVTO2NBQUssQ0FBRTtjQUNoQm9GLEtBQUssRUFBRTtnQkFBRWxCLE1BQU0sRUFBRWtCO2NBQUs7WUFBRSxDQUN4QixHQUFHLElBQUFOLFFBQUEsQ0FBQUYsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTTtjQUFFb0U7WUFBSSxDQUFFLEdBQUcsSUFBQW9FLFNBQUEsQ0FBQVAsZUFBZSxHQUFFO1lBQ2xDLE1BQU07Y0FBRS9JO1lBQVEsQ0FBRSxHQUFHc0IsS0FBSztZQUUxQixNQUFNb0QsV0FBVyxHQUFHeEksS0FBSyxDQUFDQyxRQUFRLENBQUNvQyxhQUFhO1lBQ2hELE1BQU15RyxJQUFJLEdBQUcsRUFBRTtZQUNmLElBQUl1RSxPQUFPLEdBQUdyTixLQUFLLENBQUNDLFFBQVEsQ0FBQzRDLGFBQWEsQ0FBQy9DLEdBQUcsQ0FBQ2tKLElBQUksQ0FBQzNILEVBQUUsQ0FBQyxJQUFJLElBQUlrQixHQUFHLEVBQUU7WUFFcEVpRyxXQUFXLENBQUNyRSxPQUFPLENBQUMsQ0FBQ3dDLElBQUksRUFBRWtDLEtBQUssS0FBSTtjQUNuQyxNQUFNM0YsT0FBTyxHQUFHOEYsSUFBSSxDQUFDbEYsUUFBUSxDQUFDOEMsS0FBSyxDQUFDOUcsR0FBRyxDQUFDNkcsSUFBSSxDQUFDO2NBRTdDLE1BQU0yRyxLQUFLLEdBQTJCLEVBQUU7Y0FFeEMsSUFBSUQsT0FBTyxDQUFDck0sR0FBRyxDQUFDMkYsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCO2dCQUNBLE1BQU1YLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2tCQUNwQjtrQkFDQWhHLEtBQUssQ0FBQ0MsUUFBUSxDQUFDcUQsaUJBQWlCLENBQUMwRixJQUFJLENBQUMzSCxFQUFFLEVBQUVzRixJQUFJLENBQUM7Z0JBQ2hELENBQUM7Z0JBQ0RtQyxJQUFJLENBQUMvRSxJQUFJLENBQ1JTLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsS0FBQSxDQUFBeUIsR0FBRztrQkFBQ0MsR0FBRyxFQUFFdkMsSUFBSTtrQkFBQSxHQUFNMkcsS0FBSztrQkFBRXRILE9BQU8sRUFBRUE7Z0JBQU8sR0FDMUN4QixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ2tFLE1BQUEsQ0FBQUcsS0FBSztrQkFBQ0MsT0FBTyxFQUFFO2dCQUFJLEdBQUd2RCxJQUFJLENBQVMsQ0FDL0IsQ0FDTjtlQUNELE1BQU07Z0JBQ04sSUFBSSxDQUFDekQsT0FBTyxDQUFDN0IsRUFBRSxFQUFFaU0sS0FBSyxDQUFDdEQsUUFBUSxHQUFHLElBQUk7Z0JBQ3RDbEIsSUFBSSxDQUFDL0UsSUFBSSxDQUNSUyxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzRCLEtBQUEsQ0FBQXlCLEdBQUc7a0JBQUNDLEdBQUcsRUFBRSxPQUFPdkMsSUFBSSxFQUFFO2tCQUFBLEdBQU0yRztnQkFBSyxHQUNoQ3hKLFFBQVEsQ0FBQzZDLElBQUksQ0FBQyxDQUNWLENBQ047O1lBRUgsQ0FBQyxDQUFDO1lBQ0YsT0FBT25DLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDNEIsS0FBQSxDQUFBMkMsSUFBSSxRQUFFckIsSUFBSSxDQUFRO1VBQzNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQSxJQUFBdEUsTUFBQSxHQUFBeEYsT0FBQTtVQVdPLE1BQU11TyxZQUFZLEdBQUcvSSxNQUFBLENBQUFFLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFBQ3hFLE9BQUEsQ0FBQW9OLFlBQUEsR0FBQUEsWUFBQTtVQUM5RCxNQUFNVixlQUFlLEdBQUdBLENBQUEsS0FBTXJJLE1BQUEsQ0FBQUUsT0FBSyxDQUFDRyxVQUFVLENBQUMwSSxZQUFZLENBQUM7VUFBQ3BOLE9BQUEsQ0FBQTBNLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNacEUsSUFBQXJJLE1BQUEsR0FBQXhGLE9BQUE7VUFFQSxJQUFBdUksTUFBQSxHQUFBdkksT0FBQTtVQUNBLElBQUFrRyxXQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBOEYsUUFBQSxHQUFBOUYsT0FBQTtVQUNBLElBQUFvTyxTQUFBLEdBQUFwTyxPQUFBO1VBQ0EsSUFBQXdPLGFBQUEsR0FBQXhPLE9BQUE7VUFDQSxJQUFBeUksWUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUEyTixhQUFBLEdBQUEzTixPQUFBO1VBRU0sU0FBVTBOLFNBQVNBLENBQUM7WUFBRTFELElBQUk7WUFBRUg7VUFBSyxDQUFFO1lBQ3hDLE1BQU00RSxJQUFJLEdBQUd6RSxJQUFJLENBQUNsRCxLQUFLO1lBQ3ZCLE1BQU07Y0FDTHZHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUNOUyxLQUFLLEVBQUU7a0JBQUVDO2dCQUFRO2NBQUUsQ0FDbkI7Y0FDRG1GLEtBQUssRUFBRTtnQkFBRXNJLE1BQU07Z0JBQUUvRixXQUFXO2dCQUFFZ0c7Y0FBWTtZQUFFLENBQzVDLEdBQUcsSUFBQTdJLFFBQUEsQ0FBQUYsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTSxDQUFDUyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHZCxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDaEcsS0FBSyxDQUFDOEYsUUFBUSxJQUFJMkQsSUFBSSxDQUFDM0QsUUFBUSxDQUFDO1lBQy9FLE1BQU0sQ0FBQ3dDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0RCxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUN6RCxNQUFNLENBQUN3QyxlQUFlLEVBQUVDLGtCQUFrQixDQUFDLEdBQUd4RCxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDdEYsUUFBUSxDQUFDMEMsb0JBQW9CLENBQUM3QyxHQUFHLENBQUNrSixJQUFJLENBQUMzSCxFQUFFLENBQUMsRUFBRWdKLElBQUksSUFBSSxDQUFDLENBQUM7WUFDbkgsTUFBTSxDQUFDeEosS0FBSyxFQUFFcU0sUUFBUSxDQUFDLEdBQUcxSSxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDeUQsSUFBSSxDQUFDO1lBQzlDLE1BQU1mLEtBQUssR0FBR3pELE1BQUEsQ0FBQUUsT0FBSyxDQUFDd0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQyxJQUFBMUIsTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ2lDLElBQUksQ0FBQyxFQUFFLE1BQUs7Y0FDdEJrRSxRQUFRLENBQUNsRSxJQUFJLENBQUM7Y0FDZDFELFdBQVcsQ0FBQzBELElBQUksQ0FBQzNELFFBQVEsQ0FBQztZQUMzQixDQUFDLENBQUM7WUFFRixJQUFBbUIsTUFBQSxDQUFBTyxTQUFTLEVBQ1IsQ0FBQzlHLFFBQVEsQ0FBQyxFQUNWLE1BQUs7Y0FDSitILGtCQUFrQixDQUFDL0gsUUFBUSxDQUFDMEMsb0JBQW9CLENBQUM3QyxHQUFHLENBQUNrSixJQUFJLENBQUMzSCxFQUFFLENBQUMsRUFBRWdKLElBQUksSUFBSSxDQUFDLENBQUM7Y0FDekVwQyxLQUFLLENBQUNFLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDbkUsR0FBRyxDQUFDLGFBQWEsQ0FBQztjQUMxQyxNQUFNc0csT0FBTyxHQUFHb0QsWUFBWSxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFSCxJQUFJLENBQUM7Y0FDaERsRyxNQUFBLENBQUFlLEtBQUssQ0FBQ0MsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDO2NBQ25CakcsVUFBVSxDQUFDLE1BQU0yRCxLQUFLLENBQUNFLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ3RFLENBQUMsRUFDRCxTQUFTVyxJQUFJLENBQUMzSCxFQUFFLFVBQVUsQ0FDMUI7WUFFRCxNQUFNd00sUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckI3RSxJQUFJLENBQUNySixJQUFJLENBQUM7Z0JBQUU0SyxPQUFPLEVBQUU7Y0FBSSxDQUFFLENBQUM7WUFDN0IsQ0FBQztZQUVELElBQUl1RCxPQUFPLEdBQUc3TixRQUFRLENBQUM0QyxhQUFhLENBQUMvQyxHQUFHLENBQUNrSixJQUFJLENBQUMzSCxFQUFFLENBQUM7WUFDakQsSUFBSTBNLE9BQU8sR0FBRzlOLFFBQVEsQ0FBQzBDLG9CQUFvQixDQUFDN0MsR0FBRyxDQUFDa0osSUFBSSxDQUFDM0gsRUFBRSxDQUFDLElBQUksSUFBSWtCLEdBQUcsRUFBRTtZQUVyRSxNQUFNNkUsT0FBTyxHQUFHL0IsUUFBUSxHQUFHc0gsYUFBQSxDQUFBdkMsWUFBWSxHQUFHb0QsYUFBQSxDQUFBUCxZQUFZO1lBQ3RELE1BQU05RCxhQUFhLEdBQUdsSixRQUFRLENBQUNvQyxhQUFhLENBQUMxQixNQUFNO1lBQ25ELE1BQU15SSxhQUFhLEdBQUdELGFBQWEsSUFBSTRFLE9BQU8sRUFBRTFELElBQUksSUFBSSxDQUFDLENBQUM7WUFDMUQsTUFBTWhCLE9BQU8sR0FBR0QsYUFBYSxHQUFHRCxhQUFhO1lBQzdDLE1BQU1ySCxLQUFLLEdBQUc7Y0FBRStGLFFBQVE7Y0FBRWhILEtBQUssRUFBRTRNLElBQUk7Y0FBRWxPLEtBQUs7Y0FBRXlKLElBQUk7Y0FBRWdGLFFBQVEsRUFBRTdFLGFBQWEsR0FBR0M7WUFBYSxDQUFFO1lBQzdGLE9BQ0M1RSxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dILFNBQUEsQ0FBQUcsWUFBWSxDQUFDVSxRQUFRO2NBQUNuTSxLQUFLLEVBQUVBO1lBQUssR0FDbEMwQyxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzZCLFlBQUEsQ0FBQTZCLG9CQUFvQjtjQUFDdUUsUUFBUSxFQUFFQSxRQUFRO2NBQUVoSSxTQUFTLEVBQUM7WUFBa0IsR0FDckVyQixNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQzZCLFlBQUEsQ0FBQThCLGlCQUFpQixRQUNqQi9FLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQTtjQUFJQyxTQUFTLEVBQUMsYUFBYTtjQUFBLFdBQVVtRCxJQUFJLENBQUMzSDtZQUFFLEdBQzFDcU0sTUFBTSxDQUFDN00sS0FBSyxFLE1BQUk0TSxJQUFJLEVBQ3JCakosTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBO2NBQU82RCxHQUFHLEVBQUV4QjtZQUFLLEdBQ2ZOLFdBQVcsRSxNQUFJeUIsYUFBYSxFLEtBQUdELGFBQWEsQ0FDdEMsQ0FDSixFQUVMM0UsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUNWLFdBQUEsQ0FBQStCLE9BQU87Y0FBQ0MsTUFBTSxFQUFFbUMsT0FBTztjQUFFbEMsSUFBSSxFQUFDO1lBQVMsRUFBRyxDQUN4QixFQUNwQjNDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDd0IsT0FBTztjQUFDNEIsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDRCxDQUNBO1VBRTFCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBeEUsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUFrRyxXQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBa1AsZUFBQSxHQUFBbFAsT0FBQTtVQUNBLElBQUFtUCxPQUFBLEdBQUFuUCxPQUFBO1VBRUEsSUFBQThGLFFBQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBb1AsVUFBQSxHQUFBcFAsT0FBQTtVQUVNLFNBQVVNLElBQUlBLENBQUM7WUFBRUM7VUFBSyxDQUEyQjtZQUN0RCxNQUFNLENBQUM4RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHZCxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDaEcsS0FBSyxDQUFDOEYsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ2dKLFVBQVUsRUFBRWpKLEtBQUssQ0FBQyxHQUFHLElBQUFvQixNQUFBLENBQUE4SCxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDN00sS0FBSyxFQUFFOE0sUUFBUSxDQUFDLEdBQUdqSyxNQUFBLENBQUFFLE9BQUssQ0FBQ2EsUUFBUSxDQUFDaEcsS0FBSyxDQUFDb0MsS0FBSyxDQUFDO1lBRXJELElBQUF3TSxPQUFBLENBQUFwSCxTQUFTLEVBQUMsQ0FBQ3hILEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJrUCxRQUFRLENBQUNsUCxLQUFLLENBQUNvQyxLQUFLLENBQUM7Y0FDckIyRCxXQUFXLENBQUMvRixLQUFLLENBQUM4RixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDZ0osVUFBVSxJQUFJLENBQUMxTSxLQUFLLElBQUkwRCxRQUFRLEVBQUUsT0FBT2IsTUFBQSxDQUFBRSxPQUFBLENBQUFrQixhQUFBLENBQUNWLFdBQUEsQ0FBQXdKLGFBQWEsT0FBRztZQUMvRDtZQUNBLE1BQU1DLGNBQWMsR0FBRztjQUN0QnZKLEtBQUs7Y0FDTDdGLEtBQUs7Y0FDTGtCLG1CQUFtQixFQUFFbEIsS0FBSyxDQUFDUyxLQUFLLEVBQUVTO2FBQ2xDO1lBRUQsT0FDQytELE1BQUEsQ0FBQUUsT0FBQSxDQUFBa0IsYUFBQSxDQUFDZCxRQUFBLENBQUFMLGFBQWEsQ0FBQ3dKLFFBQVE7Y0FBQ25NLEtBQUssRUFBRTZNO1lBQWMsR0FDNUNuSyxNQUFBLENBQUFFLE9BQUEsQ0FBQWtCLGFBQUEsQ0FBQ3dJLFVBQUEsQ0FBQWpKLFNBQVMsT0FBRyxDQUNXO1VBRTNCIn0=