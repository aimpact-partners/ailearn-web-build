System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/shared/components", "@aimpact/chat@1.0.1/navigation", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/tooltip", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_4 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101SharedComponents) {
      dependency_6 = _aimpactChat101SharedComponents;
    }, function (_aimpactChat101Navigation) {
      dependency_7 = _aimpactChat101Navigation;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Tooltip) {
      dependency_9 = _pragmateUi0036Tooltip;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedIcons) {
      dependency_11 = _aimpactChat101SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.0"], ["@beyond-js/widgets", "0.1.4"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.9.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.3"], ["socket.io-client", "4.7.1"], ["uuid", "9.0.0"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat", "1.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/chat/shared/components', dependency_6], ['@aimpact/chat/navigation', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/tooltip', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/icons', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@1.0.1/sidebar.code');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 4252736684,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("./list");
          var _appLogo = require("../icons/app-logo");
          var _profile = require("../icons/profile");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/chat/shared/components");
          function ActivityBar() {
            const [open, setOpen] = _react.default.useState(false);
            const toggleOpen = () => setOpen(!open);
            const cls = `explorer ${open ? 'open' : ''}`;
            const logout = event => {
              event.stopPropagation();
              _session.sessionWrapper.auth.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: 'aside-bar'
            }, _react.default.createElement("section", {
              className: 'aside__top'
            }, _react.default.createElement(_appLogo.AppLogo, null)), _react.default.createElement(_list.ListItems, null), _react.default.createElement("section", {
              className: 'aside__footer'
            }, _react.default.createElement(_profile.ProfileIcon, {
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.ThemeSwitcher, null)), _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_icons.Icon, {
              icon: 'exit',
              onClick: logout
            })))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 567279742,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _navigation = require("@aimpact/chat/navigation");
          var _navLink = require("./nav-link");
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
              return _react.default.createElement(_navLink.ActivityBarLink, {
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

      /***************************************
      INTERNAL MODULE: ./activity-bar/nav-link
      ***************************************/

      ims.set('./activity-bar/nav-link', {
        hash: 2773978321,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _icons = require("pragmate-ui/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          const ActivityBarLink = ({
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
              toggleActionMenu(item.id);
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
          exports.ActivityBarLink = ActivityBarLink;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 2391054678,
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
        hash: 2327721574,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function ExplorerView() {
            const {
              open,
              toggleActionMenu,
              modules,
              active
            } = (0, _context.useSidebarContext)();
            const module = modules.items.get(active);
            const cls = `explorer ${active === module?.id ? 'open' : ''}`;
            if (!module?.Explorer) return null;
            const {
              Explorer,
              href
            } = module;
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
        hash: 1355952848,
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
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
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
        hash: 4012670157,
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
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const appModules = _navigation.AppNavigation.modules;
            const items = Array.from(appModules.items.values());
            const [open, setOpen] = React.useState('');
            const [active, setActive] = React.useState('');
            const toggleActionMenu = module => {
              setActive(module);
              open === module ? setOpen('') : setOpen(module);
            };
            return React.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                modules: appModules,
                toggleActionMenu,
                active
              }
            }, React.createElement("div", {
              className: 'nav-wrapper'
            }, React.createElement(_activityBar.default, null), React.createElement(_explorer.ExplorerView, null)));
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dCIsInVzZVN0YXRlIiwidG9nZ2xlT3BlbiIsImNscyIsImxvZ291dCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNsYXNzTmFtZSIsIkFwcExvZ28iLCJMaXN0SXRlbXMiLCJQcm9maWxlSWNvbiIsIm9uQ2xpY2siLCJUaGVtZVN3aXRjaGVyIiwiSWNvbiIsImljb24iLCJhcHBNb2R1bGVzIiwiQXBwTmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJBcnJheSIsImZyb20iLCJpdGVtcyIsInZhbHVlcyIsIm1hcCIsIml0ZW0iLCJpIiwibmFtZSIsImhyZWYiLCJFeHBsb3JlciIsImFjdGlvbiIsIkFjdGl2aXR5QmFyTGluayIsImtleSIsImlzTGluayIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIk5hdkJ1dHRvbiIsIkljb25CdXR0b24iLCJ2YXJpYW50IiwiTGlua2VkIiwiTGluayIsIkNvbnRyb2wiLCJUb29sdGlwIiwidGV4dCIsInBvc2l0aW9uIiwiZXhwb3J0cyIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQ29udGV4dCIsIkV4cGxvcmVyVmlldyIsImFjdGl2ZSIsIm1vZHVsZSIsImdldCIsIklDT05TIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwidXNlciIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJhbHQiLCJzcmMiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJTaWRlYmFyIiwic2V0QWN0aXZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYWN0aXZpdHktYmFyL2luZGV4LnRzeCIsInRzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsInRzL2FjdGl2aXR5LWJhci9uYXYtbGluay50c3giLCJ0cy9jb250ZXh0LnRzIiwidHMvZXhwbG9yZXIudHN4IiwidHMvaWNvbnMvYXBwLWxvZ28udHN4IiwidHMvaWNvbnMvcHJvZmlsZS50c3giLCJ0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==