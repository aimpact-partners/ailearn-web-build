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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/ailearn-app", "0.1.9"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.6/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2484678271,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX3VzZVN0eWxlcyIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJNb2JpbGVTZWxlY3QiLCJhdHRycyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByZWZpeCIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJrZXkiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwicGxhY2Vob2xkZXIiLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIiwiX29ic2VydmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImhvc3QiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2hhZG93Um9vdCIsImluc2VydGVkU3R5bGVzIiwiU2V0IiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlcyIsIm5vZGUiLCJzdHlsZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJoYXMiLCJjbG9uZWRTdHlsZSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwic3R5bGVPYnNlcnZlciJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsVUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsYUFBQSxHQUFBSCxPQUFBO1VBRU87VUFBVSxTQUNSSSxXQUFXQSxDQUFDQyxLQUFLO1lBQ3pCLElBQUlDLFVBQVUsR0FBRztjQUFFLEdBQUdEO1lBQUssQ0FBRTtZQUM3QixJQUFJO2NBQUVFO1lBQUksQ0FBRSxHQUFHRixLQUFLO1lBQ3BCLE1BQU07Y0FBRUc7WUFBRyxDQUFFLEdBQUcsSUFBQU4sVUFBQSxDQUFBTyxTQUFTLEdBQUU7WUFDM0IsT0FBT0gsVUFBVSxDQUFDSSxRQUFRO1lBQzFCLElBQUlDLEtBQUssR0FBR04sS0FBSyxDQUFDTyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUNILEtBQUssS0FBS04sS0FBSyxDQUFDTSxLQUFLLENBQUM7WUFFbEUsTUFBTUQsUUFBUSxHQUFHQSxDQUFDO2NBQUVLLEtBQUs7Y0FBRUo7WUFBSyxDQUFFLEtBQUk7Y0FDckMsSUFBSSxDQUFDTixLQUFLLENBQUNLLFFBQVEsRUFBRTtjQUNyQixNQUFNTSxNQUFNLEdBQUc7Z0JBQUVMLEtBQUs7Z0JBQUVKO2NBQUksQ0FBRTtjQUM5QkYsS0FBSyxDQUFDSyxRQUFRLENBQUM7Z0JBQUVNLE1BQU07Z0JBQUVDLGFBQWEsRUFBRTtrQkFBRSxHQUFHRDtnQkFBTTtjQUFFLENBQUUsQ0FBQztZQUN6RCxDQUFDO1lBRUQsT0FBT2pCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaEIsYUFBQSxDQUFBaUIsWUFBWTtjQUFBLEdBQUtmO1lBQUssRUFBSTtZQUNsQztZQUVBLE1BQU1nQixLQUFLLEdBQUc7Y0FBRVgsUUFBUTtjQUFFLEdBQUdKLFVBQVU7Y0FBRUs7WUFBSyxDQUFFO1lBRWhELE9BQ0NaLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRyxTQUFTLEVBQUMsWUFBWTtjQUFDZCxHQUFHLEVBQUVBO1lBQUcsR0FDbENILEtBQUssQ0FBQ1UsS0FBSyxJQUFJaEIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBLGdCQUFRZCxLQUFLLENBQUNVLEtBQUssQ0FBUyxFQUM1Q2hCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbEIsWUFBQSxDQUFBaUIsT0FBTTtjQUFDSyxlQUFlLEVBQUMsa0JBQWtCO2NBQUEsR0FBS0Y7WUFBSyxFQUFJLENBQ25EO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUF0QixNQUFBLEdBQUFDLE9BQUE7VUFZTSxTQUFVb0IsWUFBWUEsQ0FBQztZQUFFUixPQUFPO1lBQUUsR0FBR1A7VUFBSyxDQUFXO1lBQzFELE1BQU1tQixNQUFNLEdBQUdaLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLENBQUM7Y0FBRWQsS0FBSztjQUFFSTtZQUFLLENBQUUsRUFBRVcsS0FBSyxLQUNsRDNCLE1BQUEsQ0FBQW1CLE9BQUEsQ0FBQUMsYUFBQTtjQUFRUSxLQUFLLEVBQUVaLEtBQUs7Y0FBRWEsR0FBRyxFQUFFLEdBQUdqQixLQUFLLElBQUllLEtBQUssRUFBRTtjQUFFZixLQUFLLEVBQUVBO1lBQUssR0FDMURJLEtBQUssQ0FFUCxDQUFDO1lBQ0YsTUFBTU0sS0FBSyxHQUFHO2NBQUUsR0FBR2hCO1lBQUssQ0FBRTtZQUUxQixJQUFJQSxLQUFLLENBQUN3QixVQUFVLEVBQUVSLEtBQUssQ0FBQ1MsUUFBUSxHQUFHLElBQUk7WUFDM0MsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUNqQixJQUFJLElBQUksT0FBT08sS0FBSyxDQUFDUCxJQUFJLENBQUMsQ0FBQztZQUUxRSxPQUNDZixNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBS0csU0FBUyxFQUFDO1lBQThCLEdBQzVDdkIsTUFBQSxDQUFBbUIsT0FBQSxDQUFBQyxhQUFBO2NBQVFRLEtBQUssRUFBQyxRQUFRO2NBQUEsR0FBS04sS0FBSztjQUFFQyxTQUFTLEVBQUM7WUFBbUIsR0FDN0RqQixLQUFLLENBQUMyQixXQUFXLElBQUlqQyxNQUFBLENBQUFtQixPQUFBLENBQUFDLGFBQUE7Y0FBUVIsS0FBSyxFQUFDO1lBQUUsR0FBRU4sS0FBSyxDQUFDMkIsV0FBVyxDQUFVLEVBQ2xFUixNQUFNLENBQ0MsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CTSxNQUFPUyxhQUFhO1lBQ2pCQyxRQUFRO1lBRWhCQyxZQUFZO2NBQUVDO1lBQVEsQ0FBMEI7Y0FDL0MsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSUcsZ0JBQWdCLENBQUNDLFNBQVMsSUFBRztnQkFDaERBLFNBQVMsQ0FBQ1AsT0FBTyxDQUFFUSxRQUF3QixJQUFJO2tCQUM5QyxJQUFJQSxRQUFRLENBQUNDLElBQUksS0FBSyxXQUFXLEVBQUU7a0JBQ25DSixRQUFRLENBQUNHLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDO2dCQUM5QixDQUFDLENBQUM7Y0FDSCxDQUFDLENBQUM7WUFDSDtZQUVBQyxjQUFjQSxDQUFDQyxVQUF1QjtjQUNyQyxJQUFJLENBQUNBLFVBQVUsRUFBRTtjQUNqQixNQUFNQyxNQUFNLEdBQUc7Z0JBQUVDLFNBQVMsRUFBRTtjQUFJLENBQUU7Y0FDbEMsSUFBSSxDQUFDWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ0gsVUFBVSxFQUFFQyxNQUFNLENBQUM7WUFDMUM7WUFFQUcsYUFBYUEsQ0FBQTtjQUNaLElBQUksQ0FBQ2IsUUFBUSxDQUFDYyxVQUFVLEVBQUU7WUFDM0I7O1VBQ0FDLE9BQUEsQ0FBQWhCLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWxDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFrRCxTQUFBLEdBQUFsRCxPQUFBO1VBQ00sU0FBVVMsU0FBU0EsQ0FBQTtZQUN4QixNQUFNRCxHQUFHLEdBQUdULE1BQUEsQ0FBQW1CLE9BQUssQ0FBQ2lDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJwRCxNQUFBLENBQUFtQixPQUFLLENBQUNrQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUM1QyxHQUFHLENBQUM2QyxPQUFPLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHOUMsR0FBRyxDQUFDNkMsT0FBTyxDQUFDRSxXQUFXLEVBQUUsRUFBRUQsSUFBSTtjQUM1QyxJQUFJLENBQUNBLElBQUksRUFBRUUsT0FBTyxDQUFDQyxJQUFJLENBQUMsK0JBQStCLENBQUM7Y0FDeEQsSUFBSSxDQUFDSCxJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxFQUFFTCxJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsY0FBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtjQUUvRSxNQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztjQUN4RTtjQUNBLE1BQU01QixRQUFRLEdBQUk2QixLQUErQixJQUFJO2dCQUNwRCxNQUFNTixjQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUNoQ0ssS0FBSyxDQUFDbEMsT0FBTyxDQUFDbUMsSUFBSSxJQUFHO2tCQUNwQixNQUFNQyxZQUFZLEdBQUdELElBQUksRUFBRUUsV0FBVztrQkFDdEMsSUFBSSxFQUFFRixJQUFJLFlBQVlHLGdCQUFnQixDQUFDLElBQUlWLGNBQWMsQ0FBQ1csR0FBRyxDQUFDSCxZQUFZLENBQUMsRUFBRTtrQkFFN0UsTUFBTUksV0FBVyxHQUFHTCxJQUFJLENBQUNNLFNBQVMsQ0FBQyxJQUFJLENBQUM7a0JBQ3hDbEIsSUFBSSxDQUFDSSxVQUFVLENBQUNlLFdBQVcsQ0FBQ0YsV0FBVyxDQUFDO2tCQUN4Q1osY0FBYyxDQUFDZSxHQUFHLENBQUNQLFlBQVksQ0FBQztnQkFDakMsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUVELE1BQU1RLGFBQWEsR0FBa0IsSUFBSXpCLFNBQUEsQ0FBQWpCLGFBQWEsQ0FBQztnQkFBRUc7Y0FBUSxDQUFFLENBQUM7Y0FDcEUsTUFBTU8sVUFBVSxHQUFvQm1CLFFBQVEsQ0FBQ0MsSUFBSTtjQUNqRFksYUFBYSxDQUFDakMsY0FBYyxDQUFDQyxVQUFVLENBQUM7Y0FDeENQLFFBQVEsQ0FBQ3lCLFVBQVUsQ0FBQztjQUVwQixPQUFPLE1BQU1jLGFBQWEsQ0FBQzVCLGFBQWEsRUFBRTtZQUMzQyxDQUFDLEVBQUUsQ0FBQ3ZDLEdBQUcsQ0FBQzZDLE9BQU8sQ0FBQyxDQUFDO1lBRWpCLE9BQU87Y0FBRTdDO1lBQUcsQ0FBRTtVQUNmIiwiaWdub3JlTGlzdCI6W119