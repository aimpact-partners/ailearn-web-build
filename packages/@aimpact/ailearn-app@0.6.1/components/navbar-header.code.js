System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/icons", "react@18.3.1", "pragmate-ui@1.0.8/components", "dayjs@1.11.13", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/model/wrapper", "@beyond-js/react-18-widgets@1.1.8/hooks", "framer-motion@10.18.0", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/ailearn-app@0.6.1/components/icons", "@radix-ui/react-accordion@1.2.12", "pragmate-ui@1.0.8/dropdown", "@beyond-js/widgets@1.1.2/render"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, NavbarHeader, ProfileIcon, ThemeSwitcher, __beyond_pkg, hmr;
  _export({
    NavbarHeader: void 0,
    ProfileIcon: void 0,
    ThemeSwitcher: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_beyondJsKernel0114Routing) {
      dependency_2 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_5 = _pragmateUi108Components;
    }, function (_dayjs2) {
      dependency_6 = _dayjs2;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_7 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108Image) {
      dependency_8 = _pragmateUi108Image;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_9 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_10 = _aimpactAilearnApp061ModelWrapper;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_aimpactChatSdk155Session) {
      dependency_13 = _aimpactChatSdk155Session;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_radixUiReactAccordion) {
      dependency_15 = _radixUiReactAccordion;
    }, function (_pragmateUi108Dropdown) {
      dependency_16 = _pragmateUi108Dropdown;
    }, function (_beyondJsWidgets112Render) {
      dependency_17 = _beyondJsWidgets112Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/components/navbar-header",
          "multibundle": true
        },
        "type": "code"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@beyond-js/kernel/routing', dependency_2], ['pragmate-ui/icons', dependency_3], ['react', dependency_4], ['pragmate-ui/components', dependency_5], ['dayjs', dependency_6], ['@aimpact/ailearn-app/shared/hooks', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/ailearn-app/components/ui', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['framer-motion', dependency_12], ['@aimpact/chat-sdk/session', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['@radix-ui/react-accordion', dependency_15], ['pragmate-ui/dropdown', dependency_16], ['@beyond-js/widgets/render', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/components/navbar-header.code');
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
        hash: 546454448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavbarHeader = NavbarHeader;
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _closable = require("./components/closable");
          var _notification = require("./components/notification");
          var _preload = require("./components/preload");
          var _context = require("./context");
          var _menu = require("./menu");
          var _userMenu = require("./user-menu");
          /*bundle*/
          function NavbarHeader({
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
        hash: 2465851343,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideMenu = AsideMenu;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3879801810,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, texts.modules), _wrapper.Config.kb && _react.default.createElement("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcm91dGluZyIsInJlcXVpcmUiLCJfaWNvbnMiLCJfcmVhY3QiLCJDbG9zYWJsZUljb24iLCJicm9rZXIiLCJhcHBseSIsImJhY2tsaW5rIiwiZm9yY2UiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwiaGlzdG9yeSIsInJlY29yZHMiLCJlbnRyaWVzIiwibGVuZ3RoIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9kYXlqcyIsIl9ob29rcyIsImlzV2l0aGluU2V2ZW5EYXlzIiwiZGF0ZSIsImlucHV0RGF0ZSIsIm1heERhdGUiLCJhZGQiLCJpc0FmdGVyIiwiTm90aWZpY2F0aW9uQmFyIiwidGV4dHMiLCJpc1Zpc2libGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FuQmVTaG93ZWQiLCJtb3N0QmVTaG93ZWQiLCJzZXRNb3N0QmVTaG93ZWQiLCJ1c2VTdGF0ZSIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwib25DbG9zZSIsInNldEl0ZW0iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpbmsiLCJocmVmIiwidGFyZ2V0IiwibmV3VmVyc2lvbiIsInhzIiwiZmFsc2UiLCJkZXNrdG9wIiwidGl0bGUiLCJsYWJlbCIsImxpbmsiLCJfaW1hZ2UiLCJfdWkiLCJQcmVsb2FkIiwiQW5pbWF0ZWRDb250YWluZXIiLCJJbWFnZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl93cmFwcGVyIiwiX2JleW9uZF9jb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIl9jbG9zYWJsZSIsIl9ub3RpZmljYXRpb24iLCJfcHJlbG9hZCIsIl9jb250ZXh0IiwiX21lbnUiLCJfdXNlck1lbnUiLCJOYXZiYXJIZWFkZXIiLCJjaGlsZHJlbiIsImRldGFpbCIsImNsb3NhYmxlIiwic3RvcmUiLCJ1bmRlZmluZWQiLCJjbHMiLCJyZWYiLCJ1c2VSZWYiLCJtZW51T3BlbmVkIiwic2V0T3Blbk1lbnUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0b2dnbGVNZW51IiwiZ29Ib21lIiwicHVzaFN0YXRlIiwiUHJvdmlkZXIiLCJtb3Rpb24iLCJoZWFkZXIiLCJzcmMiLCJzZXR0aW5ncyIsIkFQUF9MT0dPIiwiYWx0IiwiQVBQX05BTUUiLCJVc2VyTWVudSIsIkFzaWRlTWVudSIsIk9mZkNhbnZhc01lbnVDb250ZXh0IiwidXNlT2ZmQ2FudmFzTWVudUNvbnRleHQiLCJfc2Vzc2lvbiIsIl9jb250ZXh0MiIsIl9zdHVkZW50IiwiX3RlYWNoZXIiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJpc1RlYWNoZXIiLCJ0ZWFjaGVyIiwicm9sZXMiLCJpbmNsdWRlcyIsInVzZVN0b3JlIiwiY2xzQ29udGFpbmVyIiwiTWVudSIsIlRlYWNoZXJNZW51IiwiU3R1ZGVudE1lbnUiLCJjbGlja09uQmFja2Ryb3AiLCJjdXJyZW50IiwiaXNTYW1lTm9kZSIsIkljb24iLCJtZW51Iiwic3VwcG9ydCIsIkFQUF9TVVBQT1JUX0VNQUlMIiwiTWVudUl0ZW0iLCJwcm9wcyIsIkNvbnRyb2wiLCJhdHRycyIsIkFwcEljb24iLCJuYW1lIiwiX2l0ZW0iLCJob21lIiwiY2xhc3Nyb29tcyIsIkFjY29yZGlvbiIsImNvbW11bml0eSIsIm1vZHVsZXMiLCJDb25maWciLCJrYiIsIlJvb3QiLCJ0eXBlIiwiY29sbGFwc2libGUiLCJJdGVtIiwiVHJpZ2dlciIsImtub3dsZWRnZUJveGVzIiwiQ29udGVudCIsInNlY3Rpb25zIiwiYXJ0aWNsZXMiLCJvcmdhbml6YXRpb25zIiwiYXJjaGl2ZSIsInVzZVNlc3Npb24iLCJfZHJvcGRvd24iLCJfcHJvZmlsZSIsImxvZ291dCIsIkRyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJQcm9maWxlSWNvbiIsIkRyb3Bkb3duTWVudSIsInBob3RvVVJMIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsIlVzZXJNZW51SXRlbSIsInVzZXJNZW51IiwicHJlZmVyZW5jZXMiLCJEcm9wZG93bkl0ZW0iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJzZXRQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJ1c2VCaW5kZXIiLCJvbkVycm9yIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoZXIiLCJ0aGVtZSIsImdsb2JhbFRoaXMiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsInVzZUVmZmVjdCIsIlVzZXJJdGVtIl0sInNvdXJjZXMiOlsiLy90cy9jb21wb25lbnRzL2Nsb3NhYmxlLnRzeCIsIi8vdHMvY29tcG9uZW50cy9ub3RpZmljYXRpb24udHN4IiwiLy90cy9jb21wb25lbnRzL3ByZWxvYWQudHN4IiwiLy90cy9jb250ZXh0LnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvbWVudS9jb250ZXh0LnRzeCIsIi8vdHMvbWVudS9pbmRleC50c3giLCIvL3RzL21lbnUvaXRlbS50c3giLCIvL3RzL21lbnUvc3R1ZGVudC50c3giLCIvL3RzL21lbnUvdGVhY2hlci50c3giLCIvL3RzL21lbnUvdXNlLXNlc3Npb24udHN4IiwiLy90cy91c2VyLW1lbnUvaW5kZXgudHN4IiwiLy90cy91c2VyLW1lbnUvaXRlbS50c3giLCIvL3RzL3VzZXItbWVudS9wcm9maWxlLnRzeCIsIi8vdHMvdXNlci1tZW51L3RoZW1lLWJ1dHRvbi50c3giLCIvL3RzL3VzZXItbWVudS91c2VyLWl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7VUFnQk0sU0FBVUcsWUFBWUEsQ0FBQztZQUFFQyxNQUFNO1lBQUVDLEtBQUs7WUFBRUMsUUFBUTtZQUFFQztVQUFLLENBQUU7WUFDOUQsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBRXZCLE1BQU1HLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixJQUFLSixRQUFRLElBQUlGLE1BQU0sQ0FBQ0csS0FBSyxJQUFLUixRQUFBLENBQUFZLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0U7Z0JBQ0EsSUFBSSxPQUFPVCxRQUFRLEtBQUssVUFBVSxFQUFFLE9BQU9BLFFBQVEsRUFBRTtnQkFDckRQLFFBQUEsQ0FBQVksT0FBTyxDQUFDSyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRVYsUUFBUSxDQUFDOztjQUd6QyxPQUFPUCxRQUFBLENBQUFZLE9BQU8sQ0FBQ00sSUFBSSxFQUFFO1lBQ3RCLENBQUM7WUFDRCxPQUFPZixNQUFB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