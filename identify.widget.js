System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.1.6-dev.08/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.08/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/image", "pragmate-ui@1.0.0-beta.2/form", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/swiper"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp016Dev08ComponentsUi) {
      dependency_9 = _aimpactAilearnApp016Dev08ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev08ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp016Dev08ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_13 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Image) {
      dependency_14 = _pragmateUi100Beta2Image;
    }, function (_pragmateUi100Beta2Form) {
      dependency_15 = _pragmateUi100Beta2Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_18 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Swiper) {
      dependency_19 = _pragmateUi100Beta2Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.08"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.08/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.08/identify.widget');
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