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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/components/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/components/tabs');
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
        hash: 1233275406,
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
            console.log(3030, activeTab);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1DLE9BQU8sR0FBR04sVUFBVSxDQUFDSyxxQkFBcUIsRUFBRTtrQkFDbEQsTUFBTUUsVUFBVSxHQUFHSixTQUFTLENBQUNJLFVBQVU7a0JBRXZDLElBQUlELE9BQU8sQ0FBQ0UsSUFBSSxHQUFHSixhQUFhLENBQUNJLElBQUksRUFBRTtvQkFDdENMLFNBQVMsQ0FBQ00sUUFBUSxDQUFDO3NCQUFFRCxJQUFJLEVBQUVELFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxJQUFJLEdBQUdKLGFBQWEsQ0FBQ0ksSUFBSTtzQkFBRUUsUUFBUSxFQUFFO29CQUFRLENBQUUsQ0FBQzttQkFDaEcsTUFBTSxJQUFJSixPQUFPLENBQUNLLEtBQUssR0FBR1AsYUFBYSxDQUFDTyxLQUFLLEVBQUU7b0JBQy9DUixTQUFTLENBQUNNLFFBQVEsQ0FBQztzQkFBRUQsSUFBSSxFQUFFRCxVQUFVLEdBQUdELE9BQU8sQ0FBQ0ssS0FBSyxHQUFHUCxhQUFhLENBQUNPLEtBQUs7c0JBQUVELFFBQVEsRUFBRTtvQkFBUSxDQUFFLENBQUM7OztjQUdyRyxDQUFDO2NBQ0RYLFdBQVcsQ0FBQ2xDLFNBQVMsQ0FBQztZQUN2QixDQUFDLEVBQUUsQ0FBQ0EsU0FBUyxDQUFDLENBQUM7VUFDaEIiLCJuYW1lcyI6WyJUYWJzQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwicGFuZXMiLCJzZXRVUkwiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInZhbHVlIiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiQ29udHJvbCIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJldmVudCIsImNscyIsImF0dHJzIiwiVGFicyIsInJlZiIsInVzZVJlZiIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInVzZVNjcm9sbCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9wYW5lcy50c3giLCJ0cy90YWIudHN4IiwidHMvdGFicy50c3giLCJ0cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=