System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/empty", "framer-motion@10.18.0", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/image", "@aimpact/ailearn-sdk@1.2.0/startup", "@aimpact/ailearn-app@0.7.0/components/lightbox", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/wrapper", "pragmate-ui@1.0.8/tabs", "@aimpact/ailearn-app@0.7.0/shared/hooks", "pragmate-ui@1.0.8/list", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Chat, ActivityHeader, MarkdownContent, ActivityContent, ChatControl, DesktopChat, FullChatContainer, MainContentLayoutContainer, SplitChatContainer, ChatView, IModuleContext, ModuleContext, useModuleContext, __beyond_pkg, hmr;
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
    }, function (_pragmateUi108Image) {
      dependency_9 = _pragmateUi108Image;
    }, function (_aimpactAilearnSdk120Startup) {
      dependency_10 = _aimpactAilearnSdk120Startup;
    }, function (_aimpactAilearnApp070ComponentsLightbox) {
      dependency_11 = _aimpactAilearnApp070ComponentsLightbox;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_13 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Modal) {
      dependency_14 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155Wrapper) {
      dependency_15 = _aimpactChatSdk155Wrapper;
    }, function (_pragmateUi108Tabs) {
      dependency_16 = _pragmateUi108Tabs;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_17 = _aimpactAilearnApp070SharedHooks;
    }, function (_pragmateUi108List) {
      dependency_18 = _pragmateUi108List;
    }, function (_beyondJsKernel0114Styles) {
      dependency_19 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2], ['@aimpact/chat-sdk/chat-component.code', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['@aimpact/ailearn-app/model/wrapper', dependency_5], ['pragmate-ui/empty', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/ailearn-sdk/startup', dependency_10], ['@aimpact/ailearn-app/components/lightbox', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@aimpact/chat-sdk/widgets/markdown', dependency_13], ['pragmate-ui/modal', dependency_14], ['@aimpact/chat-sdk/wrapper', dependency_15], ['pragmate-ui/tabs', dependency_16], ['@aimpact/ailearn-app/shared/hooks', dependency_17], ['pragmate-ui/list', dependency_18], ['@beyond-js/kernel/styles', dependency_19]]);
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

      /*****************************************
      INTERNAL MODULE: ./chat/components/gallery
      *****************************************/

      ims.set('./chat/components/gallery', {
        hash: 2979293421,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Attachments = Attachments;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          var _startup = require("@aimpact/ailearn-sdk/startup");
          var _lightbox = require("@aimpact/ailearn-app/components/lightbox");
          function Attachments({
            assets
          }) {
            const isValid = Array.isArray(assets) && assets.length > 0;
            const [open, setOpen] = _react.default.useState(false);
            if (!isValid) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "article-gallery"
            }, assets.map(item => {
              const src = `${_startup.sdkConfig.apis.ailearn}${item.picture}`;
              return _react.default.createElement(_image.Image, {
                key: item.id,
                src: src,
                onClick: () => setOpen(true)
              });
            })), _react.default.createElement(_lightbox.YALightbox, {
              open: open,
              onClose: () => setOpen(false),
              slides: assets.map(item => ({
                src: `${_startup.sdkConfig.apis.ailearn}${item.picture}`
              }))
            }));
          }
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
        hash: 3230334713,
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
          var _gallery = require("./gallery");
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
            const {
              assets
            } = store.model.getMaterials();
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_gallery.Attachments, {
              assets: assets
            }), _react.default.createElement("div", {
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
        hash: 2013281985,
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
              synthesis,
              assets
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ltYWdlIiwiX3N0YXJ0dXAiLCJfbGlnaHRib3giLCJBdHRhY2htZW50cyIsImFzc2V0cyIsImlzVmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvcGVuIiwic2V0T3BlbiIsIm1hcCIsIml0ZW0iLCJzcmMiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInBpY3R1cmUiLCJJbWFnZSIsImtleSIsIllBTGlnaHRib3giLCJvbkNsb3NlIiwic2xpZGVzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZW50aXR5IiwiQXBwSWNvbiIsIm1vZHVsZSIsIl9tYXJrZG93biIsIl9tb2RhbCIsIl9nYWxsZXJ5IiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJzaG93SW1hZ2VNb2RhbCIsInNldFNob3dJbWFnZU1vZGFsIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJpbWFnZURpbWVuc2lvbnMiLCJzZXRJbWFnZURpbWVuc2lvbnMiLCJnZXRNYXRlcmlhbHMiLCJjdXJyZW50IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWciLCJvbmxvYWQiLCJ3aWR0aCIsIm5hdHVyYWxXaWR0aCIsImhlaWdodCIsIm5hdHVyYWxIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DbG9zZU1vZGFsIiwiRW1wdHlDYXJkIiwidGV4dCIsImdsb2JhbFRleHRzIiwiYWN0aXZpdGllcyIsImNvbnRhaW5lclN0eWxlIiwiTWFya2Rvd24iLCJNb2RhbCIsInNob3ciLCJzdHlsZSIsImFsdCIsIl90YWJzIiwiX21hcmtkb3duQ29udGVudCIsIl9vYmplY3RpdmVzIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlDb250ZW50IiwiYXJ0aWNsZSIsImR5c2xleGlhIiwiYXVkaW9zIiwic3ludGhlc2lzIiwibW9kZSIsIkFwcFdyYXBwZXIiLCJhY2Nlc3NpYmlsaXR5IiwiY29udHJvbCIsInNldENvbnRyb2wiLCJrZXlzIiwiT2JqZWN0IiwidG90YWxBdWRpb3MiLCJhdWRpb1NyYyIsInVybCIsInRhYnMiLCJvbkNsaWNrVGFiIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInRhYiIsIlRhYiIsInB1c2giLCJvYmplY3RpdmVzIiwiZXhwYW5kIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJDb250cm9scyIsIkFjdGl2aXR5T2JqZWN0aXZlcyIsIkFjdGl2aXR5RGVmaW5pdGlvbiIsImV4ZXJjaXNlIiwib3V0cHV0IiwiQWN0aXZpdHlBdWRpbyIsIkFwcEljb25CdXR0b24iLCJhc2lkZUNvbnRlbnQiLCJUYWJzIiwiX2hvb2tzMiIsIl9kZXNrdG9wIiwiX21vYmlsZSIsIkNoYXRDb250cm9sIiwiYXNzaWdubWVudElkIiwic2hvd0NvaW5zTW9kYWwiLCJpdGVtcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwiY2xvc2VNb2RhbCIsInJlYWR5IiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvcGVydGllcyIsImZvdW5kIiwiUGFnZUxvYWRlciIsImZldGNoaW5nIiwiY29udGV4dFZhbHVlIiwiTW9kdWxlQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJpbmNsdWRlcyIsIkRlc2t0b3BDaGF0IiwiTW9iaWxlQ29udGVudCIsIkNvaW5zTW9kYWwiLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiLCJfZnVsbENvbnRhaW5lciIsIl9tYWluQ29udGVudExheW91dCIsIl9zcGxpdENvbnRhaW5lciIsImxheW91dCIsIk1haW5Db250ZW50TGF5b3V0Q29udGFpbmVyIiwiRnVsbENoYXRDb250YWluZXIiLCJTcGxpdENoYXRDb250YWluZXIiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jaGF0IiwiX2hlYWRlciIsIl9jb250ZW50IiwidG9nZ2xlRmxvYXRpbmciLCJ0ZXN0aW5nIiwiUGFnZUNvbnRhaW5lciIsImFjdGlvbnMiLCJ0YWxrdG9BSSIsInNldFVwZGF0ZSIsInVzZUJpbmRlciIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJQYW5lcyIsInRhc2siLCJfbGlzdCIsIl9pdGVtIiwiTGlzdCIsIkFjdGl2aXR5T2JqZWN0aXZlIiwib2JqZWN0aXZlIiwiX2NvbnRyb2wiLCJDaGF0VmlldyIsInVyaSIsInZhcnMiLCJnZXQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCJdLCJzb3VyY2VzIjpbIi90cy9jaGF0L2NoYXQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvY2hhdC9za2VsZXRvbi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZW50cmFuY2UtZGl2LnRzeCIsIi90cy9jaGF0L2NvbXBvbmVudHMvZ2FsbGVyeS50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL21hcmtkb3duLWNvbnRlbnQudHN4IiwiL3RzL2NoYXQvY29udGVudC9pbmRleC50c3giLCIvdHMvY2hhdC9jb250cm9sLnRzeCIsIi90cy9jaGF0L2Rlc2t0b3AudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL2Z1bGwtY29udGFpbmVyLnRzeCIsIi90cy9jaGF0L2xheW91dHMvbWFpbi1jb250ZW50LWxheW91dC50c3giLCIvdHMvY2hhdC9sYXlvdXRzL3NwbGl0LWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9tb2JpbGUudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9hY3Rpdml0eS50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2luZGV4LnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvaXRlbS50c3giLCIvdHMvY2hhdC92aWV3LnRzeCIsIi90cy9jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLGNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFJLE1BQUEsR0FBQUosT0FBQTtVQUNBLElBQUFLLFNBQUEsR0FBQUwsT0FBQTtVQUVPO1VBQVUsU0FBVU0sSUFBSUEsQ0FBQTtZQUM5QixNQUFNO2NBQUVDLEtBQUs7Y0FBRUM7WUFBaUIsQ0FBRSxHQUFHLElBQUFMLFFBQUEsQ0FBQU0sZ0JBQWdCLEdBQUU7WUFDdkQsTUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07WUFDM0IsTUFBTUMsU0FBUyxHQUFpRCxFQUFFO1lBRWxFLElBQUFWLE1BQUEsQ0FBQVcsUUFBUSxFQUFDTCxLQUFLLENBQUNNLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDekMsSUFBQVosTUFBQSxDQUFBVyxRQUFRLEVBQUNMLEtBQUssQ0FBQztZQUVmLElBQUksQ0FBQ0EsS0FBSyxDQUFDTyxVQUFVLEVBQUU7Y0FDdEJILFNBQVMsQ0FBQ0ksT0FBTyxHQUFHLE1BQUs7Z0JBQ3hCUCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7Y0FDeEIsQ0FBQztjQUNERyxTQUFTLENBQUNLLFFBQVEsR0FBRyxJQUFJOztZQUcxQixPQUNDakIsTUFBQSxDQUFBa0IsT0FBQSxDQUFBQyxhQUFBLENBQUNoQixjQUFBLENBQUFpQixtQkFBbUI7Y0FDbkJDLFFBQVEsRUFB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