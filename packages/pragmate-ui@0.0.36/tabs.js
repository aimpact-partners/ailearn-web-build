System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, TabsContextProvider, useTabsContext, Tab, TabsContainer, TabsContent, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContextProvider: void 0,
    useTabsContext: void 0,
    Tab: void 0,
    TabsContainer: void 0,
    TabsContent: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.5"], ["@beyond-js/reactive", "0.0.3"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["socket.io-client", "4.6.1"], ["prismjs", "1.29.0"], ["swiper", "8.4.7"], ["@beyond-js/backend", "0.1.5"], ["@types/react", "18.0.37"], ["@types/react-dom", "18.0.11"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tabs"
        },
        "type": "code",
        "name": "tabs"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 2584867126,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContextProvider = TabsContextProvider;
          exports.useTabsContext = void 0;
          var React = require("react");
          const TabsContext = (0, React.createContext)({});
          /*bundle*/
          function TabsContextProvider(props) {
            const {
              children,
              orientation,
              className,
              selected
            } = props;
            const [active, setSelected] = (0, React.useState)(selected);
            (0, React.useEffect)(() => {
              setSelected(selected);
            }, [selected]);
            const tabNavigate = index => setSelected(index);
            const data = {
              children: children,
              orientation: orientation,
              tabNavigate: tabNavigate,
              selected: active,
              index: selected !== active ? selected : active
            };
            const orientationTab = orientation ? orientation : 'horizontal';
            let cls = 'pui-tabs pui-tabs-container ';
            cls += `${orientationTab === 'horizontal' ? 'pui-tabs-horizontal' : 'pui-tabs-vertical'}`;
            if (className) cls += ` ${className}`;
            return React.createElement(TabsContext.Provider, {
              value: data
            }, React.createElement("div", {
              className: cls
            }, children));
          }
          /*bundle*/
          const useTabsContext = () => (0, React.useContext)(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 1425133515,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = void 0;
          var React = require("react");
          /*bundle*/
          const Tab = props => {
            const {
              index,
              isActive,
              selected,
              className,
              children
            } = props;
            let cls = isActive && parseInt(index) === parseInt(selected) ? "pui-tab tab-active" : "pui-tab";
            if (className) cls += ` ${className}`;
            const attrs = {
              ...props
            };
            ["children", "onTab", "isActive", "nolink", "className"].forEach(prop => {
              delete attrs[prop];
            });
            return React.createElement("div", {
              className: cls,
              ...attrs
            }, children);
          };
          exports.Tab = Tab;
        }
      });

      /********************************
      INTERNAL MODULE: ./tabs-container
      ********************************/

      ims.set('./tabs-container', {
        hash: 1316176335,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TabsContainer(props) {
            return React.createElement(_context.TabsContextProvider, {
              ...props
            }, props.children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./tabs-content
      ******************************/

      ims.set('./tabs-content', {
        hash: 1082535953,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContent = TabsContent;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TabsContent(props) {
            const context = (0, _context.useTabsContext)();
            const {
              children
            } = props;
            const content = children.find((content, index) => index === context.index);
            return React.createElement("div", {
              className: "pui-tabs-content"
            }, content);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 479295983,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = Tabs;
          var React = require("react");
          var _context = require("./context");
          var _tab = require("./tab");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Tabs(props) {
            const [state, setState] = (0, React.useState)({
              active: true,
              valueSelected: 0
            });
            const {
              tabNavigate: tabNavigateGo,
              selected
            } = (0, _context.useTabsContext)();
            const tabNavigate = (event, callback) => {
              const target = event.currentTarget;
              const index = parseInt(target.dataset.index);
              const path = target.dataset.path;
              setState({
                valueSelected: index,
                active: index !== state.valueSelected ? true : !state.active
              });
              if (callback) callback(event);
              tabNavigateGo(index);
              if (path) _routing.routing.replaceState({}, undefined, path);
            };
            const {
              children,
              nolink
            } = props;
            const {
              active,
              valueSelected
            } = state;
            const output = children.map((tab, index) => {
              const properties = {
                key: index,
                selected: selected,
                isActive: active,
                index: index,
                'data-index': index,
                'data-path': tab.props['data-path']
              };
              if (!nolink) properties.onClick = tabNavigate;else properties.nolink = true;
              if (tab.props.onClick) properties.onClick = event => tabNavigate(event, tab.props.onClick);
              if (tab.type === _tab.Tab) return React.cloneElement(tab, properties);
              return React.createElement(_tab.Tab, {
                ...properties,
                key: index
              }, tab);
            });
            return React.createElement("div", {
              className: 'pui-tabs-items'
            }, React.createElement("div", {
              className: 'tabs-container'
            }, output));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3643976702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./context",
        "from": "TabsContextProvider",
        "name": "TabsContextProvider"
      }, {
        "im": "./context",
        "from": "useTabsContext",
        "name": "useTabsContext"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./tabs-container",
        "from": "TabsContainer",
        "name": "TabsContainer"
      }, {
        "im": "./tabs-content",
        "from": "TabsContent",
        "name": "TabsContent"
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
        (require || prop === 'TabsContextProvider') && _export("TabsContextProvider", TabsContextProvider = require ? require('./context').TabsContextProvider : value);
        (require || prop === 'useTabsContext') && _export("useTabsContext", useTabsContext = require ? require('./context').useTabsContext : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'TabsContainer') && _export("TabsContainer", TabsContainer = require ? require('./tabs-container').TabsContainer : value);
        (require || prop === 'TabsContent') && _export("TabsContent", TabsContent = require ? require('./tabs-content').TabsContent : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJUYWJzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJUYWJzQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIm9yaWVudGF0aW9uIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJhY3RpdmUiLCJzZXRTZWxlY3RlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidGFiTmF2aWdhdGUiLCJpbmRleCIsImRhdGEiLCJvcmllbnRhdGlvblRhYiIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlVGFic0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiZXhwb3J0cyIsIlRhYiIsImlzQWN0aXZlIiwicGFyc2VJbnQiLCJhdHRycyIsImZvckVhY2giLCJwcm9wIiwiX2NvbnRleHQiLCJUYWJzQ29udGFpbmVyIiwiVGFic0NvbnRlbnQiLCJjb250ZXh0IiwiY29udGVudCIsImZpbmQiLCJfdGFiIiwiX3JvdXRpbmciLCJUYWJzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInZhbHVlU2VsZWN0ZWQiLCJ0YWJOYXZpZ2F0ZUdvIiwiZXZlbnQiLCJjYWxsYmFjayIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwicGF0aCIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJ1bmRlZmluZWQiLCJub2xpbmsiLCJvdXRwdXQiLCJtYXAiLCJ0YWIiLCJwcm9wZXJ0aWVzIiwia2V5Iiwib25DbGljayIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy90YWIudHN4IiwiL3RzL3RhYnMtY29udGFpbmVyLnRzeCIsIi90cy90YWJzLWNvbnRlbnQudHN4IiwiL3RzL3RhYnMudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBUUEsTUFBTUMsV0FBVyxHQUFpQixJQUFBRixLQUFBLENBQUFHLGFBQWEsRUFBQyxFQUFFLENBQUM7VUFFNUM7VUFBVSxTQUFVQyxtQkFBbUJBLENBQUNDLEtBQStCO1lBQzdFLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxXQUFXO2NBQUVDLFNBQVM7Y0FBRUM7WUFBUSxDQUFFLEdBQUdKLEtBQUs7WUFDNUQsTUFBTSxDQUFDSyxNQUFNLEVBQUVDLFdBQVcsQ0FBQyxHQUFHLElBQUFYLEtBQUEsQ0FBQVksUUFBUSxFQUFTSCxRQUFRLENBQUM7WUFFeEQsSUFBQVQsS0FBQSxDQUFBYSxTQUFTLEVBQUMsTUFBVztjQUNwQkYsV0FBVyxDQUFDRixRQUFRLENBQUM7WUFDdEIsQ0FBQyxFQUFFLENBQUNBLFFBQVEsQ0FBQyxDQUFDO1lBRWQsTUFBTUssV0FBVyxHQUFJQyxLQUFhLElBQUtKLFdBQVcsQ0FBQ0ksS0FBSyxDQUFDO1lBRXpELE1BQU1DLElBQUksR0FBRztjQUNaVixRQUFRLEVBQUVBLFFBQVE7Y0FDbEJDLFdBQVcsRUFBRUEsV0FBVztjQUN4Qk8sV0FBVyxFQUFFQSxXQUFXO2NBQ3hCTCxRQUFRLEVBQUVDLE1BQU07Y0FDaEJLLEtBQUssRUFBRU4sUUFBUSxLQUFLQyxNQUFNLEdBQUdELFFBQVEsR0FBR0M7YUFDeEM7WUFFRCxNQUFNTyxjQUFjLEdBQUdWLFdBQVcsR0FBR0EsV0FBVyxHQUFHLFlBQVk7WUFDL0QsSUFBSVcsR0FBRyxHQUFHLDhCQUE4QjtZQUN4Q0EsR0FBRyxJQUFJLEdBQUdELGNBQWMsS0FBSyxZQUFZLEdBQUcscUJBQXFCLEdBQUcsbUJBQW1CLEVBQUU7WUFFekYsSUFBSVQsU0FBUyxFQUFFVSxHQUFHLElBQUksSUFBSVYsU0FBUyxFQUFFO1lBRXJDLE9BQ0NSLEtBQUEsQ0FBQW1CLGFBQUEsQ0FBQ2pCLFdBQVcsQ0FBQ2tCLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFTDtZQUFJLEdBQ2hDaEIsS0FBQSxDQUFBbUIsYUFBQTtjQUFLWCxTQUFTLEVBQUVVO1lBQUcsR0FBR1osUUFBUSxDQUFPLENBQ2Y7VUFFekI7VUFFTztVQUFXLE1BQU1nQixjQUFjLEdBQUdBLENBQUEsS0FBTSxJQUFBdEIsS0FBQSxDQUFBdUIsVUFBVSxFQUFDckIsV0FBVyxDQUFDO1VBQUNzQixPQUFBLENBQUFGLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q3ZFLElBQUF0QixLQUFBLEdBQUFDLE9BQUE7VUFXTztVQUFXLE1BQU13QixHQUFHLEdBQUlwQixLQUErQixJQUFJO1lBQ2hFLE1BQU07Y0FBRVUsS0FBSztjQUFFVyxRQUFRO2NBQUVqQixRQUFRO2NBQUVELFNBQVM7Y0FBRUY7WUFBUSxDQUFFLEdBQUdELEtBQUs7WUFDaEUsSUFBSWEsR0FBRyxHQUNMUSxRQUFRLElBQUlDLFFBQVEsQ0FBQ1osS0FBSyxDQUFDLEtBQUtZLFFBQVEsQ0FBQ2xCLFFBQVEsQ0FBQyxHQUM5QyxvQkFBb0IsR0FDcEIsU0FBUztZQUNmLElBQUlELFNBQVMsRUFBRVUsR0FBRyxJQUFJLElBQUlWLFNBQVMsRUFBRTtZQUNyQyxNQUFNb0IsS0FBSyxHQUFHO2NBQUUsR0FBR3ZCO1lBQUssQ0FBRTtZQUUxQixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQ3dCLE9BQU8sQ0FBRUMsSUFBSSxJQUFJO2NBQ3hFLE9BQU9GLEtBQUssQ0FBQ0UsSUFBSSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztZQUNGLE9BQ0U5QixLQUFBLENBQUFtQixhQUFBO2NBQUtYLFNBQVMsRUFBRVUsR0FBRztjQUFBLEdBQU1VO1lBQUssR0FDM0J0QixRQUFRLENBQ0w7VUFFVixDQUFDO1VBQUNrQixPQUFBLENBQUFDLEdBQUEsR0FBQUEsR0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkYsSUFBQXpCLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE4QixRQUFBLEdBQUE5QixPQUFBO1VBRU87VUFBVSxTQUFVK0IsYUFBYUEsQ0FBQzNCLEtBQUs7WUFDNUMsT0FBT0wsS0FBQSxDQUFBbUIsYUFBQSxDQUFDWSxRQUFBLENBQUEzQixtQkFBbUI7Y0FBQSxHQUFLQztZQUFLLEdBQUdBLEtBQUssQ0FBQ0MsUUFBUSxDQUF1QjtVQUMvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMQSxJQUFBTixLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUVPO1VBQVUsU0FBVWdDLFdBQVdBLENBQUM1QixLQUV0QztZQUNDLE1BQU02QixPQUFPLEdBQUcsSUFBQUgsUUFBQSxDQUFBVCxjQUFjLEdBQUU7WUFDaEMsTUFBTTtjQUFFaEI7WUFBUSxDQUFFLEdBQUdELEtBQUs7WUFDMUIsTUFBTThCLE9BQU8sR0FBRzdCLFFBQVEsQ0FBQzhCLElBQUksQ0FBQyxDQUFDRCxPQUFPLEVBQUVwQixLQUFLLEtBQUtBLEtBQUssS0FBS21CLE9BQU8sQ0FBQ25CLEtBQUssQ0FBQztZQUMxRSxPQUFPZixLQUFBLENBQUFtQixhQUFBO2NBQUtYLFNBQVMsRUFBQztZQUFrQixHQUFFMkIsT0FBTyxDQUFPO1VBQzFEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hBLElBQUFuQyxLQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUFvQyxJQUFBLEdBQUFwQyxPQUFBO1VBQ0EsSUFBQXFDLFFBQUEsR0FBQXJDLE9BQUE7VUFFTztVQUFVLFNBQVVzQyxJQUFJQSxDQUFDbEMsS0FBZ0M7WUFDL0QsTUFBTSxDQUFDbUMsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRyxJQUFBekMsS0FBQSxDQUFBWSxRQUFRLEVBQUM7Y0FDbENGLE1BQU0sRUFBRSxJQUFJO2NBQ1pnQyxhQUFhLEVBQUU7YUFDZixDQUFDO1lBRUYsTUFBTTtjQUFFNUIsV0FBVyxFQUFFNkIsYUFBYTtjQUFFbEM7WUFBUSxDQUFFLEdBQUcsSUFBQXNCLFFBQUEsQ0FBQVQsY0FBYyxHQUFFO1lBRWpFLE1BQU1SLFdBQVcsR0FBR0EsQ0FBQzhCLEtBQXVDLEVBQUVDLFFBQVEsS0FBSTtjQUN6RSxNQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0csYUFBYTtjQUNsQyxNQUFNaEMsS0FBSyxHQUFHWSxRQUFRLENBQUNtQixNQUFNLENBQUNFLE9BQU8sQ0FBQ2pDLEtBQUssQ0FBQztjQUM1QyxNQUFNa0MsSUFBSSxHQUFHSCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0MsSUFBSTtjQUNoQ1IsUUFBUSxDQUFDO2dCQUNSQyxhQUFhLEVBQUUzQixLQUFLO2dCQUNwQkwsTUFBTSxFQUFFSyxLQUFLLEtBQUt5QixLQUFLLENBQUNFLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDOUI7ZUFDdEQsQ0FBQztjQUVGLElBQUltQyxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2NBRTdCRCxhQUFhLENBQUM1QixLQUFLLENBQUM7Y0FFcEIsSUFBSWtDLElBQUksRUFBRVgsUUFBQSxDQUFBWSxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFFLEVBQUVDLFNBQVMsRUFBRUgsSUFBSSxDQUFDO1lBQ3BELENBQUM7WUFFRCxNQUFNO2NBQUUzQyxRQUFRO2NBQUUrQztZQUFNLENBQUUsR0FBR2hELEtBQUs7WUFDbEMsTUFBTTtjQUFFSyxNQUFNO2NBQUVnQztZQUFhLENBQUUsR0FBR0YsS0FBSztZQUV2QyxNQUFNYyxNQUFNLEdBQUdoRCxRQUFRLENBQUNpRCxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFekMsS0FBSyxLQUFJO2NBQzFDLE1BQU0wQyxVQUFVLEdBQWU7Z0JBQzlCQyxHQUFHLEVBQUUzQyxLQUFLO2dCQUNWTixRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCaUIsUUFBUSxFQUFFaEIsTUFBTTtnQkFDaEJLLEtBQUssRUFBRUEsS0FBSztnQkFDWixZQUFZLEVBQUVBLEtBQUs7Z0JBQ25CLFdBQVcsRUFBRXlDLEdBQUcsQ0FBQ25ELEtBQUssQ0FBQyxXQUFXO2VBQ2xDO2NBRUQsSUFBSSxDQUFDZ0QsTUFBTSxFQUFFSSxVQUFVLENBQUNFLE9BQU8sR0FBRzdDLFdBQVcsQ0FBQyxLQUN6QzJDLFVBQVUsQ0FBQ0osTUFBTSxHQUFHLElBQUk7Y0FFN0IsSUFBSUcsR0FBRyxDQUFDbkQsS0FBSyxDQUFDc0QsT0FBTyxFQUFFRixVQUFVLENBQUNFLE9BQU8sR0FBR2YsS0FBSyxJQUFJOUIsV0FBVyxDQUFDOEIsS0FBSyxFQUFFWSxHQUFHLENBQUNuRCxLQUFLLENBQUNzRCxPQUFPLENBQUM7Y0FFMUYsSUFBSUgsR0FBRyxDQUFDSSxJQUFJLEtBQUt2QixJQUFBLENBQUFaLEdBQUcsRUFBRSxPQUFPekIsS0FBSyxDQUFDNkQsWUFBWSxDQUFDTCxHQUFHLEVBQUVDLFVBQVUsQ0FBQztjQUVoRSxPQUNDekQsS0FBQSxDQUFBbUIsYUFBQSxDQUFDa0IsSUFBQSxDQUFBWixHQUFHO2dCQUFBLEdBQUtnQyxVQUFVO2dCQUFFQyxHQUFHLEVBQUUzQztjQUFLLEdBQzdCeUMsR0FBRyxDQUNDO1lBRVIsQ0FBQyxDQUFDO1lBRUYsT0FDQ3hELEtBQUEsQ0FBQW1CLGFBQUE7Y0FBS1gsU0FBUyxFQUFDO1lBQWdCLEdBQzlCUixLQUFBLENBQUFtQixhQUFBO2NBQUtYLFNBQVMsRUFBQztZQUFnQixHQUFFOEMsTUFBTSxDQUFPLENBQ3pDO1VBRVI7Ozs7Ozs7Ozs7O1VDOURBOztVQUVBUSxNQUFBLENBQUFDLGNBQUEsQ0FBQXZDLE9BQUE7WUFDQUgsS0FBQTtVQUNBIn0=