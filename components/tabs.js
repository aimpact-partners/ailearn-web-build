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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.0"], ["@aimpact/chat", "0.0.2"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJUYWJzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlVGFic0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbnRleHQiLCJ1c2VTdGF0ZSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwicGFuZXMiLCJzZXRVUkwiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiUGFuZXMiLCJjaGlsZHJlbkFycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiQ29udHJvbCIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJldmVudCIsImNscyIsImF0dHJzIiwiX3VzZVNjcm9sbCIsIl90YWIiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwidXNlU2Nyb2xsIiwib3V0cHV0IiwibWFwIiwiaXRlbSIsImtleSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsInRhYkNoaWxkIiwiY2xvbmVFbGVtZW50IiwidGFiUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9UYWIiLCJ0YWJFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFiUmVjdCIsInNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7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