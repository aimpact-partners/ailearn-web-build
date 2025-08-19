System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/components/icons", "pragmate-ui@1.0.6/components", "pragmate-ui@1.0.6/base", "pragmate-ui@1.0.6/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.6/image", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.6/form", "pragmate-ui@1.0.6/modal", "@aimpact/chat-sdk@1.5.5/session", "pragmate-ui@1.0.6/empty", "pragmate-ui@1.0.6/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "clsx@2.1.1", "pragmate-ui@1.0.6/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, VerificationCodeInput, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, ZoomableImage, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    EntityImageType: void 0,
    EntityImage: void 0,
    ErrorRenderer: void 0,
    VerificationCodeInput: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useTextsCallback: void 0,
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_pragmateUi106Components) {
      dependency_4 = _pragmateUi106Components;
    }, function (_pragmateUi106Base) {
      dependency_5 = _pragmateUi106Base;
    }, function (_pragmateUi106Icons) {
      dependency_6 = _pragmateUi106Icons;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi106Image) {
      dependency_8 = _pragmateUi106Image;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi106Form) {
      dependency_10 = _pragmateUi106Form;
    }, function (_pragmateUi106Modal) {
      dependency_11 = _pragmateUi106Modal;
    }, function (_aimpactChatSdk155Session) {
      dependency_12 = _aimpactChatSdk155Session;
    }, function (_pragmateUi106Empty) {
      dependency_13 = _pragmateUi106Empty;
    }, function (_pragmateUi106Alert) {
      dependency_14 = _pragmateUi106Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_16 = _beyondJsKernel0112Texts;
    }, function (_clsx2) {
      dependency_17 = _clsx2;
    }, function (_pragmateUi106Spinner) {
      dependency_18 = _pragmateUi106Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_19 = _beyondJsKernel0112Routing;
    }, function (_beyondJsWidgets112Render) {
      dependency_20 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Core) {
      dependency_21 = _beyondJsKernel0112Core;
    }, function (_driverJs) {
      dependency_22 = _driverJs;
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
          "vspecifier": "@aimpact/ailearn-app@0.5.7/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5], ['pragmate-ui/icons', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['clsx', dependency_17], ['pragmate-ui/spinner', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/widgets/render', dependency_20], ['@beyond-js/kernel/core', dependency_21], ['driver.js', dependency_22]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/components/ui');
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
        hash: 1698619199,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Card = Card;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _entityImage = require("../entity-image");
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
        hash: 3893472426,
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
                const answer = await onConsume();
                if (!answer.status) {
                  if (answer.error.code === 48) {
                    // the user already has the credits
                    onSuccess();
                  }
                  // const code: string = (answer.error.code as number).toString();
                  throw new Error(errors['NO_CREDITS']);
                }
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
        hash: 716227078,
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

      /******************************
      INTERNAL MODULE: ./entity-image
      ******************************/

      ims.set('./entity-image', {
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
      INTERNAL MODULE: ./error-renderer
      ********************************/

      ims.set('./error-renderer', {
        hash: 3647494150,
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
        hash: 183968273,
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
            fetching
          }) {
            if (!fetching) return null;
            const cls = `process-container${className ? ` ${className}` : ''}`;
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
        hash: 4092300503,
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
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
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
        "im": "./entity-image",
        "from": "EntityImageType",
        "name": "EntityImageType"
      }, {
        "im": "./entity-image",
        "from": "EntityImage",
        "name": "EntityImage"
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
        (require || prop === 'EntityImageType') && _export("EntityImageType", EntityImageType = require ? require('./entity-image').EntityImageType : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./entity-image').EntityImage : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'VerificationCodeInput') && _export("VerificationCodeInput", VerificationCodeInput = require ? require('./form/verification-code-input').VerificationCodeInput : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwib25TdWNjZXNzIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJwcm9jZXNzZWRTcmMiLCJoYXNRdWVyeVN0cmluZyIsInNlcGFyYXRvciIsIl9hbGVydCIsIkFsZXJ0IiwiVmVyaWZpY2F0aW9uQ29kZUlucHV0Iiwic3RyaW5nVmFsdWUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJ2YWx1ZUFycmF5Iiwic3BsaXQiLCJzbGljZSIsInB1c2giLCJpbnB1dHNSZWYiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsIm5ld1ZhbHVlcyIsInByZXYiLCJwYXN0ZURhdGEiLCJmb3JFYWNoIiwibWFwIiwibWF4TGVuZ3RoIiwiSGVhZGVyQ291bnRlckl0ZW0iLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5IiwiX2Nsc3giLCJab29tYWJsZUltYWdlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJyb2xlIiwidGFiSW5kZXgiLCJvbktleVByZXNzIiwiQXBwTG9hZGVyIiwiX3NwaW5uZXIiLCJQcmVsb2FkU2NyZWVuIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsImZ1bGxIZWlnaHQiLCJTSVpFUyIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJoZWlnaHQiLCJTa2VsZXRvblRleHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImRlIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2Vzc2lvbktleSIsInNhdyIsInNlc3Npb25TYXciLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImRhdGFzZXQiLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi8vdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi8vdHMvYWktYnV0dG9uLnRzeCIsIi8vdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvL3RzL2F1ZGlvLXBsYXllci50c3giLCIvL3RzL2JhdHRlcnkudHN4IiwiLy90cy9jYXJkL2NvbnRlbnQudHN4IiwiLy90cy9jYXJkL2Zvb3Rlci50c3giLCIvL3RzL2NhcmQvaW1hZ2UudHN4IiwiLy90cy9jYXJkL2luZGV4LnRzeCIsIi8vdHMvY2hpcC50c3giLCIvL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiLy90cy9jb250ZW50LWVkaXRhYmxlL3RleHRhcmVhLnRzeCIsIi8vdHlwZXMudHMvIiwiLy90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiLy90cy9jcmVkaXRzL2FuaW1hdGlvbnMudHN4IiwiLy90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi8vdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvL3RzL2NyZWRpdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi8vdHMvZW1wdHkudHN4IiwiLy90cy9lbnRpdHktaW1hZ2UudHN4IiwiLy90cy9lcnJvci1yZW5kZXJlci50c3giLCIvL3RzL2Zvcm0vdmVyaWZpY2F0aW9uLWNvZGUtaW5wdXQudHN4IiwiLy90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi8vdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi8vdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiLy90cy9pbWFnZS96b29tYWJsZS50c3giLCIvL3RzL2xvYWRlcnMvbG9hZGVyLnRzeCIsIi8vdHMvbG9hZGVycy9wcmUtbG9hZC50c3giLCIvL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi8vdHMvcGFnZS9wYWdlLWNvbnRhaW5lci50c3giLCIvL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiLy90cy9wYWdlL3RpdGxlLnRzeCIsIi8vdHMvcHJvY2Vzcy1idXR0b24udHN4IiwiLy90cy9yYWRpby9pbmRleC50c3giLCIvL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi8vdHMvc2tlbGV0b24tdGV4dC50c3giLCIvL3RzL3RoZW1lLXN3aXRjaGVyLnRzeCIsIi8vdHMvdG91ci9jb250YWluZXIudHN4IiwiLy90cy90b3VyL3RvdXItc3RlcC50c3giLCIvL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiLy90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMs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