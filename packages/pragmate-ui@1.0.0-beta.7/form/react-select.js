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
        hash: 3068944485,
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
            let value = props.options.find(item => item.value === props.value);
            const onChange = ({
              label,
              value
            }) => {
              if (!props.onChange) return;
              const target = {
                value,
                name
              };
              props.onChange({
                target,
                currentTarget: {
                  ...target
                }
              });
            };
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
        hash: 912971144,
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
              className: 'pui-mobile-select__container'
            }, _react.default.createElement("select", {
              title: 'select',
              ...attrs,
              className: 'pui-mobile-select'
            }, props.placeholder && _react.default.createElement("option", {
              value: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZVN0eWxlcyIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2JpbGVTZWxlY3QiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwia2V5IiwiYXR0cnMiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIiwiX29ic2VydmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImhvc3QiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2hhZG93Um9vdCIsImluc2VydGVkU3R5bGVzIiwiU2V0IiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlcyIsIm5vZGUiLCJzdHlsZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJoYXMiLCJjbG9uZWRTdHlsZSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwic3R5bGVPYnNlcnZlciJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGFBQUEsR0FBQUYsT0FBQTtVQVFPLFdBTlA7Ozs7OztVQU1pQixTQUNSRyxXQUFXQSxDQUFDQyxLQUFLO1lBQ3pCLElBQUlDLFVBQVUsR0FBRztjQUFFLEdBQUdEO1lBQUssQ0FBRTtZQUM3QixJQUFJO2NBQUVFO1lBQUksQ0FBRSxHQUFHRixLQUFLO1lBQ3BCLE1BQU07Y0FBRUc7WUFBRyxDQUFFLEdBQUcsSUFBQU4sVUFBQSxDQUFBTyxTQUFTLEdBQUU7WUFDM0IsT0FBT0gsVUFBVSxDQUFDSSxRQUFRO1lBQzFCLElBQUlDLEtBQUssR0FBR04sS0FBSyxDQUFDTyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNILEtBQUssS0FBS04sS0FBSyxDQUFDTSxLQUFLLENBQUM7WUFFbEUsTUFBTUQsUUFBUSxHQUFHQSxDQUFDO2NBQUVLLEtBQUs7Y0FBRUo7WUFBSyxDQUFFLEtBQUk7Y0FDckMsSUFBSSxDQUFDTixLQUFLLENBQUNLLFFBQVEsRUFBRTtjQUNyQixNQUFNTSxNQUFNLEdBQUc7Z0JBQUVMLEtBQUs7Z0JBQUVKO2NBQUksQ0FBRTtjQUM5QkYsS0FBSyxDQUFDSyxRQUFRLENBQUM7Z0JBQUVNLE1BQU07Z0JBQUVDLGFBQWEsRUFBRTtrQkFBRSxHQUFHRDtnQkFBTTtjQUFFLENBQUUsQ0FBQztZQUN6RCxDQUFDO1lBRUQsT0FBT2hCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaEIsYUFBQSxDQUFBaUIsWUFBWTtjQUFBLEdBQUtmO1lBQUssRUFBSTtVQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBWU0sU0FBVW1CLFlBQVlBLENBQUM7WUFBRVIsT0FBTztZQUFFLEdBQUdQO1VBQUssQ0FBVztZQUMxRCxNQUFNZ0IsTUFBTSxHQUFHVCxPQUFPLENBQUNVLEdBQUcsQ0FBQyxDQUFDO2NBQUVYLEtBQUs7Y0FBRUk7WUFBSyxDQUFFLEVBQUVRLEtBQUssS0FDbER2QixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBUUssS0FBSyxFQUFFVCxLQUFLO2NBQUVVLEdBQUcsRUFBRSxHQUFHZCxLQUFLLElBQUlZLEtBQUssRUFBRTtjQUFFWixLQUFLLEVBQUVBO1lBQUssR0FDMURJLEtBQUssQ0FFUCxDQUFDO1lBQ0YsTUFBTVcsS0FBSyxHQUFHO2NBQUUsR0FBR3JCO1lBQUssQ0FBRTtZQUUxQixJQUFJQSxLQUFLLENBQUNzQixVQUFVLEVBQUVELEtBQUssQ0FBQ0UsUUFBUSxHQUFHLElBQUk7WUFDM0MsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUNmLElBQUksSUFBSSxPQUFPWSxLQUFLLENBQUNaLElBQUksQ0FBQyxDQUFDO1lBRTFFLE9BQ0NkLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBOEIsR0FDNUM5QixNQUFBLENBQUFrQixPQUFBLENBQUFDLGFBQUE7Y0FBUUssS0FBSyxFQUFDLFFBQVE7Y0FBQSxHQUFLRSxLQUFLO2NBQUVJLFNBQVMsRUFBQztZQUFtQixHQUM3RHpCLEtBQUssQ0FBQzBCLFdBQVcsSUFBSS9CLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFRUixLQUFLLEVBQUM7WUFBRSxHQUFFTixLQUFLLENBQUMwQixXQUFXLENBQVUsRUFDbEVWLE1BQU0sQ0FDQyxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JNLE1BQU9XLGFBQWE7WUFDakJDLFFBQVE7WUFFaEJDLFlBQVk7Y0FBRUM7WUFBUSxDQUEwQjtjQUMvQyxJQUFJLENBQUNGLFFBQVEsR0FBRyxJQUFJRyxnQkFBZ0IsQ0FBQ0MsU0FBUyxJQUFHO2dCQUNoREEsU0FBUyxDQUFDUixPQUFPLENBQUVTLFFBQXdCLElBQUk7a0JBQzlDLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxLQUFLLFdBQVcsRUFBRTtrQkFDbkNKLFFBQVEsQ0FBQ0csUUFBUSxDQUFDRSxVQUFVLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQztZQUNIO1lBRUFDLGNBQWNBLENBQUNDLFVBQXVCO2NBQ3JDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2NBQ2pCLE1BQU1DLE1BQU0sR0FBRztnQkFBRUMsU0FBUyxFQUFFO2NBQUksQ0FBRTtjQUNsQyxJQUFJLENBQUNYLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDSCxVQUFVLEVBQUVDLE1BQU0sQ0FBQztZQUMxQztZQUVBRyxhQUFhQSxDQUFBO2NBQ1osSUFBSSxDQUFDYixRQUFRLENBQUNjLFVBQVUsRUFBRTtZQUMzQjs7VUFDQUMsT0FBQSxDQUFBaEIsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBaEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdELFNBQUEsR0FBQWhELE9BQUE7VUFDTSxTQUFVUSxTQUFTQSxDQUFBO1lBQ3hCLE1BQU1ELEdBQUcsR0FBR1IsTUFBQSxDQUFBa0IsT0FBSyxDQUFDZ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QmxELE1BQUEsQ0FBQWtCLE9BQUssQ0FBQ2lDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQzNDLEdBQUcsQ0FBQzRDLE9BQU8sRUFBRTtjQUNsQixNQUFNQyxJQUFJLEdBQUc3QyxHQUFHLENBQUM0QyxPQUFPLENBQUNFLFdBQVcsRUFBRSxFQUFFRCxJQUFJO2NBQzVDLElBQUksQ0FBQ0EsSUFBSSxFQUFFRSxPQUFPLENBQUNDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztjQUN4RCxJQUFJLENBQUNILElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxjQUFjLEVBQUVMLElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxjQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2NBRS9FLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO2NBQ3hFO2NBQ0EsTUFBTTVCLFFBQVEsR0FBSTZCLEtBQStCLElBQUk7Z0JBQ3BELE1BQU1OLGNBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Z0JBQ2hDSyxLQUFLLENBQUNuQyxPQUFPLENBQUNvQyxJQUFJLElBQUc7a0JBQ3BCLE1BQU1DLFlBQVksR0FBR0QsSUFBSSxFQUFFRSxXQUFXO2tCQUN0QyxJQUFJLEVBQUVGLElBQUksWUFBWUcsZ0JBQWdCLENBQUMsSUFBSVYsY0FBYyxDQUFDVyxHQUFHLENBQUNILFlBQVksQ0FBQyxFQUFFO2tCQUU3RSxNQUFNSSxXQUFXLEdBQUdMLElBQUksQ0FBQ00sU0FBUyxDQUFDLElBQUksQ0FBQztrQkFDeENsQixJQUFJLENBQUNJLFVBQVUsQ0FBQ2UsV0FBVyxDQUFDRixXQUFXLENBQUM7a0JBQ3hDWixjQUFjLENBQUNlLEdBQUcsQ0FBQ1AsWUFBWSxDQUFDO2dCQUNqQyxDQUFDLENBQUM7Y0FDSCxDQUFDO2NBRUQsTUFBTVEsYUFBYSxHQUFrQixJQUFJekIsU0FBQSxDQUFBakIsYUFBYSxDQUFDO2dCQUFFRztjQUFRLENBQUUsQ0FBQztjQUNwRSxNQUFNTyxVQUFVLEdBQW9CbUIsUUFBUSxDQUFDQyxJQUFJO2NBQ2pEWSxhQUFhLENBQUNqQyxjQUFjLENBQUNDLFVBQVUsQ0FBQztjQUN4Q1AsUUFBUSxDQUFDeUIsVUFBVSxDQUFDO2NBRXBCLE9BQU8sTUFBTWMsYUFBYSxDQUFDNUIsYUFBYSxFQUFFO1lBQzNDLENBQUMsRUFBRSxDQUFDdEMsR0FBRyxDQUFDNEMsT0FBTyxDQUFDLENBQUM7WUFFakIsT0FBTztjQUFFNUM7WUFBRyxDQUFFO1VBQ2YiLCJpZ25vcmVMaXN0IjpbXX0=