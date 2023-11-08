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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.3"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.3/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.3/tabs');
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

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3787325647,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = void 0;
          var _react = require("react");
          var _context = require("./context");
          /* bundle  */
          const TabsContainer = ({
            active,
            onChange,
            children,
            panes
          }) => {
            const activeIndex = active || 0;
            const [activeTab, setActiveTab] = _react.default.useState(activeIndex);
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange
            };
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
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
        hash: 1381014586,
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
        hash: 2151215637,
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
        hash: 4224080064,
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
        hash: 2201004339,
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
            children
          }) => {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            const ref = _react.default.useRef(null);
            (0, _useScroll.useScroll)(ref, activeTab);
            const output = children.map((item, index) => {
              const props = {
                ...item.props,
                index,
                key: index
              };
              if (_react.default.isValidElement(item) && item.type === _tab.Tab) {
                const tabChild = item;
                return _react.default.cloneElement(tabChild, props);
              }
              return item;
            });
            return _react.default.createElement("header", {
              className: "tab-menu"
            }, _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwicGFuZXMiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInVzZVN0YXRlIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJjbHMiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsInVzZVNjcm9sbCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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