System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/spinner", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/collapsible", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_aimpactChat101SharedComponents) {
      dependency_10 = _aimpactChat101SharedComponents;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Toast) {
      dependency_18 = _pragmateUi0036Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_19 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2834845651,
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
                const response = await store.save();
                console.log(99, response);
                //routing.replaceState({}, null, `/lessons/management/${store.model.id}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwiaXNOZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwidmlldyIsInFzIiwibG9hZCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJnbG9iYWxUaGlzIiwibSIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJzYXZlIiwic3RhdGUiLCJmZXRjaGluZyIsInN0YXR1cyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwiZXJyb3IiLCJlIiwiY29uc29sZSIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwiQWxlcnQiLCJtb2RlIiwidGl0bGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwic3RhcnRWYWx1ZXMiLCJidWxsZXRQb2ludHMiLCJzZXRCdWxsZXRQb2ludHMiLCJidWxsZXRQb2ludFJlZnMiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInByZXZCdWxsZXRQb2ludHMiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiQnVsbGV0UG9pbnRGb3JtIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwidG9waWNzIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNsYXNzRm9ybUNvbnRleHQiLCJ1c2VDbGFzc0Zvcm1Db250ZXh0IiwiRm9ybSIsInN0b3JlIiwiZGVmYXVsdFZhbHVlcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25TdWJtaXQiLCJsb2ciLCJwcm92aWRlclZhbHVlcyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbnB1dCIsInJlcXVpcmVkIiwiYWN0aW9ucyIsIm5leHQiLCJHZW5lcmF0b3IiLCJjbHMiLCJzdWJ0aXRsZSIsImdlbmVyYXRvciIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsImVsZW1lbnRzIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInNwZWNzIiwidXNlRWZmZWN0IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJBcmVhQ29udGVudCIsIkVtcHR5Q29udGVudCIsImxlc3NvbiIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwYW5lc1RpdGxlcyIsIk9iamVjdCIsImtleXMiLCJ0YWJzIiwicGFuZXMiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJUYWIiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW4iLCJzdGVwIiwiQ29sbGFwc2libGVDb250ZW50IiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJQYW5lcyIsIkxvYWRpbmdCbG9jayIsInNpemUiLCJNYXJrZWRDb250ZW50IiwiY29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImVtcHR5IiwiZ2VuZXJhdGUiLCJtZXNzYWdlIiwiZ2VuZXJhdGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJhc3Nlc3NtZW50UmV2aWV3IiwiYXNzZXNzbWVudCIsIlRvcGljQ29tcG9uZW50IiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJRdWVzdGlvbkNvbXBvbmVudCIsInRleHQiLCJvcHRpb25zIiwib3B0aW9uIiwiT3B0aW9uQ29tcG9uZW50IiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJSZWdlbmVyYXRlRm9ybSIsImNsb3NlTW9kYWwiLCJzdWJtaXQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInRvYXN0Iiwic3VjY2VzcyIsImFjdGlvbiIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiVG9waWNJdGVtIiwiRWxlbWVudFRvcGljQ29udGVudCIsImhhc0VsZW1lbnRzIiwiVG9waWNDb250ZW50IiwidGl0bGVzIiwic2V0VG9waWMiLCJUb3BpY0NvbnRleHQiLCJ1c2VUb3BpY0NvbnRleHQiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIm9uVG9nZ2xlIiwic2V0VmlldyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlZJRVdTIiwiRk9STSIsIkdFTkVSQVRFIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCJ0cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaG9va3MvdXNlQnVsbGV0UG9pbnRzLnRzIiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vZm9ybS50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL0xvYWRpbmdCbG9jay50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcmVnZW5lcmF0ZS1mb3JtLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L0VsZW1lbnRUb3BpY0NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50L1RvcGljQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRleHQudHMiLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19