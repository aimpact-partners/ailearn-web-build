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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.6"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.6.1"], ["swiper", "10.3.0"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.6"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.6/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.6/tabs');
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
        hash: 1605311872,
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
            className,
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
            const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children));
          };
          exports.TabsContainer = TabsContainer;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 1404915735,
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
        hash: 322980779,
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
            const cls = `pui-tabs-menu${className ? ` ${className}` : ''}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicGFuZXMiLCJhY3RpdmVJbmRleCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInVzZVN0YXRlIiwidmFsdWUiLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsInVzZVNjcm9sbCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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