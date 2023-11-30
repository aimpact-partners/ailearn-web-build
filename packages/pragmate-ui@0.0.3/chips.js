System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/ripple", "tippy.js@6.3.7"], function (_export, _context) {
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
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Ripple) {
      dependency_3 = _pragmateUi003Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/chips');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./badge
      ***********************/
      ims.set('./badge', {
        hash: 1860960078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
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
            return _react.default.createElement("span", {
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
        hash: 818928796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var _react = require("react");
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
            const output = items?.map((item, index) => _react.default.createElement(_badge.Chip, {
              type: props.type,
              key: index,
              item: item
            }));
            return _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl90aXBweSIsIkNoaXAiLCJwcm9wcyIsIml0ZW0iLCJ0eXBlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIl9iYWRnZSIsIkNoaXBzIiwiaXRlbXMiLCJvdXRwdXQiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VzIjpbIi90cy9iYWRnZS50c3giLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxTQUFVRyxJQUFJQSxDQUFDQyxLQUFLO1lBQ3BDLE1BQU07Y0FBQ0MsSUFBSTtjQUFFQyxJQUFJO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFQztZQUFLLENBQUMsR0FBR0wsS0FBSztZQUN0RCxNQUFNTSxVQUFVLEdBQUc7Y0FBQyxHQUFHTjtZQUFLLENBQUM7WUFDN0IsTUFBTU8sR0FBRyxHQUFHWixNQUFBLENBQUFhLE9BQUssQ0FBQ0MsTUFBTSxDQUFrQixJQUFJLENBQUM7WUFFL0MsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsSUFBSSxPQUFPTCxVQUFVLENBQUNLLEdBQUcsQ0FBQyxDQUFDO1lBRXhFaEIsTUFBQSxDQUFBYSxPQUFLLENBQUNJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUlOLFVBQVUsQ0FBQ08sT0FBTyxFQUFFO2dCQUN2QixNQUFNQyxNQUFNLEdBQUcsSUFBSWpCLE9BQUEsQ0FBQWtCLFlBQVksRUFBRTtnQkFDakNELE1BQU0sQ0FBQ0UsZUFBZSxDQUFDVCxHQUFHLENBQUNVLE9BQU8sQ0FBQzs7Y0FFcEMsSUFBSVosS0FBSyxFQUFFLElBQUFQLE1BQUEsQ0FBQVUsT0FBSyxFQUFDRCxHQUFHLENBQUNVLE9BQU8sQ0FBQztZQUM5QixDQUFDLEVBQUUsQ0FBQ1gsVUFBVSxDQUFDTyxPQUFPLEVBQUVSLEtBQUssQ0FBQyxDQUFDO1lBRS9CLElBQUlBLEtBQUssRUFBRUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLEdBQUdELEtBQUs7WUFFbkQsSUFBSWEsR0FBRyxHQUFHLFdBQVdoQixJQUFJLEdBQUcsY0FBY0EsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHRSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRTFGLElBQUlFLFVBQVUsQ0FBQ08sT0FBTyxFQUFFO2NBQ3ZCSyxHQUFHLElBQUksZUFBZTs7WUFHdkIsT0FDQ3ZCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBVyxhQUFBO2NBQU1aLEdBQUcsRUFBRUEsR0FBRztjQUFFSCxTQUFTLEVBQUVjLEdBQUc7Y0FBQSxHQUFNWjtZQUFVLEdBQzVDTCxJQUFJLEVBQ0pFLFFBQVEsQ0FDSDtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBUixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0IsTUFBQSxHQUFBeEIsT0FBQTtVQUNPO1VBQVUsU0FBVXlCLEtBQUtBLENBQUNyQixLQUFLO1lBQ3JDLE1BQU07Y0FBQ3NCLEtBQUs7Y0FBRW5CO1lBQVEsQ0FBQyxHQUFHSCxLQUFLO1lBRS9CLE1BQU1NLFVBQVUsR0FBRztjQUFDLEdBQUdOO1lBQUssQ0FBQztZQUM3QixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUNVLE9BQU8sQ0FBQ0MsR0FBRyxJQUFJLE9BQU9MLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRFLE1BQU1PLEdBQUcsR0FBRyxHQUFHbEIsS0FBSyxDQUFDRSxJQUFJLEdBQUcsd0JBQXdCRixLQUFLLENBQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2RUksVUFBVSxDQUFDRixTQUFTLEdBQUcsc0JBQXNCRSxVQUFVLENBQUNGLFNBQVMsR0FBRyxJQUFJRSxVQUFVLENBQUNGLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSWMsR0FBRyxFQUFFO1lBRTVHLE1BQU1LLE1BQU0sR0FBR0QsS0FBSyxFQUFFRSxHQUFHLENBQUMsQ0FBQ3ZCLElBQUksRUFBRXdCLEtBQUssS0FBSzlCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBVyxhQUFBLENBQUNDLE1BQUEsQ0FBQXJCLElBQUk7Y0FBQ0csSUFBSSxFQUFFRixLQUFLLENBQUNFLElBQUk7Y0FBRVMsR0FBRyxFQUFFYyxLQUFLO2NBQUV4QixJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUFDO1lBRTlGLE9BQ0NOLE1BQUEsQ0FBQWEsT0FBQSxDQUFBVyxhQUFBO2NBQUEsR0FBU2I7WUFBVSxHQUNqQmlCLE1BQU0sRSxLQUFHcEIsUUFBUSxDQUNiO1VBRVIifQ==