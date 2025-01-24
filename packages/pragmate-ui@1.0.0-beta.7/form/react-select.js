System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4036315118,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _useStyles = require("./use-styles");
          var _mobileSelect = require("./mobile-select");
          /*bundle*/ /**
                      * The component is deprecated is 'select' component instead.
                      * @deprecated
                      * @param props
                      * @returns
                      */
          function ReactSelect(props) {
            let properties = {
              ...props
            };
            let {
              name
            } = props;
            const {
              ref
            } = (0, _useStyles.useStyles)();
            delete properties.onChange;
            return _react.default.createElement(_mobileSelect.MobileSelect, {
              ...props
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./mobile-select
      *******************************/

      ims.set('./mobile-select', {
        hash: 1302234196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileSelect = MobileSelect;
          var _react = require("react");
          function MobileSelect({
            options,
            ...props
          }) {
            const output = options.map(({
              value,
              label
            }, index) => _react.default.createElement("option", {
              title: label,
              key: `${value}-${index}`,
              value: value
            }, label));
            const attrs = {
              ...props
            };
            if (props.isDisabled) attrs.disabled = true;
            ['isDisabled', 'defaultOption', 'key'].forEach(item => delete attrs[item]);
            return _react.default.createElement("div", {
              className: "pui-mobile-select__container"
            }, _react.default.createElement("select", {
              title: "select",
              ...attrs,
              className: "pui-mobile-select"
            }, props.placeholder && _react.default.createElement("option", {
              value: ""
            }, props.placeholder), output));
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

      /****************************
      INTERNAL MODULE: ./use-styles
      ****************************/

      ims.set('./use-styles', {
        hash: 2902897892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStyles = useStyles;
          var _react = require("react");
          var _observer = require("./observer");
          function useStyles() {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!ref.current) return;
              const host = ref.current.getRootNode()?.host;
              if (!host) console.warn('is not inside a web component');
              if (!host.shadowRoot.insertedStyles) host.shadowRoot.insertedStyles = new Set();
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              // the callback name is used because it is the property parameter of the StyleObserver class
              const callback = nodes => {
                const insertedStyles = new Set();
                nodes.forEach(node => {
                  const styleContent = node?.textContent;
                  if (!(node instanceof HTMLStyleElement) || insertedStyles.has(styleContent)) return;
                  const clonedStyle = node.cloneNode(true);
                  host.shadowRoot.appendChild(clonedStyle);
                  insertedStyles.add(styleContent);
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              callback(headStyles);
              return () => styleObserver.stopObserving();
            }, [ref.current]);
            return {
              ref
            };
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZVN0eWxlcyIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTW9iaWxlU2VsZWN0Iiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsInZhbHVlIiwibGFiZWwiLCJpbmRleCIsInRpdGxlIiwia2V5IiwiYXR0cnMiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwiU3R5bGVPYnNlcnZlciIsIm9ic2VydmVyIiwiY29uc3RydWN0b3IiLCJjYWxsYmFjayIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJtdXRhdGlvbiIsInR5cGUiLCJhZGRlZE5vZGVzIiwic3RhcnRPYnNlcnZpbmciLCJ0YXJnZXROb2RlIiwiY29uZmlnIiwiY2hpbGRMaXN0Iiwib2JzZXJ2ZSIsInN0b3BPYnNlcnZpbmciLCJkaXNjb25uZWN0IiwiZXhwb3J0cyIsIl9vYnNlcnZlciIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJob3N0IiwiZ2V0Um9vdE5vZGUiLCJjb25zb2xlIiwid2FybiIsInNoYWRvd1Jvb3QiLCJpbnNlcnRlZFN0eWxlcyIsIlNldCIsImhlYWRTdHlsZXMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZXMiLCJub2RlIiwic3R5bGVDb250ZW50IiwidGV4dENvbnRlbnQiLCJIVE1MU3R5bGVFbGVtZW50IiwiaGFzIiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImFkZCIsInN0eWxlT2JzZXJ2ZXIiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL21vYmlsZS1zZWxlY3QudHN4IiwiL3RzL29ic2VydmVyLnRz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