System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.2.0/model", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/auth@0.0.1/components", "pragmate-ui@1.0.0-beta.1/image", "pragmate-ui@1.0.0-beta.1/form", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
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
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi100Beta1Components) {
      dependency_6 = _pragmateUi100Beta1Components;
    }, function (_aimpactAuth001Components) {
      dependency_7 = _aimpactAuth001Components;
    }, function (_pragmateUi100Beta1Image) {
      dependency_8 = _pragmateUi100Beta1Image;
    }, function (_pragmateUi100Beta1Form) {
      dependency_9 = _pragmateUi100Beta1Form;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.3-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-recover-password",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['@aimpact/auth/components', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/form', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-recover-password-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-recover-password.widget",
        "is": "page",
        "route": "/auth/recover-password",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth-recover-password.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 111210419,
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
            show() {
              this.#store.load(this.uri.qs.get('token'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 69408933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _functions = require("./temp-hardcoded/functions");
          class StoreManager extends _model.ReactiveModel {
            token;
            #user;
            get user() {
              return this.#user;
            }
            async load(token) {
              try {
                if (this.token === token) return;
                this.token = token;
                const info = await (0, _functions.getUserByToken)({
                  token
                });
                if (!info.status) {
                  // console.error(info.data, 'ERROR - info.data');
                  return info;
                }
                this.#user = info.data.user;
                return info;
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
              }
            }
            async save(data) {
              try {
                this.ready = false;
                const info = await (0, _functions.updatePassword)(data);
                if (!info.status) {
                  // console.error(info.data, 'ERROR - info.data');
                  return info;
                }
                return info;
              } catch (e) {
                console.error(e);
              } finally {
                this.ready = true;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /******************************************
      INTERNAL MODULE: ./temp-hardcoded/constants
      ******************************************/

      ims.set('./temp-hardcoded/constants', {
        hash: 2913013158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.userData = void 0;
          const userData = exports.userData = [{
            token: 'token1',
            user: {
              email: 'example@gmail.com',
              id: 'randomId',
              name: 'exampleName'
            }
          }, {
            token: 'token3',
            user: {
              email: 'example2@gmail.com',
              id: 'randomId2',
              name: 'exampleName2'
            }
          }, {
            token: 'token5',
            user: {
              email: 'example3@gmail.com',
              id: 'randomId3',
              name: 'exampleName3'
            }
          }];
        }
      });

      /******************************************
      INTERNAL MODULE: ./temp-hardcoded/functions
      ******************************************/

      ims.set('./temp-hardcoded/functions', {
        hash: 2135906246,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.updatePassword = exports.getUserByToken = void 0;
          var _constants = require("./constants");
          const getUserByToken = ({
            token
          }) => {
            return new Promise(resolve => {
              setTimeout(() => {
                const foundUser = _constants.userData.find(data => data.token === token);
                const res = foundUser ? {
                  status: true,
                  data: {
                    user: foundUser.user
                  }
                } : {
                  status: false,
                  data: {
                    error: "Token doesn't exist"
                  }
                };
                resolve(res);
              }, 1000);
            });
          };
          exports.getUserByToken = getUserByToken;
          const updatePassword = ({
            data
          }) => {
            return new Promise(resolve => {
              setTimeout(() => {
                let status = true;
                if (!data.password) {
                  status = false;
                }
                resolve({
                  status,
                  data: status ? {} : {
                    error: "Token doesn't exist"
                  }
                });
              }, 1000);
            });
          };
          exports.updatePassword = updatePassword;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./temp-hardcoded/interfaces
      *******************************************/

      ims.set('./temp-hardcoded/interfaces', {
        hash: 3173443516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/empty-redirect
      **************************************/

      ims.set('./views/empty-redirect', {
        hash: 2251813909,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyRedirect = EmptyRedirect;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/auth/components");
          var _image = require("pragmate-ui/image");
          function EmptyRedirect({
            texts
          }) {
            return _react.default.createElement(_components2.EmptyCard, {
              text: texts.empty.title,
              description: texts.empty.description
            }, _react.default.createElement(_components.Link, {
              href: '/',
              className: 'redirect_btn btn btn-primary'
            }, texts.empty.back), _react.default.createElement(_image.Image, {
              src: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_200/v1/AImpact/fujhhbk2li36uxgyaipn',
              className: 'sad-explorer__img',
              alt: 'Sad Explorer'
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 180851491,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecoveryByTokenForm = RecoveryByTokenForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          function RecoveryByTokenForm({
            store,
            texts,
            setSuccess
          }) {
            const [values, setValues] = (0, _react.useState)({
              password: '',
              confirmPassword: ''
            });
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)('');
            const [passwordStrength, setPasswordStrength] = (0, _react.useState)(0);
            const [confirmPasswordStrength, setConfirmPasswordStrength] = (0, _react.useState)(0);
            const formDisabled = {};
            const {
              password,
              confirmPassword
            } = values;
            if (!password && !confirmPassword) formDisabled.disabled = true;
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              validatePassword(target.value, target.id);
              setValues(currentValue);
              setError('');
            };
            const onSubmit = async event => {
              try {
                setFetching(true);
                event.preventDefault();
                const response = await store.save(values);
                if (!response.status) {
                  if (response.error === 'Firebase: Error (auth/network-request-failed).') return setError(texts.errorMessages.lostConnection);
                  return setError(texts.errorMessages.internalFail);
                }
                setSuccess(true);
                setValues({
                  password: '',
                  confirmPassword: ''
                });
                return;
              } catch (e) {
                setError(texts.errorMessages.internalFail);
              } finally {
                setFetching(false);
              }
            };
            const configError = message => {
              setError(message);
            };
            const checkInput = type => {
              return type !== 'password';
            };
            const checkStrength = (password, type) => {
              const requirements = [/[A-Za-z]/, /\d/, /[A-Z]/, /[a-z]/, /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/];
              let strength = 0;
              if (password.length >= 8 && password.length <= 32) {
                strength += 1;
              }
              requirements.forEach(pattern => {
                if (pattern.test(password)) {
                  strength += 1;
                }
              });
              if (type === 'password') setPasswordStrength(strength);
              if (type === 'confirmPassword') setConfirmPasswordStrength(strength);
            };
            const validatePassword = (password, type) => {
              const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,32}$/;
              if (checkInput(type)) {
                if (values.password !== values.confirmPassword) {
                  configError(texts.errorMessages.match);
                } else if (!regex.test(values.password)) {
                  if (values.password.length < 8 || values.password.length > 32) {
                    configError(texts.errorMessages.minimumCharacters);
                  } else if (!/[A-Za-z]/.test(values.password)) {
                    configError(texts.errorMessages.minimumLetters);
                  } else if (!/[0-9!@#$%^&*()-_=+{};:,<.>/?]/.test(values.password)) {
                    configError(texts.errorMessages.minimumNumbers);
                  } else if (!/(?=.*[A-Z])/.test(values.password)) {
                    configError(texts.errorMessages.minimumUpper);
                  } else if (!/(?=.*[a-z])/.test(values.password)) {
                    configError(texts.errorMessages.minimumLower);
                  } else if (!/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(values.password)) {
                    configError(texts.errorMessages.minimumSpecial);
                  }
                }
              }
              checkStrength(password, type);
            };
            const isFormValid = !!password && !!confirmPassword && !error;
            const clsPass = `password-input__status-${passwordStrength} ${error ? ' error' : ''}`;
            const clsConfirmPass = `confirm-password-input__status-${confirmPasswordStrength} ${error ? ' error' : ''}`;
            const clsAlert = `error-message${error ? ' visible' : ''} type-${passwordStrength}  p2`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: 'restore-title__text h2'
            }, texts.title), _react.default.createElement("span", {
              className: 'restore-subtitle__text p2'
            }, texts.subTitle), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: 'restore-form__container'
            }, _react.default.createElement(_form.Input, {
              className: clsPass,
              placeholder: texts.labelPassword,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: 'inputs-form__container'
            }, _react.default.createElement(_form.Input, {
              className: clsConfirmPass,
              placeholder: texts.labelConfirmPassword,
              type: 'password',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: handleChange,
              onBlur: validatePassword,
              required: true
            }), _react.default.createElement("p", {
              className: clsAlert
            }, error && error), _react.default.createElement("div", {
              className: 'term__container'
            }, _react.default.createElement("span", {
              className: 'conditions-title__text h6'
            }, texts.passwordConditions?.title), _react.default.createElement("ul", {
              className: 'conditions-pass__container'
            }, _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumCharacters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumLetters), _react.default.createElement("li", {
              className: 'p2'
            }, texts.passwordConditions?.minimumSpecial)))), _react.default.createElement(_components.Button, {
              type: 'submit',
              disabled: !isFormValid,
              variant: 'primary',
              label: texts.recoveryButton
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3985160010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/auth/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _form = require("./form");
          var _passwordChanged = require("./password-changed");
          var _emptyRedirect = require("./empty-redirect");
          /*bundle*/
          function View({
            store
          }) {
            const [success, setSuccess] = (0, _react.useState)(false);
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!textReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            const PageByStatus = success ? _passwordChanged.PasswordChanged : _form.RecoveryByTokenForm;
            const Control = !!store.user && !!store.token ? PageByStatus : _emptyRedirect.EmptyRedirect;
            return _react.default.createElement("div", {
              className: 'auth-page-container'
            }, _react.default.createElement("div", {
              className: 'first-panel'
            }, _react.default.createElement("aimpact-login-presentation", {
              "dynamic-children": true
            })), _react.default.createElement("div", {
              className: 'second-panel'
            }, _react.default.createElement("div", {
              className: 'recovery-container'
            }, _react.default.createElement("div", {
              className: 'recovery__header'
            }, _react.default.createElement(_components2.ThemeSwitch, {
              text: texts.theme
            })), _react.default.createElement("div", {
              className: 'recovery__content'
            }, _react.default.createElement("div", {
              className: 'recovery-form__container'
            }, _react.default.createElement(Control, {
              texts: texts,
              store: store,
              setSuccess: setSuccess
            }))))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/password-changed
      ****************************************/

      ims.set('./views/password-changed', {
        hash: 274144720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PasswordChanged = PasswordChanged;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          function PasswordChanged({
            texts
          }) {
            return _react.default.createElement("div", {
              className: 'well-recover__container'
            }, _react.default.createElement("div", {
              className: 'well-recover-text__container visible'
            }, _react.default.createElement("h3", {
              className: 'restore-title__text h4'
            }, texts.wellDone.title), _react.default.createElement("span", {
              className: 'p2'
            }, texts.wellDone.subtitle), _react.default.createElement("span", {
              className: 'p2'
            }, texts.wellDone.message)), _react.default.createElement(_image.Image, {
              src: 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_220/v1/AImpact/etq89fualhdkhkpeofat',
              alt: 'Happy Explorer',
              className: 'well-done__image'
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJfbW9kZWwiLCJfZnVuY3Rpb25zIiwiUmVhY3RpdmVNb2RlbCIsInRva2VuIiwidXNlciIsImluZm8iLCJnZXRVc2VyQnlUb2tlbiIsInN0YXR1cyIsImRhdGEiLCJlIiwiY29uc29sZSIsImVycm9yIiwicmVhZHkiLCJzYXZlIiwidXBkYXRlUGFzc3dvcmQiLCJ1c2VyRGF0YSIsImVtYWlsIiwiaWQiLCJuYW1lIiwiX2NvbnN0YW50cyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZvdW5kVXNlciIsImZpbmQiLCJyZXMiLCJwYXNzd29yZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsIl9jb21wb25lbnRzMiIsIl9pbWFnZSIsIkVtcHR5UmVkaXJlY3QiLCJ0ZXh0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkxpbmsiLCJocmVmIiwiY2xhc3NOYW1lIiwiYmFjayIsIkltYWdlIiwic3JjIiwiYWx0IiwiX2Zvcm0iLCJSZWNvdmVyeUJ5VG9rZW5Gb3JtIiwic2V0U3VjY2VzcyIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiY29uZmlybVBhc3N3b3JkIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwicGFzc3dvcmRTdHJlbmd0aCIsInNldFBhc3N3b3JkU3RyZW5ndGgiLCJjb25maXJtUGFzc3dvcmRTdHJlbmd0aCIsInNldENvbmZpcm1QYXNzd29yZFN0cmVuZ3RoIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0IiwiY3VycmVudFZhbHVlIiwidmFsaWRhdGVQYXNzd29yZCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZXJyb3JNZXNzYWdlcyIsImxvc3RDb25uZWN0aW9uIiwiaW50ZXJuYWxGYWlsIiwiY29uZmlnRXJyb3IiLCJtZXNzYWdlIiwiY2hlY2tJbnB1dCIsInR5cGUiLCJjaGVja1N0cmVuZ3RoIiwicmVxdWlyZW1lbnRzIiwic3RyZW5ndGgiLCJsZW5ndGgiLCJmb3JFYWNoIiwicGF0dGVybiIsInRlc3QiLCJyZWdleCIsIm1hdGNoIiwibWluaW11bUNoYXJhY3RlcnMiLCJtaW5pbXVtTGV0dGVycyIsIm1pbmltdW1OdW1iZXJzIiwibWluaW11bVVwcGVyIiwibWluaW11bUxvd2VyIiwibWluaW11bVNwZWNpYWwiLCJpc0Zvcm1WYWxpZCIsImNsc1Bhc3MiLCJjbHNDb25maXJtUGFzcyIsImNsc0FsZXJ0IiwiRnJhZ21lbnQiLCJzdWJUaXRsZSIsIkZvcm0iLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwibGFiZWxQYXNzd29yZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJsYWJlbENvbmZpcm1QYXNzd29yZCIsIm9uQmx1ciIsInBhc3N3b3JkQ29uZGl0aW9ucyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJsYWJlbCIsInJlY292ZXJ5QnV0dG9uIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX3Bhc3N3b3JkQ2hhbmdlZCIsIl9lbXB0eVJlZGlyZWN0Iiwic3VjY2VzcyIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUGFnZUJ5U3RhdHVzIiwiUGFzc3dvcmRDaGFuZ2VkIiwiQ29udHJvbCIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJ3ZWxsRG9uZSIsInN1YnRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdGVtcC1oYXJkY29kZWQvY29uc3RhbnRzLnRzIiwiL3RzL3RlbXAtaGFyZGNvZGVkL2Z1bmN0aW9ucy50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3ZpZXdzL2VtcHR5LXJlZGlyZWN0LnRzeCIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGFzc3dvcmQtY2hhbmdlZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQzs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VD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QUM7WUFBb0IsR0FDbENmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFrQixHQUNoQ2YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsWUFBQSxDQUFBb0csV0FBVztjQUFDN0YsSUFBSSxFQUFFSixLQUFLLENBQUNrRztZQUFLLEVBQUksQ0FDN0IsRUFDTnZHLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUtRLFNBQVMsRUFBQztZQUFtQixHQUNqQ2YsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQTBCLEdBQ3hDZixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEYsT0FBTztjQUFDaEcsS0FBSyxFQUFFQSxLQUFLO2NBQUU5QyxLQUFLLEVBQUVBLEtBQUs7Y0FBRStELFVBQVUsRUFBRUE7WUFBVSxFQUFJLENBQzFELENBQ0QsQ0FDRCxDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3Q0EsSUFBQXRCLE1BQUEsR0FBQTlDLE9BQUE7VUFDQSxJQUFBaUQsTUFBQSxHQUFBakQsT0FBQTtVQUVNLFNBQVVrSixlQUFlQSxDQUFDO1lBQUUvRjtVQUFLLENBQUU7WUFDeEMsT0FDQ0wsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBS1EsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDZixNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQTtjQUFLUSxTQUFTLEVBQUM7WUFBc0MsR0FDcERmLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQUlRLFNBQVMsRUFBQztZQUF3QixHQUFFVixLQUFLLENBQUNtRyxRQUFRLENBQUM3RixLQUFLLENBQU0sRUFDbEVYLE1BQUEsQ0FBQU0sT0FBQSxDQUFBQyxhQUFBO2NBQU1RLFNBQVMsRUFBQztZQUFJLEdBQUVWLEtBQUssQ0FBQ21HLFFBQVEsQ0FBQ0MsUUFBUSxDQUFRLEVBQ3JEekcsTUFBQSxDQUFBTSxPQUFBLENBQUFDLGFBQUE7Y0FBTVEsU0FBUyxFQUFDO1lBQUksR0FBRVYsS0FBSyxDQUFDbUcsUUFBUSxDQUFDdkQsT0FBTyxDQUFRLENBQy9DLEVBQ05qRCxNQUFBLENBQUFNLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFjLEtBQUs7Y0FDTEMsR0FBRyxFQUFDLG9HQUFvRztjQUN4R0MsR0FBRyxFQUFDLGdCQUFnQjtjQUNwQkosU0FBUyxFQUFDO1lBQWtCLEVBQzNCLENBQ0c7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==