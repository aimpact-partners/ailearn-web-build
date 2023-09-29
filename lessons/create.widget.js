System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.1/alert", "pragmate-ui@0.0.1/form", "pragmate-ui@0.0.1/icons", "pragmate-ui@0.0.1/components", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_pragmateUi001Form) {
      dependency_10 = _pragmateUi001Form;
    }, function (_pragmateUi001Icons) {
      dependency_11 = _pragmateUi001Icons;
    }, function (_pragmateUi001Components) {
      dependency_12 = _pragmateUi001Components;
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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxFQUFFakgsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ2tILHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNoSixLQUFLLEVBQUVpSixRQUFRLENBQUMsR0FBR3pILGNBQUssQ0FBQytFLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDbEcsS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ2tHLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIrQyxRQUFRLENBQUMvQyxLQUFLLENBQUNsRyxLQUFLLENBQUM7Y0FDckJtSCxXQUFXLENBQUNqQixLQUFLLENBQUMxRixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDc0ksVUFBVSxJQUFJLENBQUM5SSxLQUFLLElBQUlRLFFBQVEsRUFBRSxPQUFPZ0IsNkJBQUMwSCx5QkFBYSxPQUFHO1lBRS9ELE1BQU1yQixjQUFjLEdBQUc7Y0FDdEJoRyxLQUFLO2NBQ0xxRTthQUNBO1lBRUQsT0FDQzFFLDZCQUFDRCxzQkFBYSxDQUFDNEcsUUFBUTtjQUFDaEksS0FBSyxFQUFFMEg7WUFBYyxHQUM1Q3JHLDZCQUFDdUYsVUFBSSxPQUFHLENBQ2dCO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlBhZ2UiLCJzaG93IiwibG9hZCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwidmlldyIsIm1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJ1bmRlZmluZWQiLCJsYW5ndWFnZSIsImhhc0NvbnRlbnQiLCJoYXMiLCJjb25zdHJ1Y3RvciIsIkxlc3NvbiIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJnbG9iYWxUaGlzIiwibSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJlcnJvciIsImUiLCJjb25zb2xlIiwiZ2VuZXJhdGVUb3BpY3MiLCJ0b3BpY3MiLCJnZW5lcmF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm9mZiIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwiQWxlcnQiLCJtb2RlIiwicHJvY2Vzc0FsZXJ0IiwidXNlQnVsbGV0UG9pbnRzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsIm1pbkJ1bGxldFBvaW50cyIsIm1heEJ1bGxldFBvaW50cyIsInZhbHVlcyIsImJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50UmVmcyIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsImluZGV4IiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJpc05vdEVtcHR5Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiQnVsbGV0UG9pbnRGb3JtIiwiZGlzYWJsZWQiLCJmaWVsZE5hbWUiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsIm9uQ2xpY2siLCJtYXAiLCJwb2ludCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJpY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIiwiQ29udGVudFR5cGUiLCJzdG9yZSIsImtleXMiLCJjb250ZW50VHlwZXNMYWJlbHMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJwYXJzZUludCIsIm91dHB1dCIsImNvbnRlbnRUeXBlVGl0bGUiLCJCdXR0b25Hcm91cCIsImNvbnRlbnRUeXBlc0NoYXJhY3RlcmlzdGljcyIsIkNsYXNzRm9ybUNvbnRleHQiLCJ1c2VDbGFzc0Zvcm1Db250ZXh0IiwiRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiZmV0Y2hpbmdUb3BpY3MiLCJzZXRGZXRjaGluZ1RvcGljcyIsImdldFByb3BlcnRpZXMiLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInByb3ZpZGVyVmFsdWVzIiwidG9waWNzVGl0bGVzIiwib25HZW5lcmF0ZSIsImRpc2FibGVkVG9waWNzIiwibG9hZGluZyIsImNscyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIklucHV0IiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJhY3Rpb25zIiwibmV4dCIsImxhbmd1YWdlS2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRlbnQtdHlwZS50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vbGFuZ3VhZ2VzLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19