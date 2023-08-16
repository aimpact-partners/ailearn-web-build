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
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/components/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/components/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 730491654,
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
        hash: 2443664861,
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
            panes,
            setURL = true
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
        hash: 838396425,
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
            //const { disabled } = item;
            const {
              activeTab,
              setActiveTab,
              onChange
            } = (0, _context.useTabsContext)();
            const onClick = event => {
              if (onChange) onChange(event, index);
              setActiveTab(index);
              // const url = new URLSearchParams(window.location.search);
              // url.set('tab', index.toString());
              //	routing.replaceState({}, null, `?${url.toString()}`);
            };

            const cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
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
        hash: 3282460137,
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
              panes,
              activeTab,
              setActiveTab
            } = (0, _context.useTabsContext)();
            const ref = React.useRef(null);
            (0, _useScroll.useScroll)(ref, activeTab);
            // const output = panes.map((pane, index) => <Tab key={index} index={index} item={pane} />);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxHQUFHSixTQUFTLENBQUNJLFVBQVU7a0JBRXZDLElBQUlELE9BQU8sQ0FBQ0UsSUFBSSxHQUFHSixhQUFhLENBQUNJLElBQUksRUFBRTtvQkFDdENMLFNBQVMsQ0FBQ00sUUFBUSxDQUFDO3NCQUFFRCxJQUFJLEVBQUVELFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLEdBQUdKLGFBQWEsQ0FBQ0ksSUFBSTtzQkFBRUUsUUFBUSxFQUFFO29CQUFRLENBQUUsQ0FBQzttQkFDaEcsTUFBTSxJQUFJSixPQUFPLENBQUNLLEtBQUssR0FBR1AsYUFBYSxDQUFDTyxLQUFLLEVBQUU7b0JBQy9DUixTQUFTLENBQUNNLFFBQVEsQ0FBQztzQkFBRUQsSUFBSSxFQUFFRCxVQUFVLEdBQUdELE9BQU8sQ0FBQ0ssS0FBSyxHQUFHUCxhQUFhLENBQUNPLEtBQUs7c0JBQUVELFFBQVEsRUFBRTtvQkFBUSxDQUFFLENBQUM7OztjQUdyRyxDQUFDO2NBQ0RYLFdBQVcsQ0FBQ2hDLFNBQVMsQ0FBQztZQUN2QixDQUFDLEVBQUUsQ0FBQ0EsU0FBUyxDQUFDLENBQUM7VUFDaEIiLCJuYW1lcyI6WyJUYWJzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwicGFuZXMiLCJzZXRVUkwiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJDb250cm9sIiwiVGFiIiwicHJvcHMiLCJpbmRleCIsImRpc2FibGVkIiwib25DbGljayIsImV2ZW50IiwiY2xzIiwiYXR0cnMiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImtleSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInRhYkNoaWxkIiwiY2xvbmVFbGVtZW50IiwidXNlU2Nyb2xsIiwidGFiUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9UYWIiLCJ0YWJFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFiUmVjdCIsInNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250ZXh0LnRzeCIsInRzL2luZGV4LnRzeCIsInRzL3BhbmVzLnRzeCIsInRzL3RhYi50c3giLCJ0cy90YWJzLnRzeCIsInRzL3VzZS1zY3JvbGwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==