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
        hash: 415886848,
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
              console.log(20, response.data.organization);
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
        hash: 219408880,
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
                // await store.loadUser();
                // toast.success(texts.messages.success);
                // routing.pushState(`/`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsImxvZyIsImRhdGEiLCJzZXQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInVzZUNvbmZldHRpIiwic2hvd05hdmlnYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJzdWJ0aXRsZSIsImdldFByb3BlcnRpZXMiLCJ0b3RhbEdlbmVyYXRpdmUiLCJ0b3RhbEludGVyYWN0aW9uIiwiTGluayIsImhyZWYiLCJzdGFydCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0UmVxdWVzdGVkIiwiZm9ybSIsImZpZWxkcyIsImRpc2FibGVkIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInNlbGVjdGlvbiIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJfY29kZUlucHV0IiwiX2NvbnRleHQyIiwiVGVhY2hlckFjY2Vzc0Zvcm0iLCJzZXRTdHlsZUFsZXJ0Iiwic2V0RGF0YSIsIlRPS0VOX1NJWkUiLCJ0b2tlbiIsInNldFRva2VuIiwidG9Mb3dlckNhc2UiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIm9uVG9rZW5DaGFuZ2UiLCJhY3Rpb24iLCJsZWdlbmQiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsIm9wdGlvbnMiLCJpbnRybyIsImV4aXRzIiwiZmFkZUxlZnQiLCJwaG90b1VSTCIsInllcyIsIm5vIiwiYmxvY2siLCJjb250aW51ZSIsIl9ob29rcyIsIl9yb2xlU2VsZWN0aW9uIiwiX2Zsb3ciLCJzZXRSZWFkeSIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlQmluZGVyIiwib25BbmltYXRpb25Db21wbGV0ZSIsIlBhZ2VMb2FkZXIiLCJmbG93IiwiUm9sZVNlbGVjdGlvbiIsIkljb24iLCJiYWNrIiwiX2NhcmQiLCJfc3dpcGVyIiwic2VsZWN0aW9uVGl0bGUiLCJpdGVtcyIsInB1c2giLCJhdHRycyIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImhlYWRlciIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4IiwidXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsImhlbGxvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy92aWV3cy9jb25maXJtZWQtcmVxdWVzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvdy50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7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