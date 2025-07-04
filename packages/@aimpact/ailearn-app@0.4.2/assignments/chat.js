System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/hooks", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.2/empty", "@beyond-js/react-18-widgets@1.1.4/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.2/base", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "@aimpact/chat-sdk@1.5.4/wrapper", "pragmate-ui@1.0.2/tabs", "pragmate-ui@1.0.2/list"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_3 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_4 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_5 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi102Empty) {
      dependency_6 = _pragmateUi102Empty;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_7 = _beyondJsReact18Widgets114Hooks;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi102Base) {
      dependency_9 = _pragmateUi102Base;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_11 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_aimpactChatSdk154Wrapper) {
      dependency_12 = _aimpactChatSdk154Wrapper;
    }, function (_pragmateUi102Tabs) {
      dependency_13 = _pragmateUi102Tabs;
    }, function (_pragmateUi102List) {
      dependency_14 = _pragmateUi102List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/base', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@aimpact/chat-sdk/widgets/markdown', dependency_11], ['@aimpact/chat-sdk/wrapper', dependency_12], ['pragmate-ui/tabs', dependency_13], ['pragmate-ui/list', dependency_14]]);
      ims = new Map();
      /*********************************
      INTERNAL MODULE: ./chat/chat/index
      *********************************/
      ims.set('./chat/chat/index', {
        hash: 1730943577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = Chat;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 573274524,
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
            }), _react.default.createElement("div", null, _react.default.createElement("h4", {
              className: "p1 mt-15"
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
        hash: 2299933301,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatControl = ChatControl;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
            const [items] = (0, _react.useState)(store.items);
            const {
              texts
            } = store;
            const [showCoinsModal, setShowCoinsModal] = _react.default.useState(false);
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
        hash: 1284922839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopChat = DesktopChat;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 4198835192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FullChatContainer = FullChatContainer;
          var _react = require("react");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 3328442328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContentLayoutContainer = MainContentLayoutContainer;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, title), _react.default.createElement("span", {
              className: "header__title"
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
        hash: 806843412,
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
            return _react.default.createElement("div", null, _react.default.createElement("h4", {
              className: "p2 bold"
            }, texts.description), _react.default.createElement("p", {
              className: "p2"
            }, store.data.description), store.data.task ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, texts.task), _react.default.createElement("p", null, store.data.task)) : null, _react.default.createElement("div", {
              className: "objectives__container"
            }, _react.default.createElement("h4", null, texts.objectives), _react.default.createElement(_list.List, {
              className: "list-unstyled objectives-list",
              items: store.data?.objectives,
              control: _item.ActivityObjective
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJkZXNjcmlwdGlvbiIsImNyZWRpdHMiLCJub0NyZWRpdHMiLCJFbXB0eSIsIl9mcmFtZXJNb3Rpb24iLCJjaGlsZHJlbiIsImFzIiwiYXR0cnMiLCJDb250cm9sIiwibW90aW9uIiwiaGFzQW5pbWF0ZWQiLCJzZXRIYXNBbmltYXRlZCIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJNYXJrZG93biIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwiZ2V0TWF0ZXJpYWxzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJsZW5ndGgiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsImZvckVhY2giLCJwdXNoIiwia2V5IiwiZXhwYW5kIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJDb250cm9scyIsIm9iamVjdGl2ZXMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJleGVyY2lzZSIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiYXNpZGVDb250ZW50IiwiVGFicyIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwiaXRlbXMiLCJzaG93Q29pbnNNb2RhbCIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsInJlYWR5IiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJNb2R1bGVDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiRGVza3RvcENoYXQiLCJNb2JpbGVDb250ZW50IiwiQ29pbnNNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiX2Z1bGxDb250YWluZXIiLCJfbWFpbkNvbnRlbnRMYXlvdXQiLCJfc3BsaXRDb250YWluZXIiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIl9oZWFkZXIiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJfbGlzdCIsIl9pdGVtIiwidGFzayIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIml0ZW0iLCJvYmplY3RpdmUiLCJfY29udHJvbCIsIkNoYXRWaWV3IiwidXJpIiwidmFycyIsImdldCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZXMiOlsiL3RzL2NoYXQvY2hhdC9pbmRleC50c3giLCIvdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvdHMvY2hhdC9jaGF0L3NrZWxldG9uLnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY29udHJvbC50c3giLCIvdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pdGVtLnRzeCIsIi90cy9jaGF0L3ZpZXcudHN4IiwiL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsY0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksTUFBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssU0FBQSxHQUFBTCxPQUFBO1VBRU87VUFBVSxTQUFVTSxJQUFJQSxDQUFBO1lBQzlCLE1BQU07Y0FBRUMsS0FBSztjQUFFQztZQUFpQixDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxnQkFBZ0IsR0FBRTtZQUN2RCxNQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtZQUMzQixNQUFNQyxTQUFTLEdBQWlELEVBQUU7WUFFbEUsSUFBQVYsTUFBQSxDQUFBVyxRQUFRLEVBQUNMLEtBQUssQ0FBQ00sS0FBSyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN6QyxJQUFBWixNQUFBLENBQUFXLFFBQVEsRUFBQ0wsS0FBSyxDQUFDO1lBRWYsSUFB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