System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.15/model/gclassroom", "react@18.2.0", "@aimpact/ailearn-app@0.0.15/classworks/assign", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/spinner", "pragmate-ui@0.0.3/toast", "@aimpact/ailearn-app@0.0.15/components/tabs", "pragmate-ui@0.0.3/collapsible", "pragmate-ui@0.0.3/badge", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.3/alert", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_2 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_3 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0015ModelGclassroom) {
      dependency_5 = _aimpactAilearnApp0015ModelGclassroom;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactAilearnApp0015ClassworksAssign) {
      dependency_7 = _aimpactAilearnApp0015ClassworksAssign;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_9 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Spinner) {
      dependency_10 = _pragmateUi003Spinner;
    }, function (_pragmateUi003Toast) {
      dependency_11 = _pragmateUi003Toast;
    }, function (_aimpactAilearnApp0015ComponentsTabs) {
      dependency_12 = _aimpactAilearnApp0015ComponentsTabs;
    }, function (_pragmateUi003Collapsible) {
      dependency_13 = _pragmateUi003Collapsible;
    }, function (_pragmateUi003Badge) {
      dependency_14 = _pragmateUi003Badge;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi003Alert) {
      dependency_16 = _pragmateUi003Alert;
    }, function (_aimpactChat101SharedComponents) {
      dependency_17 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.15"], ["@aimpact/ailearn-app", "0.0.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.15/classworks/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/model/gclassroom', dependency_5], ['react', dependency_6], ['@aimpact/ailearn-app/classworks/assign', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/spinner', dependency_10], ['pragmate-ui/toast', dependency_11], ['@aimpact/ailearn-app/components/tabs', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/badge', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/alert', dependency_16], ['@aimpact/chat/shared/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.15/classworks/management.widget",
        "is": "page",
        "route": "/classworks/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.15/classworks/management.widget');
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
          const LessonContext = exports.LessonContext = _react.default.createContext({});
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
        hash: 632662557,
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
              const type = panesTitles[selected];
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
        hash: 152314673,
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
          const TopicContext = exports.TopicContext = _react.default.createContext({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsIm1vZGVsIiwicHJvZ3Jlc3MiLCJjbGVhciIsImV4cG9ydHMiLCJfbW9kZWwiLCJfY29yZSIsIl9nY2xhc3Nyb29tIiwiUmVhY3RpdmVNb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJnY2xhc3Nyb29tcyIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImNvdXJzZXMiLCJnY2xhc3Nyb29tIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsIlByb2dyZXNzTWFuYWdlciIsInBhcmVudCIsInRvcGljc0VsZW1lbnRzIiwibGVzc29uRWxlbWVudHMiLCJ0b3BpY0VsZW1lbnRzIiwibGVzc29uUGVuZGluZ3MiLCJTZXQiLCJsZXNzb25FbGVtZW50c1BlbmRpbmciLCJ0b3BpY3NQZW5kaW5ncyIsIk1hcCIsInRvcGljRWxlbWVudHNQZW5kaW5nIiwibGVzc29uRWxlbWVudHNVcGRhdGVkIiwidG9waWNzVXBkYXRlZCIsInRpbWVzIiwiX3AiLCJjdXJyZW50VGltZW91dCIsImNsZWFyTGVzc29uVXBkYXRlZCIsImVsZW1lbnQiLCJzcGxpY2UiLCJpbmRleE9mIiwidHJpZ2dlckV2ZW50IiwiY2xlYXJUb3BpY1VwZGF0ZWQiLCJ0b3BpY0lkIiwicHJvY2VzcyIsImRhdGEiLCJsZXNzb25DaGFuZ2VzIiwibGVmdCIsInJlZHVjZSIsImFjYyIsImVsZW1lbnRzIiwicHVzaCIsImRlbGV0ZSIsImFkZCIsInRvcGljcyIsImZvckVhY2giLCJ0b3BpY0NoYW5nZXMiLCJsYXN0VG9waWNEYXRhIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIl9yZWFjdCIsIkxlc3NvbkNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJfbGVzc29ucyIsIl90b3BpY3MiLCJfYXNzaWduIiwiX2NvbXBvbmVudHMiLCJHZW5lcmF0b3IiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImNscyIsImhhbmRsZUNsb3NlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiQnV0dG9uIiwib25DbGljayIsImFzc2lnbiIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJTaGFyZUxlc3NvbiIsImxlc3NvbiIsIm9uQ2xvc2UiLCJfZW1wdHlDb250ZW50IiwiX2NvbnRlbnQiLCJfaG9va3MiLCJfc3Bpbm5lciIsIkxlc3NvbkNvbnRlbnQiLCJhcmVhIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlQmluZGVyIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsInR5cGUiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJfdG9hc3QiLCJfdGFicyIsIl9jb2xsYXBzaWJsZSIsIl90YWJzMiIsInRvdGFsTGVnZW5kIiwibGVzc29uVXBkYXRlZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJlbGVtZW50c1VwZGF0ZWQiLCJzZXRFbGVtZW50c1VwZGF0ZWQiLCJ0b3RhbCIsInVzZVJlZiIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2FzdCIsImluZm8iLCJwYW5lc1RpdGxlcyIsIk9iamVjdCIsImtleXMiLCJvbkNoYW5nZSIsImV2ZW50IiwiaW5kZXgiLCJ0YWJzIiwicGFuZXMiLCJpdGVtIiwiVGFiIiwia2V5IiwidG90YWxFbGVtZW50cyIsImVsZW1lbnRzUmVhZHkiLCJsb2FkaW5nIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInN0ZXAiLCJyZWYiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiTGVzc29uVGFicyIsIlBhbmVzIiwiX2JhZGdlIiwiYXR0cnMiLCJkaXNhYmxlZCIsIkJhZGdlIiwidmlzaWJsZSIsIlRhYnMiLCJMb2FkaW5nQmxvY2siLCJzaXplIiwiTWFya2VkQ29udGVudCIsImNvbnRlbnQiLCJtYXJrIiwidXNlTWFya2VkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcXVlc3Rpb25zIiwiX01hcmtlZENvbnRlbnQiLCJRdWVzdGlvbnNDb21wb25lbnQiLCJlbXB0eSIsImdlbmVyYXRlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsIl9hbGVydCIsIkpTT04iLCJwYXJzZSIsIkFsZXJ0IiwiYXNzZXNzbWVudFJldmlldyIsImFzc2Vzc21lbnQiLCJtYXAiLCJUb3BpY0NvbXBvbmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsIl90b3BpYyIsIkZyYWdtZW50IiwiVG9waWNJdGVtIiwiX0xvYWRpbmdCbG9jayIsIkVsZW1lbnRUb3BpY0NvbnRlbnQiLCJ1c2VUb3BpY0NvbnRleHQiLCJoYXNFbGVtZW50cyIsIl9FbGVtZW50VG9waWNDb250ZW50IiwiX1RvcGljVGFicyIsIlRvcGljQ29udGVudCIsInNldFRvcGljIiwiVG9waWNUYWJzIiwiX2NvbnRleHQyIiwidXBkYXRlcyIsInByb3BzIiwiVG9waWNDb250ZXh0IiwiX1RvcGljQ29udGVudCIsIm5hbWUiLCJ0aXRsZXMiLCJ0b3BpY1VwZGF0ZWQiLCJyZXBsYWNlIiwib25Ub2dnbGUiLCJ1cGRhdGVkIiwicGVuZGluZyIsInBlbmRpbmdzIiwiUHJvdmlkZXIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2dlbmVyYXRvciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiIsInByb3ZpZGVyVmFsdWVzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvUHJvZ3Jlc3NNYW5hZ2VyLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvdGFicy50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGVudC9FbGVtZW50VG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvVG9waWNUYWJzLnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBRWpELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjtZQUNBLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxD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