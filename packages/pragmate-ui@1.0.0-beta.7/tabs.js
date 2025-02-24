System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.7/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 948630568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTabsContext = exports.TabsContext = void 0;
          var _react = require("react");
          const TabsContext = exports.TabsContext = _react.default.createContext({});
          const useTabsContext = () => _react.default.useContext(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 2989196385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 144954022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var _react = require("react");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          /* bundle  */
          function TabsContainer({
            active = 0,
            onChange,
            className,
            current,
            children,
            tabs = [],
            panes,
            trackUrl
          }) {
            // Extract tab names from children
            if (trackUrl) {
              const tab = _routing.routing.uri.qs.get('tab');
              current = current ?? tab;
            }
            const activeIndex = tabs.includes(current) ? tabs.indexOf(current) : active;
            const [activeTab, setActiveTab] = _react.default.useState(activeIndex);
            const [currentTabName, setCurrentTabName] = _react.default.useState(current);
            // Update active tab if `current` prop changes
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange,
              trackUrl,
              current: currentTabName,
              setCurrentTabName,
              names: tabs
            };
            const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./panes
      ***********************/

      ims.set('./panes', {
        hash: 3917689778,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Panes = Panes;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Panes({
            children,
            className,
            items
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            if (items) {
              console.log('renderizando items');
              const Control = items[activeTab];
              return _react.default.createElement("section", {
                className: `tab-content ${className ? ` ${className}` : ''}`
              }, _react.default.createElement(Control, null));
            }
            const childrenArray = _react.default.Children.toArray(children);
            const Control = childrenArray[activeTab];
            const cls = `tab-content ${className ? ` ${className}` : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, Control);
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 588532965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = Tab;
          var _react = require("react");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle */
          function Tab(props) {
            const {
              children,
              index,
              disabled,
              className,
              name
            } = props;
            const {
              activeTab,
              setActiveTab,
              onChange,
              trackUrl
            } = (0, _context.useTabsContext)();
            let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            if (className) cls += ' ' + className;
            const onClick = event => {
              // todo: this event must be removed
              if (trackUrl) {
                // Convert `routing.uri.qs.entries` to an object
                const queryParams = Object.fromEntries(_routing.routing.uri.qs.entries());
                // Update the `tab` parameter
                queryParams.tab = name;
                // Build the new query string
                const queryString = new URLSearchParams(queryParams).toString();
                // Update the URL without reloading the page
                _routing.routing.replaceState({}, '', `${_routing.routing.uri.pathname}?${queryString}`);
              }
              if (onChange) onChange(event, index);
              setActiveTab(index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              "data-name": name,
              "data-index": index
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 1755048068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _useScroll = require("./use-scroll");
          var _tab = require("./tab");
          /*bundle*/
          const Tabs = ({
            children,
            className
          }) => {
            const {
              activeTab,
              names
            } = (0, _context.useTabsContext)();
            const ref = _react.default.useRef(null);
            const cls = `pui-tabs-menu tabs${className ? ` ${className}` : ''}`;
            const clone = (item, index) => {
              if (!_react.default.isValidElement(item) || item.type !== _tab.Tab) return item;
              const props = {
                ...item.props,
                index,
                key: index,
                name: names[index]
              };
              const tabChild = item;
              return _react.default.cloneElement(tabChild, props);
            };
            const output = _react.default.Children.map(children, clone);
            (0, _useScroll.useScroll)(ref, activeTab);
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, output);
          };
          exports.Tabs = Tabs;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-scroll
      ****************************/

      ims.set('./use-scroll', {
        hash: 1668718188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useScroll = useScroll;
          var _react = require("react");
          function useScroll(tabRef, activeTab) {
            _react.default.useEffect(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJfcm91dGluZyIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInRhYnMiLCJwYW5lcyIsInRyYWNrVXJsIiwidGFiIiwicm91dGluZyIsInVyaSIsInFzIiwiZ2V0IiwiYWN0aXZlSW5kZXgiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUYWJOYW1lIiwic2V0Q3VycmVudFRhYk5hbWUiLCJuYW1lcyIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiQ29udHJvbCIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJuYW1lIiwib25DbGljayIsImV2ZW50IiwicXVlcnlQYXJhbXMiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJxdWVyeVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsImNsb25lIiwiaXRlbSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsImtleSIsInRhYkNoaWxkIiwiY2xvbmVFbGVtZW50Iiwib3V0cHV0IiwibWFwIiwidXNlU2Nyb2xsIiwidGFiUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9UYWIiLCJ0YWJFbGVtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvZGVmaW5pdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL3BhbmVzLnRzeCIsIi90cy90YWIudHN4IiwiL3RzL3RhYnMudHN4IiwiL3RzL3VzZS1zY3JvbGwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWFPLE1BQU1DLFdBQVcsR0FBQUMsT0FBQSxDQUFBRCxXQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7OztVQ2RsRTs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFOLE9BQUE7WUFDQU8sS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFWLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUdBLElBQUFXLFFBQUEsR0FBQVgsT0FBQTtVQUNPO1VBQWEsU0FBVVksYUFBYUEsQ0FBQztZQUMzQ0MsTUFBTSxHQUFHLENBQUM7WUFDVkMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxJQUFJLEdBQUcsRUFBRTtZQUNUQyxLQUFLO1lBQ0xDO1VBQVEsQ0FD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