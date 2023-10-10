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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/components/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/components/tabs');
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
          const TabsContext = _react.default.createContext({});
          exports.TabsContext = TabsContext;
          const useTabsContext = () => _react.default.useContext(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2369255195,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = void 0;
          var _react = require("react");
          var _context = require("./context");
          const {
            useState
          } = _react.default;
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
        hash: 466290051,
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
            children
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            const childrenArray = _react.default.Children.toArray(children);
            const Control = childrenArray[activeTab];
            return _react.default.createElement("section", {
              className: "tab-content"
            }, Control);
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 1261380326,
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
              if (props.onClick) props.onClick(event);
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
        hash: 3220024426,
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
        hash: 3827999018,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsImV4cG9ydHMiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsInVzZVN0YXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIm9uQ2hhbmdlIiwiY2hpbGRyZW4iLCJwYW5lcyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsInVzZVNjcm9sbCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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