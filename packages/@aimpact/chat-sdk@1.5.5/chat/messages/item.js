System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/shared/hooks", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "react@18.3.1", "dayjs@1.11.13"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
  _export("Message", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactChatSdk155Core) {
      dependency_1 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_2 = _aimpactChatSdk155SharedHooks;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_3 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_react) {
      dependency_4 = _react;
    }, function (_dayjs) {
      dependency_5 = _dayjs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.4"], ["@google-cloud/storage", "7.17.1"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.6.2"], ["@tiptap/extension-code-block", "3.6.2"], ["@tiptap/extension-horizontal-rule", "3.6.2"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.6.2"], ["@tiptap/extension-task-list", "3.6.2"], ["@tiptap/extension-underline", "3.6.2"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.6.2"], ["@tiptap/starter-kit", "3.6.2"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dompurify", "3.2.7"], ["firebase", "11.10.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.22"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.10"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.1"], ["wavesurfer.js", "7.10.3"], ["zod", "3.25.76"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.25"], ["@types/react-dom", "18.3.7"], ["typescript", "5.9.3"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/core', dependency_1], ['@aimpact/chat-sdk/shared/hooks', dependency_2], ['@aimpact/chat-sdk/widgets/markdown', dependency_3], ['react', dependency_4], ['dayjs', dependency_5]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4281974006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var React = require("react");
          /*bundle*/
          function Message({
            message,
            setUpdateScroll
          }) {
            (0, _hooks.useStore)(message, ['streaming', 'change', 'transcribing.changed', 'metadata.started']);
            React.useEffect(() => {
              setUpdateScroll(performance.now());
              // streaming text animation
            }, [message.content, setUpdateScroll]);
            const renderContent = () => {
              if (!message.streaming || message.metaDataStarted) {
                return React.createElement(_markdown.Markdown, {
                  content: message.content
                });
              }
              function highlightLastWord(str) {
                if (!str || typeof str !== 'string') return {
                  base: '',
                  lastWord: '...'
                };
                // Return the full content as base without any modification
                return {
                  base: str,
                  lastWord: '...'
                };
              }
              const {
                base,
                lastWord
              } = highlightLastWord(message.content);
              return React.createElement(React.Fragment, null, React.createElement("div", {
                className: "message__data"
              }, !message.content && (message.streaming || message.transcribing) ? React.createElement("div", {
                className: "message__data__loading"
              }, React.createElement("div", {
                className: "loader"
              })) : React.createElement(React.Fragment, null, base && React.createElement(_markdown.Markdown, {
                content: base,
                inline: true
              }), React.createElement("span", {
                className: "streaming-content"
              }, lastWord))));
            };
            return React.createElement(React.Fragment, null, renderContent());
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3592763005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Message') && _export("Message", Message = require ? require('./index').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX21hcmtkb3duIiwiUmVhY3QiLCJNZXNzYWdlIiwibWVzc2FnZSIsInNldFVwZGF0ZVNjcm9sbCIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb250ZW50IiwicmVuZGVyQ29udGVudCIsInN0cmVhbWluZyIsIm1ldGFEYXRhU3RhcnRlZCIsImNyZWF0ZUVsZW1lbnQiLCJNYXJrZG93biIsImhpZ2hsaWdodExhc3RXb3JkIiwic3RyIiwiYmFzZSIsImxhc3RXb3JkIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0cmFuc2NyaWJpbmciLCJpbmxpbmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUFVRyxPQUFPQSxDQUFDO1lBQ2xDQyxPQUFPO1lBQ1BDO1VBQWUsQ0FLZjtZQUNBLElBQUFOLE1BQUEsQ0FBQU8sUUFBUSxFQUFDRixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFdEZGLEtBQUssQ0FBQ0ssU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLGVBQWUsQ0FBQ0csV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztjQUVsQztZQUNELENBQUMsRUFBRSxDQUFDTCxPQUFPLENBQUNNLE9BQU8sRUFBRUwsZUFBZSxDQUFDLENBQUM7WUFFdEMsTUFBTU0sYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSSxDQUFDUCxPQUFPLENBQUNRLFNBQVMsSUFBSVIsT0FBTyxDQUFDUyxlQUFlLEVBQUU7Z0JBQ2xELE9BQU9YLEtBQUEsQ0FBQVksYUFBQSxDQUFDYixTQUFBLENBQUFjLFFBQVE7a0JBQUNMLE9BQU8sRUFBRU4sT0FBTyxDQUFDTTtnQkFBTyxFQUFJOztjQUc5QyxTQUFTTSxpQkFBaUJBLENBQUNDLEdBQUc7Z0JBQzdCLElBQUksQ0FBQ0EsR0FBRyxJQUFJLE9BQU9BLEdBQUcsS0FBSyxRQUFRLEVBQUUsT0FBTztrQkFBRUMsSUFBSSxFQUFFLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBSyxDQUFFO2dCQUV6RTtnQkFDQSxPQUFPO2tCQUFFRCxJQUFJLEVBQUVELEdBQUc7a0JBQUVFLFFBQVEsRUFBRTtnQkFBSyxDQUFFO2NBQ3RDO2NBRUEsTUFBTTtnQkFBRUQsSUFBSTtnQkFBRUM7Y0FBUSxDQUFFLEdBQUdILGlCQUFpQixDQUFDWixPQUFPLENBQUNNLE9BQU8sQ0FBQztjQUU3RCxPQUNDUixLQUFBLENBQUFZLGFBQUEsQ0FBQVosS0FBQSxDQUFBa0IsUUFBQSxRQUNDbEIsS0FBQSxDQUFBWSxhQUFBO2dCQUFLTyxTQUFTLEVBQUM7Y0FBZSxHQUM1QixDQUFDakIsT0FBTyxDQUFDTSxPQUFPLEtBQUtOLE9BQU8sQ0FBQ1EsU0FBUyxJQUFJUixPQUFPLENBQUNrQixZQUFZLENBQUMsR0FDL0RwQixLQUFBLENBQUFZLGFBQUE7Z0JBQUtPLFNBQVMsRUFBQztjQUF3QixHQUN0Q25CLEtBQUEsQ0FBQVksYUFBQTtnQkFBS08sU0FBUyxFQUFDO2NBQVEsRUFBRyxDQUNyQixHQUVObkIsS0FBQSxDQUFBWSxhQUFBLENBQUFaLEtBQUEsQ0FBQWtCLFFBQUEsUUFDRUYsSUFBSSxJQUFJaEIsS0FBQSxDQUFBWSxhQUFBLENBQUNiLFNBQUEsQ0FBQWMsUUFBUTtnQkFBQ0wsT0FBTyxFQUFFUSxJQUFJO2dCQUFFSyxNQUFNO2NBQUEsRUFBRyxFQUMzQ3JCLEtBQUEsQ0FBQVksYUFBQTtnQkFBTU8sU0FBUyxFQUFDO2NBQW1CLEdBQUVGLFFBQVEsQ0FBUSxDQUV0RCxDQUNJLENBQ0o7WUFFTCxDQUFDO1lBRUQsT0FBT2pCLEtBQUEsQ0FBQVksYUFBQSxDQUFBWixLQUFBLENBQUFrQixRQUFBLFFBQUdULGFBQWEsRUFBRSxDQUFJO1VBQzlCOzs7Ozs7Ozs7OztVQ3ZEQTs7VUFFQWEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119