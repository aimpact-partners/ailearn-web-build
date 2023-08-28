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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.2"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/components/tabs');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxPQUFPLENBQUNFLElBQUksR0FBR0osYUFBYSxDQUFDSSxJQUFJLEVBQUU7b0JBQ3RDTCxTQUFTLENBQUNNLFFBQVEsQ0FBQztzQkFBRUQsSUFBSSxFQUFFRCxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsSUFBSSxHQUFHSixhQUFhLENBQUNJLElBQUk7c0JBQUVFLFFBQVEsRUFBRTtvQkFBUSxDQUFFLENBQUM7bUJBQ2hHLE1BQU0sSUFBSUosT0FBTyxDQUFDSyxLQUFLLEdBQUdQLGFBQWEsQ0FBQ08sS0FBSyxFQUFFO29CQUMvQ1IsU0FBUyxDQUFDTSxRQUFRLENBQUM7c0JBQUVELElBQUksRUFBRUQsVUFBVSxHQUFHRCxPQUFPLENBQUNLLEtBQUssR0FBR1AsYUFBYSxDQUFDTyxLQUFLO3NCQUFFRCxRQUFRLEVBQUU7b0JBQVEsQ0FBRSxDQUFDOzs7Y0FHckcsQ0FBQztjQUNEWCxXQUFXLENBQUNqQyxTQUFTLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUNBLFNBQVMsQ0FBQyxDQUFDO1VBQ2hCIiwibmFtZXMiOlsiVGFic0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJleHBvcnRzIiwidXNlVGFic0NvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJjaGlsZHJlbiIsInBhbmVzIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiUGFuZXMiLCJjaGlsZHJlbkFycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiQ29udHJvbCIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsImNscyIsIm9uQ2xpY2siLCJldmVudCIsImF0dHJzIiwiVGFicyIsInJlZiIsInVzZVJlZiIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInVzZVNjcm9sbCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy9pbmRleC50c3giLCJ0cy9pbnRlcmZhY2VzLnRzIiwidHMvcGFuZXMudHN4IiwidHMvdGFiLnRzeCIsInRzL3RhYnMudHN4IiwidHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=