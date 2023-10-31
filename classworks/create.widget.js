System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/core", "react@18.2.0", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/icons", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
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
    }, function (_pragmateUi003Alert) {
      dependency_9 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_10 = _pragmateUi003Components;
    }, function (_pragmateUi003Icons) {
      dependency_11 = _pragmateUi003Icons;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_13 = _beyondJsReact18Widgets103Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_15 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/create",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/ailearn-sdk/core', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['react', dependency_8], ['pragmate-ui/alert', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['@aimpact/chat/shared/hooks', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-classworks-create",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/classworks/create.widget",
        "is": "page",
        "route": "/classworks/create",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/classworks/create.widget');
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
          const LessonContext = exports.LessonContext = _react.default.createContext({});
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
          const ClassFormContext = exports.ClassFormContext = _react.default.createContext({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJQYWdlIiwic2hvdyIsImxvYWQiLCJoaWRlIiwiY2xlYW4iLCJleHBvcnRzIiwiX21vZGVsIiwiX2NvcmUiLCJfc2Vzc2lvbiIsIl9jb3JlMiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInZpZXciLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJjb250ZW50cyIsImNoYXJhY3RlcmlzdGljcyIsInVuZGVmaW5lZCIsImxhbmd1YWdlIiwiaGFzQ29udGVudCIsImhhcyIsImNvbnN0cnVjdG9yIiwiTGVzc29uIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImdsb2JhbFRoaXMiLCJtIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwicmVhZHkiLCJzZXQiLCJwcm9wZXJ0eSIsInZhbHVlIiwicHJvcGVydGllcyIsImluY2x1ZGVzIiwic2F2ZSIsInN0YXRlIiwiZmV0Y2hpbmciLCJzdGF0dXMiLCJ1c2VySWQiLCJzZXNzaW9uV3JhcHBlciIsInJlc3BvbnNlIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJnZW5lcmF0ZVRvcGljcyIsInRvcGljcyIsImdlbmVyYXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwib2ZmIiwiX3JlYWN0IiwiTGVzc29uQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTGVzc29uQ29udGV4dCIsInVzZUNvbnRleHQiLCJfYWxlcnQiLCJfY29udGV4dCIsIkFsZXJ0TWVzc2FnZSIsInRleHRzIiwidXNlQ2xhc3NGb3JtQ29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsIm1vZGUiLCJwcm9jZXNzQWxlcnQiLCJ1c2VCdWxsZXRQb2ludHMiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwibWluQnVsbGV0UG9pbnRzIiwibWF4QnVsbGV0UG9pbnRzIiwidmFsdWVzIiwiYnVsbGV0UG9pbnRzIiwiYnVsbGV0UG9pbnRSZWZzIiwidXNlUmVmIiwiZHJhZ2dlZEluZGV4Iiwic2V0RHJhZ2dlZEluZGV4IiwidXNlU3RhdGUiLCJkcm9wcGVkSW5kZXgiLCJzZXREcm9wcGVkSW5kZXgiLCJoYW5kbGVCdWxsZXRQb2ludHNDaGFuZ2UiLCJ1cGRhdGVkQnVsbGV0UG9pbnRzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZURyYWdTdGFydCIsIl8iLCJpbmRleCIsImhhbmRsZURyYWdPdmVyIiwiZHJvcHBlZFBvc2l0aW9uIiwiaGFuZGxlRHJhZ0VuZCIsIm5ld0J1bGxldFBvaW50cyIsIm1vdmVkQnVsbGV0UG9pbnQiLCJzcGxpY2UiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlS2V5RG93biIsImlzTGFzdEJ1bGxldFBvaW50IiwiaXNOb3RFbXB0eSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkQnVsbGV0UG9pbnQiLCJzaGlmdEtleSIsImZvY3VzQnVsbGV0UG9pbnQiLCJyZW1vdmVCdWxsZXRQb2ludCIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwicmVnaXN0ZXJCdWxsZXRQb2ludFJlZiIsImVsZW1lbnQiLCJjYW5SZW1vdmVCdWxsZXRQb2ludCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiX3VzZUJ1bGxldFBvaW50cyIsIkJ1bGxldFBvaW50Rm9ybSIsImRpc2FibGVkIiwiZmllbGROYW1lIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJCdXR0b24iLCJ2YXJpYW50IiwibGFiZWwiLCJhZGQiLCJvbkNsaWNrIiwibWFwIiwicG9pbnQiLCJkcmFnZ2FibGUiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdFbmQiLCJJY29uIiwiaWNvbiIsInR5cGUiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInJlZiIsIkNvbnRlbnRUeXBlIiwia2V5cyIsImNvbnRlbnRUeXBlc0xhYmVscyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJwYXJzZUludCIsIm91dHB1dCIsImNvbnRlbnRUeXBlVGl0bGUiLCJCdXR0b25Hcm91cCIsImNvbnRlbnRUeXBlc0NoYXJhY3RlcmlzdGljcyIsIkNsYXNzRm9ybUNvbnRleHQiLCJfY29tcG9uZW50czIiLCJfaG9va3MiLCJfYnVsbGV0UG9pbnRzIiwiX3JvdXRpbmciLCJfY29udGV4dDIiLCJfbGFuZ3VhZ2VzIiwiX2NvbnRlbnRUeXBlIiwiRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiZmV0Y2hpbmdUb3BpY3MiLCJzZXRGZXRjaGluZ1RvcGljcyIsInVzZUJpbmRlciIsImdldFByb3BlcnRpZXMiLCJjdXJyZW50VmFsdWUiLCJmb3JtRGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpZCIsInByb3ZpZGVyVmFsdWVzIiwidG9waWNzVGl0bGVzIiwib25HZW5lcmF0ZSIsImRpc2FibGVkVG9waWNzIiwibG9hZGluZyIsImNscyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJ0aXRsZSIsIklucHV0IiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJhY3Rpb25zIiwibmV4dCIsImxhbmd1YWdlS2V5cyIsIk9iamVjdCIsImluZGV4T2YiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MyIiwiX2Zvcm0iLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsIlByZWxvYWRTY3JlZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYWxlcnQtbWVzc2FnZS50c3giLCIvdHMvdmlld3MvZm9ybS9idWxsZXQtcG9pbnRzL2hvb2tzL3VzZS1idWxsZXQtcG9pbnRzLnRzIiwiL3RzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250ZW50LXR5cGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDUSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQVgs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