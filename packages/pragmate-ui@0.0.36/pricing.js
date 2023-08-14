System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/form", "pragmate-ui@0.0.36/icons"], function (_export, _context) {
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
    }, function (_pragmateUi0036Form) {
      dependency_3 = _pragmateUi0036Form;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.5"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.7.2"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/pricing');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./free-plan
      ***************************/
      ims.set('./free-plan', {
        hash: 258975726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FreePlan = FreePlan;
          var React = require("react");
          var _form = require("pragmate-ui/form");
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
            }, "Free Forever"), React.createElement(_form.Button, {
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
        hash: 1577437274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PremiumPlan = PremiumPlan;
          var React = require("react");
          var _form = require("pragmate-ui/form");
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
            }, price, " \u20AC/month"), React.createElement(_form.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZm9ybSIsIl9pY29ucyIsIkZyZWVQbGFuIiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWR2YW50YWdlcyIsIkhFQURFUiIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsaXN0QWR2YW5nZXMiLCJtYXAiLCJhZHZhbnRhZ2UiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJJY29uIiwiaWNvbiIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJfZnJlZVBsYW4iLCJfcHJlbWl1bVBsYW4iLCJQcmljaW5nIiwicGxhbkNvbXBvbmVudHMiLCJmcmVlIiwicHJlbWl1bSIsIlByZW1pdW1QbGFuIiwiUGxhbkNvbXBvbmVudCIsInByaWNlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvY29kZS90cy9mcmVlLXBsYW4udHN4IiwiL2NvZGUvdHMvaW5kZXgudHN4IiwiL2NvZGUvdHMvcHJlbWl1bS1wbGFuLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTSxTQUFVRyxRQUFRQSxDQUFDQyxLQUFLO1lBQzVCLE1BQU07Y0FBRUMsS0FBSztjQUFFQyxXQUFXO2NBQUVDO1lBQVUsQ0FBRSxHQUFHSCxLQUFLO1lBQ2hELE1BQU1JLE1BQU0sR0FBR0gsS0FBSyxDQUFDSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsRUFBRSxHQUFHTCxLQUFLLENBQUNNLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFN0QsTUFBTUMsWUFB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