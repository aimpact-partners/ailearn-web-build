System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0"], function (_export, _context2) {
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
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.2.12"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.7/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1113529643,
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
        hash: 2632051961,
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
        hash: 2364118722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var _react = require("react");
          var _context = require("./context");
          var _framerMotion = require("framer-motion");
          /* bundle  */
          function TabsContainer({
            active,
            onChange,
            className,
            children,
            panes
          }) {
            const activeIndex = active || 0;
            const [activeTab, setActiveTab] = _react.default.useState(activeIndex);
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange
            };
            const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement("section", {
              className: cls
            }, children)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./panes
      ***********************/

      ims.set('./panes', {
        hash: 2061109098,
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
            className
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
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
        hash: 2866683224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = Tab;
          var _react = require("react");
          var _context = require("./context");
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
              onChange
            } = (0, _context.useTabsContext)();
            let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            if (className) cls += ' ' + className;
            const onClick = event => {
              //todo: this event must be removed
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
        hash: 1077510604,
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
              activeTab
            } = (0, _context.useTabsContext)();
            const ref = _react.default.useRef(null);
            const cls = `pui-tabs-menu tabs${className ? ` ${className}` : ''}`;
            const clone = (item, index) => {
              if (!_react.default.isValidElement(item) || item.type !== _tab.Tab) return item;
              const props = {
                ...item.props,
                index,
                key: index
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwYW5lcyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidXNlU3RhdGUiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJDb250cm9sIiwiVGFiIiwicHJvcHMiLCJpbmRleCIsImRpc2FibGVkIiwibmFtZSIsIm9uQ2xpY2siLCJldmVudCIsImF0dHJzIiwiX3VzZVNjcm9sbCIsIl90YWIiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwiY2xvbmUiLCJpdGVtIiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvdXRwdXQiLCJtYXAiLCJ1c2VTY3JvbGwiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvZGVmaW5pdGlvbnMudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL3BhbmVzLnRzeCIsIi90cy90YWIudHN4IiwiL3RzL3RhYnMudHN4IiwiL3RzL3VzZS1zY3JvbGwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVFPLE1BQU1DLFdBQVcsR0FBQUMsT0FBQSxDQUFBRCxXQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQUMsRUFBa0IsQ0FBQztVQUMzRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsV0FBVyxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7OztVQ1RsRTs7VUFFQUUsTUFBQSxDQUFBQyxjQUFBLENBQUFOLE9BQUE7WUFDQU8sS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFWLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUVBLElBQUFXLGFBQUEsR0FBQVgsT0FBQTtVQUVPO1VBQWEsU0FBVVksYUFBYUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLFFBQVE7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDO1VBQUssQ0FBdUI7WUFDaEgsTUFBTUMsV0FBVyxHQUFHTCxNQUFNLElBQUksQ0FBQztZQUMvQixNQUFNLENBQUNNLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdyQixNQUFBLENBQUFJLE9BQUssQ0FBQ2tCLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO1lBQzdELE1BQU1ULEtBQUssR0FBRztjQUFFUSxLQUFLO2NBQUVFLFNBQVM7Y0FBRUMsWUFBWTtjQUFFTjtZQUFRLENBQUU7WUFFMUQsTUFBTVEsR0FBRyxHQUFHLHFCQUFxQlAsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuRSxP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