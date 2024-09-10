System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.21/components/ui", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/ailearn-sdk@1.0.0/learning-modules"], function (_export, _context) {
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
    }, function (_aimpactChatSdk110Session) {
      dependency_4 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev21ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev21ComponentsUi;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/modules/owner-assign",
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
        hash: 2808812887,
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
            }))), React.createElement("section", {
              className: "organization-section"
            }, React.createElement("h6", null, texts.organization.label), React.createElement("span", null, texts.organization.description)), React.createElement(_list.List, {
              items: _session.sessionWrapper.user.organizations.items,
              control: _item.Item,
              className: "organization-list",
              specs: {
                selected,
                setSelected
              }
            }), React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfbGlzdCIsIl9zZXNzaW9uIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mb3JtIiwiX2ltYWdlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9pdGVtIiwiT3duZXJBc3NpZ25Gb3JtIiwiaXRlbSIsIm9uQ2xvc2UiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNyZWF0ZUVsZW1lbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiY2xvbmUiLCJpbnRhbmNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiTGVhcm5pbmdNb2R1bGUiLCJnZXQiLCJpZCIsInJlc3BvbnNlIiwibW9kdWxlSWQiLCJvd25lcklkIiwiZW50aXR5Iiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwib25Vc2VyQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsInNob3ciLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZvcm0iLCJvbkNsaWNrIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VSTCIsIm1lIiwibGFiZWwiLCJSYWRpb0J1dHRvbiIsImNoZWNrZWQiLCJvbkNoYW5nZSIsIm9yZ2FuaXphdGlvbiIsIkxpc3QiLCJpdGVtcyIsIm9yZ2FuaXphdGlvbnMiLCJjb250cm9sIiwiSXRlbSIsInNwZWNzIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwiYWN0aW9ucyIsImNvbnRpbnVlIiwicHJvcHMiLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJhbHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxHQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxXQUFBLEdBQUFMLE9BQUE7VUFFQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBTyxNQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxlQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxLQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxNQUFBLEdBQUFWLE9BQUE7VUFFQSxJQUFBVyxnQkFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBRU87VUFBVSxTQUFVYSxlQUFlQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsT0FBTztZQUFFQyxJQUFJLEdBQUc7VUFBUSxDQUFFO1lBQzVFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR25CLEtBQUssQ0FBQ29CLFFBQVEsRUFBTztZQUNyRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUd0QixLQUFLLENBQUNvQixRQUFRLEVBQUU7WUFFMUMsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHeEIsS0FBSyxDQUFDb0IsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNLLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQUcsSUFBQWxC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