System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "pragmate-ui@0.0.3/form", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.3/alert", "pragmate-ui@0.0.3/components", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi003Form) {
      dependency_5 = _pragmateUi003Form;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_pragmateUi003Alert) {
      dependency_7 = _pragmateUi003Alert;
    }, function (_pragmateUi003Components) {
      dependency_8 = _pragmateUi003Components;
    }, function (_aimpactChat101SharedComponents) {
      dependency_9 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "0.2.0"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@beyond-js/widgets", "0.1.5"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/auth-recovery",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['pragmate-ui/form', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/chat/shared/components', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-recovery-page",
        "vspecifier": "@aimpact/chat@1.0.1/auth-recovery.widget",
        "is": "page",
        "route": "/auth/recovery",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/auth-recovery.widget');
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
        hash: 3093875692,
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
        hash: 3694749379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _components2 = require("@aimpact/chat/shared/components");
          var _hooks = require("@aimpact/chat/shared/hooks");
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
              className: 'page-container'
            }, _react.default.createElement("div", {
              className: 'panel'
            }, _react.default.createElement("aimpact-login-presentation", null)), _react.default.createElement("div", {
              className: 'panel'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwiX3JlYWN0IiwiQ2hlY2tZb3VyRW1haWwiLCJ0ZXh0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJyZWNvdmVyeVRpdGxlIiwiY2hlY2tZb3VyRW1haWwiLCJpbnRybyIsImNoZWNrIiwid2FybmluZyIsImNvbnRhY3QiLCJ0aGFua3MiLCJfZm9ybSIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiUmVjb3ZlcnlGb3JtIiwic2V0U2VuZFJlcXVlc3QiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ1c2VTdGF0ZSIsImVtYWlsIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmb3JtRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiZXJyb3JMb2dpbiIsInJlY292ZXJ5U3VidGl0bGUiLCJyZWNvdmVyeUludHJvIiwicmVjb3ZlcnlJbnN0cnVjdGlvbnMiLCJGb3JtIiwiQWxlcnQiLCJtZXNzYWdlIiwibW9kZSIsImlzQ2xvc2UiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJCdXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJyZWNvdmVyeUJ1dHRvbiIsInJlY292ZXJ5RmluaXNoIiwicmVjb3ZlcnlCeWUiLCJfY29tcG9uZW50czIiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY2hlY2tFbWFpbCIsInNlbmRSZXF1ZXN0IiwidGV4dFJlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsIlRoZW1lU3dpdGNoIiwidGV4dCIsInRoZW1lIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvdmlld3MvY2hlY2stZW1haWwudHN4IiwiL3RzL3ZpZXdzL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT0gsTUFBQSxDQUFBSSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQUosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JELElBQUFLLE1BQUEsR0FBQVAsT0FBQTtVQUVNLFNBQVVRLGNBQWNBLENBQUM7WUFBRUM7VUFBSyxDQUFFO1lBQ3ZDLE9BQ0NGLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUFKLE1BQUEsQ0FBQUcsT0FBQSxDQUFBRSxRQUFBLFFBQ0NMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFnQixHQUFFSixLQUFLLENBQUNLLGFBQWEsQ0FBTSxFQUN6RFAsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDTixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBSSxHQUFFSixLQUFLLENBQUNNLGNBQWMsRUFBRUMsS0FBSyxDQUFRLEVBQ3pEVCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFB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