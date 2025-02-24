System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.8/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.8/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.8/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
  _export({
    Chat: void 0,
    ActivityHeader: void 0,
    MarkdownContent: void 0,
    ActivityContent: void 0,
    ChatControl: void 0,
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
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_4 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp038ComponentsUi) {
      dependency_5 = _aimpactAilearnApp038ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_6 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp038ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp038ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_11 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_12 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp038ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp038ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.8"], ["@aimpact/ailearn-app", "0.3.8"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.8/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/list', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.8/assignments/chat');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 3543688777,
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
              realtime: store.tracking.realtime,
              language: store.model.language,
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
        hash: 3947823223,
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
              realtime: store.tracking.realtime,
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
      INTERNAL MODULE: ./chat/control
      ******************************/

      ims.set('./chat/control', {
        hash: 531748313,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _desktop = require("./desktop");
          var _context = require("../context");
          var _mobile = require("./mobile");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatControl({
            store,
            chatId,
            assignmentId
          }) {
            const [update, setUpdated] = (0, _react.useState)({});
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks2.useBinder)([store], () => setUpdated({}));
            if (store.ready && !store.found) return _react.default.createElement("app-missing-control", null);
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
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
        hash: 1173755600,
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
            const cls = `content-activity--desktop-container ${settings.layout}${store.testing ? ' content-testing' : ''}`;
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
        hash: 1906312211,
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
            const cls = `content-activity__main-content-layout ${settings.layout}${store.testing ? ' content-testing' : ''}`;
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
        hash: 110625299,
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
            const cls = `content-activity--desktop-container ${settings.layout}${store.testing ? ' content-testing' : ''}`;
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
        hash: 1145776710,
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
            return _react.default.createElement("div", null, _react.default.createElement("h4", null, texts.description), _react.default.createElement("p", null, store.data.description), store.data.task ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.task), _react.default.createElement("p", null, store.data.task)) : null, _react.default.createElement("h4", {
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
        hash: 516305712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatView = ChatView;
          var _react = require("react");
          var _control = require("./control");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatView({
            store,
            uri
          }) {
            const assignmentId = uri.vars.get('assignmentId');
            const chatId = uri.vars.get('chatId');
            return _react.default.createElement(_control.ChatControl, {
              store: store,
              chatId: chatId,
              assignmentId: assignmentId
            });
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
        "im": "./chat/control",
        "from": "ChatControl",
        "name": "ChatControl"
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
        (require || prop === 'ChatControl') && _export("ChatControl", ChatControl = require ? require('./chat/control').ChatControl : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwiaWQiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4cG9ydHMiLCJfaWNvbnMiLCJmdWxsQ29udGFpbmVyIiwiY2xzIiwiQ29udGFpbmVyIiwicHJvcHMiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJkYXRhIiwiZW50aXR5IiwiQXBwSWNvbiIsIm1vZHVsZSIsIl9tYXJrZG93biIsIk1hcmtkb3duQ29udGVudCIsIm5hbWUiLCJjb250ZW50IiwiRW1wdHlDYXJkIiwidGV4dCIsImdsb2JhbFRleHRzIiwiYWN0aXZpdGllcyIsIk1hcmtkb3duIiwiX3dyYXBwZXIiLCJfdGFicyIsIl9tYXJrZG93bkNvbnRlbnQiLCJfb2JqZWN0aXZlcyIsIkFjdGl2aXR5Q29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsImdldE1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRyb2wiLCJzZXRDb250cm9sIiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwibGVuZ3RoIiwiYXVkaW9TcmMiLCJ1cmwiLCJ0YWJzIiwib25DbGlja1RhYiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWIiLCJUYWIiLCJmb3JFYWNoIiwicHVzaCIsImtleSIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJvYmplY3RpdmVzIiwiQWN0aXZpdHlPYmplY3RpdmVzIiwib3V0cHV0IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJUYWJzIiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwic2V0VXBkYXRlZCIsIml0ZW1zIiwic2hvd0NvaW5zTW9kYWwiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiTW9kdWxlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIkRlc2t0b3BDaGF0IiwiTW9iaWxlQ29udGVudCIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIl9mdWxsQ29udGFpbmVyIiwiX3NwbGl0Q29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfaGVhZGVyIiwiX2NoYXQiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJfbGlzdCIsIl9pdGVtIiwidGFzayIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfY29udHJvbCIsIkNoYXRWaWV3IiwidXJpIiwidmFycyIsImdldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY29udHJvbC50c3giLCIvdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLE1BQU0sR0FBR0MsU0FBUyxDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRXhDLElBQUFaLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEVBQUUsTUFBTUosU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBRS9ELElBQUksQ0FBQ0wsS0FBSyxDQUFDVSxVQUFVLEVBQUU7Y0FDdEJOLFNBQVMsQ0FBQ08sT0FBTyxH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