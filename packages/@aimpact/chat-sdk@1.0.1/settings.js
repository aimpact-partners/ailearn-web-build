System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/chat-sdk@1.0.1/users", "@beyond-js/reactive@1.1.12/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, SDKSettings, __beyond_pkg, hmr;
  _export("SDKSettings", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactChatSdk101Users) {
      dependency_1 = _aimpactChatSdk101Users;
    }, function (_beyondJsReactive1112Model) {
      dependency_2 = _beyondJsReactive1112Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.11"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["highlight.js", "11.9.0"], ["marked", "11.1.0"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.1.0"], ["marked-mangle", "1.1.6"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-app", "0.0.52"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.0.1/settings"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/users', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1573229943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SDKSettings = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _model = require("@beyond-js/reactive/model");
          class ChatSDKSettings extends _model.ReactiveModel {
            #userModel = _users.User;
            get userModel() {
              return this.#userModel;
            }
            set userModel(value) {
              this.#userModel = value;
              this.triggerEvent();
            }
          }
          /*bundle*/
          const SDKSettings = exports.SDKSettings = new ChatSDKSettings();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SDKSettings",
        "name": "SDKSettings"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SDKSettings') && _export("SDKSettings", SDKSettings = require ? require('./index').SDKSettings : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlcnMiLCJyZXF1aXJlIiwiX21vZGVsIiwiQ2hhdFNES1NldHRpbmdzIiwiUmVhY3RpdmVNb2RlbCIsInVzZXJNb2RlbCIsIlVzZXIiLCJ2YWx1ZSIsInRyaWdnZXJFdmVudCIsIlNES1NldHRpbmdzIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsTUFBTUUsZUFBZ0IsU0FBUUQsTUFBQSxDQUFBRSxhQUE4QjtZQUMzRCxDQUFBQyxTQUFVLEdBQUdMLE1BQUEsQ0FBQU0sSUFBSTtZQUNqQixJQUFJRCxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUVBLElBQUlBLFNBQVNBLENBQUNFLEtBQUs7Y0FDbEIsSUFBSSxDQUFDLENBQUFGLFNBQVUsR0FBR0UsS0FBSztjQUN2QixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUNwQjs7VUFHTTtVQUFXLE1BQU1DLFdBQVcsR0FBQUMsT0FBQSxDQUFBRCxXQUFBLEdBQUcsSUFBSU4sZUFBZSxFQUFFIiwiaWdub3JlTGlzdCI6W119