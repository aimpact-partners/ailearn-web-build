System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.1/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_9 = _aimpactAilearnApp011ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp011ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/identify.widget');
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
        hash: 2339709840,
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
            const showNavigation = requested === 'institution' || requested === 'teacher' || requested === 'teacherApproved';
            let description = texts.description;
            if (requested === 'teacherApproved') {
              description = description.replace('{organization}', store.organization.name);
            }
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
            }, texts.subtitle), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                ...store.user.getProperties(),
                totalGenerative: 5,
                totalInteraction: 30
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
            })))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1625490117,
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
        hash: 2100957709,
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
        hash: 2591483411,
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
        hash: 82853632,
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fadeInUpfadeOutLeft,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInVzZUNvbmZldHRpIiwic2hvd05hdmlnYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJzdWJ0aXRsZSIsImdldFByb3BlcnRpZXMiLCJ0b3RhbEdlbmVyYXRpdmUiLCJ0b3RhbEludGVyYWN0aW9uIiwiTGluayIsImhyZWYiLCJzdGFydCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0UmVxdWVzdGVkIiwiZm9ybSIsImZpZWxkcyIsImRpc2FibGVkIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJzZWxlY3Rpb24iLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiRXJyb3JSZW5kZXJlciIsIl9jb2RlSW5wdXQiLCJfY29udGV4dDIiLCJfZXJyb3JSZW5kZXJlciIsIlRlYWNoZXJBY2Nlc3NGb3JtIiwic2V0U3R5bGVBbGVydCIsInNldERhdGEiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJvblRva2VuQ2hhbmdlIiwiYWN0aW9uIiwibGVnZW5kIiwiVGVhY2hlckFjY2VzcyIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJQcm92aWRlciIsIlRlYWNoZXJMZWZ0Q29sdW1uIiwiVGVhY2hlckZvcm0iLCJUZWFjaGVyRm9ybUxlZnRDb2x1bW4iLCJyb2xlIiwiZ3JhZGUiLCJjdXJyaWN1bGFyQXJlYSIsImFkZHJlc3MiLCJfYWNjZXNzIiwiX2NvbmZpcm1lZFJlcXVlc3QiLCJoYXNGcmVlVHJpYWwiLCJmcmVlVHJpYWxBc1RlYWNoZXIiLCJzdGF0ZSIsImVkaXRWYWx1ZXMiLCJUZWFjaGVySW5zdGl0dXRpb24iLCJhY2Nlc3MiLCJoYXNJbnN0aXR1dGlvbiIsImNvbnRyb2xLZXkiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwiX3JhZGlvIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJoZWxsbyIsIm9wdGlvbnMiLCJpbnRybyIsInVzZXJuYW1lIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JvbGVTZWxlY3Rpb24iLCJfZmxvdyIsInNldFJlYWR5IiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJzZXRBY3Rpb24iLCJ1c2VCaW5kZXIiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiSWNvbiIsImJhY2siLCJfY2FyZCIsIl9zd2lwZXIiLCJzZWxlY3Rpb25UaXRsZSIsIml0ZW1zIiwicHVzaCIsImF0dHJzIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3IiwiaGVhZGVyIiwiU3dpcGVyU2xpZGVyIiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJzaG93V2VsY29tZSIsImNscyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY29kZS1pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvdmlld3MvY29uZmlybWVkLXJlcXVlc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3cudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5zdGl0dXRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uYXZiYXIudHN4IiwiL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElB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