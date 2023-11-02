System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.11/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@0.0.11/classworks/assign", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/spinner", "pragmate-ui@0.0.37/toast", "@aimpact/ailearn-app@0.0.11/components/tabs", "pragmate-ui@0.0.37/collapsible", "pragmate-ui@0.0.37/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.37/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0011ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0011ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0011ClassworksAssign) {
      dependency_7 = _aimpactAilearnApp0011ClassworksAssign;
    }, function (_pragmateUi0037Components) {
      dependency_8 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_9 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Spinner) {
      dependency_10 = _pragmateUi0037Spinner;
    }, function (_pragmateUi0037Toast) {
      dependency_11 = _pragmateUi0037Toast;
    }, function (_aimpactAilearnApp0011ComponentsTabs) {
      dependency_12 = _aimpactAilearnApp0011ComponentsTabs;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/classworks/assign', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/spinner', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/badge', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/management.widget",
        "is": "page",
        "route": "/classworks/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/classworks/management.widget');
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
        hash: 3646140698,
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
          var _assign = require("@aimpact/ailearn-app/classworks/assign");
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
            }, texts.assign))), _react.default.createElement(_lessons.LessonContentGenerator, null), _react.default.createElement(_topics.TopicsGenerator, null), showModal && _react.default.createElement(_assign.ShareLesson, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2SyxLQUFLLElBQUkrQyxRQUFRLEVBQUUsT0FBT04sNkJBQUNrSSx5QkFBYSxPQUFHO1lBQy9EO1lBQ0EsTUFBTUMsY0FBYyxHQUFHO2NBQ3RCOUgsS0FBSztjQUNMckQsS0FBSztjQUNMWixtQkFBbUIsRUFBRVksS0FBSyxDQUFDbEIsS0FBSyxFQUFFTTthQUNsQztZQUVELE9BQ0M0RCw2QkFBQ0Qsc0JBQWEsQ0FBQzhILFFBQVE7Y0FBQ25LLEtBQUssRUFBRXlLO1lBQWMsR0FDNUNuSSw2QkFBQ0ksb0JBQVMsT0FBRyxDQUNXO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJoaWRlIiwibW9kZWwiLCJwcm9ncmVzcyIsImNsZWFyIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiZ2NsYXNzcm9vbXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwic3RvcmUiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsImxlc3NvbkVsZW1lbnRzIiwidG9waWNFbGVtZW50cyIsIlNldCIsImxlc3NvbkVsZW1lbnRzUGVuZGluZyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInBhcmVudCIsIl9wIiwiY2xlYXJMZXNzb25VcGRhdGVkIiwiZWxlbWVudCIsInNwbGljZSIsImluZGV4T2YiLCJ0cmlnZ2VyRXZlbnQiLCJjbGVhclRvcGljVXBkYXRlZCIsInRvcGljSWQiLCJwcm9jZXNzIiwiZGF0YSIsImxlc3NvbkNoYW5nZXMiLCJsZWZ0IiwicmVkdWNlIiwiYWNjIiwiZWxlbWVudHMiLCJwdXNoIiwiZGVsZXRlIiwiYWRkIiwidG9waWNzIiwiZm9yRWFjaCIsInRvcGljQ2hhbmdlcyIsImxhc3RUb3BpY0RhdGEiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTGVzc29uQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2VuZXJhdG9yIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJjbHMiLCJoYW5kbGVDbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsImFzc2lnbiIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJ0eXBlIiwiQ29udHJvbCIsIkFyZWFDb250ZW50IiwiRW1wdHlDb250ZW50IiwidG90YWxMZWdlbmQiLCJsZXNzb25VcGRhdGVkIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImVsZW1lbnRzVXBkYXRlZCIsInNldEVsZW1lbnRzVXBkYXRlZCIsInRvdGFsIiwidXNlUmVmIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvYXN0IiwiaW5mbyIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJpbmRleCIsInRhYnMiLCJwYW5lcyIsIml0ZW0iLCJUYWIiLCJrZXkiLCJ0b3RhbEVsZW1lbnRzIiwiZWxlbWVudHNSZWFkeSIsImxvYWRpbmciLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwic3RlcCIsInJlZiIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJMZXNzb25UYWJzIiwiUGFuZXMiLCJhdHRycyIsImRpc2FibGVkIiwiQmFkZ2UiLCJ2aXNpYmxlIiwiVGFicyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiSlNPTiIsInBhcnNlIiwiQWxlcnQiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIm1hcCIsIlRvcGljQ29tcG9uZW50IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiUXVlc3Rpb25Db21wb25lbnQiLCJ0ZXh0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIk9wdGlvbkNvbXBvbmVudCIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwiVG9waWNJdGVtIiwiRWxlbWVudFRvcGljQ29udGVudCIsImhhc0VsZW1lbnRzIiwiVG9waWNDb250ZW50Iiwic2V0VG9waWMiLCJUb3BpY1RhYnMiLCJ1cGRhdGVzIiwicHJvcHMiLCJUb3BpY0NvbnRleHQiLCJ1c2VUb3BpY0NvbnRleHQiLCJuYW1lIiwidGl0bGVzIiwidG9waWNVcGRhdGVkIiwicmVwbGFjZSIsIm9uVG9nZ2xlIiwidXBkYXRlZCIsInBlbmRpbmciLCJwZW5kaW5ncyIsIlByb3ZpZGVyIiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9Qcm9ncmVzc01hbmFnZXIudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9sZXNzb25zL2NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=