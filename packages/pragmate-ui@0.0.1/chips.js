System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.1/ripple", "tippy.js@6.3.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi001Ripple) {
      dependency_3 = _pragmateUi001Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.1/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.1/chips');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./badge
      ***********************/
      ims.set('./badge', {
        hash: 3348392906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var React = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          /*bundle*/
          function Chip(props) {
            const {
              item,
              type,
              children,
              className,
              title
            } = props;
            const properties = {
              ...props
            };
            const ref = React.useRef(null);
            ['children', 'type', 'className'].forEach(key => delete properties[key]);
            React.useEffect(() => {
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
            return React.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, item, children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 60322418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var React = require("react");
          var _badge = require("./badge");
          /*bundle*/
          function Chips(props) {
            const {
              items,
              children
            } = props;
            const properties = {
              ...props
            };
            ['items', 'children', 'type'].forEach(key => delete properties[key]); // ['items', 'children', 'type'
            const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            const output = items?.map((item, index) => React.createElement(_badge.Chip, {
              type: props.type,
              key: index,
              item: item
            }));
            return React.createElement("div", {
              ...properties
            }, output, " ", children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFFTztVQUFVLFNBQVVBLElBQUksQ0FBQ0MsS0FBSztZQUNwQyxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLFNBQVM7Y0FBRUM7WUFBSyxDQUFFLEdBQUdMLEtBQUs7WUFDeEQsTUFBTU0sVUFBVSxHQUFHO2NBQUUsR0FBR047WUFBSyxDQUFFO1lBQy9CLE1BQU1PLEdBQUcsR0FBR0MsS0FBSyxDQUFDQyxNQUFNLENBQWtCLElBQUksQ0FBQztZQUUvQyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLE9BQU9MLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDLENBQUM7WUFFeEVILEtBQUssQ0FBQ0ksU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSU4sVUFBVSxDQUFDTyxPQUFPLEVBQUU7Z0JBQ3ZCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxvQkFBWSxFQUFFO2dCQUNqQ0QsTUFBTSxDQUFDRSxlQUFlLENBQUNULEdBQUcsQ0FBQ1UsT0FBTyxDQUFDOztjQUVwQyxJQUFJWixLQUFLLEVBQUUsa0JBQUssRUFBQ0UsR0FBRyxDQUFDVSxPQUFPLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUNYLFVBQVUsQ0FBQ08sT0FBTyxFQUFFUixLQUFLLENBQUMsQ0FBQztZQUUvQixJQUFJQSxLQUFLLEVBQUVDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHRCxLQUFLO1lBRW5ELElBQUlhLEdBQUcsR0FBRyxXQUFXaEIsSUFBSSxHQUFHLGNBQWNBLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBR0UsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUxRixJQUFJRSxVQUFVLENBQUNPLE9BQU8sRUFBRTtjQUN2QkssR0FBRyxJQUFJLGVBQWU7O1lBR3ZCLE9BQ0NWO2NBQU1ELEdBQUcsRUFBRUEsR0FBRztjQUFFSCxTQUFTLEVBQUVjLEdBQUc7Y0FBQSxHQUFNWjtZQUFVLEdBQzVDTCxJQUFJLEVBQ0pFLFFBQVEsQ0FDSDtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQTtVQUNBO1VBQ087VUFBVSxTQUFVZ0IsS0FBSyxDQUFDbkIsS0FBSztZQUNyQyxNQUFNO2NBQUVvQixLQUFLO2NBQUVqQjtZQUFRLENBQUUsR0FBR0gsS0FBSztZQUVqQyxNQUFNTSxVQUFVLEdBQUc7Y0FBRSxHQUFHTjtZQUFLLENBQUU7WUFDL0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDVSxPQUFPLENBQUNDLEdBQUcsSUFBSSxPQUFPTCxVQUFVLENBQUNLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RSxNQUFNTyxHQUFHLEdBQUcsR0FBR2xCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLHdCQUF3QkYsS0FBSyxDQUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdkVJLFVBQVUsQ0FBQ0YsU0FBUyxHQUFHLHNCQUFzQkUsVUFBVSxDQUFDRixTQUFTLEdBQUcsSUFBSUUsVUFBVSxDQUFDRixTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUljLEdBQUcsRUFBRTtZQUU1RyxNQUFNRyxNQUFNLEdBQUdELEtBQUssRUFBRUUsR0FBRyxDQUFDLENBQUNyQixJQUFJLEVBQUVzQixLQUFLLEtBQUtmLG9CQUFDVCxXQUFJO2NBQUNHLElBQUksRUFBRUYsS0FBSyxDQUFDRSxJQUFJO2NBQUVTLEdBQUcsRUFBRVksS0FBSztjQUFFdEIsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FBQztZQUU5RixPQUNDTztjQUFBLEdBQVNGO1lBQVUsR0FDakJlLE1BQU0sT0FBR2xCLFFBQVEsQ0FDYjtVQUVSIiwibmFtZXMiOlsiQ2hpcCIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRpdGxlIiwicHJvcGVydGllcyIsInJlZiIsIlJlYWN0IiwidXNlUmVmIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwiY2xzIiwiQ2hpcHMiLCJpdGVtcyIsIm91dHB1dCIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9iYWRnZS50c3giLCJ0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==