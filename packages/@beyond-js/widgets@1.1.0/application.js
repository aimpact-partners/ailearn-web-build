System.register(["@beyond-js/kernel@0.1.9/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.1.4-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/widgets@1.1.0/application"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./startup
      *************************/
      ims.set('./startup', {
        hash: 547742268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          function createLayout(config) {
            const {
              layout
            } = config;
            const element = document.createElement(layout ? layout : 'beyond-layout-children');
            document.body.append(element);
          }
          function startup() {
            const promises = [];
            const {
              specifier
            } = globalThis.__app_package;
            promises.push(bimport(`${specifier}/config`));
            promises.push(bimport(`${specifier}/start`));
            promises.push(bimport('@beyond-js/kernel/core'));
            promises.push(bimport('@beyond-js/kernel/routing'));
            promises.push(bimport('@beyond-js/widgets/routing'));
            promises.push(bimport('@beyond-js/widgets/layout'));
            Promise.all(promises).then(([{
              default: config
            }]) => createLayout(config)).catch(exc => console.log(exc.stack));
          }
          (() => {
            if (!globalThis.__ssr_fetch) {
              startup();
              return;
            }
            /**
             * window.__ssr_fetch is injected in the index.html when routing.ssr is on
             */
            window.__ssr_fetch.then(ssr => {
              if (!ssr.json || ssr.json.errors?.length) {
                console.error('Error getting ssr data:', ssr.json.errors);
                startup();
                return;
              }
              const promises = [];
              const {
                specifier
              } = globalThis.__app_package;
              promises.push(bimport(`${specifier}/config`));
              promises.push(bimport(`${specifier}/start`));
              promises.push(bimport('@beyond-js/widgets/render'));
              promises.push(bimport('@beyond-js/widgets/layout'));
              Promise.all(promises).then(([{
                default: config
              },, render, layout]) => {
                // Register the widgets
                const specs = new Map(ssr.json.widgets.specs);
                render.widgets.register([...specs.values()]);
                // Register the ssr widgets
                const instances = ssr.json.widgets.instances;
                const prerender = render.prerender;
                instances.forEach(instance => prerender.ssr.push(instance));
                // Register the ssr page and layout structure
                const lssr = layout.ssr;
                lssr.data(ssr.json.main, ssr.json.page);
                createLayout(config);
              }).catch(exc => console.log(exc.stack));
            });
          })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVMYXlvdXQiLCJjb25maWciLCJsYXlvdXQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInN0YXJ0dXAiLCJwcm9taXNlcyIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwicHVzaCIsImJpbXBvcnQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsImRlZmF1bHQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJzdGFjayIsIl9fc3NyX2ZldGNoIiwid2luZG93Iiwic3NyIiwianNvbiIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwicmVuZGVyIiwic3BlY3MiLCJNYXAiLCJ3aWRnZXRzIiwicmVnaXN0ZXIiLCJ2YWx1ZXMiLCJpbnN0YW5jZXMiLCJwcmVyZW5kZXIiLCJmb3JFYWNoIiwiaW5zdGFuY2UiLCJsc3NyIiwiZGF0YSIsIm1haW4iLCJwYWdlIl0sInNvdXJjZXMiOlsiL3N0YXJ0dXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUtBLFNBQVNBLFlBQVlBLENBQUNDLE1BQVc7WUFDaEMsTUFBTTtjQUFFQztZQUFNLENBQUUsR0FBR0QsTUFBTTtZQUN6QixNQUFNRSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDSCxNQUFNLEdBQUdBLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQztZQUNsRkUsUUFBUSxDQUFDRSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0osT0FBTyxDQUFDO1VBQzlCO1VBRUEsU0FBU0ssT0FBT0EsQ0FBQTtZQUNmLE1BQU1DLFFBQVEsR0FBbUIsRUFBRTtZQUVuQyxNQUFNO2NBQUVDO1lBQVMsQ0FBRSxHQUFTQyxVQUFXLENBQUNDLGFBQWE7WUFDckRILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsR0FBR0osU0FBUyxTQUFTLENBQUMsQ0FBQztZQUM3Q0QsUUFBUSxDQUFDSSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxHQUFHSixTQUFTLFFBQVEsQ0FBQyxDQUFDO1lBRTVDRCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaERMLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNuREwsUUFBUSxDQUFDSSxJQUFJLENBQUNDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQ3BETCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFFbkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRLENBQUMsQ0FDbkJRLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBRUMsT0FBTyxFQUFFakI7WUFBTSxDQUFFLENBQUMsS0FBS0QsWUFBWSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUNyRGtCLEtBQUssQ0FBQ0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQztVQUN2QztVQUVBLENBQUMsTUFBSztZQUNMLElBQUksQ0FBT1osVUFBVyxDQUFDYSxXQUFXLEVBQUU7Y0FDbkNoQixPQUFPLEVBQUU7Y0FDVDs7WUFHRDs7O1lBR01pQixNQUFPLENBQUNELFdBQVcsQ0FBQ1AsSUFBSSxDQUFFUyxHQUFRLElBQUk7Y0FDM0MsSUFBSSxDQUFDQSxHQUFHLENBQUNDLElBQUksSUFBSUQsR0FBRyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFO2dCQUN6Q1IsT0FBTyxDQUFDUyxLQUFLLENBQUMseUJBQXlCLEVBQUVKLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUM7Z0JBQ3pEcEIsT0FBTyxFQUFFO2dCQUNUOztjQUdELE1BQU1DLFFBQVEsR0FBbUIsRUFBRTtjQUVuQyxNQUFNO2dCQUFFQztjQUFTLENBQUUsR0FBU0MsVUFBVyxDQUFDQyxhQUFhO2NBQ3JESCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEdBQUdKLFNBQVMsU0FBUyxDQUFDLENBQUM7Y0FDN0NELFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxPQUFPLENBQUMsR0FBR0osU0FBUyxRQUFRLENBQUMsQ0FBQztjQUU1Q0QsUUFBUSxDQUFDSSxJQUFJLENBQUNDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2NBQ25ETCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Y0FFbkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxRQUFRLENBQUMsQ0FDbkJRLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUVDLE9BQU8sRUFBRWpCO2NBQU0sQ0FBRSxHQUFJOEIsTUFBTSxFQUFFN0IsTUFBTSxDQUFDLEtBQUk7Z0JBQ2pEO2dCQUNBLE1BQU04QixLQUFLLEdBQUcsSUFBSUMsR0FBRyxDQUFDUCxHQUFHLENBQUNDLElBQUksQ0FBQ08sT0FBTyxDQUFDRixLQUFLLENBQUM7Z0JBQzdDRCxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUU1QztnQkFDQSxNQUFNQyxTQUFTLEdBQUdYLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDTyxPQUFPLENBQUNHLFNBQVM7Z0JBQzVDLE1BQU1DLFNBQVMsR0FBYVAsTUFBTSxDQUFDTyxTQUFTO2dCQUM1Q0QsU0FBUyxDQUFDRSxPQUFPLENBQUVDLFFBQWEsSUFBS0YsU0FBUyxDQUFDWixHQUFHLENBQUNiLElBQUksQ0FBQzJCLFFBQVEsQ0FBQyxDQUFDO2dCQUVsRTtnQkFDQSxNQUFNQyxJQUFJLEdBQWF2QyxNQUFNLENBQUN3QixHQUFHO2dCQUNqQ2UsSUFBSSxDQUFDQyxJQUFJLENBQUNoQixHQUFHLENBQUNDLElBQUksQ0FBQ2dCLElBQUksRUFBRWpCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDaUIsSUFBSSxDQUFDO2dCQUN2QzVDLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO2NBQ3JCLENBQUMsQ0FBQyxDQUNEa0IsS0FBSyxDQUFDQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztVQUNILENBQUMsRUFBQyxDQUFFIiwiaWdub3JlTGlzdCI6W119