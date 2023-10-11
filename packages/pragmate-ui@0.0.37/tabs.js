System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContainer: void 0,
    Panes: void 0,
    Tab: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
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
          "vspecifier": "pragmate-ui@0.0.37/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
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