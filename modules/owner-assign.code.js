System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/list", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/image"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, OwnerAssignForm, __beyond_pkg, hmr;
  _export("OwnerAssignForm", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_2 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2List) {
      dependency_3 = _pragmateUi100Beta2List;
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_5 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_pragmateUi100Beta2Components) {
      dependency_6 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_7 = _pragmateUi100Beta2Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Form) {
      dependency_10 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Image) {
      dependency_11 = _pragmateUi100Beta2Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/owner-assign",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/modal', dependency_2], ['pragmate-ui/list', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/icons', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/image', dependency_11]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 486181768,
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
                console.log(40, selected, _beyond_context.module);
                if (!selected) return;
                setFetching(true);
                //@ts-ignore
                const response = await item.clone({
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
        hash: 904383467,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          const Item = props => {
            console.log(20, props);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfbGlzdCIsIl9zZXNzaW9uIiwiX3VpIiwiX2NvbXBvbmVudHMiLCJfcm91dGluZyIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9mb3JtIiwiX2ltYWdlIiwiX2l0ZW0iLCJPd25lckFzc2lnbkZvcm0iLCJpdGVtIiwib25DbG9zZSIsInR5cGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiY3JlYXRlRWxlbWVudCIsIlByb2Nlc3NDb250YWluZXIiLCJjbG9uZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1vZHVsZUlkIiwiaWQiLCJvd25lcklkIiwiZW50aXR5Iiwic3RhdHVzIiwiZXJyb3JzIiwiZmFpbGVkIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImRhdGEiLCJvblVzZXJDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwic2hvdyIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiRm9ybSIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsInBob3RvVVJMIiwibWUiLCJsYWJlbCIsIlJhZGlvQnV0dG9uIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwib3JnYW5pemF0aW9uIiwiTGlzdCIsIml0ZW1zIiwib3JnYW5pemF0aW9ucyIsImNvbnRyb2wiLCJJdGVtIiwic3BlY3MiLCJCdXR0b24iLCJ2YXJpYW50IiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiY29udGludWUiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsImFsdCIsIm5hbWUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksR0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssV0FBQSxHQUFBTCxPQUFBO1VBRUEsSUFBQU0sUUFBQSxHQUFBTixPQUFBO1VBRUEsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsZUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsTUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsS0FBQSxHQUFBWCxPQUFBO1VBRU87VUFBVSxTQUFVWSxlQUFlQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsT0FBTztZQUFFQyxJQUFJLEdBQUc7VUFBUSxDQUFFO1lBQzVFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2xCLEtBQUssQ0FBQ21CLFFBQVEsRUFBTztZQUNyRCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdyQixLQUFLLENBQUNtQixRQUFRLEVBQUU7WUFFMUMsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdkIsS0FBSyxDQUFDbUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNLLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdBQUcsSUFBQWpCLE1BQUEsQ0FBQWtCLFFBQVEsRUFBQ2pCLGVBQUEsQ0FBQWtCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBRXRELElBQUksQ0FBQ0osVUFBVSxFQUFFLE9BQU94QixLQUFB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