System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/components", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi0036Alert) {
      dependency_7 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_8 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_9 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedComponents) {
      dependency_10 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Spinner) {
      dependency_13 = _pragmateUi0036Spinner;
    }, function (_aimpactAilearnApp100ComponentsTabs) {
      dependency_14 = _aimpactAilearnApp100ComponentsTabs;
    }, function (_pragmateUi0036Collapsible) {
      dependency_15 = _pragmateUi0036Collapsible;
    }, function (_pragmateUi0036Components) {
      dependency_16 = _pragmateUi0036Components;
    }, function (_aimpactChat002SharedHooks) {
      dependency_17 = _aimpactChat002SharedHooks;
    }, function (_pragmateUi0036Toast) {
      dependency_18 = _pragmateUi0036Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/spinner', dependency_13], ['@aimpact/ailearn-app/components/tabs', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/components', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/toast', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
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
        hash: 2009398930,
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
              const isNew = this.uri.vars.get('id') === 'new';
              this.#store.view = this.uri.qs.get('view') === 'form' || isNew ? 'FORM' : 'GENERATE';
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
        hash: 651750974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          class StoreManager extends _model.ReactiveModel {
            #model;
            view = 'FORM';
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
            constructor() {
              super();
              this.reactiveProps(['view']);
            }
            async load(id) {
              if (this.#model?.id === id) {
                return;
              }
              if (id === 'new') id = undefined;
              if (this.#model && this.#model.id !== id) {
                this.#model = undefined;
              }
              this.#model = new _core.Lesson({
                id
              });
              globalThis.m = this.#model;
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
            async save(state = 'created') {
              try {
                this.fetching = true;
                this.#model.status = state;
                this.#model.userId = _session.sessionWrapper.userId;
                const response = await this.#model.publish();
                return response.status ? true : {
                  error: response.error
                };
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3473329235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useLessonContext = exports.LessonContext = void 0;
          var React = require("react");
          const LessonContext = React.createContext({});
          exports.LessonContext = LessonContext;
          const useLessonContext = () => React.useContext(LessonContext);
          exports.useLessonContext = useLessonContext;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/form/alert-message
      ******************************************/

      ims.set('./views/form/alert-message', {
        hash: 2498006017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertMessage = AlertMessage;
          var React = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("./context");
          function AlertMessage() {
            const {
              texts
            } = (0, _context.useClassFormContext)();
            return React.createElement(_alert.Alert, {
              mode: 'info',
              title: 'prueba',
              show: true
            }, texts.processAlert);
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/form/bullet-points/hooks/useBulletPoints
      ****************************************************************/

      ims.set('./views/form/bullet-points/hooks/useBulletPoints', {
        hash: 3146030461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBulletPoints = useBulletPoints;
          var _react = require("react");
          function useBulletPoints(handleChange, name, {
            minBulletPoints,
            maxBulletPoints,
            startValues = ['']
          }) {
            const [bulletPoints, setBulletPoints] = (0, _react.useState)(startValues);
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => handleChange({
              currentTarget: {
                name,
                value: updatedBulletPoints
              }
            });
            (0, _react.useEffect)(() => {
              handleBulletPointsChange(bulletPoints);
            }, [bulletPoints]);
            const handleDragStart = (_, index) => setDraggedIndex(index);
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setBulletPoints(newBulletPoints);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              setBulletPoints(updatedBulletPoints);
            };
            const handleKeyDown = (index, event) => {
              const isLastBulletPoint = index === bulletPoints.length - 1;
              const isNotEmpty = bulletPoints[index].trim() !== '';
              if (event.key === 'Tab') {
                event.preventDefault();
                if (isLastBulletPoint && isNotEmpty) {
                  addBulletPoint();
                } else if (!event.shiftKey && event.key === 'Tab') {
                  focusBulletPoint(index + 1);
                } else if (event.key === 'Tab' && event.shiftKey) {
                  focusBulletPoint(index - 1);
                }
              } else if (event.key === 'Backspace' && bulletPoints[index] === '' && bulletPoints.length > 1) {
                event.preventDefault();
                removeBulletPoint(index);
              }
            };
            const addBulletPoint = () => {
              if (bulletPoints.length < maxBulletPoints) {
                setBulletPoints(prevBulletPoints => [...prevBulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                setBulletPoints(prevBulletPoints => {
                  const updatedBulletPoints = [...prevBulletPoints];
                  updatedBulletPoints.splice(index, 1);
                  focusBulletPoint(updatedBulletPoints.length - 1);
                  return updatedBulletPoints;
                });
              }
            };
            const focusBulletPoint = index => {
              const inputElement = bulletPointRefs.current[index];
              if (inputElement) {
                inputElement.focus();
                inputElement.setSelectionRange(0, inputElement.value.length);
              }
            };
            const registerBulletPointRef = (index, element) => {
              bulletPointRefs.current[index] = element;
            };
            const canRemoveBulletPoint = bulletPoints.length > minBulletPoints;
            return {
              bulletPoints,
              handleInputChange,
              handleKeyDown,
              addBulletPoint,
              removeBulletPoint,
              registerBulletPointRef,
              canRemoveBulletPoint,
              handleDragOver,
              handleDragEnd,
              handleDragStart
            };
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/form/bullet-points/index
      ************************************************/

      ims.set('./views/form/bullet-points/index', {
        hash: 341116911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointForm = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _useBulletPoints = require("./hooks/useBulletPoints");
          var _context = require("../context");
          const BulletPointForm = ({
            handleChange,
            minBulletPoints = 1,
            maxBulletPoints = 10,
            fieldName
          }) => {
            const {
              texts
            } = (0, _context.useClassFormContext)();
            const {
              addBulletPoint,
              bulletPoints,
              canRemoveBulletPoint,
              handleInputChange,
              handleKeyDown,
              registerBulletPointRef,
              removeBulletPoint,
              handleDragEnd,
              handleDragOver,
              handleDragStart
            } = (0, _useBulletPoints.useBulletPoints)(handleChange, fieldName, {
              maxBulletPoints,
              minBulletPoints
            });
            return _react.default.createElement("div", {
              className: 'bullet-points-form'
            }, _react.default.createElement("div", {
              className: 'bullet-points-form-header'
            }, _react.default.createElement("p", null, texts.topics.description), _react.default.createElement(_form.Button, {
              variant: 'primary outline',
              label: 'Add Topic',
              onClick: addBulletPoint
            })), bulletPoints.map((point, index) => _react.default.createElement("div", {
              key: index,
              className: 'bullet-points-item',
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: 'drag',
              className: 'drag-bullet-point'
            }), _react.default.createElement("p", null, " ", index + 1, ". "), _react.default.createElement("input", {
              className: 'bullet-points-input',
              type: 'text',
              value: point,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            }), canRemoveBulletPoint && _react.default.createElement(_icons.Icon, {
              icon: 'delete',
              className: 'delete-bullet-point',
              onClick: () => removeBulletPoint(index)
            }))));
          };
          exports.BulletPointForm = BulletPointForm;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/form/context
      ************************************/

      ims.set('./views/form/context', {
        hash: 2463167991,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClassFormContext = exports.ClassFormContext = void 0;
          var React = require("react");
          const ClassFormContext = React.createContext({});
          exports.ClassFormContext = ClassFormContext;
          const useClassFormContext = () => React.useContext(ClassFormContext);
          exports.useClassFormContext = useClassFormContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/form/form
      *********************************/

      ims.set('./views/form/form', {
        hash: 1759645296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var React = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _form = require("pragmate-ui/form");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _bulletPoints = require("./bullet-points");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _context2 = require("../context");
          function Form() {
            const {
              store,
              texts
            } = (0, _context2.useLessonContext)();
            const defaultValues = {
              curriculumObjective: '',
              topicTitles: ['']
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState(store.fetching);
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              store.set(target.name, target.value);
              setError('');
            };
            const formDisabled = {
              disabled: !store.isValid
            };
            async function onSubmit(event) {
              try {
                event.preventDefault();
                if (!store.isValid) {
                  setError('Form is invalid');
                  return;
                }
                await store.save();
                _routing.routing.replaceState({}, null, `/lessons/management/${store.model.id}`);
              } catch (error) {
                console.error(error);
              }
            }
            const providerValues = {
              texts
            };
            return React.createElement(_context.ClassFormContext.Provider, {
              value: providerValues
            }, React.createElement("div", {
              className: 'class-view'
            }, React.createElement(_components.CollapsibleHeader, {
              title: texts.title
            }), React.createElement("form", {
              className: "class-form"
            }, React.createElement("span", null, React.createElement(_components.Input, {
              label: texts.curriculumObjective,
              name: "curriculumObjective",
              type: "text",
              onChange: handleChange,
              required: true
            })), React.createElement("div", {
              className: "form__field"
            }, React.createElement("h3", null, texts.topics.title), React.createElement("hr", null), React.createElement(_bulletPoints.BulletPointForm, {
              handleChange: handleChange,
              fieldName: "topicTitles"
            })), React.createElement(_form.Button, {
              label: texts.actions.next,
              type: "submit",
              icon: "save",
              onClick: onSubmit,
              fetching: fetching,
              ...formDisabled
            }))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/generator/index
      ***************************************/

      ims.set('./views/generator/index', {
        hash: 2469720277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Generator = Generator;
          var React = require("react");
          var _context = require("../context");
          var _lessons = require("./lessons");
          var _topics = require("./topics");
          var _components = require("@aimpact/chat/shared/components");
          function Generator() {
            const {
              store,
              store: {
                model
              },
              texts
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const cls = `lesson-view${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: model.curriculumObjective,
              subtitle: texts.generator.title
            }), React.createElement(_lessons.LessonContentGenerator, null), React.createElement(_topics.TopicsGenerator, null));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/generator/lessons/content
      *************************************************/

      ims.set('./views/generator/lessons/content', {
        hash: 3815450897,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContent = LessonContent;
          var React = require("react");
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
            const [fetching, setFetching] = React.useState(store.fetching);
            const [value, setValue] = React.useState(element?.value);
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
            React.useEffect(() => {
              if (element.id && !element.value) element.load(element.id);
            }, [element.id]);
            const cls = `lesson__content visible ${fetching ? ' is-fetching' : ''}`;
            if (!value && element.id) {
              return React.createElement("article", {
                className: cls
              }, React.createElement(_spinner.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const Control = element?.value ? _content.AreaContent : _emptyContent.EmptyContent;
            return React.createElement("article", {
              className: cls
            }, React.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/generator/lessons/index
      ***********************************************/

      ims.set('./views/generator/lessons/index', {
        hash: 482720227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContentGenerator = LessonContentGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _content = require("./content");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _collapsible = require("pragmate-ui/collapsible");
          function LessonContentGenerator() {
            const {
              store,
              texts: {
                lesson: texts
              }
            } = (0, _context.useLessonContext)();
            const [selected, setSelected] = React.useState('content');
            const {
              elements
            } = texts;
            const panesTitles = Object.keys(elements);
            const onChange = (event, index) => setSelected(panesTitles[index]);
            const tabs = [];
            const panes = [];
            panesTitles.forEach((item, index) => {
              tabs.push(React.createElement(_tabs.Tab, {
                key: item
              }, item));
              panes.push(React.createElement(_content.LessonContent, {
                key: item,
                area: item
              }));
            });
            return React.createElement("article", {
              className: "lesson-generator lesson-generator--introduction"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", {
              className: "topic-title"
            }, texts.step)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, tabs), React.createElement(_tabs.Panes, null, panes)))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/generator/shared/LoadingBlock
      *****************************************************/

      ims.set('./views/generator/shared/LoadingBlock', {
        hash: 2887429678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoadingBlock = LoadingBlock;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          function LoadingBlock() {
            const cls = `loading__block`;
            return React.createElement("article", {
              className: cls
            }, React.createElement(_components.Spinner, {
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
        hash: 2494349224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkedContent = MarkedContent;
          var React = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          function MarkedContent({
            content
          }) {
            const mark = (0, _hooks.useMarked)();
            return React.createElement("div", {
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
        hash: 290796140,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaContent = AreaContent;
          var React = require("react");
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
            return React.createElement("div", {
              className: "content-wrapper"
            }, React.createElement(Control, {
              content: element.value
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/empty-content
      ******************************************************/

      ims.set('./views/generator/shared/empty-content', {
        hash: 974938728,
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
            }, _react.default.createElement("h4", null, _react.default.createElement("strong", null, " ", texts.title), " ", _react.default.createElement("br", null), message));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/generator/shared/questions
      **************************************************/

      ims.set('./views/generator/shared/questions', {
        hash: 3957922382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionComponent = QuestionComponent;
          exports.QuestionsComponent = QuestionsComponent;
          exports.TopicComponent = TopicComponent;
          var React = require("react");
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
              return React.createElement("div", null, React.createElement(_alert.Alert, null, React.createElement("h5", null, texts.assessmentReview)), data.assessment.map((topic, index) => React.createElement(TopicComponent, {
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
            return React.createElement("div", null, React.createElement("h4", null, topic.title), topic.questions.map((question, index) => React.createElement(QuestionComponent, {
              key: index,
              question: question
            })));
          }
          function QuestionComponent({
            question
          }) {
            return React.createElement("div", null, React.createElement("h3", null, question.text), React.createElement("ul", null, question.options.map((option, index) => React.createElement(OptionComponent, {
              key: index,
              option: option,
              isCorrect: index === question.correct_answer
            }))));
          }
          function OptionComponent({
            option,
            isCorrect
          }) {
            return React.createElement("li", null, isCorrect ? React.createElement("span", {
              className: "correct"
            }, option) : option);
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/generator/shared/regenerate-form
      ********************************************************/

      ims.set('./views/generator/shared/regenerate-form', {
        hash: 2063350269,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = RegenerateForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          function RegenerateForm({
            closeModal,
            submit
          }) {
            const [value, setValue] = _react.default.useState('');
            const [error, setError] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useLessonContext)();
            function handleChange(event) {
              const {
                value: textAreaValue
              } = event.target;
              setValue(textAreaValue);
            }
            function handleClose() {
              setError(false);
              setLoading(false);
              setValue('');
              closeModal();
            }
            const handleSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await submit(value);
              /* 	if (!response.status) setError(response.error); */
              _toast.toast.success('Regenerating...');
              handleClose();
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: "regenerate-form"
            }, _react.default.createElement("h1", null, texts.generator.action), error && _react.default.createElement("div", {
              className: "error error-container"
            }, error), _react.default.createElement(_form.Textarea, {
              rows: 5,
              value: value,
              placeholder: "Agrega tu contenido...",
              onChange: handleChange
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: "close-circle",
              label: "Cancel",
              variant: "link",
              onClick: handleClose
            }), _react.default.createElement(_form.Button, {
              type: "submit",
              icon: "save",
              onClick: handleSubmit,
              label: "Submit",
              loading: loading
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/topics/index
      **********************************************/

      ims.set('./views/generator/topics/index', {
        hash: 1556789436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicsGenerator = TopicsGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _topic = require("./topic");
          function TopicsGenerator() {
            const {
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            return React.createElement(React.Fragment, null, model.topics.items?.map((item, index) => React.createElement(_topic.TopicItem, {
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
        hash: 2310783975,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ElementTopicContent = ElementTopicContent;
          var React = require("react");
          var _context = require("../context");
          var _emptyContent = require("../../../shared/empty-content");
          var _content = require("../../../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _LoadingBlock = require("../../../shared/LoadingBlock");
          function ElementTopicContent({
            topic,
            element
          }) {
            const {
              selected
            } = (0, _context.useTopicContext)();
            const [value, setValue] = React.useState(element?.value);
            const [fetching, setFetching] = React.useState(element?.fetching);
            (0, _hooks.useBinder)([element], () => {
              setValue(element.value);
              setFetching(element.fetching);
            });
            const cls = `lesson__content ${fetching ? ' is-fetching' : ''}`;
            const hasElements = !element || !!element?.value;
            if (!hasElements && fetching) return React.createElement(_LoadingBlock.LoadingBlock, null);
            const specs = {
              area: selected,
              model: topic,
              element
            };
            const Control = hasElements ? _content.AreaContent : _emptyContent.EmptyContent;
            return React.createElement("article", {
              className: cls
            }, React.createElement(Control, {
              ...specs
            }));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content/TopicContent
      *******************************************************************/

      ims.set('./views/generator/topics/topic/content/TopicContent', {
        hash: 463760847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicContent = TopicContent;
          var React = require("react");
          var _context = require("../../../../context");
          var _ElementTopicContent = require("./ElementTopicContent");
          var _collapsible = require("pragmate-ui/collapsible");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const [fetching, setFetching] = React.useState(store.fetching || item.fetching);
            const [selected, setSelected] = React.useState('content');
            const [topic, setTopic] = React.useState(item);
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
              tabs.push(React.createElement(_tabs.Tab, {
                key: `tab.${area}`
              }, elements[area]));
              panes.push(React.createElement(_ElementTopicContent.ElementTopicContent, {
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
            return React.createElement(_collapsible.CollapsibleContent, {
              className: cls
            }, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, tabs), React.createElement(_tabs.Panes, null, panes)));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/context
      ******************************************************/

      ims.set('./views/generator/topics/topic/context', {
        hash: 3800438969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTopicContext = exports.TopicContext = void 0;
          var React = require("react");
          const TopicContext = React.createContext({});
          exports.TopicContext = TopicContext;
          const useTopicContext = () => React.useContext(TopicContext);
          exports.useTopicContext = useTopicContext;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/index
      ****************************************************/

      ims.set('./views/generator/topics/topic/index', {
        hash: 1657894630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var React = require("react");
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
              texts: {
                titles
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = React.useState(store.fetching || item.fetching);
            const [selected, setSelected] = React.useState('content');
            // always opened the fist topic.
            const [visible, setVisible] = React.useState(index === 0);
            const [topic, setTopic] = React.useState(item);
            (0, _hooks.useBinder)([item], () => {
              setTopic(item);
              setFetching(item.fetching);
            });
            const value = {
              selected,
              topic: name,
              store
            };
            const onToggle = () => {
              item.load({
                content: true
              });
            };
            const Control = fetching ? _LoadingBlock.LoadingBlock : _TopicContent.TopicContent;
            return React.createElement(_context2.TopicContext.Provider, {
              value: value
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle,
              className: "lesson-generator"
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", {
              className: "topic-title"
            }, titles.topic, ": ", name)), React.createElement(Control, {
              item: item
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2336855578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;
          var React = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _form = require("./form/form");
          var _generator = require("./generator");
          function Page({
            store
          }) {
            const [view, setView] = React.useState(store.view);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            const VIEWS = {
              FORM: _form.Form,
              GENERATE: _generator.Generator
            };
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready || fetching) return React.createElement(_components.PreloadScreen, null);
            const providerValues = {
              texts,
              store,
              setView
            };
            const Control = VIEWS[view];
            return React.createElement(_context.LessonContext.Provider, {
              value: providerValues
            }, React.createElement(Control, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImlzTmV3IiwidXJpIiwidmFycyIsImdldCIsInZpZXciLCJxcyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJpZCIsInVuZGVmaW5lZCIsIkxlc3NvbiIsImdsb2JhbFRoaXMiLCJtIiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJlcnJvciIsImUiLCJjb25zb2xlIiwiUmVhY3QiLCJMZXNzb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJBbGVydE1lc3NhZ2UiLCJ0ZXh0cyIsInVzZUNsYXNzRm9ybUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnQiLCJtb2RlIiwidGl0bGUiLCJwcm9jZXNzQWxlcnQiLCJfcmVhY3QiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwic3RhcnRWYWx1ZXMiLCJidWxsZXRQb2ludHMiLCJzZXRCdWxsZXRQb2ludHMiLCJ1c2VTdGF0ZSIsImJ1bGxldFBvaW50UmVmcyIsInVzZVJlZiIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwidXNlRWZmZWN0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsImluZGV4IiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJpc05vdEVtcHR5Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50IiwicHJldkJ1bGxldFBvaW50cyIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlZ2lzdGVyQnVsbGV0UG9pbnRSZWYiLCJlbGVtZW50IiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJfZm9ybSIsIl9pY29ucyIsIl91c2VCdWxsZXRQb2ludHMiLCJCdWxsZXRQb2ludEZvcm0iLCJmaWVsZE5hbWUiLCJkZWZhdWx0IiwiY2xhc3NOYW1lIiwidG9waWNzIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNsYXNzRm9ybUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9idWxsZXRQb2ludHMiLCJfcm91dGluZyIsIl9jb250ZXh0MiIsIkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsInVzZUJpbmRlciIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25TdWJtaXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHJvdmlkZXJWYWx1ZXMiLCJQcm92aWRlciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW5wdXQiLCJyZXF1aXJlZCIsImFjdGlvbnMiLCJuZXh0IiwiX2xlc3NvbnMiLCJfdG9waWNzIiwiR2VuZXJhdG9yIiwiY2xzIiwic3VidGl0bGUiLCJnZW5lcmF0b3IiLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiX2VtcHR5Q29udGVudCIsIl9jb250ZW50IiwiX3NwaW5uZXIiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsImVsZW1lbnRzIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsIl90YWJzIiwiX2NvbGxhcHNpYmxlIiwibGVzc29uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInBhbmVzVGl0bGVzIiwiT2JqZWN0Iiwia2V5cyIsInRhYnMiLCJwYW5lcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsIlRhYiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbiIsInN0ZXAiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsIlBhbmVzIiwiTG9hZGluZ0Jsb2NrIiwic2l6ZSIsIk1hcmtlZENvbnRlbnQiLCJjb250ZW50IiwibWFyayIsInVzZU1hcmtlZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3F1ZXN0aW9ucyIsIl9NYXJrZWRDb250ZW50IiwiUXVlc3Rpb25zQ29tcG9uZW50IiwiZW1wdHkiLCJnZW5lcmF0ZSIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImFzc2Vzc21lbnRSZXZpZXciLCJhc3Nlc3NtZW50IiwiVG9waWNDb21wb25lbnQiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsIl90b2FzdCIsIlJlZ2VuZXJhdGVGb3JtIiwiY2xvc2VNb2RhbCIsInN1Ym1pdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwidG9hc3QiLCJzdWNjZXNzIiwiYWN0aW9uIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJfdG9waWMiLCJGcmFnbWVudCIsIlRvcGljSXRlbSIsIl9Mb2FkaW5nQmxvY2siLCJFbGVtZW50VG9waWNDb250ZW50IiwidXNlVG9waWNDb250ZXh0IiwiaGFzRWxlbWVudHMiLCJfRWxlbWVudFRvcGljQ29udGVudCIsIlRvcGljQ29udGVudCIsInRpdGxlcyIsInNldFRvcGljIiwiVG9waWNDb250ZXh0IiwiX1RvcGljQ29udGVudCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwib25Ub2dnbGUiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2dlbmVyYXRvciIsInNldFZpZXciLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlZJRVdTIiwiRk9STSIsIkdFTkVSQVRFIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaG9va3MvdXNlQnVsbGV0UG9pbnRzLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vZm9ybS50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9jb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9Mb2FkaW5nQmxvY2sudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC9NYXJrZWRDb250ZW50LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcmVnZW5lcmF0ZS1mb3JtLnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQvRWxlbWVudFRvcGljQ29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCIvdHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBRWpELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjtZQUNBLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBUSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBRyxJQUFJQSxDQUFBO2NBQ0gsTUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLO2NBQy9DLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLElBQUksR0FBRyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxJQUFJSCxLQUFLLEdBQUcsTUFBTSxHQUFHLFVBQVU7Y0FDcEYsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQ0wsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQzs7VUFDQUksT0FBQSxD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