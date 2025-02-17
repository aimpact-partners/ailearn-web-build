System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/base", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.1/components/hooks", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_13 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['@aimpact/ailearn-app/components/hooks', dependency_13], ['pragmate-ui/list', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/chat');
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 497131851,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImlkIiwic2tlbGV0b24iLCJDaGF0U2tlbGV0b24iLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwidXBkYXRlIiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl93cmFwcGVyIiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwiZm9yRWFjaCIsInB1c2giLCJrZXkiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwib2JqZWN0aXZlcyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNldFVwZGF0ZWQiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsInNldHRpbmdzIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfY29udHJvbCIsIkNoYXRWaWV3IiwidXJpIiwidmFycyIsImdldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY29udHJvbC50c3giLCIvdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLE1BQU0sR0FBR0MsU0FBUyxDQUFDLEdBQUdiLE1BQUEsQ0FBQWMsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRXhDLElBQUFaLE1BQUEsQ0FBQWEsU0FBUyxFQUFDLENBQUNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDLEVBQUUsTUFBTUosU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDO1lBRS9ELElBQUksQ0FBQ0wsS0FBSyxDQUFDVSxVQUFVLEVBQUU7Y0FDdEJOLFNBQVMsQ0FBQ08sT0FBTyxHQUFHLE1BQUs7Z0JBQ3hCVixp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