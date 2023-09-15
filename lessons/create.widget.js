System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.5/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive115Model) {
      dependency_4 = _beyondJsReactive115Model;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_5 = _aimpactAilearnSdk100Core;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi0036Alert) {
      dependency_9 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_10 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_11 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Components) {
      dependency_12 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_13 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_16 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/chat/shared/components', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['@aimpact/chat/shared/hooks', dependency_16]]);
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
        hash: 1487943456,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BulletPointForm = void 0;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9jb3JlMiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInZpZXciLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsImxhbmd1YWdlIiwiaGFzQ29udGVudCIsImhhcyIsImNvbnN0cnVjdG9yIiwiTGVzc29uIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbFRoaXMiLCJtIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZW5lcmF0ZVRvcGljcyIsInRvcGljcyIsImdlbmVyYXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwib2ZmIiwiX3JlYWN0IiwiTGVzc29uQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWxlcnQiLCJfY29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwidXNlQ2xhc3NGb3JtQ29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsIm1vZGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwidmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwidXNlUmVmIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwidXNlU3RhdGUiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl9mb3JtIiwiX2ljb25zIiwiX3VzZUJ1bGxldFBvaW50cyIsIkJ1bGxldFBvaW50Rm9ybSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIl9jb21wb25lbnRzIiwiQ29udGVudFR5cGUiLCJrZXlzIiwiY29udGVudFR5cGVzTGFiZWxzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInBhcnNlSW50Iiwib3V0cHV0IiwiY29udGVudFR5cGVUaXRsZSIsIkJ1dHRvbkdyb3VwIiwiY29udGVudFR5cGVzQ2hhcmFjdGVyaXN0aWNzIiwiQ2xhc3NGb3JtQ29udGV4dCIsIl9jb21wb25lbnRzMiIsIl9ob29rcyIsIl9idWxsZXRQb2ludHMiLCJfcm91dGluZyIsIl9jb250ZXh0MiIsIl9sYW5ndWFnZXMiLCJfY29udGVudFR5cGUiLCJGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJmZXRjaGluZ1RvcGljcyIsInNldEZldGNoaW5nVG9waWNzIiwidXNlQmluZGVyIiwiZ2V0UHJvcGVydGllcyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsIm9uU3VibWl0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImlkIiwicHJvdmlkZXJWYWx1ZXMiLCJ0b3BpY3NUaXRsZXMiLCJvbkdlbmVyYXRlIiwiZGlzYWJsZWRUb3BpY3MiLCJsb2FkaW5nIiwiY2xzIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkxhbmd1YWdlcyIsImFjdGlvbnMiLCJuZXh0IiwibGFuZ3VhZ2VLZXlzIiwiT2JqZWN0IiwiaW5kZXhPZiIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCIvdHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZS1idWxsZXQtcG9pbnRzLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250ZW50LXR5cGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLEVBQUU7WUFDbkI7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNRLEtBQUssRUFBRTtZQUNwQjs7VUFDQUMsT0FBQSxDQUFBWCxVQUFB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