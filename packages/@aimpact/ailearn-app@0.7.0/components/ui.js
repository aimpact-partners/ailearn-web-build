System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.8/image", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.14/texts", "clsx@2.1.1", "pragmate-ui@1.0.8/spinner", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/core", "driver.js@1.3.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, ErrorRenderer, VerificationCodeInput, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, EntityImageType, EntityImage, ZoomableImage, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
  _export({
    ActivityAudio: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AnimatedContainer: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    Chip: void 0,
    ContentEditable: void 0,
    Textarea: void 0,
    CoinsModal: void 0,
    OwnerImage: void 0,
    RequestCreditsForm: void 0,
    EmptyCard: void 0,
    ErrorRenderer: void 0,
    VerificationCodeInput: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useTextsCallback: void 0,
    EntityImageType: void 0,
    EntityImage: void 0,
    ZoomableImage: void 0,
    AppLoader: void 0,
    PreloadScreen: void 0,
    PageLoader: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RadioButton: void 0,
    RadioGroup: void 0,
    SkeletonText: void 0,
    ThemeSwitch: void 0,
    DriverTourContainer: void 0,
    TourStep: void 0,
    useDriverTour: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_pragmateUi108Base) {
      dependency_5 = _pragmateUi108Base;
    }, function (_pragmateUi108Icons) {
      dependency_6 = _pragmateUi108Icons;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi108Image) {
      dependency_8 = _pragmateUi108Image;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Form) {
      dependency_10 = _pragmateUi108Form;
    }, function (_pragmateUi108Modal) {
      dependency_11 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Empty) {
      dependency_13 = _pragmateUi108Empty;
    }, function (_pragmateUi108Alert) {
      dependency_14 = _pragmateUi108Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0114Texts) {
      dependency_16 = _beyondJsKernel0114Texts;
    }, function (_clsx2) {
      dependency_17 = _clsx2;
    }, function (_pragmateUi108Spinner) {
      dependency_18 = _pragmateUi108Spinner;
    }, function (_beyondJsKernel0114Routing) {
      dependency_19 = _beyondJsKernel0114Routing;
    }, function (_beyondJsWidgets112Render) {
      dependency_20 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Core) {
      dependency_21 = _beyondJsKernel0114Core;
    }, function (_driverJs) {
      dependency_22 = _driverJs;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5], ['pragmate-ui/icons', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['clsx', dependency_17], ['pragmate-ui/spinner', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/widgets/render', dependency_20], ['@beyond-js/kernel/core', dependency_21], ['driver.js', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/ui');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/audio
      **********************************/
      ims.set('./activities/audio', {
        hash: 2249841843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAudio = ActivityAudio;
          var _react = require("react");
          /*bundle*/
          function ActivityAudio({
            src
          }) {
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activities/header
      ***********************************/

      ims.set('./activities/header', {
        hash: 2647478853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("span", {
              className: "header__title"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title)), children));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 2003207470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/

      ims.set('./animation-container', {
        hash: 1181620448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function AnimatedContainer({
            className,
            children,
            as = 'span',
            ...props
          }) {
            const Component = (0, _framerMotion.motion)(as);
            const attrs = {
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              initial: {
                opacity: 0
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              },
              ...props
            };
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              ...attrs
            }, children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./audio-player
      ******************************/

      ims.set('./audio-player', {
        hash: 1039808834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            url
          }) {
            if (!src && !url) {
              console.warn('not audio to process');
              return null;
            }
            src = url ?? URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mpeg",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./battery
      *************************/

      ims.set('./battery', {
        hash: 1193312247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Battery = Battery;
          var _react = require("react");
          /*bundle*/
          function Battery({
            percent = 20
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              ref.current.style.width = `${percent}%`;
            }, [percent]);
            const cls = `percentage ${percent < 20 ? 'low' : percent < 60 ? 'medium' : 'high'}`;
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: cls
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/

      ims.set('./card/content', {
        hash: 822507004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardContent = CardContent;
          var _react = require("react");
          /*bundle */
          function CardContent({
            children,
            className,
            option = 'row',
            simple
          }) {
            const cls = `card__content display-${option} ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./card/footer
      *****************************/

      ims.set('./card/footer', {
        hash: 1147762825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardFooter = CardFooter;
          var _react = require("react");
          /*bundle */
          function CardFooter({
            children,
            className,
            simple
          }) {
            const cls = `card__footer ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("footer", {
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/image
      ****************************/

      ims.set('./card/image', {
        hash: 3826144859,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardImage = CardImage;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function CardImage({
            src,
            className,
            alt,
            children
          }) {
            const cls = `card__top ${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/index
      ****************************/

      ims.set('./card/index', {
        hash: 1099081939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _entityImage = require("../image/entity-image");
          /*bundle*/
          function Card({
            link,
            data: item,
            children,
            disabled,
            simple,
            className,
            type
          }) {
            const Container = !disabled && link ? _components.Link : 'span';
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = `card ${className}`;
            if (disabled) clsCard += ' is-disabled';
            if (simple) clsCard += ' is-simple';
            const onClick = () => {
              globalThis?.sessionStorage.setItem('navigation.view', 'true');
            };
            return _react.default.createElement(Container, {
              ...attrs,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsCard
            }, item && _react.default.createElement(_entityImage.EntityImage, {
              className: "card__top",
              src: item.picture,
              alt: item.title,
              type: type
            }), children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./chip
      **********************/

      ims.set('./chip', {
        hash: 3681402713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          /*bundle*/
          function Chip({
            variant,
            className,
            children
          }) {
            const chipBaseClass = 'chip';
            const variantClass = variant ? `chip--${variant}` : '';
            const combinedClass = [chipBaseClass, variantClass, className].filter(Boolean).join(' ');
            return _react.default.createElement("div", {
              className: combinedClass
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 2108788465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = ContentEditable;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useContainer = require("./use-container");
          var _textarea = require("./textarea");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function ContentEditable(props) {
            const {
              onSave,
              selector = 'div',
              as = 'div',
              className,
              content,
              type = 'input',
              placeholder,
              lineBreak = true,
              editable = true,
              name
            } = props;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [original, setOriginal] = _react.default.useState(content);
            const Control = as || selector;
            const {
              ref: contentRef,
              value,
              setValue
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            if (!editable) {
              return _react.default.createElement(Control, {
                ref: contentRef
              }, value);
            }
            if (isEditable && type === 'textarea') return _react.default.createElement(_textarea.Textarea, {
              original: original,
              setOriginal: setOriginal,
              setEditable: setIsEditable,
              ...props,
              value: value
            });
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? 'pui-editable-selector' : '';
            const attrs = {
              onClick: !isEditable ? toggleEdit : undefined
            };
            const handlePaste = e => {
              e.preventDefault();
              const text = e.clipboardData.getData('text/plain');
              document.execCommand('insertText', false, text);
            };
            const handleKeyDown = e => {
              if (lineBreak && e.key === 'Enter') {
                e.preventDefault();
                // Optionally, trigger save or another action when Enter is pressed
                // handleSave();
              }
            };
            const onBlur = async event => {
              event.stopPropagation();
              const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setIsEditable(false);
              if (content === original) return;
              const data = {
                name,
                value: content
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(content);
              await onSave(specs);
            };
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true,
              onPaste: isEditable ? handlePaste : undefined,
              onKeyDown: isEditable ? handleKeyDown : undefined
            }, isEditable ? value : _react.default.createElement(_markdown.Markdown, {
              content: value
            })), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./content-editable/textarea
      *******************************************/

      ims.set('./content-editable/textarea', {
        hash: 1256781792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function Textarea({
            onSave,
            className,
            content,
            name,
            editable,
            original,
            setOriginal,
            setEditable
          }) {
            const ref = _react.default.useRef(null);
            // const { ref: contentRef, value } = useClickContainer(content, placeholder, isEditable);
            const toggleEdit = () => {
              setEditable(!editable);
              if (!editable) {
                setTimeout(() => {
                  const el = ref.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable pui-content-editable--textarea${className ? ` ${className}` : ''}`;
            const [value, setValue] = _react.default.useState(content);
            const attrs = {};
            _react.default.useEffect(() => {
              setTimeout(() => {
                const textarea = ref.current?.querySelector('textarea');
                if (textarea) {
                  textarea.focus();
                  const length = textarea.value.length;
                  textarea.setSelectionRange(length, length); // Coloca el cursor al final del texto
                }
              }, 0);
            }, []);
            const onBlur = async event => {
              event.stopPropagation();
              // const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setEditable(false);
              if (value === original) return;
              const data = {
                name,
                value
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(value);
              await onSave(specs);
            };
            const onChange = e => {
              setValue(e.target.value);
            };
            return _react.default.createElement("div", {
              ref: ref,
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(_form.Textarea, {
              name: name,
              onChange: onChange,
              value: value
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/types
      ****************************************/

      ims.set('./content-editable/types', {
        hash: 2246595003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./content-editable/use-container
      ************************************************/

      ims.set('./content-editable/use-container', {
        hash: 1642257852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer(content, placeholder, isEditable = false) {
            const ref = _react.default.useRef(null);
            const [isOutSide] = _react.default.useState(false);
            const [value, setValue] = _react.default.useState({
              edited: false,
              content: ''
            });
            const contentValue = value?.edited ? value.content : content;
            let toShow = isEditable ? contentValue ? contentValue : '' : contentValue === '' || contentValue === undefined ? placeholder : contentValue || placeholder || '';
            return {
              ref,
              isOutSide,
              value: toShow,
              setValue
            };
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./credits/animations
      ************************************/

      ims.set('./credits/animations', {
        hash: 3779295974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /*************************************
      INTERNAL MODULE: ./credits/coins-modal
      *************************************/

      ims.set('./credits/coins-modal', {
        hash: 3406309927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _requestCredits = require("./request-credits");
          /*bundle*/ //the nexts are in the same bundle

          function CoinsModal({
            owner,
            globalTexts,
            show,
            onClose,
            onConsume,
            onSuccess,
            type = 'generative'
          }) {
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement(_requestCredits.RequestCreditsForm, {
              onSuccess: onSuccess ?? onClose,
              onClose: onClose,
              onCancel: onClose,
              onConsume: onConsume,
              type: type,
              globalTexts: globalTexts,
              owner: owner
            }));
          }
          0;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/image
      *******************************/

      ims.set('./credits/image', {
        hash: 315420214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner?.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./credits/request-credits
      *****************************************/

      ims.set('./credits/request-credits', {
        hash: 2153011129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsForm = RequestCreditsForm;
          var _react = require("react");
          var _errorRenderer = require("../error-renderer");
          var _aiButton = require("../ai-button");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _processContainer = require("../page/process-container");
          var _image = require("./image");
          var _animations = require("./animations");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function RequestCreditsForm({
            onClose,
            globalTexts,
            owner,
            onConsume,
            onCancel,
            type = 'generative',
            onSuccess
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const actionTexts = globalTexts.actions;
            const texts = globalTexts.requestCredits;
            const errors = globalTexts.errors;
            onCancel = onCancel ?? onClose;
            // texts = texts.coins.modal;
            const onConfirm = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                await onConsume();
                if (onSuccess) onSuccess();
              } catch (e) {
                setError(texts.alerts.noCredits);
              } finally {
                setFetching(false);
              }
            };
            const textType = _session.sessionWrapper.user.id === owner?.id ? 'user' : 'org';
            const detailText = type === 'interactive' ? texts.detail.interactive : texts.detail[textType];
            const subtitle = type === 'interactive' ? texts.subtitle.interactive : texts.subtitle[textType];
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form request__container text-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                institution: owner?.name
              }
            }, subtitle)), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), owner && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("span", null, owner.name), _react.default.createElement("span", null, texts.ownerDescription)))), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actionTexts.cancel), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue)), _react.default.createElement("div", {
              className: "text-center"
            }, _react.default.createElement("span", {
              className: "small-text"
            }, detailText)), _react.default.createElement(_processContainer.ProcessContainer, {
              fetching: fetching,
              key: "processing"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 2709623620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 3926644465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className,
            description,
            children,
            ...props
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls,
              ...props
            }, _react.default.createElement("h3", null, text), _react.default.createElement("p", {
              className: "p1"
            }, description), children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 1442389053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          /*bundle */
          function ErrorRenderer({
            error,
            variant = 'error'
          }) {
            if (!error) return null;
            return _react.default.createElement(_alert.Alert, {
              type: variant
            }, error);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./form/verification-code-input
      **********************************************/

      ims.set('./form/verification-code-input', {
        hash: 1794617931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerificationCodeInput = VerificationCodeInput;
          var _react = require("react");
          /*bundle*/
          function VerificationCodeInput({
            length,
            value = '',
            onChange
          }) {
            // Ensure value is always a string
            const stringValue = typeof value === 'string' ? value : '';
            const [values, setValues] = _react.default.useState(() => {
              // Initialize with the provided value, padding with empty strings to match length
              const valueArray = stringValue.split('').slice(0, length);
              while (valueArray.length < length) {
                valueArray.push('');
              }
              return valueArray;
            });
            const inputsRef = _react.default.useRef([]);
            // Update internal state when value prop changes
            _react.default.useEffect(() => {
              const valueArray = stringValue.split('').slice(0, length);
              while (valueArray.length < length) {
                valueArray.push('');
              }
              setValues(valueArray);
            }, [stringValue, length]);
            const handleChange = (value, index) => {
              const newValues = [...values];
              newValues[index] = value.slice(-1);
              setValues(newValues);
              const event = {
                target: {
                  value: newValues.join('')
                },
                currentTarget: {
                  value: newValues.join('')
                },
                type: 'change'
              };
              onChange(event);
              if (value && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
              }
            };
            const handleKeyDown = (e, index) => {
              if (e.key === 'Backspace' && !values[index] && index > 0) {
                setValues(prev => {
                  const newValues = [...prev];
                  newValues[index - 1] = '';
                  return newValues;
                });
                inputsRef.current[index - 1]?.focus();
              }
            };
            const handlePaste = e => {
              const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
              setValues(pasteData);
              const event = {
                target: {
                  value: pasteData.join('')
                },
                currentTarget: {
                  value: pasteData.join('')
                },
                type: 'change'
              };
              onChange(event);
              pasteData.forEach((value, index) => {
                if (inputsRef.current[index]) {
                  inputsRef.current[index].value = value;
                }
              });
              inputsRef.current[pasteData.length - 1]?.focus();
              e.preventDefault();
            };
            return _react.default.createElement("div", {
              className: "verification-code-input"
            }, values.map((value, index) => _react.default.createElement("input", {
              key: index,
              type: "text",
              value: value,
              maxLength: 1,
              ref: el => inputsRef.current[index] = el,
              onChange: e => handleChange(e.target.value, index),
              onKeyDown: e => handleKeyDown(e, index),
              onPaste: handlePaste
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./header-card/header-counter
      ********************************************/

      ims.set('./header-card/header-counter', {
        hash: 3049264674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          /**
           * TODO: Review this component @carlos
           * @param param0
           * @returns
           */
          const HeaderCounterItem = ({
            item,
            index
          }) => {
            const StatusHeaderContent = ({
              status
            }) => {
              switch (status) {
                case 'done':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-done"
                  }, index);
                case 'waiting':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-waiting"
                  }, index);
                case 'current':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-current"
                  }, index);
                default:
                  return _react.default.createElement(_icons.Icon, {
                    className: "lg",
                    icon: 'refresh'
                  });
              }
            };
            return _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: item.url
            }, _react.default.createElement(StatusHeaderContent, {
              status: item.status
            }));
          };
          /*bundle */
          function HeaderCounter({
            list,
            className
          }) {
            const cls = `header-counter__container ${className ? ` ${className}` : ''}`;
            const renderedItems = list.map((item, index) => _react.default.createElement(HeaderCounterItem, {
              item: item,
              key: index,
              index: index + 1
            }));
            return _react.default.createElement("div", {
              className: cls
            }, renderedItems);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./header-card/header-title
      ******************************************/

      ims.set('./header-card/header-title', {
        hash: 1777028730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          /*bundle*/
          function HeaderTitle({
            title
          }) {
            return _react.default.createElement("section", {
              className: "header-card__title-container"
            }, _react.default.createElement("h3", {
              className: "h1 header-card__title-text"
            }, title));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./header-card/index
      ***********************************/

      ims.set('./header-card/index', {
        hash: 1274014296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCard = HeaderCard;
          var _headerCounter = require("./header-counter");
          var _headerTitle = require("./header-title");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function HeaderCard({
            className,
            children,
            image,
            alt,
            option = 'dark',
            title,
            list
          }) {
            const cls = `header-card__container option-${option}${className ? ` ${className}` : ``}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-card__text"
            }, title && _react.default.createElement(_headerTitle.HeaderTitle, {
              title: title
            }), _react.default.createElement("section", {
              className: "header-card__content"
            }, children)), list && _react.default.createElement(_headerCounter.HeaderCounter, {
              list: list,
              className: "header-card__counter"
            }), image && _react.default.createElement(_image.Image, {
              src: image,
              alt: alt,
              className: "header-card__image"
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/use-confetti
      ************************************/

      ims.set('./hooks/use-confetti', {
        hash: 679209707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConfetti = useConfetti;
          var _jsConfetti = require("js-confetti");
          var _react = require("react");
          /*bundle*/
          function useConfetti(props) {
            const specs = {
              confettiNumber: 300,
              confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
              emojis: ['🎉', '🎊'],
              emojiSize: 18
            };
            _react.default.useEffect(() => {
              const jsConfetti = new _jsConfetti.default();
              jsConfetti.addConfetti({
                ...specs,
                ...props
              });
            }, []);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./hooks/use-texts-callback
      ******************************************/

      ims.set('./hooks/use-texts-callback', {
        hash: 2445678329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTextsCallback = useTextsCallback;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTextsCallback(specifier, callback) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                setTexts(value);
                setReady(modelTexts.ready);
                if (modelTexts.ready) callback(value);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./image/entity-image
      ************************************/

      ims.set('./image/entity-image', {
        hash: 165707786,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityImage = EntityImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function EntityImage({
            src,
            ratio,
            alt = '',
            entity = 'activity',
            type,
            children,
            size = 'sm',
            preload,
            className,
            ...props
          }) {
            let cls = `entity-image ${className || ''} ${entity}`;
            if (ratio) cls += ` img--${ratio}`;
            if (!src || src === '') {
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.webp`;
            }
            // Validate and process the src property outside the return statement
            let processedSrc = src;
            if (src && src !== '') {
              const hasQueryString = src.includes('?');
              const separator = hasQueryString ? '&' : '?';
              processedSrc = `${src}${separator}size=${size}`;
            }
            if (preload) return _react.default.createElement("div", {
              className: `${cls} entity-image--preload`
            });
            return _react.default.createElement(_image.Image, {
              ...props,
              src: processedSrc,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./image/zoomable
      ********************************/

      ims.set('./image/zoomable', {
        hash: 1508287648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ZoomableImage = ZoomableImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _clsx = require("clsx");
          /*bundle*/
          function ZoomableImage({
            src,
            alt = '',
            className = ''
          }) {
            const [open, setOpen] = (0, _react.useState)(false);
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: (0, _clsx.default)('zoomable-image', className),
              onClick: handleOpen,
              role: "button",
              tabIndex: 0,
              "aria-label": "Expand image",
              onKeyPress: e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen();
              }
            }, _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: "zoomable-image__img"
            })), open ? _react.default.createElement(_modal.Modal, {
              show: open,
              onClose: handleClose,
              className: "zoomable-image__modal"
            }, _react.default.createElement("div", {
              className: "zoomable-image__modal-content"
            }, _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: "zoomable-image__modal-img"
            }))) : null);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./loaders/loader
      ********************************/

      ims.set('./loaders/loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./loaders/pre-load
      **********************************/

      ims.set('./loaders/pre-load', {
        hash: 2462171743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: 'primary'
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 2281835143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageLoader = PageLoader;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function PageLoader({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `page-loader-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./page/page-container
      *************************************/

      ims.set('./page/page-container', {
        hash: 1267086459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function PageContainer({
            children,
            className,
            fetching,
            isForm = false,
            fullHeight = true,
            size = undefined
          }) {
            const SIZES = {
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            let cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
            if (isForm) cls += ' page__container--form';
            if (fullHeight) cls += ' full-height';
            return _react.default.createElement("div", {
              className: cls
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 3085160751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching,
            opacity = 1
          }) {
            if (!fetching) return null;
            let cls = `process-container${className ? ` ${className}` : ''}`;
            if (opacity) cls += ` opacity-${opacity}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/title
      ****************************/

      ims.set('./page/title', {
        hash: 3783730710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          var _skeletonText = require("../skeleton-text");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function PageTitle({
            preload,
            title,
            children,
            href,
            as = 'h1'
          }) {
            const Control = as;
            if (preload) {
              return _react.default.createElement("header", {
                className: "page-title__section",
                style: {
                  height: '42px'
                }
              }, _react.default.createElement(_skeletonText.SkeletonText, {
                height: "8px",
                width: "100px"
              }), children);
            }
            let attrs = {
              onClick: undefined,
              className: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href),
                className: 'is--link'
              };
            }
            return _react.default.createElement("header", {
              className: "page-title__section"
            }, _react.default.createElement(Control, {
              ...attrs
            }, title), children);
          }
          /*bundle*/
          function PageSubtitle({
            children,
            href
          }) {
            let attrs = {
              onClick: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href)
              };
            }
            return _react.default.createElement("span", {
              className: "post-title",
              ...attrs
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./process-button
      ********************************/

      ims.set('./process-button', {
        hash: 3041374255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessButton = ProcessButton;
          exports.ProcessIconButton = ProcessIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ProcessButton({
            children,
            onClick,
            disabled,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async () => {
              setProcessing(true);
              await onClick();
              setProcessing(false);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
          /*bundle*/
          function ProcessIconButton({
            children,
            disabled,
            className,
            onClick,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async event => {
              event.stopPropagation();
              setProcessing(true);
              await onClick();
              setTimeout(() => {
                setProcessing(false);
              }, 300);
            };
            if (processing) {
              return _react.default.createElement("button", {
                className: "process-button process-button--fetching"
              }, _react.default.createElement(_components.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const cls = className ? `${className} process-button` : 'process-button';
            return _react.default.createElement(_icons.AppIconButton, {
              className: cls,
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./radio/index
      *****************************/

      ims.set('./radio/index', {
        hash: 2799162414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // components/radioButton.tsx

          function RadioButton({
            label,
            onChange,
            ...rest
          }) {
            const inputRef = React.useRef(null);
            const handleLabelChange = event => {
              if (inputRef.current) {
                const changeEvent = new Event('change', {
                  bubbles: true,
                  cancelable: true
                });
                inputRef.current.dispatchEvent(changeEvent);
              }
            };
            return React.createElement("label", {
              className: "radio-button",
              onChange: handleLabelChange
            }, React.createElement("span", null, React.createElement("input", {
              type: "radio",
              ref: inputRef,
              onChange: onChange,
              ...rest
            }), React.createElement(_framerMotion.motion.div, {
              className: "radio-button__custom",
              animate: {
                scale: rest.checked ? 1.1 : 1
              },
              transition: {
                duration: 0.2
              }
            }, rest.checked && React.createElement(_framerMotion.motion.div, {
              className: "radio-button__inner",
              layout: true
            }))), label);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./radio/radio-group
      ***********************************/

      ims.set('./radio/radio-group', {
        hash: 40498085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          /*bundle*/ // components/radio-group.tsx

          function RadioGroup({
            children,
            value,
            onChange
          }) {
            return React.createElement("div", null, React.Children.map(children, child => {
              // Check if child is a valid element and if it conforms to the RadioButtonWithProps type
              if (React.isValidElement(child) && typeof child.props.value === 'string') {
                // Clone the element with new props
                return React.cloneElement(child, {
                  checked: child.props.value === value,
                  onChange: () => onChange(child.props.value)
                });
              }
              return child;
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./skeleton-text
      *******************************/

      ims.set('./skeleton-text', {
        hash: 1426306877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SkeletonText = SkeletonText;
          var _react = require("react");
          /*bundle*/
          function SkeletonText(props) {
            return _react.default.createElement("span", {
              className: "skeleton-text",
              style: {
                width: props.width || '100%',
                height: props.height || '14px',
                background: props.color || '',
                borderRadius: props.radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: props.stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./theme-switcher
      ********************************/

      ims.set('./theme-switcher', {
        hash: 1901820705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitch = ThemeSwitch;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitch({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement("div", {
              className: "sidebar-item theme-switcher",
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/container
      ********************************/

      ims.set('./tour/container', {
        hash: 3036630611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DriverTourContainer = DriverTourContainer;
          var _react = require("react");
          var _useDriverTour = require("./use-driver-tour");
          var _modal = require("pragmate-ui/modal");
          var _core = require("@beyond-js/kernel/core");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DriverTourContainer({
            name,
            className,
            ready,
            texts,
            children
          }) {
            const [showConfirm, setShowConfirm] = _react.default.useState(false);
            const closeCallback = async () => {
              setShowConfirm(true);
            };
            const {
              ref,
              key
            } = (0, _useDriverTour.useDriverTour)(name, ready, closeCallback, texts);
            const checkbox = _react.default.useRef(null);
            const onClose = () => {
              if (checkbox.current.checked) {
                localStorage.setItem(key, 'done');
              }
              setShowConfirm(false);
            };
            const modalTexts = {
              es: {
                title: 'Te gustaria completar el Tour en otro momento?',
                cancel: 'No volver a ver',
                close: 'Cerrar'
              },
              en: {
                title: 'Would you like to complete the Tour later?',
                cancel: 'Do not show again',
                close: 'Close'
              },
              de: {
                title: 'Möchten Sie den Tour später abschließen?',
                cancel: 'Nicht noch einmal anzeigen',
                close: 'Schließen'
              }
            };
            const currentTexts = _core.languages.current === 'es' ? modalTexts.es : modalTexts.en;
            return _react.default.createElement("div", {
              ref: ref,
              className: className
            }, children, showConfirm && _react.default.createElement(_modal.Modal, {
              show: true,
              title: modalTexts[_core.languages.current].title,
              onClose: onClose
            }, _react.default.createElement("h6", null, currentTexts.title), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("span", {
              className: "flex-container gap-05"
            }, _react.default.createElement("input", {
              type: "checkbox",
              ref: checkbox
            }), currentTexts.cancel)), _react.default.createElement("footer", {
              className: "modal-actions mt-15 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              onClick: onClose
            }, currentTexts.close))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/tour-step
      ********************************/

      ims.set('./tour/tour-step', {
        hash: 267651650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TourStep = TourStep;
          var _react = require("react");
          /*bundle*/
          function TourStep({
            className,
            name,
            index,
            texts,
            children,
            as = 'span'
          }) {
            const keys = Object.keys(texts);
            if (!texts.hasOwnProperty(name) || !keys) {
              console.warn(`The text ${name} is not defined in the texts object`, texts);
              return null;
            }
            index = index ?? keys.indexOf(name);
            const Control = as;
            const cls = `tour-step ${className || ''}`;
            return _react.default.createElement(Control, {
              className: cls,
              "data-description": texts[name].description,
              "data-title": texts[name].title,
              "data-tour": index,
              "data-index": index
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./tour/use-driver-tour
      **************************************/

      ims.set('./tour/use-driver-tour', {
        hash: 3966853664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDriverTour = useDriverTour;
          var _react = require("react");
          var _driver = require("driver.js");
          /*bundle*/
          function useDriverTour(name, ready, closeCallback, props = {}) {
            const ref = _react.default.useRef(null);
            const key = `ailearn.${name}.tour`;
            const sessionKey = `ailearn.${name}.tour.session`;
            const saw = localStorage.getItem(key);
            const sessionSaw = sessionStorage.getItem(sessionKey);
            _react.default.useEffect(() => {
              if (!ready || saw || sessionSaw) return;
              const items = ref.current.querySelectorAll('[data-tour]');
              const steps = [];
              items?.forEach(item => {
                const {
                  title,
                  description
                } = item.dataset;
                steps.push({
                  element: item,
                  popover: {
                    title,
                    description
                  }
                });
              });
              const obj = (0, _driver.driver)({
                popoverClass: 'pui-popover-tour',
                steps,
                onNextClick: () => {
                  if (!obj.hasNextStep()) {
                    localStorage.setItem(key, 'done');
                    obj.destroy();
                    return;
                  }
                  obj.moveNext();
                  return true;
                },
                onDestroyStarted: async () => {
                  sessionStorage.setItem(sessionKey, 'seen');
                  closeCallback();
                  obj.destroy();
                },
                ...props
              });
              obj.drive();
            }, [ready]);
            return {
              ref,
              key
            };
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 1107990003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function UserData({
            label,
            type,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, type === 'organization' ? React.createElement(_icons.AppIcon, {
              variant: "on-primary",
              icon: "institution",
              className: "user-data__img"
            }) : React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/audio",
        "from": "ActivityAudio",
        "name": "ActivityAudio"
      }, {
        "im": "./activities/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./battery",
        "from": "Battery",
        "name": "Battery"
      }, {
        "im": "./card/content",
        "from": "CardContent",
        "name": "CardContent"
      }, {
        "im": "./card/footer",
        "from": "CardFooter",
        "name": "CardFooter"
      }, {
        "im": "./card/image",
        "from": "CardImage",
        "name": "CardImage"
      }, {
        "im": "./card/index",
        "from": "Card",
        "name": "Card"
      }, {
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./content-editable/index",
        "from": "ContentEditable",
        "name": "ContentEditable"
      }, {
        "im": "./content-editable/textarea",
        "from": "Textarea",
        "name": "Textarea"
      }, {
        "im": "./credits/coins-modal",
        "from": "CoinsModal",
        "name": "CoinsModal"
      }, {
        "im": "./credits/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
      }, {
        "im": "./credits/request-credits",
        "from": "RequestCreditsForm",
        "name": "RequestCreditsForm"
      }, {
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./error-renderer",
        "from": "ErrorRenderer",
        "name": "ErrorRenderer"
      }, {
        "im": "./form/verification-code-input",
        "from": "VerificationCodeInput",
        "name": "VerificationCodeInput"
      }, {
        "im": "./header-card/header-counter",
        "from": "HeaderCounter",
        "name": "HeaderCounter"
      }, {
        "im": "./header-card/header-title",
        "from": "HeaderTitle",
        "name": "HeaderTitle"
      }, {
        "im": "./header-card/index",
        "from": "HeaderCard",
        "name": "HeaderCard"
      }, {
        "im": "./hooks/use-confetti",
        "from": "useConfetti",
        "name": "useConfetti"
      }, {
        "im": "./hooks/use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
      }, {
        "im": "./image/entity-image",
        "from": "EntityImageType",
        "name": "EntityImageType"
      }, {
        "im": "./image/entity-image",
        "from": "EntityImage",
        "name": "EntityImage"
      }, {
        "im": "./image/zoomable",
        "from": "ZoomableImage",
        "name": "ZoomableImage"
      }, {
        "im": "./loaders/loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./loaders/pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./page/loader",
        "from": "PageLoader",
        "name": "PageLoader"
      }, {
        "im": "./page/page-container",
        "from": "PageContainer",
        "name": "PageContainer"
      }, {
        "im": "./page/process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./page/title",
        "from": "PageTitle",
        "name": "PageTitle"
      }, {
        "im": "./page/title",
        "from": "PageSubtitle",
        "name": "PageSubtitle"
      }, {
        "im": "./process-button",
        "from": "ProcessButton",
        "name": "ProcessButton"
      }, {
        "im": "./process-button",
        "from": "ProcessIconButton",
        "name": "ProcessIconButton"
      }, {
        "im": "./radio/index",
        "from": "RadioButton",
        "name": "RadioButton"
      }, {
        "im": "./radio/radio-group",
        "from": "RadioGroup",
        "name": "RadioGroup"
      }, {
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
      }, {
        "im": "./theme-switcher",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }, {
        "im": "./tour/container",
        "from": "DriverTourContainer",
        "name": "DriverTourContainer"
      }, {
        "im": "./tour/tour-step",
        "from": "TourStep",
        "name": "TourStep"
      }, {
        "im": "./tour/use-driver-tour",
        "from": "useDriverTour",
        "name": "useDriverTour"
      }, {
        "im": "./user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityAudio') && _export("ActivityAudio", ActivityAudio = require ? require('./activities/audio').ActivityAudio : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./activities/header').ActivityHeader : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./animation-container').AnimatedContainer : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./audio-player').AudioPlayer : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./content-editable/textarea').Textarea : value);
        (require || prop === 'CoinsModal') && _export("CoinsModal", CoinsModal = require ? require('./credits/coins-modal').CoinsModal : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./credits/image').OwnerImage : value);
        (require || prop === 'RequestCreditsForm') && _export("RequestCreditsForm", RequestCreditsForm = require ? require('./credits/request-credits').RequestCreditsForm : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'VerificationCodeInput') && _export("VerificationCodeInput", VerificationCodeInput = require ? require('./form/verification-code-input').VerificationCodeInput : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
        (require || prop === 'EntityImageType') && _export("EntityImageType", EntityImageType = require ? require('./image/entity-image').EntityImageType : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./image/entity-image').EntityImage : value);
        (require || prop === 'ZoomableImage') && _export("ZoomableImage", ZoomableImage = require ? require('./image/zoomable').ZoomableImage : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loaders/loader').AppLoader : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./loaders/pre-load').PreloadScreen : value);
        (require || prop === 'PageLoader') && _export("PageLoader", PageLoader = require ? require('./page/loader').PageLoader : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/page-container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RadioButton') && _export("RadioButton", RadioButton = require ? require('./radio/index').RadioButton : value);
        (require || prop === 'RadioGroup') && _export("RadioGroup", RadioGroup = require ? require('./radio/radio-group').RadioGroup : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./theme-switcher').ThemeSwitch : value);
        (require || prop === 'DriverTourContainer') && _export("DriverTourContainer", DriverTourContainer = require ? require('./tour/container').DriverTourContainer : value);
        (require || prop === 'TourStep') && _export("TourStep", TourStep = require ? require('./tour/tour-step').TourStep : value);
        (require || prop === 'useDriverTour') && _export("useDriverTour", useDriverTour = require ? require('./tour/use-driver-tour').useDriverTour : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwib25TdWNjZXNzIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJfYWxlcnQiLCJBbGVydCIsIlZlcmlmaWNhdGlvbkNvZGVJbnB1dCIsInN0cmluZ1ZhbHVlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidmFsdWVBcnJheSIsInNwbGl0Iiwic2xpY2UiLCJwdXNoIiwiaW5wdXRzUmVmIiwiaGFuZGxlQ2hhbmdlIiwiaW5kZXgiLCJuZXdWYWx1ZXMiLCJwcmV2IiwicGFzdGVEYXRhIiwiZm9yRWFjaCIsIm1hcCIsIm1heExlbmd0aCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiU3RhdHVzSGVhZGVyQ29udGVudCIsInN0YXR1cyIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfanNDb25mZXR0aSIsInVzZUNvbmZldHRpIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsImpzQ29uZmV0dGkiLCJhZGRDb25mZXR0aSIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwicmVhZHkiLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsInByb2Nlc3NlZFNyYyIsImhhc1F1ZXJ5U3RyaW5nIiwic2VwYXJhdG9yIiwiX2Nsc3giLCJab29tYWJsZUltYWdlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJyb2xlIiwidGFiSW5kZXgiLCJvbktleVByZXNzIiwiQXBwTG9hZGVyIiwiX3NwaW5uZXIiLCJQcmVsb2FkU2NyZWVuIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsImZ1bGxIZWlnaHQiLCJTSVpFUyIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJoZWlnaHQiLCJTa2VsZXRvblRleHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImRlIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2Vzc2lvbktleSIsInNhdyIsInNlc3Npb25TYXciLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImRhdGFzZXQiLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NoaXAudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9mb3JtL3ZlcmlmaWNhdGlvbi1jb2RlLWlucHV0LnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvaW1hZ2UvZW50aXR5LWltYWdlLnRzeCIsIi90cy9pbWFnZS96b29tYWJsZS50c3giLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90aGVtZS1zd2l0Y2hlci50c3giLCIvdHMvdG91ci9jb250YWluZXIudHN4IiwiL3RzL3RvdXIvdG91ci1zdGVwLnRzeCIsIi90cy90b3VyL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJ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System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/components/icons", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.8/image", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/modal", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.14/texts", "clsx@2.1.1", "pragmate-ui@1.0.8/spinner", "@beyond-js/kernel@0.1.14/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/core", "driver.js@1.3.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, ErrorRenderer, VerificationCodeInput, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, EntityImageType, EntityImage, ZoomableImage, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
  _export({
    ActivityAudio: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AnimatedContainer: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    Chip: void 0,
    ContentEditable: void 0,
    Textarea: void 0,
    CoinsModal: void 0,
    OwnerImage: void 0,
    RequestCreditsForm: void 0,
    EmptyCard: void 0,
    ErrorRenderer: void 0,
    VerificationCodeInput: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useTextsCallback: void 0,
    EntityImageType: void 0,
    EntityImage: void 0,
    ZoomableImage: void 0,
    AppLoader: void 0,
    PreloadScreen: void 0,
    PageLoader: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RadioButton: void 0,
    RadioGroup: void 0,
    SkeletonText: void 0,
    ThemeSwitch: void 0,
    DriverTourContainer: void 0,
    TourStep: void 0,
    useDriverTour: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_pragmateUi108Base) {
      dependency_5 = _pragmateUi108Base;
    }, function (_pragmateUi108Icons) {
      dependency_6 = _pragmateUi108Icons;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi108Image) {
      dependency_8 = _pragmateUi108Image;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Form) {
      dependency_10 = _pragmateUi108Form;
    }, function (_pragmateUi108Modal) {
      dependency_11 = _pragmateUi108Modal;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_pragmateUi108Empty) {
      dependency_13 = _pragmateUi108Empty;
    }, function (_pragmateUi108Alert) {
      dependency_14 = _pragmateUi108Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0114Texts) {
      dependency_16 = _beyondJsKernel0114Texts;
    }, function (_clsx2) {
      dependency_17 = _clsx2;
    }, function (_pragmateUi108Spinner) {
      dependency_18 = _pragmateUi108Spinner;
    }, function (_beyondJsKernel0114Routing) {
      dependency_19 = _beyondJsKernel0114Routing;
    }, function (_beyondJsWidgets112Render) {
      dependency_20 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Core) {
      dependency_21 = _beyondJsKernel0114Core;
    }, function (_driverJs) {
      dependency_22 = _driverJs;
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
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5], ['pragmate-ui/icons', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['clsx', dependency_17], ['pragmate-ui/spinner', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/widgets/render', dependency_20], ['@beyond-js/kernel/core', dependency_21], ['driver.js', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/ui');
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./activities/audio
      **********************************/
      ims.set('./activities/audio', {
        hash: 2249841843,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAudio = ActivityAudio;
          var _react = require("react");
          /*bundle*/
          function ActivityAudio({
            src
          }) {
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./activities/header
      ***********************************/

      ims.set('./activities/header', {
        hash: 2647478853,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          /*bundle*/
          function ActivityHeader({
            type,
            title,
            icon,
            children
          }) {
            const cls = `activity-header activity-header--${type}`;
            return _react.default.createElement("div", {
              className: "header-container"
            }, _react.default.createElement("header", {
              className: cls
            }, _react.default.createElement("span", {
              className: "header__title"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title)), children));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./ai-button
      ***************************/

      ims.set('./ai-button', {
        hash: 2003207470,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/

      ims.set('./animation-container', {
        hash: 1181620448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function AnimatedContainer({
            className,
            children,
            as = 'span',
            ...props
          }) {
            const Component = (0, _framerMotion.motion)(as);
            const attrs = {
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              initial: {
                opacity: 0
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              },
              ...props
            };
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              ...attrs
            }, children);
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./audio-player
      ******************************/

      ims.set('./audio-player', {
        hash: 1039808834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            url
          }) {
            if (!src && !url) {
              console.warn('not audio to process');
              return null;
            }
            src = url ?? URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mpeg",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./battery
      *************************/

      ims.set('./battery', {
        hash: 1193312247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Battery = Battery;
          var _react = require("react");
          /*bundle*/
          function Battery({
            percent = 20
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              ref.current.style.width = `${percent}%`;
            }, [percent]);
            const cls = `percentage ${percent < 20 ? 'low' : percent < 60 ? 'medium' : 'high'}`;
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: cls
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./card/content
      ******************************/

      ims.set('./card/content', {
        hash: 822507004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardContent = CardContent;
          var _react = require("react");
          /*bundle */
          function CardContent({
            children,
            className,
            option = 'row',
            simple
          }) {
            const cls = `card__content display-${option} ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./card/footer
      *****************************/

      ims.set('./card/footer', {
        hash: 1147762825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardFooter = CardFooter;
          var _react = require("react");
          /*bundle */
          function CardFooter({
            children,
            className,
            simple
          }) {
            const cls = `card__footer ${className && ` ${className}`} ${simple && ' is-simple'}`;
            return _react.default.createElement("footer", {
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/image
      ****************************/

      ims.set('./card/image', {
        hash: 3826144859,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardImage = CardImage;
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function CardImage({
            src,
            className,
            alt,
            children
          }) {
            const cls = `card__top ${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./card/index
      ****************************/

      ims.set('./card/index', {
        hash: 1099081939,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _entityImage = require("../image/entity-image");
          /*bundle*/
          function Card({
            link,
            data: item,
            children,
            disabled,
            simple,
            className,
            type
          }) {
            const Container = !disabled && link ? _components.Link : 'span';
            const attrs = disabled || [undefined, null, ''].includes(link) ? {} : {
              href: link,
              className: 'unstyled'
            };
            let clsCard = `card ${className}`;
            if (disabled) clsCard += ' is-disabled';
            if (simple) clsCard += ' is-simple';
            const onClick = () => {
              globalThis?.sessionStorage.setItem('navigation.view', 'true');
            };
            return _react.default.createElement(Container, {
              ...attrs,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsCard
            }, item && _react.default.createElement(_entityImage.EntityImage, {
              className: "card__top",
              src: item.picture,
              alt: item.title,
              type: type
            }), children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./chip
      **********************/

      ims.set('./chip', {
        hash: 3681402713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          /*bundle*/
          function Chip({
            variant,
            className,
            children
          }) {
            const chipBaseClass = 'chip';
            const variantClass = variant ? `chip--${variant}` : '';
            const combinedClass = [chipBaseClass, variantClass, className].filter(Boolean).join(' ');
            return _react.default.createElement("div", {
              className: combinedClass
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 2108788465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = ContentEditable;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useContainer = require("./use-container");
          var _textarea = require("./textarea");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          /*bundle*/
          function ContentEditable(props) {
            const {
              onSave,
              selector = 'div',
              as = 'div',
              className,
              content,
              type = 'input',
              placeholder,
              lineBreak = true,
              editable = true,
              name
            } = props;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [original, setOriginal] = _react.default.useState(content);
            const Control = as || selector;
            const {
              ref: contentRef,
              value,
              setValue
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            if (!editable) {
              return _react.default.createElement(Control, {
                ref: contentRef
              }, value);
            }
            if (isEditable && type === 'textarea') return _react.default.createElement(_textarea.Textarea, {
              original: original,
              setOriginal: setOriginal,
              setEditable: setIsEditable,
              ...props,
              value: value
            });
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              if (!isEditable) {
                setTimeout(() => {
                  const el = contentRef.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const controlCls = isEditable ? 'pui-editable-selector' : '';
            const attrs = {
              onClick: !isEditable ? toggleEdit : undefined
            };
            const handlePaste = e => {
              e.preventDefault();
              const text = e.clipboardData.getData('text/plain');
              document.execCommand('insertText', false, text);
            };
            const handleKeyDown = e => {
              if (lineBreak && e.key === 'Enter') {
                e.preventDefault();
                // Optionally, trigger save or another action when Enter is pressed
                // handleSave();
              }
            };
            const onBlur = async event => {
              event.stopPropagation();
              const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setIsEditable(false);
              if (content === original) return;
              const data = {
                name,
                value: content
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(content);
              await onSave(specs);
            };
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: controlCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true,
              onPaste: isEditable ? handlePaste : undefined,
              onKeyDown: isEditable ? handleKeyDown : undefined
            }, isEditable ? value : _react.default.createElement(_markdown.Markdown, {
              content: value
            })), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./content-editable/textarea
      *******************************************/

      ims.set('./content-editable/textarea', {
        hash: 1256781792,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function Textarea({
            onSave,
            className,
            content,
            name,
            editable,
            original,
            setOriginal,
            setEditable
          }) {
            const ref = _react.default.useRef(null);
            // const { ref: contentRef, value } = useClickContainer(content, placeholder, isEditable);
            const toggleEdit = () => {
              setEditable(!editable);
              if (!editable) {
                setTimeout(() => {
                  const el = ref.current;
                  if (el) {
                    const range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false); // Collapse the range to the end
                    const selection = globalThis.getSelection();
                    if (selection) {
                      selection.removeAllRanges();
                      selection.addRange(range);
                    }
                    el.focus();
                  }
                }, 0);
              }
            };
            const cls = `pui-content-editable pui-content-editable--textarea${className ? ` ${className}` : ''}`;
            const [value, setValue] = _react.default.useState(content);
            const attrs = {};
            _react.default.useEffect(() => {
              setTimeout(() => {
                const textarea = ref.current?.querySelector('textarea');
                if (textarea) {
                  textarea.focus();
                  const length = textarea.value.length;
                  textarea.setSelectionRange(length, length); // Coloca el cursor al final del texto
                }
              }, 0);
            }, []);
            const onBlur = async event => {
              event.stopPropagation();
              // const content = event.currentTarget.textContent.replace(/[\n\t\r\f\v]/g, '');
              setEditable(false);
              if (value === original) return;
              const data = {
                name,
                value
              };
              const specs = {
                target: data,
                currentTarget: data
              };
              setOriginal(value);
              await onSave(specs);
            };
            const onChange = e => {
              setValue(e.target.value);
            };
            return _react.default.createElement("div", {
              ref: ref,
              className: cls,
              ...attrs,
              onBlur: onBlur
            }, _react.default.createElement(_form.Textarea, {
              name: name,
              onChange: onChange,
              value: value
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/types
      ****************************************/

      ims.set('./content-editable/types', {
        hash: 2246595003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************************
      INTERNAL MODULE: ./content-editable/use-container
      ************************************************/

      ims.set('./content-editable/use-container', {
        hash: 1642257852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer(content, placeholder, isEditable = false) {
            const ref = _react.default.useRef(null);
            const [isOutSide] = _react.default.useState(false);
            const [value, setValue] = _react.default.useState({
              edited: false,
              content: ''
            });
            const contentValue = value?.edited ? value.content : content;
            let toShow = isEditable ? contentValue ? contentValue : '' : contentValue === '' || contentValue === undefined ? placeholder : contentValue || placeholder || '';
            return {
              ref,
              isOutSide,
              value: toShow,
              setValue
            };
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./credits/animations
      ************************************/

      ims.set('./credits/animations', {
        hash: 3779295974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /*************************************
      INTERNAL MODULE: ./credits/coins-modal
      *************************************/

      ims.set('./credits/coins-modal', {
        hash: 3406309927,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _requestCredits = require("./request-credits");
          /*bundle*/ //the nexts are in the same bundle

          function CoinsModal({
            owner,
            globalTexts,
            show,
            onClose,
            onConsume,
            onSuccess,
            type = 'generative'
          }) {
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement(_requestCredits.RequestCreditsForm, {
              onSuccess: onSuccess ?? onClose,
              onClose: onClose,
              onCancel: onClose,
              onConsume: onConsume,
              type: type,
              globalTexts: globalTexts,
              owner: owner
            }));
          }
          0;
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/image
      *******************************/

      ims.set('./credits/image', {
        hash: 315420214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner?.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./credits/request-credits
      *****************************************/

      ims.set('./credits/request-credits', {
        hash: 2153011129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsForm = RequestCreditsForm;
          var _react = require("react");
          var _errorRenderer = require("../error-renderer");
          var _aiButton = require("../ai-button");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _processContainer = require("../page/process-container");
          var _image = require("./image");
          var _animations = require("./animations");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          function RequestCreditsForm({
            onClose,
            globalTexts,
            owner,
            onConsume,
            onCancel,
            type = 'generative',
            onSuccess
          }) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const actionTexts = globalTexts.actions;
            const texts = globalTexts.requestCredits;
            const errors = globalTexts.errors;
            onCancel = onCancel ?? onClose;
            // texts = texts.coins.modal;
            const onConfirm = async event => {
              try {
                event.stopPropagation();
                setFetching(true);
                await onConsume();
                if (onSuccess) onSuccess();
              } catch (e) {
                setError(texts.alerts.noCredits);
              } finally {
                setFetching(false);
              }
            };
            const textType = _session.sessionWrapper.user.id === owner?.id ? 'user' : 'org';
            const detailText = type === 'interactive' ? texts.detail.interactive : texts.detail[textType];
            const subtitle = type === 'interactive' ? texts.subtitle.interactive : texts.subtitle[textType];
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form request__container text-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_components.HtmlWrapper, {
              params: {
                institution: owner?.name
              }
            }, subtitle)), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), owner && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("span", null, owner.name), _react.default.createElement("span", null, texts.ownerDescription)))), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actionTexts.cancel), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue)), _react.default.createElement("div", {
              className: "text-center"
            }, _react.default.createElement("span", {
              className: "small-text"
            }, detailText)), _react.default.createElement(_processContainer.ProcessContainer, {
              fetching: fetching,
              key: "processing"
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./credits/types
      *******************************/

      ims.set('./credits/types', {
        hash: 2709623620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 3926644465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className,
            description,
            children,
            ...props
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls,
              ...props
            }, _react.default.createElement("h3", null, text), _react.default.createElement("p", {
              className: "p1"
            }, description), children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 1442389053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          /*bundle */
          function ErrorRenderer({
            error,
            variant = 'error'
          }) {
            if (!error) return null;
            return _react.default.createElement(_alert.Alert, {
              type: variant
            }, error);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./form/verification-code-input
      **********************************************/

      ims.set('./form/verification-code-input', {
        hash: 1794617931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerificationCodeInput = VerificationCodeInput;
          var _react = require("react");
          /*bundle*/
          function VerificationCodeInput({
            length,
            value = '',
            onChange
          }) {
            // Ensure value is always a string
            const stringValue = typeof value === 'string' ? value : '';
            const [values, setValues] = _react.default.useState(() => {
              // Initialize with the provided value, padding with empty strings to match length
              const valueArray = stringValue.split('').slice(0, length);
              while (valueArray.length < length) {
                valueArray.push('');
              }
              return valueArray;
            });
            const inputsRef = _react.default.useRef([]);
            // Update internal state when value prop changes
            _react.default.useEffect(() => {
              const valueArray = stringValue.split('').slice(0, length);
              while (valueArray.length < length) {
                valueArray.push('');
              }
              setValues(valueArray);
            }, [stringValue, length]);
            const handleChange = (value, index) => {
              const newValues = [...values];
              newValues[index] = value.slice(-1);
              setValues(newValues);
              const event = {
                target: {
                  value: newValues.join('')
                },
                currentTarget: {
                  value: newValues.join('')
                },
                type: 'change'
              };
              onChange(event);
              if (value && index < length - 1) {
                inputsRef.current[index + 1]?.focus();
              }
            };
            const handleKeyDown = (e, index) => {
              if (e.key === 'Backspace' && !values[index] && index > 0) {
                setValues(prev => {
                  const newValues = [...prev];
                  newValues[index - 1] = '';
                  return newValues;
                });
                inputsRef.current[index - 1]?.focus();
              }
            };
            const handlePaste = e => {
              const pasteData = e.clipboardData.getData('text').slice(0, length).split('');
              setValues(pasteData);
              const event = {
                target: {
                  value: pasteData.join('')
                },
                currentTarget: {
                  value: pasteData.join('')
                },
                type: 'change'
              };
              onChange(event);
              pasteData.forEach((value, index) => {
                if (inputsRef.current[index]) {
                  inputsRef.current[index].value = value;
                }
              });
              inputsRef.current[pasteData.length - 1]?.focus();
              e.preventDefault();
            };
            return _react.default.createElement("div", {
              className: "verification-code-input"
            }, values.map((value, index) => _react.default.createElement("input", {
              key: index,
              type: "text",
              value: value,
              maxLength: 1,
              ref: el => inputsRef.current[index] = el,
              onChange: e => handleChange(e.target.value, index),
              onKeyDown: e => handleKeyDown(e, index),
              onPaste: handlePaste
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./header-card/header-counter
      ********************************************/

      ims.set('./header-card/header-counter', {
        hash: 3049264674,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          /**
           * TODO: Review this component @carlos
           * @param param0
           * @returns
           */
          const HeaderCounterItem = ({
            item,
            index
          }) => {
            const StatusHeaderContent = ({
              status
            }) => {
              switch (status) {
                case 'done':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-done"
                  }, index);
                case 'waiting':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-waiting"
                  }, index);
                case 'current':
                  return _react.default.createElement("div", {
                    className: "counter-list__number status-current"
                  }, index);
                default:
                  return _react.default.createElement(_icons.Icon, {
                    className: "lg",
                    icon: 'refresh'
                  });
              }
            };
            return _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: item.url
            }, _react.default.createElement(StatusHeaderContent, {
              status: item.status
            }));
          };
          /*bundle */
          function HeaderCounter({
            list,
            className
          }) {
            const cls = `header-counter__container ${className ? ` ${className}` : ''}`;
            const renderedItems = list.map((item, index) => _react.default.createElement(HeaderCounterItem, {
              item: item,
              key: index,
              index: index + 1
            }));
            return _react.default.createElement("div", {
              className: cls
            }, renderedItems);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./header-card/header-title
      ******************************************/

      ims.set('./header-card/header-title', {
        hash: 1777028730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderTitle = HeaderTitle;
          var _react = require("react");
          /*bundle*/
          function HeaderTitle({
            title
          }) {
            return _react.default.createElement("section", {
              className: "header-card__title-container"
            }, _react.default.createElement("h3", {
              className: "h1 header-card__title-text"
            }, title));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./header-card/index
      ***********************************/

      ims.set('./header-card/index', {
        hash: 1274014296,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCard = HeaderCard;
          var _headerCounter = require("./header-counter");
          var _headerTitle = require("./header-title");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/
          function HeaderCard({
            className,
            children,
            image,
            alt,
            option = 'dark',
            title,
            list
          }) {
            const cls = `header-card__container option-${option}${className ? ` ${className}` : ``}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("section", {
              className: "header-card__text"
            }, title && _react.default.createElement(_headerTitle.HeaderTitle, {
              title: title
            }), _react.default.createElement("section", {
              className: "header-card__content"
            }, children)), list && _react.default.createElement(_headerCounter.HeaderCounter, {
              list: list,
              className: "header-card__counter"
            }), image && _react.default.createElement(_image.Image, {
              src: image,
              alt: alt,
              className: "header-card__image"
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./hooks/use-confetti
      ************************************/

      ims.set('./hooks/use-confetti', {
        hash: 679209707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useConfetti = useConfetti;
          var _jsConfetti = require("js-confetti");
          var _react = require("react");
          /*bundle*/
          function useConfetti(props) {
            const specs = {
              confettiNumber: 300,
              confettiColors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'],
              emojis: ['🎉', '🎊'],
              emojiSize: 18
            };
            _react.default.useEffect(() => {
              const jsConfetti = new _jsConfetti.default();
              jsConfetti.addConfetti({
                ...specs,
                ...props
              });
            }, []);
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./hooks/use-texts-callback
      ******************************************/

      ims.set('./hooks/use-texts-callback', {
        hash: 2445678329,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTextsCallback = useTextsCallback;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTextsCallback(specifier, callback) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                setTexts(value);
                setReady(modelTexts.ready);
                if (modelTexts.ready) callback(value);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./image/entity-image
      ************************************/

      ims.set('./image/entity-image', {
        hash: 165707786,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityImage = EntityImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function EntityImage({
            src,
            ratio,
            alt = '',
            entity = 'activity',
            type,
            children,
            size = 'sm',
            preload,
            className,
            ...props
          }) {
            let cls = `entity-image ${className || ''} ${entity}`;
            if (ratio) cls += ` img--${ratio}`;
            if (!src || src === '') {
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.webp`;
            }
            // Validate and process the src property outside the return statement
            let processedSrc = src;
            if (src && src !== '') {
              const hasQueryString = src.includes('?');
              const separator = hasQueryString ? '&' : '?';
              processedSrc = `${src}${separator}size=${size}`;
            }
            if (preload) return _react.default.createElement("div", {
              className: `${cls} entity-image--preload`
            });
            return _react.default.createElement(_image.Image, {
              ...props,
              src: processedSrc,
              alt: alt,
              className: cls
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./image/zoomable
      ********************************/

      ims.set('./image/zoomable', {
        hash: 1508287648,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ZoomableImage = ZoomableImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _clsx = require("clsx");
          /*bundle*/
          function ZoomableImage({
            src,
            alt = '',
            className = ''
          }) {
            const [open, setOpen] = (0, _react.useState)(false);
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: (0, _clsx.default)('zoomable-image', className),
              onClick: handleOpen,
              role: "button",
              tabIndex: 0,
              "aria-label": "Expand image",
              onKeyPress: e => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen();
              }
            }, _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: "zoomable-image__img"
            })), open ? _react.default.createElement(_modal.Modal, {
              show: open,
              onClose: handleClose,
              className: "zoomable-image__modal"
            }, _react.default.createElement("div", {
              className: "zoomable-image__modal-content"
            }, _react.default.createElement(_image.Image, {
              src: src,
              alt: alt,
              className: "zoomable-image__modal-img"
            }))) : null);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./loaders/loader
      ********************************/

      ims.set('./loaders/loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./loaders/pre-load
      **********************************/

      ims.set('./loaders/pre-load', {
        hash: 2462171743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true,
              type: 'primary'
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 2281835143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageLoader = PageLoader;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function PageLoader({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = `page-loader-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./page/page-container
      *************************************/

      ims.set('./page/page-container', {
        hash: 1267086459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageContainer = PageContainer;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle */
          function PageContainer({
            children,
            className,
            fetching,
            isForm = false,
            fullHeight = true,
            size = undefined
          }) {
            const SIZES = {
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            let cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
            if (isForm) cls += ' page__container--form';
            if (fullHeight) cls += ' full-height';
            return _react.default.createElement("div", {
              className: cls
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 3085160751,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("../loaders/loader");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching,
            opacity = 1
          }) {
            if (!fetching) return null;
            let cls = `process-container${className ? ` ${className}` : ''}`;
            if (opacity) cls += ` opacity-${opacity}`;
            return _react.default.createElement("div", {
              className: cls
            }, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/title
      ****************************/

      ims.set('./page/title', {
        hash: 3783730710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          var _skeletonText = require("../skeleton-text");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function PageTitle({
            preload,
            title,
            children,
            href,
            as = 'h1'
          }) {
            const Control = as;
            if (preload) {
              return _react.default.createElement("header", {
                className: "page-title__section",
                style: {
                  height: '42px'
                }
              }, _react.default.createElement(_skeletonText.SkeletonText, {
                height: "8px",
                width: "100px"
              }), children);
            }
            let attrs = {
              onClick: undefined,
              className: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href),
                className: 'is--link'
              };
            }
            return _react.default.createElement("header", {
              className: "page-title__section"
            }, _react.default.createElement(Control, {
              ...attrs
            }, title), children);
          }
          /*bundle*/
          function PageSubtitle({
            children,
            href
          }) {
            let attrs = {
              onClick: undefined
            };
            if (href) {
              attrs = {
                onClick: () => _routing.routing.pushState(href)
              };
            }
            return _react.default.createElement("span", {
              className: "post-title",
              ...attrs
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./process-button
      ********************************/

      ims.set('./process-button', {
        hash: 3041374255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessButton = ProcessButton;
          exports.ProcessIconButton = ProcessIconButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ProcessButton({
            children,
            onClick,
            disabled,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async () => {
              setProcessing(true);
              await onClick();
              setProcessing(false);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
          /*bundle*/
          function ProcessIconButton({
            children,
            disabled,
            className,
            onClick,
            ...props
          }) {
            const [processing, setProcessing] = _react.default.useState(false);
            const handleClick = async event => {
              event.stopPropagation();
              setProcessing(true);
              await onClick();
              setTimeout(() => {
                setProcessing(false);
              }, 300);
            };
            if (processing) {
              return _react.default.createElement("button", {
                className: "process-button process-button--fetching"
              }, _react.default.createElement(_components.Spinner, {
                active: true,
                type: "primary"
              }));
            }
            const cls = className ? `${className} process-button` : 'process-button';
            return _react.default.createElement(_icons.AppIconButton, {
              className: cls,
              ...props,
              onClick: handleClick,
              disabled: disabled || processing
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./radio/index
      *****************************/

      ims.set('./radio/index', {
        hash: 2799162414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle*/ // components/radioButton.tsx

          function RadioButton({
            label,
            onChange,
            ...rest
          }) {
            const inputRef = React.useRef(null);
            const handleLabelChange = event => {
              if (inputRef.current) {
                const changeEvent = new Event('change', {
                  bubbles: true,
                  cancelable: true
                });
                inputRef.current.dispatchEvent(changeEvent);
              }
            };
            return React.createElement("label", {
              className: "radio-button",
              onChange: handleLabelChange
            }, React.createElement("span", null, React.createElement("input", {
              type: "radio",
              ref: inputRef,
              onChange: onChange,
              ...rest
            }), React.createElement(_framerMotion.motion.div, {
              className: "radio-button__custom",
              animate: {
                scale: rest.checked ? 1.1 : 1
              },
              transition: {
                duration: 0.2
              }
            }, rest.checked && React.createElement(_framerMotion.motion.div, {
              className: "radio-button__inner",
              layout: true
            }))), label);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./radio/radio-group
      ***********************************/

      ims.set('./radio/radio-group', {
        hash: 40498085,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioGroup = RadioGroup;
          var React = require("react");
          /*bundle*/ // components/radio-group.tsx

          function RadioGroup({
            children,
            value,
            onChange
          }) {
            return React.createElement("div", null, React.Children.map(children, child => {
              // Check if child is a valid element and if it conforms to the RadioButtonWithProps type
              if (React.isValidElement(child) && typeof child.props.value === 'string') {
                // Clone the element with new props
                return React.cloneElement(child, {
                  checked: child.props.value === value,
                  onChange: () => onChange(child.props.value)
                });
              }
              return child;
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./skeleton-text
      *******************************/

      ims.set('./skeleton-text', {
        hash: 1426306877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SkeletonText = SkeletonText;
          var _react = require("react");
          /*bundle*/
          function SkeletonText(props) {
            return _react.default.createElement("span", {
              className: "skeleton-text",
              style: {
                width: props.width || '100%',
                height: props.height || '14px',
                background: props.color || '',
                borderRadius: props.radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: props.stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./theme-switcher
      ********************************/

      ims.set('./theme-switcher', {
        hash: 1901820705,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitch = ThemeSwitch;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitch({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement("div", {
              className: "sidebar-item theme-switcher",
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              onClick: handleChange
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/container
      ********************************/

      ims.set('./tour/container', {
        hash: 3036630611,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DriverTourContainer = DriverTourContainer;
          var _react = require("react");
          var _useDriverTour = require("./use-driver-tour");
          var _modal = require("pragmate-ui/modal");
          var _core = require("@beyond-js/kernel/core");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DriverTourContainer({
            name,
            className,
            ready,
            texts,
            children
          }) {
            const [showConfirm, setShowConfirm] = _react.default.useState(false);
            const closeCallback = async () => {
              setShowConfirm(true);
            };
            const {
              ref,
              key
            } = (0, _useDriverTour.useDriverTour)(name, ready, closeCallback, texts);
            const checkbox = _react.default.useRef(null);
            const onClose = () => {
              if (checkbox.current.checked) {
                localStorage.setItem(key, 'done');
              }
              setShowConfirm(false);
            };
            const modalTexts = {
              es: {
                title: 'Te gustaria completar el Tour en otro momento?',
                cancel: 'No volver a ver',
                close: 'Cerrar'
              },
              en: {
                title: 'Would you like to complete the Tour later?',
                cancel: 'Do not show again',
                close: 'Close'
              },
              de: {
                title: 'Möchten Sie den Tour später abschließen?',
                cancel: 'Nicht noch einmal anzeigen',
                close: 'Schließen'
              }
            };
            const currentTexts = _core.languages.current === 'es' ? modalTexts.es : modalTexts.en;
            return _react.default.createElement("div", {
              ref: ref,
              className: className
            }, children, showConfirm && _react.default.createElement(_modal.Modal, {
              show: true,
              title: modalTexts[_core.languages.current].title,
              onClose: onClose
            }, _react.default.createElement("h6", null, currentTexts.title), _react.default.createElement("div", {
              className: "mt-15"
            }, _react.default.createElement("span", {
              className: "flex-container gap-05"
            }, _react.default.createElement("input", {
              type: "checkbox",
              ref: checkbox
            }), currentTexts.cancel)), _react.default.createElement("footer", {
              className: "modal-actions mt-15 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              block: true,
              onClick: onClose
            }, currentTexts.close))));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./tour/tour-step
      ********************************/

      ims.set('./tour/tour-step', {
        hash: 267651650,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TourStep = TourStep;
          var _react = require("react");
          /*bundle*/
          function TourStep({
            className,
            name,
            index,
            texts,
            children,
            as = 'span'
          }) {
            const keys = Object.keys(texts);
            if (!texts.hasOwnProperty(name) || !keys) {
              console.warn(`The text ${name} is not defined in the texts object`, texts);
              return null;
            }
            index = index ?? keys.indexOf(name);
            const Control = as;
            const cls = `tour-step ${className || ''}`;
            return _react.default.createElement(Control, {
              className: cls,
              "data-description": texts[name].description,
              "data-title": texts[name].title,
              "data-tour": index,
              "data-index": index
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./tour/use-driver-tour
      **************************************/

      ims.set('./tour/use-driver-tour', {
        hash: 3966853664,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDriverTour = useDriverTour;
          var _react = require("react");
          var _driver = require("driver.js");
          /*bundle*/
          function useDriverTour(name, ready, closeCallback, props = {}) {
            const ref = _react.default.useRef(null);
            const key = `ailearn.${name}.tour`;
            const sessionKey = `ailearn.${name}.tour.session`;
            const saw = localStorage.getItem(key);
            const sessionSaw = sessionStorage.getItem(sessionKey);
            _react.default.useEffect(() => {
              if (!ready || saw || sessionSaw) return;
              const items = ref.current.querySelectorAll('[data-tour]');
              const steps = [];
              items?.forEach(item => {
                const {
                  title,
                  description
                } = item.dataset;
                steps.push({
                  element: item,
                  popover: {
                    title,
                    description
                  }
                });
              });
              const obj = (0, _driver.driver)({
                popoverClass: 'pui-popover-tour',
                steps,
                onNextClick: () => {
                  if (!obj.hasNextStep()) {
                    localStorage.setItem(key, 'done');
                    obj.destroy();
                    return;
                  }
                  obj.moveNext();
                  return true;
                },
                onDestroyStarted: async () => {
                  sessionStorage.setItem(sessionKey, 'seen');
                  closeCallback();
                  obj.destroy();
                },
                ...props
              });
              obj.drive();
            }, [ready]);
            return {
              ref,
              key
            };
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 1107990003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function UserData({
            label,
            type,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, label && React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, type === 'organization' ? React.createElement(_icons.AppIcon, {
              variant: "on-primary",
              icon: "institution",
              className: "user-data__img"
            }) : React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activities/audio",
        "from": "ActivityAudio",
        "name": "ActivityAudio"
      }, {
        "im": "./activities/header",
        "from": "ActivityHeader",
        "name": "ActivityHeader"
      }, {
        "im": "./ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
        "im": "./audio-player",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./battery",
        "from": "Battery",
        "name": "Battery"
      }, {
        "im": "./card/content",
        "from": "CardContent",
        "name": "CardContent"
      }, {
        "im": "./card/footer",
        "from": "CardFooter",
        "name": "CardFooter"
      }, {
        "im": "./card/image",
        "from": "CardImage",
        "name": "CardImage"
      }, {
        "im": "./card/index",
        "from": "Card",
        "name": "Card"
      }, {
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./content-editable/index",
        "from": "ContentEditable",
        "name": "ContentEditable"
      }, {
        "im": "./content-editable/textarea",
        "from": "Textarea",
        "name": "Textarea"
      }, {
        "im": "./credits/coins-modal",
        "from": "CoinsModal",
        "name": "CoinsModal"
      }, {
        "im": "./credits/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
      }, {
        "im": "./credits/request-credits",
        "from": "RequestCreditsForm",
        "name": "RequestCreditsForm"
      }, {
        "im": "./empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./error-renderer",
        "from": "ErrorRenderer",
        "name": "ErrorRenderer"
      }, {
        "im": "./form/verification-code-input",
        "from": "VerificationCodeInput",
        "name": "VerificationCodeInput"
      }, {
        "im": "./header-card/header-counter",
        "from": "HeaderCounter",
        "name": "HeaderCounter"
      }, {
        "im": "./header-card/header-title",
        "from": "HeaderTitle",
        "name": "HeaderTitle"
      }, {
        "im": "./header-card/index",
        "from": "HeaderCard",
        "name": "HeaderCard"
      }, {
        "im": "./hooks/use-confetti",
        "from": "useConfetti",
        "name": "useConfetti"
      }, {
        "im": "./hooks/use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
      }, {
        "im": "./image/entity-image",
        "from": "EntityImageType",
        "name": "EntityImageType"
      }, {
        "im": "./image/entity-image",
        "from": "EntityImage",
        "name": "EntityImage"
      }, {
        "im": "./image/zoomable",
        "from": "ZoomableImage",
        "name": "ZoomableImage"
      }, {
        "im": "./loaders/loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./loaders/pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./page/loader",
        "from": "PageLoader",
        "name": "PageLoader"
      }, {
        "im": "./page/page-container",
        "from": "PageContainer",
        "name": "PageContainer"
      }, {
        "im": "./page/process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./page/title",
        "from": "PageTitle",
        "name": "PageTitle"
      }, {
        "im": "./page/title",
        "from": "PageSubtitle",
        "name": "PageSubtitle"
      }, {
        "im": "./process-button",
        "from": "ProcessButton",
        "name": "ProcessButton"
      }, {
        "im": "./process-button",
        "from": "ProcessIconButton",
        "name": "ProcessIconButton"
      }, {
        "im": "./radio/index",
        "from": "RadioButton",
        "name": "RadioButton"
      }, {
        "im": "./radio/radio-group",
        "from": "RadioGroup",
        "name": "RadioGroup"
      }, {
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
      }, {
        "im": "./theme-switcher",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }, {
        "im": "./tour/container",
        "from": "DriverTourContainer",
        "name": "DriverTourContainer"
      }, {
        "im": "./tour/tour-step",
        "from": "TourStep",
        "name": "TourStep"
      }, {
        "im": "./tour/use-driver-tour",
        "from": "useDriverTour",
        "name": "useDriverTour"
      }, {
        "im": "./user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityAudio') && _export("ActivityAudio", ActivityAudio = require ? require('./activities/audio').ActivityAudio : value);
        (require || prop === 'ActivityHeader') && _export("ActivityHeader", ActivityHeader = require ? require('./activities/header').ActivityHeader : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./ai-button').AIIconButton : value);
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./animation-container').AnimatedContainer : value);
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./audio-player').AudioPlayer : value);
        (require || prop === 'Battery') && _export("Battery", Battery = require ? require('./battery').Battery : value);
        (require || prop === 'CardContent') && _export("CardContent", CardContent = require ? require('./card/content').CardContent : value);
        (require || prop === 'CardFooter') && _export("CardFooter", CardFooter = require ? require('./card/footer').CardFooter : value);
        (require || prop === 'CardImage') && _export("CardImage", CardImage = require ? require('./card/image').CardImage : value);
        (require || prop === 'Card') && _export("Card", Card = require ? require('./card/index').Card : value);
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./content-editable/textarea').Textarea : value);
        (require || prop === 'CoinsModal') && _export("CoinsModal", CoinsModal = require ? require('./credits/coins-modal').CoinsModal : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./credits/image').OwnerImage : value);
        (require || prop === 'RequestCreditsForm') && _export("RequestCreditsForm", RequestCreditsForm = require ? require('./credits/request-credits').RequestCreditsForm : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'VerificationCodeInput') && _export("VerificationCodeInput", VerificationCodeInput = require ? require('./form/verification-code-input').VerificationCodeInput : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
        (require || prop === 'EntityImageType') && _export("EntityImageType", EntityImageType = require ? require('./image/entity-image').EntityImageType : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./image/entity-image').EntityImage : value);
        (require || prop === 'ZoomableImage') && _export("ZoomableImage", ZoomableImage = require ? require('./image/zoomable').ZoomableImage : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loaders/loader').AppLoader : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./loaders/pre-load').PreloadScreen : value);
        (require || prop === 'PageLoader') && _export("PageLoader", PageLoader = require ? require('./page/loader').PageLoader : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/page-container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RadioButton') && _export("RadioButton", RadioButton = require ? require('./radio/index').RadioButton : value);
        (require || prop === 'RadioGroup') && _export("RadioGroup", RadioGroup = require ? require('./radio/radio-group').RadioGroup : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./theme-switcher').ThemeSwitch : value);
        (require || prop === 'DriverTourContainer') && _export("DriverTourContainer", DriverTourContainer = require ? require('./tour/container').DriverTourContainer : value);
        (require || prop === 'TourStep') && _export("TourStep", TourStep = require ? require('./tour/tour-step').TourStep : value);
        (require || prop === 'useDriverTour') && _export("useDriverTour", useDriverTour = require ? require('./tour/use-driver-tour').useDriverTour : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwib25TdWNjZXNzIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJfYWxlcnQiLCJBbGVydCIsIlZlcmlmaWNhdGlvbkNvZGVJbnB1dCIsInN0cmluZ1ZhbHVlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidmFsdWVBcnJheSIsInNwbGl0Iiwic2xpY2UiLCJwdXNoIiwiaW5wdXRzUmVmIiwiaGFuZGxlQ2hhbmdlIiwiaW5kZXgiLCJuZXdWYWx1ZXMiLCJwcmV2IiwicGFzdGVEYXRhIiwiZm9yRWFjaCIsIm1hcCIsIm1heExlbmd0aCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiU3RhdHVzSGVhZGVyQ29udGVudCIsInN0YXR1cyIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfanNDb25mZXR0aSIsInVzZUNvbmZldHRpIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsImpzQ29uZmV0dGkiLCJhZGRDb25mZXR0aSIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwicmVhZHkiLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsInByb2Nlc3NlZFNyYyIsImhhc1F1ZXJ5U3RyaW5nIiwic2VwYXJhdG9yIiwiX2Nsc3giLCJab29tYWJsZUltYWdlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJyb2xlIiwidGFiSW5kZXgiLCJvbktleVByZXNzIiwiQXBwTG9hZGVyIiwiX3NwaW5uZXIiLCJQcmVsb2FkU2NyZWVuIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsImZ1bGxIZWlnaHQiLCJTSVpFUyIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJoZWlnaHQiLCJTa2VsZXRvblRleHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImRlIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2Vzc2lvbktleSIsInNhdyIsInNlc3Npb25TYXciLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImRhdGFzZXQiLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NoaXAudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9mb3JtL3ZlcmlmaWNhdGlvbi1jb2RlLWlucHV0LnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvaW1hZ2UvZW50aXR5LWltYWdlLnRzeCIsIi90cy9pbWFnZS96b29tYWJsZS50c3giLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90aGVtZS1zd2l0Y2hlci50c3giLCIvdHMvdG91ci9jb250YWluZXIudHN4IiwiL3RzL3RvdXIvdG91ci1zdGVwLnRzeCIsIi90cy90b3VyL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJ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