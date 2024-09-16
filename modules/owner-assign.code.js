System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.2.0/session", "@aimpact/ailearn-app@0.1.6-dev.31/components/ui", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-sdk@1.0.0/learning-modules"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, OwnerAssignForm, __beyond_pkg, hmr;
  _export("OwnerAssignForm", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_2 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6List) {
      dependency_3 = _pragmateUi100Beta6List;
    }, function (_aimpactChatSdk120Session) {
      dependency_4 = _aimpactChatSdk120Session;
    }, function (_aimpactAilearnApp016Dev31ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev31ComponentsUi;
    }, function (_pragmateUi100Beta6Components) {
      dependency_6 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_7 = _pragmateUi100Beta6Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6Image) {
      dependency_11 = _pragmateUi100Beta6Image;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_12 = _aimpactAilearnSdk100LearningModules;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.2.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.31"], ["@aimpact/ailearn-app", "0.1.6-dev.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.31/modules/owner-assign",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/modal', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/icons', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/image', dependency_11], ['@aimpact/ailearn-sdk/learning-modules', dependency_12]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1197922382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerAssignForm = OwnerAssignForm;
          var React = require("react");
          var _modal = require("pragmate-ui/modal");
          var _list = require("pragmate-ui/list");
          var _session = require("@aimpact/chat-sdk/session");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _form = require("pragmate-ui/form");
          var _image = require("pragmate-ui/image");
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _item = require("./item");
          /*bundle*/
          function OwnerAssignForm({
            item,
            onClose,
            type = 'module'
          }) {
            const [selected, setSelected] = React.useState();
            const [error, setError] = React.useState();
            const [fetching, setFetching] = React.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return React.createElement(_ui.ProcessContainer, {
              fetching: true
            });
            const clone = async () => {
              try {
                if (!selected) return;
                setFetching(true);
                //@ts-ignore
                const intance = item.constructor.name !== 'LearningModule' ? await _learningModules.LearningModule.get({
                  id: item.id
                }) : item;
                const response = await intance.clone({
                  moduleId: item.id,
                  ownerId: selected.id,
                  entity: selected.entity,
                  type
                });
                if (!response.status) {
                  console.log(response);
                  setError(texts.errors.failed);
                }
                _routing.routing.pushState(`/modules/management?id=${response.data.id}`);
              } catch (error) {
                console.error(error);
                setError(texts.errors.failed);
              } finally {
                setFetching(false);
              }
            };
            const onUserClick = event => {
              event.stopPropagation();
              setSelected(_session.sessionWrapper.user);
            };
            return React.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: onClose,
              className: "modal__assignment"
            }, React.createElement("header", null, React.createElement("h3", null, texts.title), React.createElement("span", null, texts.description)), React.createElement(_ui.ErrorRenderer, {
              error: error
            }), React.createElement(_form.Form, null, React.createElement("div", {
              className: "user-option",
              onClick: onUserClick
            }, React.createElement(_image.Image, {
              src: _session.sessionWrapper.user.photoURL
            }), React.createElement("div", null, React.createElement("h6", {
              className: "user-data__label"
            }, texts.me.label), React.createElement("span", null, texts.me.description)), React.createElement(_ui.RadioButton, {
              className: "radio-button",
              checked: selected?.id === _session.sessionWrapper.user.id,
              onChange: onUserClick
            }))), _session.sessionWrapper.user.organizations.items.length > 0 ? React.createElement(React.Fragment, null, React.createElement("section", {
              className: "organization-section"
            }, React.createElement("h6", null, texts.organization.label), React.createElement("span", null, texts.organization.description)), React.createElement(_list.List, {
              items: _session.sessionWrapper.user.organizations.items,
              control: _item.Item,
              className: "organization-list",
              specs: {
                selected,
                setSelected
              }
            })) : React.createElement(React.Fragment, null), React.createElement("div", {
              className: "actions__container flex-container flex-end"
            }, React.createElement(_components.Button, {
              variant: "primary",
              disabled: !selected,
              fetching: fetching,
              onClick: clone
            }, texts.actions.continue)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2722891650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const Item = props => {
            const {
              item,
              setSelected,
              selected
            } = props;
            const onClick = event => {
              event.stopPropagation();
              setSelected(item);
            };
            const className = selected?.id === item.id ? 'list__item item__active' : ' list__item';
            return React.createElement("li", {
              "data-id": item.id,
              "data-entity": item.entity,
              className: className,
              onClick: onClick
            }, React.createElement("div", {
              className: "item-body"
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: "institution",
              alt: item.name
            }), React.createElement("span", null, item.name)), React.createElement(_ui.RadioButton, {
              checked: selected?.id === item.id,
              onChange: onClick
            }));
          };
          exports.Item = Item;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "OwnerAssignForm",
        "name": "OwnerAssignForm"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'OwnerAssignForm') && _export("OwnerAssignForm", OwnerAssignForm = require ? require('./index').OwnerAssignForm : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfbGlzdCIsIl9zZXNzaW9uIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mb3JtIiwiX2ltYWdlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9pdGVtIiwiT3duZXJBc3NpZ25Gb3JtIiwiaXRlbSIsIm9uQ2xvc2UiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNyZWF0ZUVsZW1lbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiY2xvbmUiLCJpbnRhbmNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiTGVhcm5pbmdNb2R1bGUiLCJnZXQiLCJpZCIsInJlc3BvbnNlIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW50aXR5Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwib25Vc2VyQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInNob3ciLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJvbkNsaWNrIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VSTCIsIm1lIiwibGFiZWwiLCJSYWRpb0J1dHRvbiIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsIkZyYWdtZW50Iiwib3JnYW5pemF0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwic3BlY3MiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiY29udGludWUiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImFsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLEdBQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFdBQUEsR0FBQUwsT0FBQTtVQUVBLElBQUFNLFFBQUEsR0FBQU4sT0FBQTtVQUVBLElBQUFPLE1BQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLGVBQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLEtBQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLE1BQUEsR0FBQVYsT0FBQTtVQUVBLElBQUFXLGdCQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxLQUFBLEdBQUFaLE9BQUE7VUFFTztVQUFVLFNBQVVhLGVBQWVBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxPQUFPO1lBQUVDLElBQUksR0FBRztVQUFRLENBQUU7WUFDNUUsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbkIsS0FBSyxDQUFDb0IsUUFBUSxFQUFPO1lBQ3JELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3RCLEtBQUssQ0FBQ29CLFFBQVEsRUFBRTtZQUUxQyxNQUFNLENBQUNHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd4QixLQUFLLENBQUNvQixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ0ssVUFBVSxFQUFFQyxL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