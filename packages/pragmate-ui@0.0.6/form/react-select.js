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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.30"]]);
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
        hash: 1189892254,
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
            let properties = {
              ...props
            };
            delete properties.onChange;
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
            const onChange = ({
              label,
              value
            }) => {
              if (!props.onChange) return;
              props.onChange({
                target: {
                  value,
                  name: props.name
                },
                currentTarget: {
                  value,
                  name: props.name
                }
              });
            };
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, props.label && _react.default.createElement("label", null, props.label), _react.default.createElement(_reactSelect.default, {
              classNamePrefix: 'pui-react-select',
              onChange: onChange,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX29ic2VydmVyIiwiUmVhY3RTZWxlY3QiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJvbkNoYW5nZSIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJob3N0IiwiY3VycmVudCIsImdldFJvb3ROb2RlIiwiY29uc29sZSIsIndhcm4iLCJoZWFkU3R5bGVzIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydCIsIm5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJIVE1MU3R5bGVFbGVtZW50IiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZU9ic2VydmVyIiwiU3R5bGVPYnNlcnZlciIsImNhbGxiYWNrIiwidGFyZ2V0Tm9kZSIsInN0YXJ0T2JzZXJ2aW5nIiwic3RvcE9ic2VydmluZyIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJuYW1lIiwiY3VycmVudFRhcmdldCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVQcmVmaXgiLCJvYnNlcnZlciIsImNvbnN0cnVjdG9yIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL29ic2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFlBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFF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