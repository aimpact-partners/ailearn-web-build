System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-app@0.5.7/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.5.7/components/ui", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.5.7/components/icons", "pragmate-ui@1.0.6/components", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/image", "pragmate-ui@1.0.6/form", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/icons", "@beyond-js/kernel@0.1.12/core", "@aimpact/ailearn-app@0.5.7/model/wrapper", "pragmate-ui@1.0.6/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, NavbarHeader, Languages, UserData, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    VerificationCodeInput: void 0,
    InstitutionFlow: void 0,
    TeacherForm: void 0,
    NavbarHeader: void 0,
    Languages: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnApp057StoresBase) {
      dependency_4 = _aimpactAilearnApp057StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_8 = _aimpactAilearnApp057ComponentsUi;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_pragmateUi106Components) {
      dependency_12 = _pragmateUi106Components;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi106Image) {
      dependency_14 = _pragmateUi106Image;
    }, function (_pragmateUi106Form) {
      dependency_15 = _pragmateUi106Form;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_16 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Icons) {
      dependency_17 = _pragmateUi106Icons;
    }, function (_beyondJsKernel0112Core) {
      dependency_18 = _beyondJsKernel0112Core;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_19 = _aimpactAilearnApp057ModelWrapper;
    }, function (_pragmateUi106Swiper) {
      dependency_20 = _pragmateUi106Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/ailearn-app/shared/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['@aimpact/ailearn-app/model/wrapper', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/identify.widget');
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
        hash: 2954821453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            get user() {
              return _session.sessionWrapper.user;
            }
            get isMinor() {
              return this.user.age < 18;
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
              super(_beyond_context.module.specifier);
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
              this.organization.set({
                code
              });
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
            async refreshOrg() {
              await this.#organization.load({
                code: this.#organization.code
              });
              return this.#organization;
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
        hash: 3821102415,
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
        hash: 215938816,
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
            const showRefresh = ['teacherInstitution', 'student'].includes(requested);
            let description = texts.description;
            if (requested === 'teacherApproved') {
              description = description.replace('{organization}', store.organization.name);
            }
            const onRefresh = async () => {
              try {
                const methods = {
                  student: store.refreshClassroom.bind(store),
                  teacherInstitution: store.refreshOrg.bind(store)
                };
                setFetching(true);
                const entity = await methods[requested]();
                await _session.sessionWrapper.user.load();
                if (requested === 'teacherInstitution') {
                  _routing.routing.pushState(`/organizations/view/${entity.code}`);
                } else {
                  _routing.routing.pushState(`/classrooms/view/${entity.code}`);
                }
              } catch (e) {
                if (e.code === 105) {
                  const error = requested === 'teacherInstitution' ? errors['ALREADY_WAITING_ORG'] : errors['ALREADY_WAITING_CLASSROOM'];
                  setError(error);
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
            }, textsActions.start)), showRefresh && _react.default.createElement("div", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              disabled: fetching,
              onClick: onRefresh,
              variant: "primary",
              className: "btn-middle"
            }, globalTexts.actions.refresh)))), _react.default.createElement("div", {
              className: "right-column grid-center-container"
            }, _react.default.createElement(_image.Image, {
              src: "/assets/images/welcome/01.webp",
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
        hash: 1426048525,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "general-container general-container--light"
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
        hash: 3504920292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentFlow = StudentFlow;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _codeInput = require("../../components/code-input");
          var _context = require("../../context");
          var _navbar = require("../../navbar");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.NavbarHeader, {
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
        hash: 2440159112,
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
                console.error(e);
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
        hash: 627501220,
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
        hash: 3506914481,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_framerMotion.motion.div, {
              className: "full-width",
              ..._animations.animations.default
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--center form__container form__container--two-columns no-pd"
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
            })))));
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
        hash: 2554491757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFlow = TeacherFlow;
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _confirmedRequest = require("../../confirmed-request");
          var _context = require("../../context");
          var _access = require("./access");
          var _form = require("./form");
          var _institution = require("./institution");
          function TeacherFlow() {
            const {
              texts,
              store,
              setRoleSelected
            } = (0, _context.useModuleContext)();
            const hasFreeTrial = store.user?.metadata?.requests?.freeTrial;
            const freeTrialAsTeacher = store.user?.teacher?.metadata?.role;
            const state = {};
            const [values, setValues] = _react.default.useState(state);
            const editValues = newValues => setValues({
              ...values,
              ...newValues
            });
            if (hasFreeTrial) {
              state.requested = freeTrialAsTeacher ? 'teacher' : 'institution';
            }
            if (values.requested) return _react.default.createElement(_confirmedRequest.ConfirmedRequest, null);
            const hasInstitution = values.hasInstitution;
            const controlKey = hasInstitution === undefined ? 'institution' : hasInstitution ? 'access' : 'form';
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
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: controlKey,
              options: {
                form: _react.default.createElement(_form.TeacherForm, {
                  onBack: onBack,
                  data: values,
                  setData: editValues
                }),
                institution: _react.default.createElement(_institution.TeacherInstitution, {
                  onBack: onBack,
                  data: values,
                  setData: editValues
                }),
                access: _react.default.createElement(_access.TeacherAccess, {
                  onBack: onBack,
                  setData: editValues
                })
              },
              placeholder: _react.default.createElement(_institution.TeacherInstitution, {
                onBack: onBack,
                data: values,
                setData: editValues
              })
            })));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/flows/teacher/institution
      *************************************************/

      ims.set('./views/flows/teacher/institution', {
        hash: 2715639875,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.NavbarHeader, {
              key: "navbar",
              onClick: onBack
            }), _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default
            }, _react.default.createElement(_ui.PageContainer, {
              className: "form__container container"
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
        hash: 213287183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _confirmedRequest = require("./confirmed-request");
          var _context = require("./context");
          var _flow = require("./flow");
          var _roleSelection = require("./role-selection");
          // App.tsx

          function View({
            store
          }) {
            const {
              texts
            } = store;
            const [roleSelected, setRoleSelected] = _react.default.useState();
            const controls = (0, _framerMotion.useAnimation)();
            const [action, setAction] = _react.default.useState(null);
            const [requested, setRequested] = _react.default.useState(store.requested);
            const {
              ready
            } = store;
            // Subscribe to store and languages changes
            (0, _hooks.useStore)(store);
            // useStore(languages);
            const onCardAction = action => {
              setAction(action);
              controls.start({
                x: '-100%',
                opacity: 0
              });
            };
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
              controls,
              metadata: null,
              setMetadata: () => {}
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
            }, _react.default.createElement(_ui.PageContainer, {
              className: "full-width vertical-center no-pd"
            }, _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(Control, {
              key: key
            }))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/navbar/index
      ************************************/

      ims.set('./views/navbar/index', {
        hash: 1026663132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons2 = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          var _languages = require("./languages");
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
            }, _react.default.createElement("div", {
              className: "container flex-container space-between no-pd"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, onClick && _react.default.createElement("div", {
              className: "link",
              onClick: onClick
            }, _react.default.createElement(_icons2.Icon, {
              icon: "backArrow"
            }), " ", globalTexts.actions.back)), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_languages.Languages, null), _react.default.createElement(_icons.AppIconButton, {
              icon: "exit",
              className: "circle",
              onClick: logout
            }))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/navbar/languages
      ****************************************/

      ims.set('./views/navbar/languages', {
        hash: 4144516293,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _core = require("@beyond-js/kernel/core");
          var _react = require("react");
          /*bundle*/
          function Languages({}) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            // Get supported languages from the languages object
            const supportedLanguages = [..._core.languages.supported.keys()];
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, supportedLanguages.map(language => _react.default.createElement("li", {
              key: language
            }, _react.default.createElement(_icons.AppIcon, {
              onClick: changeLanguage,
              "data-language": language,
              name: `languages-${language}`,
              title: `${language} language`,
              className: "language-icon icon-circle"
            }))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/role-selection
      **************************************/

      ims.set('./views/role-selection', {
        hash: 24811590,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _swiper = require("pragmate-ui/swiper");
          var _navbar = require("./navbar");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbar.NavbarHeader, null), _react.default.createElement("div", {
              className: "general-container  vertical-center no-pd"
            }, _react.default.createElement(_ui.PageContainer, {
              className: "vertical--container no-pd"
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: "role-selection__header"
            }, _react.default.createElement(_image.Image, {
              src: _wrapper.settings.APP_LOGO
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
        "im": "./views/navbar/index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./views/navbar/languages",
        "from": "Languages",
        "name": "Languages"
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
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./views/navbar/index').NavbarHeader : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./views/navbar/languages').Languages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2NsYXNzcm9vbXMiLCJfb3JnYW5pemF0aW9ucyIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiQmFzZVN0b3JlTWFuYWdlciIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJyZWdpc3RlclRlYWNoZXIiLCJ2YWx1ZXMiLCJmcmVlVHJpYWwiLCJyZWdpc3Rlckluc3RpdHV0aW9uIiwicHVibGlzaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImpvaW4iLCJjb2RlIiwic2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiam9pbkNsYXNzcm9vbSIsInByb3ZpZGVyIiwicmVmcmVzaENsYXNzcm9vbSIsIndhcm4iLCJyZWZyZXNoT3JnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInRleHRzIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJnbG9iYWxUZXh0cyIsInRleHRzQWN0aW9ucyIsImVycm9ycyIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNob3dOYXZpZ2F0aW9uIiwiaW5jbHVkZXMiLCJzaG93UmVmcmVzaCIsInJlcGxhY2UiLCJuYW1lIiwib25SZWZyZXNoIiwibWV0aG9kcyIsInN0dWRlbnQiLCJiaW5kIiwidGVhY2hlckluc3RpdHV0aW9uIiwiZW50aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNscyIsImxpbmsiLCJQYWdlQ29udGFpbmVyIiwiVXNlckRhdGEiLCJIdG1sV3JhcHBlciIsImFzIiwicGFyYW1zIiwiRXJyb3JSZW5kZXJlciIsInN1YnRpdGxlIiwiZ2V0UHJvcGVydGllcyIsInRvdGFsR2VuZXJhdGl2ZSIsImNvaW5zIiwibW9kdWxlcyIsInRvdGFsSW50ZXJhY3Rpb24iLCJhc3NpZ25tZW50cyIsIkxpbmsiLCJocmVmIiwic3RhcnQiLCJkaXNhYmxlZCIsInJlZnJlc2giLCJJbWFnZSIsInNyYyIsImFsdCIsIndlbGNvbWUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwiU2VsZWN0aW9uRmxvdyIsInJvbGVTZWxlY3RlZCIsIkNvbnRyb2xzIiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwic2V0UmVxdWVzdGVkIiwic2V0TWV0YWRhdGEiLCJmb3JtIiwiZmllbGRzIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0Iiwic3RhdHVzIiwiZXJyIiwib25CYWNrIiwiTmF2YmFySGVhZGVyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJOYXZiYXIiLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsIlRlYWNoZXJBY2Nlc3MiLCJzZXREYXRhIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiX2FjY2VzcyIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJUZWFjaGVySW5zdGl0dXRpb24iLCJhY2Nlc3MiLCJwbGFjZWhvbGRlciIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiaGVsbG8iLCJpbnRybyIsInVzZXJuYW1lIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX2Zsb3ciLCJfcm9sZVNlbGVjdGlvbiIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlU3RvcmUiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiX2ljb25zMiIsIl9sYW5ndWFnZXMiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRycyIsIkljb24iLCJiYWNrIiwiTGFuZ3VhZ2VzIiwiQXBwSWNvbkJ1dHRvbiIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwiX2NhcmQiLCJfd3JhcHBlciIsIl9zd2lwZXIiLCJpdGVtcyIsInB1c2giLCJoZWFkZXIiLCJzZXR0aW5ncyIsIkFQUF9MT0dPIiwiU3dpcGVyU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4Iiwic2hvd1dlbGNvbWUiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90eXBlcy50cy8iLCIvL3RzL3ZpZXdzL2FuaW1hdGlvbnMudHN4IiwiLy90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9pbnB1dC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi8vdHMvdmlld3MvY29uZmlybWVkLXJlcXVlc3QudHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzeCIsIi8vdHMvdmlld3MvZmxvdy50c3giLCIvL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiLy90cy92aWV3cy9mbG93cy9zdHVkZW50L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZmxvd3Mvc3R1ZGVudC9sZWZ0LWNvbHVtbi50c3giLCIvL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQvb2xkLnRzeCIsIi8vdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvY29udGV4dC50c3giLCIvL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi8vdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZm9ybS50c3giLCIvL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvbGVmdC1jb2x1bW4udHN4IiwiLy90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiLy90cy92aWV3cy9mbG93cy90ZWFjaGVyL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZmxvd3MvdGVhY2hlci9pbnN0aXR1dGlvbi50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbmF2YmFyL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbmF2YmFyL2xhbmd1YWdlcy50c3giLCIvL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi8vdHMvdmlld3MvdXNlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxFQUFFO1lBQ25CO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBVyxLQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxXQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsY0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixRQUFBLEdBQUFq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