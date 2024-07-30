System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.0-dev.08/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.0-dev.08/components/icons", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/swiper"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp010Dev08ComponentsUi) {
      dependency_9 = _aimpactAilearnApp010Dev08ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp010Dev08ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp010Dev08ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.0-dev.08"], ["@aimpact/ailearn-app", "0.1.0-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.0-dev.08/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.0-dev.08/identify.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZXhpdEFuaW1hdGlvbiIsImJvdHRvbSIsImVudHJ5QW5pbWF0aW9uIiwidG9wIiwiaW5pdGlhbFZhbHVlIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInVzZUNvbmZldHRpIiwic2hvd05hdmlnYXRpb24iLCJyZXBsYWNlIiwibmFtZSIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJzdWJ0aXRsZSIsImdldFByb3BlcnRpZXMiLCJ0b3RhbEdlbmVyYXRpdmUiLCJ0b3RhbEludGVyYWN0aW9uIiwiTGluayIsImhyZWYiLCJzdGFydCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0UmVxdWVzdGVkIiwiZm9ybSIsImZpZWxkcyIsImRpc2FibGVkIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInNlbGVjdGlvbiIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJfY29kZUlucHV0IiwiX2NvbnRleHQyIiwiVGVhY2hlckFjY2Vzc0Zvcm0iLCJzZXRTdHlsZUFsZXJ0Iiwic2V0RGF0YSIsIlRPS0VOX1NJWkUiLCJ0b2tlbiIsInNldFRva2VuIiwidG9Mb3dlckNhc2UiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIm9uVG9rZW5DaGFuZ2UiLCJhY3Rpb24iLCJsZWdlbmQiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsIm9wdGlvbnMiLCJpbnRybyIsImV4aXRzIiwiZmFkZUxlZnQiLCJwaG90b1VSTCIsInllcyIsIm5vIiwiYmxvY2siLCJjb250aW51ZSIsIl9ob29rcyIsIl9yb2xlU2VsZWN0aW9uIiwiX2Zsb3ciLCJzZXRSZWFkeSIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlQmluZGVyIiwib25BbmltYXRpb25Db21wbGV0ZSIsIlBhZ2VMb2FkZXIiLCJmbG93IiwiUm9sZVNlbGVjdGlvbiIsIkljb24iLCJiYWNrIiwiX2NhcmQiLCJfc3dpcGVyIiwic2VsZWN0aW9uVGl0bGUiLCJpdGVtcyIsInB1c2giLCJhdHRycyIsImJyZWFrcG9pbnRzIiwic2xpZGVzUGVyVmlldyIsImhlYWRlciIsIlN3aXBlclNsaWRlciIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4IiwidXNlcm5hbWUiLCJkaXNwbGF5TmFtZSIsImhlbGxvIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy92aWV3cy9jb25maXJtZWQtcmVxdWVzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvdy50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdB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