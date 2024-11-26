System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.6/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/image", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.2.10/components/icons", "dayjs@1.11.13", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/dropdown", "@beyond-js/widgets@1.1.0/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_2 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_3 = _pragmateUi100Beta6Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Image) {
      dependency_6 = _pragmateUi100Beta6Image;
    }, function (_aimpactChatSdk130Session) {
      dependency_7 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Components) {
      dependency_8 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6Dropdown) {
      dependency_12 = _pragmateUi100Beta6Dropdown;
    }, function (_beyondJsWidgets110Render) {
      dependency_13 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['dayjs', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/dropdown', dependency_12], ['@beyond-js/widgets/render', dependency_13]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 1303316421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClosableIcon = ClosableIcon;
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          /**
           * Renders an icon button that conditionally handles navigation based on the user's history state and provided backlink.
           * This component determines if the user can navigate back in their browsing history safely (i.e., the user did not land directly via URL).
           * If navigating back is deemed unsafe or if the history is inadequate, it redirects to a provided backlink URL, thus avoiding potential navigation errors.
           *
           * @param {object} props - The properties passed to the ClosableIcon component.
           * @param {Function} props.apply - A flag to determine if the IconButton should be rendered. If falsy, the component renders nothing.
           * @param {string} props.backlink - A URL string to redirect to if there is no adequate history to go back to. This is used to replace the current state in history, ensuring the user does not navigate back to an erroneous or unintended page.
           * @returns {JSX.Element|null} A clickable icon that conditionally manipulates the navigation history based on the session's state, or null if `apply` is falsy.
           *
           * Usage Example:
           * <ClosableIcon apply={true} backlink="/home" />
           *
           * In this scenario, if sessionStorage indicates that the user did not start their session from the current view, and if there is a sufficient history, it will trigger a back navigation. Otherwise, it will redirect to the `/home` URL provided in `backlink`.
           */
          function ClosableIcon({
            apply,
            backlink
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              //back button is not working, so, we always replace the state here.
              if (typeof backlink === 'function') return backlink();
              _routing.routing.replaceState({}, null, backlink);
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "close",
              className: "circle",
              onClick: onClick
            });
          }
        }
      });

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

      /************************
      INTERNAL MODULE: ./global
      ************************/

      ims.set('./global', {
        hash: 3098530438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2043818889,
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
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          var _preload = require("./preload");
          var _notification = require("./notification");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            updated,
            breadcrumb,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
            const toggleMenu = () => setOpenMenu(!menuOpened);
            const value = {
              texts,
              menuOpened,
              toggleMenu,
              updated
            };
            const goHome = () => _routing.routing.pushState('/');
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, _react.default.createElement("section", {
              className: "left-section"
            }, !closable && _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_closable.ClosableIcon, {
              apply: closable,
              backlink: backlink
            }), !closable && _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: "/assets/rvd/logo.png",
              // src="/assets/logo.png"
              alt: "RVD.AI",
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
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
        hash: 3690413341,
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
            const ref = (0, _react.useRef)(null);
            const {
              user
            } = _session.sessionWrapper;
            const [isTeacher, setTeacher] = _react.default.useState(!!user.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
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
        hash: 2183568391,
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
              name: icon
            }), children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/student
      ******************************/

      ims.set('./menu/student', {
        hash: 3943653979,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/classrooms/list"
            }, texts.classrooms));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./menu/teacher
      ******************************/

      ims.set('./menu/teacher', {
        hash: 2417268694,
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
              icon: "home",
              href: "/"
            }, texts.home), _react.default.createElement(_item.MenuItem, {
              icon: "community",
              href: "/community"
            }, texts.community), _react.default.createElement(_item.MenuItem, {
              icon: "entities/module",
              href: "/modules/list"
            }, texts.modules), _react.default.createElement(_item.MenuItem, {
              icon: "entities/school",
              href: "/organizations/list"
            }, texts.organizations), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
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

      /******************************
      INTERNAL MODULE: ./notification
      ******************************/

      ims.set('./notification', {
        hash: 3615991152,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotificationBar = NotificationBar;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _dayjs = require("dayjs");
          /**
           * Checks if the current date is at most 7 days after the given date.
           * @param {string | Date} date - The input date to compare.
           * @returns {boolean} - Returns true if the current date is at most 7 days after the input date, otherwise false.
           */
          function isWithinSevenDays(date) {
            const inputDate = (0, _dayjs.default)(date);
            const maxDate = inputDate.add(7, 'day');
            return (0, _dayjs.default)().isAfter(maxDate);
          }
          function NotificationBar({
            texts
          }) {
            const isVisible = !localStorage.getItem('app.version.notification');
            const canBeShowed = isWithinSevenDays('2024-11-12');
            const [mostBeShowed, setMostBeShowed] = _react.default.useState(isVisible && canBeShowed);
            if (!mostBeShowed) return null;
            const onClose = event => {
              event.stopPropagation();
              localStorage.setItem('app.version.notification', 'true');
              setMostBeShowed(false);
            };
            return _react.default.createElement("div", {
              className: "notification__bar--container"
            }, _react.default.createElement("div", {
              className: "notification__bar--content"
            }, _react.default.createElement(_components.Link, {
              href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
              target: "_blank"
            }, _react.default.createElement("div", {
              className: "notification__message"
            }, texts.newVersion)), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: onClose
            })));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 3972098412,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("header", {
              className: "navbar-header preload"
            }, _react.default.createElement("div", {
              className: "left-section"
            }), _react.default.createElement("div", {
              className: "right-section"
            }, _react.default.createElement(_image.Image, {
              className: "profile-img preload"
            }))));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 2656601671,
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
            }, texts.userMenu.preferences), _react.default.createElement(_item.UserMenuItem, {
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
        hash: 1754776506,
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
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setLoadError(_session.sessionWrapper?.user?.getProperties()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJNb2R1bGVDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2R1bGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MiLCJfaW1hZ2UiLCJfYmV5b25kX2NvbnRleHQiLCJfY29udGV4dCIsIl9tZW51IiwiX3VzZXJNZW51IiwiX2Nsb3NhYmxlIiwiX3ByZWxvYWQiLCJfbm90aWZpY2F0aW9uIiwiTmF2YmFySGVhZGVyIiwiY2hpbGRyZW4iLCJkZXRhaWwiLCJjbG9zYWJsZSIsInVwZGF0ZWQiLCJicmVhZGNydW1iIiwidW5kZWZpbmVkIiwiY2xzIiwicmVmIiwidXNlUmVmIiwibWVudU9wZW5lZCIsInNldE9wZW5NZW51IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsIlByZWxvYWQiLCJ0b2dnbGVNZW51IiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiTm90aWZpY2F0aW9uQmFyIiwiQXNpZGVNZW51IiwiT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJ1c2VPZmZDYW52YXNNZW51Q29udGV4dCIsIl90ZWFjaGVyIiwiX3Nlc3Npb24iLCJfc3R1ZGVudCIsIl9jb250ZXh0MiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZUJpbmRlciIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwibWVudSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsIm9yZ2FuaXphdGlvbnMiLCJ1c2VTZXNzaW9uIiwiX2RheWpzIiwiaXNXaXRoaW5TZXZlbkRheXMiLCJkYXRlIiwiaW5wdXREYXRlIiwibWF4RGF0ZSIsImFkZCIsImlzQWZ0ZXIiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJvbkNsb3NlIiwic2V0SXRlbSIsIm5ld1ZlcnNpb24iLCJfdWkiLCJBbmltYXRlZENvbnRhaW5lciIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jbG9zYWJsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9ub3RpZmljYXRpb24udHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztVQWdCTSxTQUFVRyxZQUFZQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUM7VUFBUSxDQUFFO1lBQy9DLElBQUksQ0FBQ0QsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixN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