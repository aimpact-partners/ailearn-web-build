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
        hash: 2984740554,
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
            let value = props.options.find(item => item.value === props.value);
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, _react.default.createElement(_reactSelect.default, {
              classNamePrefix: 'pui-react-select',
              ...properties,
              value: value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX29ic2VydmVyIiwiUmVhY3RTZWxlY3QiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaG9zdCIsImN1cnJlbnQiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnNlcnQiLCJub2RlcyIsImZvckVhY2giLCJub2RlIiwiSFRNTFN0eWxlRWxlbWVudCIsImNsb25lZFN0eWxlIiwiY2xvbmVOb2RlIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwic3R5bGVPYnNlcnZlciIsIlN0eWxlT2JzZXJ2ZXIiLCJjYWxsYmFjayIsInRhcmdldE5vZGUiLCJzdGFydE9ic2VydmluZyIsInN0b3BPYnNlcnZpbmciLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmaW5kIiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVQcmVmaXgiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL29ic2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsU0FDUkcsV0FBV0EsQ0FBQ0MsS0FBSztZ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