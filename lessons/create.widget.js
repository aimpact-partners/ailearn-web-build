System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.1/alert", "pragmate-ui@0.0.1/components", "pragmate-ui@0.0.1/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_pragmateUi001Alert) {
      dependency_9 = _pragmateUi001Alert;
    }, function (_pragmateUi001Components) {
      dependency_10 = _pragmateUi001Components;
    }, function (_pragmateUi001Icons) {
      dependency_11 = _pragmateUi001Icons;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVqSCxLQUFLLENBQUMsR0FBRyxtQkFBUSxFQUFDa0gsc0JBQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2hKLEtBQUssRUFBRWlKLFFBQVEsQ0FBQyxHQUFHekgsY0FBSyxDQUFDK0UsUUFBUSxDQUFDTCxLQUFLLENBQUNsRyxLQUFLLENBQUM7WUFFckQscUJBQVMsRUFBQyxDQUFDa0csS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QitDLFFBQVEsQ0FBQy9DLEtBQUssQ0FBQ2xHLEtBQUssQ0FBQztjQUNyQm1ILFdBQVcsQ0FBQ2pCLEtBQUssQ0FBQzFGLFFBQVEsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUNzSSxVQUFVLElBQUksQ0FBQzlJLEtBQUssSUFBSVEsUUFBUSxFQUFFLE9BQU9nQiw2QkFBQzBILHlCQUFhLE9BQUc7WUFFL0QsTUFBTXJCLGNBQWMsR0FBRztjQUN0QmhHLEtBQUs7Y0FDTHFFO2FBQ0E7WUFFRCxPQUNDMUUsNkJBQUNELHNCQUFhLENBQUM0RyxRQUFRO2NBQUNoSSxLQUFLLEVBQUUwSDtZQUFjLEdBQzVDckcsNkJBQUN1RixVQUFJLE9BQUcsQ0FDZ0I7VUFFM0IiLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiUGFnZSIsInNob3ciLCJsb2FkIiwiaGlkZSIsImNsZWFuIiwiZXhwb3J0cyIsIlJlYWN0aXZlTW9kZWwiLCJ2aWV3IiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsImxhbmd1YWdlIiwiaGFzQ29udGVudCIsImhhcyIsImNvbnN0cnVjdG9yIiwiTGVzc29uIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbFRoaXMiLCJtIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZW5lcmF0ZVRvcGljcyIsInRvcGljcyIsImdlbmVyYXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwib2ZmIiwiTGVzc29uQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUxlc3NvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRNZXNzYWdlIiwidGV4dHMiLCJBbGVydCIsIm1vZGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwidmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwiZHJvcHBlZEluZGV4Iiwic2V0RHJvcHBlZEluZGV4IiwiaGFuZGxlQnVsbGV0UG9pbnRzQ2hhbmdlIiwidXBkYXRlZEJ1bGxldFBvaW50cyIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVEcmFnU3RhcnQiLCJfIiwiaW5kZXgiLCJoYW5kbGVEcmFnT3ZlciIsImRyb3BwZWRQb3NpdGlvbiIsImhhbmRsZURyYWdFbmQiLCJuZXdCdWxsZXRQb2ludHMiLCJtb3ZlZEJ1bGxldFBvaW50Iiwic3BsaWNlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUtleURvd24iLCJpc0xhc3RCdWxsZXRQb2ludCIsImlzTm90RW1wdHkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEJ1bGxldFBvaW50Iiwic2hpZnRLZXkiLCJmb2N1c0J1bGxldFBvaW50IiwicmVtb3ZlQnVsbGV0UG9pbnQiLCJzZXRUaW1lb3V0IiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlZ2lzdGVyQnVsbGV0UG9pbnRSZWYiLCJlbGVtZW50IiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJCdWxsZXRQb2ludEZvcm0iLCJkaXNhYmxlZCIsImZpZWxkTmFtZSIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQnV0dG9uIiwidmFyaWFudCIsImxhYmVsIiwib25DbGljayIsIm1hcCIsInBvaW50IiwiZHJhZ2dhYmxlIiwib25EcmFnU3RhcnQiLCJvbkRyYWdPdmVyIiwib25EcmFnRW5kIiwiSWNvbiIsImljb24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJyZWYiLCJDb250ZW50VHlwZSIsInN0b3JlIiwia2V5cyIsImNvbnRlbnRUeXBlc0xhYmVscyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInBhcnNlSW50Iiwib3V0cHV0IiwiY29udGVudFR5cGVUaXRsZSIsIkJ1dHRvbkdyb3VwIiwiY29udGVudFR5cGVzQ2hhcmFjdGVyaXN0aWNzIiwiQ2xhc3NGb3JtQ29udGV4dCIsInVzZUNsYXNzRm9ybUNvbnRleHQiLCJGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJmZXRjaGluZ1RvcGljcyIsInNldEZldGNoaW5nVG9waWNzIiwiZ2V0UHJvcGVydGllcyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsIm9uU3VibWl0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImlkIiwicHJvdmlkZXJWYWx1ZXMiLCJ0b3BpY3NUaXRsZXMiLCJvbkdlbmVyYXRlIiwiZGlzYWJsZWRUb3BpY3MiLCJsb2FkaW5nIiwiY2xzIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkxhbmd1YWdlcyIsImFjdGlvbnMiLCJuZXh0IiwibGFuZ3VhZ2VLZXlzIiwiT2JqZWN0IiwiaW5kZXhPZiIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2FsZXJ0LW1lc3NhZ2UudHN4IiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZS1idWxsZXQtcG9pbnRzLnRzIiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGVudC10eXBlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9sYW5ndWFnZXMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=