System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat@1.0.1/sidebar/manager", "pragmate-ui@0.0.36/icons", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/tooltip", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/shared/icons", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    ProfileIcon: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactChat101SidebarManager) {
      dependency_3 = _aimpactChat101SidebarManager;
    }, function (_pragmateUi0036Icons) {
      dependency_4 = _pragmateUi0036Icons;
    }, function (_pragmateUi0036Link) {
      dependency_5 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Tooltip) {
      dependency_6 = _pragmateUi0036Tooltip;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_8 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0036Components) {
      dependency_9 = _pragmateUi0036Components;
    }, function (_aimpactChat101SharedIcons) {
      dependency_10 = _aimpactChat101SharedIcons;
    }, function (_aimpactChatSdk100Session) {
      dependency_11 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["tippy.js", "6.3.7"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/sidebar/ui"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat/sidebar/manager', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/link', dependency_5], ['pragmate-ui/tooltip', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/chat/shared/icons', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/chat/shared/components', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 2110201182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _list = require("./list");
          var _appLogo = require("../icons/app-logo");
          var _manager = require("@aimpact/chat/sidebar/manager");
          function ActivityBar() {
            const topItems = Array.from(_manager.SidebarManager.items.values());
            const bottomItems = Array.from(_manager.SidebarManager.bottomItems.values());
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, {
              items: topItems,
              className: 'aside__nav'
            }), _react.default.createElement(_list.ListItems, {
              items: bottomItems,
              className: 'aside__footer'
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activity-bar/item/control
      *******************************************/

      ims.set('./activity-bar/item/control', {
        hash: 3127150584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const variant = `${isActive ? 'active' : 'nav'}`;
            const cls = `nav__item circle md`;
            if (item.control) {
              return React.createElement(item.control, {
                icon: item.icon,
                variant: variant,
                className: cls
              });
            }
            const icon = item.icon;
            return React.createElement(_icons.IconButton, {
              icon: icon,
              variant: variant,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 1757189241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _control = require("./control");
          const ActivityBarLink = ({
            item
          }) => {
            const {
              name,
              icon,
              href,
              Explorer,
              action
            } = item;
            const isLink = !Explorer && !action;
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              console.log(0.1);
              const onClick = item.onClick ?? item.action;
              if (onClick) {
                return onClick(event);
              }
              toggleActionMenu(item);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            if (isLink) attrs.href = '/' + href;
            const title = item.title ?? name;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: 'right'
            }, _react.default.createElement(_link.Link, {
              ...attrs,
              onClick: onClick,
              className: 'aside-item'
            }, _react.default.createElement(_control.ItemControl, {
              isActive: isActive,
              item: item
            })));
          };
          exports.ActivityBarLink = ActivityBarLink;
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 1659812748,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _item = require("./item");
          function ListItems({
            items,
            className
          }) {
            return _react.default.createElement("section", {
              className: className
            }, items.map((item, i) => {
              return _react.default.createElement(_item.ActivityBarLink, {
                item: item,
                key: i
              });
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3240966270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var React = require("react");
          const SidebarContext = React.createContext({});
          exports.SidebarContext = SidebarContext;
          const useSidebarContext = () => React.useContext(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /**************************
      INTERNAL MODULE: ./explorer
      **************************/

      ims.set('./explorer', {
        hash: 2145033942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function ExplorerView() {
            const {
              open,
              toggleActionMenu,
              active
            } = (0, _context.useSidebarContext)();
            const {
              pathname
            } = _routing.routing.uri;
            const cls = `explorer${open ? ' open' : ''}`;
            if (!active?.Explorer) return null;
            const {
              Explorer,
              href
            } = active;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("div", {
              className: 'sidebar-content'
            }, _react.default.createElement(Explorer, null))), _react.default.createElement("div", {
              className: `toggle-explorer ${open === href ? 'open' : ''}`
            }, _react.default.createElement(_icons.IconButton, {
              className: 'lg',
              icon: 'expandMore',
              onClick: () => toggleActionMenu(href)
            })));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 2083629224,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          /* bundle */
          const AppLogo = () => _react.default.createElement("div", {
            className: 'aside-item'
          }, _react.default.createElement(_components.Link, {
            href: '/'
          }, _react.default.createElement(_icons.Icon, {
            icon: _icons2.ICONS['logo'],
            className: 'lg'
          })));
          exports.AppLogo = AppLogo;
        }
      });

      /*******************************
      INTERNAL MODULE: ./icons/profile
      *******************************/

      ims.set('./icons/profile', {
        hash: 2058794887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
            if (!_session.sessionWrapper.user) return;
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item',
              onClick: onClick
            }, !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3272073093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _activityBar = require("./activity-bar");
          var _explorer = require("./explorer");
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const [open, setOpen] = React.useState(false);
            const [active, setActive] = React.useState();
            const toggleActionMenu = module => {
              if (!active || active === module.id) setOpen(!open);
              setActive(module);
            };
            return React.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                toggleActionMenu,
                active
              }
            }, React.createElement("div", {
              className: 'nav-wrapper'
            }, React.createElement(_activityBar.default, null), React.createElement(_explorer.ExplorerView, null)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./registry
      **************************/

      ims.set('./registry', {
        hash: 1532892333,
        creator: function (require, exports) {
          "use strict";

          var _manager = require("@aimpact/chat/sidebar/manager");
          var _profile = require("./icons/profile");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          (() => {
            _manager.SidebarManager.register([{
              id: 'profile',
              control: _profile.ProfileIcon,
              Explorer: 'aimpact-chat-user-profile',
              title: _session.sessionWrapper.user.getProperties().email
            }, {
              control: _components.ThemeSwitcher,
              title: 'Theme',
              id: 'themeSwitcher'
            }, {
              icon: 'exit',
              id: 'logout',
              title: 'Logout',
              onClick: async event => {
                event.stopPropagation();
                await _session.sessionWrapper.logout();
                _routing.routing.pushState('/auth/login');
              }
            }], 'bottom');
          })();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons/app-logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./icons/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./index",
        "from": "Sidebar",
        "name": "Sidebar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./icons/app-logo').AppLogo : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./icons/profile').ProfileIcon : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./index').Sidebar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2NBQ25Ea0IsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUVELE9BQ0NsRSxvQkFBQzBDLHVCQUFjLENBQUMwQixRQUFRO2NBQUNDLEtBQUssRUFBRTtnQkFBRXRCLElBQUk7Z0JBQUV2QixnQkFBZ0I7Z0JBQUV3QjtjQUFNO1lBQUUsR0FDakVoRDtjQUFLQyxTQUFTLEVBQUM7WUFBYSxHQUMzQkQsb0JBQUNSLG9CQUFXLE9BQUcsRUFDZlEsb0JBQUM4QyxzQkFBWSxPQUFHLENBQ1gsQ0FDbUI7VUFFNUI7Ozs7Ozs7Ozs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLENBQUMsTUFBSztZQUNMbEQsdUJBQWMsQ0FBQzBFLFFBQVEsQ0FDdEIsQ0FDQztjQUNDSCxFQUFFLEVBQUUsU0FBUztjQUNiMUQsT0FBTyxFQUFFMEMsb0JBQVc7Y0FDcEJwQyxRQUFRLEVBQUUsMkJBQTJCO2NBQ3JDa0IsS0FBSyxFQUFFcUIsdUJBQWMsQ0FBQ0MsSUFBSSxDQUFDRSxhQUFhLEVBQUUsQ0FBQ2M7YUFDM0MsRUFDRDtjQUNDOUQsT0FBTyxFQUFFK0QseUJBQWE7Y0FDdEJ2QyxLQUFLLEVBQUUsT0FBTztjQUNka0MsRUFBRSxFQUFFO2FBQ0osRUFDRDtjQUNDekQsSUFBSSxFQUFFLE1BQU07Y0FDWnlELEVBQUUsRUFBRSxRQUFRO2NBQ1psQyxLQUFLLEVBQUUsUUFBUTtjQUNmUixPQUFPLEVBQUUsTUFBTUMsS0FBSyxJQUFHO2dCQUN0QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCLE1BQU0yQix1QkFBYyxDQUFDbUIsTUFBTSxFQUFFO2dCQUM3QnJELGdCQUFPLENBQUNzRCxTQUFTLENBQUMsYUFBYSxDQUFDO2NBQ2pDO2FBQ0EsQ0FDRCxFQUNELFFBQVEsQ0FDUjtVQUNGLENBQUMsR0FBRyIsIm5hbWVzIjpbIkFjdGl2aXR5QmFyIiwidG9wSXRlbXMiLCJBcnJheSIsImZyb20iLCJTaWRlYmFyTWFuYWdlciIsIml0ZW1zIiwidmFsdWVzIiwiYm90dG9tSXRlbXMiLCJSZWFjdCIsImNsYXNzTmFtZSIsIkFwcExvZ28iLCJMaXN0SXRlbXMiLCJJdGVtQ29udHJvbCIsIml0ZW0iLCJpc0FjdGl2ZSIsInZhcmlhbnQiLCJjbHMiLCJjb250cm9sIiwiaWNvbiIsIkljb25CdXR0b24iLCJBY3Rpdml0eUJhckxpbmsiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsIm9uQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImF0dHJzIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJMaW5rIiwiZXhwb3J0cyIsIm1hcCIsImkiLCJrZXkiLCJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTaWRlYmFyQ29udGV4dCIsInVzZUNvbnRleHQiLCJFeHBsb3JlclZpZXciLCJvcGVuIiwiYWN0aXZlIiwiSWNvbiIsIklDT05TIiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0Iiwic3JjIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiU2lkZWJhciIsInNldE9wZW4iLCJzZXRBY3RpdmUiLCJtb2R1bGUiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJyZWdpc3RlciIsImVtYWlsIiwiVGhlbWVTd2l0Y2hlciIsImxvZ291dCIsInB1c2hTdGF0ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYWN0aXZpdHktYmFyL2luZGV4LnRzeCIsInRzL2FjdGl2aXR5LWJhci9pdGVtL2NvbnRyb2wudHN4IiwidHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwidHMvYWN0aXZpdHktYmFyL2xpc3QudHN4IiwidHMvY29udGV4dC50cyIsInRzL2V4cGxvcmVyLnRzeCIsInRzL2ljb25zL2FwcC1sb2dvLnRzeCIsInRzL2ljb25zL3Byb2ZpbGUudHN4IiwidHMvaW5kZXgudHN4IiwidHMvcmVnaXN0cnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=