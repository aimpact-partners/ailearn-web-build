System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.17/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.17/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.17/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0317ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0317ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp0317ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0317ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_10 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp0317ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp0317ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.17"], ["@aimpact/ailearn-app", "0.3.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.17/assignments/chat"
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
        hash: 317583367,
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
              onListenChat: store.onListenChat,
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
        hash: 433044096,
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
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
            return _react.default.createElement(Control, {
              onClick: onClick,
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
              } : false,
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
        hash: 2137935428,
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
            const [hasAnimated, setHasAnimated] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!hasAnimated) {
                setHasAnimated(true);
              }
            }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaGFzQW5pbWF0ZWQiLCJzZXRIYXNBbmltYXRlZCIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl93cmFwcGVyIiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwiZm9yRWFjaCIsInB1c2giLCJrZXkiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwib2JqZWN0aXZlcyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNldFVwZGF0ZWQiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsInNldHRpbmdzIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsInRhc2siLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi90cy9jaGF0L2NvbnRyb2wudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBWixNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0Is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