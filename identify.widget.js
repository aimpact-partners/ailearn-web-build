System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@beyond-js/kernel@0.1.9/core", "@aimpact/ailearn-app@0.3.1/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context3) {
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactReactive001Model) {
      dependency_4 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_5 = _beyondJsKernel019Texts;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_7 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_8 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_beyondJsKernel019Core) {
      dependency_9 = _beyondJsKernel019Core;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_10 = _aimpactAilearnApp031ComponentsUi;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp031ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/reactive/model', dependency_4], ['@beyond-js/kernel/texts', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-sdk/entities/organizations', dependency_7], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['react', dependency_11], ['framer-motion', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['pragmate-ui/components', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/image', dependency_16], ['pragmate-ui/form', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/icons', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/identify.widget');
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
        hash: 2827954569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _session = require("@aimpact/chat-sdk/session");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
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
            #organization = new _organizations.Organization({});
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
                await this.#organization.publish(values);
                await _session.sessionWrapper.user.load();
                return await this.#organization.freeTrial();
              } catch (e) {
                console.error(e);
                throw new Error('ERROR_PUBLISHING_ORGANIZATION');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl9zZXNzaW9uIiwiX29yZ2FuaXphdGlvbnMiLCJfY2xhc3Nyb29tcyIsIlJlYWN0aXZlTW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNNaW5vciIsImFnZSIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJwdWJsaXNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiam9pbiIsImNvZGUiLCJyZXNwb25zZSIsInNldCIsImRhdGEiLCJqb2luQ2xhc3Nyb29tIiwicHJvdmlkZXIiLCJyZWZyZXNoQ2xhc3Nyb29tIiwid2FybiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiQ2FyZCIsInByb3BzIiwidHlwZSIsImluZGV4Iiwib25DYXJkQWN0aW9uIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJ0ZXh0c0FjdGlvbnMiLCJlcnJvcnMiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzaG93TmF2aWdhdGlvbiIsImluY2x1ZGVzIiwicmVwbGFjZSIsIm5hbWUiLCJvblJlZnJlc2giLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwibGluayIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJFcnJvclJlbmRlcmVyIiwic3VidGl0bGUiLCJnZXRQcm9wZXJ0aWVzIiwidG90YWxHZW5lcmF0aXZlIiwiY29pbnMiLCJtb2R1bGVzIiwidG90YWxJbnRlcmFjdGlvbiIsImFzc2lnbm1lbnRzIiwiTGluayIsImhyZWYiLCJzdGFydCIsImRpc2FibGVkIiwicmVmcmVzaCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnN0aXR1dGlvbiIsIl9zdHVkZW50IiwiX3RlYWNoZXIiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJzdHVkZW50IiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJfZm9ybSIsIl9sZWZ0Q29sdW1uIiwiX25hdmJhciIsInNldFJlcXVlc3RlZCIsInNldE1ldGFkYXRhIiwiZm9ybSIsImZpZWxkcyIsInJlcXVpcmVkRmllbGRzIiwiZm9ybUNvbXBsZXRlZCIsImV2ZXJ5IiwiZmllbGQiLCJkaXNhYmxlZEJ0biIsInByZXZWYWx1ZXMiLCJvblN1Ym1pdCIsInN0YXR1cyIsImVyciIsIm9uQmFjayIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJOYXZiYXIiLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2NvbnRleHQyIiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsInNldERhdGEiLCJUZWFjaGVyQWNjZXNzIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9hY2Nlc3MiLCJfY29uZmlybWVkUmVxdWVzdCIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsIlRlYWNoZXJJbnN0aXR1dGlvbiIsImFjY2VzcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJfcmFkaW8iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImhlbGxvIiwib3B0aW9ucyIsImludHJvIiwidXNlcm5hbWUiLCJ5ZXMiLCJubyIsImJsb2NrIiwiY29udGludWUiLCJfaG9va3MiLCJfcm9sZVNlbGVjdGlvbiIsIl9mbG93Iiwic2V0UmVhZHkiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsInNldEFjdGlvbiIsInVzZUJpbmRlciIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJQYWdlTG9hZGVyIiwiZmxvdyIsIlJvbGVTZWxlY3Rpb24iLCJfaWNvbnMyIiwibG9nb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0cnMiLCJJY29uIiwiYmFjayIsIkFwcEljb25CdXR0b24iLCJfY2FyZCIsIl9zd2lwZXIiLCJpdGVtcyIsInB1c2giLCJoZWFkZXIiLCJTd2lwZXJTbGlkZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ6SW5kZXgiLCJzaG93V2VsY29tZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NhcmQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvY29kZS1pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pbnB1dC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvdmlld3MvY29uZmlybWVkLXJlcXVlc3QudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3cudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9vbGQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9mb3JtLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luc3RpdHV0aW9uLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyLnRzeCIsIi90cy92aWV3cy9yb2xlLXNlbGVjdGlvbi50c3giLCIvdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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