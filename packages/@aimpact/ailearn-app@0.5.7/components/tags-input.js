System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.6/components", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, TagsInput, __beyond_pkg, hmr;
  _export("TagsInput", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_radixUiReactIcons) {
      dependency_2 = _radixUiReactIcons;
    }, function (_pragmateUi106Components) {
      dependency_3 = _pragmateUi106Components;
    }, function (_beyondJsKernel0112Styles) {
      dependency_4 = _beyondJsKernel0112Styles;
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
          "vspecifier": "@aimpact/ailearn-app@0.5.7/components/tags-input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@radix-ui/react-icons', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/components/tags-input');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3261782282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TagsInput = TagsInput;
          var React = require("react");
          var _reactIcons = require("@radix-ui/react-icons");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function TagsInput({
            value = [],
            onChange,
            name,
            placeholder = 'Add tags...',
            disabled = false,
            className = ''
          }) {
            const [inputValue, setInputValue] = React.useState('');
            const inputRef = React.useRef(null);
            // Ensure inputValue is cleared when value changes externally
            React.useEffect(() => {
              setInputValue('');
            }, [value]);
            const handleInputChange = e => {
              setInputValue(e.target.value);
            };
            const createEvent = tags => ({
              target: {
                name,
                value: tags
              },
              currentTarget: {
                name,
                value: tags
              }
            });
            const handleInputKeyDown = e => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addTag();
              } else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
                removeTag(value.length - 1);
              }
            };
            const addTag = () => {
              const trimmedValue = inputValue.trim();
              if (trimmedValue && !value.includes(trimmedValue)) {
                const newTags = [...value, trimmedValue];
                console.log('TagsInput: Adding tag, new tags:', newTags);
                onChange(createEvent(newTags));
                setInputValue('');
              }
            };
            const removeTag = index => {
              const newTags = value.filter((_, i) => i !== index);
              console.log('TagsInput: Removing tag at index', index, 'new tags:', newTags);
              onChange(createEvent(newTags));
            };
            const handleInputBlur = () => {
              if (inputValue.trim()) {
                addTag();
              }
            };
            const handleRemoveAll = () => {
              console.log('TagsInput: Clearing all tags');
              onChange(createEvent([]));
              setInputValue('');
            };
            return React.createElement("div", {
              className: `tags-input ${className}`
            }, React.createElement("div", {
              className: "tags-input__container"
            }, value.map((tag, index) => React.createElement("span", {
              key: `${tag}-${index}`,
              className: "tags-input__tag"
            }, tag, React.createElement("button", {
              type: "button",
              className: "tags-input__remove",
              onClick: () => removeTag(index),
              disabled: disabled,
              "aria-label": `Remove tag: ${tag}`
            }, React.createElement(_reactIcons.Cross2Icon, null)))), React.createElement("input", {
              ref: inputRef,
              type: "text",
              value: inputValue,
              onChange: handleInputChange,
              onKeyDown: handleInputKeyDown,
              onBlur: handleInputBlur,
              placeholder: value.length === 0 ? placeholder : 'Add another tag...',
              disabled: disabled,
              className: "tags-input__input"
            })), value.length > 0 && React.createElement("div", {
              className: "tags-input__actions"
            }, React.createElement(_components.Button, {
              type: "button",
              variant: "text",
              size: "small",
              onClick: handleRemoveAll,
              disabled: disabled,
              className: "tags-input__clear-all"
            }, "Clear all")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "TagsInput",
        "name": "TagsInput"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TagsInput') && _export("TagsInput", TagsInput = require ? require('./index').TagsInput : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmVhY3RJY29ucyIsIl9jb21wb25lbnRzIiwiVGFnc0lucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY3JlYXRlRXZlbnQiLCJ0YWdzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUlucHV0S2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnIiwibGVuZ3RoIiwicmVtb3ZlVGFnIiwidHJpbW1lZFZhbHVlIiwidHJpbSIsImluY2x1ZGVzIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlUmVtb3ZlQWxsIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInRhZyIsInR5cGUiLCJvbkNsaWNrIiwiQ3Jvc3MySWNvbiIsInJlZiIsIm9uS2V5RG93biIsIm9uQmx1ciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzaXplIl0sInNvdXJjZXMiOlsiLy90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsV0FBQSxHQUFBRixPQUFBO1VBY087VUFBVSxTQUFVRyxTQUFTQSxDQUFDO1lBQ3BDQyxLQUFLLEdBQUcsRUFBRTtZQUNWQyxRQUFRO1lBQ1JDLElBQUk7WUFDSkMsV0FBVyxHQUFHLGFBQWE7WUFDM0JDLFFBQVEsR0FBRyxLQUFLO1lB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