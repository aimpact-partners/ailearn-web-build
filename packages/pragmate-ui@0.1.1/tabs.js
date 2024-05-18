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
    }, function (_react2) {
      dependency_2 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.1.1/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.1.1/tabs');
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
        hash: 2056928644,
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
        hash: 1388817016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var _react = require("react");
          var _context = require("./context");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBhbmVzIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsImNsb25lIiwiaXRlbSIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsImtleSIsInRhYkNoaWxkIiwiY2xvbmVFbGVtZW50Iiwib3V0cHV0IiwibWFwIiwidXNlU2Nyb2xsIiwidGFiUmVmIiwidXNlRWZmZWN0Iiwic2Nyb2xsVG9UYWIiLCJ0YWJFbGVtZW50IiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJjb250YWluZXJSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFiUmVjdCIsInNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsInJpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL2RlZmluaXRpb25zLnRzIiwiL3RzL2luZGV4LnRzeCIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2Vz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