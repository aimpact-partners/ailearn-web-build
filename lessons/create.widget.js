System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.3/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_beyondJsReactive113Model) {
      dependency_4 = _beyondJsReactive113Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi0036Alert) {
      dependency_8 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_9 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_10 = _pragmateUi0036Icons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_11 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_12 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_14 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 2629841970,
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
                console.error(e);
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
        hash: 3560524456,
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
            return _react.default.createElement("section", {
              className: "bullet-points-form"
            }, _react.default.createElement("header", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO2NBQ1hSLE9BQU8sRUFBRTJCLFFBQVE7Y0FDakJ0RyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkcUc7WUFBWSxFQUNmLENBQ0ksQ0FDRixDQUNxQjtVQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoSEE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFFTSxTQUFVcEksSUFBSSxDQUFDO1lBQUUwSDtVQUFLLENBQTJCO1lBQ3RELE1BQU0sQ0FBQzNGLFFBQVEsRUFBRWdHLFdBQVcsQ0FBQyxHQUFHbkYsS0FBSyxDQUFDaUYsUUFBUSxDQUFDSCxLQUFLLENBQUMzRixRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDc0gsVUFBVSxFQUFFcEcsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ3FHLHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNoSSxLQUFLLEVBQUVpSSxRQUFRLENBQUMsR0FBRzVHLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDbkcsS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ21HLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkI4QixRQUFRLENBQUM5QixLQUFLLENBQUNuRyxLQUFLLENBQUM7Y0FDckJ3RyxXQUFXLENBQUNMLEtBQUssQ0FBQzNGLFFBQVEsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNzSCxVQUFVLElBQUksQ0FBQzlILEtBQUssSUFBSVEsUUFBUSxFQUFFLE9BQU9hLG9CQUFDNkcseUJBQWEsT0FBRztZQUUvRCxNQUFNaEIsY0FBYyxHQUFHO2NBQ3RCeEYsS0FBSztjQUNMeUU7YUFDQTtZQUVELE9BQ0M5RSxvQkFBQ0Qsc0JBQWEsQ0FBQ29HLFFBQVE7Y0FBQ3JILEtBQUssRUFBRStHO1lBQWMsR0FDNUM3RixvQkFBQzZFLFVBQUksT0FBRyxDQUNnQjtVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInZpZXciLCJtb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImhhc0NvbnRlbnQiLCJoYXMiLCJjb25zdHJ1Y3RvciIsIkxlc3NvbiIsImdsb2JhbFRoaXMiLCJtIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZW5lcmF0ZVRvcGljcyIsInRvcGljcyIsImdlbmVyYXRlIiwiTGVzc29uQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRNZXNzYWdlIiwidGV4dHMiLCJBbGVydCIsIm1vZGUiLCJ0aXRsZSIsInByb2Nlc3NBbGVydCIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJidWxsZXRQb2ludFJlZnMiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlZ2lzdGVyQnVsbGV0UG9pbnRSZWYiLCJlbGVtZW50IiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJCdWxsZXRQb2ludEZvcm0iLCJkaXNhYmxlZCIsImZpZWxkTmFtZSIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxhYmVsIiwib25DbGljayIsIm1hcCIsInBvaW50IiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJvbkRyYWdPdmVyIiwib25EcmFnRW5kIiwiSWNvbiIsImljb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJyZWYiLCJDbGFzc0Zvcm1Db250ZXh0IiwidXNlQ2xhc3NGb3JtQ29udGV4dCIsIkZvcm0iLCJzdG9yZSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJmZXRjaGluZ1RvcGljcyIsInNldEZldGNoaW5nVG9waWNzIiwiZ2V0UHJvcGVydGllcyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsIm9uU3VibWl0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImlkIiwicHJvdmlkZXJWYWx1ZXMiLCJ0b3BpY3NUaXRsZXMiLCJvbkdlbmVyYXRlIiwiZGlzYWJsZWRUb3BpY3MiLCJsb2FkaW5nIiwiY2xzIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIklucHV0IiwicmVxdWlyZWQiLCJhY3Rpb25zIiwibmV4dCIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS9pbmRleC50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2FsZXJ0LW1lc3NhZ2UudHN4IiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZUJ1bGxldFBvaW50cy50cyIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=