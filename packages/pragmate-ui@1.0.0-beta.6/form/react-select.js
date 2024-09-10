System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "react-select@5.8.0", "is-mobile@4.0.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
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
    }, function (_isMobile) {
      dependency_4 = _isMobile;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.6/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3], ['is-mobile', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3145568607,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _reactSelect = require("react-select");
          var _useStyles = require("./use-styles");
          var _mobileSelect = require("./mobile-select");
          /*bundle*/
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
            // if (isMobile({ tablet: true })) return <MobileSelect {...props} />;
            const attrs = {
              onChange,
              ...properties,
              value
            };
            return _react.default.createElement("div", {
              className: 'pui-select',
              ref: ref
            }, props.label && _react.default.createElement("label", null, props.label), _react.default.createElement(_reactSelect.default, {
              classNamePrefix: 'pui-react-select',
              ...attrs
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./mobile-select
      *******************************/

      ims.set('./mobile-select', {
        hash: 2753569965,
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
            }, _react.default.createElement("option", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX3VzZVN0eWxlcyIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2JpbGVTZWxlY3QiLCJhdHRycyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByZWZpeCIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJrZXkiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwicGxhY2Vob2xkZXIiLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIiwiX29ic2VydmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImhvc3QiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2hhZG93Um9vdCIsImluc2VydGVkU3R5bGVzIiwiU2V0IiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlcyIsIm5vZGUiLCJzdHlsZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJoYXMiLCJjbG9uZWRTdHlsZSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwic3R5bGVPYnNlcnZlciJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxVQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxhQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQ1JJLFdBQVdBLENBQUNDLEtBQUs7WUFDekIsSUFBSUMsVUFBVSxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzdCLElBQUk7Y0FBRUU7WUFBSSxDQUFFLEdBQUdGLEtBQUs7WUFDcEIsTUFBTTtjQUFFRztZQUFHLENBQUUsR0FBRyxJQUFBTixVQUFBLENBQUFPLFNBQVMsR0FBRTtZQUMzQixPQUFPSCxVQUFVLENBQUNJLFFBQVE7WUFDMUIsSUFBSUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0gsS0FBSyxLQUFLTixLQUFLLENBQUNNLEtBQUssQ0FBQztZQUVsRSxNQUFNRCxRQUFRLEdBQUdBLENBQUM7Y0FBRUssS0FBSztjQUFFSjtZQUFLLENBQUUsS0FBSTtjQUNyQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssUUFBUSxFQUFFO2NBQ3JCLE1BQU1NLE1BQU0sR0FBRztnQkFBRUwsS0FBSztnQkFBRUo7Y0FBSSxDQUFFO2NBQzlCRixLQUFLLENBQUNLLFFBQVEsQ0FBQztnQkFBRU0sTUFBTTtnQkFBRUMsYUFBYSxFQUFFO2tCQUFFLEdBQUdEO2dCQUFNO2NBQUUsQ0FBRSxDQUFDO1lBQ3pELENBQUM7WUFFRCxPQUFPakIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUNoQixhQUFBLENBQUFpQixZQUFZO2NBQUEsR0FBS2Y7WUFBSyxFQUFJO1lBQ2xDO1lBRUEsTUFBTWdCLEtBQUssR0FBRztjQUFFWCxRQUFRO2NBQUUsR0FBR0osVUFBVTtjQUFFSztZQUFLLENBQUU7WUFFaEQsT0FDQ1osTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQUtHLFNBQVMsRUFBQyxZQUFZO2NBQUNkLEdBQUcsRUFBRUE7WUFBRyxHQUNsQ0gsS0FBSyxDQUFDVSxLQUFLLElBQUloQixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUEsZ0JBQVFkLEtBQUssQ0FBQ1UsS0FBSyxDQUFTLEVBQzVDaEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixZQUFBLENBQUFpQixPQUFNO2NBQUNLLGVBQWUsRUFBQyxrQkFBa0I7Y0FBQSxHQUFLRjtZQUFLLEVBQUksQ0FDbkQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQXRCLE1BQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVvQixZQUFZQSxDQUFDO1lBQUVSLE9BQU87WUFBRSxHQUFHUDtVQUFLLENBQVc7WUFDMUQsTUFBTW1CLE1BQU0sR0FBR1osT0FBTyxDQUFDYSxHQUFHLENBQUMsQ0FBQztjQUFFZCxLQUFLO2NBQUVJO1lBQUssQ0FBRSxFQUFFVyxLQUFLLEtBQ2xEM0IsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQVFRLEtBQUssRUFBRVosS0FBSztjQUFFYSxHQUFHLEVBQUUsR0FBR2pCLEtBQUssSUFBSWUsS0FBSyxFQUFFO2NBQUVmLEtBQUssRUFBRUE7WUFBSyxHQUMxREksS0FBSyxDQUVQLENBQUM7WUFDRixNQUFNTSxLQUFLLEdBQUc7Y0FBRSxHQUFHaEI7WUFBSyxDQUFFO1lBRTFCLElBQUlBLEtBQUssQ0FBQ3dCLFVBQVUsRUFBRVIsS0FBSyxDQUFDUyxRQUFRLEdBQUcsSUFBSTtZQUMzQyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQ2pCLElBQUksSUFBSSxPQUFPTyxLQUFLLENBQUNQLElBQUksQ0FBQyxDQUFDO1lBRTFFLE9BQ0NmLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUM7WUFBOEIsR0FDNUN2QixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBUVEsS0FBSyxFQUFDLFFBQVE7Y0FBQSxHQUFLTixLQUFLO2NBQUVDLFNBQVMsRUFBQztZQUFtQixHQUM5RHZCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFRUixLQUFLLEVBQUM7WUFBRSxHQUFFTixLQUFLLENBQUMyQixXQUFXLENBQVUsRUFDNUNSLE1BQU0sQ0FDQyxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JNLE1BQU9TLGFBQWE7WUFDakJDLFFBQVE7WUFFaEJDLFlBQVk7Y0FBRUM7WUFBUSxDQUEwQjtjQUMvQyxJQUFJLENBQUNGLFFBQVEsR0FBRyxJQUFJRyxnQkFBZ0IsQ0FBQ0MsU0FBUyxJQUFHO2dCQUNoREEsU0FBUyxDQUFDUCxPQUFPLENBQUVRLFFBQXdCLElBQUk7a0JBQzlDLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxLQUFLLFdBQVcsRUFBRTtrQkFDbkNKLFFBQVEsQ0FBQ0csUUFBUSxDQUFDRSxVQUFVLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQztZQUNIO1lBRUFDLGNBQWNBLENBQUNDLFVBQXVCO2NBQ3JDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2NBQ2pCLE1BQU1DLE1BQU0sR0FBRztnQkFBRUMsU0FBUyxFQUFFO2NBQUksQ0FBRTtjQUNsQyxJQUFJLENBQUNYLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDSCxVQUFVLEVBQUVDLE1BQU0sQ0FBQztZQUMxQztZQUVBRyxhQUFhQSxDQUFBO2NBQ1osSUFBSSxDQUFDYixRQUFRLENBQUNjLFVBQVUsRUFBRTtZQUMzQjs7VUFDQUMsT0FBQSxDQUFBaEIsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBbEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtELFNBQUEsR0FBQWxELE9BQUE7VUFDTSxTQUFVUyxTQUFTQSxDQUFBO1lBQ3hCLE1BQU1ELEdBQUcsR0FBR1QsTUFBQSxDQUFBbUIsT0FBSyxDQUFDaUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnBELE1BQUEsQ0FBQW1CLE9BQUssQ0FBQ2tDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQzVDLEdBQUcsQ0FBQzZDLE9BQU8sRUFBRTtjQUNsQixNQUFNQyxJQUFJLEdBQUc5QyxHQUFHLENBQUM2QyxPQUFPLENBQUNFLFdBQVcsRUFBRSxFQUFFRCxJQUFJO2NBQzVDLElBQUksQ0FBQ0EsSUFBSSxFQUFFRSxPQUFPLENBQUNDLElBQUksQ0FBQywrQkFBK0IsQ0FBQztjQUN4RCxJQUFJLENBQUNILElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxjQUFjLEVBQUVMLElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxjQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2NBRS9FLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO2NBQ3hFO2NBQ0EsTUFBTTVCLFFBQVEsR0FBSTZCLEtBQStCLElBQUk7Z0JBQ3BELE1BQU1OLGNBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Z0JBQ2hDSyxLQUFLLENBQUNsQyxPQUFPLENBQUNtQyxJQUFJLElBQUc7a0JBQ3BCLE1BQU1DLFlBQVksR0FBR0QsSUFBSSxFQUFFRSxXQUFXO2tCQUN0QyxJQUFJLEVBQUVGLElBQUksWUFBWUcsZ0JBQWdCLENBQUMsSUFBSVYsY0FBYyxDQUFDVyxHQUFHLENBQUNILFlBQVksQ0FBQyxFQUFFO2tCQUU3RSxNQUFNSSxXQUFXLEdBQUdMLElBQUksQ0FBQ00sU0FBUyxDQUFDLElBQUksQ0FBQztrQkFDeENsQixJQUFJLENBQUNJLFVBQVUsQ0FBQ2UsV0FBVyxDQUFDRixXQUFXLENBQUM7a0JBQ3hDWixjQUFjLENBQUNlLEdBQUcsQ0FBQ1AsWUFBWSxDQUFDO2dCQUNqQyxDQUFDLENBQUM7Y0FDSCxDQUFDO2NBRUQsTUFBTVEsYUFBYSxHQUFrQixJQUFJekIsU0FBQSxDQUFBakIsYUFBYSxDQUFDO2dCQUFFRztjQUFRLENBQUUsQ0FBQztjQUNwRSxNQUFNTyxVQUFVLEdBQW9CbUIsUUFBUSxDQUFDQyxJQUFJO2NBQ2pEWSxhQUFhLENBQUNqQyxjQUFjLENBQUNDLFVBQVUsQ0FBQztjQUN4Q1AsUUFBUSxDQUFDeUIsVUFBVSxDQUFDO2NBRXBCLE9BQU8sTUFBTWMsYUFBYSxDQUFDNUIsYUFBYSxFQUFFO1lBQzNDLENBQUMsRUFBRSxDQUFDdkMsR0FBRyxDQUFDNkMsT0FBTyxDQUFDLENBQUM7WUFFakIsT0FBTztjQUFFN0M7WUFBRyxDQUFFO1VBQ2YifQ==