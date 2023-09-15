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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tabs');
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
        hash: 3582042304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = void 0;
          var React = require("react");
          var _context = require("./context");
          const {
            useState
          } = React;
          /* bundle  */
          const TabsContainer = ({
            active,
            onChange,
            children,
            panes
          }) => {
            const activeIndex = active || 0;
            const [activeTab, setActiveTab] = useState(activeIndex);
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
        hash: 3382115399,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJUYWJzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlVGFic0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJ1c2VTdGF0ZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwicGFuZXMiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJDb250cm9sIiwiVGFiIiwicHJvcHMiLCJpbmRleCIsImRpc2FibGVkIiwiY2xzIiwib25DbGljayIsImV2ZW50IiwiYXR0cnMiLCJfdXNlU2Nyb2xsIiwiX3RhYiIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTY3JvbGwiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwia2V5IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGws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