System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/alert", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/auth@0.0.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta1Form) {
      dependency_5 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_6 = _pragmateUi100Beta1Alert;
    }, function (_pragmateUi100Beta1Components) {
      dependency_7 = _pragmateUi100Beta1Components;
    }, function (_aimpactAuth001Components) {
      dependency_8 = _aimpactAuth001Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-sdk", "1.0.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/widgets", "1.1.0"], ["framer-motion", "11.3.21"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io-client", "4.7.3"], ["wavesurfer.js", "7.8.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.46"], ["@types/react-dom", "18.2.18"], ["@aimpact/auth", "0.0.1"], ["@aimpact/ailearn-app", "0.1.3-test.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/auth@0.0.1/auth-recovery",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['pragmate-ui/alert', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/auth/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-recovery-page",
        "vspecifier": "@aimpact/auth@0.0.1/auth-recovery.widget",
        "is": "page",
        "route": "/auth/recovery",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/auth@0.0.1/auth-recovery.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1999589969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/check-email
      ***********************************/

      ims.set('./views/check-email', {
        hash: 4181794838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckYourEmail = CheckYourEmail;
          var _react = require("react");
          function CheckYourEmail({
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: 'form__title h2'
            }, texts.recoveryTitle), _react.default.createElement("div", {
              className: 'intro-recovery__text'
            }, _react.default.createElement("span", {
              className: 'h4'
            }, texts.checkYourEmail?.intro), _react.default.createElement("span", {
              className: 'h4'
            }, texts.checkYourEmail?.check)), _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("div", {
              className: 'intro-recovery__text'
            }, _react.default.createElement("span", {
              className: 'h4'
            }, texts.checkYourEmail?.warning), _react.default.createElement("span", {
              className: 'h4'
            }, texts.checkYourEmail?.contact)), _react.default.createElement("span", {
              className: 'h3'
            }, texts.checkYourEmail?.thanks));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 2807919184,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecoveryForm = RecoveryForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          function RecoveryForm({
            texts,
            setSendRequest
          }) {
            const [values, setValues] = (0, _react.useState)({
              email: ''
            });
            const [fetching, setFetching] = (0, _react.useState)(false);
            const [error, setError] = (0, _react.useState)('');
            const formDisabled = {};
            const {
              email
            } = values;
            if (!email) formDisabled.disabled = true;
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const onSubmit = async event => {
              setFetching(true);
              const {
                email
              } = values;
              try {
                event.preventDefault();
                // const response = await sessionWrapper.recoveryPassword(email);
                // if (!response.status) {
                // 	return setError(response.error);
                // }
                setValues({
                  email: ''
                });
                setSendRequest(true);
                return;
              } catch (e) {
                setError(texts.errorLogin);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", {
              className: 'form__title h2'
            }, texts.recoveryTitle), _react.default.createElement("span", {
              className: 'intro-recovery__text p2'
            }, texts.recoverySubtitle, " ", texts.recoveryIntro), _react.default.createElement("div", {
              className: 'divider-section'
            }), _react.default.createElement("span", {
              className: 'intro-recovery__text p2'
            }, texts.recoveryInstructions), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: 'recovery-form__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              mode: 'error',
              isClose: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.email,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              type: 'submit',
              ...formDisabled,
              variant: 'primary',
              onClick: onSubmit,
              label: texts.recoveryButton
            }))), _react.default.createElement("span", {
              className: 'p2'
            }, texts.recoveryFinish), _react.default.createElement("span", {
              className: 'p2'
            }, texts.recoveryBye));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3477808207,
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
          var _checkEmail = require("./check-email");
          /*bundle*/
          function View() {
            const [sendRequest, setSendRequest] = (0, _react.useState)(false);
            const [textReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textReady) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: 'primary'
            });
            const Control = !sendRequest ? _form.RecoveryForm : _checkEmail.CheckYourEmail;
            return _react.default.createElement("div", {
              className: 'auth-page-container'
            }, _react.default.createElement("div", {
              className: 'first-panel'
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
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
              setSendRequest: setSendRequest
            }))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiQ2hlY2tZb3VyRW1haWwiLCJ0ZXh0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJyZWNvdmVyeVRpdGxlIiwiY2hlY2tZb3VyRW1haWwiLCJpbnRybyIsImNoZWNrIiwid2FybmluZyIsImNvbnRhY3QiLCJ0aGFua3MiLCJfZm9ybSIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiUmVjb3ZlcnlGb3JtIiwic2V0U2VuZFJlcXVlc3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiZXJyb3JMb2dpbiIsInJlY292ZXJ5U3VidGl0bGUiLCJyZWNvdmVyeUludHJvIiwicmVjb3ZlcnlJbnN0cnVjdGlvbnMiLCJGb3JtIiwiQWxlcnQiLCJtZXNzYWdlIiwibW9kZSIsImlzQ2xvc2UiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJ2YXJpYW50Iiwib25DbGljayIsImxhYmVsIiwicmVjb3ZlcnlCdXR0b24iLCJyZWNvdmVyeUZpbmlzaCIsInJlY292ZXJ5QnllIiwiX2NvbXBvbmVudHMyIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NoZWNrRW1haWwiLCJzZW5kUmVxdWVzdCIsInRleHRSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbnRyb2wiLCJUaGVtZVN3aXRjaCIsInRleHQiLCJ0aGVtZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3ZpZXdzL2NoZWNrLWVtYWlsLnRzeCIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxNQUFBLENBQUFJLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkQsSUFBQUssTUFBQSxHQUFBUCxPQUFBO1VBRU0sU0FBVVEsY0FBY0EsQ0FBQztZQUFFQztVQUFLLENBQUU7WUFDdkMsT0FDQ0YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQUosTUFBQSxDQUFBRyxPQUFBLENBQUFFLFFBQUEsUUFDQ0wsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBSUUsU0FBUyxFQUFDO1lBQWdCLEdBQUVKLEtBQUssQ0FBQ0ssYUFBYSxDQUFNLEVBQ3pEUCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBc0IsR0FDcENOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFJLEdBQUVKLEtBQUssQ0FBQ00sY0FBYyxFQUFFQyxLQUFLLENBQVEsRUFDekRULE1BQUEsQ0FBQUcsT0FBQSxD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