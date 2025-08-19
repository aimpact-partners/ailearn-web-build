System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.6/icons", "react@18.3.1", "pragmate-ui@1.0.6/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/image", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/model/wrapper", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.5.7/components/icons", "@radix-ui/react-accordion@1.2.12", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.6/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, NavbarHeader, DefaultNavbar, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
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
    }, function (_pragmateUi106Icons) {
      dependency_3 = _pragmateUi106Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi106Components) {
      dependency_5 = _pragmateUi106Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_7 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Image) {
      dependency_8 = _pragmateUi106Image;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_9 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_10 = _aimpactAilearnApp057ModelWrapper;
    }, function (_aimpactChatSdk155Session) {
      dependency_11 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_radixUiReactAccordion) {
      dependency_13 = _radixUiReactAccordion;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_14 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_pragmateUi106Dropdown) {
      dependency_16 = _pragmateUi106Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_17 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/shared/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@radix-ui/react-accordion', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['framer-motion', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@beyond-js/widgets/render', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/components/navbar-header.code');
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
        hash: 1878913676,
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
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 548630149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _react = require("react");
          var _default = require("./navbars/default");
          /*bundle*/
          function NavbarHeader(props) {
            return _react.default.createElement(_default.DefaultNavbar, {
              ...props,
              closable: props.closable
            });
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
        hash: 163401941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _session = require("@aimpact/chat-sdk/session");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          var _context2 = require("./context");
          var _student = require("./student");
          var _teacher = require("./teacher");
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
            //@ts-ignore
            const isTeacher = !!user?.teacher || !!user?.roles?.includes('teacher');
            (0, _hooks.useStore)(user, ['user.loaded', 'login']);
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
            })), _react.default.createElement("div", {
              className: "menu__inner-content"
            }, _react.default.createElement(Menu, null), _react.default.createElement("div", {
              className: "menu__footer"
            }, _react.default.createElement("div", {
              className: "icon__container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "email"
            })), texts.menu.support, ": ", _wrapper.settings.APP_SUPPORT_EMAIL)))));
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
        hash: 1137826799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TeacherMenu = TeacherMenu;
          var _react = require("react");
          var _context = require("../context");
          var Accordion = require("@radix-ui/react-accordion");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
            }, texts.modules), _react.default.createElement("li", {
              className: "menu-item"
            }, _react.default.createElement(Accordion.Root, {
              type: "single",
              collapsible: true
            }, _react.default.createElement(Accordion.Item, {
              value: `1`
            }, _react.default.createElement(Accordion.Trigger, {
              className: "menu-trigger"
            }, _react.default.createElement("div", {
              className: "container__item"
            }, _react.default.createElement(_icons.AppIcon, {
              name: "entities/classroom"
            }), texts.knowledgeBoxes), _react.default.createElement("span", {
              className: "caret",
              "aria-hidden": true
            }, "\u25BE")), _react.default.createElement(Accordion.Content, {
              className: "menu-content "
            }, _react.default.createElement("ul", {
              className: "submenu"
            }, _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/sections/list"
            }, texts.sections), _react.default.createElement(_item.MenuItem, {
              icon: "entities/classroom",
              href: "/kb/articles/list"
            }, texts.articles)))))), _react.default.createElement(_item.MenuItem, {
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

      /*********************************
      INTERNAL MODULE: ./navbars/default
      *********************************/

      ims.set('./navbars/default', {
        hash: 1514492687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DefaultNavbar = DefaultNavbar;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _closable = require("../components/closable");
          var _notification = require("../components/notification");
          var _preload = require("../components/preload");
          var _context = require("../context");
          var _menu = require("../menu");
          var _userMenu = require("../user-menu");
          /*bundle*/
          function DefaultNavbar({
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
            }, closable ? _react.default.createElement(_closable.ClosableIcon, {
              broker: store.broker,
              apply: closable,
              backlink: backlink,
              force: store?.broker?.force
            }) : _react.default.createElement(_icons.IconButton, {
              icon: "bars",
              onClick: toggleMenu,
              className: "hamburger-icon circle"
            }), _react.default.createElement(_image.Image, {
              onClick: goHome,
              src: _wrapper.settings.APP_LOGO,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwiTmF2YmFySGVhZGVyIiwicHJvcHMiLCJEZWZhdWx0TmF2YmFyIiwiY2xvc2FibGUiLCJPZmZDYW52YXNNZW51Q29udGV4dCIsInVzZU9mZkNhbnZhc01lbnVDb250ZXh0IiwiX3dyYXBwZXIiLCJfc2Vzc2lvbiIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiX3N0dWRlbnQiLCJfdGVhY2hlciIsIkFzaWRlTWVudSIsInRvZ2dsZU1lbnUiLCJtZW51T3BlbmVkIiwicmVmIiwidXNlUmVmIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiaXNUZWFjaGVyIiwidGVhY2hlciIsInJvbGVzIiwiaW5jbHVkZXMiLCJ1c2VTdG9yZSIsImNscyIsImNsc0NvbnRhaW5lciIsIk1lbnUiLCJUZWFjaGVyTWVudSIsIlN0dWRlbnRNZW51IiwiY2xpY2tPbkJhY2tkcm9wIiwiY3VycmVudCIsImlzU2FtZU5vZGUiLCJQcm92aWRlciIsIkljb24iLCJzZXR0aW5ncyIsIkFQUF9OQU1FIiwibWVudSIsInN1cHBvcnQiLCJBUFBfU1VQUE9SVF9FTUFJTCIsIk1lbnVJdGVtIiwiY2hpbGRyZW4iLCJDb250cm9sIiwiYXR0cnMiLCJBcHBJY29uIiwibmFtZSIsIl9pdGVtIiwiaG9tZSIsImNsYXNzcm9vbXMiLCJBY2NvcmRpb24iLCJjb21tdW5pdHkiLCJtb2R1bGVzIiwiUm9vdCIsInR5cGUiLCJjb2xsYXBzaWJsZSIsIkl0ZW0iLCJUcmlnZ2VyIiwia25vd2xlZGdlQm94ZXMiLCJDb250ZW50Iiwic2VjdGlvbnMiLCJhcnRpY2xlcyIsIm9yZ2FuaXphdGlvbnMiLCJhcmNoaXZlIiwidXNlU2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJfY2xvc2FibGUiLCJfbm90aWZpY2F0aW9uIiwiX3ByZWxvYWQiLCJfbWVudSIsIl91c2VyTWVudSIsImRldGFpbCIsInN0b3JlIiwidW5kZWZpbmVkIiwic2V0T3Blbk1lbnUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJnb0hvbWUiLCJwdXNoU3RhdGUiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJBUFBfTE9HTyIsImFsdCIsIlVzZXJNZW51IiwiX2Ryb3Bkb3duIiwiX3Byb2ZpbGUiLCJsb2dvdXQiLCJEcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiUHJvZmlsZUljb24iLCJEcm9wZG93bk1lbnUiLCJwaG90b1VSTCIsImRpc3BsYXlOYW1lIiwiZW1haWwiLCJVc2VyTWVudUl0ZW0iLCJ1c2VyTWVudSIsInByZWZlcmVuY2VzIiwiRHJvcGRvd25JdGVtIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwidXNlclByb3BzIiwic2V0UHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwidXNlQmluZGVyIiwib25FcnJvciIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJ1c2VFZmZlY3QiLCJVc2VySXRlbSJdLCJzb3VyY2VzIjpbIi8vdHMvY29tcG9uZW50cy9jbG9zYWJsZS50c3giLCIvL3RzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLnRzeCIsIi8vdHMvY29tcG9uZW50cy9wcmVsb2FkLnRzeCIsIi8vdHMvY29udGV4dC50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy9pbmRleC50c3giLCIvL3RzL21lbnUvY29udGV4dC50c3giLCIvL3RzL21lbnUvaW5kZXgudHN4IiwiLy90cy9tZW51L2l0ZW0udHN4IiwiLy90cy9tZW51L3N0dWRlbnQudHN4IiwiLy90cy9tZW51L3RlYWNoZXIudHN4IiwiLy90cy9tZW51L3VzZS1zZXNzaW9uLnRzeCIsIi8vdHMvbmF2YmFycy9kZWZhdWx0LnRzeCIsIi8vdHMvdXNlci1tZW51L2luZGV4LnRzeCIsIi8vdHMvdXNlci1tZW51L2l0ZW0udHN4IiwiLy90cy91c2VyLW1lbnUvcHJvZmlsZS50c3giLCIvL3RzL3VzZXItbWVudS90aGVtZS1idXR0b24udHN4IiwiLy90cy91c2VyLW1lbnUvdXNlci1pdGVtLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7O1VBZ0JNLFNBQVVHLFlBQVlBLENBQUM7WUFBRUMsTUFBTTtZQUFFQyxLQUFLO1lBQUVDLFFBQVE7WUFBRUM7VUFBSyxDQUFFO1lBQzlELElBQUksQ0FBQ0YsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUV2QixNQUFNRyxPQUFPLEdBQUdDLEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsSUFBS0osUUFBUSxJQUFJRixNQUFNLENBQUNHLEtBQUssSUFBS1IsUUFBQSxDQUFBWSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9FO2dCQUNBLElBQUksT0FBT1QsUUFBUSxLQUFLLFVBQVUsRUFBRSxPQUFPQSxRQUFRLEVBQUU7Z0JBQ3JEUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ0ssWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUVWLFFBQVEsQ0FBQzs7Y0FHekMsT0FBT1AsUUFBQSxDQUFBWSxP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