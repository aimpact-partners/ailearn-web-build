System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, VerticalLine, __beyond_pkg, hmr;
  _export("VerticalLine", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/vertical-line"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/vertical-line');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2335813163,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerticalLine = VerticalLine;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          function VerticalLine({
            events,
            variant = 'primary'
          }) {
            let cls = variant ? `timeline-event__content--icon ${variant}` : 'timeline-event__content--icon';
            const output = events.map((event, index) => _react.default.createElement("div", {
              key: index,
              className: "timeline-event"
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_icons.Icon, {
              icon: event.icon
            })), _react.default.createElement("div", {
              className: "timeline-event__content--block"
            }, _react.default.createElement("header", {
              className: "item-header"
            }, _react.default.createElement("h3", {
              className: "item-header__h3"
            }, event.title), _react.default.createElement("span", {
              className: "item-header__span"
            }, event.date)), _react.default.createElement("p", {
              className: "block-description"
            }, event.description))));
            return _react.default.createElement("div", {
              className: "pui__vertical-line"
            }, _react.default.createElement("div", {
              className: "line"
            }), _react.default.createElement("div", {
              className: "container-timeline"
            }, output));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./type
      **********************/

      ims.set('./type', {
        hash: 2100981817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "VerticalLine",
        "name": "VerticalLine"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'VerticalLine') && _export("VerticalLine", VerticalLine = require ? require('./index').VerticalLine : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiVmVydGljYWxMaW5lIiwiZXZlbnRzIiwidmFyaWFudCIsImNscyIsIm91dHB1dCIsIm1hcCIsImV2ZW50IiwiaW5kZXgiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImtleSIsImNsYXNzTmFtZSIsIkljb24iLCJpY29uIiwidGl0bGUiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFZLFNBQVVFLFlBQVlBLENBQUM7WUFBQ0MsTUFBTTtZQUFFQyxPQUFPLEdBQUc7VUFBUyxDQUFDO1lBQ3RFLElBQUlDLEdBQUcsR0FBR0QsT0FBTyxHQUFHLGlDQUFpQ0EsT0FBTyxFQUFFLEdBQUcsK0JBQStCO1lBRWhHLE1BQU1FLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEtBQ3RDVixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxHQUFHLEVBQUVILEtBQUs7Y0FBRUksU0FBUyxFQUFDO1lBQWdCLEdBQzFDZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUVSO1lBQUcsR0FDbEJOLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBLENBQUNWLE1BQUEsQ0FBQWEsSUFBSTtjQUFDQyxJQUFJLEVBQUVQLEtBQUssQ0FBQ087WUFBSSxFQUFJLENBQ3JCLEVBQ05oQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQVFFLFNBQVMsRUFBQztZQUFhLEdBQzlCZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFJRSxTQUFTLEVBQUM7WUFBaUIsR0FBRUwsS0FBSyxDQUFDUSxLQUFLLENBQU0sRUFDbERqQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBbUIsR0FBRUwsS0FBSyxDQUFDUyxJQUFJLENBQVEsQ0FDL0MsRUFDVGxCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUdFLFNBQVMsRUFBQztZQUFtQixHQUFFTCxLQUFLLENBQUNVLFdBQVcsQ0FBSyxDQUNuRCxDQUVQLENBQUM7WUFDRixPQUNDbkIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQW9CLEdBQ2xDZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBTSxFQUFPLEVBQzVCZCxNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBb0IsR0FBRVAsTUFBTSxDQUFPLENBQzdDO1VBRVI7Ozs7Ozs7Ozs7O1VDMUJBOztVQUVBYSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EifQ==