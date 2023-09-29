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
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.1"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNLLHFCQUFxQixFQUFFO2tCQUNsRCxNQUFNRSxVQUFVLEdBQUdKLFNBQVMsQ0FBQ0ksVUFBVTtrQkFFdkMsSUFBSUQsT0FBTyxDQUFDRSxJQUFJLEdBQUdKLGFBQWEsQ0FBQ0ksSUFBSSxFQUFFO29CQUN0Q0wsU0FBUyxDQUFDTSxRQUFRLENBQUM7c0JBQUVELElBQUksRUFBRUQsVUFBVSxHQUFHRCxPQUFPLENBQUNFLElBQUksR0FBR0osYUFBYSxDQUFDSSxJQUFJO3NCQUFFRSxRQUFRLEVBQUU7b0JBQVEsQ0FBRSxDQUFDO21CQUNoRyxNQUFNLElBQUlKLE9BQU8sQ0FBQ0ssS0FBSyxHQUFHUCxhQUFhLENBQUNPLEtBQUssRUFBRTtvQkFDL0NSLFNBQVMsQ0FBQ00sUUFBUSxDQUFDO3NCQUFFRCxJQUFJLEVBQUVELFVBQVUsR0FBR0QsT0FBTyxDQUFDSyxLQUFLLEdBQUdQLGFBQWEsQ0FBQ08sS0FBSztzQkFBRUQsUUFBUSxFQUFFO29CQUFRLENBQUUsQ0FBQzs7O2NBR3JHLENBQUM7Y0FDRFgsV0FBVyxDQUFDakMsU0FBUyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxDQUFDQSxTQUFTLENBQUMsQ0FBQztVQUNoQiIsIm5hbWVzIjpbIlRhYnNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZXhwb3J0cyIsInVzZVRhYnNDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIm9uQ2hhbmdlIiwiY2hpbGRyZW4iLCJwYW5lcyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwidmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIk9iamVjdCIsIlBhbmVzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIkNvbnRyb2wiLCJUYWIiLCJwcm9wcyIsImluZGV4IiwiZGlzYWJsZWQiLCJjbHMiLCJvbkNsaWNrIiwiZXZlbnQiLCJhdHRycyIsIlRhYnMiLCJyZWYiLCJ1c2VSZWYiLCJvdXRwdXQiLCJtYXAiLCJpdGVtIiwia2V5IiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJ1c2VTY3JvbGwiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsImNvbnRhaW5lclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0YWJSZWN0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwicmlnaHQiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInRzL2NvbnRleHQudHN4IiwidHMvaW5kZXgudHN4IiwidHMvaW50ZXJmYWNlcy50cyIsInRzL3BhbmVzLnRzeCIsInRzL3RhYi50c3giLCJ0cy90YWJzLnRzeCIsInRzL3VzZS1zY3JvbGwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19