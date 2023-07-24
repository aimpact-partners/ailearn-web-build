System.register(["@beyond-js/widgets@0.1.4/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@0.0.6/page", "@beyond-js/reactive@1.1.2/model", "@aimpact/ailearn-sdk@0.0.1/core", "react@18.2.0", "pragmate-ui@0.0.36/alert", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons", "@aimpact/chat@0.0.2/shared/components", "@beyond-js/react-18-widgets@0.0.6/hooks", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/spinner", "@aimpact/chat@0.0.2/shared/hooks", "pragmate-ui@0.0.36/toast", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets014Render) {
      dependency_0 = _beyondJsWidgets014Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets006Page) {
      dependency_2 = _beyondJsReact18Widgets006Page;
    }, function (_beyondJsReactive112Model) {
      dependency_3 = _beyondJsReactive112Model;
    }, function (_aimpactAilearnSdk001Core) {
      dependency_4 = _aimpactAilearnSdk001Core;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi0036Alert) {
      dependency_6 = _pragmateUi0036Alert;
    }, function (_pragmateUi0036Form) {
      dependency_7 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_8 = _pragmateUi0036Icons;
    }, function (_aimpactChat002SharedComponents) {
      dependency_9 = _aimpactChat002SharedComponents;
    }, function (_beyondJsReact18Widgets006Hooks) {
      dependency_10 = _beyondJsReact18Widgets006Hooks;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Spinner) {
      dependency_12 = _pragmateUi0036Spinner;
    }, function (_aimpactChat002SharedHooks) {
      dependency_13 = _aimpactChat002SharedHooks;
    }, function (_pragmateUi0036Toast) {
      dependency_14 = _pragmateUi0036Toast;
    }, function (_beyondJsKernel019Styles) {
      dependency_15 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "0.0.1"], ["@aimpact/ailearn-api", "0.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["firebase", "10.0.0"], ["highlight.js", "11.8.0"], ["firebase-admin", "11.10.1"], ["marked", "5.1.1"], ["marked-mangle", "1.1.0"], ["dompurify", "3.0.5"], ["marked-highlight", "2.0.1"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.1"], ["@aimpact/ailearn-app", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@beyond-js/reactive/model', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['react', dependency_5], ['pragmate-ui/alert', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/icons', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/spinner', dependency_12], ['@aimpact/chat/shared/hooks', dependency_13], ['pragmate-ui/toast', dependency_14], ['@beyond-js/kernel/styles', dependency_15]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "class-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.1/classes/management.widget",
        "is": "page",
        "route": "/classes/management/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.1/classes/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2816031921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.Page;
            }
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            show() {
              const isNew = this.uri.vars.get('id') === 'new';
              this.#store.view = this.uri.qs.get('view') === 'form' || isNew ? 'FORM' : 'GENERATE';
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1593488270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #model;
            view = 'FORM';
            get model() {
              return this.#model;
            }
            /**
             * Represents the backend object of the model.
             *  The backend object allows access to the socket object and listening to events.
             * The backend object is a property of the provider object, which can be accessed from the reactive model Item.
             */
            #backend;
            /**
             * Represents a Socket.IO socket connection.
             *
             * The socket object allows bidirectional communication between the client and server
             * using the Socket.IO library. It provides methods and events for sending and receiving
             * data in real time.
             */
            #socket;
            get isValid() {
              let isValid = !!this.#model.curriculumObjective && !!(this.#model.topicTitles?.length >= 3) && this.#model.topicTitles?.every(topic => topic.trim() !== '');
              return isValid;
            }
            constructor() {
              super();
              this.reactiveProps(['view']);
            }
            #listen = async data => {
              if (!data.item) return;
              this.#model.upgrade(data);
            };
            async load(id) {
              if (this.#model?.id === id) {
                return;
              }
              if (id === 'new') id = undefined;
              if (this.#model && this.#model.id !== id) {
                this.#model.off('change', this.#listen);
                this.#model = undefined;
              }
              this.#model = new _core.Class({
                id
              });
              globalThis.m = this.#model;
              await this.#model.isReady;
              this.#backend = await this.#model.provider.backend;
              this.#socket = await this.#backend.socket;
              this.#socket.on('class-generation', this.#listen);
              if (!id) {
                this.ready = true;
                return;
              }
              const response = await this.#model.load();
              //await this.#model?.process(response);
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
                const response = await this.#model.publish();
                if (!response.status) return {
                  error: response.error
                };
                return true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
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
        hash: 2783194427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClassContext = exports.ClassContext = void 0;
          var React = require("react");
          const ClassContext = React.createContext({});
          exports.ClassContext = ClassContext;
          const useClassContext = () => React.useContext(ClassContext);
          exports.useClassContext = useClassContext;
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
        hash: 3146030461,
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
            startValues = ['']
          }) {
            const [bulletPoints, setBulletPoints] = (0, _react.useState)(startValues);
            const bulletPointRefs = (0, _react.useRef)([]);
            const [draggedIndex, setDraggedIndex] = (0, _react.useState)(null);
            const [droppedIndex, setDroppedIndex] = (0, _react.useState)(null);
            const handleBulletPointsChange = updatedBulletPoints => handleChange({
              currentTarget: {
                name,
                value: updatedBulletPoints
              }
            });
            (0, _react.useEffect)(() => {
              handleBulletPointsChange(bulletPoints);
            }, [bulletPoints]);
            const handleDragStart = (_, index) => setDraggedIndex(index);
            const handleDragOver = droppedPosition => {
              if (draggedIndex !== droppedPosition) setDroppedIndex(droppedPosition);
            };
            const handleDragEnd = () => {
              const newBulletPoints = [...bulletPoints];
              const movedBulletPoint = bulletPoints[draggedIndex];
              newBulletPoints.splice(draggedIndex, 1);
              newBulletPoints.splice(droppedIndex, 0, movedBulletPoint);
              setBulletPoints(newBulletPoints);
              setDraggedIndex(null);
            };
            const handleInputChange = (index, event) => {
              const {
                value
              } = event.target;
              const updatedBulletPoints = [...bulletPoints];
              updatedBulletPoints[index] = value;
              setBulletPoints(updatedBulletPoints);
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
                setBulletPoints(prevBulletPoints => [...prevBulletPoints, '']);
                setTimeout(() => {
                  focusBulletPoint(bulletPoints.length);
                }, 0);
              }
            };
            const removeBulletPoint = index => {
              if (bulletPoints.length > minBulletPoints) {
                setBulletPoints(prevBulletPoints => {
                  const updatedBulletPoints = [...prevBulletPoints];
                  updatedBulletPoints.splice(index, 1);
                  focusBulletPoint(updatedBulletPoints.length - 1);
                  return updatedBulletPoints;
                });
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
        hash: 341116911,
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
            handleChange,
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
              minBulletPoints
            });
            return _react.default.createElement("div", {
              className: 'bullet-points-form'
            }, _react.default.createElement("div", {
              className: 'bullet-points-form-header'
            }, _react.default.createElement("p", null, texts.topics.description), _react.default.createElement(_form.Button, {
              variant: 'primary outline',
              label: 'Add Topic',
              onClick: addBulletPoint
            })), bulletPoints.map((point, index) => _react.default.createElement("div", {
              key: index,
              className: 'bullet-points-item',
              draggable: true,
              onDragStart: event => handleDragStart(event, index),
              onDragOver: () => handleDragOver(index),
              onDragEnd: handleDragEnd
            }, _react.default.createElement(_icons.Icon, {
              icon: 'drag',
              className: 'drag-bullet-point'
            }), _react.default.createElement("p", null, " ", index + 1, ". "), _react.default.createElement("input", {
              className: 'bullet-points-input',
              type: 'text',
              value: point,
              onChange: event => handleInputChange(index, event),
              onKeyDown: event => handleKeyDown(index, event),
              ref: element => registerBulletPointRef(index, element)
            }), canRemoveBulletPoint && _react.default.createElement(_icons.Icon, {
              icon: 'delete',
              className: 'delete-bullet-point',
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

      /*********************************
      INTERNAL MODULE: ./views/form/form
      *********************************/

      ims.set('./views/form/form', {
        hash: 199038903,
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
          function Form() {
            const {
              store,
              texts
            } = (0, _context2.useClassContext)();
            const defaultValues = {
              curriculumObjective: '',
              topicTitles: ['']
            };
            const [values, setValues] = React.useState(defaultValues);
            const [error, setError] = React.useState('');
            const [fetching, setFetching] = React.useState(store.fetching);
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
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
                await store.save();
                _routing.routing.replaceState({}, null, `/classes/management/${store.model.id}`);
              } catch (error) {
                console.error(error);
              }
            }
            const providerValues = {
              texts
            };
            return React.createElement(_context.ClassFormContext.Provider, {
              value: providerValues
            }, React.createElement("div", {
              className: 'class-view'
            }, React.createElement(_components.CollapsibleHeader, {
              title: texts.title
            }), React.createElement("form", {
              className: 'class-form'
            }, React.createElement("span", null, React.createElement(_components.Input, {
              label: texts.curriculumObjective,
              name: 'curriculumObjective',
              type: 'text',
              onChange: handleChange,
              required: true
            })), React.createElement("div", {
              className: 'form__field'
            }, React.createElement("h3", null, texts.topics.title), React.createElement("hr", null), React.createElement(_bulletPoints.BulletPointForm, {
              handleChange: handleChange,
              fieldName: 'topicTitles'
            })), React.createElement(_form.Button, {
              label: texts.actions.next,
              type: 'submit',
              icon: 'save',
              onClick: onSubmit,
              fetching: fetching,
              ...formDisabled
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/generator/class/content
      ***********************************************/

      ims.set('./views/generator/class/content', {
        hash: 1765248517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassContent = ClassContent;
          var React = require("react");
          var _context = require("../../context");
          var _emptyContent = require("../shared/empty-content");
          var _content = require("../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ClassContent({
            area
          }) {
            const {
              store,
              store: {
                model
              }
            } = (0, _context.useClassContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const [classElement, setClassElement] = React.useState(model[area]);
            const generate = async event => {
              event.preventDefault();
              setFetching(true);
              await model.generateAction(area);
            };
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching));
            (0, _hooks.useBinder)([model], () => {
              setFetching(false);
              setClassElement({
                ...model[area]
              });
            }, 'class.generate.content');
            const cls = `class__content visible ${fetching ? ' is-fetching' : ''}`;
            const hasContent = !!model[area];
            const Control = hasContent ? React.createElement(_content.AreaContent, {
              selected: area,
              area: classElement
            }) : React.createElement(_emptyContent.EmptyContent, {
              generate: generate,
              fetching: fetching
            });
            return React.createElement("article", {
              className: cls
            }, Control);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/generator/class/index
      *********************************************/

      ims.set('./views/generator/class/index', {
        hash: 643092124,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassContentGenerator = ClassContentGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _content = require("./content");
          var _regenerateForm = require("../shared/regenerate-form");
          var _tabs = require("./tabs");
          function ClassContentGenerator() {
            const {
              store
            } = (0, _context.useClassContext)();
            const {
              model
            } = store;
            const [fetching, setFetching] = React.useState(store.fetching);
            const [selected, setSelected] = React.useState('synthesis');
            const dialogRef = React.useRef(null);
            const closeModal = () => dialogRef.current.close();
            const openModal = () => dialogRef.current.showModal();
            const generate = async correction => {
              setFetching(true);
              const res = await model.generateAction(selected);
              setFetching(false);
            };
            const onClickItem = event => {
              event.stopPropagation();
              setSelected(event.currentTarget.dataset.area);
            };
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: 'class-generator'
            }, React.createElement("article", {
              className: cls
            }, React.createElement("article", {
              className: 'generator-header'
            }, React.createElement("section", {
              className: 'class-areas'
            }, React.createElement(_tabs.default, {
              onClickItem: onClickItem,
              selected: selected
            })), React.createElement("section", {
              className: 'class-areas__actions'
            }, React.createElement(_icons.IconButton, {
              icon: 'generate',
              onClick: openModal
            }), React.createElement(_icons.IconButton, {
              icon: 'edit'
            }))), React.createElement(_content.ClassContent, {
              area: selected
            })), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_regenerateForm.default, {
              closeModal: closeModal,
              submit: generate
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/generator/class/tabs
      ********************************************/

      ims.set('./views/generator/class/tabs', {
        hash: 2794205796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ClassTabs;
          var _react = require("react");
          var _context = require("../../context");
          function ClassTabs({
            onClickItem,
            selected
          }) {
            const {
              texts
            } = (0, _context.useClassContext)();
            const actionNames = Object.keys(texts.classTopics);
            return actionNames.map((tab, key) => _react.default.createElement("div", {
              className: `area-tab ${selected === tab ? 'active' : ''}`,
              "data-area": tab,
              key: `${tab} - ${key}`,
              onClick: onClickItem
            }, tab));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/generator/index
      ***************************************/

      ims.set('./views/generator/index', {
        hash: 2781107651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassGenerator = ClassGenerator;
          var React = require("react");
          var _context = require("../context");
          var _class = require("./class");
          var _topics = require("./topics");
          var _components = require("@aimpact/chat/shared/components");
          function ClassGenerator() {
            const {
              store,
              store: {
                model
              },
              texts
            } = (0, _context.useClassContext)();
            const [fetching, setFetching] = React.useState(store.fetching);
            const cls = `class-view${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_components.CollapsibleHeader, {
              title: model.curriculumObjective,
              subtitle: texts.generator.title
            }), React.createElement(_components.Tab, {
              panes: [{
                tab: 'Class',
                content: React.createElement(_class.ClassContentGenerator, null)
              }, {
                tab: 'Topics',
                content: React.createElement(_topics.TopicsGenerator, null)
              }],
              setUrl: true
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/generator/shared/content
      ************************************************/

      ims.set('./views/generator/shared/content', {
        hash: 1194400284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AreaContent = AreaContent;
          var _react = require("react");
          var _questions = require("./questions");
          var _spinner = require("pragmate-ui/spinner");
          var _hooks = require("@aimpact/chat/shared/hooks");
          function AreaContent({
            area,
            selected
          }) {
            const mark = (0, _hooks.useMarked)();
            let renderedContent;
            const renderContent = function () {
              if (area?.status !== 'ready') {
                renderedContent = _react.default.createElement(_spinner.Spinner, {
                  active: true
                });
              } else if (selected === 'assessment') {
                renderedContent = _react.default.createElement(_questions.QuestionsComponent, {
                  values: area?.content
                });
              } else {
                renderedContent = _react.default.createElement("div", {
                  dangerouslySetInnerHTML: {
                    __html: mark(area?.content)
                  }
                });
              }
              return renderedContent;
            };
            return _react.default.createElement("div", {
              className: 'content-wrapper'
            }, renderContent());
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/shared/empty-content
      ******************************************************/

      ims.set('./views/generator/shared/empty-content', {
        hash: 1634127563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyContent = EmptyContent;
          var _react = require("react");
          var _context = require("../../context");
          var _form = require("pragmate-ui/form");
          function EmptyContent({
            generate,
            fetching
          }) {
            const {
              texts
            } = (0, _context.useClassContext)();
            return _react.default.createElement("div", {
              className: 'empty-content'
            }, _react.default.createElement("h4", null, _react.default.createElement("strong", null, " ", texts.empty.title), " ", _react.default.createElement("br", null), texts.empty.subtitle), _react.default.createElement(_form.Button, {
              loading: fetching,
              onClick: generate,
              icon: 'generate',
              label: texts.generate
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/generator/shared/questions
      **************************************************/

      ims.set('./views/generator/shared/questions', {
        hash: 1142895514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.QuestionComponent = QuestionComponent;
          exports.QuestionsComponent = QuestionsComponent;
          exports.TopicComponent = TopicComponent;
          var React = require("react");
          function QuestionsComponent({
            values
          }) {
            try {
              const data = JSON.parse(values);
              return React.createElement("div", null, data.topics.map((topic, index) => React.createElement(TopicComponent, {
                key: index,
                topic: topic
              })));
            } catch (e) {
              console.log('error rendering', e);
              return null;
            }
          }
          function TopicComponent({
            topic
          }) {
            return React.createElement("div", null, React.createElement("h2", null, topic.title), topic.questions.map((question, index) => React.createElement(QuestionComponent, {
              key: index,
              question: question
            })));
          }
          function QuestionComponent({
            question
          }) {
            return React.createElement("div", null, React.createElement("h3", null, question.text), React.createElement("ul", null, question.options.map((option, index) => React.createElement(OptionComponent, {
              key: index,
              option: option,
              isCorrect: index === question.correct_answer
            }))));
          }
          function OptionComponent({
            option,
            isCorrect
          }) {
            return React.createElement("li", null, isCorrect ? React.createElement("span", {
              className: 'correct'
            }, option) : option);
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/generator/shared/regenerate-form
      ********************************************************/

      ims.set('./views/generator/shared/regenerate-form', {
        hash: 2167143200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = RegenerateForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../../context");
          function RegenerateForm({
            closeModal,
            submit
          }) {
            const [value, setValue] = _react.default.useState('');
            const [error, setError] = _react.default.useState(false);
            const [loading, setLoading] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useClassContext)();
            function handleChange(event) {
              const {
                value: textAreaValue
              } = event.target;
              setValue(textAreaValue);
            }
            function handleClose() {
              setError(false);
              setLoading(false);
              setValue('');
              closeModal();
            }
            const handleSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await submit(value);
              /* 	if (!response.status) setError(response.error); */
              _toast.toast.success('Regenerating...');
              handleClose();
            };
            return _react.default.createElement(_form.Form, {
              onSubmit: handleSubmit,
              className: 'regenerate-form'
            }, _react.default.createElement("h1", null, texts.generator.action), error && _react.default.createElement("div", {
              className: 'error error-container'
            }, error), _react.default.createElement(_form.Textarea, {
              rows: 5,
              value: value,
              placeholder: 'Agrega tu contenido...',
              onChange: handleChange
            }), _react.default.createElement("footer", null, _react.default.createElement(_form.Button, {
              icon: 'close-circle',
              label: 'Cancel',
              variant: 'link',
              onClick: handleClose
            }), _react.default.createElement(_form.Button, {
              type: 'submit',
              icon: 'save',
              onClick: handleSubmit,
              label: 'Submit',
              loading: loading
            })));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/generator/topics/index
      **********************************************/

      ims.set('./views/generator/topics/index', {
        hash: 1035068713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicsGenerator = TopicsGenerator;
          var React = require("react");
          var _context = require("../../context");
          var _list = require("./list");
          function TopicsGenerator() {
            const {
              store: {
                model
              }
            } = (0, _context.useClassContext)();
            return React.createElement(_list.List, {
              items: model.topicsElements
            });
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/generator/topics/list/index
      ***************************************************/

      ims.set('./views/generator/topics/list/index', {
        hash: 679800928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var React = require("react");
          var _topic = require("../topic");
          function List({
            items
          }) {
            return React.createElement(React.Fragment, null, items?.map((item, key) => React.createElement("span", {
              key: key
            }, React.createElement(_topic.TopicItem, {
              item: item
            }))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/content
      ******************************************************/

      ims.set('./views/generator/topics/topic/content', {
        hash: 114974225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicContent = TopicContent;
          var React = require("react");
          var _context = require("./context");
          var _emptyContent = require("../../shared/empty-content");
          var _content = require("../../shared/content");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TopicContent({
            item,
            visible
          }) {
            const {
              selected
            } = (0, _context.useTopicContext)();
            const [fetching, setFetching] = React.useState(false);
            const [topicElement, setTopicElement] = React.useState(item[selected]);
            const generate = async event => {
              event.preventDefault();
              event.stopPropagation();
              setFetching(true);
              const response = await item.generateElement(selected);
              item.update(response);
              setFetching(false);
            };
            (0, _hooks.useBinder)([item], () => setTopicElement({
              ...item[selected]
            }));
            React.useEffect(() => setTopicElement(item[selected]), [item[selected]]);
            const cls = `class__content ${fetching ? ' is-fetching' : ''} ${visible ? 'visible' : ''}`;
            const hasElements = !!item[selected];
            const Control = hasElements ? React.createElement(_content.AreaContent, {
              selected: selected,
              area: topicElement
            }) : React.createElement(_emptyContent.EmptyContent, {
              generate: generate,
              fetching: fetching
            });
            return React.createElement("article", {
              className: cls
            }, Control);
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/context
      ******************************************************/

      ims.set('./views/generator/topics/topic/context', {
        hash: 3800438969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTopicContext = exports.TopicContext = void 0;
          var React = require("react");
          const TopicContext = React.createContext({});
          exports.TopicContext = TopicContext;
          const useTopicContext = () => React.useContext(TopicContext);
          exports.useTopicContext = useTopicContext;
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/index
      ****************************************************/

      ims.set('./views/generator/topics/topic/index', {
        hash: 3965759490,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TopicItem = TopicItem;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _context2 = require("./context");
          var _content = require("./content");
          var _regenerateForm = require("../../shared/regenerate-form");
          var _tabs = require("./tabs");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function TopicItem({
            item
          }) {
            const name = item.title;
            const {
              store
            } = (0, _context.useClassContext)();
            const {
              model
            } = store;
            const [fetching, setFetching] = React.useState(store.fetching);
            const [selected, setSelected] = React.useState('synthesis');
            const dialogRef = React.useRef(null);
            const closeModal = () => dialogRef.current.close();
            const openModal = e => {
              e.stopPropagation();
              dialogRef.current.showModal();
            };
            const [visible, setVisible] = React.useState(false);
            const handleHeaderClick = () => setVisible(!visible);
            const [topic, setTopic] = React.useState(item);
            (0, _hooks.useBinder)([item], () => setTopic(item));
            const generate = async correction => {
              setFetching(true);
              await model.generateElement(selected);
              setFetching(false);
            };
            const onClickItem = event => {
              event.stopPropagation();
              setSelected(event.currentTarget.dataset.area);
              setVisible(true);
            };
            const cls = `topic__item ${fetching ? ' is-fetching' : ''}`;
            const value = {
              selected,
              topic: name,
              store
            };
            return React.createElement(_context2.TopicContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: 'class-generator'
            }, React.createElement("article", {
              className: 'generator-header',
              onClick: handleHeaderClick
            }, React.createElement("h3", {
              className: 'topic-title'
            }, name), React.createElement(_icons.IconButton, {
              className: `collapse-topic ${visible ? 'visible' : ''}`,
              icon: 'left'
            })), React.createElement("article", {
              className: cls
            }, React.createElement("article", {
              className: 'generator-header'
            }, React.createElement("section", {
              className: 'class-areas'
            }, React.createElement(_tabs.default, {
              onClickItem: onClickItem,
              selected: selected
            })), React.createElement("section", {
              className: 'class-areas__actions'
            }, React.createElement(_icons.IconButton, {
              icon: 'generate',
              onClick: openModal
            }), React.createElement(_icons.IconButton, {
              icon: 'edit'
            }))), React.createElement(_content.TopicContent, {
              visible: visible,
              item: topic
            }))), React.createElement("dialog", {
              ref: dialogRef
            }, React.createElement(_regenerateForm.default, {
              closeModal: closeModal,
              submit: generate
            })));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/generator/topics/topic/tabs
      ***************************************************/

      ims.set('./views/generator/topics/topic/tabs', {
        hash: 3512105888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = TopicTabs;
          var _react = require("react");
          const TABS = ['synthesis', 'prerequisites', 'assessment'];
          function TopicTabs({
            selected,
            onClickItem
          }) {
            return TABS.map((tab, key) => _react.default.createElement("div", {
              className: `area-tab ${selected === tab ? 'active' : ''}`,
              "data-area": tab,
              key: `${tab} - ${key}`,
              onClick: onClickItem
            }, tab));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3988316196,
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
          var _form = require("./form/form");
          var _generator = require("./generator");
          function Page({
            store
          }) {
            const [view, setView] = React.useState(store.view);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            const VIEWS = {
              FORM: _form.Form,
              GENERATE: _generator.ClassGenerator
            };
            (0, _hooks2.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready || fetching) return React.createElement(_components.PreloadScreen, null);
            const providerValues = {
              texts,
              store,
              setView
            };
            const Control = VIEWS[view];
            return React.createElement(_context.ClassContext.Provider, {
              value: providerValues
            }, React.createElement(Control, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUd2TSxLQUFLLENBQUNvRixRQUFRLENBQUNKLEtBQUssQ0FBQ2hHLEtBQUssQ0FBQztZQUVyRCxNQUFNd04sS0FBSyxHQUFHO2NBQ2JDLElBQUksRUFBRTFILFVBQUk7Y0FDVjJILFFBQVEsRUFBRXBFO2FBQ1Y7WUFFRCxxQkFBUyxFQUFDLENBQUN0RCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCdUgsUUFBUSxDQUFDdkgsS0FBSyxDQUFDaEcsS0FBSyxDQUFDO2NBQ3JCc0csV0FBVyxDQUFDTixLQUFLLENBQUN2RixRQUFRLENBQUM7WUFDNUIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDMk0sVUFBVSxJQUFJLENBQUNwTixLQUFLLElBQUlTLFFBQVEsRUFBRSxPQUFPTyxvQkFBQzJNLHlCQUFhLE9BQUc7WUFFL0QsTUFBTTlHLGNBQWMsR0FBRztjQUN0QnhGLEtBQUs7Y0FDTDJFLEtBQUs7Y0FDTG1IO2FBQ0E7WUFFRCxNQUFNdkYsT0FBTyxHQUFHNEYsS0FBSyxDQUFDclAsSUFBSSxDQUFDO1lBRTNCLE9BQ0M2QyxvQkFBQ0QscUJBQVksQ0FBQytGLFFBQVE7Y0FBQzFHLEtBQUssRUFBRXlHO1lBQWMsR0FDM0M3RixvQkFBQzRHLE9BQU8sT0FBRyxDQUNZO1VBRTFCIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJzaG93IiwiaXNOZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwidmlldyIsInFzIiwibG9hZCIsImV4cG9ydHMiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpc1ZhbGlkIiwiY3VycmljdWx1bU9iamVjdGl2ZSIsInRvcGljVGl0bGVzIiwibGVuZ3RoIiwiZXZlcnkiLCJ0b3BpYyIsInRyaW0iLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJkYXRhIiwiaXRlbSIsInVwZ3JhZGUiLCJpZCIsInVuZGVmaW5lZCIsIm9mZiIsIkNsYXNzIiwiZ2xvYmFsVGhpcyIsIm0iLCJpc1JlYWR5IiwicHJvdmlkZXIiLCJiYWNrZW5kIiwic29ja2V0Iiwib24iLCJyZWFkeSIsInJlc3BvbnNlIiwic2V0IiwicHJvcGVydHkiLCJ2YWx1ZSIsInByb3BlcnRpZXMiLCJpbmNsdWRlcyIsInNhdmUiLCJzdGF0ZSIsImZldGNoaW5nIiwic3RhdHVzIiwicHVibGlzaCIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJDbGFzc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDbGFzc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRNZXNzYWdlIiwidGV4dHMiLCJBbGVydCIsIm1vZGUiLCJ0aXRsZSIsInByb2Nlc3NBbGVydCIsInVzZUJ1bGxldFBvaW50cyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJtaW5CdWxsZXRQb2ludHMiLCJtYXhCdWxsZXRQb2ludHMiLCJzdGFydFZhbHVlcyIsImJ1bGxldFBvaW50cyIsInNldEJ1bGxldFBvaW50cyIsImJ1bGxldFBvaW50UmVmcyIsImRyYWdnZWRJbmRleCIsInNldERyYWdnZWRJbmRleCIsImRyb3BwZWRJbmRleCIsInNldERyb3BwZWRJbmRleCIsImhhbmRsZUJ1bGxldFBvaW50c0NoYW5nZSIsInVwZGF0ZWRCdWxsZXRQb2ludHMiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlRHJhZ1N0YXJ0IiwiXyIsImluZGV4IiwiaGFuZGxlRHJhZ092ZXIiLCJkcm9wcGVkUG9zaXRpb24iLCJoYW5kbGVEcmFnRW5kIiwibmV3QnVsbGV0UG9pbnRzIiwibW92ZWRCdWxsZXRQb2ludCIsInNwbGljZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVLZXlEb3duIiwiaXNMYXN0QnVsbGV0UG9pbnQiLCJpc05vdEVtcHR5Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJhZGRCdWxsZXRQb2ludCIsInNoaWZ0S2V5IiwiZm9jdXNCdWxsZXRQb2ludCIsInJlbW92ZUJ1bGxldFBvaW50IiwicHJldkJ1bGxldFBvaW50cyIsInNldFRpbWVvdXQiLCJpbnB1dEVsZW1lbnQiLCJjdXJyZW50IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlZ2lzdGVyQnVsbGV0UG9pbnRSZWYiLCJlbGVtZW50IiwiY2FuUmVtb3ZlQnVsbGV0UG9pbnQiLCJCdWxsZXRQb2ludEZvcm0iLCJmaWVsZE5hbWUiLCJjbGFzc05hbWUiLCJ0b3BpY3MiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsIm9uQ2xpY2siLCJtYXAiLCJwb2ludCIsImRyYWdnYWJsZSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnT3ZlciIsIm9uRHJhZ0VuZCIsIkljb24iLCJpY29uIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicmVmIiwiQ2xhc3NGb3JtQ29udGV4dCIsInVzZUNsYXNzRm9ybUNvbnRleHQiLCJGb3JtIiwic3RvcmUiLCJkZWZhdWx0VmFsdWVzIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsInNldEZldGNoaW5nIiwiY3VycmVudFZhbHVlIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJwcm92aWRlclZhbHVlcyIsIlByb3ZpZGVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbnB1dCIsInJlcXVpcmVkIiwiYWN0aW9ucyIsIm5leHQiLCJDbGFzc0NvbnRlbnQiLCJhcmVhIiwiY2xhc3NFbGVtZW50Iiwic2V0Q2xhc3NFbGVtZW50IiwiZ2VuZXJhdGUiLCJnZW5lcmF0ZUFjdGlvbiIsImNscyIsImhhc0NvbnRlbnQiLCJDb250cm9sIiwiQXJlYUNvbnRlbnQiLCJzZWxlY3RlZCIsIkVtcHR5Q29udGVudCIsIkNsYXNzQ29udGVudEdlbmVyYXRvciIsInNldFNlbGVjdGVkIiwiZGlhbG9nUmVmIiwidXNlUmVmIiwiY2xvc2VNb2RhbCIsImNsb3NlIiwib3Blbk1vZGFsIiwic2hvd01vZGFsIiwiY29ycmVjdGlvbiIsInJlcyIsIm9uQ2xpY2tJdGVtIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsIkNsYXNzVGFicyIsIkljb25CdXR0b24iLCJSZWdlbmVyYXRlRm9ybSIsInN1Ym1pdCIsImFjdGlvbk5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzVG9waWNzIiwidGFiIiwiQ2xhc3NHZW5lcmF0b3IiLCJzdWJ0aXRsZSIsImdlbmVyYXRvciIsIlRhYiIsInBhbmVzIiwiY29udGVudCIsIlRvcGljc0dlbmVyYXRvciIsInNldFVybCIsIm1hcmsiLCJyZW5kZXJlZENvbnRlbnQiLCJyZW5kZXJDb250ZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsIlF1ZXN0aW9uc0NvbXBvbmVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZW1wdHkiLCJsb2FkaW5nIiwiSlNPTiIsInBhcnNlIiwiVG9waWNDb21wb25lbnQiLCJsb2ciLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIlF1ZXN0aW9uQ29tcG9uZW50IiwidGV4dCIsIm9wdGlvbnMiLCJvcHRpb24iLCJPcHRpb25Db21wb25lbnQiLCJpc0NvcnJlY3QiLCJjb3JyZWN0X2Fuc3dlciIsInNldFZhbHVlIiwic2V0TG9hZGluZyIsInRleHRBcmVhVmFsdWUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInRvYXN0Iiwic3VjY2VzcyIsImFjdGlvbiIsIlRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiTGlzdCIsIml0ZW1zIiwidG9waWNzRWxlbWVudHMiLCJUb3BpY0l0ZW0iLCJUb3BpY0NvbnRlbnQiLCJ2aXNpYmxlIiwidG9waWNFbGVtZW50Iiwic2V0VG9waWNFbGVtZW50IiwiZ2VuZXJhdGVFbGVtZW50IiwidXBkYXRlIiwidXNlRWZmZWN0IiwiaGFzRWxlbWVudHMiLCJUb3BpY0NvbnRleHQiLCJ1c2VUb3BpY0NvbnRleHQiLCJzZXRWaXNpYmxlIiwiaGFuZGxlSGVhZGVyQ2xpY2siLCJzZXRUb3BpYyIsIlRvcGljVGFicyIsIlRBQlMiLCJzZXRWaWV3IiwidGV4dHNSZWFkeSIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwiVklFV1MiLCJGT1JNIiwiR0VORVJBVEUiLCJQcmVsb2FkU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvc3RvcmUvaW5kZXgudHMiLCJ0cy92aWV3cy9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9hbGVydC1tZXNzYWdlLnRzeCIsInRzL3ZpZXdzL2Zvcm0vYnVsbGV0LXBvaW50cy9ob29rcy91c2VCdWxsZXRQb2ludHMudHMiLCJ0cy92aWV3cy9mb3JtL2J1bGxldC1wb2ludHMvaW5kZXgudHN4IiwidHMvdmlld3MvZm9ybS9jb250ZXh0LnRzIiwidHMvdmlld3MvZm9ybS9mb3JtLnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9jbGFzcy9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9jbGFzcy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvY2xhc3MvdGFicy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvaW5kZXgudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3NoYXJlZC9jb250ZW50LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci9zaGFyZWQvZW1wdHktY29udGVudC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3F1ZXN0aW9ucy50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3Ivc2hhcmVkL3JlZ2VuZXJhdGUtZm9ybS50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL2luZGV4LnRzeCIsInRzL3ZpZXdzL2dlbmVyYXRvci90b3BpY3MvbGlzdC9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL2NvbnRlbnQudHN4IiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9jb250ZXh0LnRzIiwidHMvdmlld3MvZ2VuZXJhdG9yL3RvcGljcy90b3BpYy9pbmRleC50c3giLCJ0cy92aWV3cy9nZW5lcmF0b3IvdG9waWNzL3RvcGljL3RhYnMudHN4IiwidHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=