System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-sdk@1.2.0/entities/learning-modules", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/form", "pragmate-ui@1.0.6/image", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/modal", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, OwnerAssignForm, __beyond_pkg, hmr;
  _export("OwnerAssignForm", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_1 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnSdk120EntitiesLearningModules) {
      dependency_2 = _aimpactAilearnSdk120EntitiesLearningModules;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_4 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_5 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106Components) {
      dependency_6 = _pragmateUi106Components;
    }, function (_pragmateUi106Form) {
      dependency_7 = _pragmateUi106Form;
    }, function (_pragmateUi106Image) {
      dependency_8 = _pragmateUi106Image;
    }, function (_pragmateUi106List) {
      dependency_9 = _pragmateUi106List;
    }, function (_pragmateUi106Modal) {
      dependency_10 = _pragmateUi106Modal;
    }, function (_react) {
      dependency_11 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/modules/owner-assign",
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
        hash: 3268721657,
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
                const instance = item.constructor.name !== 'LearningModule' ? await _learningModules.LearningModule.get({
                  id: item.id,
                  type
                }) : item;
                const response = await instance.clone({
                  moduleId: item.id,
                  ownerId: selected.id,
                  entity: selected.entity,
                  type
                });
                if (!response.status) {
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
            }))), _session.sessionWrapper.user.organizations?.items?.length > 0 ? React.createElement(React.Fragment, null, React.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdWkiLCJyZXF1aXJlIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2ltYWdlIiwiX2xpc3QiLCJfbW9kYWwiLCJSZWFjdCIsIl9pdGVtIiwiT3duZXJBc3NpZ25Gb3JtIiwiaXRlbSIsIm9uQ2xvc2UiLCJ0eXBlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImNyZWF0ZUVsZW1lbnQiLCJQcm9jZXNzQ29udGFpbmVyIiwiY2xvbmUiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2V0IiwiaWQiLCJyZXNwb25zZSIsIm1vZHVsZUlkIiwib3duZXJJZCIsImVudGl0eSIsInN0YXR1cyIsImVycm9ycyIsImZhaWxlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJkYXRhIiwiY29uc29sZSIsIm9uVXNlckNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJzaG93IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGb3JtIiwib25DbGljayIsIkltYWdlIiwic3JjIiwicGhvdG9VUkwiLCJtZSIsImxhYmVsIiwiUmFkaW9CdXR0b24iLCJjaGVja2VkIiwib25DaGFuZ2UiLCJvcmdhbml6YXRpb25zIiwiaXRlbXMiLCJsZW5ndGgiLCJGcmFnbWVudCIsIm9yZ2FuaXphdGlvbiIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsInNwZWNzIiwiQnV0dG9uIiwidmFyaWFudCIsImRpc2FibGVkIiwiYWN0aW9ucyIsImNvbnRpbnVlIiwicHJvcHMiLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJhbHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy90cy9pbmRleC50c3giLCIvL3RzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxHQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxnQkFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssZUFBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sV0FBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sS0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsS0FBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsTUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsS0FBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBRU87VUFBVSxTQUFVYSxlQUFlQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsT0FBTztZQUFFQyxJQUFJLEdBQUc7VUFBUSxDQUFFO1lBQzVFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLEVBQU87WUFDckQsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVixLQUFLLENBQUNRLFFBQVEsRUFBRTtZQUUxQyxNQUFNLENBQUNHLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdaLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNLLFVBQVUsRUFBRUMsS0FBSyxDQUFDLEdB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