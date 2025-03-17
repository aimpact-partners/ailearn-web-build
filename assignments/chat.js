System.register(["@beyond-js/kernel@0.1.9/bundle", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.26/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.26/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.26/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0326ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0326ComponentsUi;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_5 = _pragmateUi100Beta7Empty;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_aimpactAilearnApp0326ComponentsIcons) {
      dependency_8 = _aimpactAilearnApp0326ComponentsIcons;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_aimpactChatSdk141Wrapper) {
      dependency_10 = _aimpactChatSdk141Wrapper;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_11 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp0326ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp0326ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.26"], ["@aimpact/ailearn-app", "0.3.26"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.26/assignments/chat"
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
        hash: 1370743758,
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
              model: store.activity.chatModel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiY29uc29sZSIsImxvZyIsImhhc0NyZWRpdHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsInJlYWx0aW1lIiwidHJhY2tpbmciLCJsYW5ndWFnZSIsIm9uTGlzdGVuQ2hhdCIsImlkIiwiYWN0aXZpdHkiLCJjaGF0TW9kZWwiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaGFzQW5pbWF0ZWQiLCJzZXRIYXNBbmltYXRlZCIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl93cmFwcGVyIiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwiZm9yRWFjaCIsInB1c2giLCJrZXkiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwib2JqZWN0aXZlcyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNldFVwZGF0ZWQiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsInNldHRpbmdzIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsInRhc2siLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi90cy9jaGF0L2NvbnRyb2wudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBWixNQUFBLENBQUFhLFNBQVMsRUFDUixDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUNi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