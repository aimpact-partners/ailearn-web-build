System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.1.0/icons", "pragmate-ui@0.1.0/image", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.0/dropdown", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_3 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi010Icons) {
      dependency_4 = _pragmateUi010Icons;
    }, function (_pragmateUi010Image) {
      dependency_5 = _pragmateUi010Image;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_pragmateUi010Components) {
      dependency_7 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi010Dropdown) {
      dependency_9 = _pragmateUi010Dropdown;
    }, function (_beyondJsKernel019Routing) {
      dependency_10 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_11 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/image', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['pragmate-ui/dropdown', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@beyond-js/widgets/render', dependency_11]]);
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
        hash: 483707974,
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
            }, _react.default.createElement(_icons.Icon, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon"
            }), _react.default.createElement(_image.Image, {
              src: "/assets/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            })), _react.default.createElement(_userMenu.UserMenu, null)), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./menu/index
      ****************************/

      ims.set('./menu/index', {
        hash: 4204613204,
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
          function AsideMenu() {
            const {
              toggleMenu,
              menuOpened
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
            return _react.default.createElement("div", {
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
            }), "RVD.AI"), _react.default.createElement(_icons.Icon, {
              icon: "close",
              onClick: toggleMenu
            })), _react.default.createElement(Menu, null)));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./menu/item
      ***************************/

      ims.set('./menu/item', {
        hash: 1146531511,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = MenuItem;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          function MenuItem({
            icon,
            href,
            children,
            ...props
          }) {
            const Control = href ? _components.Link : 'div';
            const attrs = {
              className: 'container__item'
            };
            if (href) {
              attrs['href'] = href;
            }
            return _react.default.createElement("li", {
              ...props
            }, _react.default.createElement(Control, {
              ...attrs
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[icon]
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 769021653,
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
              icon: "classes",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 3465362216,
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
              icon: "classworks",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "schools",
              href: "/organizations/join"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "classes",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 695739838,
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
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement(_themeButton.ThemeSwitcher, null), _react.default.createElement(_item.UserMenuItem, {
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
        hash: 1471099294,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiYnJlYWRjcnVtYiIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVNZW51IiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJJY29uIiwiaWNvbiIsIm9uQ2xpY2siLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiQXNpZGVNZW51IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRlYWNoZXIiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJJQ09OUyIsIl9pdGVtIiwibWVudSIsImNsYXNzcm9vbXMiLCJtb2R1bGVzIiwib3JnYW5pemF0aW9ucyIsIl9kcm9wZG93biIsIl9yb3V0aW5nIiwiX3RoZW1lQnV0dG9uIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVGhlbWVTd2l0Y2hlciIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2V0UHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX3JlbmRlciIsInRoZW1lIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9pbmRleC50c3giLCIvdHMvbWVudS9pdGVtLnRzeCIsIi90cy9tZW51L3N0dWRlbnQudHN4IiwiL3RzL21lbnUvdGVhY2hlci50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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