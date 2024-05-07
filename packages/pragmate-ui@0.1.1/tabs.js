System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContainer: void 0,
    Panes: void 0,
    Tab: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.0.25"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.1.1"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['react', dependency_1]]);
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
        hash: 438771322,
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
              console.log(10, index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBhbmVzIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJfdXNlU2Nyb2xsIiwiX3RhYiIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJjbG9uZSIsIml0ZW0iLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJrZXkiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsIm91dHB1dCIsIm1hcCIsInVzZVNjcm9sbCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9s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