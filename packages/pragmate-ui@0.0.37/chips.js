System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/ripple", "tippy.js@6.3.7"], function (_export, _context) {
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
    }, function (_pragmateUi0037Ripple) {
      dependency_3 = _pragmateUi0037Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/chips');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfcmlwcGxlIiwiX3RpcHB5IiwiQ2hpcCIsInByb3BzIiwiaXRlbSIsInR5cGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRpdGxlIiwicHJvcGVydGllcyIsInJlZiIsInVzZVJlZiIsImZvckVhY2giLCJrZXkiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrIiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0IiwiY3VycmVudCIsImRlZmF1bHQiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiX2JhZGdlIiwiQ2hpcHMiLCJpdGVtcyIsIm91dHB1dCIsIm1hcCIsImluZGV4Il0sInNvdXJjZXMiOlsiL3RzL2JhZGdlLnRzeCIsIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLFNBQVVHLElBQUlBLENBQUNDLEtBQUs7WUFDcEMsTUFBTTtjQUFFQyxJQUFJO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDO1lBQUssQ0FBRSxHQUFHTCxLQUFLO1lBQ3hELE1BQU1NLFVBQVUsR0FBRztjQUFFLEdBQUdOO1lBQUssQ0FBRTtZQUMvQixNQUFNTyxHQUFHLEdBQUdaLEtBQUssQ0FBQ2EsTUFBTSxDQUFrQixJQUFJLENBQUM7WUFFL0MsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsSUFBSSxPQUFPSixVQUFVLENBQUNJLEdBQUcsQ0FBQyxDQUFDO1lBRXhFZixLQUFLLENBQUNnQixTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJTCxVQUFVLENBQUNNLE9BQU8sRUFBRTtnQkFDdkIsTUFBTUMsTUFBTSxHQUFHLElBQUloQixPQUFBLENBQUFpQixZQUFZLEVBQUU7Z0JBQ2pDRCxNQUFNLENBQUNFLGVBQWUsQ0FBQ1IsR0FBRyxDQUFDUyxPQUFPLENBQUM7O2NBRXBDLElBQUlYLEtBQUssRUFBRSxJQUFBUCxNQUFBLENBQUFtQixPQUFLLEVBQUNWLEdBQUcsQ0FBQ1MsT0FBTyxDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDVixVQUFVLENBQUNNLE9BQU8sRUFBRVAsS0FBSyxDQUFDLENBQUM7WUFFL0IsSUFBSUEsS0FBSyxFQUFFQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsR0FBR0QsS0FBSztZQUVuRCxJQUFJYSxHQUFHLEdBQUcsV0FBV2hCLElBQUksR0FBRyxjQUFjQSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUdFLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFMUYsSUFBSUUsVUFBVSxDQUFDTSxPQUFPLEVBQUU7Y0FDdkJNLEdBQUcsSUFBSSxlQUFlOztZQUd2QixPQUNDdkIsS0FBQSxDQUFBd0IsYUFBQTtjQUFNWixHQUFHLEVBQUVBLEdBQUc7Y0FBRUgsU0FBUyxFQUFFYyxHQUFHO2NBQUEsR0FBTVo7WUFBVSxHQUM1Q0wsSUFBSSxFQUNKRSxRQUFRLENBQ0g7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQVIsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdCLE1BQUEsR0FBQXhCLE9BQUE7VUFDTztVQUFVLFNBQVV5QixLQUFLQSxDQUFDckIsS0FBSztZQUNyQyxNQUFNO2NBQUVzQixLQUFLO2NBQUVuQjtZQUFRLENBQUUsR0FBR0gsS0FBSztZQUVqQyxNQUFNTSxVQUFVLEdBQUc7Y0FBRSxHQUFHTjtZQUFLLENBQUU7WUFDL0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDUyxPQUFPLENBQUNDLEdBQUcsSUFBSSxPQUFPSixVQUFVLENBQUNJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0RSxNQUFNUSxHQUFHLEdBQUcsR0FBR2xCLEtBQUssQ0FBQ0UsSUFBSSxHQUFHLHdCQUF3QkYsS0FBSyxDQUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdkVJLFVBQVUsQ0FBQ0YsU0FBUyxHQUFHLHNCQUFzQkUsVUFBVSxDQUFDRixTQUFTLEdBQUcsSUFBSUUsVUFBVSxDQUFDRixTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUljLEdBQUcsRUFBRTtZQUU1RyxNQUFNSyxNQUFNLEdBQUdELEtBQUssRUFBRUUsR0FBRyxDQUFDLENBQUN2QixJQUFJLEVBQUV3QixLQUFLLEtBQUs5QixLQUFBLENBQUF3QixhQUFBLENBQUNDLE1BQUEsQ0FBQXJCLElBQUk7Y0FBQ0csSUFBSSxFQUFFRixLQUFLLENBQUNFLElBQUk7Y0FBRVEsR0FBRyxFQUFFZSxLQUFLO2NBQUV4QixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUFDO1lBRTlGLE9BQ0NOLEtBQUEsQ0FBQXdCLGFBQUE7Y0FBQSxHQUFTYjtZQUFVLEdBQ2pCaUIsTUFBTSxFLEtBQUdwQixRQUFRLENBQ2I7VUFFUiJ9