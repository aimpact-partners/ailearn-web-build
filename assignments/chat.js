System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/list", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
  _export({
    Chat: void 0,
    ActivityHeader: void 0,
    MarkdownContent: void 0,
    ActivityContent: void 0,
    DesktopChat: void 0,
    FullChatContainer: void 0,
    MainContentLayoutContainer: void 0,
    SplitChatContainer: void 0,
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
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_11 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_12 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['pragmate-ui/list', dependency_13], ['@aimpact/ailearn-app/components/hooks', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/chat');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 1469876659,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _empty = require("../components/empty");
          var _skeleton = require("./skeleton");
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
              skeleton: _skeleton.ChatSkeleton,
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

      /**********************************
      INTERNAL MODULE: ./chat/chat/mobile
      **********************************/

      ims.set('./chat/chat/mobile', {
        hash: 2152939780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileChat = MobileChat;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("../components/empty");
          var _context = require("../../context");
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

      /************************************
      INTERNAL MODULE: ./chat/chat/skeleton
      ************************************/

      ims.set('./chat/chat/skeleton', {
        hash: 3917185198,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatSkeleton = ChatSkeleton;
          var _react = require("react");
          var _entranceDiv = require("../components/entrance-div");
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

      /***************************************
      INTERNAL MODULE: ./chat/components/empty
      ***************************************/

      ims.set('./chat/components/empty', {
        hash: 26105930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../context");
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

      /**********************************************
      INTERNAL MODULE: ./chat/components/entrance-div
      **********************************************/

      ims.set('./chat/components/entrance-div', {
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

      /****************************************
      INTERNAL MODULE: ./chat/components/header
      ****************************************/

      ims.set('./chat/components/header', {
        hash: 2156893364,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../context");
          var _entranceDiv = require("../components/entrance-div");
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
              src: store.model.picture,
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

      /**************************************************
      INTERNAL MODULE: ./chat/components/markdown-content
      **************************************************/

      ims.set('./chat/components/markdown-content', {
        hash: 2538005877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MarkdownContent = MarkdownContent;
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
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

      /************************************
      INTERNAL MODULE: ./chat/content/index
      ************************************/

      ims.set('./chat/content/index', {
        hash: 3539493030,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _tabs = require("pragmate-ui/tabs");
          var _react = require("react");
          var _context = require("../../context");
          var _markdownContent = require("../components/markdown-content");
          var _objectives = require("../objectives");
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
            const [control, setControl] = _react.default.useState(content ? 'article' : 'objectives');
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const tabs = [];
            const onClickTab = event => {
              setControl(event.currentTarget.dataset.tab);
            };
            const Tab = ({
              name
            }) => {
              const cls = `tab ${control === name ? 'active' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                onClick: onClickTab,
                "data-tab": name
              }, texts[name]);
            };
            store.tabs.forEach(tab => {
              if (tab === 'objectives') return;
              if (tab === 'article' && content) {
                tabs.push(_react.default.createElement(Tab, {
                  name: "article",
                  key: "content-tab"
                }));
                return;
              }
              if (!store.model.getMaterials()[tab]) return;
              if (store.data) {
                tabs.push(_react.default.createElement(Tab, {
                  name: tab,
                  key: tab
                }));
              }
            });
            tabs.push(_react.default.createElement(Tab, {
              name: "objectives",
              key: "objectives"
            }));
            const expand = event => {
              event.preventDefault();
              const parent = event.currentTarget.closest('.content__container');
              parent.classList.add('expanding');
              parent.classList.toggle('expanded');
              globalThis.setTimeout(() => {
                parent.classList.remove('expanding');
              }, 200);
            };
            const Controls = {
              article: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "content",
                content: content
              }),
              objectives: _react.default.createElement(_objectives.ActivityObjectives, {
                store: store
              }),
              synthesis: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "synthesis",
                content: synthesis,
                className: "content__synthesis"
              })
            };
            const output = Controls[control];
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
              src: store.model.picture,
              type: store.data.type,
              entity: "activity"
            }), !!totalAudios && _react.default.createElement("div", {
              className: "audios__container"
            }, _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            })), !fullContainer && _react.default.createElement(_icons.AppIconButton, {
              icon: "expand",
              className: "expand-icon circle",
              onClick: expand
            }), _react.default.createElement("div", null, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement("div", {
              className: "panes__container"
            }, output)));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/desktop
      ******************************/

      ims.set('./chat/desktop', {
        hash: 1195543414,
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
            // const settings = { layout: 'main-content-layout' };
            const fullContainer = ['full-content-layout', 'full-chat-layout'].includes(settings.layout);
            if (settings.layout === 'main-content-layout') {
              return _react.default.createElement(_mainContentLayout.MainContentLayoutContainer, {
                settings: settings
              });
            }
            return _react.default.createElement(_react.default.Fragment, null, fullContainer ? _react.default.createElement(_fullContainer.FullChatContainer, {
              settings: settings
            }) : _react.default.createElement(_splitContainer.SplitChatContainer, {
              settings: settings
            }));
          }
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

      /*********************************************
      INTERNAL MODULE: ./chat/layouts/full-container
      *********************************************/

      ims.set('./chat/layouts/full-container', {
        hash: 2038093738,
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
          var _header = require("../components/header");
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
        hash: 2248882656,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../../context");
          var _chat = require("../chat");
          var _entranceDiv = require("../components/entrance-div");
          var _content = require("../content");
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
            const cls = `content-activity__main-content-layout ${settings.layout}`;
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
              src: store.model.picture,
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
        hash: 563762747,
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
          var _chat = require("../chat");
          var _header = require("../components/header");
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
            const fullContainer = false;
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

      /*****************************
      INTERNAL MODULE: ./chat/mobile
      *****************************/

      ims.set('./chat/mobile', {
        hash: 4003761478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileContent = MobileContent;
          var _react = require("react");
          var _tabs = require("pragmate-ui/tabs");
          var _mobile = require("./chat/mobile");
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
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_mobile.MobileChat, null), _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null))), _react.default.createElement(_tabs.Tabs, {
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
        "im": "./chat/chat/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chat/components/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./chat/components/markdown-content",
        "from": "MarkdownContent",
        "name": "MarkdownContent"
      }, {
        "im": "./chat/content/index",
        "from": "ActivityContent",
        "name": "ActivityContent"
      }, {
        "im": "./chat/desktop",
        "from": "DesktopChat",
        "name": "DesktopChat"
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
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/chat/index').Chat : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./chat/components/header').ActivityHeader : value);
        (require || prop === 'MarkdownContent') && _export("MarkdownContent", MarkdownContent = require ? require('./chat/components/markdown-content').MarkdownContent : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content/index').ActivityContent : value);
        (require || prop === 'DesktopChat') && _export("DesktopChat", DesktopChat = require ? require('./chat/desktop').DesktopChat : value);
        (require || prop === 'FullChatContainer') && _export("FullChatContainer", FullChatContainer = require ? require('./chat/layouts/full-container').FullChatContainer : value);
        (require || prop === 'MainContentLayoutContainer') && _export("MainContentLayoutContainer", MainContentLayoutContainer = require ? require('./chat/layouts/main-content-layout').MainContentLayoutContainer : value);
        (require || prop === 'SplitChatContainer') && _export("SplitChatContainer", SplitChatContainer = require ? require('./chat/layouts/split-container').SplitChatContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4cG9ydHMiLCJfaWNvbnMiLCJmdWxsQ29udGFpbmVyIiwidHJhY2tpbmciLCJjbHMiLCJDb250YWluZXIiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImRhdGEiLCJlbnRpdHkiLCJBcHBJY29uIiwibW9kdWxlIiwiX21hcmtkb3duIiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZ2xvYmFsVGV4dHMiLCJhY3Rpdml0aWVzIiwiTWFya2Rvd24iLCJfd3JhcHBlciIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5IiwiZXhwYW5kIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJDb250cm9scyIsIm9iamVjdGl2ZXMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJvdXRwdXQiLCJBY3Rpdml0eUF1ZGlvIiwiQXBwSWNvbkJ1dHRvbiIsIlRhYnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsIkRlc2t0b3BDaGF0Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJpbmNsdWRlcyIsIk1haW5Db250ZW50TGF5b3V0Q29udGFpbmVyIiwiRnVsbENoYXRDb250YWluZXIiLCJTcGxpdENoYXRDb250YWluZXIiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJfbW9iaWxlIiwiTW9iaWxlQ29udGVudCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIl9saXN0IiwiX2l0ZW0iLCJMaXN0IiwiaXRlbXMiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJDaGF0VmlldyIsInVyaSIsInJlYWR5Iiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInZhcnMiLCJnZXQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBWixNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUUvRCxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsVUFBVSxFQUFFO2NBQ3RCTixTQUFTLENBQUNPLE9BQU8sR0FBRyxNQUFLO2dCQUN4QlYsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2NBQ3hCLENBQUM7Y0FDREcsU0FBUyxDQUFDUSxRQUFRLEdBQUcsSUFBSTs7WUFHMUIsT0FDQ3BC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