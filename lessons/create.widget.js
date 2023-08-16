System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@0.0.1/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@0.0.2/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk001Session) {
      dependency_6 = _aimpactChatSdk001Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Alert) {
      dependency_8 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_9 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedComponents) {
      dependency_11 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_aimpactChat002SharedHooks) {
      dependency_14 = _aimpactChat002SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-lessons-create",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/lessons/create.widget",
        "is": "page",
        "route": "/lessons/create",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/lessons/create.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1219620888,
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
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.Page;
            }
            show() {
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2667841234,
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
            }
            async load() {
              this.#model = new _core.Lesson();
              globalThis.m = this.#model;
              this.#model.on('change', this.triggerEvent);
              await this.#model.isReady;
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
            async generateTopics() {
              try {
                const topics = await this.#model.topics.generate(this.#model.curriculumObjective);
                this.#model.topicTitles = topics;
              } catch (e) {
                console.log(e);
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
        hash: 309461877,
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
        hash: 3071613647,
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
            values = ['']
          }) {
            const bulletPoints = !!values.length ? values : [''];
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => {
              handleChange({
                currentTarget: {
                  name,
                  value: updatedBulletPoints
                }
              });
            };
            const handleDragStart = (_, index) => setDraggedIndex(index);
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              handleBulletPointsChange(updatedBulletPoints);
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
                handleBulletPointsChange([...bulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                const updatedBulletPoints = [...bulletPoints];
                updatedBulletPoints.splice(index, 1);
                focusBulletPoint(updatedBulletPoints.length - 1);
                handleBulletPointsChange(updatedBulletPoints);
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
        hash: 3377882234,
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
            values = [],
            handleChange,
            disabled = false,
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
              minBulletPoints,
              values
            });
            return _react.default.createElement("div", {
              className: "bullet-points-form"
            }, _react.default.createElement("div", {
              className: "bullet-points-form-header"
            }, _react.default.createElement("p", null, texts.topics.description), _react.default.createElement(_form.Button, {
              variant: "primary outline",
              label: "Add Topic",
              onClick: addBulletPoint
            })), bulletPoints.map((point, index) => _react.default.createElement("div", {
              key: index,
              className: "bullet-points-item",
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            }), _react.default.createElement("p", null, " ", index + 1, ". "), _react.default.createElement("input", {
              className: "bullet-points-input",
              type: "text",
              value: point,
              disabled: disabled,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            }), canRemoveBulletPoint && _react.default.createElement(_icons.Icon, {
              icon: "delete",
              className: "delete-bullet-point",
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

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 267482058,
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
          var _alert = require("pragmate-ui/alert");
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
            const [fetchingTopics, setFetchingTopics] = React.useState(store.fetching);
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
            (0, _hooks.useBinder)([store.model], () => setValues(store.model.getProperties()));
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
                if (!response) {
                  setError('Something went wrong');
                  return;
                }
                _routing.routing.replaceState({}, null, `/lessons/management/${store.model.id}`);
              } catch (error) {
                console.error(error);
              }
            }
            const providerValues = {
              texts,
              fetching,
              topicsTitles: store.model.topicTitles?.length
            };
            const onGenerate = async event => {
              setFetchingTopics(true);
              await store.generateTopics();
              setFetchingTopics(false);
            };
            const disabledTopics = {
              loading: fetchingTopics,
              disabled: fetchingTopics || !store.model.curriculumObjective
            };
            const cls = `class-view${fetchingTopics ? ' is-fetching' : ''}`;
            return React.createElement(_context.ClassFormContext.Provider, {
              value: providerValues
            }, React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: texts.title
            }), error && React.createElement(_alert.Alert, null, error), React.createElement("form", {
              className: "class-form"
            }, React.createElement("span", null, React.createElement(_components.Input, {
              label: texts.curriculumObjective,
              name: "curriculumObjective",
              type: "text",
              onChange: handleChange,
              required: true
            })), React.createElement("div", {
              className: "form__field"
            }, React.createElement("header", {
              className: "flex-container space-between mb-30"
            }, React.createElement("h3", null, texts.topics.title), React.createElement(_form.Button, {
              onClick: onGenerate,
              ...disabledTopics
            }, texts.actions.generateTopics)), React.createElement(_bulletPoints.BulletPointForm, {
              values: store.model.topicTitles,
              handleChange: handleChange,
              disabled: fetchingTopics || fetching,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4038677408,
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
          var _form = require("./form");
          function Page({
            store
          }) {
            const [fetching, setFetching] = React.useState(store.fetching);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready || fetching) return React.createElement(_components.PreloadScreen, null);
            const providerValues = {
              texts,
              store
            };
            return React.createElement(_context.LessonContext.Provider, {
              value: providerValues
            }, React.createElement(_form.Form, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInZpZXciLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJMZXNzb24iLCJnbG9iYWxUaGlzIiwibSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJlcnJvciIsImUiLCJjb25zb2xlIiwiZ2VuZXJhdGVUb3BpY3MiLCJ0b3BpY3MiLCJnZW5lcmF0ZSIsImxvZyIsIlJlYWN0IiwiTGVzc29uQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIl9hbGVydCIsIl9jb250ZXh0IiwiQWxlcnRNZXNzYWdlIiwidGV4dHMiLCJ1c2VDbGFzc0Zvcm1Db250ZXh0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwibW9kZSIsInRpdGxlIiwicHJvY2Vzc0FsZXJ0IiwiX3JlYWN0IiwidXNlQnVsbGV0UG9pbnRzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsIm1pbkJ1bGxldFBvaW50cyIsIm1heEJ1bGxldFBvaW50cyIsInZhbHVlcyIsImJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50UmVmcyIsInVzZVJlZiIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsInVzZVN0YXRlIiwiZHJvcHBlZEluZGV4Iiwic2V0RHJvcHBlZEluZGV4IiwiaGFuZGxlQnVsbGV0UG9pbnRzQ2hhbmdlIiwidXBkYXRlZEJ1bGxldFBvaW50cyIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEJ1bGxldFBvaW50Iiwic2hpZnRLZXkiLCJmb2N1c0J1bGxldFBvaW50IiwicmVtb3ZlQnVsbGV0UG9pbnQiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiX2Zvcm0iLCJfaWNvbnMiLCJfdXNlQnVsbGV0UG9pbnRzIiwiQnVsbGV0UG9pbnRGb3JtIiwiZGlzYWJsZWQiLCJmaWVsZE5hbWUiLCJkZWZhdWx0IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNsYXNzRm9ybUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9idWxsZXRQb2ludHMiLCJfcm91dGluZyIsIl9jb250ZXh0MiIsIkZvcm0iLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwic2V0RXJyb3IiLCJzZXRGZXRjaGluZyIsImZldGNoaW5nVG9waWNzIiwic2V0RmV0Y2hpbmdUb3BpY3MiLCJ1c2VCaW5kZXIiLCJnZXRQcm9wZXJ0aWVzIiwiY3VycmVudFZhbHVlIiwiZm9ybURpc2FibGVkIiwib25TdWJtaXQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaWQiLCJwcm92aWRlclZhbHVlcyIsInRvcGljc1RpdGxlcyIsIm9uR2VuZXJhdGUiLCJkaXNhYmxlZFRvcGljcyIsImxvYWRpbmciLCJjbHMiLCJQcm92aWRlciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSW5wdXQiLCJyZXF1aXJlZCIsImFjdGlvbnMiLCJuZXh0IiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiUHJlbG9hZFNjcmVlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaG9va3MvdXNlQnVsbGV0UG9pbnRzLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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