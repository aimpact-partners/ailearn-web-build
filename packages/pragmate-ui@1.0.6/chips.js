System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.6/ripple", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi106Ripple) {
      dependency_3 = _pragmateUi106Ripple;
    }, function (_pragmateUi106Icons) {
      dependency_4 = _pragmateUi106Icons;
    }, function (_pragmateUi106Base) {
      dependency_5 = _pragmateUi106Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.6"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.6/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/base', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.6/chips');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./chip
      **********************/
      ims.set('./chip', {
        hash: 4218531831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _ripple = require("pragmate-ui/ripple");
          /*bundle*/
          function Chip(props) {
            const {
              type,
              title,
              children,
              icon
            } = props;
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            // Usar el hook de tooltip mejorado
            const {
              tooltipJSX
            } = (0, _icons.useIconTooltip)(title || '', ref);
            ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
            }, [properties.onClick]);
            const variant = props.variant || props.type || 'default';
            let cls = `pui-chip pui-chip--${variant}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, children, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            })), tooltipJSX);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3044580695,
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
            ['items', 'type', 'variant'].forEach(key => delete properties[key]);
            // const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            const variant = props.variant || props.type || 'default';
            const cls = `pui-chip__container pui-chip__container--${variant}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            return _react.default.createElement("div", {
              ...properties
            }, _react.default.createElement("div", {
              className: 'content-chip'
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 710310839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chip",
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
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3JpcHBsZSIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwidG9vbHRpcEpTWCIsInVzZUljb25Ub29sdGlwIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwidmFyaWFudCIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJDaGlwcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiLy90cy9jaGlwLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBTU87VUFBVSxTQUFVRyxJQUFJQSxDQUFDQyxLQUFnQjtZQUMvQyxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQUksQ0FBRSxHQUFHSixLQUFLO1lBQzdDLE1BQU1LLFVBQVUsR0FBRztjQUFFLEdBQUdMO1lBQUssQ0FBRTtZQUMvQixNQUFNTSxHQUFHLEdBQUdYLE1BQUEsQ0FBQVksT0FBSyxDQUFDQyxNQUFNLENBQWtCLElBQUksQ0FBQztZQUUvQztZQUNBLE1BQU07Y0FBRUM7WUFBVSxDQUFFLEdBQUcsSUFBQVosTUFBQSxDQUFBYSxjQUFjLEVBQUNSLEtB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