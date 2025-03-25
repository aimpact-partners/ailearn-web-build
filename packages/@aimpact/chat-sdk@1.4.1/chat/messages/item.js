System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@beyond-js/react-18-widgets@1.1.3/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
  _export("Message", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_3 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_4 = _beyondJsReact18Widgets113Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.12"], ["@beyond-js/http-suite", "0.0.1"], ["@aimpact/reactive", "0.0.1"], ["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["@google-cloud/storage", "7.15.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.3"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.2.0"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.8.8"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.1/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/widgets/markdown', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.4.1/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1328283235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/ // Confi
          function Message({
            message,
            setUpdateScroll
          }) {
            const [content, setContent] = React.useState(message.content ?? '');
            const [streaming, setStreaming] = React.useState(!!message?.streaming);
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
              setStreaming(!!message?.streaming);
              setUpdateScroll(performance.now());
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "message__content"
            }, React.createElement(_markdown.Markdown, {
              content: content
            }), streaming && React.createElement("div", null, React.createElement("div", {
              className: "loader"
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbWFya2Rvd24iLCJfaG9va3MiLCJNZXNzYWdlIiwibWVzc2FnZSIsInNldFVwZGF0ZVNjcm9sbCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzdHJlYW1pbmciLCJzZXRTdHJlYW1pbmciLCJ1c2VCaW5kZXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIk1hcmtkb3duIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBR08sV0FGUDtVQUVpQixTQUNSRyxPQUFPQSxDQUFDO1lBQUVDLE9BQU87WUFBRUM7VUFBZSxDQUEwQztZQUNwRixNQUFNLENBQUNDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDSixPQUFPLENBQUNFLE9BQU8sSUFBSSxFQUFFLENBQUM7WUFDbkUsTUFBTSxDQUFDRyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHWCxLQUFLLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUNKLE9BQU8sRUFBRUssU0FBUyxDQUFDO1lBQ3RFLElBQUFQLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUNQLE9BQU8sQ0FBQyxFQUFFLE1BQUs7Y0FDekJHLFVBQVUsQ0FBQ0gsT0FBTyxDQUFDRSxPQUFPLElBQUksRUFBRSxDQUFDO2NBQ2pDSSxZQUFZLENBQUMsQ0FBQyxDQUFDTixPQUFPLEVBQUVLLFNBQVMsQ0FBQztjQUNsQ0osZUFBZSxDQUFDTyxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGLE9BQ0NkLEtBQUEsQ0FBQWUsYUFBQSxDQUFBZixLQUFBLENBQUFnQixRQUFBLFFBQ0NoQixLQUFBLENBQUFlLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDakIsS0FBQSxDQUFBZSxhQUFBLENBQUNiLFNBQUEsQ0FBQWdCLFFBQVE7Y0FBQ1gsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDN0JHLFNBQVMsSUFDVFYsS0FBQSxDQUFBZSxhQUFBLGNBQ0NmLEtBQUEsQ0FBQWUsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBUSxFQUFHLENBRTNCLENBQ0ksQ0FDSjtVQUVMOzs7Ozs7Ozs7OztVQzNCQTs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119