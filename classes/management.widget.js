System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@1.0.0/components/tabs", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.36/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_17 = _beyondJsKernel019Styles;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/chat/shared/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/ailearn-app/components/tabs', dependency_13], ['pragmate-ui/spinner', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
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
        hash: 140501184,
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
              if (!this.#model.elements?.content) {
                console.log('no content');
              }
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
        hash: 649058676,
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
        hash: 1536961728,
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
            const onChange = event => {};
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: model.curriculumObjective,
              subtitle: texts.generator.title
            }), React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, {
              active: 0
            }, React.createElement(_tabs.Tab, null, texts.titles.lessons), React.createElement(_tabs.Tab, {
              disabled: true
            }, texts.titles.topics)), React.createElement(_tabs.Panes, null, React.createElement(_lessons.LessonContentGenerator, null), React.createElement(_topics.TopicsGenerator, null))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/generator/lessons/content
      *************************************************/

      ims.set('./views/generator/lessons/content', {
        hash: 195761142,
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
            const [fetching, setFetching] = React.useState(store.fetching);
            const specs = {
              area,
              setFetching
            };
            const element = model.elements.items.get(area);
            const [value, setValue] = React.useState(element?.value);
            (0, _hooks.useBinder)([element], () => {
              setFetching(element.fetching);
              setValue(element.value);
            });
            React.useEffect(() => {
              console.log('loading....', element.id, element);
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
        hash: 3519458834,
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
              console.log(13, ['content', 'synthesis', 'assessment'][index]);
              setSelected(['content', 'synthesis', 'assessment'][index]);
            };
            return React.createElement("div", {
              className: "lesson-generator"
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_tabs.TabsContainer, {
              onChange: onChange
            }, React.createElement(_tabs.Tabs, null, React.createElement(_tabs.Tab, null, elements.content), React.createElement(_tabs.Tab, null, elements.synthesis), React.createElement(_tabs.Tab, null, elements.assessment)), React.createElement(_tabs.Panes, null, React.createElement(_content.LessonContent, {
              area: selected
            }), React.createElement(_content.LessonContent, {
              area: selected
            }), React.createElement(_content.LessonContent, {
              area: selected
            })))), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_regenerateForm.default, {
              closeModal: closeModal,
              submit: generate
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/lessons/tabs
      **********************************************/

      ims.set('./views/generator/lessons/tabs', {
        hash: 4015179155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ClassTabs;
          var _react = require("react");
          var _context = require("../../context");
          function ClassTabs({
            onClickItem,
            selected
          }) {
            const {
              texts
            } = (0, _context.useLessonContext)();
            const actionNames = Object.keys(texts.lesson.elements);
            return actionNames.map((tab, key) => _react.default.createElement("div", {
              className: `area-tab ${selected === tab ? 'active' : ''}`,
              "data-area": tab,
              key: `${tab} - ${key}`,
              onClick: onClickItem
            }, tab));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/generator/shared/content
      ************************************************/

      ims.set('./views/generator/shared/content', {
        hash: 3123314107,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaContent = AreaContent;
          var _react = require("react");
          var _questions = require("./questions");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _context = require("../../context");
          function AreaContent({
            area
          }) {
            const mark = (0, _hooks.useMarked)();
            let renderedContent;
            const {
              store,
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            const element = model.elements.items.get(area);
            const renderContent = function () {
              if (area === 'assessment') {
                console.log(500, element.value);
                renderedContent = _react.default.createElement(_questions.QuestionsComponent, {
                  values: element?.value
                });
              } else {
                renderedContent = _react.default.createElement("div", {
                  dangerouslySetInnerHTML: {
                    __html: mark(element?.value)
                  }
                });
              }
              return renderedContent;
            };
            return _react.default.createElement("div", {
              className: "content-wrapper"
            }, renderContent());
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/empty-content
      ******************************************************/

      ims.set('./views/generator/shared/empty-content', {
        hash: 4073114229,
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
            area
          }) {
            const {
              texts: {
                generate: generateText,
                empty: texts
              },
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const generate = async event => {
              event.preventDefault();
              setFetching(true);
              await model.generateElement(area);
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
        hash: 3906073324,
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
            values
          }) {
            try {
              const data = JSON.parse(values);
              console.log(501, data);
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
        hash: 2107595863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicsGenerator = TopicsGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _list = require("./list");
          function TopicsGenerator() {
            const {
              store: {
                model
              }
            } = (0, _context.useLessonContext)();
            return React.createElement(_list.List, {
              items: model.topicsElements
            });
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/generator/topics/list/index
      ***************************************************/

      ims.set('./views/generator/topics/list/index', {
        hash: 176979575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _topic = require("../topic");
          function List({
            items
          }) {
            return React.createElement(React.Fragment, null, items?.map((item, key) => React.createElement(_topic.TopicItem, {
              item: item,
              key: key
            })));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content
      ******************************************************/

      ims.set('./views/generator/topics/topic/content', {
        hash: 114974225,
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
          function TopicContent({
            item,
            visible
          }) {
            const {
              selected
            } = (0, _context.useTopicContext)();
            const [fetching, setFetching] = React.useState(false);
            const [topicElement, setTopicElement] = React.useState(item[selected]);
            const generate = async event => {
              event.preventDefault();
              event.stopPropagation();
              setFetching(true);
              const response = await item.generateElement(selected);
              item.update(response);
              setFetching(false);
            };
            (0, _hooks.useBinder)([item], () => setTopicElement({
              ...item[selected]
            }));
            React.useEffect(() => setTopicElement(item[selected]), [item[selected]]);
            const cls = `class__content ${fetching ? ' is-fetching' : ''} ${visible ? 'visible' : ''}`;
            const hasElements = !!item[selected];
            const Control = hasElements ? React.createElement(_content.AreaContent, {
              selected: selected,
              area: topicElement
            }) : React.createElement(_emptyContent.EmptyContent, {
              generate: generate,
              fetching: fetching
            });
            return React.createElement("article", {
              className: cls
            }, Control);
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
        hash: 2307017989,
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
          var _regenerateForm = require("../../shared/regenerate-form");
          var _tabs = require("./tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TopicItem({
            item
          }) {
            const name = item.title;
            const {
              store
            } = (0, _context.useLessonContext)();
            const {
              model
            } = store;
            const [fetching, setFetching] = React.useState(store.fetching);
            const [selected, setSelected] = React.useState('synthesis');
            const dialogRef = React.useRef(null);
            const closeModal = () => dialogRef.current.close();
            const openModal = e => {
              e.stopPropagation();
              dialogRef.current.showModal();
            };
            const [visible, setVisible] = React.useState(false);
            const handleHeaderClick = () => setVisible(!visible);
            const [topic, setTopic] = React.useState(item);
            (0, _hooks.useBinder)([item], () => setTopic(item));
            const generate = async correction => {
              setFetching(true);
              await model.generateElement(selected);
              setFetching(false);
            };
            const onClickItem = event => {
              event.stopPropagation();
              setSelected(event.currentTarget.dataset.area);
              setVisible(true);
            };
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const value = {
              selected,
              topic: name,
              store
            };
            return React.createElement(_context2.TopicContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: "class-generator"
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
            }, React.createElement("article", {
              className: "generator-header"
            }, React.createElement("section", {
              className: "class-areas"
            }, React.createElement(_tabs.default, {
              onClickItem: onClickItem,
              selected: selected
            })), React.createElement("section", {
              className: "class-areas__actions"
            }, React.createElement(_icons.IconButton, {
              icon: "generate",
              onClick: openModal
            }), React.createElement(_icons.IconButton, {
              icon: "edit"
            }))), React.createElement(_content.TopicContent, {
              visible: visible,
              item: topic
            }))), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_regenerateForm.default, {
              closeModal: closeModal,
              submit: generate
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/tabs
      ***************************************************/

      ims.set('./views/generator/topics/topic/tabs', {
        hash: 3512105888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = TopicTabs;
          var _react = require("react");
          const TABS = ['synthesis', 'prerequisites', 'assessment'];
          function TopicTabs({
            selected,
            onClickItem
          }) {
            return TABS.map((tab, key) => _react.default.createElement("div", {
              className: `area-tab ${selected === tab ? 'active' : ''}`,
              "data-area": tab,
              key: `${tab} - ${key}`,
              onClick: onClickItem
            }, tab));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFa08sUUFBUSxDQUFDLEdBQUc3TSxLQUFLLENBQUNvRixRQUFRLENBQUNKLEtBQUssQ0FBQ3JHLEtBQUssQ0FBQztZQUVyRCxNQUFNbU8sS0FBSyxHQUFHO2NBQ2JDLElBQUksRUFBRWhJLFVBQUk7Y0FDVmlJLFFBQVEsRUFBRTVHO2FBQ1Y7WUFFRCxxQkFBUyxFQUFDLENBQUNwQixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCNkgsUUFBUSxDQUFDN0gsS0FBSyxDQUFDckcsS0FBSyxDQUFDO2NBQ3JCMkcsV0FBVyxDQUFDTixLQUFLLENBQUN6RixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDbU4sVUFBVSxJQUFJLENBQUMvTixLQUFLLElBQUlZLFFBQVEsRUFBRSxPQUFPUyxvQkFBQ2lOLHlCQUFhLE9BQUc7WUFFL0QsTUFBTXBILGNBQWMsR0FBRztjQUN0QnhGLEtBQUs7Y0FDTDJFLEtBQUs7Y0FDTHlIO2FBQ0E7WUFDRCxNQUFNakYsT0FBTyxHQUFHc0YsS0FBSyxDQUFDMVAsSUFBSSxDQUFDO1lBQzNCLE9BQ0M0QyxvQkFBQ0Qsc0JBQWEsQ0FBQytGLFFBQVE7Y0FBQzVHLEtBQUssRUFBRTJHO1lBQWMsR0FDNUM3RixvQkFBQ3dILE9BQU8sT0FBRyxDQUNhO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwiaXNOZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwidmlldyIsInFzIiwibG9hZCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwiaWQiLCJ1bmRlZmluZWQiLCJMZXNzb24iLCJnbG9iYWxUaGlzIiwibSIsImlzUmVhZHkiLCJyZWFkeSIsImVsZW1lbnRzIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwiQWxlcnQiLCJtb2RlIiwidGl0bGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwic3RhcnRWYWx1ZXMiLCJidWxsZXRQb2ludHMiLCJzZXRCdWxsZXRQb2ludHMiLCJidWxsZXRQb2ludFJlZnMiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInByZXZCdWxsZXRQb2ludHMiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiQnVsbGV0UG9pbnRGb3JtIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwidG9waWNzIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNsYXNzRm9ybUNvbnRleHQiLCJ1c2VDbGFzc0Zvcm1Db250ZXh0IiwiRm9ybSIsInN0b3JlIiwiZGVmYXVsdFZhbHVlcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsImRpc2FibGVkIiwib25TdWJtaXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHJvdmlkZXJWYWx1ZXMiLCJQcm92aWRlciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW5wdXQiLCJyZXF1aXJlZCIsImFjdGlvbnMiLCJuZXh0IiwiR2VuZXJhdG9yIiwiY2xzIiwic3VidGl0bGUiLCJnZW5lcmF0b3IiLCJUYWJzQ29udGFpbmVyIiwiVGFicyIsImFjdGl2ZSIsIlRhYiIsInRpdGxlcyIsImxlc3NvbnMiLCJQYW5lcyIsIkxlc3NvbkNvbnRlbnRHZW5lcmF0b3IiLCJUb3BpY3NHZW5lcmF0b3IiLCJMZXNzb25Db250ZW50IiwiYXJlYSIsInNwZWNzIiwiaXRlbXMiLCJzZXRWYWx1ZSIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJFbXB0eUNvbnRlbnQiLCJsZXNzb24iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwiY2xvc2VNb2RhbCIsImNsb3NlIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiZ2VuZXJhdGUiLCJjb3JyZWN0aW9uIiwicmVzIiwiZ2VuZXJhdGVBY3Rpb24iLCJzeW50aGVzaXMiLCJhc3Nlc3NtZW50IiwiUmVnZW5lcmF0ZUZvcm0iLCJzdWJtaXQiLCJDbGFzc1RhYnMiLCJvbkNsaWNrSXRlbSIsImFjdGlvbk5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInRhYiIsIm1hcmsiLCJyZW5kZXJlZENvbnRlbnQiLCJyZW5kZXJDb250ZW50IiwiUXVlc3Rpb25zQ29tcG9uZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZW5lcmF0ZVRleHQiLCJlbXB0eSIsImdlbmVyYXRlRWxlbWVudCIsIm1lc3NhZ2UiLCJnZW5lcmF0aW5nIiwibG9hZGluZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJUb3BpY0NvbXBvbmVudCIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwiUXVlc3Rpb25Db21wb25lbnQiLCJ0ZXh0Iiwib3B0aW9ucyIsIm9wdGlvbiIsIk9wdGlvbkNvbXBvbmVudCIsImlzQ29ycmVjdCIsImNvcnJlY3RfYW5zd2VyIiwic2V0TG9hZGluZyIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInRvYXN0Iiwic3VjY2VzcyIsImFjdGlvbiIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiTGlzdCIsInRvcGljc0VsZW1lbnRzIiwiaXRlbSIsIlRvcGljSXRlbSIsIlRvcGljQ29udGVudCIsInZpc2libGUiLCJ0b3BpY0VsZW1lbnQiLCJzZXRUb3BpY0VsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ1cGRhdGUiLCJoYXNFbGVtZW50cyIsIlRvcGljQ29udGV4dCIsInVzZVRvcGljQ29udGV4dCIsInNldFZpc2libGUiLCJoYW5kbGVIZWFkZXJDbGljayIsInNldFRvcGljIiwiZGF0YXNldCIsIkljb25CdXR0b24iLCJUb3BpY1RhYnMiLCJUQUJTIiwic2V0VmlldyIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlZJRVdTIiwiRk9STSIsIkdFTkVSQVRFIiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL3N0b3JlL2luZGV4LnRzIiwidHMvdmlld3MvY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCJ0cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaG9va3MvdXNlQnVsbGV0UG9pbnRzLnRzIiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vZm9ybS50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL2xlc3NvbnMvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvbGVzc29ucy90YWJzLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL2VtcHR5LWNvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9xdWVzdGlvbnMudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9yZWdlbmVyYXRlLWZvcm0udHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2xpc3QvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvY29udGV4dC50cyIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvdG9waWMvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy90YWJzLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19