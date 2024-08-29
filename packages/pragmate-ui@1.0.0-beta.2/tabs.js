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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.0-beta.2/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.0-beta.2/tabs');
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
        hash: 433937260,
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
        hash: 3717589832,
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
        hash: 3619514405,
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
              className
            } = props;
            const {
              activeTab,
              setActiveTab,
              onChange
            } = (0, _context.useTabsContext)();
            let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            if (className) cls += ' ' + className;
            const onClick = event => {
              if (onChange) onChange(event, index);
              setActiveTab(index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return _react.default.createElement("div", {
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
        hash: 3398641219,
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
            const cls = `pui-tabs-menu${className ? ` ${className}` : ''}`;
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
              className: cls
            }, _react.default.createElement("div", {
              className: 'tabs',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwYW5lcyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidXNlU3RhdGUiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJQYW5lcyIsImNoaWxkcmVuQXJyYXkiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJDb250cm9sIiwiVGFiIiwicHJvcHMiLCJpbmRleCIsImRpc2FibGVkIiwib25DbGljayIsImV2ZW50IiwiYXR0cnMiLCJfdXNlU2Nyb2xsIiwiX3RhYiIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJjbG9uZSIsIml0ZW0iLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJrZXkiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsIm91dHB1dCIsIm1hcCIsInVzZVNjcm9sbCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBUU8sTUFBTUMsV0FBVyxHQUFBQyxPQUFBLENBQUFELFdBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxXQUFXLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7O1VDVGxFOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQU4sT0FBQTtZQUNBTyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQVYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVUsUUFBQSxHQUFBVixPQUFBO1VBRUEsSUFBQVcsYUFBQSxHQUFBWCxPQUFBO1VBRU87VUFBYSxTQUFVWSxhQUFhQSxDQUFDO1lBQUVDLE1BQU07WUFBRUMsUUFBUTtZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUM7VUFBSyxDQUF1QjtZQUNoSCxNQUFNQyxXQUFXLEdBQUdMLE1BQU0sSUFBSSxDQUFDO1lBQy9CLE1BQU0sQ0FBQ00sU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR3JCLE1BQUEsQ0FBQUksT0FBSyxDQUFDa0IsUUFBUSxDQUFDSCxXQUFXLENBQUM7WUFDN0QsTUFBTVQsS0FBSyxHQUFHO2NBQUVRLEtBQUs7Y0FBRUUsU0FBUztjQUFFQyxZQUFZO2NBQUVOO1lBQVEsQ0FBRTtZQUUxRCxNQUFNUSxHQUFHLEdBQUcscUJBQXFCUCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ25FLE9BQ0NoQixN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