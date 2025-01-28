System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.3.1/components/ui", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "@aimpact/chat-sdk@1.4.1/wrapper", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/empty", "@aimpact/ailearn-app@0.3.1/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Chat, ActivityContent, DesktopChat, ActivityHeader, FullChatContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
  _export({
    Chat: void 0,
    ActivityContent: void 0,
    DesktopChat: void 0,
    ActivityHeader: void 0,
    FullChatContainer: void 0,
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
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_12 = _aimpactAilearnApp031ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['@aimpact/ailearn-app/components/ui', dependency_5], ['@aimpact/chat-sdk/widgets/markdown', dependency_6], ['@aimpact/chat-sdk/wrapper', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/tabs', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/empty', dependency_11], ['@aimpact/ailearn-app/components/hooks', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/assignments/chat');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./chat/chat
      ***************************/
      ims.set('./chat/chat', {
        hash: 562206426,
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
        hash: 408137311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityContent = ActivityContent;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _wrapper = require("@aimpact/chat-sdk/wrapper");
          var _tabs = require("pragmate-ui/tabs");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../context");
          var _objectives = require("./objectives");
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
            return _react.default.createElement("div", {
              className: "activity-content"
            }, _react.default.createElement("div", {
              className: "scroll-container"
            }, !fullContainer && _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-cover",
              src: store.data.picture,
              type: store.data.type,
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
            }, _react.default.createElement(_objectives.ActivityObjectives, {
              store: store
            }), _react.default.createElement(_markdown.Markdown, {
              content: content
            }), _react.default.createElement(_markdown.Markdown, {
              content: synthesis,
              className: "content__synthesis"
            }))))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/desktop
      ******************************/

      ims.set('./chat/desktop', {
        hash: 2794688386,
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
            const fullContainer = false;
            return _react.default.createElement(_react.default.Fragment, null, fullContainer ? _react.default.createElement(_fullContainer.FullChatContainer, null) : _react.default.createElement(_splitContainer.SplitChatContainer, null));
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
        hash: 2140884701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, fullContainer && _react.default.createElement(_ui.EntityImage, {
              className: "entity-image-full-cover",
              src: store.model.picture,
              type: store.model.type,
              entity: "activity"
            }), _react.default.createElement("header", {
              className: cls
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
        hash: 451702572,
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
          function FullChatContainer({}) {
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
            const fullContainer = false;
            const toggleFloating = event => {
              const parent = event.currentTarget.closest('.floating-container');
              parent.classList.toggle('opened');
            };
            return _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container full-content-layout"
            }, _react.default.createElement(_header.ActivityHeader, {
              fullContainer: fullContainer
            }), _react.default.createElement(_content.ActivityContent, {
              fullContainer: fullContainer
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

      /**********************************************
      INTERNAL MODULE: ./chat/layouts/split-container
      **********************************************/

      ims.set('./chat/layouts/split-container', {
        hash: 1687188082,
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
          function SplitChatContainer() {
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
            return _react.default.createElement(_ui.PageContainer, {
              className: "content-activity--desktop-container main-chat-layout"
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
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chat/chat').Chat : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content copy').ActivityContent : value);
        (require || prop === 'ActivityContent') && _export("ActivityContent", ActivityContent = require ? require('./chat/content').ActivityContent : value);
        (require || prop === 'DesktopChat') && _export("DesktopChat", DesktopChat = require ? require('./chat/desktop').DesktopChat : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./chat/header').ActivityHeader : value);
        (require || prop === 'FullChatContainer') && _export("FullChatContainer", FullChatContainer = require ? require('./chat/layouts/full-container').FullChatContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NoYXRDb21wb25lbnQiLCJfaG9va3MiLCJfY29udGV4dCIsIl9lbXB0eSIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInNldFVwZGF0ZSIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInVzZUJpbmRlciIsIm1vZGVsIiwiaGFzQ3JlZGl0cyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiaWQiLCJlbXB0eSIsIkVtcHR5Q2hhdCIsImljb24iLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfdWkiLCJfbWFya2Rvd24iLCJfd3JhcHBlciIsIl9saXN0IiwiX3RhYnMiLCJfaWNvbnMiLCJfaXRlbSIsIkFjdGl2aXR5Q29udGVudCIsImZ1bGxDb250YWluZXIiLCJ0ZXh0cyIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsImdldE1hdGVyaWFscyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRlbnQiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJyZXNvdXJjZXMiLCJzcGVjcyIsIm9iamVjdGl2ZXMiLCJwdXNoIiwiVGFiIiwia2V5IiwiZXhwYW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJ0eXBlIiwiZW50aXR5IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiZGVzY3JpcHRpb24iLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiQWN0aXZpdHlPYmplY3RpdmUiLCJNYXJrZG93biIsIl9vYmplY3RpdmVzIiwiZm9yRWFjaCIsInRhYiIsImRhdGEiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJfZnVsbENvbnRhaW5lciIsIl9zcGxpdENvbnRhaW5lciIsIkRlc2t0b3BDaGF0IiwiRnJhZ21lbnQiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImNoYXQiLCJ1cGRhdGUiLCJ0aXRsZSIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWN0aXZpdHlIZWFkZXIiLCJjaGlsZHJlbiIsInRyYWNraW5nIiwiY2xzIiwiQ29udGFpbmVyIiwicHJvcHMiLCJBcHBJY29uIiwibW9kdWxlIiwiX2hlYWRlciIsIl9jaGF0IiwiX2NvbnRlbnQiLCJnbG9iYWxUZXh0cyIsInRvZ2dsZUZsb2F0aW5nIiwiUGFnZUNvbnRhaW5lciIsImFjdGlvbnMiLCJ0YWxrdG9BSSIsIk1vYmlsZUNoYXQiLCJfbW9iaWxlQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJpdGVtIiwibmFtZSIsIm9iamVjdGl2ZSIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0VmlldyIsInVyaSIsInJlYWR5Iiwic2V0UmVhZHkiLCJzaG93Q29pbnNNb2RhbCIsImFzc2lnbm1lbnRJZCIsInZhcnMiLCJnZXQiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsImluY2x1ZGVzIiwiQ29pbnNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlcyI6WyIvdHMvY2hhdC9jaGF0LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQgY29weS50c3giLCIvdHMvY2hhdC9jb250ZW50LnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL3RzL2NoYXQvZW1wdHkudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvY2hhdC9oZWFkZXIudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL3NwbGl0LWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9tb2JpbGUtY2hhdC50c3giLCIvdHMvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pbmRleC50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL2NoYXQvdmlldy50c3giLCIvdHMvY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsY0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBRU87VUFBVSxTQUFVSyxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQUosUUFBQSxDQUFBSyxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtZQUMzQixNQUFNQyxTQUFTLEdBQWlELEVB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QUFBLENBQUNTLEdBQUEsQ0FBQXNILFVBQVU7Y0FBQ0MsUUFBUTtZQUFBLEVBQUc7WUFFMUMsTUFBTUMsWUFBWSxHQUFHO2NBQ3BCL0csS0FBSztjQUNMOEcsUUFBUSxFQUFFN0ksS0FBSyxDQUFDNkksUUFBUTtjQUN4QjdJLEtBQUs7Y0FDTEcsTUFBTTtjQUNOa0ksWUFBWTtjQUNabkIsV0FBVyxFQUFFbEgsS0FBSyxDQUFDa0gsV0FBVztjQUM5Qm5DLEtBQUs7Y0FDTDlFLGlCQUFpQixDQUFDO2FBQ2xCO1lBRUQsT0FDQ1IsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQXBCLE1BQUEsQ0FBQWEsT0FBQSxDQUFBcUYsUUFBQSxRQUNDbEcsTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2hCLFFBQUEsQ0FBQWtKLGFBQWEsQ0FBQ0MsUUFBUTtjQUFDMUMsS0FBSyxFQUFFd0M7WUFBWSxHQUN6QyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQ0csUUFBUSxDQUFDVCxVQUFVLENBQUMsR0FBRy9JLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNpSCxRQUFBLENBQUFwQyxXQUFXLE9BQUcsR0FBR2pHLE1BQUEsQ0FBQWEsT0FBQSxDQUFBTyxhQUFBLENBQUNrSCxPQUFBLENBQUFOLGFBQWEsT0FBRyxDQUNoRCxFQUN4QlcsY0FBYyxJQUNkM0ksTUFBQSxDQUFBYSxPQUFBLENBQUFPLGFBQUEsQ0FBQ1MsR0FBQSxDQUFBNEgsVUFBVTtjQUNWQyxJQUFJLEVBQUVmLGNBQWM7Y0FDcEJnQixPQUFPLEVBQUVWLFVBQVU7Y0FDbkJ4QixXQUFXLEVBQUVsSCxLQUFLLENBQUNrSCxXQUFXO2NBQzlCN0MsSUFBSSxFQUFDLGFBQWE7Y0FDbEJnRixTQUFTLEVBQUVySixLQUFLLENBQUNTLEtBQUssQ0FBQzZJO1lBQVksRUFFcEMsQ0FDQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBN0osTUFBQSxHQUFBQyxPQUFBO1VBY087VUFBVyxNQUFNcUosYUFBYSxHQUFBMUMsT0FBQSxDQUFBMEMsYUFBQSxHQUFHdEosTUFBQSxDQUFBYSxPQUFLLENBQUNpSixhQUFhLENBQUMsRUFBb0IsQ0FBQztVQUMxRTtVQUFXLE1BQU1ySixnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNVCxNQUFBLENBQUFhLE9BQUssQ0FBQ2tKLFVBQVUsQ0FBQ1QsYUFBYSxDQUFDO1VBQUMxQyxPQUFBLENBQUFuRyxnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==