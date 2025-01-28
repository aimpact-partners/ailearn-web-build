System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.2.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/icons", "dayjs@1.11.13", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.1/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_5 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_6 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk141Session) {
      dependency_7 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_dayjs2) {
      dependency_10 = _dayjs2;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_13 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets111Render) {
      dependency_14 = _beyondJsWidgets111Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['pragmate-ui/image', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['pragmate-ui/components', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['dayjs', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/dropdown', dependency_13], ['@beyond-js/widgets/render', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/navbar-header.code');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./closable
      **************************/
      ims.set('./closable', {
        hash: 119735664,
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
              if (!backlink) {
                return _routing.routing.back();
              }
              //back button is not working, so, we always replace the state here.
              if (typeof backlink === 'function') return backlink();
              _routing.routing.replaceState({}, null, backlink);
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
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
        hash: 1585477119,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("./closable");
          var _notification = require("./notification");
          var _preload = require("./preload");
          /*bundle*/
          function NavbarHeader({
            children,
            detail,
            className,
            closable = false,
            breadcrumb = false,
            store,
            title,
            backlink = undefined
          }) {
            const cls = `navbar-header${className ? ` ${className}` : ''}`;
            const ref = _react.default.useRef();
            const [menuOpened, setOpenMenu] = _react.default.useState(false);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [updated, setUpdated] = _react.default.useState({});
            (0, _hooks.useBinder)([store.broker], () => {
              setUpdated({});
            }, 'title.changed');
            if (!textsReady) return _react.default.createElement(_preload.Preload, null);
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
            }, detail), breadcrumb && _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
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
        hash: 375223156,
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
            const [isTeacher, setTeacher] = _react.default.useState(!!user?.teacher || !!user?.roles?.includes('teacher'));
            (0, _hooks.useBinder)([user], () => {
              setTeacher(!!user?.teacher || !!user?.roles.includes('teacher'));
            }, ['user.loaded', 'login']);
            if (!user) return null;
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
        hash: 3113318078,
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
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /**
           * Checks if the current date is at most 7 days after the given date.
           * @param {string | Date} date - The input date to compare.
           * @returns {boolean} - Returns true if the current date is at most 7 days after the input date, otherwise false.
           */
          function isWithinSevenDays(date) {
            const inputDate = (0, _dayjs.default)(date);
            const maxDate = inputDate.add(7, 'day');
            return !(0, _dayjs.default)().isAfter(maxDate);
          }
          function NotificationBar({
            texts
          }) {
            const isVisible = !localStorage.getItem('app.version.notification');
            const canBeShowed = isWithinSevenDays('2024-12-01');
            const [mostBeShowed, setMostBeShowed] = _react.default.useState(isVisible && canBeShowed);
            const screenSize = (0, _hooks.useMediaQuery)();
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
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: screenSize === 'xs',
              ternary: true,
              options: {
                true: _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, _react.default.createElement("div", {
                  className: "notification__message"
                }, texts.newVersion.xs)),
                false: _react.default.createElement("div", {
                  className: "notification__message"
                }, _react.default.createElement("h6", null, texts.newVersion.desktop.title), _react.default.createElement("span", null, texts.newVersion.desktop.label), _react.default.createElement(_components.Link, {
                  href: "https://www.rvd.ai/actualizacion-versiones-app/mis-aulas",
                  target: "_blank"
                }, texts.newVersion.desktop.link))
              }
            }), _react.default.createElement(_icons.IconButton, {
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
        hash: 842084235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserMenu = UserMenu;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _dropdown = require("pragmate-ui/dropdown");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _profile = require("./profile");
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
        hash: 3199545540,
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
            const handleLoadError = () => setLoadError(true);
            (0, _hooks.useBinder)([_session.sessionWrapper], () => setProps(_session.sessionWrapper.user.getProperties()), 'login');
            if (!_session.sessionWrapper.user) return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJhcHBseSIsImJhY2tsaW5rIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicm91dGluZyIsImJhY2siLCJyZXBsYWNlU3RhdGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJpY29uIiwiY2xhc3NOYW1lIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2ltYWdlIiwiX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9jbG9zYWJsZSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIk5hdmJhckhlYWRlciIsImNoaWxkcmVuIiwiZGV0YWlsIiwiY2xvc2FibGUiLCJicmVhZGNydW1iIiwic3RvcmUiLCJ0aXRsZSIsInVuZGVmaW5lZCIsImNscyIsInJlZiIsInVzZVJlZiIsIm1lbnVPcGVuZWQiLCJzZXRPcGVuTWVudSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsImJyb2tlciIsIlByZWxvYWQiLCJ0b2dnbGVNZW51IiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsIlVzZXJNZW51IiwiTm90aWZpY2F0aW9uQmFyIiwiQXNpZGVNZW51IiwiT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJ1c2VPZmZDYW52YXNNZW51Q29udGV4dCIsIl90ZWFjaGVyIiwiX3Nlc3Npb24iLCJfc3R1ZGVudCIsIl9jb250ZXh0MiIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImlzVGVhY2hlciIsInNldFRlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJ0YXJnZXQiLCJJY29uIiwiX2NvbXBvbmVudHMiLCJNZW51SXRlbSIsImhyZWYiLCJwcm9wcyIsIkNvbnRyb2wiLCJMaW5rIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwibWVudSIsImhvbWUiLCJjbGFzc3Jvb21zIiwiY29tbXVuaXR5IiwibW9kdWxlcyIsIm9yZ2FuaXphdGlvbnMiLCJ1c2VTZXNzaW9uIiwiX2RheWpzIiwiaXNXaXRoaW5TZXZlbkRheXMiLCJkYXRlIiwiaW5wdXREYXRlIiwibWF4RGF0ZSIsImFkZCIsImlzQWZ0ZXIiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsIm9uQ2xvc2UiLCJzZXRJdGVtIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJuZXdWZXJzaW9uIiwieHMiLCJmYWxzZSIsImRlc2t0b3AiLCJsYWJlbCIsImxpbmsiLCJfdWkiLCJBbmltYXRlZENvbnRhaW5lciIsIl9kcm9wZG93biIsIl9wcm9maWxlIiwibG9nb3V0IiwiRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIlByb2ZpbGVJY29uIiwiRHJvcGRvd25NZW51IiwiVXNlck1lbnVJdGVtIiwidXNlck1lbnUiLCJwcmVmZXJlbmNlcyIsIkRyb3Bkb3duSXRlbSIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInVzZXJQcm9wcyIsInNldFByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsInBob3RvVVJMIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jbG9zYWJsZS50c3giLCIvdHMvY29udGV4dC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvbWVudS9jb250ZXh0LnRzeCIsIi90cy9tZW51L2luZGV4LnRzeCIsIi90cy9tZW51L2l0ZW0udHN4IiwiL3RzL21lbnUvc3R1ZGVudC50c3giLCIvdHMvbWVudS90ZWFjaGVyLnRzeCIsIi90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi90cy9ub3RpZmljYXRpb24udHN4IiwiL3RzL3ByZWxvYWQudHN4IiwiL3RzL3VzZXItbWVudS9pbmRleC50c3giLCIvdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi90cy91c2VyLW1lbnUvdGhlbWUtYnV0dG9uLnRzeCIsIi90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdB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