System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, TagsInput, __beyond_pkg, hmr;
  _export("TagsInput", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_radixUiReactIcons) {
      dependency_2 = _radixUiReactIcons;
    }, function (_pragmateUi108Components) {
      dependency_3 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Styles) {
      dependency_4 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/tags-input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@radix-ui/react-icons', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/tags-input');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmVhY3RJY29ucyIsIl9jb21wb25lbnRzIiwiVGFnc0lucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY3JlYXRlRXZlbnQiLCJ0YWdzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUlucHV0S2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnIiwibGVuZ3RoIiwicmVtb3ZlVGFnIiwidHJpbW1lZFZhbHVlIiwidHJpbSIsImluY2x1ZGVzIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlUmVtb3ZlQWxsIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInRhZyIsInR5cGUiLCJvbkNsaWNrIiwiQ3Jvc3MySWNvbiIsInJlZiIsIm9uS2V5RG93biIsIm9uQmx1ciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzaXplIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFjTztVQUFVLFNBQVVHLFNBQVNBLENBQUM7WUFDcENDLEtBQUssR0FBRyxFQUFFO1lBQ1ZDLFFBQVE7WUFDUkMsSUFBSTtZQUNKQyxXQUFXLEdBQUcsYUFBYTtZQUMzQkMsUUFBUSxHQUFHLEtBQUs7WUFD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System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, TagsInput, __beyond_pkg, hmr;
  _export("TagsInput", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }, function (_radixUiReactIcons) {
      dependency_2 = _radixUiReactIcons;
    }, function (_pragmateUi108Components) {
      dependency_3 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Styles) {
      dependency_4 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/tags-input"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@radix-ui/react-icons', dependency_2], ['pragmate-ui/components', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/tags-input');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmVhY3RJY29ucyIsIl9jb21wb25lbnRzIiwiVGFnc0lucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsImlucHV0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY3JlYXRlRXZlbnQiLCJ0YWdzIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUlucHV0S2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiYWRkVGFnIiwibGVuZ3RoIiwicmVtb3ZlVGFnIiwidHJpbW1lZFZhbHVlIiwidHJpbSIsImluY2x1ZGVzIiwibmV3VGFncyIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwiaGFuZGxlSW5wdXRCbHVyIiwiaGFuZGxlUmVtb3ZlQWxsIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInRhZyIsInR5cGUiLCJvbkNsaWNrIiwiQ3Jvc3MySWNvbiIsInJlZiIsIm9uS2V5RG93biIsIm9uQmx1ciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzaXplIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxXQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFjTztVQUFVLFNBQVVHLFNBQVNBLENBQUM7WUFDcENDLEtBQUssR0FBRyxFQUFFO1lBQ1ZDLFFBQVE7WUFDUkMsSUFBSTtZQUNKQyxXQUFXLEdBQUcsYUFBYTtZQUMzQkMsUUFBUSxHQUFHLEtBQUs7WUFD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