System.register(["@beyond-js/kernel@0.1.9/bundle", "@aimpact/agents-api@0.4.0/realtime/channel", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.0/realtime/client/base", "@aimpact/agents-api@0.4.0/realtime/utils"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ClientSession, __beyond_pkg, hmr;
  _export("ClientSession", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_aimpactAgentsApi040RealtimeChannel) {
      dependency_1 = _aimpactAgentsApi040RealtimeChannel;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi040RealtimeClientBase) {
      dependency_3 = _aimpactAgentsApi040RealtimeClientBase;
    }, function (_aimpactAgentsApi040RealtimeUtils) {
      dependency_4 = _aimpactAgentsApi040RealtimeUtils;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["firebase-admin", "12.7.0"], ["@beyond-js/firestore-collection", "0.0.9"], ["@google-cloud/storage", "6.12.0"], ["@google-cloud/tasks", "5.5.1"], ["@pinecone-database/pinecone", "0.1.6"], ["@beyond-js/response", "0.0.3"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.0/realtime/client"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/channel', dependency_1], ['@beyond-js/events/events', dependency_2], ['@aimpact/agents-api/realtime/client/base', dependency_3], ['@aimpact/agents-api/realtime/utils', dependency_4]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./channel
      *************************/
      ims.set('./channel', {
        hash: 36272026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Channel = void 0;
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _events = require("@beyond-js/events/events");
          // const SERVER_URL = 'ws://localhost:5040';
          const SERVER_URL = 'wss://dev.agents.api.aimpact.partners';
          class Channel extends _events.Events {
            #channel;
            #created = false;
            get status() {
              const {
                status
              } = this.#channel;
              return status === 'open' && this.#created ? 'created' : status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor() {
              super();
              this.#channel = new _channel.Channel({
                url: SERVER_URL
              });
              this.#channel.on('open', this.#onopen);
              this.#channel.on('close', this.#onclose);
              this.#channel.on('message', this.#onmessage);
            }
            #onopen = () => this.trigger('open');
            #onclose = () => this.trigger('close');
            #onmessage = message => {
              let event, data;
              try {
                const parsed = JSON.parse(message);
                ({
                  event,
                  data
                } = parsed);
                if (!event) {
                  console.warn(`Agent message seems to be invalid, event not defined:`, message);
                  return;
                }
              } catch (exc) {
                console.warn(`Unable to parse agent message:`, message, exc.message);
                return;
              }
              console.log(`Event "${event}" has been received:`, data);
              event === 'session.created' && (this.#created = true);
              this.trigger(event, data);
            };
            #cleanup() {
              this.#channel.off('open', this.#onopen);
              this.#channel.off('close', this.#onclose);
              this.#channel.off('message', this.#onmessage);
            }
            async connect() {
              return await this.#channel.connect();
            }
            async close() {
              this.#cleanup();
              return await this.#channel.close();
            }
            send(event, data) {
              this.#channel.send(JSON.stringify({
                event,
                data
              }));
            }
          }
          exports.Channel = Channel;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 314552738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSession = void 0;
          var _base = require("@aimpact/agents-api/realtime/client/base");
          var _channel = require("./channel");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          /*bundle*/
          class ClientSession extends _base.ClientSessionBase {
            #channel;
            get status() {
              return this.#channel.status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor(settings) {
              const channel = new _channel.Channel();
              super(channel, channel, settings);
              this.#channel = channel;
            }
            async connect() {
              const ok = await this.#channel.connect();
              ok && (await super.connect());
              return ok;
            }
            async close() {
              this.#channel.close();
              return await super.close();
            }
            async update(settings) {
              this.#channel.send('connect', settings);
            }
            listen(data) {
              const audio = _utils.RealtimeUtils.arrayBufferToBase64(data.mono);
              this.#channel.send('listen', {
                audio
              });
            }
          }
          exports.ClientSession = ClientSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ClientSession",
        "name": "ClientSession"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ClientSession') && _export("ClientSession", ClientSession = require ? require('./index').ClientSession : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2hhbm5lbCIsInJlcXVpcmUiLCJfZXZlbnRzIiwiU0VSVkVSX1VSTCIsIkNoYW5uZWwiLCJFdmVudHMiLCJjaGFubmVsIiwiY3JlYXRlZCIsInN0YXR1cyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJvbiIsIm9ub3BlbiIsIm9uY2xvc2UiLCJvbm1lc3NhZ2UiLCIjb25vcGVuIiwidHJpZ2dlciIsIiNvbmNsb3NlIiwibWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJ3YXJuIiwiZXhjIiwibG9nIiwiY2xlYW51cCIsIiNjbGVhbnVwIiwib2ZmIiwiY29ubmVjdCIsImNsb3NlIiwic2VuZCIsInN0cmluZ2lmeSIsImV4cG9ydHMiLCJfYmFzZSIsIl91dGlscyIsIkNsaWVudFNlc3Npb24iLCJDbGllbnRTZXNzaW9uQmFzZSIsInNldHRpbmdzIiwib2siLCJ1cGRhdGUiLCJsaXN0ZW4iLCJhdWRpbyIsIlJlYWx0aW1lVXRpbHMiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwibW9ubyJdLCJzb3VyY2VzIjpbIi9jaGFubmVsLnRzIiwiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFFQTtVQUNBLE1BQU1FLFVBQVUsR0FBRyx1Q0FBdUM7VUFFcEQsTUFBT0MsT0FBUSxTQUFRRixPQUFBLENBQUFHLE1BQU07WUFDbEMsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLE9BQVEsR0FBRyxLQUFLO1lBRWhCLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxNQUFNO2dCQUFFQTtjQUFNLENBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQUYsT0FBUTtjQUNoQyxPQUFPRSxNQUFNLEtBQUssTUFBTSxJ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T0FBQSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RFRCxJQUFBaUMsS0FBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFELFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQyxNQUFBLEdBQUFyQyxPQUFBO1VBRU87VUFBVSxNQUFPc0MsYUFBYyxTQUFRRixLQUFBLENBQUFHLGlCQUFpQjtZQUM5RCxDQUFBbEMsT0FBUTtZQUVSLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRLENBQUNFLE1BQU07WUFDNUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUgsT0FBUSxDQUFDRyxLQUFLO1lBQzNCO1lBRUFDLFlBQVkrQixRQUF1QztjQUNsRCxNQUFNbkMsT0FBTyxHQUFHLElBQUlOLFFBQUEsQ0FBQUksT0FBTyxFQUFFO2NBQzdCLEtBQUssQ0FBQ0UsT0FBTyxFQUFFQSxPQUFPLEVBQUVtQyxRQUFRLENBQUM7Y0FFakMsSUFBSSxDQUFDLENBQUFuQyxPQUFRLEdBQUdBLE9BQU87WUFDeEI7WUFFQSxNQUFNMEIsT0FBT0EsQ0FBQTtjQUNaLE1BQU1VLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBcEMsT0FBUSxDQUFDMEIsT0FBTyxFQUFFO2NBQ3hDVSxFQUFFLEtBQUssTUFBTSxLQUFLLENBQUNWLE9BQU8sRUFBRSxDQUFDO2NBRTdCLE9BQU9VLEVBQUU7WUFDVjtZQUVBLE1BQU1ULEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQTNCLE9BQVEsQ0FBQzJCLEtBQUssRUFBRTtjQUNyQixPQUFPLE1BQU0sS0FBSyxDQUFDQSxLQUFLLEVBQUU7WUFDM0I7WUFFQSxNQUFNVSxNQUFNQSxDQUFDRixRQUF5RDtjQUNyRSxJQUFJLENBQUMsQ0FBQW5DLE9BQVEsQ0FBQzRCLElBQUksQ0FBQyxTQUFTLEVBQUVPLFFBQVEsQ0FBQztZQUN4QztZQUVBRyxNQUFNQSxDQUFDdkIsSUFBMkM7Y0FDakQsTUFBTXdCLEtBQUssR0FBR1AsTUFBQSxDQUFBUSxhQUFhLENBQUNDLG1CQUFtQixDQUFDMUIsSUFBSSxDQUFDMkIsSUFBSSxDQUFDO2NBQzFELElBQUksQ0FBQyxDQUFBMUMsT0FBUSxDQUFDNEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFBRVc7Y0FBSyxDQUFFLENBQUM7WUFDeEM7O1VBQ0FULE9BQUEsQ0FBQUcsYUFBQSxHQUFBQSxhQUFBIiwiaWdub3JlTGlzdCI6W119