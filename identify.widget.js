System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.0-dev.06/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.0-dev.06/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context3) {
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
    }, function (_aimpactChatSdk101Session) {
      dependency_6 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp010Dev06ComponentsUi) {
      dependency_9 = _aimpactAilearnApp010Dev06ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp010Dev06ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp010Dev06ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Image) {
      dependency_14 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Form) {
      dependency_15 = _pragmateUi100Beta1Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_18 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_19 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.06"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.06/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.06/identify.widget');
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
        hash: 2507028768,
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2437733509,
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
        hash: 2682251311,
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
            const exitAnimation = {
              duration: 0.3,
              bottom: -100
            };
            const entryAnimation = {
              duration: 0.3,
              top: 0,
              opacity: 1
            };
            const initialValue = {
              opacity: 0,
              top: -5
            };
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
        hash: 1531128613,
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
              texts: {
                actions: textsActions
              }
            } = (0, _context.useModuleContext)();
            texts = texts.requested[requested];
            (0, _ui.useConfetti)();
            const showNavigation = requested === 'institution' || requested === 'teacher';
            return _react.default.createElement("div", {
              className: "general-container general-container--light"
            }, _react.default.createElement(_ui.PageContainer, {
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
            }, texts.detail), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties(),
                totalGenerative: 5,
                totalInteraction: 30
              },
              className: "welcome-description"
            }, texts.description), showNavigation && _react.default.createElement("footer", {
              className: "actions__container"
            }, _react.default.createElement(_components.Link, {
              className: "btn btn-primary btn-middle",
              href: "/"
            }, textsActions.start)))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/welcome/01.webp",
              alt: texts.welcome
            })))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 196057588,
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
        hash: 3742495151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionFlow = SelectionFlow;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement(Control, {
              key: "roleSelected"
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/flows/institution/index
      ***********************************************/

      ims.set('./views/flows/institution/index', {
        hash: 4212562346,
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
            const entranceVariants = {
              hidden: {
                x: '-100%',
                opacity: 0
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            };
            const [fetching, setFetching] = _react.default.useState(false);
            const [values, setValues] = _react.default.useState({});
            const [error, setError] = _react.default.useState(null);
            const {
              store,
              setRequested,
              setRoleSelected,
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
            const requiredFields = ['name', 'type', 'educationalLevel'];
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
              name: "geographicAddress",
              label: fields.geographicAddress.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Checkbox, {
              name: "authorizedUser",
              label: fields.authorizedUser.label,
              type: "checkbox",
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
        hash: 525570189,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InstitutionFormLeftColumn = InstitutionFormLeftColumn;
          var _react = require("react");
          var _context = require("../../context");
          var _user = require("../../user");
          var _components = require("pragmate-ui/components");
          function InstitutionFormLeftColumn() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              form: formTexts
            } = texts.institution;
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

      /*************************************
      INTERNAL MODULE: ./views/flows/student
      *************************************/

      ims.set('./views/flows/student', {
        hash: 2618594492,
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
              animate: "visible",
              className: "processed__container"
            }, _react.default.createElement("div", {
              className: "left-column grid-center-container"
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
            }))));
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

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/access/form
      *************************************************/

      ims.set('./views/flows/teacher/access/form', {
        hash: 1907947847,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _context2 = require("./context");
          var _session = require("@aimpact/chat-sdk/session");
          var _framerMotion = require("framer-motion");
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
                const response = await store.organization.join({
                  code: token
                });
                setRequested('teacherInstitution');
                if (response.data.status.toLowerCase() === 'pending') {
                  return;
                }
                await _session.sessionWrapper.user.load();
                // await store.loadUser();
                // toast.success(texts.messages.success);
                _routing.routing.pushState(`/`);
              } catch (e) {
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                console.error(e);
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
            }), error && _react.default.createElement("span", {
              className: "error-text"
            }, error), _react.default.createElement(_components.Button, {
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
        hash: 747353077,
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
              animate: "visible",
              className: "form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherLeftColumn, null), _react.default.createElement(_form.TeacherAccessForm, null)));
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
        hash: 3192912460,
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
            const requiredFields = ['role', 'grade', 'curricularArea'];
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
                console.log(20, response);
                if (!response.status) {
                  throw new Error('FAILED');
                }
                setRequested('teacher');
              } catch (err) {
                setError('An error occurred while submitting the form.');
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.TeacherFormLeftColumn, null), _react.default.createElement(_form.Form, {
              className: "floating-form",
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
              label: fields.name.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "type",
              label: fields.type.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_form.Input, {
              name: "address",
              label: fields.address.label,
              variant: "floating",
              onChange: onChange,
              ...disabled
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              type: "submit",
              label: fields.submit.label,
              ...disabledBtn
            })));
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
        hash: 1876562746,
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
            return _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(_navbar.Navbar, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(Control, {
              key: controlKey,
              data: values,
              setData: editValues
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/institution
      *************************************************/

      ims.set('./views/flows/teacher/institution', {
        hash: 1279618193,
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
            const exits = {
              fadeLeft: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            };
            /*
            ¡Felicitaciones! Tu institución ya puedes iniciar su período de prueba
            Te hemos asignado a tu período de prueba 20 créditos para crear 20 módulos con IA y 120 créditos para la interacción con IA de los alumnos.
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            */
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fadeInUpfadeOutLeft,
              className: "form-role-selection"
            }, _react.default.createElement("div", {
              className: "grid-container"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img img--3x",
              src: user.photoURL
            }), _react.default.createElement("h1", {
              className: "text-center"
            }, title), _react.default.createElement("div", {
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
            }, options[valueSelected].description), _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              ...disabled,
              onClick: onSubmit
            }, texts.actions.continue)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 875599244,
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
        hash: 2830086704,
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
              src: "/assets/rvd/RVD.AI.Branding.png",
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
        hash: 2959917101,
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
              roleSelected,
              store
            } = (0, _context.useModuleContext)();
            const title = roleSelected ? texts[roleSelected].selectionTitle : texts.title;
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
            const exit = {
              duration: 0.3,
              bottom: 50
            };
            const animate = {
              duration: 0.3,
              y: 0,
              opacity: 1
            };
            const initial = {
              opacity: 0,
              y: 50,
              duration: 0.3
            };
            const attrs = {
              initial,
              animate,
              exit
            };
            const breakpoints = {
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2.1
              },
              900: {
                slidesPerView: 3
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "general-container"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: "role-selection__header"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/rvd/rvd.png"
            }), _react.default.createElement("h1", {
              ...attrs
            }, title), _react.default.createElement("span", {
              ...attrs
            }, texts.subtitle)), _react.default.createElement(_swiper.SwiperSlider, {
              breakpoints: breakpoints,
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
        hash: 608525435,
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
          function UserData() {
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
            return React.createElement("div", {
              className: "user-welcome"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: user.photoURL
            }), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement("h6", null, React.createElement(_components.HtmlWrapper, {
              params: {
                username: user.displayName
              }
            }, welcome.hello)), React.createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0Iiwiam9pbiIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZXMiLCJzbGljZSIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJrZXkiLCJwcmV2IiwiaGFuZGxlUGFzdGUiLCJwYXN0ZURhdGEiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsInNwbGl0IiwiZm9yRWFjaCIsInByZXZlbnREZWZhdWx0IiwibWFwIiwibWF4TGVuZ3RoIiwicmVmIiwiZWwiLCJvbktleURvd24iLCJvblBhc3RlIiwiSW5wdXRDb21wb25lbnQiLCJsYWJlbCIsImxhYmVsVmFyaWFudHMiLCJmbG9hdGluZyIsInNjYWxlIiwicmVzdGluZyIsIndoaWxlRm9jdXMiLCJ2YXJpYW50cyIsIlJlYWN0IiwiUmFkaW9CdXR0b24iLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJkaXYiLCJjaGVja2VkIiwibGF5b3V0IiwiUmFkaW9Hcm91cCIsImNoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiX3VpIiwiX2ltYWdlIiwiX3VzZXIiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1lZFJlcXVlc3QiLCJ0ZXh0c0FjdGlvbnMiLCJ1c2VDb25mZXR0aSIsInNob3dOYXZpZ2F0aW9uIiwiUGFnZUNvbnRhaW5lciIsIlVzZXJEYXRhIiwiSHRtbFdyYXBwZXIiLCJhcyIsInBhcmFtcyIsInN1YnRpdGxlIiwiZGV0YWlsIiwiZ2V0UHJvcGVydGllcyIsInRvdGFsR2VuZXJhdGl2ZSIsInRvdGFsSW50ZXJhY3Rpb24iLCJMaW5rIiwiaHJlZiIsInN0YXJ0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3ZWxjb21lIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RlYWNoZXIiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIlNlbGVjdGlvbkZsb3ciLCJyb2xlU2VsZWN0ZWQiLCJDb250cm9scyIsInN0dWRlbnQiLCJTdHVkZW50RmxvdyIsInRlYWNoZXIiLCJUZWFjaGVyRmxvdyIsImluc3RpdHV0aW9uIiwiSW5zdGl0dXRpb25GbG93IiwiQ29udHJvbCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwiZW50cmFuY2VWYXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJzZXRSZXF1ZXN0ZWQiLCJmb3JtIiwiZmllbGRzIiwiZGlzYWJsZWQiLCJyZXF1aXJlZEZpZWxkcyIsImZvcm1Db21wbGV0ZWQiLCJldmVyeSIsImZpZWxkIiwiZGlzYWJsZWRCdG4iLCJwcmV2VmFsdWVzIiwibmFtZSIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInNlbGVjdGlvbiIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJfY29kZUlucHV0IiwiX3JvdXRpbmciLCJfY29udGV4dDIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldFN0eWxlQWxlcnQiLCJzZXREYXRhIiwiVE9LRU5fU0laRSIsInRva2VuIiwic2V0VG9rZW4iLCJjb2RlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwiZXJyb3JzIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsImFjdGlvbiIsImxlZ2VuZCIsIlRlYWNoZXJBY2Nlc3MiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIiwiUHJvdmlkZXIiLCJUZWFjaGVyTGVmdENvbHVtbiIsIlRlYWNoZXJGb3JtIiwibG9nIiwiVGVhY2hlckZvcm1MZWZ0Q29sdW1uIiwicm9sZSIsImdyYWRlIiwiY3VycmljdWxhckFyZWEiLCJhZGRyZXNzIiwiX2FjY2VzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiaGFzRnJlZVRyaWFsIiwiZnJlZVRyaWFsQXNUZWFjaGVyIiwic3RhdGUiLCJlZGl0VmFsdWVzIiwiVGVhY2hlckluc3RpdHV0aW9uIiwiYWNjZXNzIiwiaGFzSW5zdGl0dXRpb24iLCJjb250cm9sS2V5IiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwib3B0aW9ucyIsImludHJvIiwiZXhpdHMiLCJmYWRlTGVmdCIsInBob3RvVVJMIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JvbGVTZWxlY3Rpb24iLCJfZmxvdyIsInNldFJlYWR5IiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJzZXRBY3Rpb24iLCJ1c2VCaW5kZXIiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiSWNvbiIsImJhY2siLCJfY2FyZCIsIl9zd2lwZXIiLCJzZWxlY3Rpb25UaXRsZSIsIml0ZW1zIiwicHVzaCIsImF0dHJzIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiaGVhZGVyIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiaGVsbG8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NvZGUtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3ZpZXdzL2NvbmZpcm1lZC1yZXF1ZXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5zdGl0dXRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uYXZiYXIudHN4IiwiL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxD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