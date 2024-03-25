System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.6/ripple", "tippy.js@6.3.7", "pragmate-ui@0.0.6/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi006Ripple) {
      dependency_3 = _pragmateUi006Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }, function (_pragmateUi006Icons) {
      dependency_5 = _pragmateUi006Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/chips');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./badge
      ***********************/
      ims.set('./badge', {
        hash: 3444524587,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Chip(props) {
            const {
              item,
              type,
              className,
              title,
              children,
              icon
            } = props;
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            ['children', 'type', 'className'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
              if (title) (0, _tippy.default)(ref.current);
            }, [properties.onClick, title]);
            if (title) properties['data-tippy-content'] = title;
            let cls = `pui-chip${type ? ` pui-chip--${type}` : ''}${className ? ` ${className}` : ''}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            const showIcon = icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            });
            return _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, item, children, showIcon);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1542096823,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var _react = require("react");
          /*bundle*/
          function Chips(props) {
            const {
              children
            } = props;
            const properties = {
              ...props
            };
            ['items', 'type'].forEach(key => delete properties[key]);
            const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            return _react.default.createElement("div", {
              ...properties
            }, _react.default.createElement("div", {
              className: 'content-chip'
            }, children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./badge",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./index",
        "from": "Chips",
        "name": "Chips"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./badge').Chip : value);
        (require || prop === 'Chips') && _export("Chips", Chips = require ? require('./index').Chips : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl90aXBweSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsIml0ZW0iLCJ0eXBlIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJjaGlsZHJlbiIsImljb24iLCJwcm9wZXJ0aWVzIiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsImZvckVhY2giLCJrZXkiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrIiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0IiwiY3VycmVudCIsImNscyIsInNob3dJY29uIiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJDaGlwcyJdLCJzb3VyY2VzIjpbIi90cy9iYWRnZS50c3giLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQVVJLElBQUlBLENBQUNDLEtBQUs7WUFDcEMsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLElBQUk7Y0FBRUMsU0FBUztjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdOLEtBQUs7WUFDOUQsTUFBTU8sVUFBVSxHQUFHO2NBQUUsR0FBR1A7WUFBSyxDQUFFO1lBQy9CLE1BQU1RLEdBQUcsR0FBR2QsTUFBQSxDQUFBZSxPQUFLLENBQUNDLE1BQU0sQ0FBa0IsSUFBSSxDQUFDO1lBRS9DLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLElBQUksT0FBT0wsVUFBVSxDQUFDSyxHQUFHLENBQUMsQ0FBQztZQUV4RWxCLE1BQUEsQ0FBQWUsT0FBSyxDQUFDSSxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJTixVQUFVLENBQUNPLE9BQU8sRUFBRTtnQkFDdkIsTUFBTUMsTUFBTSxHQUFHLElBQUluQixPQUFBLENBQUFvQixZQUFZLEVBQUU7Z0JBQ2pDRCxNQUFNLENBQUNFLGVBQWUsQ0FBQ1QsR0FBRyxDQUFDVSxPQUFPLENBQUM7O2NBRXBDLElBQUlkLEtBQUssRUFBRSxJQUFBUCxNQUFBLENBQUFZLE9BQUssRUFBQ0QsR0FBRyxDQUFDVSxPQUFPLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUNYLFVBQVUsQ0FBQ08sT0FBTyxFQUFFVixLQUFLLENBQUMsQ0FBQztZQUUvQixJQUFJQSxLQUFLLEVBQUVHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHSCxLQUFLO1lBRW5ELElBQUllLEdBQUcsR0FBRyxXQUFXakIsSUFBSSxHQUFHLGNBQWNBLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBR0MsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUxRixJQUFJSSxVQUFVLENBQUNPLE9BQU8sRUFBRTtjQUN2QkssR0FBRyxJQUFJLGVBQWU7O1lBRXZCLE1BQU1DLFFBQVEsR0FBR2QsSUFBSSxJQUFJWixNQUFBLENBQUFlLE9BQUEsQ0FBQVksYUFBQSxDQUFDdkIsTUFBQSxDQUFBd0IsSUFBSTtjQUFDaEIsSUFBSSxFQUFFQTtZQUFJLEVBQUk7WUFFN0MsT0FDQ1osTUFBQSxDQUFBZSxPQUFBLENBQUFZLGFBQUE7Y0FBTWIsR0FBRyxFQUFFQSxHQUFHO2NBQUVMLFNBQVMsRUFBRWdCLEdBQUc7Y0FBQSxHQUFNWjtZQUFVLEdBQzVDTixJQUFJLEVBQ0pJLFFBQVEsRUFDUmUsUUFBUSxDQUNIO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUExQixNQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFVLFNBQVU0QixLQUFLQSxDQUFDdkIsS0FBSztZQUNyQyxNQUFNO2NBQUVLO1lBQVEsQ0FBRSxHQUFHTCxLQUFLO1lBRTFCLE1BQU1PLFVBQVUsR0FBRztjQUFFLEdBQUdQO1lBQUssQ0FBRTtZQUMvQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQ1csT0FBTyxDQUFDQyxHQUFHLElBQUksT0FBT0wsVUFBVSxDQUFDSyxHQUFHLENBQUMsQ0FBQztZQUV4RCxNQUFNTyxHQUFHLEdBQUcsR0FBR25CLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLHdCQUF3QkYsS0FBSyxDQUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdkVLLFVBQVUsQ0FBQ0osU0FBUyxHQUFHLHNCQUFzQkksVUFBVSxDQUFDSixTQUFTLEdBQUcsSUFBSUksVUFBVSxDQUFDSixTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUlnQixHQUFHLEVBQUU7WUFFNUcsT0FDQ3pCLE1BQUEsQ0FBQWUsT0FBQSxDQUFBWSxhQUFBO2NBQUEsR0FBU2Q7WUFBVSxHQUNsQmIsTUFBQSxDQUFBZSxPQUFBLENBQUFZLGFBQUE7Y0FBS2xCLFNBQVMsRUFBQztZQUFjLEdBQUVFLFFBQVEsQ0FBTyxDQUN6QztVQUVSIn0=