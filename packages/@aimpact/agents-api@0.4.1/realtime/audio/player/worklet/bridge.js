System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/worklet-bridge", "@aimpact/agents-api@0.4.1/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, IPlayerWorkletConfig, StreamWorkletBridge, __beyond_pkg, hmr;
  _export({
    IPlayerWorkletConfig: void 0,
    StreamWorkletBridge: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioWorkletBridge) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioWorkletBridge;
    }, function (_aimpactAgentsApi041Config) {
      dependency_2 = _aimpactAgentsApi041Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player/worklet/bridge"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/worklet-bridge', dependency_1], ['@aimpact/agents-api/config', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2899756593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StreamWorkletBridge = void 0;
          var _workletBridge = require("@aimpact/agents-api/realtime/audio/worklet-bridge");
          var _config = require("@aimpact/agents-api/config");
          /*bundle*/
          class StreamWorkletBridge extends _workletBridge.WorkletBridge {
            constructor(context, timeout) {
              // super(context, 'stream_processor', './realtime/audio/player/worklet/processor/index.js', timeout);
              super(context, 'stream_processor', `/packages/${_config.default.package}@${_config.default.version}/realtime/audio/player/worklet/processor/index.js`, timeout);
            }
          }
          exports.StreamWorkletBridge = StreamWorkletBridge;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IPlayerWorkletConfig",
        "name": "IPlayerWorkletConfig"
      }, {
        "im": "./index",
        "from": "StreamWorkletBridge",
        "name": "StreamWorkletBridge"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IPlayerWorkletConfig') && _export("IPlayerWorkletConfig", IPlayerWorkletConfig = require ? require('./index').IPlayerWorkletConfig : value);
        (require || prop === 'StreamWorkletBridge') && _export("StreamWorkletBridge", StreamWorkletBridge = require ? require('./index').StreamWorkletBridge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd29ya2xldEJyaWRnZSIsInJlcXVpcmUiLCJfY29uZmlnIiwiU3RyZWFtV29ya2xldEJyaWRnZSIsIldvcmtsZXRCcmlkZ2UiLCJjb25zdHJ1Y3RvciIsImNvbnRleHQiLCJ0aW1lb3V0IiwiZGVmYXVsdCIsInBhY2thZ2UiLCJ2ZXJzaW9uIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsY0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBSU87VUFBVSxNQUFPRSxtQkFBb0IsU0FBUUgsY0FBQSxDQUFBSSxhQUFhO1lBQ2hFQyxZQUFZQyxPQUFxQixFQUFFQyxPQUFnQjtjQUNsRDtjQUNBLEtBQUssQ0FDSkQsT0FBTyxFQUNQLGtCQUFrQixFQUNsQixhQUFhSixPQUFBLENBQUFNLE9BQU0sQ0FBQ0MsT0FBTyxJQUFJUCxPQUFBLENBQUFNLE9BQU0sQ0FBQ0UsT0FBTyxtREFBbUQsRUFDaEdILE9BQU8sQ0FDUDtZQUNGOztVQUNBSSxPQUFBLENBQUFSLG1CQUFBLEdBQUFBLG1CQUFBIiwiaWdub3JlTGlzdCI6W119