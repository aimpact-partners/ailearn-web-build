System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/model/wrapper", "pragmate-ui@1.0.8/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.8/base", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "@aimpact/chat-sdk@1.5.5/wrapper", "pragmate-ui@1.0.8/tabs", "@aimpact/ailearn-app@0.6.1/shared/hooks", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_2 = _beyondJsReact18Widgets118Hooks;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_3 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_4 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_5 = _aimpactAilearnApp061ModelWrapper;
    }, function (_pragmateUi108Empty) {
      dependency_6 = _pragmateUi108Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi108Base) {
      dependency_8 = _pragmateUi108Base;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_11 = _aimpactChatSdk155Wrapper;
    }, function (_pragmateUi108Tabs) {
      dependency_12 = _pragmateUi108Tabs;
    }, function (_aimpactAilearnApp061SharedHooks) {
      dependency_13 = _aimpactAilearnApp061SharedHooks;
    }, function (_pragmateUi108List) {
      dependency_14 = _pragmateUi108List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['@aimpact/chat-sdk/wrapper', dependency_11], ['pragmate-ui/tabs', dependency_12], ['@aimpact/ailearn-app/shared/hooks', dependency_13], ['pragmate-ui/list', dependency_14]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 3114621338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 4173835484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 416284982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          /*bundle*/
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
            (0, _hooks2.useStore)(store);
            if (store.ready && store.error) return _react.default.createElement("app-system-error-control", {
              error: JSON.stringify(store.error.getProperties())
            });
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
        hash: 1161550276,
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
        hash: 518685314,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FullChatContainer = FullChatContainer;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3737835306,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5Iiwib2JqZWN0aXZlcyIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJBY3Rpdml0eURlZmluaXRpb24iLCJleGVyY2lzZSIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiYXNpZGVDb250ZW50IiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNob3dDb2luc01vZGFsIiwiaXRlbXMiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFByb3BlcnRpZXMiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsIl9zcGxpdENvbnRhaW5lciIsImxheW91dCIsIk1haW5Db250ZW50TGF5b3V0Q29udGFpbmVyIiwiRnVsbENoYXRDb250YWluZXIiLCJTcGxpdENoYXRDb250YWluZXIiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jaGF0IiwiX2hlYWRlciIsIl9jb250ZW50IiwidG9nZ2xlRmxvYXRpbmciLCJ0ZXN0aW5nIiwiUGFnZUNvbnRhaW5lciIsImFjdGlvbnMiLCJ0YWxrdG9BSSIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsInRhc2siLCJfbGlzdCIsIl9pdGVtIiwiTGlzdCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwiaXRlbSIsIm9iamVjdGl2ZSIsIl9jb250cm9sIiwiQ2hhdFZpZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlcyI6WyIvL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiLy90cy9jaGF0L2NoYXQvc2tlbGV0b24udHN4IiwiLy90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiLy90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi8vdHMvY2hhdC9jb21wb25lbnRzL2hlYWRlci50c3giLCIvL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi8vdHMvY2hhdC9jb250ZW50L2luZGV4LnRzeCIsIi8vdHMvY2hhdC9jb250cm9sLnRzeCIsIi8vdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvL3RzL2NoYXQvbGF5b3V0cy9tYWluLWNvbnRlbnQtbGF5b3V0LnRzeCIsIi8vdHMvY2hhdC9sYXlvdXRzL3NwbGl0LWNvbnRhaW5lci50c3giLCIvL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi8vdHMvY2hhdC9vYmplY3RpdmVzL2FjdGl2aXR5LnRzeCIsIi8vdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi8vdHMvY2hhdC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiLy90cy9jaGF0L3ZpZXcudHN4IiwiLy90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsY0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssU0FBQSxHQUFBTCxPQUFBO1VBRU87VUFBVSxTQUFVTSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtZQUMzQixNQUFNQyxTQUFTLEdB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