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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/icons', dependency_10], ['@aimpact/chat/shared/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['@aimpact/chat/shared/hooks', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-lessons-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/lessons/create.widget",
        "is": "page",
        "route": "/lessons/create",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/lessons/create.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTtjQUNYUixPQUFPLEVBQUUyQixRQUFRO2NBQ2pCdkcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZHNHO1lBQVksRUFDZixDQUNJLENBQ0YsQ0FDcUI7VUFFOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEhBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBRU0sU0FBVXJJLElBQUksQ0FBQztZQUFFMkg7VUFBSyxDQUEyQjtZQUN0RCxNQUFNLENBQUM1RixRQUFRLEVBQUVpRyxXQUFXLENBQUMsR0FBR25GLEtBQUssQ0FBQ2lGLFFBQVEsQ0FBQ0gsS0FBSyxDQUFDNUYsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ3VILFVBQVUsRUFBRXBHLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUNxRyxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDakksS0FBSyxFQUFFa0ksUUFBUSxDQUFDLEdBQUc1RyxLQUFLLENBQUNpRixRQUFRLENBQUNILEtBQUssQ0FBQ3BHLEtBQUssQ0FBQztZQUVyRCxxQkFBUyxFQUFDLENBQUNvRyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCOEIsUUFBUSxDQUFDOUIsS0FBSyxDQUFDcEcsS0FBSyxDQUFDO2NBQ3JCeUcsV0FBVyxDQUFDTCxLQUFLLENBQUM1RixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDdUgsVUFBVSxJQUFJLENBQUMvSCxLQUFLLElBQUlRLFFBQVEsRUFBRSxPQUFPYyxvQkFBQzZHLHlCQUFhLE9BQUc7WUFFL0QsTUFBTWhCLGNBQWMsR0FBRztjQUN0QnhGLEtBQUs7Y0FDTHlFO2FBQ0E7WUFFRCxPQUNDOUUsb0JBQUNELHNCQUFhLENBQUNvRyxRQUFRO2NBQUN0SCxLQUFLLEVBQUVnSDtZQUFjLEdBQzVDN0Ysb0JBQUM2RSxVQUFJLE9BQUcsQ0FDZ0I7VUFFM0IiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiUGFnZSIsInNob3ciLCJsb2FkIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJ2aWV3IiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJMZXNzb24iLCJnbG9iYWxUaGlzIiwibSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJlcnJvciIsImUiLCJjb25zb2xlIiwiZ2VuZXJhdGVUb3BpY3MiLCJ0b3BpY3MiLCJnZW5lcmF0ZSIsImxvZyIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwiQWxlcnQiLCJtb2RlIiwidGl0bGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwidmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwiZHJvcHBlZEluZGV4Iiwic2V0RHJvcHBlZEluZGV4IiwiaGFuZGxlQnVsbGV0UG9pbnRzQ2hhbmdlIiwidXBkYXRlZEJ1bGxldFBvaW50cyIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEJ1bGxldFBvaW50Iiwic2hpZnRLZXkiLCJmb2N1c0J1bGxldFBvaW50IiwicmVtb3ZlQnVsbGV0UG9pbnQiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiY3VycmVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiQnVsbGV0UG9pbnRGb3JtIiwiZGlzYWJsZWQiLCJmaWVsZE5hbWUiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsIm9uQ2xpY2siLCJtYXAiLCJwb2ludCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJpY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIiwiQ2xhc3NGb3JtQ29udGV4dCIsInVzZUNsYXNzRm9ybUNvbnRleHQiLCJGb3JtIiwic3RvcmUiLCJkZWZhdWx0VmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiZmV0Y2hpbmdUb3BpY3MiLCJzZXRGZXRjaGluZ1RvcGljcyIsImdldFByb3BlcnRpZXMiLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInByb3ZpZGVyVmFsdWVzIiwidG9waWNzVGl0bGVzIiwib25HZW5lcmF0ZSIsImRpc2FibGVkVG9waWNzIiwibG9hZGluZyIsImNscyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbnB1dCIsInJlcXVpcmVkIiwiYWN0aW9ucyIsIm5leHQiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9ob29rcy91c2VCdWxsZXRQb2ludHMudHMiLCJ0cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9pbmRleC50c3giLCJ0cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19