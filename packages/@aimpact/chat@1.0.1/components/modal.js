System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Dialog, __beyond_pkg, hmr;
  _export("Dialog", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Components) {
      dependency_4 = _pragmateUi0037Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/components/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/components/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4250856443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dialog = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const {
            forwardRef
          } = _react.default;
          /*bundle */
          const Dialog = forwardRef(function Dialog({
            children,
            closable,
            onClose
          }, ref) {
            return _react.default.createElement("dialog", {
              ref: ref
            }, closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), children);
          });
          exports.Dialog = Dialog;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Dialog",
        "name": "Dialog"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Dialog') && _export("Dialog", Dialog = require ? require('./index').Dialog : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiZm9yd2FyZFJlZiIsImRlZmF1bHQiLCJEaWFsb2ciLCJjaGlsZHJlbiIsImNsb3NhYmxlIiwib25DbG9zZSIsInJlZiIsImNyZWF0ZUVsZW1lbnQiLCJJY29uQnV0dG9uIiwiaWNvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxNQUFNO1lBQUVFO1VBQVUsQ0FBRSxHQUFHSCxNQUFBLENBQUFJLE9BQUs7VUFPckI7VUFBWSxNQUFNQyxNQUFNLEdBQUdGLFVBQVUsQ0FBQyxTQUFTRSxNQUFNQSxDQUMzRDtZQUFFQyxRQUFRO1lBQUVDLFFBQVE7WUFBRUM7VUFBTyxDQUFVLEVBQ3ZDQyxHQUFpQztZQUVqQyxPQUNDVCxNQUFBLENBQUFJLE9BQUEsQ0FBQU0sYUFBQTtjQUFRRCxHQUFHLEVBQUVBO1lBQUcsR0FDZEYsUUFBUSxJQUFJUCxNQUFBLENBQUFJLE9BQUEsQ0FBQU0sYUFBQSxDQUFDUixNQUFBLENBQUFTLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLE9BQU87Y0FBQ0MsU0FBUyxFQUFDLE9BQU87Y0FBQ0MsT0FBTyxFQUFFTjtZQUFPLEVBQUksRUFDM0VGLFFBQVEsQ0FDRDtVQUVYLENBQUMsQ0FBQztVQUFDUyxPQUFBLENBQUFWLE1BQUEsR0FBQUEsTUFBQSJ9