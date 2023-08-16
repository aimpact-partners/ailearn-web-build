System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prism-react-renderer@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CopyableImplementation, __beyond_pkg, hmr;
  _export("CopyableImplementation", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_prismReactRenderer2) {
      dependency_4 = _prismReactRenderer2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/copyable-implementation"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prism-react-renderer', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/copyable-implementation');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1373727334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CopyableImplementation = CopyableImplementation;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          var _prismReactRenderer = require("prism-react-renderer");
          /*bundle*/ //import { toast } from 'pragmate-ui/toast';

          function CopyableImplementation({
            children,
            language = "jsx"
          }) {
            function copy() {
              navigator.clipboard.writeText(children);
              //toast.success('Copied implementation');
            }

            return React.createElement("div", {
              className: "copyable-content"
            }, React.createElement("div", {
              className: "code"
            }, React.createElement(_prismReactRenderer.default, {
              ..._prismReactRenderer.defaultProps,
              code: children,
              language: language
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
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "CopyableImplementation",
        "name": "CopyableImplementation"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CopyableImplementation') && _export("CopyableImplementation", CopyableImplementation = require ? require('./index').CopyableImplementation : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcHJpc21SZWFjdFJlbmRlcmVyIiwiQ29weWFibGVJbXBsZW1lbnRhdGlvbiIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJjb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJkZWZhdWx0UHJvcHMiLCJjb2RlIiwic3R5bGUiLCJ0b2tlbnMiLCJnZXRMaW5lUHJvcHMiLCJnZXRUb2tlblByb3BzIiwibWFwIiwibGluZSIsImkiLCJrZXkiLCJ0b2tlbiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VzIjpbIi9jb2RlL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxtQkFBQSxHQUFBRixPQUFBO1VBTU8sV0FSUDs7VUFRaUIsU0FBVUcsc0JBQXNCQSxDQUFDO1lBQ2hEQyxRQUFRO1lBQ1JDLFFBQVEsR0FBRztVQUFLLENBQ1Y7WUFDTixTQUFTQyxJQUFJQSxDQUFBO2NBQ1hDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUNMLFFBQVEsQ0FBQztjQUN2QztZQUNGOztZQUVBLE9BQ0VMLEtBQUEsQ0FBQVcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDL0JaLEtBQUEsQ0FBQVcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTSxHQUNuQlosS0FBQSxDQUFBVyxhQUFBLENBQUNSLG1CQUFBLENBQUFVLE9BQVM7Y0FBQSxHQUFLVixtQkFBQSxDQUFBVyxZQUFZO2NBQUVDLElBQUksRUFBRVYsUUFBUTtjQUFFQyxRQUFRLEVBQUVBO1lBQVEsR0FDNUQsQ0FBQztjQUFFTSxTQUFTO2NBQUVJLEtBQUs7Y0FBRUMsTUFBTTtjQUFFQyxZQUFZO2NBQUVDO1lBQWEsQ0FBRSxLQUN6RG5CLEtBQUEsQ0FBQVcsYUFBQTtjQUFNQyxTQUFTLEVBQUVBLFNBQVM7Y0FBRUksS0FBSyxFQUFFQTtZQUFLLEdBQ3JDQyxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLENBQUMsS0FDbEJ0QixLQUFBLENBQUFXLGFBQUE7Y0FBQSxHQUFTTyxZQUFZLENBQUM7Z0JBQUVHLElBQUk7Z0JBQUVFLEdBQUcsRUFBRUQ7Y0FBQyxDQUFFO1lBQUMsR0FDcENELElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUNJLEtBQUssRUFBRUQsR0FBRyxLQUNuQnZCLEtBQUEsQ0FBQVcsYUFBQTtjQUFBLEdBQVVRLGFBQWEsQ0FBQztnQkFBRUssS0FBSztnQkFBRUQ7Y0FBRyxDQUFFO1lBQUMsRUFDeEMsQ0FBQyxDQUVMLENBQUMsQ0FFTCxDQUNTLENBQ1IsRUFDTnZCLEtBQUEsQ0FBQVcsYUFBQSxDQUFDVCxNQUFBLENBQUF1QixVQUFVO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRXBCLElBQUk7Y0FBRUssU0FBUyxFQUFDO1lBQWEsRUFBRyxDQUM3RDtVQUVWIn0=