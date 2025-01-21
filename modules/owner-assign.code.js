System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/ailearn-sdk@1.0.0/entities/learning-modules", "@aimpact/chat-sdk@1.4.1/session", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/modal", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, OwnerAssignForm, __beyond_pkg, hmr;
  _export("OwnerAssignForm", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_1 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactAilearnSdk100EntitiesLearningModules) {
      dependency_2 = _aimpactAilearnSdk100EntitiesLearningModules;
    }, function (_aimpactChatSdk141Session) {
      dependency_3 = _aimpactChatSdk141Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7List) {
      dependency_9 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_react) {
      dependency_11 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/modules/owner-assign",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/ailearn-app/components/ui', dependency_1], ['@aimpact/ailearn-sdk/entities/learning-modules', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/form', dependency_7], ['pragmate-ui/image', dependency_8], ['pragmate-ui/list', dependency_9], ['pragmate-ui/modal', dependency_10], ['react', dependency_11]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 283713921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerAssignForm = OwnerAssignForm;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _learningModules = require("@aimpact/ailearn-sdk/entities/learning-modules");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
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
        hash: 516845635,
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
              onChange: onClick,
              label: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2ltYWdlIiwiX2xpc3QiLCJfbW9kYWwiLCJSZWFjdCIsIl9pdGVtIiwiT3duZXJBc3NpZ25Gb3JtIiwiaXRlbSIsIm9uQ2xvc2UiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNyZWF0ZUVsZW1lbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiY2xvbmUiLCJpbnRhbmNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiTGVhcm5pbmdNb2R1bGUiLCJnZXQiLCJpZCIsInJlc3BvbnNlIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW50aXR5Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwib25Vc2VyQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInNob3ciLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJvbkNsaWNrIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VSTCIsIm1lIiwibGFiZWwiLCJSYWRpb0J1dHRvbiIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm9yZ2FuaXphdGlvbnMiLCJpdGVtcyIsImxlbmd0aCIsIkZyYWdtZW50Iiwib3JnYW5pemF0aW9uIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwic3BlY3MiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiY29udGludWUiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImFsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxHQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssZUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsS0FBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBRU87VUFBVSxTQUFVYSxlQUFlQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsT0FBTztZQUFFQyxJQUFJLEdBQUc7VUFBUSxDQUFFO1lBQzVFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLEVBQU87WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVixLQUFLLENBQUNRLFFBQVEsRUFBRTtZQUUxQyxNQUFNLENBQUNHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdaLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNLLFVBQVUsRUFBRUMsS0FBSyxDQUFD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