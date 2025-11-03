System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-app@0.7.0/stores/base", "@aimpact/ailearn-sdk@1.2.0/entities/classrooms", "@aimpact/ailearn-sdk@1.2.0/entities/organizations", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.7.0/components/ui", "react@18.3.1", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/form", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.14/core", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/swiper"], function (_export, _context2) {
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnApp070StoresBase) {
      dependency_4 = _aimpactAilearnApp070StoresBase;
    }, function (_aimpactAilearnSdk120EntitiesClassrooms) {
      dependency_5 = _aimpactAilearnSdk120EntitiesClassrooms;
    }, function (_aimpactAilearnSdk120EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk120EntitiesOrganizations;
    }, function (_aimpactChatSdk155Session) {
      dependency_7 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_8 = _aimpactAilearnApp070ComponentsUi;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Routing) {
      dependency_13 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Image) {
      dependency_14 = _pragmateUi108Image;
    }, function (_pragmateUi108Form) {
      dependency_15 = _pragmateUi108Form;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_16 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Icons) {
      dependency_17 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0114Core) {
      dependency_18 = _beyondJsKernel0114Core;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_19 = _aimpactAilearnApp070ModelWrapper;
    }, function (_pragmateUi108Swiper) {
      dependency_20 = _pragmateUi108Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/identify",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['react', dependency_9], ['framer-motion', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/image', dependency_14], ['pragmate-ui/form', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['@aimpact/ailearn-app/model/wrapper', dependency_19], ['pragmate-ui/swiper', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-identify-page",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/identify.widget",
        "is": "page",
        "route": "/next-steps"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/identify.widget');
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
        hash: 3385106760,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9iYXNlIiwiX2NsYXNzcm9vbXMiLCJfb3JnYW5pemF0aW9ucyIsIl9zZXNzaW9uIiwiX2JleW9uZF9jb250ZXh0IiwiQmFzZVN0b3JlTWFuYWdlciIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzTWlub3IiLCJhZ2UiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicmVhZHkiLCJyZWdpc3RlclRlYWNoZXIiLCJ2YWx1ZXMiLCJmcmVlVHJpYWwiLCJyZWdpc3Rlckluc3RpdHV0aW9uIiwicHVibGlzaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImpvaW4iLCJjb2RlIiwic2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiam9pbkNsYXNzcm9vbSIsInByb3ZpZGVyIiwicmVmcmVzaENsYXNzcm9vbSIsIndhcm4iLCJyZWZyZXNoT3JnIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInRleHRzIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlTW9kdWxlQ29udGV4dCIsImNhcmRzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJhdHRyaWJ1dGVzIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWxheSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiQXBwSWNvbiIsIkJ1dHRvbiIsImFjdGlvbnMiLCJhY2NlcHQiLCJWZXJpZmljYXRpb25Db2RlSW5wdXQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiaW5wdXRzUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWVzIiwic2xpY2UiLCJjdXJyZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwicHJldiIsImhhbmRsZVBhc3RlIiwicGFzdGVEYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzcGxpdCIsImZvckVhY2giLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1heExlbmd0aCIsInJlZiIsImVsIiwib25LZXlEb3duIiwib25QYXN0ZSIsIklucHV0Q29tcG9uZW50IiwibGFiZWwiLCJsYWJlbFZhcmlhbnRzIiwiZmxvYXRpbmciLCJzY2FsZSIsInJlc3RpbmciLCJ3aGlsZUZvY3VzIiwidmFyaWFudHMiLCJSZWFjdCIsIlJhZGlvQnV0dG9uIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50IiwiZGl2IiwiY2hlY2tlZCIsImxheW91dCIsIlJhZGlvR3JvdXAiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIl91aSIsIl9yb3V0aW5nIiwiX2ltYWdlIiwiX2FuaW1hdGlvbnMiLCJfdXNlciIsIkNvbmZpcm1lZFJlcXVlc3QiLCJnbG9iYWxUZXh0cyIsInRleHRzQWN0aW9ucyIsImVycm9ycyIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNob3dOYXZpZ2F0aW9uIiwiaW5jbHVkZXMiLCJzaG93UmVmcmVzaCIsInJlcGxhY2UiLCJuYW1lIiwib25SZWZyZXNoIiwibWV0aG9kcyIsInN0dWRlbnQiLCJiaW5kIiwidGVhY2hlckluc3RpdHV0aW9uIiwiZW50aXR5Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNscyIsImxpbmsiLCJQYWdlQ29udGFpbmVyIiwiVXNlckRhdGEiLCJIdG1sV3JhcHBlciIsImFzIiwicGFyYW1zIiwiRXJyb3JSZW5kZXJlciIsInN1YnRpdGxlIiwiZ2V0UHJvcGVydGllcyIsInRvdGFsR2VuZXJhdGl2ZSIsImNvaW5zIiwibW9kdWxlcyIsInRvdGFsSW50ZXJhY3Rpb24iLCJhc3NpZ25tZW50cyIsIkxpbmsiLCJocmVmIiwic3RhcnQiLCJkaXNhYmxlZCIsInJlZnJlc2giLCJJbWFnZSIsInNyYyIsImFsdCIsIndlbGNvbWUiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW5zdGl0dXRpb24iLCJfc3R1ZGVudCIsIl90ZWFjaGVyIiwiU2VsZWN0aW9uRmxvdyIsInJvbGVTZWxlY3RlZCIsIkNvbnRyb2xzIiwiU3R1ZGVudEZsb3ciLCJ0ZWFjaGVyIiwiVGVhY2hlckZsb3ciLCJpbnN0aXR1dGlvbiIsIkluc3RpdHV0aW9uRmxvdyIsIkNvbnRyb2wiLCJGcmFnbWVudCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwic2V0UmVxdWVzdGVkIiwic2V0TWV0YWRhdGEiLCJmb3JtIiwiZmllbGRzIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0Iiwic3RhdHVzIiwiZXJyIiwib25CYWNrIiwiTmF2YmFySGVhZGVyIiwiSW5zdGl0dXRpb25Gb3JtTGVmdENvbHVtbiIsInNlY3Rpb24iLCJGb3JtIiwiSW5wdXQiLCJyZXF1aXJlZCIsImVkdWNhdGlvbmFsTGV2ZWwiLCJnZW9ncmFwaGljQWRkcmVzcyIsIkNoZWNrYm94IiwiYXV0aG9yaXplZFVzZXIiLCJzdWJtaXQiLCJmb3JtVGV4dHMiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiX2NvZGVJbnB1dCIsImVudHJhbmNlVmFyaWFudHMiLCJoaWRkZW4iLCJ2aXNpYmxlIiwic3R5bGVBbGVydCIsInNldFN0eWxlQWxlcnQiLCJUT0tFTl9TSVpFIiwidG9rZW4iLCJzZXRUb2tlbiIsInRvTG93ZXJDYXNlIiwibWVzc2FnZSIsInN0eWxlIiwidG9TdHJpbmciLCJFUlJPUl9QVUJMSVNISU5HIiwib25Ub2tlbkNoYW5nZSIsIlN0dWRlbnRMZWZ0Q29sdW1uIiwiYWN0aW9uIiwibGVnZW5kIiwic2VsZWN0aW9uIiwiT2xkU3R1ZGVudEZsb3ciLCJOYXZiYXIiLCJUZWFjaGVyQWNjZXNzQ29udGV4dCIsInVzZVRlYWNoZXJBY2Nlc3NDb250ZXh0IiwiX2Vycm9yUmVuZGVyZXIiLCJUZWFjaGVyQWNjZXNzRm9ybSIsIlRlYWNoZXJBY2Nlc3MiLCJzZXREYXRhIiwid2hlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb3ZpZGVyIiwiVGVhY2hlckxlZnRDb2x1bW4iLCJUZWFjaGVyRm9ybSIsIkFMUkVBRFlfV0FJVElORyIsIlRlYWNoZXJGb3JtTGVmdENvbHVtbiIsInJvbGUiLCJncmFkZSIsImN1cnJpY3VsYXJBcmVhIiwiYWRkcmVzcyIsIl9jb25maXJtZWRSZXF1ZXN0IiwiX2FjY2VzcyIsImhhc0ZyZWVUcmlhbCIsImZyZWVUcmlhbEFzVGVhY2hlciIsInN0YXRlIiwiZWRpdFZhbHVlcyIsImhhc0luc3RpdHV0aW9uIiwiY29udHJvbEtleSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsIm9wdGlvbnMiLCJUZWFjaGVySW5zdGl0dXRpb24iLCJhY2Nlc3MiLCJwbGFjZWhvbGRlciIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiaGVsbG8iLCJpbnRybyIsInVzZXJuYW1lIiwieWVzIiwibm8iLCJibG9jayIsImNvbnRpbnVlIiwiX2hvb2tzIiwiX2Zsb3ciLCJfcm9sZVNlbGVjdGlvbiIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlU3RvcmUiLCJvbkFuaW1hdGlvbkNvbXBsZXRlIiwiUGFnZUxvYWRlciIsImZsb3ciLCJSb2xlU2VsZWN0aW9uIiwiX2ljb25zMiIsIl9sYW5ndWFnZXMiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRycyIsIkljb24iLCJiYWNrIiwiTGFuZ3VhZ2VzIiwiQXBwSWNvbkJ1dHRvbiIsIl9jb3JlIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJkYXRhc2V0IiwibGFuZ3VhZ2UiLCJzdXBwb3J0ZWRMYW5ndWFnZXMiLCJzdXBwb3J0ZWQiLCJrZXlzIiwiX2NhcmQiLCJfd3JhcHBlciIsIl9zd2lwZXIiLCJpdGVtcyIsInB1c2giLCJoZWFkZXIiLCJzZXR0aW5ncyIsIkFQUF9MT0dPIiwiU3dpcGVyU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiekluZGV4Iiwic2hvd1dlbGNvbWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jYXJkL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2NvZGUtaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaW5wdXQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3ZpZXdzL2NvbmZpcm1lZC1yZXF1ZXN0LnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93LnRzeCIsIi90cy92aWV3cy9mbG93cy9pbnN0aXR1dGlvbi9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQvbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3N0dWRlbnQvb2xkLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZm9ybS50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvZm9ybS9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9pbmRleC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9pbnN0aXR1dGlvbi50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25hdmJhci9pbmRleC50c3giLCIvdHMvdmlld3MvbmF2YmFyL2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3Mvcm9sZS1zZWxlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL3VzZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksRUFBRTtZQUNuQjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsSUFBQVcsS0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsV0FBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLGNBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBaUIsUUFBQSxHQUFBakIsT0FBQTtVQUVBLElBQUFrQixlQUFBLEdBQUFsQixP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