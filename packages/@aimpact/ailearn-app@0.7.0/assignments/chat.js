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
        hash: 1237382546,
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
            }, _react.default.createElement("img", {
              src: selectedImage,
              alt: "Preview"
            })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwiX2NoYXRDb21wb25lbnQiLCJfY29udGV4dCIsIl9lbXB0eSIsIl9za2VsZXRvbiIsIkNoYXQiLCJzdG9yZSIsInNldFNob3dDb2luc01vZGFsIiwidXNlTW9kdWxlQ29udGV4dCIsImNoYXRJZCIsImNoYXRTcGVjcyIsInVzZVN0b3JlIiwibW9kZWwiLCJoYXNDcmVkaXRzIiwib25DbGljayIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwicmVhbHRpbWUiLCJ0cmFja2luZyIsImxhbmd1YWdlIiwib25MaXN0ZW5DaGF0IiwiaWQiLCJhY3Rpdml0eSIsImNoYXRNb2RlbCIsInNrZWxldG9uIiwiQ2hhdFNrZWxldG9uIiwiZW1wdHkiLCJFbXB0eUNoYXQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX3VpIiwiX3dyYXBwZXIiLCJNb2JpbGVDaGF0IiwiRnJhZ21lbnQiLCJzZXR0aW5ncyIsImFwcEljb24iLCJBY3Rpdml0eUhlYWRlciIsInRpdGxlIiwidHlwZSIsIl9lbnRyYW5jZURpdiIsIkVudHJhbmNlRGl2IiwidGV4dHMiLCJjaGF0IiwiZGVzY3JpcHRpb24iLCJjcmVkaXRzIiwibm9DcmVkaXRzIiwiRW1wdHkiLCJfZnJhbWVyTW90aW9uIiwiY2hpbGRyZW4iLCJhcyIsImF0dHJzIiwiQ29udHJvbCIsIm1vdGlvbiIsImhhc0FuaW1hdGVkIiwic2V0SGFzQW5pbWF0ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleHBvcnRzIiwiX2ltYWdlIiwiX3N0YXJ0dXAiLCJfbGlnaHRib3giLCJBdHRhY2htZW50cyIsImFzc2V0cyIsImlzVmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJvcGVuIiwic2V0T3BlbiIsIm1hcCIsIml0ZW0iLCJzcmMiLCJzZGtDb25maWciLCJhcGlzIiwiYWlsZWFybiIsInBpY3R1cmUiLCJJbWFnZSIsImtleSIsIllBTGlnaHRib3giLCJvbkNsb3NlIiwic2xpZGVzIiwiX2ljb25zIiwiZnVsbENvbnRhaW5lciIsImNscyIsIkNvbnRhaW5lciIsInByb3BzIiwiRW50aXR5SW1hZ2UiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZW50aXR5IiwiQXBwSWNvbiIsIm1vZHVsZSIsIl9tYXJrZG93biIsIl9tb2RhbCIsIl9nYWxsZXJ5IiwiTWFya2Rvd25Db250ZW50IiwibmFtZSIsImNvbnRlbnQiLCJyZWYiLCJ1c2VSZWYiLCJzaG93SW1hZ2VNb2RhbCIsInNldFNob3dJbWFnZU1vZGFsIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJpbWFnZURpbWVuc2lvbnMiLCJzZXRJbWFnZURpbWVuc2lvbnMiLCJnZXRNYXRlcmlhbHMiLCJjdXJyZW50IiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbWciLCJvbmxvYWQiLCJ3aWR0aCIsIm5hdHVyYWxXaWR0aCIsImhlaWdodCIsIm5hdHVyYWxIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DbG9zZU1vZGFsIiwiRW1wdHlDYXJkIiwidGV4dCIsImdsb2JhbFRleHRzIiwiYWN0aXZpdGllcyIsImNvbnRhaW5lclN0eWxlIiwiTWFya2Rvd24iLCJNb2RhbCIsInNob3ciLCJhbHQiLCJfdGFicyIsIl9tYXJrZG93bkNvbnRlbnQiLCJfb2JqZWN0aXZlcyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5Q29udGVudCIsImFydGljbGUiLCJkeXNsZXhpYSIsImF1ZGlvcyIsInN5bnRoZXNpcyIsIm1vZGUiLCJBcHBXcmFwcGVyIiwiYWNjZXNzaWJpbGl0eSIsImNvbnRyb2wiLCJzZXRDb250cm9sIiwia2V5cyIsIk9iamVjdCIsInRvdGFsQXVkaW9zIiwiYXVkaW9TcmMiLCJ1cmwiLCJ0YWJzIiwib25DbGlja1RhYiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0YWIiLCJUYWIiLCJwdXNoIiwib2JqZWN0aXZlcyIsImV4cGFuZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiQ29udHJvbHMiLCJBY3Rpdml0eU9iamVjdGl2ZXMiLCJBY3Rpdml0eURlZmluaXRpb24iLCJleGVyY2lzZSIsIm91dHB1dCIsIkFjdGl2aXR5QXVkaW8iLCJBcHBJY29uQnV0dG9uIiwiYXNpZGVDb250ZW50IiwiVGFicyIsIl9ob29rczIiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJDaGF0Q29udHJvbCIsImFzc2lnbm1lbnRJZCIsInNob3dDb2luc01vZGFsIiwiaXRlbXMiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsImNsb3NlTW9kYWwiLCJyZWFkeSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFByb3BlcnRpZXMiLCJmb3VuZCIsIlBhZ2VMb2FkZXIiLCJmZXRjaGluZyIsImNvbnRleHRWYWx1ZSIsIk1vZHVsZUNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiaW5jbHVkZXMiLCJEZXNrdG9wQ2hhdCIsIk1vYmlsZUNvbnRlbnQiLCJDb2luc01vZGFsIiwib25Db25zdW1lIiwiY29uc3VtZUNvaW5zIiwiX2Z1bGxDb250YWluZXIiLCJfbWFpbkNvbnRlbnRMYXlvdXQiLCJfc3BsaXRDb250YWluZXIiLCJsYXlvdXQiLCJNYWluQ29udGVudExheW91dENvbnRhaW5lciIsIkZ1bGxDaGF0Q29udGFpbmVyIiwiU3BsaXRDaGF0Q29udGFpbmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfY2hhdCIsIl9oZWFkZXIiLCJfY29udGVudCIsInRvZ2dsZUZsb2F0aW5nIiwidGVzdGluZyIsIlBhZ2VDb250YWluZXIiLCJhY3Rpb25zIiwidGFsa3RvQUkiLCJzZXRVcGRhdGUiLCJ1c2VCaW5kZXIiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiUGFuZXMiLCJ0YXNrIiwiX2xpc3QiLCJfaXRlbSIsIkxpc3QiLCJBY3Rpdml0eU9iamVjdGl2ZSIsIm9iamVjdGl2ZSIsIl9jb250cm9sIiwiQ2hhdFZpZXciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlcyI6WyIvdHMvY2hhdC9jaGF0L2luZGV4LnRzeCIsIi90cy9jaGF0L2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L2NoYXQvc2tlbGV0b24udHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2VudHJhbmNlLWRpdi50c3giLCIvdHMvY2hhdC9jb21wb25lbnRzL2dhbGxlcnkudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL2NoYXQvY29tcG9uZW50cy9tYXJrZG93bi1jb250ZW50LnRzeCIsIi90cy9jaGF0L2NvbnRlbnQvaW5kZXgudHN4IiwiL3RzL2NoYXQvY29udHJvbC50c3giLCIvdHMvY2hhdC9kZXNrdG9wLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9mdWxsLWNvbnRhaW5lci50c3giLCIvdHMvY2hhdC9sYXlvdXRzL21haW4tY29udGVudC1sYXlvdXQudHN4IiwiL3RzL2NoYXQvbGF5b3V0cy9zcGxpdC1jb250YWluZXIudHN4IiwiL3RzL2NoYXQvbW9iaWxlLnRzeCIsIi90cy9jaGF0L29iamVjdGl2ZXMvYWN0aXZpdHkudHN4IiwiL3RzL2NoYXQvb2JqZWN0aXZlcy9pbmRleC50c3giLCIvdHMvY2hhdC9vYmplY3RpdmVzL2l0ZW0udHN4IiwiL3RzL2NoYXQvdmlldy50c3giLCIvdHMvY29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxjQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxTQUFBLEdBQUFMLE9BQUE7VUFFTztVQUFVLFNBQVVNLElBQUlBLENBQUE7WUFDOUIsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQWlCLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLGdCQUFnQixHQUFFO1lBQ3ZELE1BQU1DLE1BQU0sR0FBR0gsS0FBSyxDQUFDRyxNQUFNO1lBQzNCLE1BQU1DLFNBQVMsR0FBaUQsRUFBRTtZQUVsRSxJQUFBVixNQUFBLENBQUFXLFFBQVEsRUFBQ0wsS0FBSyxDQUFDTSxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3pDLElBQUFaLE1BQUEsQ0FBQVcsUUFBUSxFQUFDTCxLQUFLLENBQUM7WUFFZixJQUFJLENBQUNBLEtBQUssQ0FBQ08sVUFBVSxFQUFFO2NBQ3RCSCxTQUFTLENBQUNJLE9BQU8sR0FBRyxNQUFLO2dCQUN4QlAsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2NBQ3hCLENBQUM7Y0FDREcsU0FBUyxDQUFDSyxRQUFRLEdBQUcsSUFBSTs7WUFHMUIsT0FDQ2pCLE1BQUEsQ0FBQWtCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaEIsY0FBQSxDQUFBaUIsbUJBQW1CO2NBQ25CQyxRQUFRLEVBQUViLEtBQUss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