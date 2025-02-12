System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Chat, ActivityContent, DesktopChat, ActivityHeader, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, MarkdownContent, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
  _export({
    Chat: void 0,
    ActivityContent: void 0,
    DesktopChat: void 0,
    ActivityHeader: void 0,
    FullChatContainer: void 0,
    MainContentLayoutContainer: void 0,
    SplitChatContainer: void 0,
    MarkdownContent: void 0,
    ChatView: void 0,
    IModuleContext: void 0,
    ModuleContext: void 0,
    useModuleContext: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_3 = _aimpactChatSdk141ChatComponentCode;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_5 = _aimpactAilearnApp031ComponentsUi;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_6 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_7 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7List) {
      dependency_8 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_9 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_11 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_13 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_14 = _aimpactAilearnApp031ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/chat-sdk/widgets/markdown', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/tabs', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/empty', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/base', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/chat');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./chat/chat-skeleton
      ************************************/
      ims.set('./chat/chat-skeleton', {
        hash: 875827106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _entranceDiv = require("./entrance-div");
          function ChatSkeleton() {
            return _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: "chat-container"
            }, _react.default.createElement("form", {
              className: "chat-input-form "
            }, _react.default.createElement("div", {
              className: "chat-input-container  "
            }, _react.default.createElement("div", null), _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("textarea", {
              className: "input__textarea"
            })), _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement("button", {
              className: "pui-button btn-default has-icon btn--md ripple",
              type: "button"
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/chat
      ***************************/

      ims.set('./chat/chat', {
        hash: 1818862058,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _empty = require("./empty");
          var _chatSkeleton = require("./chat-skeleton");
          /*bundle*/
          function Chat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              skeleton: _chatSkeleton.ChatSkeleton,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat-container"
            }, _react.default.createElement(_chatComponent.AgentsChatPanel, null), _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/content
      ******************************/

      ims.set('./chat/content', {
        hash: 2633806339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _tabs = require("pragmate-ui/tabs");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../context");
          var _objectives = require("./objectives");
          var _markdownContent = require("./markdown-content");
          var _entranceDiv = require("./entrance-div");
          /*bundle*/
          function ActivityContent({
            fullContainer
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              article,
              dyslexia,
              audios,
              synthesis
            } = store.model.getMaterials();
            const [mode] = _react.default.useState(_wrapper.AppWrapper.accessibility ?? 'normal');
            let content = mode === 'normal' ? article : dyslexia ?? dyslexia;
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const tabs = [];
            store.tabs.forEach(tab => {
              if (store.data) {
                tabs.push(_react.default.createElement(_tabs.Tab, {
                  key: tab
                }, texts[tab]));
              }
            });
            const expand = event => {
              event.preventDefault();
              const parent = event.currentTarget.closest('.content__container');
              parent.classList.add('expanding');
              parent.classList.toggle('expanded');
              globalThis.setTimeout(() => {
                parent.classList.remove('expanding');
              }, 200);
            };
            return _react.default.createElement(_react.default.Fragment, null, !fullContainer && _react.default.createElement(_ui.EntityImage, {
              initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeInOut'
              },
              className: "entity-image-cover",
              src: store.data.picture,
              type: store.data.type,
              entity: "activity"
            }), !!totalAudios && _react.default.createElement("div", {
              className: "audios__container"
            }, _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            })), _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: "main__content"
            }, !fullContainer && _react.default.createElement(_icons.AppIconButton, {
              icon: "expand",
              className: "expand-icon circle",
              onClick: expand
            }), _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, _react.default.createElement(_objectives.ActivityObjectives, {
              store: store
            }), _react.default.createElement(_markdownContent.MarkdownContent, {
              name: "content",
              content: content
            }), _react.default.createElement(_markdownContent.MarkdownContent, {
              name: "synthesis",
              content: synthesis,
              className: "content__synthesis"
            })))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/desktop
      ******************************/

      ims.set('./chat/desktop', {
        hash: 2507850383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopChat = DesktopChat;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _fullContainer = require("./layouts/full-container");
          var _splitContainer = require("./layouts/split-container");
          var _mainContentLayout = require("./layouts/main-content-layout");
          /*bundle*/
          function DesktopChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const settings = store.model.settings ? store.model.settings : {
              layout: 'main-chat-layout'
            };
            const fullContainer = ['full-content-layout', 'full-chat-layout'].includes(settings.layout);
            if (settings.layout === 'main-content-layout') return _react.default.createElement(_mainContentLayout.MainContentLayoutContainer, {
              settings: settings
            });
            return _react.default.createElement(_react.default.Fragment, null, fullContainer ? _react.default.createElement(_fullContainer.FullChatContainer, {
              settings: settings
            }) : _react.default.createElement(_splitContainer.SplitChatContainer, {
              settings: settings
            }));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./chat/empty
      ****************************/

      ims.set('./chat/empty', {
        hash: 1392719813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useModuleContext)();
            if (!store?.model) return null;
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            const {
              title,
              description
            } = store.hasCredits ? texts.credits : texts.noCredits;
            return _react.default.createElement("div", {
              className: " empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info",
              className: ""
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./chat/entrance-div
      ***********************************/

      ims.set('./chat/entrance-div', {
        hash: 2973447847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntranceDiv = void 0;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          const EntranceDiv = ({
            onClick,
            className,
            children,
            as
          }) => {
            const attrs = className ? {
              className
            } : {};
            const Control = (0, _framerMotion.motion)(as || 'div');
            return _react.default.createElement(Control, {
              onClick: onClick,
              initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeInOut'
              },
              ...attrs
            }, children);
          };
          exports.EntranceDiv = EntranceDiv;
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/global
      *****************************/

      ims.set('./chat/global', {
        hash: 3938685076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/header
      *****************************/

      ims.set('./chat/header', {
        hash: 3612863275,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _entranceDiv = require("./entrance-div");
          /*bundle*/
          function ActivityHeader({
            children,
            fullContainer
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              model: {
                type,
                title,
                tracking
              }
            } = store;
            const cls = `activity-header activity-header--${type}`;
            const Container = fullContainer ? 'div' : _react.default.Fragment;
            const props = {};
            if (fullContainer) props.className = 'activity-header__container';
            return _react.default.createElement(Container, {
              ...props
            }, fullContainer && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeInOut'
              },
              className: "entity-image-full-cover",
              src: store.data.picture,
              type: store.data.type,
              entity: "activity"
            })), _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: cls,
              as: "header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: type
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), _react.default.createElement("span", {
              className: "header__title"
            }, tracking.module.title)), children));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./chat/layouts/full-container
      *********************************************/

      ims.set('./chat/layouts/full-container', {
        hash: 984369147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FullChatContainer = FullChatContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _header = require("../header");
          var _chat = require("../chat");
          var _content = require("../content");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function FullChatContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal,
              globalTexts
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const toggleFloating = event => {
              const parent = event.currentTarget.closest('.floating-container');
              parent.classList.toggle('opened');
            };
            const cls = `content-activity--desktop-container ${settings.layout}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_header.ActivityHeader, {
              fullContainer: true
            }), _react.default.createElement(_content.ActivityContent, {
              fullContainer: true
            }), _react.default.createElement("div", {
              className: "floating-container"
            }, _react.default.createElement("div", {
              className: "floating-chat-container"
            }, _react.default.createElement(_icons.AppIconButton, {
              icon: "close",
              className: "circle close-icon",
              onClick: toggleFloating
            }), _react.default.createElement(_chat.Chat, null)), _react.default.createElement("div", {
              className: "floating-toggle-button",
              onClick: toggleFloating
            }, globalTexts.actions.talktoAI, _react.default.createElement(_icons.AppIcon, {
              icon: "chat"
            }))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./chat/layouts/main-content-layout
      **************************************************/

      ims.set('./chat/layouts/main-content-layout', {
        hash: 2192518682,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _chat = require("../chat");
          var _content = require("../content");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _entranceDiv = require("../entrance-div");
          /*bundle*/
          function MainContentLayoutContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal,
              globalTexts
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const {
              model: {
                type,
                title,
                tracking
              }
            } = store;
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const toggleFloating = event => {
              const parent = event.currentTarget.closest('.floating-container');
              parent.classList.toggle('opened');
            };
            const cls = `content-activity--desktop-container ${settings.layout}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement("div", {
              className: "activity-header__container"
            }, _react.default.createElement(_ui.EntityImage, {
              initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: {
                duration: 0.3,
                ease: 'easeInOut'
              },
              className: "entity-image-full-cover",
              src: store.data.picture,
              type: store.data.type,
              entity: "activity"
            }), _react.default.createElement(_entranceDiv.EntranceDiv, {
              className: `activity-header activity-header--${type}`,
              as: "header"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: type
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), _react.default.createElement("span", {
              className: "header__title"
            }, tracking.module.title)))), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-p"
            }, _react.default.createElement(_content.ActivityContent, {
              fullContainer: true
            })), _react.default.createElement("div", {
              className: "scrolleable-child chat__container no-p"
            }, _react.default.createElement(_chat.Chat, null)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./chat/layouts/split-container
      **********************************************/

      ims.set('./chat/layouts/split-container', {
        hash: 1848954762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SplitChatContainer = SplitChatContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _header = require("../header");
          var _chat = require("../chat");
          var _content = require("../content");
          /*bundle*/
          function SplitChatContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            const [, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([store.model], () => setUpdate({}), 'credits.change');
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            const fullContainer = settings.layout === 'main-content-layout' ? true : false;
            const cls = `content-activity--desktop-container ${settings.layout}`;
            return _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_header.ActivityHeader, {
              fullContainer: fullContainer
            }), _react.default.createElement("div", {
              className: "scrolleable-child content__container no-pl"
            }, _react.default.createElement(_content.ActivityContent, {
              fullContainer: fullContainer
            })), _react.default.createElement("div", {
              className: "scrolleable-child chat__container no-p"
            }, _react.default.createElement(_chat.Chat, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./chat/markdown-content
      ***************************************/

      ims.set('./chat/markdown-content', {
        hash: 2176824902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkdownContent = MarkdownContent;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          /*bundle*/
          function MarkdownContent({
            name,
            content,
            className
          }) {
            const attrs = className ? {
              className
            } : {};
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!content) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: store.globalTexts.activities.empty[name]
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_markdown.Markdown, {
              content: content,
              ...attrs
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./chat/mobile-chat
      **********************************/

      ims.set('./chat/mobile-chat', {
        hash: 2652028459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileChat = MobileChat;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./empty");
          var _context = require("../context");
          function MobileChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatId = store.chatId;
            const chatSpecs = {};
            if (!store.hasCredits) {
              chatSpecs.onClick = () => {
                setShowCoinsModal(true);
              };
              chatSpecs.disabled = true;
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_chatComponent.AgentsChatContainer, {
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, _react.default.createElement("div", {
              className: "chat__container"
            }, _react.default.createElement(_ui.ActivityHeader, {
              title: store.model.title,
              icon: store.model.type,
              type: store.model.type
            }), _react.default.createElement(_chatComponent.AgentsChatPanel, null)), _react.default.createElement("div", {
              className: "center-container chat-input__layout-container"
            }, _react.default.createElement(_chatComponent.AgentsChatInput, {
              ...chatSpecs
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./chat/mobile
      *****************************/

      ims.set('./chat/mobile', {
        hash: 3896594148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileContent = MobileContent;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _mobileChat = require("./mobile-chat");
          var _context = require("../context");
          var _content = require("./content");
          function MobileContent() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("main", {
              className: "mobile-view"
            }, _react.default.createElement(_tabs.TabsContainer, {
              className: "mobile-tabs__menu",
              active: 0
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobileChat.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, {
              className: "mobile-tabs__menu-items"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.chat), _react.default.createElement(_tabs.Tab, null, texts.tabs.content))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./chat/objectives/index
      ***************************************/

      ims.set('./chat/objectives/index', {
        hash: 3429306551,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectives = ActivityObjectives;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          function ActivityObjectives({
            store
          }) {
            const {
              data,
              texts
            } = store;
            return _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.description), _react.default.createElement("p", null, store.data.description), _react.default.createElement("h5", {
              className: "mb-15"
            }, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: store.data?.objectives,
              control: _item.ActivityObjective
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./chat/objectives/item
      **************************************/

      ims.set('./chat/objectives/item', {
        hash: 2457280014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjective = ActivityObjective;
          var _react = require("react");
          function ActivityObjective({
            item
          }) {
            return _react.default.createElement("div", {
              className: "aside__item-list"
            }, _react.default.createElement("h6", null, item.name), _react.default.createElement("span", null, item.objective));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./chat/view
      ***************************/

      ims.set('./chat/view', {
        hash: 2593237564,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatView = ChatView;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _desktop = require("./desktop");
          var _context = require("../context");
          var _mobile = require("./mobile");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatView({
            store,
            uri
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              chatId,
              assignmentId,
              globalTexts: store.globalTexts,
              items,
              setShowCoinsModal // only the setter we don't need to update the context when it is opened or closed.
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, ['lg', 'md'].includes(screenSize) ? _react.default.createElement(_desktop.DesktopChat, null) : _react.default.createElement(_mobile.MobileContent, null)), showCoinsModal && _react.default.createElement(_ui.CoinsModal, {
              show: showCoinsModal,
              onClose: closeModal,
              globalTexts: store.globalTexts,
              type: "interactive",
              onConsume: store.model.consumeCoins
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 460512966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          /*bundle*/
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          /*bundle*/
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chat/chat",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/content",
        "from": "ActivityContent",
        "name": "ActivityContent"
      }, {
        "im": "./chat/desktop",
        "from": "DesktopChat",
        "name": "DesktopChat"
      }, {
        "im": "./chat/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./chat/layouts/full-container",
        "from": "FullChatContainer",
        "name": "FullChatContainer"
      }, {
        "im": "./chat/layouts/main-content-layout",
        "from": "MainContentLayoutContainer",
        "name": "MainContentLayoutContainer"
      }, {
        "im": "./chat/layouts/split-container",
        "from": "SplitChatContainer",
        "name": "SplitChatContainer"
      }, {
        "im": "./chat/markdown-content",
        "from": "MarkdownContent",
        "name": "MarkdownContent"
      }, {
        "im": "./chat/view",
        "from": "ChatView",
        "name": "ChatView"
      }, {
        "im": "./context",
        "from": "IModuleContext",
        "name": "IModuleContext"
      }, {
        "im": "./context",
        "from": "ModuleContext",
        "name": "ModuleContext"
      }, {
        "im": "./context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/chat').Chat : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content').ActivityContent : value);
        (require || prop === 'DesktopChat') && _export("DesktopChat", DesktopChat = require ? require('./chat/desktop').DesktopChat : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./chat/header').ActivityHeader : value);
        (require || prop === 'FullChatContainer') && _export("FullChatContainer", FullChatContainer = require ? require('./chat/layouts/full-container').FullChatContainer : value);
        (require || prop === 'MainContentLayoutContainer') && _export("MainContentLayoutContainer", MainContentLayoutContainer = require ? require('./chat/layouts/main-content-layout').MainContentLayoutContainer : value);
        (require || prop === 'SplitChatContainer') && _export("SplitChatContainer", SplitChatContainer = require ? require('./chat/layouts/split-container').SplitChatContainer : value);
        (require || prop === 'MarkdownContent') && _export("MarkdownContent", MarkdownContent = require ? require('./chat/markdown-content').MarkdownContent : value);
        (require || prop === 'ChatView') && _export("ChatView", ChatView = require ? require('./chat/view').ChatView : value);
        (require || prop === 'IModuleContext') && _export("IModuleContext", IModuleContext = require ? require('./context').IModuleContext : value);
        (require || prop === 'ModuleContext') && _export("ModuleContext", ModuleContext = require ? require('./context').ModuleContext : value);
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VudHJhbmNlRGl2IiwiQ2hhdFNrZWxldG9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJFbnRyYW5jZURpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJfY2hhdENvbXBvbmVudCIsIl9ob29rcyIsIl9jb250ZXh0IiwiX2VtcHR5IiwiX2NoYXRTa2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImlkIiwic2tlbGV0b24iLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJfd3JhcHBlciIsIl90YWJzIiwiX2ljb25zIiwiX29iamVjdGl2ZXMiLCJfbWFya2Rvd25Db250ZW50IiwiQWN0aXZpdHlDb250ZW50IiwiZnVsbENvbnRhaW5lciIsInRleHRzIiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udGVudCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsImZvckVhY2giLCJ0YWIiLCJkYXRhIiwicHVzaCIsIlRhYiIsImtleSIsImV4cGFuZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiRnJhZ21lbnQiLCJFbnRpdHlJbWFnZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiQWN0aXZpdHlPYmplY3RpdmVzIiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsIl9mdWxsQ29udGFpbmVyIiwiX3NwbGl0Q29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0IiwiRGVza3RvcENoYXQiLCJzZXR0aW5ncyIsImxheW91dCIsImluY2x1ZGVzIiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImNoYXQiLCJ1cGRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkVtcHR5IiwiX2ZyYW1lck1vdGlvbiIsImNoaWxkcmVuIiwiYXMiLCJhdHRycyIsIkNvbnRyb2wiLCJtb3Rpb24iLCJleHBvcnRzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIkFjdGl2aXR5SGVhZGVyIiwidHJhY2tpbmciLCJjbHMiLCJDb250YWluZXIiLCJwcm9wcyIsIkFwcEljb24iLCJtb2R1bGUiLCJfaGVhZGVyIiwiX2NoYXQiLCJfY29udGVudCIsImdsb2JhbFRleHRzIiwidG9nZ2xlRmxvYXRpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiX21hcmtkb3duIiwiRW1wdHlDYXJkIiwidGV4dCIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIk1vYmlsZUNoYXQiLCJfbW9iaWxlQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJfbGlzdCIsIl9pdGVtIiwib2JqZWN0aXZlcyIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQ2hhdFZpZXciLCJ1cmkiLCJyZWFkeSIsInNldFJlYWR5Iiwic2hvd0NvaW5zTW9kYWwiLCJhc3NpZ25tZW50SWQiLCJ2YXJzIiwiZ2V0Iiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJNb2R1bGVDb250ZXh0IiwiUHJvdmlkZXIiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQtc2tlbGV0b24udHN4IiwiL3RzL2NoYXQvY2hhdC50c3giLCIvdHMvY2hhdC9jb250ZW50LnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL2NoYXQvZW1wdHkudHN4IiwiL3RzL2NoYXQvZW50cmFuY2UtZGl2LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21hcmtkb3duLWNvbnRlbnQudHN4IiwiL3RzL2NoYXQvbW9iaWxlLWNoYXQudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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