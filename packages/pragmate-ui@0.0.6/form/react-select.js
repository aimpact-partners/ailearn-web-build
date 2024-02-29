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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@beyond-js/reactive", "1.1.6"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.2.37"], ["@types/react-dom", "18.2.15"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3428280965,
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
            const onChange = event => {
              if (!props.onChange) return;
              props.onChange({
                target: {
                  ...event
                },
                currentTarget: {
                  ...event
                }
              });
            };
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, _react.default.createElement(_reactSelect.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX29ic2VydmVyIiwiUmVhY3RTZWxlY3QiLCJwcm9wcyIsInByb3BlcnRpZXMiLCJvbkNoYW5nZSIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJob3N0IiwiY3VycmVudCIsImdldFJvb3ROb2RlIiwiY29uc29sZSIsIndhcm4iLCJoZWFkU3R5bGVzIiwiZG9jdW1lbnQiLCJoZWFkIiwicXVlcnlTZWxlY3RvckFsbCIsImluc2VydCIsIm5vZGVzIiwiZm9yRWFjaCIsIm5vZGUiLCJIVE1MU3R5bGVFbGVtZW50IiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZU9ic2VydmVyIiwiU3R5bGVPYnNlcnZlciIsImNhbGxiYWNrIiwidGFyZ2V0Tm9kZSIsInN0YXJ0T2JzZXJ2aW5nIiwic3RvcE9ic2VydmluZyIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByZWZpeCIsIm9ic2VydmVyIiwiY29uc3RydWN0b3IiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJ0eXBlIiwiYWRkZWROb2RlcyIsImNvbmZpZyIsImNoaWxkTGlzdCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxH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