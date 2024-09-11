System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.1.0/widgets/markdown", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
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
    }, function (_aimpactChatSdk110WidgetsMarkdown) {
      dependency_3 = _aimpactChatSdk110WidgetsMarkdown;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/widgets/markdown', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1590473588,
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
            message
          }) {
            const [content, setContent] = React.useState(message.content ?? '');
            const [streaming, setStreaming] = React.useState(!!message?.streaming);
            (0, _hooks.useBinder)([message], () => {
              setContent(message.content ?? '');
              setStreaming(!!message?.streaming);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbWFya2Rvd24iLCJfaG9va3MiLCJNZXNzYWdlIiwibWVzc2FnZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwidXNlU3RhdGUiLCJzdHJlYW1pbmciLCJzZXRTdHJlYW1pbmciLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJNYXJrZG93biIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUdPLFdBRlA7VUFFaUIsU0FDUkcsT0FBT0EsQ0FBQztZQUFFQztVQUFPLENBQW9CO1lBQzdDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUNILE9BQU8sQ0FBQ0MsT0FBTyxJQUFJLEVBQUUsQ0FBQztZQUNuRSxNQUFNLENBQUNHLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdWLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLENBQUMsQ0FBQ0gsT0FBTyxFQUFFSSxTQUFTLENBQUM7WUFDdEUsSUFBQU4sTUFBQSxDQUFBUSxTQUFTLEVBQUMsQ0FBQ04sT0FBTyxDQUFDLEVBQUUsTUFBSztjQUN6QkUsVUFBVSxDQUFDRixPQUFPLENBQUNDLE9BQU8sSUFBSSxFQUFFLENBQUM7Y0FDakNJLFlBQVksQ0FBQyxDQUFDLENBQUNMLE9BQU8sRUFBRUksU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUVGLE9BQ0NULEtBQUEsQ0FBQVksYUFBQSxDQUFBWixLQUFBLENBQUFhLFFBQUEsUUFDQ2IsS0FBQSxDQUFBWSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFrQixHQUNoQ2QsS0FBQSxDQUFBWSxhQUFBLENBQUNWLFNBQUEsQ0FBQWEsUUFBUTtjQUFDVCxPQUFPLEVBQUVBO1lBQU8sRUFBSSxFQUM3QkcsU0FBUyxJQUNUVCxLQUFBLENBQUFZLGFBQUEsY0FDQ1osS0FBQSxDQUFBWSxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFRLEVBQUcsQ0FFM0IsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7O1VDMUJBOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EifQ==