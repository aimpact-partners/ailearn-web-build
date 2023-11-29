System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.3/icons"], function (_export, _context2) {
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
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi003Icons) {
      dependency_3 = _pragmateUi003Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/collapsible');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./content
      *************************/
      ims.set('./content', {
        hash: 878084793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
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
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4042704803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 936583988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
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
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children), _react.default.createElement(_icons.IconButton, {
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
        hash: 859812409,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIm9wZW4iLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJjbHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkNvbGxhcHNpYmxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29ucyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJvbkNsaWNrIiwiY2xzQnV0dG9uIiwiYXR0cnMiLCJJY29uQnV0dG9uIiwiaWNvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwib3BlbmVkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIlByb3ZpZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRlbnQudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2hlYWRlci50c3giLCIvdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVyxTQUFVRSxrQkFBa0JBLENBQUM7WUFBQ0MsU0FBUztZQUFFQztVQUFRLENBQW9CO1lBQ3RGLE1BQU07Y0FBQ0M7WUFBSSxDQUFDLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxxQkFBcUIsR0FBRTtZQUN0QyxNQUFNQyxHQUFHLEdBQUcsdUJBQXVCSixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUNsRUUsSUFBSSxHQUFHLCtCQUErQixHQUFHLEVBQzFDLEVBQUU7WUFDRixPQUFPTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixT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