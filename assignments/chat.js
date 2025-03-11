System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.20/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.20/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.20/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0320ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0320ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp0320ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0320ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_10 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp0320ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp0320ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.20"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.20/assignments/chat"
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
        hash: 567552911,
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
            (0, _hooks.useBinder)([store.model], () => {
              console.log(1.1);
              return setUpdate({});
            }, 'credits.change');
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
        hash: 2776275213,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiY29uc29sZSIsImxvZyIsImhhc0NyZWRpdHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsInJlYWx0aW1lIiwidHJhY2tpbmciLCJsYW5ndWFnZSIsIm9uTGlzdGVuQ2hhdCIsImlkIiwic2tlbGV0b24iLCJDaGF0U2tlbGV0b24iLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwidXBkYXRlIiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VFZmZlY3QiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZXhwb3J0cyIsIl9pY29ucyIsImZ1bGxDb250YWluZXIiLCJjbHMiLCJDb250YWluZXIiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwidW5kZWZpbmVkIiwic3JjIiwicGljdHVyZSIsImRhdGEiLCJlbnRpdHkiLCJBcHBJY29uIiwibW9kdWxlIiwiX21hcmtkb3duIiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZ2xvYmFsVGV4dHMiLCJhY3Rpdml0aWVzIiwiTWFya2Rvd24iLCJfd3JhcHBlciIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5IiwiZXhwYW5kIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJDb250cm9scyIsIm9iamVjdGl2ZXMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJvdXRwdXQiLCJBY3Rpdml0eUF1ZGlvIiwiQXBwSWNvbkJ1dHRvbiIsIlRhYnMiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQ2hhdENvbnRyb2wiLCJhc3NpZ25tZW50SWQiLCJzZXRVcGRhdGVkIiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsInJlYWR5IiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJNb2R1bGVDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiRGVza3RvcENoYXQiLCJNb2JpbGVDb250ZW50IiwiQ29pbnNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiX2Z1bGxDb250YWluZXIiLCJfc3BsaXRDb250YWluZXIiLCJfbWFpbkNvbnRlbnRMYXlvdXQiLCJzZXR0aW5ncyIsImxheW91dCIsIk1haW5Db250ZW50TGF5b3V0Q29udGFpbmVyIiwiRnVsbENoYXRDb250YWluZXIiLCJTcGxpdENoYXRDb250YWluZXIiLCJkZWZpbmVQcm9wZXJ0eSIsIl9oZWFkZXIiLCJfY2hhdCIsIl9jb250ZW50IiwidG9nZ2xlRmxvYXRpbmciLCJ0ZXN0aW5nIiwiUGFnZUNvbnRhaW5lciIsImFjdGlvbnMiLCJ0YWxrdG9BSSIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsIl9saXN0IiwiX2l0ZW0iLCJ0YXNrIiwiTGlzdCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiaXRlbSIsIm9iamVjdGl2ZSIsIl9jb250cm9sIiwiQ2hhdFZpZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlcyI6WyIvdHMvY2hhdC9jaGF0L2luZGV4LnRzeCIsIi90cy9jaGF0L2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VudHJhbmNlLWRpdi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL21hcmtkb3duLWNvbnRlbnQudHN4IiwiL3RzL2NoYXQvY29udGVudC9pbmRleC50c3giLCIvdHMvY2hhdC9jb250cm9sLnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL2Z1bGwtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L2xheW91dHMvbWFpbi1jb250ZW50LWxheW91dC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL3NwbGl0LWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pbmRleC50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL2NoYXQvdmlldy50c3giLCIvdHMvY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssU0FBQSxHQUFBTCxPQUFBO1VBRU87VUFBVSxTQUFVTSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtZQUMzQixNQUFNQyxTQUFTLEdBQWlELEVBQUU7WUFFbEUsTUFBTSxHQUFHQyxTQUFTLENBQUMsR0FBR2IsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFeEMsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQ1IsQ0FBQ1IsS0FBSyxDQUFDUyxLQUFLLENBQUMsRUFDYixNQUFLO2NBQ0pDLE9BQU8sQ0FBQ0Ms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