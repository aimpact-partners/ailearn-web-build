System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.2.12/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.2.12/components/icons", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, NavbarHeader, UserData, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    VerificationCodeInput: void 0,
    InstitutionFlow: void 0,
    TeacherForm: void 0,
    NavbarHeader: void 0,
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
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk130Session) {
      dependency_6 = _aimpactChatSdk130Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_7 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_8 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_beyondJsKernel019Core) {
      dependency_9 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp0212ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0212ComponentsUi;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAilearnApp0212ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp0212ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_14 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_19 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_20 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.12"], ["@aimpact/ailearn-app", "0.2.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.12/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['react', dependency_11], ['framer-motion', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/form', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.2.12/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.12/identify.widget');
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
        hash: 139426551,
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
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
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
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            #organization = new _core.Organization({});
            #classroom = new _classrooms.Classroom({});
            get classroom() {
              return this.#classroom;
            }
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
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
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
            async joinClassroom(code) {
              this.#classroom.set({
                code
              });
              const response = await this.#classroom.provider.join({
                code
              });
              await this.#classroom.set(response.data.classroom);
              return response;
            }
            async refreshClassroom() {
              if (!this.#classroom.code) {
                console.warn('No classroom code');
                return;
              }
              await this.#classroom.load({
                code: this.#classroom.code
              });
              return this.#classroom;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 665868096,
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
        hash: 1709254149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmedRequest = ConfirmedRequest;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _animations = require("./animations");
          var _context = require("./context");
          var _user = require("./user");
          function ConfirmedRequest() {
            let {
              store,
              requested,
              texts,
              metadata,
              store: {
                globalTexts
              },
              texts: {
                actions: textsActions,
                errors
              }
            } = (0, _context.useModuleContext)();
            texts = texts.requested[requested];
            const [error, setError] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            const showNavigation = ['studentApproved', 'institution', 'teacher', 'teacherApproved'].includes(requested);
            // const showNavigation = requested === 'institution' || requested === 'teacher' || requested === 'teacherApproved';
            let description = texts.description;
            if (requested === 'teacherApproved') {
              description = description.replace('{organization}', store.organization.name);
            }
            const onRefresh = async () => {
              try {
                setFetching(true);
                const classroom = await store.refreshClassroom();
                await _session.sessionWrapper.user.load();
                _routing.routing.pushState(`/classrooms/view/${classroom.code}`);
              } catch (e) {
                if (e.code === 105) {
                  setError(errors['ALREADY_WAITING_CLASSROOM']);
                  return;
                }
              } finally {
                setFetching(false);
              }
            };
            const cls = `center--container${fetching ? ' is-fetching' : ''}`;
            const link = requested === 'studentApproved' ? `/classrooms/view/${store.classroom.code}` : '/';
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
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
            }, texts.title), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), texts.subtitle && _react.default.createElement(_components.HtmlWrapper, {
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
              href: link
            }, textsActions.start)), requested === 'student' && _react.default.createElement("div", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              disabled: fetching,
              onClick: onRefresh,
              variant: "primary",
              className: "btn-middle"
            }, globalTexts.actions.refresh)))), _react.default.createElement("div", {
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
        hash: 191516053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionFlow = SelectionFlow;
          var _react = require("react");
          var _context = require("./context");
          var _institution = require("./flows/institution");
          var _student = require("./flows/student");
          var _teacher = require("./flows/teacher");
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
        hash: 2489988039,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
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
            }))))));
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

      /*******************************************
      INTERNAL MODULE: ./views/flows/student/index
      *******************************************/

      ims.set('./views/flows/student/index', {
        hash: 2168823821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFlow = StudentFlow;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _codeInput = require("../../components/code-input");
          var _context = require("../../context");
          var _animations = require("../../animations");
          var _routing = require("@beyond-js/kernel/routing");
          var _leftColumn = require("./left-column");
          var _navbar = require("../../navbar");
          function StudentFlow({}) {
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
            const [styleAlert, setStyleAlert] = _react.default.useState('error');
            const {
              texts,
              store,
              setRoleSelected,
              setRequested
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const TOKEN_SIZE = 7;
            const [token, setToken] = _react.default.useState('');
            const formTexts = texts.student.form;
            const disabled = token.length !== TOKEN_SIZE || fetching;
            const onSubmit = async event => {
              try {
                event.preventDefault();
                setFetching(true);
                const response = await store.joinClassroom(token);
                if (response.data.status.toLowerCase() === 'pending') {
                  setRequested('student');
                  return;
                }
                await _session.sessionWrapper.user.load();
                setRequested('studentApproved');
              } catch (e) {
                console.error(e.message);
                if (e.message === 'ALREADY_WAITING') {
                  setRequested('student');
                  return;
                }
                if (e.message === 'ALREADY_MEMBER') {
                  await _session.sessionWrapper.user.load();
                  _routing.routing.pushState(`/classrooms/view/${token}`);
                  return;
                }
                const style = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? 'warning' : 'danger';
                setStyleAlert(style);
                // setStyleAlert(style);
                const message = ['ALREADY_WAITING', 'ALREADY_MEMBER'].includes(e?.message) ? `${e?.message}_CLASSROOM` : e?.message.toString();
                setError(texts.errors[message] ?? texts.errors.ERROR_PUBLISHING);
              } finally {
                setFetching(false);
              }
            };
            const onTokenChange = event => setToken(event.currentTarget?.value);
            //
            const onBack = () => setRoleSelected('');
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns"
            }, _react.default.createElement(_leftColumn.StudentLeftColumn, null), _react.default.createElement(_framerMotion.motion.form, {
              variants: entranceVariants,
              initial: "hidden",
              animate: "visible",
              className: "right-column center-container access__form",
              onSubmit: onSubmit
            }, _react.default.createElement(_codeInput.VerificationCodeInput, {
              length: TOKEN_SIZE,
              onChange: onTokenChange
            }), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: styleAlert
            }), _react.default.createElement(_components.Button, {
              disabled: disabled,
              variant: "primary",
              type: "submit"
            }, formTexts.form.action), _react.default.createElement("div", {
              className: "legend"
            }, _react.default.createElement("h6", null, formTexts.form.legend.title), _react.default.createElement("span", {
              className: "p2"
            }, formTexts.form.legend.description)))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/student/left-column
      *************************************************/

      ims.set('./views/flows/student/left-column', {
        hash: 3621052399,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentLeftColumn = StudentLeftColumn;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../../context");
          var _user = require("../../user");
          function StudentLeftColumn() {
            let {
              store,
              setRoleSelected,
              requested,
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.student.selection;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
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
            }, texts.description))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/flows/student/old
      *****************************************/

      ims.set('./views/flows/student/old', {
        hash: 4196241678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OldStudentFlow = OldStudentFlow;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _user = require("../../user");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbar = require("../../navbar");
          function OldStudentFlow() {
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
        hash: 1996698633,
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
          var _navbar = require("../../../navbar");
          function TeacherAccess({
            setData,
            onBack
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
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
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
        hash: 4014635974,
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
          var _navbar = require("../../../navbar");
          /*bundle*/
          function TeacherForm({
            data,
            setData,
            onBack
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
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
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
        hash: 42564101,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              onBack: onBack,
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
        hash: 2204874825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherInstitution = TeacherInstitution;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _radio = require("../../components/radio");
          var _animations = require("../../animations");
          var _navbar = require("../../navbar");
          // components/TeacherInstitution.tsx

          //@ts-ignore

          function TeacherInstitution({
            data,
            setData,
            onBack
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
              ..._animations.animations.default
            }, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_ui.PageContainer, {
              className: "form__container container "
            }, _react.default.createElement("div", {
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
            }, texts.actions.continue))))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 563391000,
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
        hash: 3055094447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          function NavbarHeader({
            onClick
          }) {
            const cls = `navbar-header`;
            const {
              texts,
              store: {
                globalTexts
              }
            } = (0, _context.useModuleContext)();
            // const Control = BirthdayForm;
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/');
            };
            const attrs = {};
            if (onClick) attrs.onClick = onClick;
            return _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement("div", {
              className: "link",
              onClick: onClick
            }, _react.default.createElement(_icons2.Icon, {
              icon: "backArrow"
            }), " ", globalTexts.actions.back)), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            })));
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
        "im": "./views/navbar",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
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
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar').NavbarHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJfY2xhc3Nyb29tcyIsIlJlYWN0aXZlTW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNNaW5vciIsImFnZSIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJqb2luQ2xhc3Nyb29tIiwicHJvdmlkZXIiLCJyZWZyZXNoQ2xhc3Nyb29tIiwid2FybiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiQ2FyZCIsInByb3BzIiwidHlwZSIsImluZGV4Iiwib25DYXJkQWN0aW9uIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJ0ZXh0c0FjdGlvbnMiLCJlcnJvcnMiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzaG93TmF2aWdhdGlvbiIsImluY2x1ZGVzIiwicmVwbGFjZSIsIm5hbWUiLCJvblJlZnJlc2giLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwibGluayIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJFcnJvclJlbmRlcmVyIiwic3VidGl0bGUiLCJnZXRQcm9wZXJ0aWVzIiwidG90YWxHZW5lcmF0aXZlIiwiY29pbnMiLCJtb2R1bGVzIiwidG90YWxJbnRlcmFjdGlvbiIsImFzc2lnbm1lbnRzIiwiTGluayIsImhyZWYiLCJzdGFydCIsImRpc2FibGVkIiwicmVmcmVzaCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnN0aXR1dGlvbiIsIl9zdHVkZW50IiwiX3RlYWNoZXIiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsInNldFJlcXVlc3RlZCIsInNldE1ldGFkYXRhIiwiZm9ybSIsImZpZWxkcyIsInJlcXVpcmVkRmllbGRzIiwiZm9ybUNvbXBsZXRlZCIsImV2ZXJ5IiwiZmllbGQiLCJkaXNhYmxlZEJ0biIsInByZXZWYWx1ZXMiLCJvblN1Ym1pdCIsImVyciIsIm9uQmFjayIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJOYXZiYXIiLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2NvbnRleHQyIiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldERhdGEiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImhlbGxvIiwib3B0aW9ucyIsImludHJvIiwidXNlcm5hbWUiLCJ5ZXMiLCJubyIsImJsb2NrIiwiY29udGludWUiLCJfaG9va3MiLCJfcm9sZVNlbGVjdGlvbiIsIl9mbG93Iiwic2V0UmVhZHkiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInNldEFjdGlvbiIsInVzZUJpbmRlciIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJQYWdlTG9hZGVyIiwiZmxvdyIsIlJvbGVTZWxlY3Rpb24iLCJfaWNvbnMyIiwibG9nb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0cnMiLCJJY29uIiwiYmFjayIsIkFwcEljb25CdXR0b24iLCJfY2FyZCIsIl9zd2lwZXIiLCJpdGVtcyIsInB1c2giLCJoZWFkZXIiLCJTd2lwZXJTbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJzaG93V2VsY29tZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY29kZS1pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvdmlld3MvY29uZmlybWVkLXJlcXVlc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3cudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9vbGQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBVyxNQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxNQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsZUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixRQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsV0FBQSxHQUFBbkIsT0FBQTtVQUdNLE1BQU9PLFlBQWEsU0FBUU8sTUFBQSxDQUFBTSxhQUFxQjtZQUN0RCxDQUFBQyxLQUFNLEdBQStCLElBQUlOLE1BQUEsQ0FBQU8sWUFBWSxDQUFDTixlQUFBLENBQUFPLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBT1QsUUFBQSxDQUFBVSxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxJQUFJRSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQ0csR0FBRyxHQUFHLEVBQUU7WUFDMUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDUyxLQUFLO1lBQ3hDO1lBQ0EsQ0FBQUMsV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUNOLEtBQUs7WUFDL0I7WUFDQSxDQUFBTyxZQUFhLEdBQUcsSUFBSWQsS0FBQSxDQUFBZSxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3BDLENBQUFDLFNBQVUsR0FBRyxJQUFJZixXQUFBLENBQUFnQixTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUlELFNBQVNBLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQyxDQUFBQSxTQUFVO1lBQ3ZCO1lBQ0EsSUFBSUYsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBSSxTQUFVO1lBRVYsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLElBQUksSUFBSSxDQUFDVixJQUFJLENBQUNXLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUUsT0FBTyxvQkFBb0I7Y0FDNUUsT0FBT0MsU0FBUztjQUNoQixPQUFPLElBQUksQ0FBQ2QsSUFBSSxDQUFDVyxRQUFRLEVBQUVDLFFBQVE7WUFDcEM7WUFDQUcsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBVixXQUFZLEdBQUcsSUFBSWhCLE1BQUEsQ0FBQU8sWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBUyxXQUFZLENBQUNXLEtBQUssRUFBRTtjQUN6QixJQUFJLENBQUMsQ0FBQXJCLEtBQU0sQ0FBQ3NCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFDNUM7WUFFQWpDLElBQUlBLENBQUE7Y0FDSCxLQUFLLENBQUNtQixLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUNBLE1BQU1lLGVBQWVBLENBQUNDLE1BQU07Y0FDM0IsT0FBTzdCLFFBQUEsQ0FBQVUsY0FBYyxDQUFDRCxJQUFJLENBQUNxQixTQUFTLENBQUNELE1BQU0sQ0FBQztZQUM3QztZQUVBLE1BQU1FLG1CQUFtQkEsQ0FBQ0YsTUFBTTtjQUMvQixJQUFJO2dCQUNILE1BQU1HLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBakIsWUFBYSxDQUFDa0IsT0FBTyxDQUFDSixNQUFNLENBQUM7Z0JBQ3pELElBQUksQ0FBQ0csUUFBUSxDQUFDRSxNQUFNLEVBQUU7a0JBQ3JCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLCtCQUErQixDQUFDOztnQkFFakQsTUFBTW5DLFFBQUEsQ0FBQVUsY0FBYyxDQUFDRCxJQUFJLENBQUNmLElBQUksRUFBRTtnQkFDaEMsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBcUIsWUFBYSxDQUFDZSxTQUFTLEVBQUU7ZUFDM0MsQ0FBQyxPQUFPTSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUEsTUFBTUcsSUFBSUEsQ0FBQ0MsSUFBSTtjQUNkLE1BQU1SLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ2pCLFlBQVksQ0FBQ3dCLElBQUksQ0FBQztnQkFBRUM7Y0FBSSxDQUFFLENBQUM7Y0FFdkQsTUFBTSxJQUFJLENBQUN6QixZQUFZLENBQUMwQixHQUFHLENBQUNULFFBQVEsQ0FBQ1UsSUFBSSxDQUFDM0IsWUFBWSxDQUFDO2NBQ3ZELE9BQU9pQixRQUFRO1lBQ2hCO1lBRUEsTUFBTVcsYUFBYUEsQ0FBQ0gsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQXZCLFNBQVUsQ0FBQ3dCLEdBQUcsQ0FBQztnQkFBRUQ7Y0FBSSxDQUFFLENBQUM7Y0FDN0IsTUFBTVIsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFmLFNBQVUsQ0FBQzJCLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDO2dCQUFFQztjQUFJLENBQUUsQ0FBQztjQUU5RCxNQUFNLElBQUksQ0FBQyxDQUFBdkIsU0FBVSxDQUFDd0IsR0FBRyxDQUFDVCxRQUFRLENBQUNVLElBQUksQ0FBQ3pCLFNBQVMsQ0FBQztjQUNsRCxPQUFPZSxRQUFRO1lBQ2hCO1lBRUEsTUFBTWEsZ0JBQWdCQSxDQUFBO2NBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTVCLFNBQVUsQ0FBQ3VCLElBQUksRUFBRTtnQkFDMUJILE9BQU8sQ0FBQ1MsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUNqQzs7Y0FHRCxNQUFNLElBQUksQ0FBQyxDQUFBN0IsU0FBVSxDQUFDdkIsSUFBSSxDQUFDO2dCQUFFOEMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBdkIsU0FBVSxDQUFDdUI7Y0FBSSxDQUFFLENBQUM7Y0FDMUQsT0FBTyxJQUFJLENBQUMsQ0FBQXZCLFNBQVU7WUFDdkI7O1VBQ0FyQixPQUFBLENBQUFOLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7VUNoR0Q7O1VBRUF5RCxNQUFBLENBQUFDLGNBQUEsQ0FBQXBELE9BQUE7WUFDQVksS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pPLE1BQU15QyxVQUFVLEdBQUFyRCxPQUFBLENBQUFxRCxVQUFBLEdBQUc7WUFDekJDLE9BQU8sRUFBRTtjQUNSQyxPQUFPLEVBQUU7Z0JBQUVDLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERSxJQUFJLEVBQUU7Y0FDTFAsT0FBTyxFQUFFO2dCQUFFRSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCQyxPQUFPLEVBQUU7Z0JBQUVGLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVMLENBQUMsRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNERyxtQkFBbUIsRUFBRTtjQUNwQlIsT0FBTyxFQUFFO2dCQUFFQyxDQUFDLEVBQUUsTUFBTTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFRixDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFRyxDQUFDLEVBQUUsS0FBSztnQkFBRVAsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7O1dBRTVEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZELElBQUFLLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUVBLElBQUFnRixhQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLE1BQUEsR0FBQWpGLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQU5BOztVQVFNLFNBQVVtRixJQUFJQSxDQUFDQyxLQUFpQjtZQUNyQyxNQUFNO2NBQUVDLElBQUk7Y0FBRUM7WUFBSyxDQUFFLEdBQUdGLEtBQUs7WUFFN0IsTUFBTTtjQUFFRyxZQUFZO2NBQUVsRSxLQUFLO2NBQUVtRTtZQUFlLENBQUUsR0FBRyxJQUFBVCxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ25FLElBQUksQ0FBQ3BFLEtBQUssQ0FBQ3FFLEtBQUssQ0FBQ0wsSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBQ25DLE1BQU07Y0FBRU0sS0FBSztjQUFFQyxXQUFXO2NBQUVDO1lBQUksQ0FBRSxHQUFHeEUsS0FBSyxDQUFDcUUsS0FBSyxDQUFDTCxJQUFJLENBQUM7WUFDdEQsTUFBTVMsVUFBVSxHQUFHO2NBQ2xCQyxPQUFPLEVBQUUsU0FBUztjQUNsQkMsT0FBTyxFQUFFQSxDQUFBLEtBQUs7Z0JBQ2JULFlBQVksQ0FBQyxNQUFNQyxlQUFlLENBQUNILElBQUksQ0FBQyxDQUFDO2NBQzFDO2FBQ0E7WUFFRCxJQUFJZCxPQUFPLEdBQXdCO2NBQ2xDRCxPQUFPLEVBQUUsQ0FBQztjQUNWRCxDQUFDLEVBQUUsQ0FBQztjQUNKRyxVQUFVLEVBQUU7Z0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2dCQUNid0IsS0FBSyxFQUFFWCxLQUFLLEdBQUc7O2FBRWhCO1lBRUQsSUFBSVosSUFBSSxHQUF3QjtjQUMvQkosT0FBTyxFQUFFLENBQUM7Y0FDVk8sQ0FBQyxFQUFFLEdBQUc7Y0FDTkwsVUFBVSxFQUFFO2dCQUNYQyxRQUFRLEVBQUUsR0FBRztnQkFDYndCLEtBQUssRUFBRVgsS0FBSyxHQUFHOzthQUVoQjtZQUVELE9BQ0NSLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDQyxPQUFPO2NBQ2RDLFNBQVMsRUFBQyxpQkFBaUI7Y0FDM0JqQyxPQUFPLEVBQUU7Z0JBQ1JFLE9BQU8sRUFBRSxDQUFDO2dCQUNWRCxDQUFDLEVBQUU7ZUFDSDtjQUNERSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJHLElBQUksRUFBRUE7WUFBSSxHQUVWSSxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQWMsR0FDL0J2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWlCLEdBQy9CdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNqQixNQUFBLENBQUFxQixPQUFPO2NBQUNULElBQUksRUFBRUEsSUFBSTtjQUFFUSxTQUFTLEVBQUM7WUFBWSxFQUFHLEVBQzlDdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUEwQixFQUFHLENBQ3ZDLEVBQ052QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsYUFBS1AsS0FBSyxDQUFNLENBQ1IsRUFDVGIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFlLEdBQzdCdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLFlBQUlOLFdBQVcsQ0FBSyxDQUNmLEVBQ05kLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFRRyxTQUFTLEVBQUM7WUFBZSxHQUNoQ3ZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFBLEdBQUtUO1lBQVUsR0FBR3pFLEtBQUssQ0FBQ21GLE9BQU8sQ0FBQ0MsTUFBTSxDQUFVLENBQy9DLENBQ087VUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVBLElBQUEzQixNQUFBLEdBQUE5RSxPQUFBO1VBT087VUFBVSxTQUFVMEcscUJBQXFCQSxDQUFDO1lBQUVDLE1BQU07WUFBRUM7VUFBUSxDQUErQjtZQUNqRyxNQUFNLENBQUM5RCxNQUFNLEVBQUUrRCxTQUFTLENBQUMsR0FBRy9CLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFXQyxLQUFLLENBQUNKLE1BQU0sQ0FBQyxDQUFDSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTUMsU0FBUyxHQUFHbkMsTUFBQSxDQUFBWCxPQUFLLENBQUMrQyxNQUFNLENBQThCLEVBQUUsQ0FBQztZQUUvRHBDLE1BQUEsQ0FBQVgsT0FBSyxDQUFDZ0QsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsS0FBSyxHQUF3QztnQkFDbERDLE1BQU0sRUFBRTtrQkFBRTVGLEtBQUssRUFBRXFCLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLEVBQUU7Z0JBQUMsQ0FBc0I7Z0JBQ3REOEQsYUFBYSxFQUFFO2tCQUFFN0YsS0FBSyxFQUFFcUIsTUFBTSxDQUFDVSxJQUFJLENBQUMsRUFBRTtnQkFBQyxDQUFzQjtnQkFDN0Q2QixJQUFJLEVBQUU7ZUFDaUM7Y0FFeEN1QixRQUFRLENBQUNRLEtBQUssQ0FBQztZQUNoQixDQUFDLEVBQUUsQ0FBQ3RFLE1BQU0sRUFBRThELFFBQVEsQ0FBQyxDQUFDO1lBRXRCLE1BQU1XLFlBQVksR0FBR0EsQ0FBQzlGLEtBQWEsRUFBRTZELEtBQWEsS0FBSTtjQUNyRCxNQUFNa0MsU0FBUyxHQUFHLENBQUMsR0FBRzFFLE1BQU0sQ0FBQztjQUM3QjBFLFNBQVMsQ0FBQ2xDLEtBQUssQ0FBQyxHQUFHN0QsS0FBSyxDQUFDZ0csS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ2xDWixTQUFTLENBQUNXLFNBQVMsQ0FBQztjQUVwQixNQUFNSixLQUFLLEdBQXdDO2dCQUNsREMsTUFBTSxFQUFFO2tCQUFFNUYsS0FBSyxFQUFFK0YsU0FBUyxDQUFDaEUsSUFBSSxDQUFDLEVBQUU7Z0JBQUMsQ0FBc0I7Z0JBQ3pEOEQsYUFBYSxFQUFFO2tCQUFFN0YsS0FBSyxFQUFFcUIsTUFBTSxDQUFDVSxJQUFJLENBQUMsRUFBRTtnQkFBQyxDQUFzQjtnQkFDN0Q2QixJQUFJLEVBQUU7ZUFDaUM7Y0FDeEN1QixRQUFRLENBQUNRLEtBQUssQ0FBQztjQUVmLElBQUkzRixLQUFLLElBQUk2RCxLQUFLLEdBQUdxQixNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQ00sU0FBUyxDQUFDUyxPQUFPLENBQUNwQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUVxQyxLQUFLLEVBQUU7O1lBRXZDLENBQUM7WUFFRCxNQUFNQyxhQUFhLEdBQUdBLENBQUN2RSxDQUF3QyxFQUFFaUMsS0FBYSxLQUFJO2NBQ2pGLElBQUlqQyxDQUFDLENBQUN3RSxHQUFHLEtBQUssV0FBVyxJQUFJLENBQUMvRSxNQUFNLENBQUN3QyxLQUFLLENBQUMsSUFBSUEsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDekR1QixTQUFTLENBQUNpQixJQUFJLElBQUc7a0JBQ2hCLE1BQU1OLFNBQVMsR0FBRyxDQUFDLEdBQUdNLElBQUksQ0FBQztrQkFDM0JOLFNBQVMsQ0FBQ2xDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFO2tCQUN6QixPQUFPa0MsU0FBUztnQkFDakIsQ0FBQyxDQUFDO2dCQUNGUCxTQUFTLENBQUNTLE9BQU8sQ0FBQ3BDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRXFDLEtBQUssRUFBRTs7WUFFdkMsQ0FBQztZQUVELE1BQU1JLFdBQVcsR0FBSTFFLENBQXlDLElBQUk7Y0FDakUsTUFBTTJFLFNBQVMsR0FBRzNFLENBQUMsQ0FBQzRFLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDVCxLQUFLLENBQUMsQ0FBQyxFQUFFZCxNQUFNLENBQUMsQ0FBQ3dCLEtBQUssQ0FBQyxFQUFFLENBQUM7Y0FDNUV0QixTQUFTLENBQUNtQixTQUFTLENBQUM7Y0FDcEJBLFNBQVMsQ0FBQ0ksT0FBTyxDQUFDLENBQUMzRyxLQUFLLEVBQUU2RCxLQUFLLEtBQUk7Z0JBQ2xDLElBQUkyQixTQUFTLENBQUNTLE9BQU8sQ0FBQ3BDLEtBQUssQ0FBQyxFQUFFO2tCQUM3QjJCLFNBQVMsQ0FBQ1MsT0FBTyxDQUFDcEMsS0FBSyxDQUFFLENBQUM3RCxLQUFLLEdBQUdBLEtBQUs7O2NBRXpDLENBQUMsQ0FBQztjQUNGd0YsU0FBUyxDQUFDUyxPQUFPLENBQUNNLFNBQVMsQ0FBQ3JCLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRWdCLEtBQUssRUFBRTtjQUNoRHRFLENBQUMsQ0FBQ2dGLGNBQWMsRUFBRTtZQUNuQixDQUFDO1lBRUQsT0FDQ3ZELE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBeUIsR0FDdEN2RCxNQUFNLENBQUN3RixHQUFHLENBQUMsQ0FBQzdHLEtBQUssRUFBRTZELEtBQUssS0FDeEJSLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUNDMkIsR0FBRyxFQUFFdkMsS0FBSztjQUNWRCxJQUFJLEVBQUMsTUFBTTtjQUNYNUQsS0FBSyxFQUFFQSxLQUFLO2NBQ1o4RyxTQUFTLEVBQUUsQ0FBQztjQUNaQyxHQUFHLEVBQUVDLEVBQUUsSUFBS3hCLFNBQVMsQ0FBQ1MsT0FBTyxDQUFDcEMsS0FBSyxDQUFDLEdBQUdtRCxFQUFHO2NBQzFDN0IsUUFBUSxFQUFFdkQsQ0FBQyxJQUFJa0UsWUFBWSxDQUFDbEUsQ0FBQyxDQUFDZ0UsTUFBTSxDQUFDNUYsS0FBSyxFQUFFNkQsS0FBSyxDQUFDO2NBQ2xEb0QsU0FBUyxFQUFFckYsQ0FBQyxJQUFJdUUsYUFBYSxDQUFDdkUsQ0FBQyxFQUFFaUMsS0FBSyxDQUFDO2NBQ3ZDcUQsT0FBTyxFQUFFWjtZQUFXLEVBRXJCLENBQUMsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdFQSxJQUFBakQsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFnRixhQUFBLEdBQUFoRixPQUFBO1VBTU0sU0FBVTRJLGNBQWNBLENBQUM7WUFBRUMsS0FBSztZQUFFLEdBQUd6RDtVQUFLLENBQWM7WUFDN0QsTUFBTTBELGFBQWEsR0FBRztjQUNyQkMsUUFBUSxFQUFFO2dCQUNUMUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDTjJFLEtBQUssRUFBRTtlQUNQO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUjVFLENBQUMsRUFBRSxDQUFDO2dCQUNKMkUsS0FBSyxFQUFFOzthQUVSO1lBRUQsT0FDQ2xFLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBaUIsR0FDL0J2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2xCLGFBQUEsQ0FBQW1CLE1BQU0sQ0FBQzBDLEtBQUs7Y0FBQ3RFLE9BQU8sRUFBQyxTQUFTO2NBQUMyRSxVQUFVLEVBQUMsVUFBVTtjQUFDQyxRQUFRLEVBQUVMLGFBQWE7Y0FBRXpDLFNBQVMsRUFBQztZQUFhLEdBQ3BHd0MsS0FBSyxDQUNRLEVBQ2YvRCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBQSxHQUFXZCxLQUFLO2NBQUVpQixTQUFTLEVBQUM7WUFBWSxFQUFHLENBQ3RDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUErQyxLQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFGQTs7VUFTTSxTQUFVcUosV0FBV0EsQ0FBQztZQUFFUixLQUFLO1lBQUVqQyxRQUFRO1lBQUUsR0FBRzBDO1VBQUksQ0FBcUI7WUFDMUUsTUFBTUMsUUFBUSxHQUFHSCxLQUFLLENBQUNsQyxNQUFNLENBQW1CLElBQUksQ0FBQztZQUVyRCxNQUFNc0MsaUJBQWlCLEdBQUlwQyxLQUEwQyxJQUFJO2NBQ3hFLElBQUltQyxRQUFRLENBQUM3QixPQUFPLEVBQUU7Z0JBQ3JCLE1BQU0rQixXQUFXLEdBQUcsSUFBSUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtrQkFDdkNDLE9BQU8sRUFBRSxJQUFJO2tCQUNiQyxVQUFVLEVBQUU7aUJBQ1osQ0FBQztnQkFDRkwsUUFBUSxDQUFDN0IsT0FBTyxDQUFDbUMsYUFBYSxDQUFDSixXQUFXLENBQUM7O1lBRTdDLENBQUM7WUFFRCxPQUNDTCxLQUFBLENBQUFsRCxhQUFBO2NBQU9HLFNBQVMsRUFBQyxjQUFjO2NBQUNPLFFBQVEsRUFBRTRDO1lBQWlCLEdBQzFESixLQUFBLENBQUFsRCxhQUFBO2NBQU9iLElBQUksRUFBQyxPQUFPO2NBQUNtRCxHQUFHLEVBQUVlLFFBQVE7Y0FBRTNDLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU0wQztZQUFJLEVBQUksRUFDbkVGLEtBQUEsQ0FBQWxELGFBQUEsQ0FBQ2xCLGFBQUEsQ0FBQW1CLE1BQU0sQ0FBQzJELEdBQUc7Y0FDVnpELFNBQVMsRUFBQyxzQkFBc0I7Y0FDaEM5QixPQUFPLEVBQUU7Z0JBQUV5RSxLQUFLLEVBQUVNLElBQUksQ0FBQ1MsT0FBTyxHQUFHLEdBQUcsR0FBRztjQUFDLENBQUU7Y0FDMUN2RixVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRTtjQUFHO1lBQUUsR0FFNUI2RSxJQUFJLENBQUNTLE9BQU8sSUFBSVgsS0FBQSxDQUFBbEQsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDMkQsR0FBRztjQUFDekQsU0FBUyxFQUFDLHFCQUFxQjtjQUFDMkQsTUFBTTtZQUFBLEVBQUcsQ0FDMUQsRUFDWm5CLEtBQUssQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBTyxLQUFBLEdBQUFwSixPQUFBO1VBREE7O1VBY00sU0FBVWlLLFVBQVVBLENBQUM7WUFBRUMsUUFBUTtZQUFFekksS0FBSztZQUFFbUY7VUFBUSxDQUFvQjtZQUN6RSxPQUNDd0MsS0FBQSxDQUFBbEQsYUFBQSxjQUNFa0QsS0FBSyxDQUFDZSxRQUFRLENBQUM3QixHQUFHLENBQUM0QixRQUFRLEVBQUVFLEtBQUssSUFBRztjQUNyQztjQUNBLElBQUloQixLQUFLLENBQUNpQixjQUFjLENBQW9CRCxLQUFLLENBQUMsSUFBSSxPQUFPQSxLQUFLLENBQUNoRixLQUFLLENBQUMzRCxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM1RjtnQkFDQSxPQUFPMkgsS0FBSyxDQUFDa0IsWUFBWSxDQUFDRixLQUFLLEVBQUU7a0JBQ2hDTCxPQUFPLEVBQUVLLEtBQUssQ0FBQ2hGLEtBQUssQ0FBQzNELEtBQUssS0FBS0EsS0FBSztrQkFDcENtRixRQUFRLEVBQUVBLENBQUEsS0FBTUEsUUFBUSxDQUFDd0QsS0FBSyxDQUFDaEYsS0FBSyxDQUFDM0QsS0FBSztpQkFDMUMsQ0FBQzs7Y0FFSCxPQUFPMkksS0FBSztZQUNiLENBQUMsQ0FBQyxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFHLEdBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUF3SyxRQUFBLEdBQUF4SyxPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUF5SyxNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQThFLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBMEssV0FBQSxHQUFBMUssT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQTJLLEtBQUEsR0FBQTNLLE9BQUE7VUFFTSxTQUFVNEssZ0JBQWdCQSxDQUFBO1lBQy9CLElBQUk7Y0FDSHZLLEtBQUs7Y0FDTCtCLFNBQVM7Y0FDVGYsS0FBSztjQUNMZ0IsUUFBUTtjQUNSaEMsS0FBSyxFQUFFO2dCQUFFMEI7Y0FBVyxDQUFFO2NBQ3RCVixLQUFLLEVBQUU7Z0JBQUVtRixPQUFPLEVBQUVxRSxZQUFZO2dCQUFFQztjQUFNO1lBQUUsQ0FDeEMsR0FBRyxJQUFBL0YsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUV0QnBFLEtBQUssR0FBR0EsS0FBSyxDQUFDZSxTQUFTLENBQUNBLFNBQVMsQ0FBQztZQUVsQyxNQUFNLENBQUNtQixLQUFLLEVBQUV3SCxRQUFRLENBQUMsR0FBR2pHLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNLENBQUNrRSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBWCxPQUFLLENBQUMyQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU1vRSxjQUFjLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUNDLFFBQVEsQ0FBQy9JLFNBQVMsQ0FBQztZQUMzRztZQUNBLElBQUl3RCxXQUFXLEdBQUd2RSxLQUFLLENBQUN1RSxXQUFXO1lBRW5DLElBQUt4RCxTQUFvQixLQUFLLGlCQUFpQixFQUFFO2NBQ2hEd0QsV0FBVyxHQUFHQSxXQUFXLENBQUN3RixPQUFPLENBQUMsZ0JBQWdCLEVBQUUvSyxLQUFLLENBQUMyQixZQUFZLENBQUNxSixJQUFJLENBQUM7O1lBRzdFLE1BQU1DLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSEwsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTS9JLFNBQVMsR0FBRyxNQUFNN0IsS0FBSyxDQUFDeUQsZ0JBQWdCLEVBQUU7Z0JBQ2hELE1BQU03QyxRQUFBLENBQUFVLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDZixJQUFJLEVBQUU7Z0JBQ2hDNkosUUFBQSxDQUFBZSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxvQkFBb0J0SixTQUFTLENBQUN1QixJQUFJLEVBQUUsQ0FBQztlQUN2RCxDQUFDLE9BQU9KLENBQUMsRUFBRTtnQkFDWCxJQUFJQSxDQUFDLENBQUNJLElBQUksS0FBSyxHQUFHLEVBQUU7a0JBQ25Cc0gsUUFBUSxDQUFDRCxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQztrQkFDN0M7O2VBRUQsU0FBUztnQkFDVEcsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU1RLEdBQUcsR0FBRyxvQkFBb0JULFFBQVEsR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBQ2hFLE1BQU1VLElBQUksR0FBSXRKLFNBQW9CLEtBQUssaUJBQWlCLEdBQUcsb0JBQW9CL0IsS0FBSyxDQUFDNkIsU0FBUyxDQUFDdUIsSUFBSSxFQUFFLEdBQUcsR0FBRztZQUMzRyxPQUNDcUIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFvQixhQUFhO2NBQUN0RixTQUFTLEVBQUVvRjtZQUFHLEdBQzVCM0csTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBeEcsVUFBVSxDQUFDQyxPQUFPO2NBQUVrQyxTQUFTLEVBQUM7WUFBc0IsR0FDbkV2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW1DLEdBQ2pEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN5RSxLQUFBLENBQUFpQixRQUFRLE9BQUcsRUFDWjlHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFO1lBQUUsR0FDN0IxSyxLQUFLLENBQUNzRSxLQUFLLENBQ0MsRUFDZGIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUF5QixhQUFhO2NBQUN6SSxLQUFLLEVBQUVBLEtBQUs7Y0FBRXdDLE9BQU8sRUFBQztZQUFTLEVBQUcsRUFDaEQxRSxLQUFLLENBQUM0SyxRQUFRLElBQ2RuSCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFO1lBQUUsR0FDN0IxSyxLQUFLLENBQUM0SyxRQUFRLENBRWhCLEVBQ0RuSCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FDWEUsTUFBTSxFQUFFO2dCQUNQLEdBQUcxTCxLQUFLLENBQUNxQixJQUFJLENBQUN3SyxhQUFhLEVBQUU7Z0JBQzdCQyxlQUFlLEVBQUU5SixRQUFRLEVBQUUrSixLQUFLLEVBQUVDLE9BQU87Z0JBQ3pDQyxnQkFBZ0IsRUFBRWpLLFFBQVEsRUFBRStKLEtBQUssRUFBRUc7ZUFDbkM7Y0FDRGxHLFNBQVMsRUFBQztZQUFxQixHQUU5QlQsV0FBVyxDQUNDLEVBQ2JzRixjQUFjLElBQ2RwRyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBUUcsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNoQixXQUFBLENBQUFzSCxJQUFJO2NBQUNuRyxTQUFTLEVBQUMsNEJBQTRCO2NBQUNvRyxJQUFJLEVBQUVmO1lBQUksR0FDckRiLFlBQVksQ0FBQzZCLEtBQUssQ0FDYixDQUVSLEVBQ0F0SyxTQUFTLEtBQUssU0FBUyxJQUN2QjBDLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBb0IsR0FDbEN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQXFCLE1BQU07Y0FDTm9HLFFBQVEsRUFBRTNCLFFBQVE7Y0FDbEJoRixPQUFPLEVBQUVzRixTQUFTO2NBQ2xCdkYsT0FBTyxFQUFDLFNBQVM7Y0FDakJNLFNBQVMsRUFBQztZQUFZLEdBRXJCdEUsV0FBVyxDQUFDeUUsT0FBTyxDQUFDb0csT0FBTyxDQUNwQixDQUVWLENBQ1EsQ0FDTCxFQUNOOUgsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFvQyxHQUNsRHZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDdUUsTUFBQSxDQUFBb0MsS0FBSztjQUFDQyxHQUFHLEVBQUMseUJBQXlCO2NBQUNDLEdBQUcsRUFBRTFMLEtBQUssQ0FBQzJMO1lBQU8sRUFBSSxDQUN0RCxDQUNNLENBQ0U7VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkdBLElBQUFsSSxNQUFBLEdBQUE5RSxPQUFBO1VBaUJPLE1BQU1pTixhQUFhLEdBQUFwTSxPQUFBLENBQUFvTSxhQUFBLEdBQUduSSxNQUFBLENBQUFYLE9BQUssQ0FBQytJLGFBQWEsQ0FBQyxFQUFvQixDQUFDO1VBQy9ELE1BQU16SCxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNWCxNQUFBLENBQUFYLE9BQUssQ0FBQ2dKLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUNwTSxPQUFBLENBQUE0RSxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQnRFLElBQUFYLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFvTixZQUFBLEdBQUFwTixPQUFBO1VBQ0EsSUFBQXFOLFFBQUEsR0FBQXJOLE9BQUE7VUFDQSxJQUFBc04sUUFBQSxHQUFBdE4sT0FBQTtVQUVNLFNBQVV1TixhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRUM7WUFBWSxDQUFFLEdBQUcsSUFBQXpJLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTWdJLFFBQVEsR0FBRztjQUNoQkMsT0FBTyxFQUFFTCxRQUFBLENBQUFNLFdBQVc7Y0FDcEJDLE9BQU8sRUFBRU4sUUFBQSxDQUFBTyxXQUFXO2NBQ3BCQyxXQUFXLEVBQUVWLFlBQUEsQ0FBQVc7YUFDYjtZQUVELE1BQU1DLE9BQU8sR0FBR1AsUUFBUSxDQUFDRCxZQUFZLENBQUM7WUFDdEMsSUFBSSxDQUFDUSxPQUFPLEVBQUUsT0FBTyxJQUFJO1lBQ3pCLE9BQ0NsSixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTRDLEdBQzFEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUM4SCxPQUFPO2NBQUNuRyxHQUFHLEVBQUM7WUFBYyxFQUFHLENBQ3pCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUEvQyxNQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBaU8sS0FBQSxHQUFBak8sT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBa08sV0FBQSxHQUFBbE8sT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBQ0EsSUFBQTBLLFdBQUEsR0FBQTFLLE9BQUE7VUFDQSxJQUFBdUssR0FBQSxHQUFBdkssT0FBQTtVQUVPO1VBQVUsU0FBVStOLGVBQWVBLENBQUE7WUFDekMsTUFBTSxDQUFDL0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25HLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNoRSxNQUFNLEVBQUUrRCxTQUFTLENBQUMsR0FBRy9CLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDLEVBQVMsQ0FBQztZQUNyRCxNQUFNLENBQUN2RCxLQUFLLEVBQUV3SCxRQUFRLENBQUMsR0FBR2pHLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFnQixJQUFJLENBQUM7WUFFN0QsTUFBTTtjQUNMekcsS0FBSztjQUNMK04sWUFBWTtjQUNaNUksZUFBZTtjQUNmNkksV0FBVztjQUNYaE4sS0FBSyxFQUFFO2dCQUNOeU0sV0FBVyxFQUFFO2tCQUFFUSxJQUFJLEVBQUVqTjtnQkFBSztjQUFFO1lBQzVCLENBQ0QsR0FBRyxJQUFBMEQsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNO2NBQUU4STtZQUFNLENBQUUsR0FBR2xOLEtBQUs7WUFDeEIsTUFBTXNMLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUzQjtZQUFRLENBQUU7WUFFdkMsTUFBTXdELGNBQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO1lBRXRFLE1BQU1DLGFBQWEsR0FBR0QsY0FBYyxDQUFDRSxLQUFLLENBQUNDLEtBQUssSUFBSTdMLE1BQU0sQ0FBQzZMLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLE1BQU1DLFdBQVcsR0FBRztjQUFFakMsUUFBUSxFQUFFM0IsUUFBUSxJQUFJLENBQUN5RDtZQUFhLENBQUU7WUFFNUQsTUFBTTdILFFBQVEsR0FBSXZELENBQXNDLElBQUk7Y0FDM0R3RCxTQUFTLENBQUNnSSxVQUFVLEtBQUs7Z0JBQ3hCLEdBQUdBLFVBQVU7Z0JBQ2IsQ0FBQ3hMLENBQUMsQ0FBQ2dFLE1BQU0sQ0FBQ2dFLElBQUksR0FBR2hJLENBQUMsQ0FBQ2dFLE1BQU0sQ0FBQzVGO2VBQzFCLENBQUMsQ0FBQztZQUNKLENBQUM7WUFFRCxNQUFNcU4sUUFBUSxHQUFHLE1BQU8xSCxLQUF1QyxJQUFJO2NBQ2xFQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Y0FDdEI0QyxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCRixRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ2QsSUFBSTtnQkFDSCxNQUFNOUgsUUFBUSxHQUFHLE1BQU01QyxLQUFLLENBQUMyQyxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDO2dCQUN4RCxJQUFJLENBQUNHLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQzs7Z0JBRWhFaUwsV0FBVyxDQUFDcEwsUUFBUSxDQUFDVSxJQUFJLENBQUM7Z0JBQzFCeUssWUFBWSxDQUFDLGFBQWEsQ0FBQztlQUMzQixDQUFDLE9BQU9XLEdBQUcsRUFBRTtnQkFDYnpMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDd0wsR0FBRyxDQUFDO2dCQUNsQmhFLFFBQVEsQ0FBQyw4Q0FBOEMsQ0FBQztlQUN4RCxTQUFTO2dCQUNURSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTStELE1BQU0sR0FBR0EsQ0FBQSxLQUFNeEosZUFBZSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxPQUNDVixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBOEssUUFBQSxRQUNDbkssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBeEcsVUFBVSxDQUFDQztZQUFPLEdBQ2pDVyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2lJLE9BQUEsQ0FBQWUsWUFBWTtjQUFDbEosT0FBTyxFQUFFZ0o7WUFBTSxFQUFJLEVBRWpDbEssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFvQixhQUFhO2NBQUN0RixTQUFTLEVBQUM7WUFBK0QsR0FDdkZ2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2dJLFdBQUEsQ0FBQWlCLHlCQUF5QixPQUFHLEVBQzdCckssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUNpSixPQUFPLFFBQ2R0SyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQW9CLElBQUk7Y0FBQ2hKLFNBQVMsRUFBQyxlQUFlO2NBQUN5SSxRQUFRLEVBQUVBO1lBQVEsR0FDaER2TCxLQUFLLElBQ0x1QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2xCLGFBQUEsQ0FBQW1CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQSxHQUFLWSxXQUFBLENBQUF4RyxVQUFVLENBQUNTLElBQUk7Y0FBRTBCLFNBQVMsRUFBQztZQUFPLEdBQ2hEOUMsS0FBSyxDQUVQLEVBRUR1QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTGpFLElBQUksRUFBQyxNQUFNO2NBQ1h4QyxLQUFLLEVBQUUwRixNQUFNLENBQUNsRCxJQUFJLENBQUN4QyxLQUFLO2NBQ3hCMEcsUUFBUSxFQUFFLElBQUk7Y0FDZHhKLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkK0Y7WUFBUSxFQUNYLEVBQ0Y3SCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTGpFLElBQUksRUFBQyxNQUFNO2NBQ1h4QyxLQUFLLEVBQUUwRixNQUFNLENBQUNsSixJQUFJLENBQUN3RCxLQUFLO2NBQ3hCMEcsUUFBUSxFQUFFLElBQUk7Y0FDZHhKLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkK0Y7WUFBUSxFQUNYLEVBQ0Y3SCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTGpFLElBQUksRUFBQyxrQkFBa0I7Y0FDdkJ4QyxLQUFLLEVBQUUwRixNQUFNLENBQUNpQixnQkFBZ0IsQ0FBQzNHLEtBQUs7Y0FDcEMwRyxRQUFRLEVBQUUsSUFBSTtjQUNkeEosT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBcUIsS0FBSztjQUNMakUsSUFBSSxFQUFDLFNBQVM7Y0FDZHhDLEtBQUssRUFBRTBGLE1BQU0sQ0FBQ2tCLGlCQUFpQixDQUFDNUcsS0FBSztjQUNyQzlDLE9BQU8sRUFBQyxVQUFVO2NBQ2xCd0osUUFBUSxFQUFFLElBQUk7Y0FDZDNJLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBeUIsUUFBUTtjQUNSckUsSUFBSSxFQUFDLGdCQUFnQjtjQUNyQnhDLEtBQUssRUFBRTBGLE1BQU0sQ0FBQ29CLGNBQWMsQ0FBQzlHLEtBQUs7Y0FDbEN4RCxJQUFJLEVBQUMsVUFBVTtjQUNma0ssUUFBUSxFQUFFLElBQUk7Y0FDZDNJLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFFRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFDUixPQUFPLEVBQUMsU0FBUztjQUFDVixJQUFJLEVBQUMsUUFBUTtjQUFDd0QsS0FBSyxFQUFFMEYsTUFBTSxDQUFDcUIsTUFBTSxDQUFDL0csS0FBSztjQUFBLEdBQU0rRjtZQUFXLEVBQUksQ0FDakYsQ0FDUyxDQUNGLENBQ0osQ0FDWDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFIQSxJQUFBOUosTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBRUEsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBeUssTUFBQSxHQUFBekssT0FBQTtVQUVNLFNBQVVtUCx5QkFBeUJBLENBQUE7WUFDeEMsTUFBTTtjQUFFOU4sS0FBSztjQUFFaEI7WUFBSyxDQUFFLEdBQUcsSUFBQTBFLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTTtjQUFFNkksSUFBSSxFQUFFdUI7WUFBUyxDQUFFLEdBQUd4TyxLQUFLLENBQUN5TSxXQUFXO1lBQzdDLE1BQU07Y0FBRXBNO1lBQUksQ0FBRSxHQUFHckIsS0FBSztZQUN0QixNQUFNO2NBQUUyTTtZQUFPLENBQUUsR0FBRzNMLEtBQUs7WUFDekIsT0FDQ3lELE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYSxHQUMzQnZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYyxHQUM1QnZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDdUUsTUFBQSxDQUFBb0MsS0FBSztjQUFDeEcsU0FBUyxFQUFDLGdCQUFnQjtjQUFDeUcsR0FBRyxFQUFFcEwsSUFBSSxDQUFDb087WUFBUSxFQUFJLEVBQ3hEaEwsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFtQixHQUNyQ3ZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxhQUFLeEUsSUFBSSxDQUFDcU8sV0FBVyxDQUFNLEVBQzNCakwsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFpQixHQUFFMkcsT0FBTyxDQUFDcEgsV0FBVyxDQUFRLENBQ3JELENBQ0wsRUFDTmQsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQVNHLFNBQVMsRUFBQztZQUFxQixHQUN2Q3ZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxhQUFLMkosU0FBUyxDQUFDbEssS0FBSyxDQUFNLEVBQzFCYixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0UsTUFBTSxFQUFFLEVBQUU7Y0FBRTFGLFNBQVMsRUFBQztZQUFxQixHQUN0RHdKLFNBQVMsQ0FBQ2pLLFdBQVcsQ0FDVCxDQUNMLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQTJFLEdBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFnRixhQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBOEUsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFnUSxVQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBMEssV0FBQSxHQUFBMUssT0FBQTtVQUNBLElBQUF3SyxRQUFBLEdBQUF4SyxPQUFBO1VBRUEsSUFBQWtPLFdBQUEsR0FBQWxPLE9BQUE7VUFDQSxJQUFBbU8sT0FBQSxHQUFBbk8sT0FBQTtVQUVNLFNBQVUyTixXQUFXQSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxDQUFDcEssS0FBSyxFQUFFd0gsUUFBUSxDQUFDLEdBQUdqRyxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTW1KLGdCQUFnQixHQUFHO2NBQ3hCQyxNQUFNLEVBQUU7Z0JBQUU3TCxDQUFDLEVBQUUsTUFBTTtnQkFBRUMsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNqQzZMLE9BQU8sRUFBRTtnQkFBRTlMLENBQUMsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMxRDtZQUVELE1BQU0sQ0FBQzJMLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUd2TCxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFM0QsTUFBTTtjQUFFekYsS0FBSztjQUFFaEIsS0FBSztjQUFFbUYsZUFBZTtjQUFFNEk7WUFBWSxDQUFFLEdBQUcsSUFBQXJKLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDMUUsTUFBTSxDQUFDdUYsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25HLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNd0osVUFBVSxHQUFHLENBQUM7WUFDcEIsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUwsTUFBQSxDQUFBWCxPQUFLLENBQUMyQyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3BELE1BQU0rSSxTQUFTLEdBQUd4TyxLQUFLLENBQUNxTSxPQUFPLENBQUNZLElBQUk7WUFFcEMsTUFBTTNCLFFBQVEsR0FBRzRELEtBQUssQ0FBQzVKLE1BQU0sS0FBSzJKLFVBQVUsSUFBSXRGLFFBQVE7WUFDeEQsTUFBTThELFFBQVEsR0FBRyxNQUFPMUgsS0FBSyxJQUFtQjtjQUMvQyxJQUFJO2dCQUNIQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Z0JBQ3RCNEMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhJLFFBQVEsR0FBRyxNQUFNNUMsS0FBSyxDQUFDdUQsYUFBYSxDQUFDMk0sS0FBSyxDQUFDO2dCQUVqRCxJQUFJdE4sUUFBUSxDQUFDVSxJQUFJLENBQUNSLE1BQU0sQ0FBQ3NOLFdBQVcsRUFBRSxLQUFLLFNBQVMsRUFBRTtrQkFDckRyQyxZQUFZLENBQUMsU0FBUyxDQUFDO2tCQUN2Qjs7Z0JBR0QsTUFBTW5OLFFBQUEsQ0FBQVUsY0FBYyxDQUFDRCxJQUFJLENBQUNmLElBQUksRUFBRTtnQkFDaEN5TixZQUFZLENBQUMsaUJBQWlCLENBQUM7ZUFDL0IsQ0FBQyxPQUFPL0ssQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDcU4sT0FBTyxDQUFDO2dCQUV4QixJQUFJck4sQ0FBQyxDQUFDcU4sT0FBTyxLQUFLLGlCQUFpQixFQUFFO2tCQUNwQ3RDLFlBQVksQ0FBQyxTQUFTLENBQUM7a0JBQ3ZCOztnQkFFRCxJQUFJL0ssQ0FBQyxDQUFDcU4sT0FBTyxLQUFLLGdCQUFnQixFQUFFO2tCQUNuQyxNQUFNelAsUUFBQSxDQUFBVSxjQUFjLENBQUNELElBQUksQ0FBQ2YsSUFBSSxFQUFFO2tCQUNoQzZKLFFBQUEsQ0FBQWUsT0FBTyxDQUFDQyxTQUFTLENBQUMsb0JBQW9CK0UsS0FBSyxFQUFFLENBQUM7a0JBQzlDOztnQkFFRCxNQUFNSSxLQUFLLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDeEYsUUFBUSxDQUFDOUgsQ0FBQyxFQUFFcU4sT0FBTyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVE7Z0JBQy9GTCxhQUFhLENBQUNNLEtBQUssQ0FBQztnQkFDcEI7Z0JBRUEsTUFBTUQsT0FBTyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ3ZGLFFBQVEsQ0FBQzlILENBQUMsRUFBRXFOLE9BQU8sQ0FBQyxHQUN2RSxHQUFHck4sQ0FBQyxFQUFFcU4sT0FBTyxZQUFZLEdBQ3pCck4sQ0FBQyxFQUFFcU4sT0FBTyxDQUFDRSxRQUFRLEVBQUU7Z0JBQ3hCN0YsUUFBUSxDQUFDMUosS0FBSyxDQUFDeUosTUFBTSxDQUFDNEYsT0FBTyxDQUFDLElBQUlyUCxLQUFLLENBQUN5SixNQUFNLENBQUMrRixnQkFBZ0IsQ0FBQztlQUNoRSxTQUFTO2dCQUNUNUYsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE1BQU02RixhQUFhLEdBQUcxSixLQUFLLElBQUlvSixRQUFRLENBQUNwSixLQUFLLENBQUNFLGFBQWEsRUFBRTdGLEtBQUssQ0FBQztZQUNuRTtZQUNBLE1BQU11TixNQUFNLEdBQUdBLENBQUEsS0FBTXhKLGVBQWUsQ0FBQyxFQUFFLENBQUM7WUFDeEMsT0FDQ1YsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBeEcsVUFBVSxDQUFDQztZQUFPLEdBQ2pDVyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2lJLE9BQUEsQ0FBQWUsWUFBWTtjQUFDbEosT0FBTyxFQUFFZ0o7WUFBTSxFQUFJLEVBQ2pDbEssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFvQixhQUFhO2NBQUN0RixTQUFTLEVBQUM7WUFBK0QsR0FDdkZ2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2dJLFdBQUEsQ0FBQTZDLGlCQUFpQixPQUFHLEVBQ3JCak0sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUNtSSxJQUFJO2NBQ1huRixRQUFRLEVBQUU4RyxnQkFBZ0I7Y0FDMUI3TCxPQUFPLEVBQUMsUUFBUTtjQUNoQkcsT0FBTyxFQUFDLFNBQVM7Y0FDakI4QixTQUFTLEVBQUMsNENBQTRDO2NBQ3REeUksUUFBUSxFQUFFQTtZQUFRLEdBRWxCaEssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUM4SixVQUFBLENBQUF0SixxQkFBcUI7Y0FBQ0MsTUFBTSxFQUFFMkosVUFBVTtjQUFFMUosUUFBUSxFQUFFa0s7WUFBYSxFQUFJLEVBQ3RFaE0sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUF5QixhQUFhO2NBQUN6SSxLQUFLLEVBQUVBLEtBQUs7Y0FBRXdDLE9BQU8sRUFBRXFLO1lBQVUsRUFBSSxFQUNwRHRMLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFDb0csUUFBUSxFQUFFQSxRQUFRO2NBQUU1RyxPQUFPLEVBQUMsU0FBUztjQUFDVixJQUFJLEVBQUM7WUFBUSxHQUN6RHdLLFNBQVMsQ0FBQ3ZCLElBQUksQ0FBQzBDLE1BQU0sQ0FDZCxFQUNUbE0sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFRLEdBQ3RCdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGFBQUsySixTQUFTLENBQUN2QixJQUFJLENBQUMyQyxNQUFNLENBQUN0TCxLQUFLLENBQU0sRUFDdENiLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBSSxHQUFFd0osU0FBUyxDQUFDdkIsSUFBSSxDQUFDMkMsTUFBTSxDQUFDckwsV0FBVyxDQUFRLENBQzFELENBQ08sQ0FDQyxDQUNKO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBLElBQUFWLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBOEUsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQTJLLEtBQUEsR0FBQTNLLE9BQUE7VUFFTSxTQUFVK1EsaUJBQWlCQSxDQUFBO1lBQ2hDLElBQUk7Y0FBRTFRLEtBQUs7Y0FBRW1GLGVBQWU7Y0FBRXBELFNBQVM7Y0FBRWY7WUFBSyxDQUFFLEdBQUcsSUFBQTBELFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDckVwRSxLQUFLLEdBQUdBLEtBQUssQ0FBQ3FNLE9BQU8sQ0FBQ3dELFNBQVM7WUFFL0IsT0FDQ3BNLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFBcEIsTUFBQSxDQUFBWCxPQUFBLENBQUE4SyxRQUFBLFFBQ0NuSyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9DLEdBQ2xEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN5RSxLQUFBLENBQUFpQixRQUFRLE9BQUcsRUFDWjlHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFO1lBQUUsR0FDN0IxSyxLQUFLLENBQUNzRSxLQUFLLENBQ0MsRUFDZGIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNoQixXQUFBLENBQUEyRyxXQUFXO2NBQ1hFLE1BQU0sRUFBRTtnQkFDUCxHQUFHMUwsS0FBSyxDQUFDcUIsSUFBSSxDQUFDd0ssYUFBYTtlQUMzQjtjQUNEN0YsU0FBUyxFQUFDO1lBQXFCLEdBRTlCaEYsS0FBSyxDQUFDdUUsV0FBVyxDQUNMLENBQ0wsQ0FDTCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUFkLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBeUssTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBMkssS0FBQSxHQUFBM0ssT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQXVLLEdBQUEsR0FBQXZLLE9BQUE7VUFDQSxJQUFBbU8sT0FBQSxHQUFBbk8sT0FBQTtVQUVNLFNBQVVtUixjQUFjQSxDQUFBO1lBQzdCLE1BQU1sQixnQkFBZ0IsR0FBRztjQUN4QkMsTUFBTSxFQUFFO2dCQUFFN0wsQ0FBQyxFQUFFLEtBQUs7Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDaEM2TCxPQUFPLEVBQUU7Z0JBQUU5TCxDQUFDLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDMUQ7WUFDRCxJQUFJO2NBQUVwRSxLQUFLO2NBQUVtRixlQUFlO2NBQUVwRCxTQUFTO2NBQUVmO1lBQUssQ0FBRSxHQUFHLElBQUEwRCxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ3JFcEUsS0FBSyxHQUFHQSxLQUFLLENBQUNxTSxPQUFPLENBQUN3RCxTQUFTO1lBRS9CLE9BQ0NwTSxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBOEssUUFBQSxRQUNDbkssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNpSSxPQUFBLENBQUFpRCxNQUFNO2NBQUNwTCxPQUFPLEVBQUVBLENBQUEsS0FBTVIsZUFBZSxDQUFDaEQsU0FBUztZQUFDLEVBQUksRUFDckRzQyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2xCLGFBQUEsQ0FBQW1CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQ1gsUUFBUSxFQUFFOEcsZ0JBQWdCO2NBQUU3TCxPQUFPLEVBQUMsUUFBUTtjQUFDRyxPQUFPLEVBQUM7WUFBUyxHQUN6RU8sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFvQixhQUFhO2NBQUN0RixTQUFTLEVBQUM7WUFBdUMsR0FDL0R2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9DLEdBQ2xEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN5RSxLQUFBLENBQUFpQixRQUFRLE9BQUcsRUFDWjlHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2hCLFdBQUEsQ0FBQTJHLFdBQVc7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsTUFBTSxFQUFFO1lBQUUsR0FDN0IxSyxLQUFLLENBQUNzRSxLQUFLLENBQ0MsRUFDZGIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNoQixXQUFBLENBQUEyRyxXQUFXO2NBQ1hFLE1BQU0sRUFBRTtnQkFDUCxHQUFHMUwsS0FBSyxDQUFDcUIsSUFBSSxDQUFDd0ssYUFBYTtlQUMzQjtjQUNEN0YsU0FBUyxFQUFDO1lBQXFCLEdBRTlCaEYsS0FBSyxDQUFDdUUsV0FBVyxDQUNMLENBQ0wsQ0FDTCxFQUNOZCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQW9DLEdBQ2xEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN1RSxNQUFBLENBQUFvQyxLQUFLO2NBQUN4RyxTQUFTLEVBQUMsb0JBQW9CO2NBQUN5RyxHQUFHLEVBQUMseUJBQXlCO2NBQUNDLEdBQUcsRUFBRTFMLEtBQUssQ0FBQzJMO1lBQU8sRUFBSSxDQUNyRixDQUNTLENBQ0osQ0FDWDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBbEksTUFBQSxHQUFBOUUsT0FBQTtVQVFPLE1BQU1xUixvQkFBb0IsR0FBQXhRLE9BQUEsQ0FBQXdRLG9CQUFBLEdBQUd2TSxNQUFBLENBQUFYLE9BQUssQ0FBQytJLGFBQWEsQ0FBQyxFQUFxQixDQUFDO1VBQ3ZFLE1BQU1vRSx1QkFBdUIsR0FBR0EsQ0FBQSxLQUFNeE0sTUFBQSxDQUFBWCxPQUFLLENBQUNnSixVQUFVLENBQUNrRSxvQkFBb0IsQ0FBQztVQUFDeFEsT0FBQSxDQUFBeVEsdUJBQUEsR0FBQUEsdUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHBGLElBQUF4TSxNQUFBLEdBQUE5RSxPQUFBO1VBQ00sU0FBVWdNLGFBQWFBLENBQUM7WUFBRXpJO1VBQUssQ0FBRTtZQUN0QyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFdkIsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO2NBQzlCLE9BQ0N1QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Z0JBQUtHLFNBQVMsRUFBQztjQUFZLEdBQzFCdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2dCQUFRRyxTQUFTLEVBQUM7Y0FBNEIsR0FBRTlDLEtBQUssQ0FBQ29DLEtBQUssQ0FBVSxFQUNyRWIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGVBQU8zQyxLQUFLLENBQUNxQyxXQUFXLENBQVEsQ0FDM0I7O1lBR1IsT0FBT2QsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFZLEdBQUU5QyxLQUFLLENBQVE7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQXVCLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFnUSxVQUFBLEdBQUFoUSxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFFQSxJQUFBdVIsU0FBQSxHQUFBdlIsT0FBQTtVQUNBLElBQUFpQixRQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBd1IsY0FBQSxHQUFBeFIsT0FBQTtVQUNNLFNBQVV5UixpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNLENBQUNsTyxLQUFLLEVBQUV3SCxRQUFRLENBQUMsR0FBR2pHLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QyxNQUFNbUosZ0JBQWdCLEdBQUc7Y0FDeEJDLE1BQU0sRUFBRTtnQkFBRTdMLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2pDNkwsT0FBTyxFQUFFO2dCQUFFOUwsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzFEO1lBRUQsTUFBTSxHQUFHNEwsYUFBYSxDQUFDLEdBQUd2TCxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakQsTUFBTTtjQUFFNEs7WUFBTyxDQUFFLEdBQUcsSUFBQUgsU0FBQSxDQUFBRCx1QkFBdUIsR0FBRTtZQUM3QyxNQUFNO2NBQUVqUSxLQUFLO2NBQUVoQixLQUFLO2NBQUUrTjtZQUFZLENBQUUsR0FBRyxJQUFBckosUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUN6RCxNQUFNLENBQUN1RixRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkcsTUFBQSxDQUFBWCxPQUFLLENBQUMyQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU13SixVQUFVLEdBQUcsQ0FBQztZQUNwQixNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcxTCxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDcEQsTUFBTTtjQUFFd0gsSUFBSSxFQUFFdUI7WUFBUyxDQUFFLEdBQUd4TyxLQUFLLENBQUN1TSxPQUFPLENBQUNFLFdBQVc7WUFFckQsTUFBTW5CLFFBQVEsR0FBRzRELEtBQUssQ0FBQzVKLE1BQU0sS0FBSzJKLFVBQVUsSUFBSXRGLFFBQVE7WUFDeEQsTUFBTThELFFBQVEsR0FBRyxNQUFPMUgsS0FBSyxJQUFtQjtjQUMvQyxJQUFJO2dCQUNIQSxLQUFLLENBQUNpQixjQUFjLEVBQUU7Z0JBQ3RCNEMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTWhJLFFBQVEsR0FBRyxNQUFNNUMsS0FBSyxDQUFDbUQsSUFBSSxDQUFDK00sS0FBSyxDQUFDO2dCQUV4QyxJQUFJdE4sUUFBUSxDQUFDVSxJQUFJLENBQUNSLE1BQU0sQ0FBQ3NOLFdBQVcsRUFBRSxLQUFLLFNBQVMsRUFBRTtrQkFDckRyQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7a0JBQ2xDOztnQkFHREEsWUFBWSxDQUFDLGlCQUFpQixDQUFDO2dCQUMvQixNQUFNbk4sUUFBQSxDQUFBVSxjQUFjLENBQUNELElBQUksQ0FBQ2YsSUFBSSxFQUFFO2VBQ2hDLENBQUMsT0FBTzBDLENBQUMsRUFBRTtnQkFDWCxNQUFNc04sS0FBSyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ3hGLFFBQVEsQ0FBQzlILENBQUMsRUFBRXFOLE9BQU8sQ0FBQyxHQUFHLFNBQVMsR0FBRyxRQUFRO2dCQUMvRkwsYUFBYSxDQUFDTSxLQUFLLENBQUM7Z0JBQ3BCO2dCQUVBNUYsUUFBUSxDQUFDMUosS0FBSyxDQUFDeUosTUFBTSxDQUFDekgsQ0FBQyxFQUFFcU4sT0FBTyxFQUFFRSxRQUFRLEVBQUUsQ0FBQyxJQUFJdlAsS0FBSyxDQUFDeUosTUFBTSxDQUFDK0YsZ0JBQWdCLENBQUM7ZUFDL0UsU0FBUztnQkFDVDVGLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNNkYsYUFBYSxHQUFHMUosS0FBSyxJQUFJb0osUUFBUSxDQUFDcEosS0FBSyxDQUFDRSxhQUFhLEVBQUU3RixLQUFLLENBQUM7WUFDbkU7WUFDQSxPQUNDcUQsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUNtSSxJQUFJO2NBQ1huRixRQUFRLEVBQUU4RyxnQkFBZ0I7Y0FDMUI3TCxPQUFPLEVBQUMsUUFBUTtjQUNoQkcsT0FBTyxFQUFDLFNBQVM7Y0FDakI4QixTQUFTLEVBQUMsNENBQTRDO2NBQ3REeUksUUFBUSxFQUFFQTtZQUFRLEdBRWxCaEssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUM4SixVQUFBLENBQUF0SixxQkFBcUI7Y0FBQ0MsTUFBTSxFQUFFMkosVUFBVTtjQUFFMUosUUFBUSxFQUFFa0s7WUFBYSxFQUFJLEVBQ3RFaE0sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNzTCxjQUFBLENBQUF4RixhQUFhO2NBQUN6SSxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUMvQnVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFDb0csUUFBUSxFQUFFQSxRQUFRO2NBQUU1RyxPQUFPLEVBQUMsU0FBUztjQUFDVixJQUFJLEVBQUM7WUFBUSxHQUN6RHdLLFNBQVMsQ0FBQ3ZCLElBQUksQ0FBQzBDLE1BQU0sQ0FDZCxFQUNUbE0sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFRLEdBQ3RCdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGFBQUsySixTQUFTLENBQUN2QixJQUFJLENBQUMyQyxNQUFNLENBQUN0TCxLQUFLLENBQU0sRUFDdENiLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBSSxHQUFFd0osU0FBUyxDQUFDdkIsSUFBSSxDQUFDMkMsTUFBTSxDQUFDckwsV0FBVyxDQUFRLENBQzFELENBQ087VUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVBLElBQUFkLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBZ0YsYUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQWtPLFdBQUEsR0FBQWxPLE9BQUE7VUFDQSxJQUFBaU8sS0FBQSxHQUFBak8sT0FBQTtVQUNBLElBQUF1SyxHQUFBLEdBQUF2SyxPQUFBO1VBQ0EsSUFBQW1PLE9BQUEsR0FBQW5PLE9BQUE7VUFFTSxTQUFVMlIsYUFBYUEsQ0FBQztZQUFFRCxPQUFPO1lBQUUxQztVQUFNLENBQUU7WUFDaEQsTUFBTTdGLFFBQVEsR0FBRztjQUNoQitHLE1BQU0sRUFBRTtnQkFBRTVMLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDdEI2TCxPQUFPLEVBQUU7Z0JBQ1I3TCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYb04sSUFBSSxFQUFFLGdCQUFnQjtrQkFDdEJDLGVBQWUsRUFBRSxHQUFHO2tCQUNwQnBOLFFBQVEsRUFBRSxHQUFHLENBQUM7OzthQUdoQjtZQUVELE1BQU0sQ0FBQzhMLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUcxTCxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBUyxFQUFFLENBQUM7WUFDcEQsTUFBTXJGLEtBQUssR0FBRztjQUNiOE8sS0FBSztjQUNMQyxRQUFRO2NBQ1JrQjthQUNBO1lBRUQsT0FDQzVNLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbkIsUUFBQSxDQUFBc00sb0JBQW9CLENBQUNTLFFBQVE7Y0FBQ3JRLEtBQUssRUFBRUE7WUFBSyxHQUMxQ3FELE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDMkQsR0FBRztjQUFDWCxRQUFRLEVBQUVBLFFBQVE7Y0FBRS9FLE9BQU8sRUFBQyxRQUFRO2NBQUNHLE9BQU8sRUFBQztZQUFTLEdBQ2pFTyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2lJLE9BQUEsQ0FBQWUsWUFBWTtjQUFDckgsR0FBRyxFQUFDLFFBQVE7Y0FBQzdCLE9BQU8sRUFBRWdKO1lBQU0sRUFBSSxFQUM5Q2xLLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDcUUsR0FBQSxDQUFBb0IsYUFBYTtjQUFDdEYsU0FBUyxFQUFDO1lBQStELEdBQ3ZGdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNnSSxXQUFBLENBQUE2RCxpQkFBaUIsT0FBRyxFQUNyQmpOLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBd0QsaUJBQWlCLE9BQUcsQ0FDTixDQUNKLENBQ2tCO1VBRWxDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBM00sTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUErRSxRQUFBLEdBQUEvRSxPQUFBO1VBQ0EsSUFBQTJLLEtBQUEsR0FBQTNLLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUNBLElBQUFnRixhQUFBLEdBQUFoRixPQUFBO1VBRU0sU0FBVStSLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUUxUTtZQUFLLENBQUUsR0FBRyxJQUFBMEQsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUU2SSxJQUFJLEVBQUV1QjtZQUFTLENBQUUsR0FBR3hPLEtBQUssQ0FBQ3VNLE9BQU8sQ0FBQ0UsV0FBVztZQUNyRCxNQUFNbUMsZ0JBQWdCLEdBQUc7Y0FDeEJDLE1BQU0sRUFBRTtnQkFBRTdMLENBQUMsRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2pDNkwsT0FBTyxFQUFFO2dCQUFFOUwsQ0FBQyxFQUFFLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzFEO1lBRUQsT0FDQ0ssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUNYLFFBQVEsRUFBRThHLGdCQUFnQjtjQUFFN0wsT0FBTyxFQUFDLFFBQVE7Y0FBQ0csT0FBTyxFQUFDLFNBQVM7Y0FBQzhCLFNBQVMsRUFBQztZQUFhLEdBQ2pHdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFxQixHQUNuQ3ZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDeUUsS0FBQSxDQUFBaUIsUUFBUSxPQUFHLENBQ1AsRUFDTjlHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBcUIsR0FDdkN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsYUFBSzJKLFNBQVMsQ0FBQ2xLLEtBQUssQ0FBTSxFQUMxQmIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNoQixXQUFBLENBQUEyRyxXQUFXO2NBQUNFLE1BQU0sRUFBRSxFQUFFO2NBQUUxRixTQUFTLEVBQUM7WUFBcUIsR0FDdER3SixTQUFTLENBQUNqSyxXQUFXLENBQ1QsQ0FDTCxDQUNFO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFkLE1BQUEsR0FBQTlFLE9BQUE7VUFDQSxJQUFBZ0YsYUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFpTyxLQUFBLEdBQUFqTyxPQUFBO1VBQ0EsSUFBQWtGLFdBQUEsR0FBQWxGLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFrTyxXQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQTBLLFdBQUEsR0FBQTFLLE9BQUE7VUFDQSxJQUFBdUssR0FBQSxHQUFBdkssT0FBQTtVQUNBLElBQUFtTyxPQUFBLEdBQUFuTyxPQUFBO1VBRU87VUFBVSxTQUFVZ1MsV0FBV0EsQ0FBQztZQUFFck8sSUFBSTtZQUFFK04sT0FBTztZQUFFMUM7VUFBTSxDQUFFO1lBQy9ELE1BQU0sQ0FBQ2hFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUduRyxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDaEUsTUFBTSxFQUFFK0QsU0FBUyxDQUFDLEdBQUcvQixNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxFQUFTLENBQUM7WUFDckQsTUFBTSxDQUFDdkQsS0FBSyxFQUFFd0gsUUFBUSxDQUFDLEdBQUdqRyxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBZ0IsSUFBSSxDQUFDO1lBQzdELE1BQU07Y0FDTHpHLEtBQUs7Y0FDTCtOLFlBQVk7Y0FDWkMsV0FBVztjQUNYaE4sS0FBSyxFQUFFO2dCQUNOdU0sT0FBTyxFQUFFO2tCQUFFVSxJQUFJLEVBQUVqTjtnQkFBSztjQUFFO1lBQ3hCLENBQ0QsR0FBRyxJQUFBMEQsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNO2NBQUU4STtZQUFNLENBQUUsR0FBR2xOLEtBQUs7WUFDeEIsTUFBTXNMLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUzQjtZQUFRLENBQUU7WUFDdkMsTUFBTXdELGNBQWMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUM7WUFDckYsTUFBTUMsYUFBYSxHQUFHRCxjQUFjLENBQUNFLEtBQUssQ0FBQ0MsS0FBSyxJQUFJN0wsTUFBTSxDQUFDNkwsS0FBSyxDQUFDLENBQUM7WUFFbEUsTUFBTUMsV0FBVyxHQUFHO2NBQUVqQyxRQUFRLEVBQUUzQixRQUFRLElBQUksQ0FBQ3lEO1lBQWEsQ0FBRTtZQUM1RCxNQUFNN0gsUUFBUSxHQUFJdkQsQ0FBc0MsSUFBSTtjQUMzRHdELFNBQVMsQ0FBQ2dJLFVBQVUsS0FBSztnQkFDeEIsR0FBR0EsVUFBVTtnQkFDYixDQUFDeEwsQ0FBQyxDQUFDZ0UsTUFBTSxDQUFDZ0UsSUFBSSxHQUFHaEksQ0FBQyxDQUFDZ0UsTUFBTSxDQUFDNUY7ZUFDMUIsQ0FBQyxDQUFDO1lBQ0osQ0FBQztZQUVELE1BQU1xTixRQUFRLEdBQUcsTUFBTzFILEtBQXVDLElBQUk7Y0FDbEVBLEtBQUssQ0FBQ2lCLGNBQWMsRUFBRTtjQUN0QjRDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Y0FDakJGLFFBQVEsQ0FBQyxJQUFJLENBQUM7Y0FFZCxJQUFJO2dCQUNILE1BQU05SCxRQUFRLEdBQVEsTUFBTTVDLEtBQUssQ0FBQ3dDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDO2dCQUV6RCxJQUFJLENBQUNHLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUM7O2dCQUUxQmlMLFdBQVcsQ0FBQ3BMLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUMxQnlLLFlBQVksQ0FBQyxTQUFTLENBQUM7ZUFDdkIsQ0FBQyxPQUFPVyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSUEsR0FBRyxDQUFDeEwsS0FBSyxDQUFDRSxJQUFJLEtBQUssRUFBRSxFQUFFO2tCQUMxQnNILFFBQVEsQ0FBQzFKLEtBQUssQ0FBQ3lKLE1BQU0sQ0FBQ21ILGVBQWUsQ0FBQztrQkFDdEM7O2dCQUVEbEgsUUFBUSxDQUFDLDhDQUE4QyxDQUFDO2VBQ3hELFNBQVM7Z0JBQ1RFLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFFRCxPQUNDbkcsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBeEcsVUFBVSxDQUFDQztZQUFPLEdBQ2pDVyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2lJLE9BQUEsQ0FBQWUsWUFBWTtjQUFDckgsR0FBRyxFQUFDLFFBQVE7Y0FBQzdCLE9BQU8sRUFBRWdKO1lBQU0sRUFBSSxFQUM5Q2xLLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDcUUsR0FBQSxDQUFBb0IsYUFBYTtjQUFDdEYsU0FBUyxFQUFDO1lBQStELEdBQ3ZGdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNnSSxXQUFBLENBQUFnRSxxQkFBcUIsT0FBRyxFQUN6QnBOLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBb0IsSUFBSTtjQUFDaEosU0FBUyxFQUFDLGdDQUFnQztjQUFDeUksUUFBUSxFQUFFQTtZQUFRLEdBQ2pFdkwsS0FBSyxJQUNMdUIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFtQixNQUFNLENBQUMyRCxHQUFHO2NBQUEsR0FBS1ksV0FBQSxDQUFBeEcsVUFBVSxDQUFDUyxJQUFJO2NBQUUwQixTQUFTLEVBQUM7WUFBcUIsR0FDOUQ5QyxLQUFLLENBRVAsRUFDRHVCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBa0IsR0FDaEN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTGpFLElBQUksRUFBQyxNQUFNO2NBQ1h4QyxLQUFLLEVBQUUwRixNQUFNLENBQUM0RCxJQUFJLENBQUN0SixLQUFLO2NBQ3hCMEcsUUFBUSxFQUFFLElBQUk7Y0FDZHhKLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkK0Y7WUFBUSxFQUNYLEVBQ0Y3SCxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytILEtBQUEsQ0FBQXFCLEtBQUs7Y0FDTGpFLElBQUksRUFBQyxPQUFPO2NBQ1p4QyxLQUFLLEVBQUUwRixNQUFNLENBQUM2RCxLQUFLLENBQUN2SixLQUFLO2NBQ3pCMEcsUUFBUSxFQUFFLElBQUk7Y0FDZHhKLE9BQU8sRUFBQyxVQUFVO2NBQ2xCYSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkK0Y7WUFBUSxFQUNYLENBQ0csRUFDTjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBcUIsS0FBSztjQUNMakUsSUFBSSxFQUFDLGdCQUFnQjtjQUNyQnhDLEtBQUssRUFBRTBGLE1BQU0sQ0FBQzhELGNBQWMsQ0FBQ3hKLEtBQUs7Y0FDbEMwRyxRQUFRLEVBQUUsSUFBSTtjQUNkeEosT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBcUIsS0FBSztjQUNMakUsSUFBSSxFQUFDLE1BQU07Y0FDWGtFLFFBQVEsRUFBRSxJQUFJO2NBQ2QxRyxLQUFLLEVBQUUwRixNQUFNLENBQUNsRCxJQUFJLENBQUN4QyxLQUFLO2NBQ3hCOUMsT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBcUIsS0FBSztjQUNMakUsSUFBSSxFQUFDLE1BQU07Y0FDWGtFLFFBQVEsRUFBRSxJQUFJO2NBQ2QxRyxLQUFLLEVBQUUwRixNQUFNLENBQUNsSixJQUFJLENBQUN3RCxLQUFLO2NBQ3hCOUMsT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK0gsS0FBQSxDQUFBcUIsS0FBSztjQUNMakUsSUFBSSxFQUFDLFNBQVM7Y0FDZGtFLFFBQVEsRUFBRSxJQUFJO2NBQ2QxRyxLQUFLLEVBQUUwRixNQUFNLENBQUMrRCxPQUFPLENBQUN6SixLQUFLO2NBQzNCOUMsT0FBTyxFQUFDLFVBQVU7Y0FDbEJhLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QrRjtZQUFRLEVBQ1gsRUFDRjdILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFDUixPQUFPLEVBQUMsU0FBUztjQUFDVixJQUFJLEVBQUMsUUFBUTtjQUFDd0QsS0FBSyxFQUFFMEYsTUFBTSxDQUFDcUIsTUFBTSxDQUFDL0csS0FBSztjQUFBLEdBQU0rRjtZQUFXLEVBQUksQ0FDakYsQ0FDUSxDQUNKO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUhBLElBQUE5SixNQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBMkssS0FBQSxHQUFBM0ssT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBRU0sU0FBVWtTLHFCQUFxQkEsQ0FBQTtZQUNwQyxNQUFNO2NBQUU3UTtZQUFLLENBQUUsR0FBRyxJQUFBMEQsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUU2SSxJQUFJLEVBQUV1QjtZQUFTLENBQUUsR0FBR3hPLEtBQUssQ0FBQ3VNLE9BQU87WUFDekMsT0FDQzlJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBYSxHQUMzQnZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDeUUsS0FBQSxDQUFBaUIsUUFBUSxPQUFHLEVBQ1o5RyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQXFCLEdBQ3ZDdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGFBQUsySixTQUFTLENBQUNsSyxLQUFLLENBQU0sRUFDMUJiLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBMkcsV0FBVztjQUFDRSxNQUFNLEVBQUUsRUFBRTtjQUFFMUYsU0FBUyxFQUFDO1lBQXFCLEdBQ3REd0osU0FBUyxDQUFDakssV0FBVyxDQUNULENBQ0wsQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBZCxNQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQW9OLFlBQUEsR0FBQXBOLE9BQUE7VUFDQSxJQUFBaU8sS0FBQSxHQUFBak8sT0FBQTtVQUNBLElBQUF1UyxPQUFBLEdBQUF2UyxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFFQSxJQUFBZ0YsYUFBQSxHQUFBaEYsT0FBQTtVQUVBLElBQUF3UyxpQkFBQSxHQUFBeFMsT0FBQTtVQUNNLFNBQVU2TixXQUFXQSxDQUFBO1lBQzFCLE1BQU07Y0FBRXhNLEtBQUs7Y0FBRWhCLEtBQUs7Y0FBRW1GO1lBQWUsQ0FBRSxHQUFHLElBQUFULFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDNUQsTUFBTWdOLFlBQVksR0FBR3BTLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ1csUUFBUSxFQUFFQyxRQUFRLEVBQUVTLFNBQVM7WUFDN0QsTUFBTTJQLGtCQUFrQixHQUFHclMsS0FBSyxDQUFDcUIsSUFBSSxDQUFDa00sT0FBTyxFQUFFdkwsUUFBUSxFQUFFOFAsSUFBSTtZQUM3RCxNQUFNUSxLQUFLLEdBQUcsRUFBa0I7WUFDaEMsTUFBTSxDQUFDN1AsTUFBTSxFQUFFK0QsU0FBUyxDQUFDLEdBQUcvQixNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBd0I2TCxLQUFLLENBQUM7WUFDeEUsTUFBTUMsVUFBVSxHQUFJcEwsU0FBZ0MsSUFBS1gsU0FBUyxDQUFDO2NBQUUsR0FBRy9ELE1BQU07Y0FBRSxHQUFHMEU7WUFBUyxDQUFFLENBQUM7WUFFL0YsSUFBSWlMLFlBQVksRUFBRTtjQUNqQkUsS0FBSyxDQUFDdlEsU0FBUyxHQUFHc1Esa0JBQWtCLEdBQUcsU0FBUyxHQUFHLGFBQWE7O1lBR2pFLE1BQU1qRixRQUFRLEdBQUc7Y0FDaEJhLElBQUksRUFBRUwsS0FBQSxDQUFBK0QsV0FBVztjQUNqQmxFLFdBQVcsRUFBRVYsWUFBQSxDQUFBeUYsa0JBQWtCO2NBQy9CQyxNQUFNLEVBQUVQLE9BQUEsQ0FBQVosYUFBYSxDQUFDO2FBQ3RCO1lBRUQsSUFBSTdPLE1BQU0sQ0FBQ1YsU0FBUyxFQUFFLE9BQU8wQyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ3NNLGlCQUFBLENBQUE1SCxnQkFBZ0IsT0FBRztZQUVqRCxNQUFNbUksY0FBYyxHQUFHalEsTUFBTSxDQUFDaVEsY0FBYztZQUM1QyxNQUFNQyxVQUFVLEdBQUdELGNBQWMsS0FBS3ZRLFNBQVMsR0FBRyxhQUFhLEdBQUd1USxjQUFjLEdBQUcsUUFBUSxHQUFHLE1BQU07WUFDcEcsTUFBTS9FLE9BQU8sR0FBR1AsUUFBUSxDQUFDdUYsVUFBVSxDQUFDO1lBQ3BDLE1BQU1oRSxNQUFNLEdBQUdBLENBQUEsS0FBSztjQUNuQixJQUFJbE0sTUFBTSxDQUFDaVEsY0FBYyxLQUFLdlEsU0FBUyxFQUFFO2dCQUN4Q2dELGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25COztjQUVEcUIsU0FBUyxDQUFDO2dCQUFFLEdBQUcvRCxNQUFNO2dCQUFFaVEsY0FBYyxFQUFFdlE7Y0FBUyxDQUFFLENBQUM7WUFDcEQsQ0FBQztZQUNELE9BQ0NzQyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBOEssUUFBQSxRQUNDbkssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFpTyxlQUFlO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQzNCcE8sTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUM4SCxPQUFPO2NBQUNnQixNQUFNLEVBQUVBLE1BQU07Y0FBRW5ILEdBQUcsRUFBRW1MLFVBQVU7Y0FBRXJQLElBQUksRUFBRWIsTUFBTTtjQUFFNE8sT0FBTyxFQUFFa0I7WUFBVSxFQUFJLENBQzlELENBQ2hCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0NBLElBQUE5TixNQUFBLEdBQUE5RSxPQUFBO1VBRUEsSUFBQXVLLEdBQUEsR0FBQXZLLE9BQUE7VUFFQSxJQUFBZ0YsYUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFrRixXQUFBLEdBQUFsRixPQUFBO1VBQ0EsSUFBQXlLLE1BQUEsR0FBQXpLLE9BQUE7VUFDQSxJQUFBK0UsUUFBQSxHQUFBL0UsT0FBQTtVQUNBLElBQUFtVCxNQUFBLEdBQUFuVCxPQUFBO1VBQ0EsSUFBQTBLLFdBQUEsR0FBQTFLLE9BQUE7VUFFQSxJQUFBbU8sT0FBQSxHQUFBbk8sT0FBQTtVQVpBOztVQUVBOztVQVlNLFNBQVU2UyxrQkFBa0JBLENBQUM7WUFBRWxQLElBQUk7WUFBRStOLE9BQU87WUFBRTFDO1VBQU0sQ0FBRTtZQUMzRCxNQUFNLENBQUNvRSxhQUFhLEVBQUVDLGdCQUFnQixDQUFDLEdBQUd2TyxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDNUQsTUFBTTtjQUNMekYsS0FBSztjQUNMaEIsS0FBSyxFQUFFO2dCQUFFcUI7Y0FBSTtZQUFFLENBQ2YsR0FBRyxJQUFBcUQsUUFBQSxDQUFBVSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNbUIsUUFBUSxHQUFHUSxLQUFLLElBQUc7Y0FDeEIsTUFBTTtnQkFBRTNGO2NBQUssQ0FBRSxHQUFHMkYsS0FBSyxDQUFDRSxhQUFhO2NBQ3JDK0wsZ0JBQWdCLENBQUM1UixLQUFLLENBQUM7WUFDeEIsQ0FBQztZQUNELE1BQU07Y0FBRTZSLEtBQUs7Y0FBRTNOLEtBQUs7Y0FBRTROLE9BQU87Y0FBRTNOO1lBQVcsQ0FBRSxHQUFRdkUsS0FBSyxDQUFDdU0sT0FBTyxDQUFDRSxXQUFXLENBQUMwRixLQUFLO1lBQ25GLE1BQU0xRSxRQUFRLEdBQUcxSCxLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQ2lCLGNBQWMsRUFBRTtjQUN0QnFKLE9BQU8sQ0FBQztnQkFBRXFCLGNBQWMsRUFBRUssYUFBYSxLQUFLO2NBQUssQ0FBRSxDQUFDO1lBQ3JELENBQUM7WUFFRCxNQUFNekcsUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXlHLGFBQWEsS0FBSzVRO1lBQVMsQ0FBRTtZQUUxRCxPQUNDc0MsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGNBQ0NwQixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2xCLGFBQUEsQ0FBQW1CLE1BQU0sQ0FBQzJELEdBQUc7Y0FBQSxHQUFLWSxXQUFBLENBQUF4RyxVQUFVLENBQUNDO1lBQU8sR0FDakNXLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaUksT0FBQSxDQUFBZSxZQUFZO2NBQUNySCxHQUFHLEVBQUMsUUFBUTtjQUFDN0IsT0FBTyxFQUFFZ0o7WUFBTSxFQUFJLEVBQzlDbEssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFvQixhQUFhO2NBQUN0RixTQUFTLEVBQUM7WUFBNEIsR0FDcER2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQXFCLEdBQ25DdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFnQixHQUM5QnZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDdUUsTUFBQSxDQUFBb0MsS0FBSztjQUFDeEcsU0FBUyxFQUFDLHdCQUF3QjtjQUFDeUcsR0FBRyxFQUFFcEwsSUFBSSxDQUFDb087WUFBUSxFQUFJLEVBRWhFaEwsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQVFHLFNBQVMsRUFBQztZQUFtQyxHQUNwRHZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBMkcsV0FBVztjQUFDRSxNQUFNLEVBQUU7Z0JBQUUwSCxRQUFRLEVBQUUvUixJQUFJLENBQUNxTztjQUFXO1lBQUUsR0FBR3VELEtBQUssQ0FBZSxFQUMxRXhPLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxhQUFLUCxLQUFLLENBQU0sQ0FDUixFQUVUYixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQTBCLEdBQ3hDdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNpTixNQUFBLENBQUE5SixXQUFXO2NBQ1hVLE9BQU8sRUFBRXFKLGFBQWEsS0FBSyxLQUFLO2NBQ2hDeE0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaUMsS0FBSyxFQUFFMEssT0FBTyxDQUFDRyxHQUFHLENBQUM3SyxLQUFLO2NBQ3hCcEgsS0FBSyxFQUFDLEtBQUs7Y0FDWDRKLElBQUksRUFBQztZQUFnQixFQUNwQixFQUNGdkcsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNpTixNQUFBLENBQUE5SixXQUFXO2NBQ1hVLE9BQU8sRUFBRXFKLGFBQWEsS0FBSyxJQUFJO2NBQy9CeE0sUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaUMsS0FBSyxFQUFFMEssT0FBTyxDQUFDSSxFQUFFLENBQUM5SyxLQUFLO2NBQ3ZCcEgsS0FBSyxFQUFDLElBQUk7Y0FDVjRKLElBQUksRUFBQztZQUFnQixFQUNwQixDQUNHLENBQ0QsRUFDTnZHLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBSyxHQUNsQitNLGFBQWEsSUFDYnRPLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDMkQsR0FBRztjQUFBLEdBQUtZLFdBQUEsQ0FBQXhHLFVBQVUsQ0FBQ1MsSUFBSTtjQUFFMEIsU0FBUyxFQUFDO1lBQWtCLEdBQzVEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNoQixXQUFBLENBQUEyRyxXQUFXLFFBQUUwSCxPQUFPLENBQUNILGFBQWEsQ0FBQyxDQUFDeE4sV0FBVyxDQUFlLENBRWhFLEVBRURkLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDaEIsV0FBQSxDQUFBcUIsTUFBTTtjQUFDUixPQUFPLEVBQUMsU0FBUztjQUFDNk4sS0FBSztjQUFBLEdBQUtqSCxRQUFRO2NBQUUzRyxPQUFPLEVBQUU4STtZQUFRLEdBQzdEek4sS0FBSyxDQUFDbUYsT0FBTyxDQUFDcU4sUUFBUSxDQUNmLENBQ0osQ0FDRCxDQUNTLENBQ0osQ0FDUjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9FQSxJQUFBL08sTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUE4VCxNQUFBLEdBQUE5VCxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBZ0YsYUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUErVCxjQUFBLEdBQUEvVCxPQUFBO1VBQ0EsSUFBQWdVLEtBQUEsR0FBQWhVLE9BQUE7VUFDQSxJQUFBd1MsaUJBQUEsR0FBQXhTLE9BQUE7VUFFQSxJQUFBdUssR0FBQSxHQUFBdkssT0FBQTtVQVRBOztVQVlNLFNBQVVTLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQzdCLE1BQU07Y0FBRWdCO1lBQUssQ0FBRSxHQUFHaEIsS0FBSztZQUN2QixNQUFNLENBQUN5QixLQUFLLEVBQUVtUyxRQUFRLENBQUMsR0FBR25QLE1BQUEsQ0FBQVgsT0FBSyxDQUFDMkMsUUFBUSxDQUFDekcsS0FBSyxDQUFDeUIsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzBMLFlBQVksRUFBRWhJLGVBQWUsQ0FBQyxHQUFHVixNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsRUFBVTtZQUNoRSxNQUFNb04sUUFBUSxHQUFHLElBQUFsUCxhQUFBLENBQUFtUCxZQUFZLEdBQUU7WUFDL0IsTUFBTSxDQUFDbkQsTUFBTSxFQUFFb0QsU0FBUyxDQUFDLEdBQUd0UCxNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBc0IsSUFBSSxDQUFDO1lBQ3JFLE1BQU0sQ0FBQzFFLFNBQVMsRUFBRWdNLFlBQVksQ0FBQyxHQUFHdEosTUFBQSxDQUFBWCxPQUFLLENBQUMyQyxRQUFRLENBQWdCekcsS0FBSyxDQUFDK0IsU0FBUyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFZ00sV0FBVyxDQUFDLEdBQUd2SixNQUFBLENBQUFYLE9BQUssQ0FBQzJDLFFBQVEsQ0FBQ3pHLEtBQUssQ0FBQ3FCLElBQUksQ0FBQ1csUUFBUSxDQUFDO1lBRW5FLE1BQU1rRCxZQUFZLEdBQUl5TCxNQUFrQixJQUFJO2NBQzNDb0QsU0FBUyxDQUFDcEQsTUFBTSxDQUFDO2NBQ2pCa0QsUUFBUSxDQUFDeEgsS0FBSyxDQUFDO2dCQUFFN0gsQ0FBQyxFQUFFLE9BQU87Z0JBQUVQLE9BQU8sRUFBRTtjQUFDLENBQUUsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsSUFBQXdQLE1BQUEsQ0FBQU8sU0FBUyxFQUFDLENBQUNoVSxLQUFLLENBQUMsRUFBRSxNQUFNNFQsUUFBUSxDQUFDNVQsS0FBSyxDQUFDeUIsS0FBSyxDQUFDLENBQUM7WUFFL0MsTUFBTXdTLG1CQUFtQixHQUFHQSxDQUFBLEtBQUs7Y0FDaEMsSUFBSXRELE1BQU0sRUFBRTtnQkFDWEEsTUFBTSxFQUFFO2dCQUNSb0QsU0FBUyxDQUFDLElBQUksQ0FBQzs7WUFFakIsQ0FBQztZQUVELElBQUksQ0FBQ3RTLEtBQUssRUFBRSxPQUFPZ0QsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNxRSxHQUFBLENBQUFnSyxVQUFVO2NBQUN2SixRQUFRLEVBQUU7WUFBSSxFQUFJO1lBQ2pELE1BQU12SixLQUFLLEdBQUc7Y0FDYkosS0FBSztjQUNMbUUsZUFBZTtjQUNmcEQsU0FBUztjQUNUZ00sWUFBWTtjQUNaa0csbUJBQW1CO2NBQ25COUcsWUFBWTtjQUNabk4sS0FBSztjQUNMZ0MsUUFBUTtjQUNSZ00sV0FBVztjQUNYOUksWUFBWTtjQUNaMk87YUFDQTtZQUVELE1BQU16RyxRQUFRLEdBQUc7Y0FDaEIrRyxJQUFJLEVBQUVSLEtBQUEsQ0FBQXpHLGFBQWE7Y0FDbkI0RSxJQUFJLEVBQUU0QixjQUFBLENBQUFVLGFBQWE7Y0FDbkJyUyxTQUFTLEVBQUVvUSxpQkFBQSxDQUFBNUg7YUFDWDtZQUNELElBQUlvRCxPQUFPLEdBQUc1TCxTQUFTLEdBQUdxTCxRQUFRLENBQUNyTCxTQUFTLEdBQUdvTCxZQUFZLEdBQUdDLFFBQVEsQ0FBQytHLElBQUksR0FBRy9HLFFBQVEsQ0FBQzBFLElBQUk7WUFFM0YsTUFBTXRLLEdBQUcsR0FBR3pGLFNBQVMsR0FBRyxXQUFXLEdBQUdvTCxZQUFZLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFFcEUsT0FDQzFJLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbkIsUUFBQSxDQUFBa0ksYUFBYSxDQUFDNkUsUUFBUTtjQUFDclEsS0FBSyxFQUFFQTtZQUFLLEdBQ25DcUQsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUNsQixhQUFBLENBQUFpTyxlQUFlO2NBQUNDLElBQUksRUFBQztZQUFNLEdBQUVwTyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQzhILE9BQU87Y0FBQ25HLEdBQUcsRUFBRUE7WUFBRyxFQUFJLENBQW1CLENBQzlDO1VBRTNCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlEQSxJQUFBL0MsTUFBQSxHQUFBOUUsT0FBQTtVQUNBLElBQUFpQixRQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQXdLLFFBQUEsR0FBQXhLLE9BQUE7VUFDQSxJQUFBaUYsTUFBQSxHQUFBakYsT0FBQTtVQUNBLElBQUEwVSxPQUFBLEdBQUExVSxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFRTztVQUFVLFNBQVVrUCxZQUFZQSxDQUFDO1lBQUVsSjtVQUFPLENBQUU7WUFDbEQsTUFBTXlGLEdBQUcsR0FBRyxlQUFlO1lBRTNCLE1BQU07Y0FDTHBLLEtBQUs7Y0FDTGhCLEtBQUssRUFBRTtnQkFBRTBCO2NBQVc7WUFBRSxDQUN0QixHQUFHLElBQUFnRCxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQ3RCO1lBQ0EsTUFBTWtQLE1BQU0sR0FBRyxNQUFNdk4sS0FBSyxJQUFHO2NBQzVCQSxLQUFLLENBQUN3TixlQUFlLEVBQUU7Y0FDdkIsTUFBTTNULFFBQUEsQ0FBQVUsY0FBYyxDQUFDZ1QsTUFBTSxFQUFFO2NBQzdCbkssUUFBQSxDQUFBZSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQztZQUVELE1BQU1xSixLQUFLLEdBQXNCLEVBQUU7WUFDbkMsSUFBSTdPLE9BQU8sRUFBRTZPLEtBQUssQ0FBQzdPLE9BQU8sR0FBR0EsT0FBTztZQUNwQyxPQUNDbEIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQVFHLFNBQVMsRUFBRW9GO1lBQUcsR0FDckIzRyxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBU0csU0FBUyxFQUFDO1lBQWMsR0FDaEN2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDLE1BQU07Y0FBQ0wsT0FBTyxFQUFFQTtZQUFPLEdBQ3JDbEIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN3TyxPQUFBLENBQUFJLElBQUk7Y0FBQ2pQLElBQUksRUFBQztZQUFXLEVBQUcsRSxLQUFFOUQsV0FBVyxDQUFDeUUsT0FBTyxDQUFDdU8sSUFBSSxDQUM5QyxDQU9HLEVBQ1ZqUSxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQWUsR0FDN0J2QixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ2pCLE1BQUEsQ0FBQStQLGFBQWE7Y0FBQ25QLElBQUksRUFBQyxNQUFNO2NBQUNRLFNBQVMsRUFBQyxRQUFRO2NBQUNMLE9BQU8sRUFBRTJPO1lBQU0sRUFBSSxDQUM1RCxDQUNFO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUE3UCxNQUFBLEdBQUE5RSxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBaVYsS0FBQSxHQUFBalYsT0FBQTtVQUNBLElBQUF1SyxHQUFBLEdBQUF2SyxPQUFBO1VBQ0EsSUFBQWdGLGFBQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBeUssTUFBQSxHQUFBekssT0FBQTtVQUNBLElBQUFrVixPQUFBLEdBQUFsVixPQUFBO1VBUEE7O1VBU00sU0FBVXlVLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFcFQsS0FBSztjQUFFaEI7WUFBSyxDQUFFLEdBQUcsSUFBQTBFLFFBQUEsQ0FBQVUsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUUsS0FBSyxHQUFHdEUsS0FBSyxDQUFDc0UsS0FBSztZQUV6QixNQUFNd1AsS0FBSyxHQUFHLENBQUNyUSxNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQytPLEtBQUEsQ0FBQTlQLElBQUk7Y0FBQ0UsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsS0FBSyxFQUFFLENBQUM7Y0FBRXVDLEdBQUcsRUFBQztZQUFTLEVBQUcsQ0FBQztZQUMvRCxJQUFJLENBQUN4SCxLQUFLLENBQUN1QixPQUFPLEVBQUU7Y0FDbkJ1VCxLQUFLLENBQUNDLElBQUksQ0FBQ3RRLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDK08sS0FBQSxDQUFBOVAsSUFBSTtnQkFBQ0UsSUFBSSxFQUFDLFNBQVM7Z0JBQUN3QyxHQUFHLEVBQUMsU0FBUztnQkFBQ3ZDLEtBQUssRUFBRTtjQUFDLEVBQUksQ0FBQztjQUMzRDZQLEtBQUssQ0FBQ0MsSUFBSSxDQUFDdFEsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUMrTyxLQUFBLENBQUE5UCxJQUFJO2dCQUFDRSxJQUFJLEVBQUMsYUFBYTtnQkFBQ3dDLEdBQUcsRUFBQyxhQUFhO2dCQUFDdkMsS0FBSyxFQUFFO2NBQUMsRUFBSSxDQUFDOztZQUdwRSxPQUNDUixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBOEssUUFBQSxRQUNDbkssTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQUtHLFNBQVMsRUFBQztZQUFtQyxHQUNqRHZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxhQUFPLEVBQ1BwQixNQUFBLENBQUFYLE9BQUEsQ0FBQStCLGFBQUEsQ0FBQ3FFLEdBQUEsQ0FBQW9CLGFBQWE7Y0FBQ3RGLFNBQVMsRUFBQztZQUFxQixHQUM3Q3ZCLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDa1AsTUFBTTtjQUFDaFAsU0FBUyxFQUFDO1lBQXdCLEdBQ2hEdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLENBQUN1RSxNQUFBLENBQUFvQyxLQUFLO2NBQUNDLEdBQUcsRUFBQztZQUFxQixFQUFHLEVBQ25DaEksTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBO2NBQU1HLFNBQVMsRUFBQztZQUFhLEdBQzVCdkIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGFBQUtQLEtBQUssQ0FBTSxFQUNoQmIsTUFBQSxDQUFBWCxPQUFBLENBQUErQixhQUFBLGVBQU83RSxLQUFLLENBQUM0SyxRQUFRLENBQVEsQ0FDdkIsQ0FDUSxFQUNoQm5ILE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDZ1AsT0FBQSxDQUFBSSxZQUFZO2NBQUNDLGFBQWEsRUFBRSxNQUFNO2NBQUVDLFlBQVksRUFBRTtZQUFFLEdBQ25ETCxLQUFLLENBQ1EsRUFFZnJRLE1BQUEsQ0FBQVgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDbEIsYUFBQSxDQUFBbUIsTUFBTSxDQUFDMkQsR0FBRztjQUNWekQsU0FBUyxFQUFDLGdCQUFnQjtjQUMxQmpDLE9BQU8sRUFBRTtnQkFDUkUsT0FBTyxFQUFFO2VBQ1Q7Y0FDREksSUFBSSxFQUFFO2dCQUNMK1EsS0FBSyxFQUFFLE9BQU87Z0JBQ2RDLE1BQU0sRUFBRSxPQUFPO2dCQUNmcFIsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZxUixZQUFZLEVBQUUsQ0FBQztnQkFDZkMsTUFBTSxFQUFFLElBQUk7Z0JBQ1pwUixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7O1lBRVgsRUFDQSxDQUVhLENBQ1gsQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEQSxJQUFBMkUsS0FBQSxHQUFBcEosT0FBQTtVQUNBLElBQUF5SyxNQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQStFLFFBQUEsR0FBQS9FLE9BQUE7VUFDQSxJQUFBa0YsV0FBQSxHQUFBbEYsT0FBQTtVQUVPO1VBQVUsU0FBVTRMLFFBQVFBLENBQ2xDO1lBQUVpSyxXQUFXO1lBQUV4UDtVQUFTLElBQW9EO1lBQUV3UCxXQUFXLEVBQUU7VUFBSSxDQUFFO1lBRWpHLE1BQU07Y0FBRXhWLEtBQUs7Y0FBRWdCO1lBQUssQ0FBRSxHQUFHLElBQUEwRCxRQUFBLENBQUFVLGdCQUFnQixHQUFFO1lBQzNDLE1BQU07Y0FBRS9EO1lBQUksQ0FBRSxHQUFHckIsS0FBSztZQUN0QixNQUFNO2NBQUUyTTtZQUFPLENBQUUsR0FBRzNMLEtBQUs7WUFFekIsTUFBTW9LLEdBQUcsR0FBRyxlQUFlcEYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM3RCxPQUNDK0MsS0FBQSxDQUFBbEQsYUFBQTtjQUFLRyxTQUFTLEVBQUVvRjtZQUFHLEdBQ2xCckMsS0FBQSxDQUFBbEQsYUFBQSxDQUFDdUUsTUFBQSxDQUFBb0MsS0FBSztjQUFDeEcsU0FBUyxFQUFDLGdCQUFnQjtjQUFDeUcsR0FBRyxFQUFFcEwsSUFBSSxDQUFDb087WUFBUSxFQUFJLEVBQ3hEMUcsS0FBQSxDQUFBbEQsYUFBQTtjQUFTRyxTQUFTLEVBQUM7WUFBbUIsR0FDckMrQyxLQUFBLENBQUFsRCxhQUFBLGFBQ0NrRCxLQUFBLENBQUFsRCxhQUFBLENBQUNoQixXQUFBLENBQUEyRyxXQUFXO2NBQ1hFLE1BQU0sRUFBRTtnQkFDUDBILFFBQVEsRUFBRS9SLElBQUksQ0FBQ3FPOztZQUNmLEdBRUEvQyxPQUFPLENBQUNzRyxLQUFLLENBQ0QsQ0FDVixFQUVKdUMsV0FBVyxJQUFJek0sS0FBQSxDQUFBbEQsYUFBQTtjQUFNRyxTQUFTLEVBQUM7WUFBaUIsR0FBRTJHLE9BQU8sQ0FBQ3BILFdBQVcsQ0FBUSxDQUNyRSxDQUNMO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=