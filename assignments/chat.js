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

      /***********************************
      INTERNAL MODULE: ./chat/content copy
      ***********************************/

      ims.set('./chat/content copy', {
        hash: 738344431,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _list = require("pragmate-ui/list");
          var _tabs = require("pragmate-ui/tabs");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./objectives/item");
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
            if (store.model?.resources?.specs?.objectives) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "objectives"
            }, texts.objectives));
            if (content) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "article"
            }, texts.article));
            if (synthesis) tabs.push(_react.default.createElement(_tabs.Tab, {
              key: "synthesis"
            }, texts.synthesis));
            const expand = event => {
              event.preventDefault();
              const parent = event.currentTarget.closest('.content__container');
              parent.classList.add('expanding');
              parent.classList.toggle('expanded');
              globalThis.setTimeout(() => {
                parent.classList.remove('expanding');
              }, 200);
            };
            return _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement("div", {
              className: "scroll-container"
            }, !fullContainer && _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("section", {
              className: "main__content"
            }, _react.default.createElement("div", {
              className: "content__header"
            }, !!totalAudios && _react.default.createElement(_ui.ActivityAudio, {
              src: audioSrc
            }), _react.default.createElement(_icons.AppIconButton, {
              icon: "expand",
              className: "expand-icon circle",
              onClick: expand
            })), _react.default.createElement(_tabs.TabsContainer, {
              active: 0
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, tabs), _react.default.createElement(_tabs.Panes, {
              className: "panes__container"
            }, !!store.model?.resources?.specs?.objectives && _react.default.createElement("div", null, _react.default.createElement("h5", null, texts.description), _react.default.createElement("p", null, store.model.description), _react.default.createElement("h5", {
              className: "mb-15"
            }, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: store.model?.resources.specs?.objectives,
              control: _item.ActivityObjective
            })), _react.default.createElement(_markdown.Markdown, {
              content: content
            }), _react.default.createElement(_markdown.Markdown, {
              content: synthesis,
              className: "content__synthesis"
            }))))));
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
        hash: 234826081,
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
        hash: 3770364683,
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
        "im": "./chat/content copy",
        "from": "ActivityContent",
        "name": "ActivityContent"
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
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content copy').ActivityContent : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VudHJhbmNlRGl2IiwiQ2hhdFNrZWxldG9uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJFbnRyYW5jZURpdiIsImNsYXNzTmFtZSIsInR5cGUiLCJfY2hhdENvbXBvbmVudCIsIl9ob29rcyIsIl9jb250ZXh0IiwiX2VtcHR5IiwiX2NoYXRTa2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImlkIiwic2tlbGV0b24iLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJfbWFya2Rvd24iLCJfd3JhcHBlciIsIl9saXN0IiwiX3RhYnMiLCJfaWNvbnMiLCJfaXRlbSIsIkFjdGl2aXR5Q29udGVudCIsImZ1bGxDb250YWluZXIiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsImdldE1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZXhwYW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBY3Rpdml0eUF1ZGlvIiwiQXBwSWNvbkJ1dHRvbiIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJkZXNjcmlwdGlvbiIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIk1hcmtkb3duIiwiX29iamVjdGl2ZXMiLCJfbWFya2Rvd25Db250ZW50IiwiZm9yRWFjaCIsInRhYiIsImRhdGEiLCJGcmFnbWVudCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiX2Z1bGxDb250YWluZXIiLCJfc3BsaXRDb250YWluZXIiLCJEZXNrdG9wQ2hhdCIsInNldHRpbmdzIiwibGF5b3V0IiwiaW5jbHVkZXMiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImNoYXQiLCJ1cGRhdGUiLCJ0aXRsZSIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiZXhwb3J0cyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJBY3Rpdml0eUhlYWRlciIsInRyYWNraW5nIiwiY2xzIiwiQ29udGFpbmVyIiwicHJvcHMiLCJBcHBJY29uIiwibW9kdWxlIiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJnbG9iYWxUZXh0cyIsInRvZ2dsZUZsb2F0aW5nIiwiUGFnZUNvbnRhaW5lciIsImFjdGlvbnMiLCJ0YWxrdG9BSSIsIk1haW5Db250ZW50TGF5b3V0Q29udGFpbmVyIiwiRW1wdHlDYXJkIiwidGV4dCIsImFjdGl2aXRpZXMiLCJNb2JpbGVDaGF0IiwiX21vYmlsZUNoYXQiLCJNb2JpbGVDb250ZW50IiwiaXRlbSIsIm9iamVjdGl2ZSIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0VmlldyIsInVyaSIsInJlYWR5Iiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInZhcnMiLCJnZXQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsIkNvaW5zTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC1za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jaGF0LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQgY29weS50c3giLCIvdHMvY2hhdC9jb250ZW50LnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL2NoYXQvZW1wdHkudHN4IiwiL3RzL2NoYXQvZW50cmFuY2UtZGl2LnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvaGVhZGVyLnRzeCIsIi90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L21hcmtkb3duLWNvbnRlbnQudHN4IiwiL3RzL2NoYXQvbW9iaWxlLWNoYXQudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsWUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsWUFBWUEsQ0FBQTtZQUMzQixPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxZQUFBLENBQUFJLFdBQVc7Y0FBQ0MsU0FBUyxFQUFDO1lBQWdCLEdBQ3RDUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNRSxTQUFTLEVBQUM7WUFBa0IsR0FDakNQLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUF3QixHQUN0Q1AsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBVyxFQUNYTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJQLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVVFLFNBQVMsRUFBQztZQUFpQixFQUFHLENBQ25DLEVBQ05QLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFpQyxHQUNoRFAsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDLGdEQUFnRDtjQUFDQyxJQUFJLEVBQUM7WUFBUSxFQUFVLENBQ3BGLENBQ0YsQ0FDQSxDQUNNO1VBRWhCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBUixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBUSxjQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxRQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFB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