System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/components"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta1Icons) {
      dependency_3 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Components) {
      dependency_4 = _pragmateUi100Beta1Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/chat-api", null], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["pragmate-ui", "1.0.0-beta.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@firebase/auth", "1.7.5"], ["@firebase/component", "0.6.8"], ["@firebase/logger", "0.4.2"], ["@firebase/util", "1.9.7"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.19"], ["dayjs", "1.11.11"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["firebase", "9.23.0"], ["firebase-admin", "11.11.1"], ["highlight.js", "11.10.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.3"], ["marked-mangle", "1.1.8"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["uuid", "9.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@types/react", "18.3.3"], ["@types/react-dom", "18.3.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/ailearn-app", "0.1.0-dev.06"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.2/components/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.2/components/modal');
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
          const Dialog = exports.Dialog = forwardRef(function Dialog({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiZm9yd2FyZFJlZiIsImRlZmF1bHQiLCJEaWFsb2ciLCJleHBvcnRzIiwiY2hpbGRyZW4iLCJjbG9zYWJsZSIsIm9uQ2xvc2UiLCJyZWYiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFFQSxNQUFNO1lBQUVFO1VBQVUsQ0FBRSxHQUFHSCxNQUFBLENBQUFJLE9BQUs7VUFPckI7VUFBWSxNQUFNQyxNQUFNLEdBQUFDLE9BQUEsQ0FBQUQsTUFBQSxHQUFHRixVQUFVLENBQUMsU0FBU0UsTUFBTUEsQ0FDM0Q7WUFBRUUsUUFBUTtZQUFFQyxRQUFRO1lBQUVDO1VBQU8sQ0FBVSxFQUN2Q0MsR0FBaUM7WUFFakMsT0FDQ1YsTUFBQSxDQUFBSSxPQUFBLENBQUFPLGFBQUE7Y0FBUUQsR0FBRyxFQUFFQTtZQUFHLEdBQ2RGLFFBQVEsSUFBSVIsTUFBQSxDQUFBSSxPQUFBLENBQUFPLGFBQUEsQ0FBQ1QsTUFBQSxDQUFBVSxVQUFVO2NBQUNDLElBQUksRUFBQyxPQUFPO2NBQUNDLFNBQVMsRUFBQyxPQUFPO2NBQUNDLE9BQU8sRUFBRU47WUFBTyxFQUFJLEVBQzNFRixRQUFRLENBQ0Q7VUFFWCxDQUFDLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=