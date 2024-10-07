System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.13/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/swiper"], function (_export, _context3) {
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
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_9 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0113ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/identify.widget');
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
        hash: 3711300,
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
                totalGenerative: metadata?.coins?.modules,
                totalInteraction: metadata?.coins?.assignments
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJSZWFjdGl2ZU1vZGVsIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJyZWFkeSIsIm9yZ2FuaXphdGlvbiIsIk9yZ2FuaXphdGlvbiIsInJlcXVlc3RlZCIsIm1ldGFkYXRhIiwicmVxdWVzdHMiLCJvcmdhbml6YXRpb25zIiwidW5kZWZpbmVkIiwiY29uc3RydWN0b3IiLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfaW1hZ2UiLCJfdXNlciIsIl9hbmltYXRpb25zIiwiQ29uZmlybWVkUmVxdWVzdCIsInRleHRzQWN0aW9ucyIsInNob3dOYXZpZ2F0aW9uIiwicmVwbGFjZSIsIm5hbWUiLCJQYWdlQ29udGFpbmVyIiwiVXNlckRhdGEiLCJIdG1sV3JhcHBlciIsImFzIiwicGFyYW1zIiwic3VidGl0bGUiLCJnZXRQcm9wZXJ0aWVzIiwidG90YWxHZW5lcmF0aXZlIiwiY29pbnMiLCJtb2R1bGVzIiwidG90YWxJbnRlcmFjdGlvbiIsImFzc2lnbm1lbnRzIiwiTGluayIsImhyZWYiLCJzdGFydCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsInNldFJlcXVlc3RlZCIsInNldE1ldGFkYXRhIiwiZm9ybSIsImZpZWxkcyIsImRpc2FibGVkIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0IiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbnRyYW5jZVZhcmlhbnRzIiwiaGlkZGVuIiwidmlzaWJsZSIsInNlbGVjdGlvbiIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJFcnJvclJlbmRlcmVyIiwiX2NvZGVJbnB1dCIsIl9jb250ZXh0MiIsIl9lcnJvclJlbmRlcmVyIiwiVGVhY2hlckFjY2Vzc0Zvcm0iLCJzZXRTdHlsZUFsZXJ0Iiwic2V0RGF0YSIsIlRPS0VOX1NJWkUiLCJ0b2tlbiIsInNldFRva2VuIiwidG9Mb3dlckNhc2UiLCJzdHlsZSIsImluY2x1ZGVzIiwibWVzc2FnZSIsImVycm9ycyIsInRvU3RyaW5nIiwiRVJST1JfUFVCTElTSElORyIsIm9uVG9rZW5DaGFuZ2UiLCJhY3Rpb24iLCJsZWdlbmQiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImhlbGxvIiwib3B0aW9ucyIsImludHJvIiwidXNlcm5hbWUiLCJ5ZXMiLCJubyIsImJsb2NrIiwiY29udGludWUiLCJfaG9va3MiLCJfcm9sZVNlbGVjdGlvbiIsIl9mbG93Iiwic2V0UmVhZHkiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInNldEFjdGlvbiIsInVzZUJpbmRlciIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJQYWdlTG9hZGVyIiwiZmxvdyIsIlJvbGVTZWxlY3Rpb24iLCJJY29uIiwiYmFjayIsIl9jYXJkIiwiX3N3aXBlciIsIml0ZW1zIiwicHVzaCIsImhlYWRlciIsIlN3aXBlclNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsInNob3dXZWxjb21lIiwiY2xzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy92aWV3cy9jb25maXJtZWQtcmVxdWVzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvdy50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZm9ybS50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9pbnN0aXR1dGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci50c3giLCIvdHMvdmlld3Mvcm9sZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3VzZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFM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