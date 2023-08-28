System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/components", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Pricing, __beyond_pkg, hmr;
  _export("Pricing", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Components) {
      dependency_3 = _pragmateUi0036Components;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/pricing"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/pricing');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./free-plan
      ***************************/
      ims.set('./free-plan', {
        hash: 4110882225,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FreePlan = FreePlan;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          function FreePlan(props) {
            const {
              title,
              description,
              advantages
            } = props;
            const HEADER = title.charAt(0).toUpperCase() + title.slice(1);
            const listAdvanges = advantages.map((advantage, index) => React.createElement("li", {
              key: index
            }, React.createElement(_icons.Icon, {
              icon: "circle-checks",
              className: "md"
            }), " ", advantage));
            return React.createElement("section", {
              className: "container-component container__component-free"
            }, React.createElement("h3", {
              className: "component__h3"
            }, HEADER), React.createElement("p", {
              className: "component__p"
            }, description), React.createElement("div", {
              className: "view-price"
            }, React.createElement("h2", {
              className: "price__h2"
            }, "Free Forever"), React.createElement(_components.Button, {
              variant: "primary"
            }, "Sign up")), React.createElement("div", {
              className: "container-advantages"
            }, React.createElement("ul", null, listAdvanges)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 880269447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pricing = Pricing;
          var React = require("react");
          var _freePlan = require("./free-plan");
          var _premiumPlan = require("./premium-plan");
          /* bundle */
          function Pricing({
            variant = "free",
            ...props
          }) {
            const planComponents = {
              free: _freePlan.FreePlan,
              premium: _premiumPlan.PremiumPlan
            };
            const PlanComponent = planComponents[variant];
            return React.createElement("div", {
              className: "container_princigs"
            }, React.createElement(PlanComponent, {
              ...props
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./premium-plan
      ******************************/

      ims.set('./premium-plan', {
        hash: 3650422294,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PremiumPlan = PremiumPlan;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          function PremiumPlan(props) {
            const {
              title,
              price,
              description,
              advantages
            } = props;
            const HEADER = title.charAt(0).toUpperCase() + title.slice(1);
            const listAdvanges = advantages.map((advantage, index) => React.createElement("li", {
              key: index
            }, React.createElement(_icons.Icon, {
              icon: "circle-checks",
              className: "md"
            }), advantage));
            return React.createElement("section", {
              className: "container-component container__component-prop"
            }, React.createElement("h3", {
              className: "component__h3"
            }, HEADER), React.createElement("p", {
              className: "component__p"
            }, description), React.createElement("div", {
              className: "view-price"
            }, React.createElement("h2", {
              className: "price__h2"
            }, price, " \u20AC/month"), React.createElement(_components.Button, {
              variant: "primary"
            }, "Suscribe now")), React.createElement("div", {
              className: "container-advantages"
            }, React.createElement("ul", null, listAdvanges)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 999835711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Pricing",
        "name": "Pricing"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Pricing') && _export("Pricing", Pricing = require ? require('./index').Pricing : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0E7VUFDTSxTQUFVQSxRQUFRLENBQUNDLEtBQUs7WUFDNUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLFdBQVc7Y0FBRUM7WUFBVSxDQUFFLEdBQUdILEtBQUs7WUFDaEQsTUFBTUksTUFBTSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdMLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUU3RCxNQUFNQyxZQUFZLEdBQUdMLFVBQVUsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUNuREM7Y0FBSUMsR0FBRyxFQUFFRjtZQUFLLEdBQ1pDLG9CQUFDRSxXQUFJO2NBQUNDLElBQUksRUFBQyxlQUFlO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsT0FBRU4sU0FBUyxDQUUxRCxDQUFDO1lBQ0YsT0FDRUU7Y0FBU0ksU0FBUyxFQUFDO1lBQStDLEdBQ2hFSjtjQUFJSSxTQUFTLEVBQUM7WUFBZSxHQUFFWixNQUFNLENBQU0sRUFDM0NRO2NBQUdJLFNBQVMsRUFBQztZQUFjLEdBQUVkLFdBQVcsQ0FBSyxFQUU3Q1U7Y0FBS0ksU0FBUyxFQUFDO1lBQVksR0FDekJKO2NBQUlJLFNBQVMsRUFBQztZQUFXLGtCQUFrQixFQUMzQ0osb0JBQUNLLGtCQUFNO2NBQUNDLE9BQU8sRUFBQztZQUFTLGFBQWlCLENBQ3RDLEVBRU5OO2NBQUtJLFNBQVMsRUFBQztZQUFzQixHQUNuQ0osZ0NBQUtKLFlBQVksQ0FBTSxDQUNuQixDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBO1VBRUE7VUFDQTtVQUNPO1VBQVksU0FBVVcsT0FBTyxDQUFDO1lBQUVELE9BQU8sR0FBRyxNQUFNO1lBQUUsR0FBR2xCO1VBQUssQ0FBRTtZQUNqRSxNQUFNb0IsY0FBYyxHQUFHO2NBQ3JCQyxJQUFJLEVBQUV0QixrQkFBUTtjQUNkdUIsT0FBTyxFQUFFQzthQUNWO1lBRUQsTUFBTUMsYUFBYSxHQUFHSixjQUFjLENBQUNGLE9BQU8sQ0FBQztZQUU3QyxPQUNFTjtjQUFLSSxTQUFTLEVBQUM7WUFBb0IsR0FDakNKLG9CQUFDWSxhQUFhO2NBQUEsR0FBS3hCO1lBQUssRUFBSSxDQUN4QjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQTtVQUNBO1VBQ0E7VUFDTSxTQUFVdUIsV0FBVyxDQUFDdkIsS0FBSztZQUMvQixNQUFNO2NBQUVDLEtBQUs7Y0FBRXdCLEtBQUs7Y0FBRXZCLFdBQVc7Y0FBRUM7WUFBVSxDQUFFLEdBQUdILEtBQUs7WUFDdkQsTUFBTUksTUFBTSxHQUFHSCxLQUFLLENBQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxFQUFFLEdBQUdMLEtBQUssQ0FBQ00sS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3RCxNQUFNQyxZQUFZLEdBQUdMLFVBQVUsQ0FBQ00sR0FBRyxDQUFDLENBQUNDLFNBQVMsRUFBRUMsS0FBSyxLQUNuREM7Y0FBSUMsR0FBRyxFQUFFRjtZQUFLLEdBQ1pDLG9CQUFDRSxXQUFJO2NBQUNDLElBQUksRUFBQyxlQUFlO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDM0NOLFNBQVMsQ0FFYixDQUFDO1lBQ0YsT0FDRUU7Y0FBU0ksU0FBUyxFQUFDO1lBQStDLEdBQ2hFSjtjQUFJSSxTQUFTLEVBQUM7WUFBZSxHQUFFWixNQUFNLENBQU0sRUFDM0NRO2NBQUdJLFNBQVMsRUFBQztZQUFjLEdBQUVkLFdBQVcsQ0FBSyxFQUU3Q1U7Y0FBS0ksU0FBUyxFQUFDO1lBQVksR0FDekJKO2NBQUlJLFNBQVMsRUFBQztZQUFXLEdBQUVTLEtBQUssa0JBQWMsRUFDOUNiLG9CQUFDSyxrQkFBTTtjQUFDQyxPQUFPLEVBQUM7WUFBUyxrQkFBc0IsQ0FDM0MsRUFFTk47Y0FBS0ksU0FBUyxFQUFDO1lBQXNCLEdBQ25DSixnQ0FBS0osWUFBWSxDQUFNLENBQ25CLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7VUMzQkE7O1VBRUFrQjtZQUNBQztVQUNBIiwibmFtZXMiOlsiRnJlZVBsYW4iLCJwcm9wcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhZHZhbnRhZ2VzIiwiSEVBREVSIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImxpc3RBZHZhbmdlcyIsIm1hcCIsImFkdmFudGFnZSIsImluZGV4IiwiUmVhY3QiLCJrZXkiLCJJY29uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJQcmljaW5nIiwicGxhbkNvbXBvbmVudHMiLCJmcmVlIiwicHJlbWl1bSIsIlByZW1pdW1QbGFuIiwiUGxhbkNvbXBvbmVudCIsInByaWNlIiwiT2JqZWN0IiwidmFsdWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvZnJlZS1wbGFuLnRzeCIsImNvZGUvdHMvaW5kZXgudHN4IiwiY29kZS90cy9wcmVtaXVtLXBsYW4udHN4IiwiY29kZS90cy90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==