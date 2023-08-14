System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prism-react-renderer@1.3.5", "pragmate-ui@0.0.36/toast", "pragmate-ui@0.0.36/tabs"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, ImplementationResult, __beyond_pkg, hmr;
  _export("ImplementationResult", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_prismReactRenderer2) {
      dependency_4 = _prismReactRenderer2;
    }, function (_pragmateUi0036Toast) {
      dependency_5 = _pragmateUi0036Toast;
    }, function (_pragmateUi0036Tabs) {
      dependency_6 = _pragmateUi0036Tabs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/implementation-result"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prism-react-renderer', dependency_4], ['pragmate-ui/toast', dependency_5], ['pragmate-ui/tabs', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/implementation-result');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./code
      **********************/
      ims.set('./code', {
        hash: 3784215103,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CopyableImplementation = CopyableImplementation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _prismReactRenderer = require("prism-react-renderer");
          var _toast = require("pragmate-ui/toast");
          function CopyableImplementation({
            code
          }) {
            function copy() {
              navigator.clipboard.writeText(code);
              _toast.toast.success("Copied implementation");
            }
            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: code,
              language: "jsx"
            }, ({
              className,
              style,
              tokens,
              getLineProps,
              getTokenProps
            }) => React.createElement("code", {
              className: className,
              style: style
            }, tokens.map((line, i) => React.createElement("div", {
              ...getLineProps({
                line,
                key: i
              })
            }, line.map((token, key) => React.createElement("span", {
              ...getTokenProps({
                token,
                key
              })
            }))))))), React.createElement(_icons.IconButton, {
              icon: "copy",
              onClick: copy,
              className: "copy-button"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./view
      **********************/

      ims.set('./view', {
        hash: 2542675867,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImplementationResult = ImplementationResult;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _icons = require("pragmate-ui/icons");
          var _code = require("./code");
          /*bundle*/
          function ImplementationResult({
            code,
            children
          }) {
            const [tab, setTab] = _react.default.useState(0);
            return _react.default.createElement(_tabs.TabsContainer, {
              selected: tab
            }, _react.default.createElement(_tabs.Tabs, {
              selected: tab
            }, _react.default.createElement(_icons.IconButton, {
              "data-tooltip": "Result",
              className: "tooltip",
              icon: "result",
              onClick: () => setTab(0)
            }), _react.default.createElement(_icons.IconButton, {
              "data-tooltip": "Code",
              className: "tooltip",
              icon: "code",
              onClick: () => setTab(1)
            })), _react.default.createElement(_tabs.TabsContent, null, children, _react.default.createElement(_code.CopyableImplementation, {
              code: code
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./view",
        "from": "ImplementationResult",
        "name": "ImplementationResult"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ImplementationResult') && _export("ImplementationResult", ImplementationResult = require ? require('./view').ImplementationResult : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcHJpc21SZWFjdFJlbmRlcmVyIiwiX3RvYXN0IiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsImNvZGUiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJkZWZhdWx0UHJvcHMiLCJsYW5ndWFnZSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsIm1hcCIsImxpbmUiLCJpIiwia2V5IiwidG9rZW4iLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJfcmVhY3QiLCJfdGFicyIsIl9jb2RlIiwiSW1wbGVtZW50YXRpb25SZXN1bHQiLCJjaGlsZHJlbiIsInRhYiIsInNldFRhYiIsInVzZVN0YXRlIiwiVGFic0NvbnRhaW5lciIsInNlbGVjdGVkIiwiVGFicyIsIlRhYnNDb250ZW50Il0sInNvdXJjZXMiOlsiL2NvZGUvdHMvY29kZS50c3giLCIvY29kZS90cy92aWV3LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxtQkFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ00sU0FBVUksc0JBQXNCQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUM3QyxTQUFTQyxJQUFJQSxDQUFBO2NBQ1hDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQztjQUNuQ0YsTUFBQSxDQUFBTyxLQUFLLENBQUNDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztZQUN4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