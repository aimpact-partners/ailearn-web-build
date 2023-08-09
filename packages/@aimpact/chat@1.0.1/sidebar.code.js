System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.36/components", "@aimpact/chat@1.0.1/navigation", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/tooltip", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Sidebar, AppLogo, ProfileIcon, __beyond_pkg, hmr;
  _export({
    Sidebar: void 0,
    AppLogo: void 0,
    ProfileIcon: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_aimpactChatSdk101Session) {
      dependency_4 = _aimpactChatSdk101Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_5 = _aimpactChat101SharedComponents;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_pragmateUi0036Components) {
      dependency_7 = _pragmateUi0036Components;
    }, function (_aimpactChat101Navigation) {
      dependency_8 = _aimpactChat101Navigation;
    }, function (_pragmateUi0036Link) {
      dependency_9 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Tooltip) {
      dependency_10 = _pragmateUi0036Tooltip;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_12 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@1.0.1/sidebar",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@aimpact/chat/shared/components', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/chat/navigation', dependency_8], ['pragmate-ui/link', dependency_9], ['pragmate-ui/tooltip', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/icons', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar.code');
      ims = new Map();
      /***********************************************
      INTERNAL MODULE: ./components/activity-bar/index
      ***********************************************/
      ims.set('./components/activity-bar/index', {
        hash: 2001125767,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          var _routing = require("@beyond-js/kernel/routing");
          var _components2 = require("pragmate-ui/components");
          var _list = require("./list");
          var _appLogo = require("../../icons/app-logo");
          var _profile = require("../../icons/profile");
          function ActivityBar() {
            const logout = event => {
              event.stopPropagation();
              _session.sessionWrapper.auth.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, null), _react.default.createElement("section", {
              className: 'aside__footer'
            }, _react.default.createElement(_components2.Link, {
              href: '/me/profile'
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.ThemeSwitcher, null)), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'exit',
              onClick: logout
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./components/activity-bar/list
      **********************************************/

      ims.set('./components/activity-bar/list', {
        hash: 337535349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _navigation = require("@aimpact/chat/navigation");
          var _navLink = require("../nav-link");
          function ListItems() {
            const appModules = _navigation.AppNavigation.modules;
            return _react.default.createElement("section", {
              className: 'aside__nav'
            }, Array.from(appModules.items.values()).map((item, i) => {
              const {
                name,
                icon,
                href,
                Explorer,
                action
              } = item;
              return _react.default.createElement(_navLink.NavLink, {
                item: item,
                key: i,
                name: name,
                href: href,
                icon: icon,
                isLink: !Explorer && !action
              });
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/explorer
      *************************************/

      ims.set('./components/explorer', {
        hash: 3148446109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Explorer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Explorer({
            module
          }) {
            const {
              href,
              Explorer
            } = module;
            const {
              open,
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            const actionMenuClass = module => `explorer ${open === module ? 'open' : ''}`;
            const {
              pathname
            } = _routing.routing.uri;
            if (!Explorer) return;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              key: 'action-menu',
              className: actionMenuClass(href)
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

      /**********************************
      INTERNAL MODULE: ./components/index
      **********************************/

      ims.set('./components/index', {
        hash: 2573618267,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var React = require("react");
          var _navigation = require("@aimpact/chat/navigation");
          var _activityBar = require("./activity-bar");
          var _explorer = require("./explorer");
          var _context = require("../context");
          /*bundle*/
          function Sidebar() {
            const appModules = _navigation.AppNavigation.modules;
            const items = Array.from(appModules.items.values());
            const [open, setOpen] = React.useState('');
            const toggleActionMenu = module => open === module ? setOpen('') : setOpen(module);
            return React.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                toggleActionMenu
              }
            }, React.createElement("div", {
              className: 'nav-wrapper'
            }, React.createElement(_activityBar.default, null), items.map((module, i) => React.createElement(_explorer.default, {
              key: `explorer ${i}`,
              module: module
            }))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/nav-link
      *************************************/

      ims.set('./components/nav-link', {
        hash: 1920800279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          const NavLink = ({
            item,
            isLink = false,
            name,
            href,
            icon
          }) => {
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              if (item.action) {
                return item.action();
              }
              toggleActionMenu(href);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            const title = item.title ?? name;
            const NavButton = () => {
              return _react.default.createElement(_icons.IconButton, {
                icon: icon,
                variant: `${isActive ? 'active' : 'nav'}`,
                className: `nav__item circle md${attrs?.className ? ` ${attrs.className}` : ''}`,
                onClick: onClick
              });
            };
            const Linked = () => {
              return _react.default.createElement(_link.Link, {
                href: `/${href}`,
                ...attrs,
                onClick: onClick
              }, _react.default.createElement(_icons.IconButton, {
                icon: icon,
                variant: `${isActive ? 'active' : 'nav'}`,
                className: `nav__item circle md${attrs?.className ? ` ${attrs.className}` : ''}`
              }));
            };
            const Control = isLink ? _react.default.createElement(Linked, null) : _react.default.createElement(NavButton, null);
            return _react.default.createElement(_tooltip.Tooltip, {
              text: title,
              position: 'right'
            }, Control);
          };
          exports.NavLink = NavLink;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4059967913,
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

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 1845760461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat/shared/icons");
          /* bundle */
          const AppLogo = () => _react.default.createElement("div", {
            className: 'aside-item'
          }, _react.default.createElement(_link.Link, {
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
        hash: 1066090500,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item'
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
      __pkg.exports.descriptor = [{
        "im": "./components/index",
        "from": "Sidebar",
        "name": "Sidebar"
      }, {
        "im": "./icons/app-logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./icons/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./components/index').Sidebar : value);
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./icons/app-logo').AppLogo : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./icons/profile').ProfileIcon : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiTCw2QkFBQ1EsV0FBSTtZQUFDQyxJQUFJLEVBQUVpRCxhQUFLLENBQUMsTUFBTSxDQUFDO1lBQUV6RCxTQUFTLEVBQUM7VUFBSSxFQUFHLENBQ3RDLENBRVI7VUFBQ3FEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hGO1VBQ0E7VUFDQTtVQUVPO1VBQWEsTUFBTWhELFdBQVcsR0FBRyxNQUFLO1lBQzVDLE1BQU0sQ0FBQ3FELFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUc1RCxjQUFLLENBQUNvQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELE1BQU15QixTQUFTLEdBQUdqRSx1QkFBYyxDQUFDa0UsSUFBSSxDQUFDQyxhQUFhLEVBQUU7WUFDckQsTUFBTUMsZUFBZSxHQUFHLE1BQU1KLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFaEQsT0FDQzVEO2NBQUtDLFNBQVMsRUFBQztZQUFZLEdBQ3pCLENBQUMwRCxTQUFTLEdBQ1YzRDtjQUFLaUUsR0FBRyxFQUFDLG9CQUFvQjtjQUFDQyxHQUFHLEVBQUVMLFNBQVMsQ0FBQ00sUUFBUTtjQUFFQyxPQUFPLEVBQUVKO1lBQWUsRUFBSSxHQUVuRmhFLDZCQUFDUSxXQUFJO2NBQUNQLFNBQVMsRUFBQyxJQUFJO2NBQUNRLElBQUksRUFBRTtZQUFNLEVBQ2pDLENBQ0k7VUFFUixDQUFDO1VBQUM2QyIsIm5hbWVzIjpbIkFjdGl2aXR5QmFyIiwibG9nb3V0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXNzaW9uV3JhcHBlciIsImF1dGgiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiTGluayIsImhyZWYiLCJQcm9maWxlSWNvbiIsIlRoZW1lU3dpdGNoZXIiLCJJY29uIiwiaWNvbiIsIm9uQ2xpY2siLCJhcHBNb2R1bGVzIiwiQXBwTmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJBcnJheSIsImZyb20iLCJpdGVtcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpIiwibmFtZSIsIkV4cGxvcmVyIiwiYWN0aW9uIiwiTmF2TGluayIsImtleSIsImlzTGluayIsIm1vZHVsZSIsIm9wZW4iLCJ0b2dnbGVBY3Rpb25NZW51IiwiYWN0aW9uTWVudUNsYXNzIiwicGF0aG5hbWUiLCJ1cmkiLCJJY29uQnV0dG9uIiwiU2lkZWJhciIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIlNpZGViYXJDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0IiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJOYXZCdXR0b24iLCJ2YXJpYW50IiwiTGlua2VkIiwiQ29udHJvbCIsIlRvb2x0aXAiLCJ0ZXh0IiwicG9zaXRpb24iLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQ29udGV4dCIsIklDT05TIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJhbHQiLCJzcmMiLCJwaG90b1VSTCIsIm9uRXJyb3IiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbImNvZGUvdHMvY29tcG9uZW50cy9hY3Rpdml0eS1iYXIvaW5kZXgudHN4IiwiY29kZS90cy9jb21wb25lbnRzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsImNvZGUvdHMvY29tcG9uZW50cy9leHBsb3Jlci50c3giLCJjb2RlL3RzL2NvbXBvbmVudHMvaW5kZXgudHN4IiwiY29kZS90cy9jb21wb25lbnRzL25hdi1saW5rLnRzeCIsImNvZGUvdHMvY29udGV4dC50cyIsImNvZGUvdHMvaWNvbnMvYXBwLWxvZ28udHN4IiwiY29kZS90cy9pY29ucy9wcm9maWxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19