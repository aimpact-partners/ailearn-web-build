System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, RippleEffect, __beyond_pkg, hmr;
  _export("RippleEffect", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/ripple"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/ripple');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 702158720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RippleEffect = void 0;
          /*bundle*/
          class RippleEffect {
            elements;
            constructor(elements = undefined) {
              if (elements) this.add(elements);
            }
            add(elements) {
              this.elements = Array.isArray(elements) ? elements : [elements];
              this.elements.forEach(element => {
                element.classList.add('ripple');
                element.addEventListener('mousedown', this.onClick);
              });
            }
            addRippleEffect(ref) {
              this.add(ref);
            }
            onClick = event => {
              const rect = event.target.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              const ripple = document.createElement('span');
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              event.target.appendChild(ripple);
              setTimeout(() => {
                ripple.remove();
              }, 1000);
            };
            cleanup() {
              this.elements.forEach(element => {
                element.removeEventListener('mousedown', this.onClick);
              });
              this.elements = [];
            }
          }
          exports.RippleEffect = RippleEffect;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RippleEffect",
        "name": "RippleEffect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RippleEffect') && _export("RippleEffect", RippleEffect = require ? require('./index').RippleEffect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVSxNQUFPQSxZQUFZO1lBQzNCQyxRQUFRO1lBRWhCQyxZQUFZRCxXQUE0Q0UsU0FBUztjQUNoRSxJQUFJRixRQUFRLEVBQUUsSUFBSSxDQUFDRyxHQUFHLENBQUNILFFBQVEsQ0FBQztZQUNqQztZQUVRRyxHQUFHLENBQUNILFFBQVE7Y0FDbkIsSUFBSSxDQUFDQSxRQUFRLEdBQUdJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTCxRQUFRLENBQUMsR0FBR0EsUUFBUSxHQUFHLENBQUNBLFFBQVEsQ0FBQztjQUMvRCxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sT0FBTyxDQUFDQyxPQUFPLElBQUc7Z0JBQy9CQSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0wsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFDL0JJLE9BQU8sQ0FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQ3BELENBQUMsQ0FBQztZQUNIO1lBRU9DLGVBQWUsQ0FBQ0MsR0FBUTtjQUM5QixJQUFJLENBQUNULEdBQUcsQ0FBQ1MsR0FBRyxDQUFDO1lBQ2Q7WUFFUUYsT0FBTyxHQUFJRyxLQUFpQixJQUFJO2NBQ3ZDLE1BQU1DLElBQUksR0FBSUQsS0FBSyxDQUFDRSxNQUFzQixDQUFDQyxxQkFBcUIsRUFBRTtjQUNsRSxNQUFNQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssT0FBTyxHQUFHSixJQUFJLENBQUNLLElBQUk7Y0FDbkMsTUFBTUMsQ0FBQyxHQUFHUCxLQUFLLENBQUNRLE9BQU8sR0FBR1AsSUFBSSxDQUFDUSxHQUFHO2NBQ2xDLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQzdDRixNQUFNLENBQUNHLEtBQUssQ0FBQ1AsSUFBSSxHQUFHLEdBQUdGLENBQUMsSUFBSTtjQUM1Qk0sTUFBTSxDQUFDRyxLQUFLLENBQUNKLEdBQUcsR0FBRyxHQUFHRixDQUFDLElBQUk7Y0FDMUJQLEtBQUssQ0FBQ0UsTUFBc0IsQ0FBQ1ksV0FBVyxDQUFDSixNQUFNLENBQUM7Y0FDakRLLFVBQVUsQ0FBQyxNQUFLO2dCQUNmTCxNQUFNLENBQUNNLE1BQU0sRUFBRTtjQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUVNQyxPQUFPO2NBQ2IsSUFBSSxDQUFDOUIsUUFBUSxDQUFDTSxPQUFPLENBQUNDLE9BQU8sSUFBRztnQkFDL0JBLE9BQU8sQ0FBQ3dCLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNyQixPQUFPLENBQUM7Y0FDdkQsQ0FBQyxDQUFDO2NBQ0YsSUFBSSxDQUFDVixRQUFRLEdBQUcsRUFBRTtZQUNuQjs7VUFDQWdDIiwibmFtZXMiOlsiUmlwcGxlRWZmZWN0IiwiZWxlbWVudHMiLCJjb25zdHJ1Y3RvciIsInVuZGVmaW5lZCIsImFkZCIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2siLCJhZGRSaXBwbGVFZmZlY3QiLCJyZWYiLCJldmVudCIsInJlY3QiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsInJpcHBsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJjb2RlL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19