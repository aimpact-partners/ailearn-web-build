System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.3.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.2.1/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.2.1/components/icons", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/form", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/swiper"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_10 = _aimpactAilearnApp021ComponentsUi;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_14 = _pragmateUi100Beta6Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Image) {
      dependency_16 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Form) {
      dependency_17 = _pragmateUi100Beta6Form;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_19 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Swiper) {
      dependency_20 = _pragmateUi100Beta6Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/core', dependency_7], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['react', dependency_11], ['framer-motion', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/form', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/identify.widget');
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
        hash: 2732617422,
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
                if (e.code === 250) {
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

      /*******************************************
      INTERNAL MODULE: ./views/flows/student/index
      *******************************************/

      ims.set('./views/flows/student/index', {
        hash: 4190911242,
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
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_ui.PageContainer, {
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
        hash: 428267825,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX2NvcmUiLCJfY2xhc3Nyb29tcyIsIlJlYWN0aXZlTW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNNaW5vciIsImFnZSIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJyZXNwb25zZSIsInB1Ymxpc2giLCJzdGF0dXMiLCJFcnJvciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiY29kZSIsInNldCIsImRhdGEiLCJqb2luQ2xhc3Nyb29tIiwicHJvdmlkZXIiLCJyZWZyZXNoQ2xhc3Nyb29tIiwid2FybiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiQ2FyZCIsInByb3BzIiwidHlwZSIsImluZGV4Iiwib25DYXJkQWN0aW9uIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJ0ZXh0c0FjdGlvbnMiLCJlcnJvcnMiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzaG93TmF2aWdhdGlvbiIsImluY2x1ZGVzIiwicmVwbGFjZSIsIm5hbWUiLCJvblJlZnJlc2giLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwibGluayIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJFcnJvclJlbmRlcmVyIiwic3VidGl0bGUiLCJnZXRQcm9wZXJ0aWVzIiwidG90YWxHZW5lcmF0aXZlIiwiY29pbnMiLCJtb2R1bGVzIiwidG90YWxJbnRlcmFjdGlvbiIsImFzc2lnbm1lbnRzIiwiTGluayIsImhyZWYiLCJzdGFydCIsImRpc2FibGVkIiwicmVmcmVzaCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl90ZWFjaGVyIiwiX2luc3RpdHV0aW9uIiwiX3N0dWRlbnQiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsInNldFJlcXVlc3RlZCIsInNldE1ldGFkYXRhIiwiZm9ybSIsImZpZWxkcyIsInJlcXVpcmVkRmllbGRzIiwiZm9ybUNvbXBsZXRlZCIsImV2ZXJ5IiwiZmllbGQiLCJkaXNhYmxlZEJ0biIsInByZXZWYWx1ZXMiLCJvblN1Ym1pdCIsImVyciIsIm9uQmFjayIsIkZyYWdtZW50IiwiTmF2YmFyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2NvbnRleHQyIiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldERhdGEiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImhlbGxvIiwib3B0aW9ucyIsImludHJvIiwidXNlcm5hbWUiLCJ5ZXMiLCJubyIsImJsb2NrIiwiY29udGludWUiLCJfaG9va3MiLCJfcm9sZVNlbGVjdGlvbiIsIl9mbG93Iiwic2V0UmVhZHkiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInNldEFjdGlvbiIsInVzZUJpbmRlciIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJQYWdlTG9hZGVyIiwiZmxvdyIsIlJvbGVTZWxlY3Rpb24iLCJJY29uIiwiYmFjayIsIl9jYXJkIiwiX3N3aXBlciIsIml0ZW1zIiwicHVzaCIsImhlYWRlciIsIlN3aXBlclNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsInNob3dXZWxjb21lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy92aWV3cy9jb25maXJtZWQtcmVxdWVzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvdy50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L29sZC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5zdGl0dXRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uYXZiYXIudHN4IiwiL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFB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