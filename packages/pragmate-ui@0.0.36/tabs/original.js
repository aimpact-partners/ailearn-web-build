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
        const dependencies = new Map([["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.4"], ["@beyond-js/widgets", "0.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.8"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["pragmate-ui", "0.0.36"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@0.0.36/tabs/original"
        },
        "type": "code",
        "name": "tabs"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@0.0.36/tabs/original');
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
        hash: 2170207282,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDekM7VUFFUjs7Ozs7Ozs7Ozs7VUM5REE7O1VBRUFRO1lBQ0FyQztVQUNBIiwibmFtZXMiOlsiVGFic0NvbnRleHQiLCJUYWJzQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIm9yaWVudGF0aW9uIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJhY3RpdmUiLCJzZXRTZWxlY3RlZCIsInRhYk5hdmlnYXRlIiwiaW5kZXgiLCJkYXRhIiwib3JpZW50YXRpb25UYWIiLCJjbHMiLCJSZWFjdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUYWJzQ29udGV4dCIsImV4cG9ydHMiLCJUYWIiLCJpc0FjdGl2ZSIsInBhcnNlSW50IiwiYXR0cnMiLCJmb3JFYWNoIiwicHJvcCIsIlRhYnNDb250YWluZXIiLCJUYWJzQ29udGVudCIsImNvbnRleHQiLCJjb250ZW50IiwiZmluZCIsIlRhYnMiLCJzdGF0ZSIsInNldFN0YXRlIiwidmFsdWVTZWxlY3RlZCIsInRhYk5hdmlnYXRlR28iLCJldmVudCIsImNhbGxiYWNrIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJwYXRoIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInVuZGVmaW5lZCIsIm5vbGluayIsIm91dHB1dCIsIm1hcCIsInRhYiIsInByb3BlcnRpZXMiLCJrZXkiLCJvbkNsaWNrIiwidHlwZSIsImNsb25lRWxlbWVudCIsIk9iamVjdCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udGV4dC50c3giLCJ0cy90YWIudHN4IiwidHMvdGFicy1jb250YWluZXIudHN4IiwidHMvdGFicy1jb250ZW50LnRzeCIsInRzL3RhYnMudHN4IiwidHMvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19