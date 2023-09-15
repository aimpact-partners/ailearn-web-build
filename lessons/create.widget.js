System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.4/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_beyondJsReactive114Model) {
      dependency_4 = _beyondJsReactive114Model;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 722190649,
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
                characteristics: event.currentTarget.value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLG1CQUFRLEVBQUNpSCxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDL0ksS0FBSyxFQUFFZ0osUUFBUSxDQUFDLEdBQUd4SCxjQUFLLENBQUMrRSxRQUFRLENBQUNMLEtBQUssQ0FBQ2xHLEtBQUssQ0FBQztZQUVyRCxxQkFBUyxFQUFDLENBQUNrRyxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCOEMsUUFBUSxDQUFDOUMsS0FBSyxDQUFDbEcsS0FBSyxDQUFDO2NBQ3JCa0gsV0FBVyxDQUFDaEIsS0FBSyxDQUFDMUYsUUFBUSxDQUFDO1lBQzVCLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3FJLFVBQVUsSUFBSSxDQUFDN0ksS0FBSyxJQUFJUSxRQUFRLEVBQUUsT0FBT2dCLDZCQUFDeUgseUJBQWEsT0FBRztZQUUvRCxNQUFNckIsY0FBYyxHQUFHO2NBQ3RCL0YsS0FBSztjQUNMcUU7YUFDQTtZQUVELE9BQ0MxRSw2QkFBQ0Qsc0JBQWEsQ0FBQzJHLFFBQVE7Y0FBQy9ILEtBQUssRUFBRXlIO1lBQWMsR0FDNUNwRyw2QkFBQ3NGLFVBQUksT0FBRyxDQUNnQjtVQUUzQiIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiUmVhY3RpdmVNb2RlbCIsInZpZXciLCJtb2RlbCIsImlzVmFsaWQiLCJjdXJyaWN1bHVtT2JqZWN0aXZlIiwidG9waWNUaXRsZXMiLCJsZW5ndGgiLCJldmVyeSIsInRvcGljIiwidHJpbSIsImNvbnRlbnRzIiwiY2hhcmFjdGVyaXN0aWNzIiwidW5kZWZpbmVkIiwibGFuZ3VhZ2UiLCJoYXNDb250ZW50IiwiaGFzIiwiY29uc3RydWN0b3IiLCJMZXNzb24iLCJsYW5ndWFnZXMiLCJjdXJyZW50IiwiZ2xvYmFsVGhpcyIsIm0iLCJvbiIsInRyaWdnZXJFdmVudCIsImlzUmVhZHkiLCJyZWFkeSIsInNldCIsInByb3BlcnR5IiwidmFsdWUiLCJwcm9wZXJ0aWVzIiwiaW5jbHVkZXMiLCJzYXZlIiwic3RhdGUiLCJmZXRjaGluZyIsInN0YXR1cyIsInVzZXJJZCIsInNlc3Npb25XcmFwcGVyIiwicmVzcG9uc2UiLCJwdWJsaXNoIiwiZXJyb3IiLCJlIiwiY29uc29sZSIsImdlbmVyYXRlVG9waWNzIiwidG9waWNzIiwiZ2VuZXJhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJvZmYiLCJMZXNzb25Db250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydE1lc3NhZ2UiLCJ0ZXh0cyIsIkFsZXJ0IiwibW9kZSIsInByb2Nlc3NBbGVydCIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJ2YWx1ZXMiLCJidWxsZXRQb2ludHMiLCJidWxsZXRQb2ludFJlZnMiLCJkcmFnZ2VkSW5kZXgiLCJzZXREcmFnZ2VkSW5kZXgiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIkJ1bGxldFBvaW50Rm9ybSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNvbnRlbnRUeXBlIiwic3RvcmUiLCJrZXlzIiwiY29udGVudFR5cGVzTGFiZWxzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwib3V0cHV0IiwiY29udGVudFR5cGVUaXRsZSIsIkJ1dHRvbkdyb3VwIiwiY29udGVudFR5cGVzQ2hhcmFjdGVyaXN0aWNzIiwiQ2xhc3NGb3JtQ29udGV4dCIsInVzZUNsYXNzRm9ybUNvbnRleHQiLCJGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNldFZhbHVlcyIsInNldEVycm9yIiwic2V0RmV0Y2hpbmciLCJmZXRjaGluZ1RvcGljcyIsInNldEZldGNoaW5nVG9waWNzIiwiZ2V0UHJvcGVydGllcyIsImN1cnJlbnRWYWx1ZSIsImZvcm1EaXNhYmxlZCIsIm9uU3VibWl0Iiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImlkIiwicHJvdmlkZXJWYWx1ZXMiLCJ0b3BpY3NUaXRsZXMiLCJvbkdlbmVyYXRlIiwiZGlzYWJsZWRUb3BpY3MiLCJsb2FkaW5nIiwiY2xzIiwiUHJvdmlkZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRpdGxlIiwiSW5wdXQiLCJyZXF1aXJlZCIsIkxhbmd1YWdlcyIsImFjdGlvbnMiLCJuZXh0IiwibGFuZ3VhZ2VLZXlzIiwiT2JqZWN0IiwiaW5kZXhPZiIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9zdG9yZS50cyIsInRzL3ZpZXdzL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2FsZXJ0LW1lc3NhZ2UudHN4IiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZS1idWxsZXQtcG9pbnRzLnRzIiwidHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGVudC10eXBlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsInRzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9sYW5ndWFnZXMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=