System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.8/base", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/wrapper", "pragmate-ui@1.0.8/tabs", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_4 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_5 = _aimpactAilearnApp070ModelWrapper;
    }, function (_pragmateUi108Empty) {
      dependency_6 = _pragmateUi108Empty;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi108Base) {
      dependency_8 = _pragmateUi108Base;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_9 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Modal) {
      dependency_11 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_12 = _aimpactChatSdk155Wrapper;
    }, function (_pragmateUi108Tabs) {
      dependency_13 = _pragmateUi108Tabs;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_14 = _aimpactAilearnApp070SharedHooks;
    }, function (_pragmateUi108List) {
      dependency_15 = _pragmateUi108List;
    }, function (_beyondJsKernel0114Styles) {
      dependency_16 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/assignments/chat"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['@aimpact/ailearn-app/components/icons', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/wrapper', dependency_12], ['pragmate-ui/tabs', dependency_13], ['@aimpact/ailearn-app/shared/hooks', dependency_14], ['pragmate-ui/list', dependency_15], ['@beyond-js/kernel/styles', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/assignments/chat');
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
        hash: 2997823619,
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
          var _modal = require("pragmate-ui/modal");
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
            const ref = _react.default.useRef(null);
            const [showImageModal, setShowImageModal] = _react.default.useState(false);
            const [selectedImage, setSelectedImage] = _react.default.useState('');
            const [imageDimensions, setImageDimensions] = _react.default.useState(null);
            _react.default.useEffect(() => {
              if (!ref?.current) return;
              const images = ref.current.querySelectorAll('img');
              images.forEach(image => {
                image.addEventListener('click', () => {
                  const img = new Image();
                  img.onload = () => {
                    setImageDimensions({
                      width: img.naturalWidth,
                      height: img.naturalHeight
                    });
                    setSelectedImage(image.src);
                    setShowImageModal(true);
                  };
                  img.src = image.src;
                });
              });
              return () => {
                images.forEach(image => {
                  image.removeEventListener('click', () => {});
                });
              };
            }, [ref?.current, content]);
            const onCloseModal = () => {
              setShowImageModal(false);
              setSelectedImage('');
              setImageDimensions(null);
            };
            if (!content) {
              return _react.default.createElement(_ui.EmptyCard, {
                text: store.globalTexts.activities.empty[name]
              });
            }
            const containerStyle = imageDimensions ? {
              width: `${imageDimensions.width}px`,
              height: `${imageDimensions.height}px`
            } : {};
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              ref: ref
            }, _react.default.createElement(_markdown.Markdown, {
              content: content,
              ...attrs
            })), showImageModal && selectedImage && _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onCloseModal,
              className: "image-preview-modal"
            }, _react.default.createElement("div", {
              style: containerStyle
            }, _react.default.createElement("img", {
              src: selectedImage,
              alt: "Preview"
            }))));
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
        hash: 239850293,
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
              setShowCoinsModal
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJzcmMiLCJwaWN0dXJlIiwiZGF0YSIsImVudGl0eSIsIkFwcEljb24iLCJtb2R1bGUiLCJfbWFya2Rvd24iLCJfbW9kYWwiLCJNYXJrZG93bkNvbnRlbnQiLCJuYW1lIiwiY29udGVudCIsInJlZiIsInVzZVJlZiIsInNob3dJbWFnZU1vZGFsIiwic2V0U2hvd0ltYWdlTW9kYWwiLCJzZWxlY3RlZEltYWdlIiwic2V0U2VsZWN0ZWRJbWFnZSIsImltYWdlRGltZW5zaW9ucyIsInNldEltYWdlRGltZW5zaW9ucyIsImN1cnJlbnQiLCJpbWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltZyIsIkltYWdlIiwib25sb2FkIiwid2lkdGgiLCJuYXR1cmFsV2lkdGgiLCJoZWlnaHQiLCJuYXR1cmFsSGVpZ2h0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2xvc2VNb2RhbCIsIkVtcHR5Q2FyZCIsInRleHQiLCJnbG9iYWxUZXh0cyIsImFjdGl2aXRpZXMiLCJjb250YWluZXJTdHlsZSIsIk1hcmtkb3duIiwiTW9kYWwiLCJzaG93Iiwib25DbG9zZSIsInN0eWxlIiwiYWx0IiwiX3RhYnMiLCJfbWFya2Rvd25Db250ZW50IiwiX29iamVjdGl2ZXMiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eUNvbnRlbnQiLCJhcnRpY2xlIiwiZHlzbGV4aWEiLCJhdWRpb3MiLCJzeW50aGVzaXMiLCJnZXRNYXRlcmlhbHMiLCJtb2RlIiwiQXBwV3JhcHBlciIsImFjY2Vzc2liaWxpdHkiLCJjb250cm9sIiwic2V0Q29udHJvbCIsImtleXMiLCJPYmplY3QiLCJ0b3RhbEF1ZGlvcyIsImxlbmd0aCIsImF1ZGlvU3JjIiwidXJsIiwidGFicyIsIm9uQ2xpY2tUYWIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidGFiIiwiVGFiIiwicHVzaCIsImtleSIsIm9iamVjdGl2ZXMiLCJleHBhbmQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsIkNvbnRyb2xzIiwiQWN0aXZpdHlPYmplY3RpdmVzIiwiQWN0aXZpdHlEZWZpbml0aW9uIiwiZXhlcmNpc2UiLCJvdXRwdXQiLCJBY3Rpdml0eUF1ZGlvIiwiQXBwSWNvbkJ1dHRvbiIsImFzaWRlQ29udGVudCIsIlRhYnMiLCJfaG9va3MyIiwiX2Rlc2t0b3AiLCJfbW9iaWxlIiwiQ2hhdENvbnRyb2wiLCJhc3NpZ25tZW50SWQiLCJzaG93Q29pbnNNb2RhbCIsIml0ZW1zIiwic2NyZWVuU2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJjbG9zZU1vZGFsIiwicmVhZHkiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQcm9wZXJ0aWVzIiwiZm91bmQiLCJQYWdlTG9hZGVyIiwiZmV0Y2hpbmciLCJjb250ZXh0VmFsdWUiLCJNb2R1bGVDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiRGVza3RvcENoYXQiLCJNb2JpbGVDb250ZW50IiwiQ29pbnNNb2RhbCIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIl9mdWxsQ29udGFpbmVyIiwiX21haW5Db250ZW50TGF5b3V0IiwiX3NwbGl0Q29udGFpbmVyIiwibGF5b3V0IiwiTWFpbkNvbnRlbnRMYXlvdXRDb250YWluZXIiLCJGdWxsQ2hhdENvbnRhaW5lciIsIlNwbGl0Q2hhdENvbnRhaW5lciIsImRlZmluZVByb3BlcnR5IiwiX2NoYXQiLCJfaGVhZGVyIiwiX2NvbnRlbnQiLCJ0b2dnbGVGbG9hdGluZyIsInRlc3RpbmciLCJQYWdlQ29udGFpbmVyIiwiYWN0aW9ucyIsInRhbGt0b0FJIiwic2V0VXBkYXRlIiwidXNlQmluZGVyIiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlBhbmVzIiwidGFzayIsIl9saXN0IiwiX2l0ZW0iLCJMaXN0IiwiQWN0aXZpdHlPYmplY3RpdmUiLCJpdGVtIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi8vdHMvY2hhdC9jaGF0L2luZGV4LnRzeCIsIi8vdHMvY2hhdC9jaGF0L21vYmlsZS50c3giLCIvL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvL3RzL2NoYXQvY29tcG9uZW50cy9lbXB0eS50c3giLCIvL3RzL2NoYXQvY29tcG9uZW50cy9lbnRyYW5jZS1kaXYudHN4IiwiLy90cy9jaGF0L2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi8vdHMvY2hhdC9jb21wb25lbnRzL21hcmtkb3duLWNvbnRlbnQudHN4IiwiLy90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiLy90cy9jaGF0L2NvbnRyb2wudHN4IiwiLy90cy9jaGF0L2Rlc2t0b3AudHN4IiwiLy9nbG9iYWwudHN4LyIsIi8vdHMvY2hhdC9sYXlvdXRzL2Z1bGwtY29udGFpbmVyLnRzeCIsIi8vdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiLy90cy9jaGF0L2xheW91dHMvc3BsaXQtY29udGFpbmVyLnRzeCIsIi8vdHMvY2hhdC9tb2JpbGUudHN4IiwiLy90cy9jaGF0L29iamVjdGl2ZXMvYWN0aXZpdHkudHN4IiwiLy90cy9jaGF0L29iamVjdGl2ZXMvaW5kZXgudHN4IiwiLy90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvL3RzL2NoYXQvdmlldy50c3giLCIvL3RzL2NvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ak0sU0FBUyxFQUFDLGdDQUFnQztjQUFDbUosS0FBSyxFQUFFNUssS0FBSyxDQUFDeUUsSUFBSSxFQUFFeUUsVUFBVTtjQUFFakIsT0FBTyxFQUFFd0YsS0FBQSxDQUFBRTtZQUFpQixFQUFJO1VBRWhIOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFuTyxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVa08saUJBQWlCQSxDQUFDO1lBQUVDO1VBQUksQ0FBRTtZQUN6QyxPQUNDcE8sTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFrQixHQUNoQ2pDLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQTtjQUFJYyxTQUFTLEVBQUM7WUFBUyxHQUFFbU0sSUFBSSxDQUFDNUksSUFBSSxDQUFNLEVBQ3hDeEYsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUFJLEdBQUVtTSxJQUFJLENBQUNDLFNBQVMsQ0FBUSxDQUN2QztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUFyTyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBcU8sUUFBQSxHQUFBck8sT0FBQTtVQUdPLFdBSlA7O1VBRUE7VUFFaUIsU0FDUnNPLFFBQVFBLENBQUM7WUFBRS9OLEtBQUs7WUFBRWdPO1VBQUcsQ0FBNEI7WUFDekQsTUFBTXRELFlBQVksR0FBR3NELEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQ2pELE1BQU0vTixNQUFNLEdBQUc2TixHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUVyQyxPQUFPMU8sTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUNtTixRQUFBLENBQUFyRCxXQUFXO2NBQUN6SyxLQUFLLEVBQUVBLEtBQUs7Y0FBRUcsTUFBTSxFQUFFQSxNQUFNO2NBQUV1SyxZQUFZLEVBQUVBO1lBQVksRUFBSTtVQUNqRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQSxJQUFBbEwsTUFBQSxHQUFBQyxPQUFBO1VBY087VUFBVyxNQUFNZ00sYUFBYSxHQUFBMUgsT0FBQSxDQUFBMEgsYUFBQSxHQUFHak0sTUFBQSxDQUFBa0IsT0FBSyxDQUFDeU4sYUFBYSxDQUFDLEVBQW9CLENBQUM7VUFDMUU7VUFBVyxNQUFNak8sZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVYsTUFBQSxDQUFBa0IsT0FBSyxDQUFDME4sVUFBVSxDQUFDM0MsYUFBYSxDQUFDO1VBQUMxSCxPQUFBLENBQUE3RCxnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==