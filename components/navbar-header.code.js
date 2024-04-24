System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/breadcrumb", "pragmate-ui@0.1.1/components", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
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
    }, function (_pragmateUi011Components) {
      dependency_7 = _pragmateUi011Components;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_aimpactChatSdk100Session) {
      dependency_9 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Dropdown) {
      dependency_11 = _pragmateUi011Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_12 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/image', dependency_5], ['pragmate-ui/breadcrumb', dependency_6], ['pragmate-ui/components', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/dropdown', dependency_11], ['@beyond-js/widgets/render', dependency_12]]);
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
        hash: 33984170,
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
          var _routing = require("@beyond-js/kernel/routing");
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
            const goHome = () => _routing.routing.pushState('/');
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
              onClick: goHome,
              src: "/assets/rvd/RVD.AI.Branding.png",
              alt: "RVD.AI",
              className: "navbar-logo"
            }), _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: "desktop-breadcrumb",
              items: breadcrumb,
              separator: ":"
            })), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_menu.AsideMenu, null));
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
        hash: 936441000,
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
        hash: 3041395934,
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
            }, texts.classrooms));
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

      /**********************************
      INTERNAL MODULE: ./menu/use-session
      **********************************/

      ims.set('./menu/use-session', {
        hash: 4175025227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSession = useSession;
          function useSession() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2ljb25zIiwiX2ltYWdlIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9icmVhZGNydW1iIiwiX3JvdXRpbmciLCJOYXZiYXJIZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImJyZWFkY3J1bWIiLCJjbHMiLCJyZWYiLCJ1c2VSZWYiLCJtZW51T3BlbmVkIiwic2V0T3Blbk1lbnUiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidG9nZ2xlTWVudSIsInZhbHVlIiwiZ29Ib21lIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIkltYWdlIiwic3JjIiwiYWx0IiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiVXNlck1lbnUiLCJBc2lkZU1lbnUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3RlYWNoZXIiLCJfc2Vzc2lvbiIsIl9zdHVkZW50IiwiX2NvbnRleHQyIiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRlYWNoZXIiLCJ1c2VCaW5kZXIiLCJjbHNDb250YWluZXIiLCJNZW51IiwiVGVhY2hlck1lbnUiLCJTdHVkZW50TWVudSIsImNsaWNrT25CYWNrZHJvcCIsImV2ZW50IiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwiX2l0ZW0iLCJtZW51IiwiY2xhc3Nyb29tcyIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwidXNlU2Vzc2lvbiIsIl9kcm9wZG93biIsIl90aGVtZUJ1dHRvbiIsIl9wcm9maWxlIiwibG9nb3V0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIlRoZW1lU3dpdGNoZXIiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfcmVuZGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInNldEl0ZW0iLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRleHQudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZW51L2NvbnRleHQudHN4IiwiL3RzL21lbnUvaW5kZXgudHN4IiwiL3RzL21lbnUvaXRlbS50c3giLCIvdHMvbWVudS9zdHVkZW50LnRzeCIsIi90cy9tZW51L3RlYWNoZXIudHN4IiwiL3RzL21lbnUvdXNlLXNlc3Npb24udHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFPTyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFXLEVBQWMsQ0FBQztVQUNuRSxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxhQUFhLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSdEUsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQU8sTUFBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBQ0EsSUFBQVUsZUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQVksS0FBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsU0FBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsV0FBQSxHQUFBZCxPQUFBO1VBRUEsSUFBQWUsUUFBQSxHQUFBZixPQUFBO1VBQ087VUFBVSxTQUFVZ0IsWUFBWUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLFNBQVM7WUFBRUM7VUFBVSxDQUFFO1lBQzFFLE1BQU1DLEdBQUcsR0FBRyxnQkFBZ0JGLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVB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