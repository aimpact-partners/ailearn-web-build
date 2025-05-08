System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/icons", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.4.1/components/hooks", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/ailearn-app@0.4.1/components/ui", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/chat-sdk@1.5.4/session", "@aimpact/ailearn-app@0.4.1/model/wrapper", "@aimpact/ailearn-app@0.4.1/components/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, NavbarHeader, CloasableNavbar, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    CloasableNavbar: void 0,
    DefaultNavbar: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_beyondJsKernel0112Routing) {
      dependency_2 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_5 = _pragmateUi100Beta7Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp041ComponentsHooks) {
      dependency_7 = _aimpactAilearnApp041ComponentsHooks;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactAilearnApp041ComponentsUi) {
      dependency_9 = _aimpactAilearnApp041ComponentsUi;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_10 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactChatSdk154Session) {
      dependency_11 = _aimpactChatSdk154Session;
    }, function (_aimpactAilearnApp041ModelWrapper) {
      dependency_12 = _aimpactAilearnApp041ModelWrapper;
    }, function (_aimpactAilearnApp041ComponentsIcons) {
      dependency_13 = _aimpactAilearnApp041ComponentsIcons;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_15 = _pragmateUi100Beta7Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_16 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.1"], ["@aimpact/rvd", "0.4.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/components/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/model/wrapper', dependency_12], ['@aimpact/ailearn-app/components/icons', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/dropdown', dependency_15], ['@beyond-js/widgets/render', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.1/components/navbar-header.code');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/closable
      *************************************/
      ims.set('./components/closable', {
        hash: 1683162156,
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
            broker,
            apply,
            backlink,
            force
          }) {
            if (!apply) return null;
            const onClick = event => {
              event.stopPropagation();
              if (backlink && broker.force || _routing.routing.history.records.entries.length === 1) {
                //back button is not working, so, we always replace the state here.
                if (typeof backlink === 'function') return backlink();
                _routing.routing.replaceState({}, null, backlink);
              }
              return _routing.routing.back();
            };
            return _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              className: "circle",
              onClick: onClick
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./components/notification
      *****************************************/

      ims.set('./components/notification', {
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

      /************************************
      INTERNAL MODULE: ./components/preload
      ************************************/

      ims.set('./components/preload', {
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
        hash: 2621145671,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _closable = require("./navbars/closable");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_react.default.Fragment, null, props.closable ? _react.default.createElement(_closable.CloasableNavbar, {
              ...props
            }) : _react.default.createElement(DefaultNavbar, {
              ...props
            }));
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
        hash: 4190377606,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }), _wrapper.settings.APP_NAME), _react.default.createElement(_icons.Icon, {
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
        hash: 1130199880,
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
            }, texts.classrooms), _react.default.createElement(_item.MenuItem, {
              icon: "archive",
              href: "/archive"
            }, texts.archive));
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

      /**********************************
      INTERNAL MODULE: ./navbars/closable
      **********************************/

      ims.set('./navbars/closable', {
        hash: 3153130697,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloasableNavbar = CloasableNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function CloasableNavbar({
            children,
            detail,
            className,
            closable = false,
            store,
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
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              // src="/assets/logo.png"
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), closable && detail && _react.default.createElement("span", {
              className: "detail"
            }, detail), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 2683708958,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultNavbar = DefaultNavbar;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          var _routing = require("@beyond-js/kernel/routing");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function DefaultNavbar({
            children,
            className,
            store
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
            }, _react.default.createElement(_framerMotion.motion.header, {
              className: cls,
              ref: ref
            }, _react.default.createElement("div", {
              className: "navbar__container"
            }, _react.default.createElement("section", {
              className: "left-section"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
              alt: _wrapper.settings.APP_NAME,
              className: "navbar-logo"
            }), _react.default.createElement("app-breadcrumb", null), store?.broker?.title && _react.default.createElement("span", null, store.broker.title)), _react.default.createElement("section", {
              className: "right-section"
            }, children, _react.default.createElement(_userMenu.UserMenu, null)))), _react.default.createElement(_notification.NotificationBar, {
              texts: texts
            }), _react.default.createElement(_menu.AsideMenu, null));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./user-menu/index
      *********************************/

      ims.set('./user-menu/index', {
        hash: 1953972172,
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
          var _image = require("pragmate-ui/image");
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
            }, _react.default.createElement(_profile.ProfileIcon, null)), _react.default.createElement(_dropdown.DropdownMenu, null, _react.default.createElement("section", {
              className: "user-menu__user-data"
            }, _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: _session.sessionWrapper.user.photoURL
            }), _react.default.createElement("span", null, _session.sessionWrapper.user.displayName), _react.default.createElement("span", null, _session.sessionWrapper.user.email)), _react.default.createElement(_item.UserMenuItem, {
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
        hash: 4170625474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            }) : _react.default.createElement(_icons.AppIcon, {
              icon: "user"
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
        "im": "./navbars/closable",
        "from": "CloasableNavbar",
        "name": "CloasableNavbar"
      }, {
        "im": "./navbars/default",
        "from": "DefaultNavbar",
        "name": "DefaultNavbar"
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
        (require || prop === 'CloasableNavbar') && _export("CloasableNavbar", CloasableNavbar = require ? require('./navbars/closable').CloasableNavbar : value);
        (require || prop === 'DefaultNavbar') && _export("DefaultNavbar", DefaultNavbar = require ? require('./navbars/default').DefaultNavbar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9jbG9zYWJsZSIsIk5hdmJhckhlYWRlciIsInByb3BzIiwiRnJhZ21lbnQiLCJjbG9zYWJsZSIsIkNsb2FzYWJsZU5hdmJhciIsIkRlZmF1bHROYXZiYXIiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX2NvbnRleHQiLCJfdGVhY2hlciIsIl9zZXNzaW9uIiwiX3N0dWRlbnQiLCJfY29udGV4dDIiLCJfd3JhcHBlciIsIkFzaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbmVkIiwicmVmIiwidXNlUmVmIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwic2V0VGVhY2hlciIsInRlYWNoZXIiLCJyb2xlcyIsImluY2x1ZGVzIiwidXNlQmluZGVyIiwiY2xzIiwiY2xzQ29udGFpbmVyIiwiTWVudSIsIlRlYWNoZXJNZW51IiwiU3R1ZGVudE1lbnUiLCJjbGlja09uQmFja2Ryb3AiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsIlByb3ZpZGVyIiwiSWNvbiIsInNldHRpbmdzIiwiQVBQX05BTUUiLCJNZW51SXRlbSIsImNoaWxkcmVuIiwiQ29udHJvbCIsImF0dHJzIiwiQXBwSWNvbiIsIm5hbWUiLCJfaXRlbSIsIm1lbnUiLCJob21lIiwiY2xhc3Nyb29tcyIsImNvbW11bml0eSIsIm1vZHVsZXMiLCJvcmdhbml6YXRpb25zIiwiYXJjaGl2ZSIsInVzZVNlc3Npb24iLCJfYmV5b25kX2NvbnRleHQiLCJfbWVudSIsIl91c2VyTWVudSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIl9mcmFtZXJNb3Rpb24iLCJkZXRhaWwiLCJzdG9yZSIsInVuZGVmaW5lZCIsInNldE9wZW5NZW51IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJBUFBfTE9HTyIsImFsdCIsIlVzZXJNZW51IiwiX2Ryb3Bkb3duIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2V0UHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi90cy9jb21wb25lbnRzL2Nsb3NhYmxlLnRzeCIsIi90cy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi50c3giLCIvdHMvY29tcG9uZW50cy9wcmVsb2FkLnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9tZW51L2NvbnRleHQudHN4IiwiL3RzL21lbnUvaW5kZXgudHN4IiwiL3RzL21lbnUvaXRlbS50c3giLCIvdHMvbWVudS9zdHVkZW50LnRzeCIsIi90cy9tZW51L3RlYWNoZXIudHN4IiwiL3RzL21lbnUvdXNlLXNlc3Npb24udHN4IiwiL3RzL25hdmJhcnMvY2xvc2FibGUudHN4IiwiL3RzL25hdmJhcnMvZGVmYXVsdC50c3giLCIvdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvdHMvdXNlci1tZW51L3Byb2ZpbGUudHN4IiwiL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsTUFBTTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUM7VUFBSyxDQUFFO1lBQzlELElBQUksQ0FBQ0YsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNRyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBS0osUUFBUSxJQUFJRixNQUFNLENBQUNHLEtBQUssSUFBS1IsUUFBQSxDQUFBWSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9FO2dCQUNBLElBQUksT0FBT1QsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Z0JBQ3JEUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVWLFFBQVEsQ0FBQzs7Y0FHekMsT0FBT1AsUUFBQSxDQUFBWSxPQUFPLENBQUNNLElBQUksRUFBRTtZQUN0QixDQUFDO1lBQ0QsT0FBT2YsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBQyxhQUFBLENBQUNsQixNQUFB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