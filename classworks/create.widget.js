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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/classworks/create.widget",
        "is": "page",
        "route": "/classworks/create",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/classworks/create.widget');
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
        hash: 4205818262,
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
              label: texts.topics.add,
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
        hash: 2843851381,
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
        hash: 156769485,
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
                _routing.routing.replaceState({}, null, `/classworks/management/${store.model.id}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7WUFDOUQsTUFBTSxDQUFDdUksVUFBVSxFQUFFbEgsS0FBSyxDQUFDLEdBQUcsbUJBQVEsRUFBQ21ILHNCQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNqSixLQUFLLEVBQUVrSixRQUFRLENBQUMsR0FBRzFILGNBQUssQ0FBQ2dGLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDbkcsS0FBSyxDQUFDO1lBRXJELHFCQUFTLEVBQUMsQ0FBQ21HLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIrQyxRQUFRLENBQUMvQyxLQUFLLENBQUNuRyxLQUFLLENBQUM7Y0FDckJvSCxXQUFXLENBQUNqQixLQUFLLENBQUMzRixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDdUksVUFBVSxJQUFJLENBQUMvSSxLQUFLLElBQUlRLFFBQVEsRUFBRSxPQUFPZ0IsNkJBQUMySCx5QkFBYSxPQUFHO1lBRS9ELE1BQU1yQixjQUFjLEdBQUc7Y0FDdEJqRyxLQUFLO2NBQ0xzRTthQUNBO1lBRUQsT0FDQzNFLDZCQUFDRCxzQkFBYSxDQUFDNkcsUUFBUTtjQUFDakksS0FBSyxFQUFFMkg7WUFBYyxHQUM1Q3RHLDZCQUFDd0YsVUFBSSxPQUFHLENBQ2dCO1VBRTNCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlBhZ2UiLCJzaG93IiwibG9hZCIsImhpZGUiLCJjbGVhbiIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwidmlldyIsIm1vZGVsIiwiaXNWYWxpZCIsImN1cnJpY3VsdW1PYmplY3RpdmUiLCJ0b3BpY1RpdGxlcyIsImxlbmd0aCIsImV2ZXJ5IiwidG9waWMiLCJ0cmltIiwiY29udGVudHMiLCJjaGFyYWN0ZXJpc3RpY3MiLCJ1bmRlZmluZWQiLCJsYW5ndWFnZSIsImhhc0NvbnRlbnQiLCJoYXMiLCJjb25zdHJ1Y3RvciIsIkxlc3NvbiIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJnbG9iYWxUaGlzIiwibSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiaXNSZWFkeSIsInJlYWR5Iiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwidXNlcklkIiwic2Vzc2lvbldyYXBwZXIiLCJyZXNwb25zZSIsInB1Ymxpc2giLCJlcnJvciIsImUiLCJjb25zb2xlIiwiZ2VuZXJhdGVUb3BpY3MiLCJ0b3BpY3MiLCJnZW5lcmF0ZSIsIkFycmF5IiwiaXNBcnJheSIsIm9mZiIsIkxlc3NvbkNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMZXNzb25Db250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwiQWxlcnQiLCJtb2RlIiwicHJvY2Vzc0FsZXJ0IiwidXNlQnVsbGV0UG9pbnRzIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsIm1pbkJ1bGxldFBvaW50cyIsIm1heEJ1bGxldFBvaW50cyIsInZhbHVlcyIsImJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50UmVmcyIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsImluZGV4IiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJpc05vdEVtcHR5Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50Iiwic2V0VGltZW91dCIsImlucHV0RWxlbWVudCIsImZvY3VzIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJyZWdpc3RlckJ1bGxldFBvaW50UmVmIiwiZWxlbWVudCIsImNhblJlbW92ZUJ1bGxldFBvaW50IiwiQnVsbGV0UG9pbnRGb3JtIiwiZGlzYWJsZWQiLCJmaWVsZE5hbWUiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsImFkZCIsIm9uQ2xpY2siLCJtYXAiLCJwb2ludCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJpY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIiwiQ29udGVudFR5cGUiLCJzdG9yZSIsImtleXMiLCJjb250ZW50VHlwZXNMYWJlbHMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJwYXJzZUludCIsIm91dHB1dCIsImNvbnRlbnRUeXBlVGl0bGUiLCJCdXR0b25Hcm91cCIsImNvbnRlbnRUeXBlc0NoYXJhY3RlcmlzdGljcyIsIkNsYXNzRm9ybUNvbnRleHQiLCJ1c2VDbGFzc0Zvcm1Db250ZXh0IiwiRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiZmV0Y2hpbmdUb3BpY3MiLCJzZXRGZXRjaGluZ1RvcGljcyIsImdldFByb3BlcnRpZXMiLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInByb3ZpZGVyVmFsdWVzIiwidG9waWNzVGl0bGVzIiwib25HZW5lcmF0ZSIsImRpc2FibGVkVG9waWNzIiwibG9hZGluZyIsImNscyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIklucHV0IiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJhY3Rpb25zIiwibmV4dCIsImxhbmd1YWdlS2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJ0ZXh0c1JlYWR5IiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9ob29rcy91c2UtYnVsbGV0LXBvaW50cy50cyIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRlbnQtdHlwZS50c3giLCJ0cy92aWV3cy9mb3JtL2NvbnRleHQudHMiLCJ0cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2Zvcm0vbGFuZ3VhZ2VzLnRzeCIsInRzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19