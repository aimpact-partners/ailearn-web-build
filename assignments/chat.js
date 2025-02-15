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
      INTERNAL MODULE: ./chat/control
      ******************************/

      ims.set('./chat/control', {
        hash: 2633017248,
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
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            if (ready && !store.found) return _react.default.createElement("app-missing-control", null);
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
        hash: 928335485,
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
            const cls = `content-activity__main-content-layout ${settings.layout} ${store.testing ? ' content-testing' : ''}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJza2VsZXRvbiIsIkNoYXRTa2VsZXRvbiIsImVtcHR5IiwiRW1wdHlDaGF0IiwiaWNvbiIsImNsYXNzTmFtZSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl91aSIsIk1vYmlsZUNoYXQiLCJGcmFnbWVudCIsIkFjdGl2aXR5SGVhZGVyIiwidGl0bGUiLCJ0eXBlIiwiX2VudHJhbmNlRGl2IiwiRW50cmFuY2VEaXYiLCJ0ZXh0cyIsImNoYXQiLCJ1cGRhdGUiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4cG9ydHMiLCJfaWNvbnMiLCJmdWxsQ29udGFpbmVyIiwidHJhY2tpbmciLCJjbHMiLCJDb250YWluZXIiLCJwcm9wcyIsIkVudGl0eUltYWdlIiwic3JjIiwicGljdHVyZSIsImRhdGEiLCJlbnRpdHkiLCJBcHBJY29uIiwibW9kdWxlIiwiX21hcmtkb3duIiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiZ2xvYmFsVGV4dHMiLCJhY3Rpdml0aWVzIiwiTWFya2Rvd24iLCJfd3JhcHBlciIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5IiwiZXhwYW5kIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJDb250cm9scyIsIm9iamVjdGl2ZXMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJvdXRwdXQiLCJBY3Rpdml0eUF1ZGlvIiwiQXBwSWNvbkJ1dHRvbiIsIlRhYnMiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQ2hhdENvbnRyb2wiLCJhc3NpZ25tZW50SWQiLCJyZWFkeSIsInNldFJlYWR5IiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiTW9kdWxlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIkRlc2t0b3BDaGF0IiwiTW9iaWxlQ29udGVudCIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIl9mdWxsQ29udGFpbmVyIiwiX3NwbGl0Q29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0Iiwic2V0dGluZ3MiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfaGVhZGVyIiwiX2NoYXQiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJfbGlzdCIsIl9pdGVtIiwiTGlzdCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiaXRlbSIsIm9iamVjdGl2ZSIsIl9jb250cm9sIiwiQ2hhdFZpZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlcyI6WyIvdHMvY2hhdC9jaGF0L2luZGV4LnRzeCIsIi90cy9jaGF0L2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VudHJhbmNlLWRpdi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL21hcmtkb3duLWNvbnRlbnQudHN4IiwiL3RzL2NoYXQvY29udGVudC9pbmRleC50c3giLCIvdHMvY2hhdC9jb250cm9sLnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL2Z1bGwtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L2xheW91dHMvbWFpbi1jb250ZW50LWxheW91dC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL3NwbGl0LWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pbmRleC50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL2NoYXQvdmlldy50c3giLCIvdHMvY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssU0FBQSxHQUFBTCxPQUFBO1VBRU87VUFBVSxTQUFVTSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtZQUMzQixNQUFNQyxTQUFTLEdBQWlELEVBQUU7WUFFbEUsTUFBTSxHQUFHQyxTQUFTLENBQUMsR0FBR2IsTUFBQSxDQUFBYyxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFeEMsSUFBQVosTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxLQUFLLENBQUMsRUFBRSxNQUFNSixTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7WUFFL0QsSUFBSSxDQUFDTCxLQUFLLENBQUNVLFVBQVUsRUFBRTtjQUN0Qk4sU0FBUyxDQUFDTyxPQUFPLEdBQUcsTUFBSztnQkFDeEJWLGlCQUFpQixDQUFDLElB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