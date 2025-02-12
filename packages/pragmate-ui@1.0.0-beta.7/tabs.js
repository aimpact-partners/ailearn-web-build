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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "1.1.13"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2NvbnRleHQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwib25DaGFuZ2UiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBhbmVzIiwiYWN0aXZlSW5kZXgiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJuYW1lIiwib25DbGljayIsImV2ZW50IiwiYXR0cnMiLCJfdXNlU2Nyb2xsIiwiX3RhYiIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJjbG9uZSIsIml0ZW0iLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJrZXkiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsIm91dHB1dCIsIm1hcCIsInVzZVNjcm9sbCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwi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