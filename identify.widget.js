System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.0-dev.03/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.0-dev.03/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, UserData, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp010Dev03ComponentsUi) {
      dependency_9 = _aimpactAilearnApp010Dev03ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp010Dev03ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp010Dev03ComponentsIcons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Image) {
      dependency_14 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Form) {
      dependency_15 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_16 = _pragmateUi100Beta1Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_19 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Swiper) {
      dependency_20 = _pragmateUi100Beta1Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.03"], ["@aimpact/ailearn-app", "0.1.0-dev.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/toast', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.03/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.03/identify.widget');
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
        hash: 374015651,
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
              store
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
                if (response.data.status.toLowerCase() === 'pending') {
                  setData({
                    requested: 'teacherInstitution'
                  });
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
        hash: 2286643454,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0Iiwiam9pbiIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZXMiLCJzbGljZSIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJrZXkiLCJwcmV2IiwiaGFuZGxlUGFzdGUiLCJwYXN0ZURhdGEiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsInNwbGl0IiwiZm9yRWFjaCIsInByZXZlbnREZWZhdWx0IiwibWFwIiwibWF4TGVuZ3RoIiwicmVmIiwiZWwiLCJvbktleURvd24iLCJvblBhc3RlIiwiSW5wdXRDb21wb25lbnQiLCJsYWJlbCIsImxhYmVsVmFyaWFudHMiLCJmbG9hdGluZyIsInNjYWxlIiwicmVzdGluZyIsIndoaWxlRm9jdXMiLCJ2YXJpYW50cyIsIlJlYWN0IiwiUmFkaW9CdXR0b24iLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJkaXYiLCJjaGVja2VkIiwibGF5b3V0IiwiUmFkaW9Hcm91cCIsImNoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiX3VpIiwiX2ltYWdlIiwiX3VzZXIiLCJfYW5pbWF0aW9ucyIsIkNvbmZpcm1lZFJlcXVlc3QiLCJ0ZXh0c0FjdGlvbnMiLCJ1c2VDb25mZXR0aSIsInNob3dOYXZpZ2F0aW9uIiwiUGFnZUNvbnRhaW5lciIsIlVzZXJEYXRhIiwiSHRtbFdyYXBwZXIiLCJhcyIsInBhcmFtcyIsInN1YnRpdGxlIiwiZGV0YWlsIiwiZ2V0UHJvcGVydGllcyIsInRvdGFsR2VuZXJhdGl2ZSIsInRvdGFsSW50ZXJhY3Rpb24iLCJMaW5rIiwiaHJlZiIsInN0YXJ0IiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJ3ZWxjb21lIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3RlYWNoZXIiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIlNlbGVjdGlvbkZsb3ciLCJyb2xlU2VsZWN0ZWQiLCJDb250cm9scyIsInN0dWRlbnQiLCJTdHVkZW50RmxvdyIsInRlYWNoZXIiLCJUZWFjaGVyRmxvdyIsImluc3RpdHV0aW9uIiwiSW5zdGl0dXRpb25GbG93IiwiQ29udHJvbCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwiZW50cmFuY2VWYXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJzZXRSZXF1ZXN0ZWQiLCJmb3JtIiwiZmllbGRzIiwiZGlzYWJsZWQiLCJyZXF1aXJlZEZpZWxkcyIsImZvcm1Db21wbGV0ZWQiLCJldmVyeSIsImZpZWxkIiwiZGlzYWJsZWRCdG4iLCJwcmV2VmFsdWVzIiwibmFtZSIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInNlbGVjdGlvbiIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJfY29kZUlucHV0IiwiX3JvdXRpbmciLCJfY29udGV4dDIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldFN0eWxlQWxlcnQiLCJzZXREYXRhIiwiVE9LRU5fU0laRSIsInRva2VuIiwic2V0VG9rZW4iLCJjb2RlIiwiZGF0YSIsInRvTG93ZXJDYXNlIiwicm91dGluZyIsInB1c2hTdGF0ZSIsInN0eWxlIiwiaW5jbHVkZXMiLCJtZXNzYWdlIiwiZXJyb3JzIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsImFjdGlvbiIsImxlZ2VuZCIsIlRlYWNoZXJBY2Nlc3MiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIiwiUHJvdmlkZXIiLCJUZWFjaGVyTGVmdENvbHVtbiIsIlRlYWNoZXJGb3JtIiwiVGVhY2hlckZvcm1MZWZ0Q29sdW1uIiwicm9sZSIsImdyYWRlIiwiY3VycmljdWxhckFyZWEiLCJhZGRyZXNzIiwiX2FjY2VzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiaGFzRnJlZVRyaWFsIiwiZnJlZVRyaWFsQXNUZWFjaGVyIiwic3RhdGUiLCJlZGl0VmFsdWVzIiwiVGVhY2hlckluc3RpdHV0aW9uIiwiYWNjZXNzIiwiaGFzSW5zdGl0dXRpb24iLCJjb250cm9sS2V5IiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwib3B0aW9ucyIsImludHJvIiwiZXhpdHMiLCJmYWRlTGVmdCIsInBob3RvVVJMIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JvbGVTZWxlY3Rpb24iLCJfZmxvdyIsInNldFJlYWR5IiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJzZXRBY3Rpb24iLCJ1c2VCaW5kZXIiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiSWNvbiIsImJhY2siLCJfY2FyZCIsIl9zd2lwZXIiLCJzZWxlY3Rpb25UaXRsZSIsIml0ZW1zIiwicHVzaCIsImF0dHJzIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiaGVhZGVyIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJ1c2VybmFtZSIsImRpc3BsYXlOYW1lIiwiaGVsbG8iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NvZGUtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3ZpZXdzL2NvbmZpcm1lZC1yZXF1ZXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5zdGl0dXRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uYXZiYXIudHN4IiwiL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNN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QVcsRUFBRUEsV0FBVztjQUFFSSxZQUFZLEVBQUU7WUFBRSxHQUN0RFAsS0FBSyxDQUNRLEVBQ2YxUCxNQUFBLENBQUFYLE9BQUEsQ0FBQW9DLGFBQUEsQ0FBQ3ZCLGFBQUEsQ0FBQXdCLE1BQU0sQ0FBQzRELEdBQUc7Y0FDVjFELFNBQVMsRUFBQyxnQkFBZ0I7Y0FDMUJ0QyxPQUFPLEVBQUU7Z0JBQ1JFLE9BQU8sRUFBRTtlQUNUO2NBQ0RJLElBQUksRUFBRTtnQkFDTHNRLEtBQUssRUFBRSxPQUFPO2dCQUNkQyxNQUFNLEVBQUUsT0FBTztnQkFDZjNRLE9BQU8sRUFBRSxDQUFDO2dCQUNWNFEsWUFBWSxFQUFFLENBQUM7Z0JBQ2ZDLE1BQU0sRUFBRSxJQUFJO2dCQUNaM1EsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7OztZQUVYLEVBQ0EsQ0FDYSxDQUNYLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUEsSUFBQWlGLEtBQUEsR0FBQTdJLE9BQUE7VUFDQSxJQUFBaUssTUFBQSxHQUFBakssT0FBQTtVQUNBLElBQUFrRSxRQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQXFFLFdBQUEsR0FBQXJFLE9BQUE7VUFFTztVQUFVLFNBQVV5SyxRQUFRQSxDQUFBO1lBQ2xDLE1BQU07Y0FBRXBLLEtBQUs7Y0FBRWU7WUFBSyxDQUFFLEdBQUcsSUFBQThDLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFbkQ7WUFBSSxDQUFFLEdBQUdwQixLQUFLO1lBQ3RCLE1BQU07Y0FBRW1MO1lBQU8sQ0FBRSxHQUFHcEssS0FBSztZQUV6QixPQUNDeUgsS0FBQSxDQUFBbkQsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxHQUM1QmdELEtBQUEsQ0FBQW5ELGFBQUEsQ0FBQ3VFLE1BQUEsQ0FBQW9CLEtBQUs7Y0FBQ3hGLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ3lGLEdBQUcsRUFBRTdKLElBQUksQ0FBQzRRO1lBQVEsRUFBSSxFQUN4RHhKLEtBQUEsQ0FBQW5ELGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQW1CLEdBQ3JDZ0QsS0FBQSxDQUFBbkQsYUFBQSxhQUNDbUQsS0FBQSxDQUFBbkQsYUFBQSxDQUFDckIsV0FBQSxDQUFBcUcsV0FBVztjQUNYRSxNQUFNLEVBQUU7Z0JBQ1AySixRQUFRLEVBQUU5UyxJQUFJLENBQUMrUzs7WUFDZixHQUVBaEosT0FBTyxDQUFDaUosS0FBSyxDQUNELENBQ1YsRUFDTDVMLEtBQUEsQ0FBQW5ELGFBQUE7Y0FBTUcsU0FBUyxFQUFDO1lBQWlCLEdBQUUyRixPQUFPLENBQUN6RyxXQUFXLENBQVEsQ0FDckQsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119