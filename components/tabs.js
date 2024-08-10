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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.01"], ["@aimpact/ailearn-app", "0.1.4-test.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.01/components/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.4-test.01/components/tabs');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29udGV4dCIsInVzZVN0YXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIm9uQ2hhbmdlIiwiY2hpbGRyZW4iLCJwYW5lcyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIl91c2VTY3JvbGwiLCJfdGFiIiwiVGFicyIsInJlZiIsInVzZVJlZiIsInVzZVNjcm9sbCIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJ0YWJDaGlsZCIsImNsb25lRWxlbWVudCIsInRhYlJlZiIsInVzZUVmZmVjdCIsInNjcm9sbFRvVGFiIiwidGFiRWxlbWVudCIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy9wYW5lcy50c3giLCIvdHMvdGFiLnRzeCIsIi90cy90YWJzLnRzeCIsIi90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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