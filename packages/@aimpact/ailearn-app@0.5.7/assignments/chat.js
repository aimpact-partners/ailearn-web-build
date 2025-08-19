System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/shared/hooks", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/model/wrapper", "pragmate-ui@1.0.6/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.6/base", "@aimpact/ailearn-app@0.5.7/components/icons", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "@aimpact/chat-sdk@1.5.5/wrapper", "pragmate-ui@1.0.6/tabs", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/list"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_2 = _aimpactAilearnApp057SharedHooks;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_3 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_4 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_5 = _aimpactAilearnApp057ModelWrapper;
    }, function (_pragmateUi106Empty) {
      dependency_6 = _pragmateUi106Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi106Base) {
      dependency_8 = _pragmateUi106Base;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_11 = _aimpactChatSdk155Wrapper;
    }, function (_pragmateUi106Tabs) {
      dependency_12 = _pragmateUi106Tabs;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106List) {
      dependency_14 = _pragmateUi106List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/shared/hooks', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 1235145120,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
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
            (0, _hooks.useStore)(store.model, ['credits.change']);
            (0, _hooks.useStore)(store);
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
              icon: "/assets/images/chat/profile.png"
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
        hash: 1861714842,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
              language: store.model.language,
              empty: _empty.EmptyChat,
              icon: _wrapper.settings.appIcon
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
        hash: 478256096,
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
              className: "chat-container chat-container--skeleton"
            }, _react.default.createElement("form", {
              className: "chat-input-form "
            }, _react.default.createElement("div", {
              className: "chat-input-container"
            }, _react.default.createElement("div", null), _react.default.createElement("div", {
              className: "input__wrapper"
            }, _react.default.createElement("textarea", {
              className: "input__textarea",
              disabled: true
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
        hash: 2933727022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../context");
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
            (0, _hooks.useStore)(store.model, ['credits.changed']);
            const {
              title,
              description
            } = store.hasCredits ? texts.credits : texts.noCredits;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info"
            }, _react.default.createElement("div", null, _react.default.createElement("p", {
              className: "p2 bold"
            }, title), _react.default.createElement("span", {
              className: "p2"
            }, description))));
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
        hash: 2309259354,
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
            }), _react.default.createElement("div", null, _react.default.createElement("h1", {
              className: "h4"
            }, title), _react.default.createElement("span", {
              className: "p2"
            }, tracking.module.title)), children));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./chat/components/markdown-content
      **************************************************/

      ims.set('./chat/components/markdown-content', {
        hash: 4269705487,
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
            return _react.default.createElement(_markdown.Markdown, {
              content: content,
              ...attrs
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./chat/content/index
      ************************************/

      ims.set('./chat/content/index', {
        hash: 3579594397,
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
          var _activity = require("../objectives/activity");
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
            const [control, setControl] = _react.default.useState('activity');
            const keys = (audios && Object.keys(audios)) ?? [];
            let totalAudios = keys.length;
            const audioSrc = mode != 'normal' && audios?.dyslexia?.url ? audios.dyslexia?.url : audios?.article?.url;
            const tabs = [];
            const onClickTab = event => setControl(event.currentTarget.dataset.tab);
            const Tab = ({
              name
            }) => {
              const cls = `tab ${control === name ? 'active' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                onClick: onClickTab,
                "data-tab": name
              }, texts.tabs[name]);
            };
            store.tabs.forEach(tab => {
              if (tab === 'activity') {
                tabs.push(_react.default.createElement(Tab, {
                  name: "activity",
                  key: "activity"
                }));
                return;
              }
              if (tab === 'objectives') return;
              if (tab === 'article' && content) {
                tabs.push(_react.default.createElement(Tab, {
                  name: "article",
                  key: "content-tab"
                }));
                return;
              }
              if (store.data[tab]) {
                tabs.push(_react.default.createElement(Tab, {
                  name: tab,
                  key: tab
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
            if (store?.data?.objectives) tabs.push(_react.default.createElement(Tab, {
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
              activity: _react.default.createElement(_activity.ActivityDefinition, {
                store: store
              }),
              synthesis: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "synthesis",
                content: synthesis,
                className: "content__synthesis"
              }),
              exercise: _react.default.createElement(_markdownContent.MarkdownContent, {
                name: "exercise",
                content: store.data.exercise,
                className: "content__exercise"
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
            }), _react.default.createElement("div", null, _react.default.createElement("h5", {
              className: "mt-15"
            }, texts.asideContent.title), _react.default.createElement(_tabs.Tabs, {
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
        hash: 3798664583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/ //@ts-ignore

          //@ts-ignore
          function ChatControl({
            store,
            chatId,
            assignmentId
          }) {
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const screenSize = (0, _hooks.useMediaQuery)();
            const closeModal = () => setShowCoinsModal(false);
            (0, _hooks.useStore)(store);
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
        hash: 3238847830,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopChat = DesktopChat;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _context = require("../context");
          var _fullContainer = require("./layouts/full-container");
          var _mainContentLayout = require("./layouts/main-content-layout");
          var _splitContainer = require("./layouts/split-container");
          /*bundle*/ //@ts-ignore

          function DesktopChat() {
            const {
              store,
              setShowCoinsModal
            } = (0, _context.useModuleContext)();
            const chatSpecs = {};
            (0, _hooks.useStore)(store.model, ['credits.change']);
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
        hash: 1270089517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FullChatContainer = FullChatContainer;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _chat = require("../chat");
          var _header = require("../components/header");
          var _content = require("../content");
          /*bundle*/
          function FullChatContainer({
            settings
          }) {
            const {
              store,
              setShowCoinsModal,
              globalTexts
            } = (0, _context.useModuleContext)();
            const chatSpecs = {};
            (0, _hooks.useStore)(store, ['credits.change']);
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
        hash: 2534938798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
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
            const chatSpecs = {};
            const {
              model: {
                type,
                title,
                tracking
              }
            } = store;
            (0, _hooks.useStore)(store, ['credits.change']);
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
            }), _react.default.createElement("div", null, _react.default.createElement("h1", {
              className: "h4"
            }, title), _react.default.createElement("span", {
              className: "p2"
            }, tracking.module.title)))), _react.default.createElement("div", {
              className: "scrolleable-child content__container "
            }, _react.default.createElement(_content.ActivityContent, {
              fullContainer: true
            })), _react.default.createElement("div", {
              className: "scrolleable-child chat__container"
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
        hash: 2892091517,
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
            }, _react.default.createElement(_tabs.Panes, null, _react.default.createElement("div", null, _react.default.createElement(_content.ActivityContent, null)), _react.default.createElement(_mobile.MobileChat, null)), _react.default.createElement(_tabs.Tabs, {
              className: "mobile-tabs__menu-items"
            }, _react.default.createElement(_tabs.Tab, null, texts.tabs.content), _react.default.createElement(_tabs.Tab, null, texts.tabs.chat))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./chat/objectives/activity
      ******************************************/

      ims.set('./chat/objectives/activity', {
        hash: 360086691,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityDefinition = ActivityDefinition;
          var _react = require("react");
          function ActivityDefinition({
            store
          }) {
            const {
              data,
              texts
            } = store;
            return _react.default.createElement("div", null, _react.default.createElement("h4", {
              className: "p1"
            }, texts.description), _react.default.createElement("p", null, store.data.description), store.data.task ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", {
              className: "p1"
            }, texts.task), _react.default.createElement("p", null, store.data.task)) : null);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./chat/objectives/index
      ***************************************/

      ims.set('./chat/objectives/index', {
        hash: 3198783642,
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
            return _react.default.createElement(_list.List, {
              className: "linst-unstyled objectives-list",
              items: store.data?.objectives,
              control: _item.ActivityObjective
            });
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./chat/objectives/item
      **************************************/

      ims.set('./chat/objectives/item', {
        hash: 577458778,
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
            }, _react.default.createElement("h6", {
              className: "p2 bold"
            }, item.name), _react.default.createElement("span", {
              className: "p2"
            }, item.objective));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5Iiwib2JqZWN0aXZlcyIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJBY3Rpdml0eURlZmluaXRpb24iLCJleGVyY2lzZSIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiYXNpZGVDb250ZW50IiwiVGFicyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwic2hvd0NvaW5zTW9kYWwiLCJpdGVtcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsInJlYWR5IiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJNb2R1bGVDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiRGVza3RvcENoYXQiLCJNb2JpbGVDb250ZW50IiwiQ29pbnNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiX2Z1bGxDb250YWluZXIiLCJfbWFpbkNvbnRlbnRMYXlvdXQiLCJfc3BsaXRDb250YWluZXIiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIl9oZWFkZXIiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJ0YXNrIiwiX2xpc3QiLCJfaXRlbSIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfY29udHJvbCIsIkNoYXRWaWV3IiwidXJpIiwidmFycyIsImdldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiLy90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiLy90cy9jaGF0L2NoYXQvbW9iaWxlLnRzeCIsIi8vdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi8vdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi8vdHMvY2hhdC9jb21wb25lbnRzL2VudHJhbmNlLWRpdi50c3giLCIvL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiLy90cy9jaGF0L2NvbXBvbmVudHMvbWFya2Rvd24tY29udGVudC50c3giLCIvL3RzL2NoYXQvY29udGVudC9pbmRleC50c3giLCIvL3RzL2NoYXQvY29udHJvbC50c3giLCIvL3RzL2NoYXQvZGVza3RvcC50c3giLCIvL2dsb2JhbC50c3gvIiwiLy90cy9jaGF0L2xheW91dHMvZnVsbC1jb250YWluZXIudHN4IiwiLy90cy9jaGF0L2xheW91dHMvbWFpbi1jb250ZW50LWxheW91dC50c3giLCIvL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiLy90cy9jaGF0L21vYmlsZS50c3giLCIvL3RzL2NoYXQvb2JqZWN0aXZlcy9hY3Rpdml0eS50c3giLCIvL3RzL2NoYXQvb2JqZWN0aXZlcy9pbmRleC50c3giLCIvL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi8vdHMvY2hhdC92aWV3LnRzeCIsIi8vdHMvY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUFWLE1BQUEsQ0FBQVcsUUFBUSxFQUFDTCxLQUFLLENBQUNN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