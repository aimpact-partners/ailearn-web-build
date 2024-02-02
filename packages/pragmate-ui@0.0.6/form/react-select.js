System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "react-select@5.8.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_reactSelect2) {
      dependency_3 = _reactSelect2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 685704062,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _reactSelect = require("react-select");
          var _observer = require("./observer");
          /*bundle*/
          function ReactSelect(props) {
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const host = ref.current.getRootNode()?.host;
              if (!host) {
                console.warn('is not inside a web component');
              }
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              const insert = nodes => {
                nodes.forEach(node => {
                  if (node instanceof HTMLStyleElement) {
                    // Handle the new style element
                    const clonedStyle = node.cloneNode(true);
                    host.shadowRoot.appendChild(clonedStyle);
                  }
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback: insert
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              insert(headStyles);
              return () => styleObserver.stopObserving();
            }, []);
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, _react.default.createElement(_reactSelect.default, {
              classNamePrefix: 'pui-react-select',
              ...properties
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3933443758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            constructor({
              callback
            }) {
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  callback(mutation.addedNodes);
                });
              });
            }
            startObserving(targetNode) {
              if (!targetNode) return;
              const config = {
                childList: true
              };
              this.observer.observe(targetNode, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactSelect",
        "name": "ReactSelect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactSelect') && _export("ReactSelect", ReactSelect = require ? require('./index').ReactSelect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX29ic2VydmVyIiwiUmVhY3RTZWxlY3QiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaG9zdCIsImN1cnJlbnQiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnNlcnQiLCJub2RlcyIsImZvckVhY2giLCJub2RlIiwiSFRNTFN0eWxlRWxlbWVudCIsImNsb25lZFN0eWxlIiwiY2xvbmVOb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwic3R5bGVPYnNlcnZlciIsIlN0eWxlT2JzZXJ2ZXIiLCJjYWxsYmFjayIsInRhcmdldE5vZGUiLCJzdGFydE9ic2VydmluZyIsInN0b3BPYnNlcnZpbmciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lUHJlZml4Iiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsInR5cGUiLCJhZGRlZE5vZGVzIiwiY29uZmlnIiwiY2hpbGRMaXN0Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90cy9vYnNlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxTQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLFNBQ1JHLFdBQVdBLENBQUNDLEtBQUs7WUFDekIsTUFBTUMsVUFBVSxHQUFHO2NBQUUsR0FBR0Q7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