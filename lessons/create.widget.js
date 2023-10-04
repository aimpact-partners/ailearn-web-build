System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.37/alert", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0037Alert) {
      dependency_9 = _pragmateUi0037Alert;
    }, function (_pragmateUi0037Components) {
      dependency_10 = _pragmateUi0037Components;
    }, function (_pragmateUi0037Icons) {
      dependency_11 = _pragmateUi0037Icons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_13 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-lessons-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/lessons/create.widget",
        "is": "page",
        "route": "/lessons/create",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/lessons/create.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2970149346,
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
            hide() {
              this.#store.clean();
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 676054449,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _session = require("@aimpact/chat-sdk/session");
          var _core2 = require("@beyond-js/kernel/core");
          class StoreManager extends _model.ReactiveModel {
            #model;
            view = 'FORM';
            get model() {
              return this.#model;
            }
            get isValid() {
              if (!this.#model) return false;
              let isValid = !!this.#model.curriculumObjective && !!(this.#model.topicTitles?.length >= 1) && this.#model.topicTitles?.every(topic => topic.trim() !== '') && this.#model.contents?.characteristics !== undefined && !!this.#model.language;
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
              this.#model.language = _core2.languages.current;
              globalThis.m = this.#model;
              this.#model.on('change', this.triggerEvent);
              await this.#model.isReady;
              this.ready = true;
            }
            set = (property, value) => {
              const properties = [...this.#model.properties, 'topicTitles'];
              if (!properties.includes(property)) return;
              this.#model[property] = value;
              this.triggerEvent();
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
                this.#model.topicTitles = Array.isArray(this.#model.topicTitles) ? [...this.#model.topicTitles, ...topics] : topics;
              } catch (e) {
                console.error(e);
              }
            }
            clean() {
              this.#model.off('change', this.triggerEvent);
              this.#model = undefined;
              this.ready = false;
            }
          }
          exports.StoreManager = StoreManager;
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

      /******************************************
      INTERNAL MODULE: ./views/form/alert-message
      ******************************************/

      ims.set('./views/form/alert-message', {
        hash: 3772129510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertMessage = AlertMessage;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("./context");
          function AlertMessage() {
            const {
              texts
            } = (0, _context.useClassFormContext)();
            return _react.default.createElement(_alert.Alert, {
              mode: "info",
              show: true
            }, texts.processAlert);
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/form/bullet-points/hooks/use-bullet-points
      ******************************************************************/

      ims.set('./views/form/bullet-points/hooks/use-bullet-points', {
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
        hash: 967361612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointForm = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _useBulletPoints = require("./hooks/use-bullet-points");
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
            }, _react.default.createElement("p", null, texts.topics.description), _react.default.createElement(_components.Button, {
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

      /*****************************************
      INTERNAL MODULE: ./views/form/content-type
      *****************************************/

      ims.set('./views/form/content-type', {
        hash: 1432435267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentType = ContentType;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _alert = require("pragmate-ui/alert");
          function ContentType() {
            const {
              texts,
              store
            } = (0, _context.useClassFormContext)();
            const keys = texts.contentTypesLabels;
            const [selected, setSelected] = _react.default.useState(0);
            const onClick = event => {
              store.set('contents', {
                characteristics: parseInt(event.currentTarget.value)
              });
              setSelected(event.currentTarget.value);
            };
            const output = keys.map((value, index) => {
              return _react.default.createElement(_components.Button, {
                value: index,
                key: value,
                onClick: onClick
              }, texts.contentTypesLabels[index]);
            });
            return _react.default.createElement("section", null, _react.default.createElement("h3", null, texts.contentTypeTitle), _react.default.createElement(_components.ButtonGroup, {
              selected: selected
            }, output), _react.default.createElement(_alert.Alert, null, texts.contentTypesCharacteristics[selected]));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/form/context
      ************************************/

      ims.set('./views/form/context', {
        hash: 4281470530,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClassFormContext = exports.ClassFormContext = void 0;
          var _react = require("react");
          const ClassFormContext = _react.default.createContext({});
          exports.ClassFormContext = ClassFormContext;
          const useClassFormContext = () => _react.default.useContext(ClassFormContext);
          exports.useClassFormContext = useClassFormContext;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 3042177307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _components2 = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _bulletPoints = require("./bullet-points");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          var _context2 = require("../context");
          var _alert = require("pragmate-ui/alert");
          var _languages = require("./languages");
          var _contentType = require("./content-type");
          function Form() {
            const {
              store,
              texts
            } = (0, _context2.useLessonContext)();
            const defaultValues = {
              curriculumObjective: '',
              topicTitles: ['']
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(store.fetching);
            const [fetchingTopics, setFetchingTopics] = _react.default.useState(store.fetching);
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
                if (response.error) {
                  //todo: @jircdev handle error
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
              topicsTitles: store.model.topicTitles?.length,
              store
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
            return _react.default.createElement(_context.ClassFormContext.Provider, {
              value: providerValues
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_components.CollapsibleHeader, {
              title: texts.title
            }), error && _react.default.createElement(_alert.Alert, null, error), _react.default.createElement("form", {
              className: "class-form"
            }, _react.default.createElement("span", null, _react.default.createElement(_components.Input, {
              label: texts.curriculumObjective,
              name: "curriculumObjective",
              type: "text",
              onChange: handleChange,
              required: true
            })), _react.default.createElement("div", {
              className: "form__section"
            }, _react.default.createElement(_languages.Languages, null), _react.default.createElement(_contentType.ContentType, null)), _react.default.createElement("div", {
              className: "form__field"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between mb-30"
            }, _react.default.createElement("h3", null, texts.topics.title), _react.default.createElement(_components2.Button, {
              onClick: onGenerate,
              ...disabledTopics
            }, texts.actions.generateTopics)), _react.default.createElement(_bulletPoints.BulletPointForm, {
              values: store.model.topicTitles,
              handleChange: handleChange,
              disabled: fetchingTopics || fetching,
              fieldName: "topicTitles"
            })), _react.default.createElement(_components2.Button, {
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

      /**************************************
      INTERNAL MODULE: ./views/form/languages
      **************************************/

      ims.set('./views/form/languages', {
        hash: 2724090951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _react = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          var _core = require("@beyond-js/kernel/core");
          function Languages() {
            const {
              texts,
              store
            } = (0, _context.useClassFormContext)();
            const languageKeys = [...Object.keys(texts.languages)];
            const [selected, setSelected] = _react.default.useState(languageKeys.indexOf(_core.languages.current));
            const onClick = event => {
              store.set('language', event.currentTarget.value);
              setSelected(languageKeys.indexOf(event.currentTarget.value));
            };
            const output = languageKeys.map(language => {
              return _react.default.createElement(_components.Button, {
                value: language,
                key: language,
                onClick: onClick
              }, texts.languages[language]);
            });
            return _react.default.createElement("section", null, _react.default.createElement("h3", null, texts.language), _react.default.createElement(_components.ButtonGroup, {
              selected: selected
            }, output));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1051893677,
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
          var _form = require("./form");
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
            const providerValues = {
              texts,
              store
            };
            return _react.default.createElement(_context.LessonContext.Provider, {
              value: providerValues
            }, _react.default.createElement(_form.Form, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9jb3JlMiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInZpZXciLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsImxhbmd1YWdlIiwiaGFzQ29udGVudCIsImhhcyIsImNvbnN0cnVjdG9yIiwiTGVzc29uIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbFRoaXMiLCJtIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZW5lcmF0ZVRvcGljcyIsInRvcGljcyIsImdlbmVyYXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwib2ZmIiwiX3JlYWN0IiwiTGVzc29uQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWxlcnQiLCJfY29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwidXNlQ2xhc3NGb3JtQ29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsIm1vZGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwidmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwidXNlUmVmIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwidXNlU3RhdGUiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiX3VzZUJ1bGxldFBvaW50cyIsIkJ1bGxldFBvaW50Rm9ybSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNvbnRlbnRUeXBlIiwia2V5cyIsImNvbnRlbnRUeXBlc0xhYmVscyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwYXJzZUludCIsIm91dHB1dCIsImNvbnRlbnRUeXBlVGl0bGUiLCJCdXR0b25Hcm91cCIsImNvbnRlbnRUeXBlc0NoYXJhY3RlcmlzdGljcyIsIkNsYXNzRm9ybUNvbnRleHQiLCJfY29tcG9uZW50czIiLCJfaG9va3MiLCJfYnVsbGV0UG9pbnRzIiwiX3JvdXRpbmciLCJfY29udGV4dDIiLCJfbGFuZ3VhZ2VzIiwiX2NvbnRlbnRUeXBlIiwiRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiZmV0Y2hpbmdUb3BpY3MiLCJzZXRGZXRjaGluZ1RvcGljcyIsInVzZUJpbmRlciIsImdldFByb3BlcnRpZXMiLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInByb3ZpZGVyVmFsdWVzIiwidG9waWNzVGl0bGVzIiwib25HZW5lcmF0ZSIsImRpc2FibGVkVG9waWNzIiwibG9hZGluZyIsImNscyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIklucHV0IiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJhY3Rpb25zIiwibmV4dCIsImxhbmd1YWdlS2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2Zvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCIvdHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZS1idWxsZXQtcG9pbnRzLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250ZW50LXR5cGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQVgsVUFBQSxH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