System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "@aimpact/chat-sdk@1.4.1/session", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.3.1/components/ui", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/form", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/swiper"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, VerificationCodeInput, InstitutionFlow, TeacherForm, NavbarHeader, UserData, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_4 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_aimpactChatSdk141Session) {
      dependency_6 = _aimpactChatSdk141Session;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_9 = _aimpactAilearnApp031ComponentsUi;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_14 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Image) {
      dependency_15 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_17 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Swiper) {
      dependency_19 = _pragmateUi100Beta7Swiper;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['react', dependency_10], ['framer-motion', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['@beyond-js/kernel/routing', dependency_14], ['pragmate-ui/image', dependency_15], ['pragmate-ui/form', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/swiper', dependency_19]]);
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
        hash: 3089449592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          var _session = require("@aimpact/chat-sdk/session");
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
        hash: 2133498535,
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
        hash: 271930546,
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
        hash: 1284418277,
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
              className: "full-width",
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
        hash: 3924717883,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherFlow = TeacherFlow;
          var _framerMotion = require("framer-motion");
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
        hash: 2534798209,
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
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "full-width",
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
            }, texts.actions.continue)))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2988911061,
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
        hash: 3897738493,
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
              className: "general-container no-p vertical-center"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9jbGFzc3Jvb21zIiwiX29yZ2FuaXphdGlvbnMiLCJfc2Vzc2lvbiIsIl9tb2RlbCIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNNaW5vciIsImFnZSIsInJlYWR5IiwiZ2xvYmFsVGV4dHMiLCJvcmdhbml6YXRpb24iLCJPcmdhbml6YXRpb24iLCJjbGFzc3Jvb20iLCJDbGFzc3Jvb20iLCJyZXF1ZXN0ZWQiLCJtZXRhZGF0YSIsInJlcXVlc3RzIiwib3JnYW5pemF0aW9ucyIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJvbiIsInRyaWdnZXJFdmVudCIsInJlZ2lzdGVyVGVhY2hlciIsInZhbHVlcyIsImZyZWVUcmlhbCIsInJlZ2lzdGVySW5zdGl0dXRpb24iLCJwdWJsaXNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiam9pbiIsImNvZGUiLCJzZXQiLCJyZXNwb25zZSIsImRhdGEiLCJqb2luQ2xhc3Nyb29tIiwicHJvdmlkZXIiLCJyZWZyZXNoQ2xhc3Nyb29tIiwid2FybiIsInJlZnJlc2hPcmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImFuaW1hdGlvbnMiLCJkZWZhdWx0IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJmYWRlIiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIkNhcmQiLCJwcm9wcyIsInR5cGUiLCJpbmRleCIsIm9uQ2FyZEFjdGlvbiIsInNldFJvbGVTZWxlY3RlZCIsInVzZU1vZHVsZUNvbnRleHQiLCJjYXJkcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiYXR0cmlidXRlcyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGVsYXkiLCJjcmVhdGVFbGVtZW50IiwibW90aW9uIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsIkFwcEljb24iLCJCdXR0b24iLCJhY3Rpb25zIiwiYWNjZXB0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0IiwibGVuZ3RoIiwib25DaGFuZ2UiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsIkFycmF5IiwiZmlsbCIsImlucHV0c1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlcyIsInNsaWNlIiwiY3VycmVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsInByZXYiLCJoYW5kbGVQYXN0ZSIsInBhc3RlRGF0YSIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwic3BsaXQiLCJmb3JFYWNoIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJtYXhMZW5ndGgiLCJyZWYiLCJlbCIsIm9uS2V5RG93biIsIm9uUGFzdGUiLCJJbnB1dENvbXBvbmVudCIsImxhYmVsIiwibGFiZWxWYXJpYW50cyIsImZsb2F0aW5nIiwic2NhbGUiLCJyZXN0aW5nIiwid2hpbGVGb2N1cyIsInZhcmlhbnRzIiwiUmVhY3QiLCJSYWRpb0J1dHRvbiIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsImRpdiIsImNoZWNrZWQiLCJsYXlvdXQiLCJSYWRpb0dyb3VwIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJfdWkiLCJfcm91dGluZyIsIl9pbWFnZSIsIl9hbmltYXRpb25zIiwiX3VzZXIiLCJDb25maXJtZWRSZXF1ZXN0IiwidGV4dHNBY3Rpb25zIiwiZXJyb3JzIiwic2V0RXJyb3IiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2hvd05hdmlnYXRpb24iLCJpbmNsdWRlcyIsInNob3dSZWZyZXNoIiwicmVwbGFjZSIsIm5hbWUiLCJvblJlZnJlc2giLCJtZXRob2RzIiwic3R1ZGVudCIsImJpbmQiLCJ0ZWFjaGVySW5zdGl0dXRpb24iLCJlbnRpdHkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiY2xzIiwibGluayIsIlBhZ2VDb250YWluZXIiLCJVc2VyRGF0YSIsIkh0bWxXcmFwcGVyIiwiYXMiLCJwYXJhbXMiLCJFcnJvclJlbmRlcmVyIiwic3VidGl0bGUiLCJnZXRQcm9wZXJ0aWVzIiwidG90YWxHZW5lcmF0aXZlIiwiY29pbnMiLCJtb2R1bGVzIiwidG90YWxJbnRlcmFjdGlvbiIsImFzc2lnbm1lbnRzIiwiTGluayIsImhyZWYiLCJzdGFydCIsImRpc2FibGVkIiwicmVmcmVzaCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2VsY29tZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pbnN0aXR1dGlvbiIsIl9zdHVkZW50IiwiX3RlYWNoZXIiLCJTZWxlY3Rpb25GbG93Iiwicm9sZVNlbGVjdGVkIiwiQ29udHJvbHMiLCJTdHVkZW50RmxvdyIsInRlYWNoZXIiLCJUZWFjaGVyRmxvdyIsImluc3RpdHV0aW9uIiwiSW5zdGl0dXRpb25GbG93IiwiQ29udHJvbCIsIl9mb3JtIiwiX2xlZnRDb2x1bW4iLCJfbmF2YmFyIiwic2V0UmVxdWVzdGVkIiwic2V0TWV0YWRhdGEiLCJmb3JtIiwiZmllbGRzIiwicmVxdWlyZWRGaWVsZHMiLCJmb3JtQ29tcGxldGVkIiwiZXZlcnkiLCJmaWVsZCIsImRpc2FibGVkQnRuIiwicHJldlZhbHVlcyIsIm9uU3VibWl0Iiwic3RhdHVzIiwiZXJyIiwib25CYWNrIiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJJbnN0aXR1dGlvbkZvcm1MZWZ0Q29sdW1uIiwic2VjdGlvbiIsIkZvcm0iLCJJbnB1dCIsInJlcXVpcmVkIiwiZWR1Y2F0aW9uYWxMZXZlbCIsImdlb2dyYXBoaWNBZGRyZXNzIiwiQ2hlY2tib3giLCJhdXRob3JpemVkVXNlciIsInN1Ym1pdCIsImZvcm1UZXh0cyIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJfY29kZUlucHV0IiwiZW50cmFuY2VWYXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJzdHlsZUFsZXJ0Iiwic2V0U3R5bGVBbGVydCIsIlRPS0VOX1NJWkUiLCJ0b2tlbiIsInNldFRva2VuIiwidG9Mb3dlckNhc2UiLCJtZXNzYWdlIiwic3R5bGUiLCJ0b1N0cmluZyIsIkVSUk9SX1BVQkxJU0hJTkciLCJvblRva2VuQ2hhbmdlIiwiU3R1ZGVudExlZnRDb2x1bW4iLCJhY3Rpb24iLCJsZWdlbmQiLCJzZWxlY3Rpb24iLCJPbGRTdHVkZW50RmxvdyIsIk5hdmJhciIsIlRlYWNoZXJBY2Nlc3NDb250ZXh0IiwidXNlVGVhY2hlckFjY2Vzc0NvbnRleHQiLCJfZXJyb3JSZW5kZXJlciIsIlRlYWNoZXJBY2Nlc3NGb3JtIiwiVGVhY2hlckFjY2VzcyIsInNldERhdGEiLCJ3aGVuIiwic3RhZ2dlckNoaWxkcmVuIiwiUHJvdmlkZXIiLCJUZWFjaGVyTGVmdENvbHVtbiIsIlRlYWNoZXJGb3JtIiwiQUxSRUFEWV9XQUlUSU5HIiwiVGVhY2hlckZvcm1MZWZ0Q29sdW1uIiwicm9sZSIsImdyYWRlIiwiY3VycmljdWxhckFyZWEiLCJhZGRyZXNzIiwiX2NvbmZpcm1lZFJlcXVlc3QiLCJfYWNjZXNzIiwiaGFzRnJlZVRyaWFsIiwiZnJlZVRyaWFsQXNUZWFjaGVyIiwic3RhdGUiLCJlZGl0VmFsdWVzIiwiVGVhY2hlckluc3RpdHV0aW9uIiwiYWNjZXNzIiwiaGFzSW5zdGl0dXRpb24iLCJjb250cm9sS2V5IiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIl9yYWRpbyIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiaGVsbG8iLCJvcHRpb25zIiwiaW50cm8iLCJ1c2VybmFtZSIsInllcyIsIm5vIiwiYmxvY2siLCJjb250aW51ZSIsIl9ob29rcyIsIl9yb2xlU2VsZWN0aW9uIiwiX2Zsb3ciLCJzZXRSZWFkeSIsImNvbnRyb2xzIiwidXNlQW5pbWF0aW9uIiwic2V0QWN0aW9uIiwidXNlQmluZGVyIiwib25BbmltYXRpb25Db21wbGV0ZSIsIlBhZ2VMb2FkZXIiLCJmbG93IiwiUm9sZVNlbGVjdGlvbiIsIl9pY29uczIiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRycyIsIkljb24iLCJiYWNrIiwiQXBwSWNvbkJ1dHRvbiIsIl9jYXJkIiwiX3N3aXBlciIsIml0ZW1zIiwicHVzaCIsImhlYWRlciIsIlN3aXBlclNsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInpJbmRleCIsInNob3dXZWxjb21lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvYW5pbWF0aW9ucy50c3giLCIvdHMvdmlld3MvY2FyZC9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9jb2RlLWlucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2lucHV0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy92aWV3cy9jb25maXJtZWQtcmVxdWVzdC50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvdy50c3giLCIvdHMvdmlld3MvZmxvd3MvaW5zdGl0dXRpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL2luc3RpdHV0aW9uL2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L2xlZnQtY29sdW1uLnRzeCIsIi90cy92aWV3cy9mbG93cy9zdHVkZW50L29sZC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9hY2Nlc3MvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvYWNjZXNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2FjY2Vzcy9sZWZ0LWNvbHVtbi50c3giLCIvdHMvdmlld3MvZmxvd3MvdGVhY2hlci9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mbG93cy90ZWFjaGVyL2Zvcm0vbGVmdC1jb2x1bW4udHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zsb3dzL3RlYWNoZXIvaW5zdGl0dXRpb24udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9uYXZiYXIudHN4IiwiL3RzL3ZpZXdzL3JvbGUtc2VsZWN0aW9uLnRzeCIsIi90cy92aWV3cy91c2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVs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