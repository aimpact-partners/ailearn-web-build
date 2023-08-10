System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/components", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
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
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk101Session) {
      dependency_5 = _aimpactChatSdk101Session;
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
    }, function (_aimpactAilearnApp100ComponentsTabs) {
      dependency_13 = _aimpactAilearnApp100ComponentsTabs;
    }, function (_pragmateUi0036Spinner) {
      dependency_14 = _pragmateUi0036Spinner;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi0036Toast) {
      dependency_16 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Components) {
      dependency_17 = _pragmateUi0036Components;
    }, function (_beyondJsKernel019Styles) {
      dependency_18 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/classes/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/ailearn-app/components/tabs', dependency_13], ['pragmate-ui/spinner', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/kernel/styles', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/classes/management.widget",
        "is": "page",
        "route": "/classes/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/classes/management.widget');
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
        hash: 4103358774,
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
                _routing.routing.replaceState({}, null, `/classes/management/${store.model.id}`);
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
        hash: 127337832,
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
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
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
            const onChange = (event, index) => {
              if (index !== 1) return;
              model.topics.loadFirst();
            };
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: model.curriculumObjective,
              subtitle: texts.generator.title
            }), React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, {
              active: 0
            }, React.createElement(_tabs.Tab, null, texts.titles.lessons), React.createElement(_tabs.Tab, null, texts.titles.topics)), React.createElement(_tabs.Panes, null, React.createElement(_lessons.LessonContentGenerator, null), React.createElement(_topics.TopicsGenerator, null))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/generator/lessons/content
      *************************************************/

      ims.set('./views/generator/lessons/content', {
        hash: 2225862101,
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
              setValue(element.value);
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
        hash: 2641518360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LessonContentGenerator = LessonContentGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _content = require("./content");
          var _regenerateForm = require("../shared/regenerate-form");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          function LessonContentGenerator() {
            const {
              store,
              texts: {
                lesson: texts
              }
            } = (0, _context.useLessonContext)();
            const {
              model
            } = store;
            const [fetching, setFetching] = React.useState(store.fetching);
            const [selected, setSelected] = React.useState('content');
            const dialogRef = React.useRef(null);
            const closeModal = () => dialogRef.current.close();
            const openModal = () => dialogRef.current.showModal();
            const generate = async correction => {
              setFetching(true);
              const res = await model.generateAction(selected);
              setFetching(false);
            };
            const {
              elements
            } = texts;
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const onChange = (event, index) => {
              setSelected(['content', 'synthesis', 'assessment'][index]);
            };
            const panes = ['content', 'synthesis', 'assessment'].map((pane, index) => {
              return React.createElement(_content.LessonContent, {
                key: pane,
                area: pane
              });
            });
            return React.createElement("div", {
              className: "lesson-generator"
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, React.createElement(_tabs.Tab, null, elements.content), React.createElement(_tabs.Tab, null, elements.synthesis), React.createElement(_tabs.Tab, null, elements.assessment)), React.createElement(_tabs.Panes, null, panes))), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_regenerateForm.default, {
              closeModal: closeModal,
              submit: generate
            })));
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
        hash: 3986188558,
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
            const Control = area === 'assessment' ? _questions.QuestionsComponent : _MarkedContent.MarkedContent;
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
        hash: 1852651062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyContent = EmptyContent;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyContent({
            element,
            area
          }) {
            const {
              texts: {
                generate: generateText,
                empty: texts
              },
              store
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const generate = async event => {
              event.preventDefault();
              setFetching(true);
              await element.load(true);
              setFetching(false);
            };
            const message = fetching ? texts.generating : texts.message;
            return _react.default.createElement("div", {
              className: "empty-content"
            }, _react.default.createElement("h4", null, _react.default.createElement("strong", null, " ", texts.title), " ", _react.default.createElement("br", null), message), _react.default.createElement(_form.Button, {
              loading: fetching,
              onClick: generate,
              icon: "generate",
              label: generateText
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/generator/shared/questions
      **************************************************/

      ims.set('./views/generator/shared/questions', {
        hash: 2099186050,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionComponent = QuestionComponent;
          exports.QuestionsComponent = QuestionsComponent;
          exports.TopicComponent = TopicComponent;
          var React = require("react");
          function QuestionsComponent({
            content
          }) {
            try {
              const data = JSON.parse(content);
              return React.createElement("div", null, data.assessment.map((topic, index) => React.createElement(TopicComponent, {
                key: index,
                topic: topic
              })));
            } catch (e) {
              console.log('error rendering', e);
              return null;
            }
          }
          function TopicComponent({
            topic
          }) {
            return React.createElement("div", null, React.createElement("h2", null, topic.title), topic.questions.map((question, index) => React.createElement(QuestionComponent, {
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
        hash: 261760874,
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
            const output = model.topics.items?.map((item, index) => React.createElement(_topic.TopicItem, {
              item: item,
              index: index,
              key: index
            }));
            return React.createElement(React.Fragment, null, output);
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content
      ******************************************************/

      ims.set('./views/generator/topics/topic/content', {
        hash: 1187400805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicContent = TopicContent;
          var React = require("react");
          var _context = require("./context");
          var _emptyContent = require("../../shared/empty-content");
          var _content = require("../../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          function TopicContent({
            topic,
            element,
            visible,
            area
          }) {
            const {
              selected
            } = (0, _context.useTopicContext)();
            const [value, setValue] = React.useState(element.value);
            const [fetching, setFetching] = React.useState(element.fetching);
            (0, _hooks.useBinder)([element], () => {
              setValue(element.value);
              setFetching(element.fetching);
            });
            const cls = `lesson__content ${fetching ? ' is-fetching' : ''} ${visible ? 'visible' : ''}`;
            const hasElements = !!element.value;
            if (!hasElements && fetching) return React.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
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
        hash: 2152128075,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _context2 = require("./context");
          var _content = require("./content");
          var _tabs = require("@aimpact/ailearn-app/components/tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TopicItem({
            item,
            index
          }) {
            const name = item.title;
            const {
              store,
              texts: {
                topics: texts
              }
            } = (0, _context.useLessonContext)();
            const {
              model
            } = store;
            const dialogRef = React.useRef(null);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [selected, setSelected] = React.useState('content');
            // always opened the fist topic.
            const [visible, setVisible] = React.useState(index === 0);
            const [topic, setTopic] = React.useState(item);
            const handleHeaderClick = () => setVisible(!visible);
            (0, _hooks.useBinder)([item], () => setTopic(item));
            const {
              elements
            } = texts;
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const value = {
              selected,
              topic: name,
              store
            };
            const onChange = (event, selected) => {
              const type = ['content', 'synthesis', 'assessment', 'previous'][selected];
              item.elements.load(type);
              setSelected(type);
            };
            const panes = Object.keys(elements).map((area, index) => {
              const specs = {
                element: topic.elements.get(area),
                area,
                visible,
                topic: item
              };
              return React.createElement(_content.TopicContent, {
                ...specs,
                key: index
              });
            });
            return React.createElement(_context2.TopicContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: "lesson-generator"
            }, React.createElement("article", {
              className: "generator-header",
              onClick: handleHeaderClick
            }, React.createElement("h3", {
              className: "topic-title"
            }, name), React.createElement(_icons.IconButton, {
              className: `collapse-topic ${visible ? 'visible' : ''}`,
              icon: 'left'
            })), React.createElement("article", {
              className: cls
            }, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, React.createElement(_tabs.Tab, null, elements.content), React.createElement(_tabs.Tab, null, elements.synthesis), React.createElement(_tabs.Tab, null, elements.assessment), React.createElement(_tabs.Tab, null, elements.previous)), React.createElement(_tabs.Panes, null, panes)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDYTtVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwic2hvdyIsImlzTmV3IiwidXJpIiwidmFycyIsImdldCIsInZpZXciLCJxcyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiaGFzQ29udGVudCIsImhhcyIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImlkIiwidW5kZWZpbmVkIiwiTGVzc29uIiwiZ2xvYmFsVGhpcyIsIm0iLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydE1lc3NhZ2UiLCJ0ZXh0cyIsIkFsZXJ0IiwibW9kZSIsInRpdGxlIiwicHJvY2Vzc0FsZXJ0IiwidXNlQnVsbGV0UG9pbnRzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsIm1pbkJ1bGxldFBvaW50cyIsIm1heEJ1bGxldFBvaW50cyIsInN0YXJ0VmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwic2V0QnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwiZHJvcHBlZEluZGV4Iiwic2V0RHJvcHBlZEluZGV4IiwiaGFuZGxlQnVsbGV0UG9pbnRzQ2hhbmdlIiwidXBkYXRlZEJ1bGxldFBvaW50cyIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEJ1bGxldFBvaW50Iiwic2hpZnRLZXkiLCJmb2N1c0J1bGxldFBvaW50IiwicmVtb3ZlQnVsbGV0UG9pbnQiLCJwcmV2QnVsbGV0UG9pbnRzIiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImN1cnJlbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIkJ1bGxldFBvaW50Rm9ybSIsImZpZWxkTmFtZSIsImNsYXNzTmFtZSIsInRvcGljcyIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxhYmVsIiwib25DbGljayIsIm1hcCIsInBvaW50IiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJvbkRyYWdPdmVyIiwib25EcmFnRW5kIiwiSWNvbiIsImljb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJyZWYiLCJDbGFzc0Zvcm1Db250ZXh0IiwidXNlQ2xhc3NGb3JtQ29udGV4dCIsIkZvcm0iLCJzdG9yZSIsImRlZmF1bHRWYWx1ZXMiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsIm9uU3VibWl0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInByb3ZpZGVyVmFsdWVzIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIklucHV0IiwicmVxdWlyZWQiLCJhY3Rpb25zIiwibmV4dCIsIkdlbmVyYXRvciIsImNscyIsImxvYWRGaXJzdCIsInN1YnRpdGxlIiwiZ2VuZXJhdG9yIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJhY3RpdmUiLCJUYWIiLCJ0aXRsZXMiLCJsZXNzb25zIiwiUGFuZXMiLCJMZXNzb25Db250ZW50R2VuZXJhdG9yIiwiVG9waWNzR2VuZXJhdG9yIiwiTGVzc29uQ29udGVudCIsImFyZWEiLCJlbGVtZW50cyIsIml0ZW1zIiwic2V0VmFsdWUiLCJzcGVjcyIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJsZXNzb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwiY2xvc2VNb2RhbCIsImNsb3NlIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiZ2VuZXJhdGUiLCJjb3JyZWN0aW9uIiwicmVzIiwiZ2VuZXJhdGVBY3Rpb24iLCJwYW5lcyIsInBhbmUiLCJjb250ZW50Iiwic3ludGhlc2lzIiwiYXNzZXNzbWVudCIsIlJlZ2VuZXJhdGVGb3JtIiwic3VibWl0IiwiTWFya2VkQ29udGVudCIsIm1hcmsiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImdlbmVyYXRlVGV4dCIsImVtcHR5IiwibWVzc2FnZSIsImdlbmVyYXRpbmciLCJsb2FkaW5nIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIlRvcGljQ29tcG9uZW50IiwibG9nIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJRdWVzdGlvbkNvbXBvbmVudCIsInRleHQiLCJvcHRpb25zIiwib3B0aW9uIiwiT3B0aW9uQ29tcG9uZW50IiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJzZXRMb2FkaW5nIiwidGV4dEFyZWFWYWx1ZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwidG9hc3QiLCJzdWNjZXNzIiwiYWN0aW9uIiwiVGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvdXRwdXQiLCJpdGVtIiwiVG9waWNJdGVtIiwiVG9waWNDb250ZW50IiwidmlzaWJsZSIsImhhc0VsZW1lbnRzIiwiVG9waWNDb250ZXh0IiwidXNlVG9waWNDb250ZXh0Iiwic2V0VmlzaWJsZSIsInNldFRvcGljIiwiaGFuZGxlSGVhZGVyQ2xpY2siLCJPYmplY3QiLCJrZXlzIiwiSWNvbkJ1dHRvbiIsInByZXZpb3VzIiwic2V0VmlldyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlZJRVdTIiwiRk9STSIsIkdFTkVSQVRFIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCJ0cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaG9va3MvdXNlQnVsbGV0UG9pbnRzLnRzIiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vZm9ybS50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvTWFya2VkQ29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2NvbnRlbnQvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9lbXB0eS1jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcXVlc3Rpb25zLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvcmVnZW5lcmF0ZS1mb3JtLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==