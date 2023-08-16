System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tooltip"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tooltip');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4105411953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = void 0;
          var _react = require("react");
          /*bundle*/
          const Tooltip = ({
            children,
            text,
            position = 'bottom'
          }) => {
            const [showTooltip, setShowTooltip] = _react.default.useState(false);
            const handleMouseEnter = () => setShowTooltip(true);
            const handleMouseLeave = () => setShowTooltip(false);
            const cls = `tooltip ${position} ${showTooltip ? 'visible' : ''}`;
            return _react.default.createElement("div", {
              className: 'tooltip-container',
              onMouseLeave: handleMouseLeave,
              onMouseEnter: handleMouseEnter
            }, children, _react.default.createElement("div", {
              className: cls
            }, text));
          };
          exports.Tooltip = Tooltip;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Tooltip",
        "name": "Tooltip"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Tooltip') && _export("Tooltip", Tooltip = require ? require('./index').Tooltip : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBUU87VUFBVyxNQUFNQSxPQUFPLEdBQUcsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLElBQUk7WUFBRUMsUUFBUSxHQUFHO1VBQVEsQ0FBaUIsS0FBSTtZQUM1RixNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdDLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUzRCxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFNSCxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ25ELE1BQU1JLGdCQUFnQixHQUFHLE1BQU1KLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDcEQsTUFBTUssR0FBRyxHQUFHLFdBQVdQLFFBQVEsSUFBSUMsV0FBVyxHQUFHLFNBQVMsR0FBRyxFQUFFLEVBQUU7WUFFakUsT0FDQ0U7Y0FBS0ssU0FBUyxFQUFDLG1CQUFtQjtjQUFDQyxZQUFZLEVBQUVILGdCQUFnQjtjQUFFSSxZQUFZLEVBQUVMO1lBQWdCLEdBSy9GUCxRQUFRLEVBQ1RLO2NBQUtLLFNBQVMsRUFBRUQ7WUFBRyxHQUFHUixJQUFJLENBQU8sQ0FDNUI7VUFFUixDQUFDO1VBQUNZIiwibmFtZXMiOlsiVG9vbHRpcCIsImNoaWxkcmVuIiwidGV4dCIsInBvc2l0aW9uIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImNscyIsImNsYXNzTmFtZSIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VFbnRlciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19