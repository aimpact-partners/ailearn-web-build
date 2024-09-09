System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.21/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/swiper"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, UserData, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    VerificationCodeInput: void 0,
    InstitutionFlow: void 0,
    TeacherForm: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk110Session) {
      dependency_6 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_9 = _aimpactAilearnApp016Dev21ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev21ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp016Dev21ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_13 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Image) {
      dependency_14 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Form) {
      dependency_15 = _pragmateUi100Beta6Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Swiper) {
      dependency_19 = _pragmateUi100Beta6Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.21/identify.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2747464748,
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
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load();
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3559222692,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get isMinor() {
              return this.user.age < 18;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #organization = new _core.Organization({});
            get organization() {
              return this.#organization;
            }
            #requested;
            get requested() {
              if (this.user.metadata?.requests?.organizations) return 'teacherInstitution';
              return undefined;
              return this.user.metadata?.requests;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            load() {
              super.ready = true;
            }
            async registerTeacher(values) {
              return _session.sessionWrapper.user.freeTrial(values);
            }
            async registerInstitution(values) {
              try {
                const response = await this.#organization.publish(values);
                if (!response.status) {
                  throw new Error('ERROR_PUBLISHING_ORGANIZATION');
                }
                await _session.sessionWrapper.user.load();
                return await this.#organization.freeTrial();
              } catch (e) {
                console.error(e);
              }
            }
            async join(code) {
              const response = await this.organization.join({
                code
              });
              await this.organization.set(response.data.organization);
              return response;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1674043708,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/animations
      **********************************/

      ims.set('./views/animations', {
        hash: 265809797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            default: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fade: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/card/index
      **********************************/

      ims.set('./views/card/index', {
        hash: 4279264989,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _react = require("react");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          // Card.tsx

          function Card(props) {
            const {
              type,
              index
            } = props;
            const {
              onCardAction,
              texts,
              setRoleSelected
            } = (0, _context.useModuleContext)();
            if (!texts.cards[type]) return null;
            const {
              title,
              description,
              icon
            } = texts.cards[type];
            const attributes = {
              variant: 'primary',
              onClick: () => {
                onCardAction(() => setRoleSelected(type));
              }
            };
            let animate = {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: index * 0.1
              }
            };
            let exit = {
              opacity: 0,
              x: 125,
              transition: {
                duration: 0.3,
                delay: index * 0.1
              }
            };
            return _react.default.createElement(_framerMotion.motion.article, {
              className: "card__container",
              initial: {
                opacity: 0,
                y: 25
              },
              animate: animate,
              exit: exit
            }, _react.default.createElement("header", {
              className: "card__header"
            }, _react.default.createElement("div", {
              className: "icon__container"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon,
              className: "card__icon"
            }), _react.default.createElement("div", {
              className: "card__background-squares"
            })), _react.default.createElement("h2", null, title)), _react.default.createElement("div", {
              className: "card__content"
            }, _react.default.createElement("p", null, description)), _react.default.createElement("footer", {
              className: "card__actions"
            }, _react.default.createElement(_components.Button, {
              ...attributes
            }, texts.actions.accept)));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/components/code-input
      *********************************************/

      ims.set('./views/components/code-input', {
        hash: 2145715583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerificationCodeInput = VerificationCodeInput;
          var _react = require("react");
          /*bundle*/
          function VerificationCodeInput({
            length,
            onChange
          }) {
            const [values, setValues] = _react.default.useState(Array(length).fill(''));
            const inputsRef = _react.default.useRef([]);
            _react.default.useEffect(() => {
              const event = {
                target: {
                  value: values.join('')
                },
                currentTarget: {
                  value: values.join('')
                },
                type: 'change'
              };
              onChange(event);
            }, [values, onChange]);
            const handleChange = (value, index) => {
              const newValues = [...values];
              newValues[index] = value.slice(-1);
              setValues(newValues);
              const event = {
                target: {
                  value: newValues.join('')
                },
                currentTarget: {
                  value: values.join('')
                },
                type: 'change'
              };
              onChange(event);
              if (value && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
              }
            };
            const handleKeyDown = (e, index) => {
              if (e.key === 'Backspace' && !values[index] && index > 0) {
                setValues(prev => {
                  const newValues = [...prev];
                  newValues[index - 1] = '';
                  return newValues;
                });
                inputsRef.current[index - 1]?.focus();
              }
            };
            const handlePaste = e => {
              const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
              setValues(pasteData);
              pasteData.forEach((value, index) => {
                if (inputsRef.current[index]) {
                  inputsRef.current[index].value = value;
                }
              });
              inputsRef.current[pasteData.length - 1]?.focus();
              e.preventDefault();
            };
            return _react.default.createElement("div", {
              className: "verification-code-input"
            }, values.map((value, index) => _react.default.createElement("input", {
              key: index,
              type: "text",
              value: value,
              maxLength: 1,
              ref: el => inputsRef.current[index] = el,
              onChange: e => handleChange(e.target.value, index),
              onKeyDown: e => handleKeyDown(e, index),
              onPaste: handlePaste
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/input
      ****************************************/

      ims.set('./views/components/input', {
        hash: 176008505,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputComponent = InputComponent;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function InputComponent({
            label,
            ...props
          }) {
            const labelVariants = {
              floating: {
                y: -20,
                scale: 0.8
              },
              resting: {
                y: 0,
                scale: 1
              }
            };
            return _react.default.createElement("div", {
              className: "input-container"
            }, _react.default.createElement(_framerMotion.motion.label, {
              animate: "resting",
              whileFocus: "floating",
              variants: labelVariants,
              className: "input-label"
            }, label), _react.default.createElement("input", {
              ...props,
              className: "text-input"
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/radio/index
      **********************************************/

      ims.set('./views/components/radio/index', {
        hash: 2514436339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          // components/radioButton.tsx

          function RadioButton({
            label,
            onChange,
            ...rest
          }) {
            const inputRef = React.useRef(null);
            const handleLabelChange = event => {
              if (inputRef.current) {
                const changeEvent = new Event('change', {
                  bubbles: true,
                  cancelable: true
                });
                inputRef.current.dispatchEvent(changeEvent);
              }
            };
            return React.createElement("label", {
              className: "radio-button",
              onChange: handleLabelChange
            }, React.createElement("input", {
              type: "radio",
              ref: inputRef,
              onChange: onChange,
              ...rest
            }), React.createElement(_framerMotion.motion.div, {
              className: "radio-button__custom",
              animate: {
                scale: rest.checked ? 1.1 : 1
              },
              transition: {
                duration: 0.2
              }
            }, rest.checked && React.createElement(_framerMotion.motion.div, {
              className: "radio-button__inner",
              layout: true
            })), label);
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/components/radio/radio-group
      ****************************************************/

      ims.set('./views/components/radio/radio-group', {
        hash: 97078276,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          // components/radio-group.tsx

          function RadioGroup({
            children,
            value,
            onChange
          }) {
            return React.createElement("div", null, React.Children.map(children, child => {
              // Check if child is a valid element and if it conforms to the RadioButtonWithProps type
              if (React.isValidElement(child) && typeof child.props.value === 'string') {
                // Clone the element with new props
                return React.cloneElement(child, {
                  checked: child.props.value === value,
                  onChange: () => onChange(child.props.value)
                });
              }
              return child;
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/confirmed-request
      *****************************************/

      ims.set('./views/confirmed-request', {
        hash: 1726230691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmedRequest = ConfirmedRequest;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _user = require("./user");
          var _context = require("./context");
          var _animations = require("./animations");
          function ConfirmedRequest() {
            let {
              store,
              requested,
              texts,
              metadata,
              texts: {
                actions: textsActions
              }
            } = (0, _context.useModuleContext)();
            texts = texts.requested[requested];
            (0, _ui.useConfetti)();
            const showNavigation = requested === 'institution' || requested === 'teacher' || requested === 'teacherApproved';
            let description = texts.description;
            if (requested === 'teacherApproved') {
              description = description.replace('{organization}', store.organization.name);
            }
            console.log();
            return _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "processed__container"
            }, _react.default.createElement("div", {
              className: "left-column grid-center-container"
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement(_components.HtmlWrapper, {
              as: "h2",
              params: {}
            }, texts.title), texts.subtitle && _react.default.createElement(_components.HtmlWrapper, {
              as: "h6",
              params: {}
            }, texts.subtitle), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties(),
                totalGenerative: metadata?.coins.modules,
                totalInteraction: metadata?.coins.assignments
              },
              className: "welcome-description"
            }, description), showNavigation && _react.default.createElement("footer", {
              className: "actions__container"
            }, _react.default.createElement(_components.Link, {
              className: "btn btn-primary btn-middle",
              href: "/"
            }, textsActions.start)))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/welcome/01.webp",
              alt: texts.welcome
            }))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2475874023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/flow
      ****************************/

      ims.set('./views/flow', {
        hash: 1747716057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionFlow = SelectionFlow;
          var _react = require("react");
          var _teacher = require("./flows/teacher");
          var _institution = require("./flows/institution");
          var _student = require("./flows/student");
          var _context = require("./context");
          function SelectionFlow() {
            const {
              roleSelected
            } = (0, _context.useModuleContext)();
            const Controls = {
              student: _student.StudentFlow,
              teacher: _teacher.TeacherFlow,
              institution: _institution.InstitutionFlow
            };
            const Control = Controls[roleSelected];
            if (!Control) return null;
            return _react.default.createElement("div", {
              className: "general-container general-container--light"
            }, _react.default.createElement(Control, {
              key: "roleSelected"
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/flows/institution/index
      ***********************************************/

      ims.set('./views/flows/institution/index', {
        hash: 2687359409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstitutionFlow = InstitutionFlow;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _leftColumn = require("./left-column");
          var _navbar = require("../../navbar");
          var _animations = require("../../animations");
          /*bundle*/
          function InstitutionFlow() {
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({});
            const [error, setError] = _react.default.useState(null);
            const {
              store,
              setRequested,
              setRoleSelected,
              setMetadata,
              texts: {
                institution: {
                  form: texts
                }
              }
            } = (0, _context.useModuleContext)();
            const {
              fields
            } = texts;
            const disabled = {
              disabled: fetching
            };
            const requiredFields = ['name', 'type', 'educationalLevel', 'address'];
            const formCompleted = requiredFields.every(field => values[field]);
            const disabledBtn = {
              disabled: fetching || !formCompleted
            };
            const onChange = e => {
              setValues(prevValues => ({
                ...prevValues,
                [e.target.name]: e.target.value
              }));
            };
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              setError(null);
              try {
                const response = await store.registerInstitution(values);
                if (!response.status) {
                  throw new Error('An error occurred while submitting the form.');
                }
                setMetadata(response.data);
                setRequested('institution');
              } catch (err) {
                console.error(err);
                setError('An error occurred while submitting the form.');
              } finally {
                setFetching(false);
              }
            };
            const onBack = () => setRoleSelected('');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.Navbar, {
              onClick: onBack
            }), _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.InstitutionFormLeftColumn, null), _react.default.createElement(_framerMotion.motion.section, null, _react.default.createElement(_form.Form, {
              className: "floating-form",
              onSubmit: onSubmit
            }, error && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "error"
            }, error), _react.default.createElement(_form.Input, {
              name: "name",
              label: fields.name.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "type",
              label: fields.type.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "educationalLevel",
              label: fields.educationalLevel.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "address",
              label: fields.geographicAddress.label,
              variant: "floating",
              required: true,
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Checkbox, {
              name: "authorizedUser",
              label: fields.authorizedUser.label,
              type: "checkbox",
              required: true,
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              label: fields.submit.label,
              ...disabledBtn
            })))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/flows/institution/left-column
      *****************************************************/

      ims.set('./views/flows/institution/left-column', {
        hash: 2480786852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstitutionFormLeftColumn = InstitutionFormLeftColumn;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          function InstitutionFormLeftColumn() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.institution;
            const {
              user
            } = store;
            const {
              welcome
            } = texts;
            return _react.default.createElement("div", {
              className: "left-column"
            }, _react.default.createElement("div", {
              className: "user-welcome"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: user.photoURL
            }), _react.default.createElement("section", {
              className: "user-data__detail"
            }, _react.default.createElement("h3", null, user.displayName), _react.default.createElement("span", {
              className: "user-data__name"
            }, welcome.description))), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/flows/student
      *************************************/

      ims.set('./views/flows/student', {
        hash: 929036117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFlow = StudentFlow;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _user = require("../user");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbar = require("../navbar");
          function StudentFlow() {
            const entranceVariants = {
              hidden: {
                y: '50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            let {
              store,
              setRoleSelected,
              requested,
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.student.selection;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.Navbar, {
              onClick: () => setRoleSelected(undefined)
            }), _react.default.createElement(_framerMotion.motion.div, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center processed__container"
            }, _react.default.createElement("div", {
              className: "left-column grid-center-container "
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement(_components.HtmlWrapper, {
              as: "h2",
              params: {}
            }, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties()
              },
              className: "welcome-description"
            }, texts.description))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              className: "img-move-animation",
              src: "/assets/welcome/01.webp",
              alt: texts.welcome
            })))));
          }
        }
      });

      /****************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/context
      ****************************************************/

      ims.set('./views/flows/teacher/access/context', {
        hash: 2069280480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTeacherAccessContext = exports.TeacherAccessContext = void 0;
          var _react = require("react");
          const TeacherAccessContext = exports.TeacherAccessContext = _react.default.createContext({});
          const useTeacherAccessContext = () => _react.default.useContext(TeacherAccessContext);
          exports.useTeacherAccessContext = useTeacherAccessContext;
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/error-renderer
      ***********************************************************/

      ims.set('./views/flows/teacher/access/error-renderer', {
        hash: 2250220245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          function ErrorRenderer({
            error
          }) {
            if (!error) return null;
            if (typeof error === 'object') {
              return _react.default.createElement("div", {
                className: "error-text"
              }, _react.default.createElement("strong", {
                className: "flex-container text-center"
              }, error.title), _react.default.createElement("span", null, error.description));
            }
            return _react.default.createElement("span", {
              className: "error-text"
            }, error);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/form
      *************************************************/

      ims.set('./views/flows/teacher/access/form', {
        hash: 3384972384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherAccessForm = TeacherAccessForm;
          var _react = require("react");
          var _context = require("../../../context");
          var _codeInput = require("../../../components/code-input");
          var _components = require("pragmate-ui/components");
          var _context2 = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _framerMotion = require("framer-motion");
          var _errorRenderer = require("./error-renderer");
          function TeacherAccessForm({}) {
            const [error, setError] = _react.default.useState('');
            const entranceVariants = {
              hidden: {
                y: '-50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            const [, setStyleAlert] = _react.default.useState('error');
            const {
              setData
            } = (0, _context2.useTeacherAccessContext)();
            const {
              texts,
              store,
              setRequested
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const TOKEN_SIZE = 7;
            const [token, setToken] = _react.default.useState('');
            const {
              form: formTexts
            } = texts.teacher.institution;
            const disabled = token.length !== TOKEN_SIZE || fetching;
            const onSubmit = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const response = await store.join(token);
                if (response.data.status.toLowerCase() === 'pending') {
                  setRequested('teacherInstitution');
                  return;
                }
                setRequested('teacherApproved');
                await _session.sessionWrapper.user.load();
              } catch (e) {
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                // setStyleAlert(style);
                setError(texts.errors[e?.message?.toString()] ?? texts.errors.ERROR_PUBLISHING);
              } finally {
                setFetching(false);
              }
            };
            const onTokenChange = event => setToken(event.currentTarget?.value);
            //
            return _react.default.createElement(_framerMotion.motion.form, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "right-column center-container access__form",
              onSubmit: onSubmit
            }, _react.default.createElement(_codeInput.VerificationCodeInput, {
              length: TOKEN_SIZE,
              onChange: onTokenChange
            }), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, formTexts.form.action), _react.default.createElement("div", {
              className: "legend"
            }, _react.default.createElement("h6", null, formTexts.form.legend.title), _react.default.createElement("span", {
              className: "p2"
            }, formTexts.form.legend.description)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/index
      **************************************************/

      ims.set('./views/flows/teacher/access/index', {
        hash: 2829972496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherAccess = TeacherAccess;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          var _leftColumn = require("./left-column");
          var _form = require("./form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function TeacherAccess({
            setData
          }) {
            const variants = {
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                  duration: 0.5 // parent's own transition duration
                }
              }
            };

            const [token, setToken] = _react.default.useState('');
            const value = {
              token,
              setToken,
              setData
            };
            return _react.default.createElement(_context.TeacherAccessContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.motion.div, {
              variants: variants,
              initial: "hidden",
              animate: "visible"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherLeftColumn, null), _react.default.createElement(_form.TeacherAccessForm, null))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/left-column
      ********************************************************/

      ims.set('./views/flows/teacher/access/left-column', {
        hash: 111722249,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherLeftColumn = TeacherLeftColumn;
          var _react = require("react");
          var _context = require("../../../context");
          var _user = require("../../../user");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          function TeacherLeftColumn() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.teacher.institution;
            const entranceVariants = {
              hidden: {
                y: '-50%',
                opacity: 0
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "left-column"
            }, _react.default.createElement("div", {
              className: "user-data-container"
            }, _react.default.createElement(_user.UserData, null)), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/flows/teacher/form/index
      ************************************************/

      ims.set('./views/flows/teacher/form/index', {
        hash: 982317223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherForm = TeacherForm;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _leftColumn = require("./left-column");
          var _animations = require("../../../animations");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          /*bundle*/
          function TeacherForm({
            data,
            setData
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({});
            const [error, setError] = _react.default.useState(null);
            const {
              store,
              setRequested,
              setMetadata,
              texts: {
                teacher: {
                  form: texts
                }
              }
            } = (0, _context.useModuleContext)();
            const {
              fields
            } = texts;
            const disabled = {
              disabled: fetching
            };
            const requiredFields = ['role', 'grade', 'curricularArea', 'name', 'type', 'address'];
            const formCompleted = requiredFields.every(field => values[field]);
            const disabledBtn = {
              disabled: fetching || !formCompleted
            };
            const onChange = e => {
              setValues(prevValues => ({
                ...prevValues,
                [e.target.name]: e.target.value
              }));
            };
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              setError(null);
              try {
                const response = await store.registerTeacher(values);
                if (!response.status) {
                  throw new Error('FAILED');
                }
                setMetadata(response.data);
                setRequested('teacher');
              } catch (err) {
                if (err.error.code === 55) {
                  setError(texts.errors.ALREADY_WAITING);
                  return;
                }
                setError('An error occurred while submitting the form.');
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherFormLeftColumn, null), _react.default.createElement(_form.Form, {
              className: "floating-form vertical--center",
              onSubmit: onSubmit
            }, error && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "form-error__message"
            }, error), _react.default.createElement("div", {
              className: "form-two-columns"
            }, _react.default.createElement(_form.Input, {
              name: "role",
              label: fields.role.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "grade",
              label: fields.grade.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            })), _react.default.createElement(_form.Input, {
              name: "curricularArea",
              label: fields.curricularArea.label,
              required: true,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "name",
              required: true,
              label: fields.name.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "type",
              required: true,
              label: fields.type.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "address",
              required: true,
              label: fields.address.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              label: fields.submit.label,
              ...disabledBtn
            }))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/flows/teacher/form/left-column
      ******************************************************/

      ims.set('./views/flows/teacher/form/left-column', {
        hash: 1144960128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFormLeftColumn = TeacherFormLeftColumn;
          var _react = require("react");
          var _context = require("../../../context");
          var _user = require("../../../user");
          var _components = require("pragmate-ui/components");
          function TeacherFormLeftColumn() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.teacher;
            return _react.default.createElement("div", {
              className: "left-column"
            }, _react.default.createElement(_user.UserData, null), _react.default.createElement("section", {
              className: "panel__main-content"
            }, _react.default.createElement("h2", null, formTexts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {},
              className: "welcome-description"
            }, formTexts.description)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/flows/teacher/index
      *******************************************/

      ims.set('./views/flows/teacher/index', {
        hash: 453503339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFlow = TeacherFlow;
          var _react = require("react");
          var _institution = require("./institution");
          var _form = require("./form");
          var _access = require("./access");
          var _context = require("../../context");
          var _framerMotion = require("framer-motion");
          var _navbar = require("../../navbar");
          var _confirmedRequest = require("../../confirmed-request");
          function TeacherFlow() {
            const {
              texts,
              store,
              setRoleSelected
            } = (0, _context.useModuleContext)();
            const hasFreeTrial = store.user.metadata?.requests?.freeTrial;
            const freeTrialAsTeacher = store.user.teacher?.metadata?.role;
            const state = {};
            const [values, setValues] = _react.default.useState(state);
            const editValues = newValues => setValues({
              ...values,
              ...newValues
            });
            if (hasFreeTrial) {
              state.requested = freeTrialAsTeacher ? 'teacher' : 'institution';
            }
            const Controls = {
              form: _form.TeacherForm,
              institution: _institution.TeacherInstitution,
              access: _access.TeacherAccess // component for request access to an institution
            };

            if (values.requested) return _react.default.createElement(_confirmedRequest.ConfirmedRequest, null);
            const hasInstitution = values.hasInstitution;
            const controlKey = hasInstitution === undefined ? 'institution' : hasInstitution ? 'access' : 'form';
            const Control = Controls[controlKey];
            const onBack = () => {
              if (values.hasInstitution === undefined) {
                setRoleSelected('');
                return;
              }
              setValues({
                ...values,
                hasInstitution: undefined
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.Navbar, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              key: controlKey,
              data: values,
              setData: editValues
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/institution
      *************************************************/

      ims.set('./views/flows/teacher/institution', {
        hash: 322721919,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherInstitution = TeacherInstitution;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _radio = require("../../components/radio");
          var _animations = require("../../animations");
          // components/TeacherInstitution.tsx

          function TeacherInstitution({
            data,
            setData
          }) {
            const [valueSelected, setValueSelected] = _react.default.useState('');
            const {
              texts,
              store: {
                user
              }
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
            };
            const {
              hello,
              title,
              options,
              description
            } = texts.teacher.institution.intro;
            const onSubmit = event => {
              event.preventDefault();
              setData({
                hasInstitution: valueSelected === 'yes'
              });
            };
            const disabled = {
              disabled: valueSelected === undefined
            };
            return _react.default.createElement("div", null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "form-role-selection"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img img--3x",
              src: user.photoURL
            }), _react.default.createElement("header", {
              className: "text-center role-selection__title"
            }, _react.default.createElement(_components.HtmlWrapper, {
              params: {
                username: user.displayName
              }
            }, hello), _react.default.createElement("h3", null, title)), _react.default.createElement("div", {
              className: "radio-buttons-container "
            }, _react.default.createElement(_radio.RadioButton, {
              checked: valueSelected === 'yes',
              onChange: onChange,
              label: options.yes.label,
              value: "yes",
              name: "hasInstitution"
            }), _react.default.createElement(_radio.RadioButton, {
              checked: valueSelected === 'no',
              onChange: onChange,
              label: options.no.label,
              value: "no",
              name: "hasInstitution"
            }))), _react.default.createElement("div", {
              className: "box"
            }, valueSelected && _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "form-description"
            }, _react.default.createElement(_components.HtmlWrapper, null, options[valueSelected].description)), _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              ...disabled,
              onClick: onSubmit
            }, texts.actions.continue))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1185566263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _framerMotion = require("framer-motion");
          var _roleSelection = require("./role-selection");
          var _flow = require("./flow");
          var _confirmedRequest = require("./confirmed-request");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          // App.tsx

          function View({
            store
          }) {
            const {
              texts
            } = store;
            const [ready, setReady] = _react.default.useState(store.ready);
            const [roleSelected, setRoleSelected] = _react.default.useState();
            const controls = (0, _framerMotion.useAnimation)();
            const [action, setAction] = _react.default.useState(null);
            const [requested, setRequested] = _react.default.useState(store.requested);
            const [metadata, setMetadata] = _react.default.useState(store.user.metadata);
            const onCardAction = action => {
              setAction(action);
              controls.start({
                x: '-100%',
                opacity: 0
              });
            };
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            const onAnimationComplete = () => {
              if (action) {
                action();
                setAction(null);
              }
            };
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const value = {
              texts,
              setRoleSelected,
              requested,
              setRequested,
              onAnimationComplete,
              roleSelected,
              store,
              metadata,
              setMetadata,
              onCardAction,
              controls
            };
            const Controls = {
              flow: _flow.SelectionFlow,
              role: _roleSelection.RoleSelection,
              requested: _confirmedRequest.ConfirmedRequest
            };
            let Control = requested ? Controls.requested : roleSelected ? Controls.flow : Controls.role;
            const key = requested ? 'requested' : roleSelected ? 'flow' : 'role';
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              key: key
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/navbar
      ******************************/

      ims.set('./views/navbar', {
        hash: 119520259,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Navbar = Navbar;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          function Navbar({
            onClick
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", {
              className: "navbar-header"
            }, _react.default.createElement("div", {
              className: "container"
            }, _react.default.createElement("div", {
              className: "link",
              onClick: onClick
            }, _react.default.createElement(_image.Image, {
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement(_icons.Icon, {
              icon: "backArrow"
            }), " ", texts.back)));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/role-selection
      **************************************/

      ims.set('./views/role-selection', {
        hash: 3848594884,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleSelection = RoleSelection;
          var _react = require("react");
          var _context = require("./context");
          var _card = require("./card");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _image = require("pragmate-ui/image");
          var _swiper = require("pragmate-ui/swiper");
          // App.tsx

          function RoleSelection() {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const title = texts.title;
            const items = [_react.default.createElement(_card.Card, {
              type: "student",
              index: 0,
              key: "student"
            })];
            if (!store.isMinor) {
              items.push(_react.default.createElement(_card.Card, {
                type: "teacher",
                key: "teacher",
                index: 1
              }));
              items.push(_react.default.createElement(_card.Card, {
                type: "institution",
                key: "institution",
                index: 2
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "general-container vertical-center"
            }, _react.default.createElement("div", null), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--container"
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: "role-selection__header"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/rvd/rvd.png"
            }), _react.default.createElement("span", {
              className: "text-center"
            }, _react.default.createElement("h1", null, title), _react.default.createElement("span", null, texts.subtitle))), _react.default.createElement(_swiper.SwiperSlider, {
              slidesPerView: 'auto',
              spaceBetween: 20
            }, items), _react.default.createElement(_framerMotion.motion.div, {
              className: "circle-overlay",
              initial: {
                opacity: 0
              },
              exit: {
                width: '200vh',
                height: '200vh',
                opacity: 1,
                borderRadius: 0,
                zIndex: 9000,
                transition: {
                  duration: 0.3
                }
              }
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/user
      ****************************/

      ims.set('./views/user', {
        hash: 2957325365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function UserData({
            showWelcome,
            className
          } = {
            showWelcome: true
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              user
            } = store;
            const {
              welcome
            } = texts;
            const cls = `user-welcome${className ? ` ${className}` : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: user.photoURL
            }), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement("h6", null, React.createElement(_components.HtmlWrapper, {
              params: {
                username: user.displayName
              }
            }, welcome.hello)), showWelcome && React.createElement("span", {
              className: "user-data__name"
            }, welcome.description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/code-input",
        "from": "VerificationCodeInput",
        "name": "VerificationCodeInput"
      }, {
        "im": "./views/flows/institution/index",
        "from": "InstitutionFlow",
        "name": "InstitutionFlow"
      }, {
        "im": "./views/flows/teacher/form/index",
        "from": "TeacherForm",
        "name": "TeacherForm"
      }, {
        "im": "./views/user",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'VerificationCodeInput') && _export("VerificationCodeInput", VerificationCodeInput = require ? require('./views/components/code-input').VerificationCodeInput : value);
        (require || prop === 'InstitutionFlow') && _export("InstitutionFlow", InstitutionFlow = require ? require('./views/flows/institution/index').InstitutionFlow : value);
        (require || prop === 'TeacherForm') && _export("TeacherForm", TeacherForm = require ? require('./views/flows/teacher/form/index').TeacherForm : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./views/user').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInVzZUNvbmZldHRpIiwic2hvd05hdmlnYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsImxvZyIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJzdWJ0aXRsZSIsImdldFByb3BlcnRpZXMiLCJ0b3RhbEdlbmVyYXRpdmUiLCJjb2lucyIsIm1vZHVsZXMiLCJ0b3RhbEludGVyYWN0aW9uIiwiYXNzaWdubWVudHMiLCJMaW5rIiwiaHJlZiIsInN0YXJ0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3ZWxjb21lIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RlYWNoZXIiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIlNlbGVjdGlvbkZsb3ciLCJyb2xlU2VsZWN0ZWQiLCJDb250cm9scyIsInN0dWRlbnQiLCJTdHVkZW50RmxvdyIsInRlYWNoZXIiLCJUZWFjaGVyRmxvdyIsImluc3RpdHV0aW9uIiwiSW5zdGl0dXRpb25GbG93IiwiQ29udHJvbCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0UmVxdWVzdGVkIiwic2V0TWV0YWRhdGEiLCJmb3JtIiwiZmllbGRzIiwiZGlzYWJsZWQiLCJyZXF1aXJlZEZpZWxkcyIsImZvcm1Db21wbGV0ZWQiLCJldmVyeSIsImZpZWxkIiwiZGlzYWJsZWRCdG4iLCJwcmV2VmFsdWVzIiwib25TdWJtaXQiLCJlcnIiLCJvbkJhY2siLCJGcmFnbWVudCIsIk5hdmJhciIsIkluc3RpdHV0aW9uRm9ybUxlZnRDb2x1bW4iLCJzZWN0aW9uIiwiRm9ybSIsIklucHV0IiwicmVxdWlyZWQiLCJlZHVjYXRpb25hbExldmVsIiwiZ2VvZ3JhcGhpY0FkZHJlc3MiLCJDaGVja2JveCIsImF1dGhvcml6ZWRVc2VyIiwic3VibWl0IiwiZm9ybVRleHRzIiwicGhvdG9VUkwiLCJkaXNwbGF5TmFtZSIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic2VsZWN0aW9uIiwiVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJ1c2VUZWFjaGVyQWNjZXNzQ29udGV4dCIsIkVycm9yUmVuZGVyZXIiLCJfY29kZUlucHV0IiwiX2NvbnRleHQyIiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldFN0eWxlQWxlcnQiLCJzZXREYXRhIiwiVE9LRU5fU0laRSIsInRva2VuIiwic2V0VG9rZW4iLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwiZXJyb3JzIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsImFjdGlvbiIsImxlZ2VuZCIsIlRlYWNoZXJBY2Nlc3MiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIiwiUHJvdmlkZXIiLCJUZWFjaGVyTGVmdENvbHVtbiIsIlRlYWNoZXJGb3JtIiwiQUxSRUFEWV9XQUlUSU5HIiwiVGVhY2hlckZvcm1MZWZ0Q29sdW1uIiwicm9sZSIsImdyYWRlIiwiY3VycmljdWxhckFyZWEiLCJhZGRyZXNzIiwiX2FjY2VzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiaGFzRnJlZVRyaWFsIiwiZnJlZVRyaWFsQXNUZWFjaGVyIiwic3RhdGUiLCJlZGl0VmFsdWVzIiwiVGVhY2hlckluc3RpdHV0aW9uIiwiYWNjZXNzIiwiaGFzSW5zdGl0dXRpb24iLCJjb250cm9sS2V5IiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiaGVsbG8iLCJvcHRpb25zIiwiaW50cm8iLCJ1c2VybmFtZSIsInllcyIsIm5vIiwiYmxvY2siLCJjb250aW51ZSIsIl9ob29rcyIsIl9yb2xlU2VsZWN0aW9uIiwiX2Zsb3ciLCJzZXRSZWFkeSIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlQmluZGVyIiwib25BbmltYXRpb25Db21wbGV0ZSIsIlBhZ2VMb2FkZXIiLCJmbG93IiwiUm9sZVNlbGVjdGlvbiIsIkljb24iLCJiYWNrIiwiX2NhcmQiLCJfc3dpcGVyIiwiaXRlbXMiLCJwdXNoIiwiaGVhZGVyIiwiU3dpcGVyU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4Iiwic2hvd1dlbGNvbWUiLCJjbHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NvZGUtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3ZpZXdzL2NvbmZpcm1lZC1yZXF1ZXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7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