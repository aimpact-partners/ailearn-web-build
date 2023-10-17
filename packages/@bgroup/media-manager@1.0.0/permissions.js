System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.0"], ["socket.io-client", "4.7.1"], ["@bgroup/media-manager", "1.0.0"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@bgroup/media-manager@1.0.0/permissions"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2277821615,
        creator: function (require, exports) {
          "use strict";

          //your code here
          // Initialize media stream
          let mediaStream = null;
          const initMedia = async () => {
            try {
              mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
              });
              // Handle media stream
              // e.g., attach the stream to an HTMLVideoElement or use it in WebRTC
            } catch (error) {
              console.error('Media stream initialization failed:', error);
            }
          };
          // Listen for PermissionStatus changes
          const monitorPermission = async permissionName => {
            const permissionStatus = await navigator.permissions.query({
              name: permissionName
            });
            // Initial status
            console.log(`${permissionName} permission is ${permissionStatus.state}`);
            // Listen for changes
            permissionStatus.onchange = () => {
              console.log(`${permissionName} permission changed to ${permissionStatus.state}`);
              if (permissionStatus.state === 'granted') {
                // Re-initialize media if required
                initMedia();
              }
              // Handle other states: 'denied', 'prompt'
            };
          };
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBLElBQUlBLFdBQVcsR0FBdUIsSUFBSTtVQUUxQyxNQUFNQyxTQUFTLEdBQUcsWUFBVztZQUM1QixJQUFJO2NBQ0hELFdBQVcsR0FBRyxNQUFNRSxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsWUFBWSxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsSUFBSTtnQkFBRUMsS0FBSyxFQUFFO2NBQUksQ0FBQyxDQUFDO2NBRW5GO2NBQ0E7YUFDQSxDQUFDLE9BQU9DLEtBQUssRUFBRTtjQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQ0FBcUMsRUFBRUEsS0FBSyxDQUFDOztVQUU3RCxDQUFDO1VBRUQ7VUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFPQyxjQUE4QixJQUFJO1lBQ2xFLE1BQU1DLGdCQUFnQixHQUFHLE1BQU1ULFNBQVMsQ0FBQ1UsV0FBVyxDQUFDQyxLQUFLLENBQUM7Y0FBQ0MsSUFBSSxFQUFFSjtZQUFjLENBQUMsQ0FBQztZQUVsRjtZQUNBRixPQUFPLENBQUNPLEdBQUcsQ0FBQyxHQUFHTCxjQUFjLGtCQUFrQkMsZ0JBQWdCLENBQUNLLEtBQUssRUFBRSxDQUFDO1lBRXhFO1lBQ0FMLGdCQUFnQixDQUFDTSxRQUFRLEdBQUcsTUFBSztjQUNoQ1QsT0FBTyxDQUFDTyxHQUFHLENBQUMsR0FBR0wsY0FBYywwQkFBMEJDLGdCQUFnQixDQUFDSyxLQUFLLEVBQUUsQ0FBQztjQUVoRixJQUFJTCxnQkFBZ0IsQ0FBQ0ssS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDekM7Z0JBQ0FmLFNBQVMsRUFBRTs7Y0FFWjtZQUNELENBQUM7VUFDRixDQUFDIiwibmFtZXMiOlsibWVkaWFTdHJlYW0iLCJpbml0TWVkaWEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwiZXJyb3IiLCJjb25zb2xlIiwibW9uaXRvclBlcm1pc3Npb24iLCJwZXJtaXNzaW9uTmFtZSIsInBlcm1pc3Npb25TdGF0dXMiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwibmFtZSIsImxvZyIsInN0YXRlIiwib25jaGFuZ2UiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19