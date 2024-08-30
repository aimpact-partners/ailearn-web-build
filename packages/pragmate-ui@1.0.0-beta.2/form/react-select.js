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
    }, function (_isMobile2) {
      dependency_4 = _isMobile2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.2/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['react-select', dependency_3], ['is-mobile', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.2/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2707568277,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _reactSelect = require("react-select");
          var _useStyles = require("./use-styles");
          var _isMobile = require("is-mobile");
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
            if ((0, _isMobile.default)({
              tablet: true
            })) return _react.default.createElement(_mobileSelect.MobileSelect, {
              ...props
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JlYWN0U2VsZWN0IiwiX3VzZVN0eWxlcyIsIl9pc01vYmlsZSIsIl9tb2JpbGVTZWxlY3QiLCJSZWFjdFNlbGVjdCIsInByb3BzIiwicHJvcGVydGllcyIsIm5hbWUiLCJyZWYiLCJ1c2VTdHlsZXMiLCJvbkNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImZpbmQiLCJpdGVtIiwibGFiZWwiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGVmYXVsdCIsInRhYmxldCIsImNyZWF0ZUVsZW1lbnQiLCJNb2JpbGVTZWxlY3QiLCJhdHRycyIsImNsYXNzTmFtZSIsImNsYXNzTmFtZVByZWZpeCIsIm91dHB1dCIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJrZXkiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJmb3JFYWNoIiwicGxhY2Vob2xkZXIiLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwidHlwZSIsImFkZGVkTm9kZXMiLCJzdGFydE9ic2VydmluZyIsInRhcmdldE5vZGUiLCJjb25maWciLCJjaGlsZExpc3QiLCJvYnNlcnZlIiwic3RvcE9ic2VydmluZyIsImRpc2Nvbm5lY3QiLCJleHBvcnRzIiwiX29ic2VydmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsImhvc3QiLCJnZXRSb290Tm9kZSIsImNvbnNvbGUiLCJ3YXJuIiwic2hhZG93Um9vdCIsImluc2VydGVkU3R5bGVzIiwiU2V0IiwiaGVhZFN0eWxlcyIsImRvY3VtZW50IiwiaGVhZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub2RlcyIsIm5vZGUiLCJzdHlsZUNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsIkhUTUxTdHlsZUVsZW1lbnQiLCJoYXMiLCJjbG9uZWRTdHlsZSIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiYWRkIiwic3R5bGVPYnNlcnZlciJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvdHMvb2JzZXJ2ZXIudHMiLCIvdHMvdXNlLXN0eWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxZQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxVQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxhQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFVLFNBQ1JLLFdBQVdBLENBQUNDLEtBQUs7WUFDekIsSUFBSUMsVUFBVSxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzdCLElBQUk7Y0FBRUU7WUFBSSxDQUFFLEdBQUdGLEtBQUs7WUFDcEIsTUFBTTtjQUFFRztZQUFHLENBQUUsR0FBRyxJQUFBUCxVQUFBLENBQUFRLFNBQVMsR0FBRTtZQUMzQixPQUFPSCxVQUFVLENBQUNJLFFBQVE7WUFDMUIsSUFBSUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0gsS0FBSyxLQUFLTixLQUFLLENBQUNNLEtBQUssQ0FBQztZQUVsRSxNQUFNRCxRQUFRLEdBQUdBLENBQUM7Y0FBRUssS0FBSztjQUFFSjtZQUFLLENBQUUsS0FBSTtjQUNyQyxJQUFJLENBQUNOLEtBQUssQ0FBQ0ssUUFBUSxFQUFFO2NBQ3JCLE1BQU1NLE1BQU0sR0FBRztnQkFBRUwsS0FBSztnQkFBRUo7Y0FBSSxDQUFFO2NBQzlCRixLQUFLLENBQUNLLFFBQVEsQ0FBQztnQkFBRU0sTUFBTTtnQkFBRUMsYUFBYSxFQUFFO2tCQUFFLEdBQUdEO2dCQUFNO2NBQUUsQ0FBRSxDQUFDO1lBQ3pELENB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