System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.37/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
  _export({
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    CollapsibleContainer: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0037Icons) {
      dependency_3 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/collapsible');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./content
      *************************/
      ims.set('./content', {
        hash: 1942996486,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var React = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            return React.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 626239623,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var React = require("react");
          const CollapsibleContext = React.createContext(null);
          exports.CollapsibleContext = CollapsibleContext;
          const useCollapsibleContext = () => React.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 4251759058,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var React = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function CollapsibleHeader({
            children,
            className,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (onToggle) await onToggle(!open);
              setOpen(!open);
            };
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            const clsButton = `collapsible__button ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            if (toggleTitle) {
              attrs.onClick = onClick;
            }
            return React.createElement("header", {
              ...attrs
            }, React.createElement("div", {
              className: 'collapsible__header-content'
            }, children), React.createElement(_icons.IconButton, {
              onClick: onClick,
              className: clsButton,
              icon: 'left'
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2330615720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var React = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className
          }) {
            open;
            const [opened, setOpen] = React.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            return React.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, React.createElement("article", {
              className: cls
            }, children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./index",
        "from": "CollapsibleContainer",
        "name": "CollapsibleContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./header').CollapsibleHeader : value);
        (require || prop === 'CollapsibleContainer') && _export("CollapsibleContainer", CollapsibleContainer = require ? require('./index').CollapsibleContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFNTztVQUFXLFNBQVVBLGtCQUFrQixDQUFDO1lBQUVDLFNBQVM7WUFBRUM7VUFBUSxDQUFxQjtZQUN4RixNQUFNO2NBQUVDO1lBQUksQ0FBRSxHQUFHLGtDQUFxQixHQUFFO1lBQ3hDLE1BQU1DLEdBQUcsR0FBRyx1QkFBdUJILFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQ2xFRSxJQUFJLEdBQUcsK0JBQStCLEdBQUcsRUFDMUMsRUFBRTtZQUNGLE9BQU9FO2NBQVNKLFNBQVMsRUFBRUc7WUFBRyxHQUFHRixRQUFRLENBQVc7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFPTyxNQUFNSSxrQkFBa0IsR0FBR0QsS0FBSyxDQUFDRSxhQUFhLENBQUMsSUFBSSxDQUFDO1VBQUNDO1VBQ3JELE1BQU1DLHFCQUFxQixHQUFHLE1BQU1KLEtBQUssQ0FBQ0ssVUFBVSxDQUFDSixrQkFBa0IsQ0FBQztVQUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSaEY7VUFDQTtVQUNBO1VBT087VUFBVyxTQUFVRyxpQkFBaUIsQ0FBQztZQUM3Q1QsUUFBUTtZQUNSRCxTQUFTO1lBQ1RXLFdBQVcsR0FBRztVQUFJLENBQ0M7WUFDbkIsTUFBTTtjQUFFQyxPQUFPO2NBQUVDLFFBQVE7Y0FBRVg7WUFBSSxDQUFFLEdBQUcsa0NBQXFCLEdBQUU7WUFFM0QsTUFBTVksT0FBTyxHQUFHLFlBQVc7Y0FDMUIsSUFBSUQsUUFBUSxFQUFFLE1BQU1BLFFBQVEsQ0FBQyxDQUFDWCxJQUFJLENBQUM7Y0FFbkNVLE9BQU8sQ0FBQyxDQUFDVixJQUFJLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTUMsR0FBRyxHQUFHLHVCQUF1QkgsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSUUsSUFBSSxHQUFHLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDM0YsTUFBTWEsU0FBUyxHQUFHLHVCQUF1QmIsSUFBSSxHQUFHLDhCQUE4QixHQUFHLEVBQUUsRUFBRTtZQUNyRixNQUFNYyxLQUFLLEdBQWdEO2NBQUVoQixTQUFTLEVBQUVHO1lBQUcsQ0FBRTtZQUM3RSxJQUFJUSxXQUFXLEVBQUU7Y0FDaEJLLEtBQUssQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPOztZQUV4QixPQUNDVjtjQUFBLEdBQVlZO1lBQUssR0FDaEJaO2NBQUtKLFNBQVMsRUFBQztZQUE2QixHQUFFQyxRQUFRLENBQU8sRUFDN0RHLG9CQUFDYSxpQkFBVTtjQUFDSCxPQUFPLEVBQUVBLE9BQU87Y0FBRWQsU0FBUyxFQUFFZSxTQUFTO2NBQUVHLElBQUksRUFBRTtZQUFNLEVBQUksQ0FDNUQ7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFFQTtVQVNPO1VBQVcsU0FBVUMsb0JBQW9CLENBQUM7WUFDaERsQixRQUFRO1lBQ1JZLFFBQVE7WUFDUlgsSUFBSSxHQUFHLEtBQUs7WUFDWkY7VUFBUyxDQUNRO1lBQ2pCRSxJQUFJO1lBQ0osTUFBTSxDQUFDa0IsTUFBTSxFQUFFUixPQUFPLENBQUMsR0FBR1IsS0FBSyxDQUFDaUIsUUFBUSxDQUFDbkIsSUFBSSxDQUFDO1lBQzlDLE1BQU1vQixLQUFLLEdBQUc7Y0FBRXBCLElBQUksRUFBRWtCLE1BQU07Y0FBRVIsT0FBTztjQUFFQztZQUFRLENBQUU7WUFDakQsTUFBTVYsR0FBRyxHQUFHLDBCQUEwQkgsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUN6RSxPQUNDSSxvQkFBQ0MsMkJBQWtCLENBQUNrQixRQUFRO2NBQUNELEtBQUssRUFBRUE7WUFBSyxHQUN4Q2xCO2NBQVNKLFNBQVMsRUFBRUc7WUFBRyxHQUFHRixRQUFRLENBQVcsQ0FDaEI7VUFFaEMiLCJuYW1lcyI6WyJDb2xsYXBzaWJsZUNvbnRlbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIm9wZW4iLCJjbHMiLCJSZWFjdCIsIkNvbGxhcHNpYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlQ29sbGFwc2libGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJvbkNsaWNrIiwiY2xzQnV0dG9uIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbmVkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250ZW50LnRzeCIsInRzL2NvbnRleHQudHN4IiwidHMvaGVhZGVyLnRzeCIsInRzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdfQ==