System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContainer: void 0,
    Panes: void 0,
    Tab: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react) {
      dependency_1 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.37"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.37/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.37/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3435264403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTabsContext = exports.TabsContext = void 0;
          var React = require("react");
          const TabsContext = React.createContext({});
          exports.TabsContext = TabsContext;
          const useTabsContext = () => React.useContext(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1936904118,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = void 0;
          var React = require("react");
          var _context = require("./context");
          /* bundle  */
          const TabsContainer = ({
            active,
            onChange,
            children,
            panes
          }) => {
            const activeIndex = active || 0;
            const [activeTab, setActiveTab] = React.useState(activeIndex);
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange
            };
            return React.createElement(_context.TabsContext.Provider, {
              value: value
            }, React.createElement("section", {
              className: "tab-container"
            }, children));
          };
          exports.TabsContainer = TabsContainer;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 1381014586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./panes
      ***********************/

      ims.set('./panes', {
        hash: 3936769916,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Panes = Panes;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function Panes({
            children
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            const childrenArray = React.Children.toArray(children);
            const Control = childrenArray[activeTab];
            return React.createElement("section", {
              className: "tab-content"
            }, Control);
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 169848370,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = Tab;
          var React = require("react");
          var _context = require("./context");
          /*bundle */
          function Tab(props) {
            const {
              children,
              index,
              disabled
            } = props;
            const {
              activeTab,
              setActiveTab,
              onChange
            } = (0, _context.useTabsContext)();
            const cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            const onClick = event => {
              if (onChange) onChange(event, index);
              setActiveTab(index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return React.createElement("div", {
              className: cls,
              ...attrs
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 1482265679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = void 0;
          var React = require("react");
          var _context = require("./context");
          var _useScroll = require("./use-scroll");
          var _tab = require("./tab");
          /*bundle*/
          const Tabs = ({
            children
          }) => {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            const ref = React.useRef(null);
            (0, _useScroll.useScroll)(ref, activeTab);
            const output = children.map((item, index) => {
              const props = {
                ...item.props,
                index,
                key: index
              };
              if (React.isValidElement(item) && item.type === _tab.Tab) {
                const tabChild = item;
                return React.cloneElement(tabChild, props);
              }
              return item;
            });
            return React.createElement("header", {
              className: "tab-menu"
            }, React.createElement("div", {
              className: "tabs",
              ref: ref
            }, output));
          };
          exports.Tabs = Tabs;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-scroll
      ****************************/

      ims.set('./use-scroll', {
        hash: 1755902296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useScroll = useScroll;
          var React = require("react");
          function useScroll(tabRef, activeTab) {
            React.useEffect(() => {
              const scrollToTab = index => {
                const tabElement = tabRef.current?.querySelectorAll('.tab')[index];
                if (tabElement) {
                  const container = tabRef.current;
                  const containerRect = container.getBoundingClientRect();
                  const tabRect = tabElement.getBoundingClientRect();
                  const scrollLeft = container.scrollLeft;
                  if (tabRect.left < containerRect.left) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.left - containerRect.left,
                      behavior: 'smooth'
                    });
                  } else if (tabRect.right > containerRect.right) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.right - containerRect.right,
                      behavior: 'smooth'
                    });
                  }
                }
              };
              scrollToTab(activeTab);
            }, [activeTab]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "TabsContainer",
        "name": "TabsContainer"
      }, {
        "im": "./panes",
        "from": "Panes",
        "name": "Panes"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./tabs",
        "from": "Tabs",
        "name": "Tabs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TabsContainer') && _export("TabsContainer", TabsContainer = require ? require('./index').TabsContainer : value);
        (require || prop === 'Panes') && _export("Panes", Panes = require ? require('./panes').Panes : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'Tabs') && _export("Tabs", Tabs = require ? require('./tabs').Tabs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJUYWJzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlVGFic0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJjaGlsZHJlbiIsInBhbmVzIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJDb250cm9sIiwiVGFiIiwicHJvcHMiLCJpbmRleCIsImRpc2FibGVkIiwiY2xzIiwib25DbGljayIsImV2ZW50IiwiYXR0cnMiLCJfdXNlU2Nyb2xsIiwiX3RhYiIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTY3JvbGwiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwia2V5IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGws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