System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.3-test.03/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.3-test.03/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp013Test03ComponentsUi) {
      dependency_9 = _aimpactAilearnApp013Test03ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp013Test03ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp013Test03ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.03"], ["@aimpact/ailearn-app", "0.1.3-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.03/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.03/identify.widget');
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
        hash: 3647145566,
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
            }))));
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
        hash: 1353908062,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }), _react.default.createElement(_ui.PageContainer, {
              className: "center--container"
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
        hash: 1609004432,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInVzZUNvbmZldHRpIiwic2hvd05hdmlnYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJzdWJ0aXRsZSIsImdldFByb3BlcnRpZXMiLCJ0b3RhbEdlbmVyYXRpdmUiLCJ0b3RhbEludGVyYWN0aW9uIiwiTGluayIsImhyZWYiLCJzdGFydCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0UmVxdWVzdGVkIiwiZm9ybSIsImZpZWxkcyIsImRpc2FibGVkIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJzZWxlY3Rpb24iLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiRXJyb3JSZW5kZXJlciIsIl9jb2RlSW5wdXQiLCJfY29udGV4dDIiLCJfZXJyb3JSZW5kZXJlciIsIlRlYWNoZXJBY2Nlc3NGb3JtIiwic2V0U3R5bGVBbGVydCIsInNldERhdGEiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwic3R5bGUiLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJvblRva2VuQ2hhbmdlIiwiYWN0aW9uIiwibGVnZW5kIiwiVGVhY2hlckFjY2VzcyIsIndoZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJQcm92aWRlciIsIlRlYWNoZXJMZWZ0Q29sdW1uIiwiVGVhY2hlckZvcm0iLCJUZWFjaGVyRm9ybUxlZnRDb2x1bW4iLCJyb2xlIiwiZ3JhZGUiLCJjdXJyaWN1bGFyQXJlYSIsImFkZHJlc3MiLCJfYWNjZXNzIiwiX2NvbmZpcm1lZFJlcXVlc3QiLCJoYXNGcmVlVHJpYWwiLCJmcmVlVHJpYWxBc1RlYWNoZXIiLCJzdGF0ZSIsImVkaXRWYWx1ZXMiLCJUZWFjaGVySW5zdGl0dXRpb24iLCJhY2Nlc3MiLCJoYXNJbnN0aXR1dGlvbiIsImNvbnRyb2xLZXkiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwiX3JhZGlvIiwidmFsdWVTZWxlY3RlZCIsInNldFZhbHVlU2VsZWN0ZWQiLCJoZWxsbyIsIm9wdGlvbnMiLCJpbnRybyIsInVzZXJuYW1lIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX3JvbGVTZWxlY3Rpb24iLCJfZmxvdyIsInNldFJlYWR5IiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJzZXRBY3Rpb24iLCJ1c2VCaW5kZXIiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiSWNvbiIsImJhY2siLCJfY2FyZCIsIl9zd2lwZXIiLCJzZWxlY3Rpb25UaXRsZSIsIml0ZW1zIiwicHVzaCIsImF0dHJzIiwiaGVhZGVyIiwiU3dpcGVyU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4Iiwic2hvd1dlbGNvbWUiLCJjbHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NvZGUtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3ZpZXdzL2NvbmZpcm1lZC1yZXF1ZXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7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