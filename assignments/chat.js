System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.16/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.16/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.16/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_2 = _aimpactChatSdk141ChatComponentCode;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_3 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp0316ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0316ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_10 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp0316ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp0316ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/chat-sdk/chat-component.code', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['pragmate-ui/empty', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/base', dependency_7], ['@aimpact/ailearn-app/components/icons', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['@aimpact/chat-sdk/wrapper', dependency_10], ['pragmate-ui/tabs', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12], ['pragmate-ui/list', dependency_13]]);
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
        hash: 4137659607,
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
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
            const cls = `activity-header activity-header--${type}`;
            const Container = fullContainer ? 'div' : _react.default.Fragment;
            const props = {};
            if (fullContainer) props.className = 'activity-header__container';
            return _react.default.createElement(Container, {
              ...props
            }, fullContainer && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.EntityImage, {
              initial: !hasAnimated ? {
                opacity: 0,
                y: 20,
                scale: 0.95
              } : false,
              animate: {
                opacity: 1,
                y: 0,
                scale: 1
              },
              transition: !hasAnimated ? {
                duration: 0.3,
                ease: 'easeInOut'
              } : undefined,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwiaWQiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4cG9ydHMiLCJfaWNvbnMiLCJmdWxsQ29udGFpbmVyIiwiaGFzQW5pbWF0ZWQiLCJzZXRIYXNBbmltYXRlZCIsInVzZUVmZmVjdCIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl93cmFwcGVyIiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwiZm9yRWFjaCIsInB1c2giLCJrZXkiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwib2JqZWN0aXZlcyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNldFVwZGF0ZWQiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsInNldHRpbmdzIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsInRhc2siLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi90cy9jaGF0L2NvbnRyb2wudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBWixNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUUvRCxJQUFJ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