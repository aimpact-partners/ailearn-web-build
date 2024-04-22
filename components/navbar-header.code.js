System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.1/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_3 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Icons) {
      dependency_4 = _pragmateUi011Icons;
    }, function (_pragmateUi011Image) {
      dependency_5 = _pragmateUi011Image;
    }, function (_pragmateUi011Breadcrumb) {
      dependency_6 = _pragmateUi011Breadcrumb;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_10 = _pragmateUi011Dropdown;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_12 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/breadcrumb', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['pragmate-ui/dropdown', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['@beyond-js/widgets/render', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/components/navbar-header.code');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1377720157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2113724920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _beyond_context = require("beyond_context");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function NavbarHeader({
            children,
            className,
            breadcrumb
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return null;
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              src: "/assets/rvd/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: "desktop-breadcrumb",
              items: breadcrumb
            })), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: breadcrumb,
              className: "mobile-breadcrumb"
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/context
      ******************************/

      ims.set('./menu/context', {
        hash: 617749427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOffCanvasMenuContext = exports.OffCanvasMenuContext = void 0;
          var _react = require("react");
          const OffCanvasMenuContext = exports.OffCanvasMenuContext = _react.default.createContext({});
          const useOffCanvasMenuContext = () => _react.default.useContext(OffCanvasMenuContext);
          exports.useOffCanvasMenuContext = useOffCanvasMenuContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 4152304743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _teacher = require("./teacher");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _session = require("@aimpact/chat-sdk/session");
          var _student = require("./student");
          var _context2 = require("./context");
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened,
              texts
            } = (0, _context.useModuleContext)();
            const [isTeacher, setTeacher] = _react.default.useState(!!_session.sessionWrapper?.user?.teacher);
            const ref = (0, _react.useRef)(null);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setTeacher(!!_session.sessionWrapper.user?.teacher), 'login');
            const cls = `off-canvas-menu${menuOpened ? ' open' : ''}`;
            const clsContainer = `off-canvas-menu-container${menuOpened ? ' opened' : ''}`;
            const Menu = isTeacher ? _teacher.TeacherMenu : _student.StudentMenu;
            const clickOnBackdrop = event => {
              if (ref.current.isSameNode(event.target)) toggleMenu(!menuOpened);
            };
            return _react.default.createElement(_context2.OffCanvasMenuContext.Provider, {
              value: {
                texts,
                menuOpened,
                toggleMenu
              }
            }, _react.default.createElement("div", {
              className: clsContainer,
              onClick: clickOnBackdrop,
              ref: ref
            }, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("header", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("div", {
              className: "menu__header"
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu
            }), "RVD.AI Rivadavia"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 2000838927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("./context");
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const {
              toggleMenu,
              menuOpened
            } = (0, _context.useOffCanvasMenuContext)();
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            const onClick = () => toggleMenu(!menuOpened);
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick
            }, icon && _react.default.createElement(_icons.AppIcon, {
              src: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 309517857,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentMenu = StudentMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function StudentMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "entities/classrooms",
              href: "/classrooms/list"
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "entities/school",
              href: "/organizations/join"
            }, texts.organizations));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 125803342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function TeacherMenu() {
            const {
              texts: {
                menu: texts
              }
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("nav", null, _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/schools",
              href: "/organizations/join"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classrooms",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 85630236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _item = require("./item");
          var _themeButton = require("./theme-button");
          var _profile = require("./profile");
          var _context = require("../context");
          function UserMenu() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const logout = async event => {
              event.stopPropagation();
              await _session.sessionWrapper.logout();
              _routing.routing.pushState('/auth/login');
            };
            return _react.default.createElement(_dropdown.Dropdown, {
              className: "user-menu"
            }, _react.default.createElement(_dropdown.DropdownToggle, {
              className: "content-user"
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_item.UserMenuItem, {
              href: "/users/me",
              icon: "user"
            }, texts.userMenu.preferences), _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.UserMenuItem, {
              onClick: logout,
              icon: "exit"
            }, texts.userMenu.logout)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./user-menu/item
      ********************************/

      ims.set('./user-menu/item', {
        hash: 1711784581,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenuItem = UserMenuItem;
          var _react = require("react");
          var _dropdown = require("pragmate-ui/dropdown");
          var _icons = require("pragmate-ui/icons");
          function UserMenuItem({
            icon,
            children,
            ...props
          }) {
            return _react.default.createElement(_dropdown.DropdownItem, {
              ...props
            }, _react.default.createElement("div", {
              className: "container__item"
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./user-menu/profile
      ***********************************/

      ims.set('./user-menu/profile', {
        hash: 2952732086,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          var _image = require("pragmate-ui/image");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /* bundle */
          const ProfileIcon = () => {
            const [loadError, setLoadError] = _react.default.useState(false);
            const [userProps, setProps] = _react.default.useState(_session.sessionWrapper.user?.getProperties() ?? {});
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: "dropdown-menu__user-icon"
            }, !loadError ? _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /****************************************
      INTERNAL MODULE: ./user-menu/theme-button
      ****************************************/

      ims.set('./user-menu/theme-button', {
        hash: 1023347963,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          var _item = require("./item");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement(_item.UserMenuItem, {
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }), _react.default.createElement("span", null, "Theme"));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./user-menu/user-item
      *************************************/

      ims.set('./user-menu/user-item', {
        hash: 1679571895,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserItem = UserItem;
          var _react = require("react");
          function UserItem() {
            return _react.default.createElement("div", null);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "NavbarHeader",
        "name": "NavbarHeader"
      }, {
        "im": "./user-menu/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./user-menu/theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'NavbarHeader') && _export("NavbarHeader", NavbarHeader = require ? require('./index').NavbarHeader : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./user-menu/profile').ProfileIcon : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./user-menu/theme-button').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9icmVhZGNydW1iIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJicmVhZGNydW1iIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInRvZ2dsZU1lbnUiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIkltYWdlIiwic3JjIiwiYWx0IiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiX2NvbnRleHQyIiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRlYWNoZXIiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwiX2l0ZW0iLCJtZW51IiwiY2xhc3Nyb29tcyIsIm9yZ2FuaXphdGlvbnMiLCJtb2R1bGVzIiwiX2Ryb3Bkb3duIiwiX3JvdXRpbmciLCJfdGhlbWVCdXR0b24iLCJfcHJvZmlsZSIsImxvZ291dCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiVGhlbWVTd2l0Y2hlciIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwidXNlRWZmZWN0IiwiVXNlckl0ZW0iXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lbnUvY29udGV4dC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFPTyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUNuRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSdEUsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsZUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsU0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsV0FBQSxHQUFBZCxPQUFBO1VBQ087VUFBVSxTQUFVZSxZQUFZQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsU0FBUztZQUFFQztVQUFVLENBQUU7WUFDMUUsTUFBTUMsR0FBRyxHQUFHLGdCQUFnQkYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM5RCxNQUFNRyxHQUFHLEdBQUdyQixNQUFBLENBQUFJLE9BQUssQ0FBQ2tCLE1BQU0sRUFBRTtZQUMxQixNQUFNLENBQUNDLFVB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