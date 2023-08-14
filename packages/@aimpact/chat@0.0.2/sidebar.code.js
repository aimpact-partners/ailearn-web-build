System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@0.0.2/shared/components", "@aimpact/chat@0.0.2/navigation", "pragmate-ui@0.0.36/link", "pragmate-ui@0.0.36/tooltip", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@0.0.2/shared/icons"], function (_export, _context2) {
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
    }, function (_aimpactChat002SharedComponents) {
      dependency_6 = _aimpactChat002SharedComponents;
    }, function (_aimpactChat002Navigation) {
      dependency_7 = _aimpactChat002Navigation;
    }, function (_pragmateUi0036Link) {
      dependency_8 = _pragmateUi0036Link;
    }, function (_pragmateUi0036Tooltip) {
      dependency_9 = _pragmateUi0036Tooltip;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat002SharedIcons) {
      dependency_11 = _aimpactChat002SharedIcons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.1.2"], ["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "0.0.36"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["@beyond-js/widgets", "0.1.5"], ["@firebase/component", "0.6.4"], ["@firebase/logger", "0.4.0"], ["@firebase/util", "1.9.3"], ["@google-cloud/error-reporting", "3.0.5"], ["@google-cloud/logging", "10.5.0"], ["@types/dom-mediacapture-record", "1.0.16"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "9.23.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["openai", "3.3.0"], ["prismjs", "1.29.0"], ["react-select", "5.7.4"], ["socket.io-client", "4.7.2"], ["uuid", "9.0.0"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat", "0.0.2"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat@0.0.2/sidebar",
          "multibundle": true
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/chat/shared/components', dependency_6], ['@aimpact/chat/navigation', dependency_7], ['pragmate-ui/link', dependency_8], ['pragmate-ui/tooltip', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/icons', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat@0.0.2/sidebar.code');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3JvdXRpbmciLCJfbGlzdCIsIl9hcHBMb2dvIiwiX3Byb2ZpbGUiLCJfc2Vzc2lvbiIsIl9jb21wb25lbnRzIiwiQWN0aXZpdHlCYXIiLCJvcGVuIiwic2V0T3BlbiIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU9wZW4iLCJjbHMiLCJsb2dvdXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNlc3Npb25XcmFwcGVyIiwiYXV0aCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJBcHBMb2dvIiwiTGlzdEl0ZW1zIiwiUHJvZmlsZUljb24iLCJvbkNsaWNrIiwiVGhlbWVTd2l0Y2hlciIsIkljb24iLCJpY29uIiwiX25hdmlnYXRpb24iLCJfbmF2TGluayIsImFwcE1vZHVsZXMiLCJBcHBOYXZpZ2F0aW9uIiwibW9kdWxlcyIsIkFycmF5IiwiZnJvbSIsIml0ZW1zIiwidmFsdWVzIiwibWFwIiwiaXRlbSIsImkiLCJuYW1lIiwiaHJlZiIsIkV4cGxvcmVyIiwiYWN0aW9uIiwiQWN0aXZpdHlCYXJMaW5rIiwia2V5IiwiaXNMaW5rIiwiX2xpbmsiLCJfdG9vbHRpcCIsIl9ob29rcyIsIl9jb250ZXh0IiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVyaSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b2dnbGVBY3Rpb25NZW51IiwidXNlU2lkZWJhckNvbnRleHQiLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiYXR0cnMiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJOYXZCdXR0b24iLCJJY29uQnV0dG9uIiwidmFyaWFudCIsIkxpbmtlZCIsIkxpbmsiLCJDb250cm9sIiwiVG9vbHRpcCIsInRleHQiLCJwb3NpdGlvbiIsImV4cG9ydHMiLCJSZWFjdCIsIlNpZGViYXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJFeHBsb3JlclZpZXciLCJhY3RpdmUiLCJtb2R1bGUiLCJnZXQiLCJfaWNvbnMyIiwiSUNPTlMiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsImFsdCIsInNyYyIsInBob3RvVVJMIiwib25FcnJvciIsIl9hY3Rpdml0eUJhciIsIl9leHBsb3JlciIsIlNpZGViYXIiLCJzZXRBY3RpdmUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2xpc3QudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9uYXYtbGluay50c3giLCIvdHMvY29udGV4dC50cyIsIi90cy9leHBsb3Jlci50c3giLCIvdHMvaWNvbnMvYXBwLWxvZ28udHN4IiwiL3RzL2ljb25zL3Byb2ZpbGUudHN4IiwiL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxRQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxRQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxXQUFBLEdBQUFQLE9BQUE7VUFFYyxTQUFVUSxXQUFXQSxDQUFBO1lBQ2xDLE1BQU0sQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR1gsTUFBQSxDQUFBWSxPQUFLLENBQUNDLFFBQVEsQ0FB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