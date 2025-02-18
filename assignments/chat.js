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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImlkIiwic2tlbGV0b24iLCJDaGF0U2tlbGV0b24iLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwidXBkYXRlIiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl93cmFwcGVyIiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwiZm9yRWFjaCIsInB1c2giLCJrZXkiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwib2JqZWN0aXZlcyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNldFVwZGF0ZWQiLCJpdGVtcyIsInNob3dDb2luc01vZGFsIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsInNldHRpbmdzIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwiX2xpc3QiLCJfaXRlbSIsInRhc2siLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi90cy9jaGF0L2NvbnRyb2wudHN4IiwiL3RzL2NoYXQvZGVza3RvcC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxjQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxHQUFHYixNQUFBLENBQUFjLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV4QyxJQUFBWixNQUFBLENBQUFhLFNBQVMsRUFBQyxDQUFDUixLQUFLLENBQUNTLEtBQUssQ0FBQyxFQUFFLE1BQU1KLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztZQUUvRCxJQUFJLENBQUNMLEtBQUssQ0FBQ1UsVUFBVSxFQUFFO2NBQ3RCTixTQUFTLENBQUNPLE9BQU8sR0FBRyxNQUFLO2dC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