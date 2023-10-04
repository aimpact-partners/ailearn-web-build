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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "0.0.2"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY29udGV4dCIsIkNvbGxhcHNpYmxlQ29udGVudCIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwib3BlbiIsInVzZUNvbGxhcHNpYmxlQ29udGV4dCIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZUNvbnRleHQiLCJfaWNvbnMiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRvZ2dsZVRpdGxlIiwic2V0T3BlbiIsIm9uVG9nZ2xlIiwib25DbGljayIsImNsc0J1dHRvbiIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsImljb24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW5lZCIsInVzZVN0YXRlIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250ZW50LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsa0JBQWtCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUM7VUFBUSxDQUFxQjtZQUN4RixNQUFNO2NBQUVDO1lBQUksQ0FBRSxHQUFHLElBQUFKLFFBQUEsQ0FBQUsscUJBQXFCLEdBQUU7WUFDeEMsTUFBTUMsR0FBRyxHQUFHLHVCQUF1QkosU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFDbEVFLElBQUksR0FBRywrQkFBK0IsR0FBRyxFQUMxQyxFQUFFO1lBQ0YsT0FBT04sS0FBQSxDQUFBUyxhQUFBO2NBQVNMLFNBQVMsRUFBRUk7WUFBRyxHQUFHSCxR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