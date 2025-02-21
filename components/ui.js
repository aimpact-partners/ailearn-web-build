System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/core", "driver.js@1.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
  _export({
    ActivityAudio: void 0,
    ChatPreload: void 0,
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
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    useConfetti: void 0,
    useTextsCallback: void 0,
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
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_3 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_4 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_5 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Base) {
      dependency_7 = _pragmateUi100Beta7Base;
    }, function (_framerMotion2) {
      dependency_8 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_aimpactChatSdk141Session) {
      dependency_12 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_13 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel019Texts) {
      dependency_16 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta7Spinner) {
      dependency_17 = _pragmateUi100Beta7Spinner;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets111Render) {
      dependency_19 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Core) {
      dependency_20 = _beyondJsKernel019Core;
    }, function (_driverJs) {
      dependency_21 = _driverJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/base', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/widgets/render', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['driver.js', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/ui');
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

      /*****************************************
      INTERNAL MODULE: ./activities/chat-preload
      *****************************************/

      ims.set('./activities/chat-preload', {
        hash: 2289740302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatPreload = ChatPreload;
          var _react = require("react");
          var _empty = require("../empty");
          var _icons = require("pragmate-ui/icons");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function ChatPreload({
            onClick
          }) {
            return _react.default.createElement("div", {
              className: "chat__preload-container"
            }, _react.default.createElement(_empty.EmptyCard, {
              className: "empty-section__container"
            }), _react.default.createElement("div", {
              className: "input-container ",
              onClick: onClick
            }, _react.default.createElement("form", {
              className: "chat-input-form"
            }, _react.default.createElement(_form.Textarea, {
              disabled: true,
              className: "input__textarea"
            }), _react.default.createElement("span", {
              className: "input__icon  input__icon--right"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "send",
              disabled: true
            })))));
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
        hash: 2076371047,
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
            type = 'generative'
          }) {
            if (!show) return null;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement(_requestCredits.RequestCreditsForm, {
              onSuccess: onClose,
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
        hash: 2962070075,
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
              src = `/assets/images/entities/${entity}/${type ? `${type}/` : ''}700.jpg`;
            }
            if (preload) return _react.default.createElement("div", {
              className: `${cls} entity-image--preload`
            });
            return _react.default.createElement(_image.Image, {
              ...props,
              src: `${src}?size=${size}`,
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
        hash: 505372992,
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
            size = undefined
          }) {
            const SIZES = {
              sm: 'container-sm',
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            let cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
            if (isForm) cls += ' page__container--form';
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
        hash: 1947893331,
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
                className: "page-title__section"
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
        hash: 3673884090,
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
            const onConfirm = () => {
              setShowConfirm(false);
            };
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
        hash: 4250915764,
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
            const saw = localStorage.getItem(key);
            _react.default.useEffect(() => {
              if (!ready || saw) return;
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
        "im": "./activities/chat-preload",
        "from": "ChatPreload",
        "name": "ChatPreload"
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
        (require || prop === 'ChatPreload') && _export("ChatPreload", ChatPreload = require ? require('./activities/chat-preload').ChatPreload : value);
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
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'useConfetti') && _export("useConfetti", useConfetti = require ? require('./hooks/use-confetti').useConfetti : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./hooks/use-texts-callback').useTextsCallback : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2VtcHR5IiwiX2ljb25zIiwiX2Zvcm0iLCJDaGF0UHJlbG9hZCIsIm9uQ2xpY2siLCJFbXB0eUNhcmQiLCJUZXh0YXJlYSIsImRpc2FibGVkIiwiSWNvbkJ1dHRvbiIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xzIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluaXRpYWwiLCJleGl0Iiwid2lkdGgiLCJsYXlvdXQiLCJBdWRpb1BsYXllciIsInVybCIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsImFsdCIsIkltYWdlIiwiX2VudGl0eUltYWdlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJzZXRFZGl0YWJsZSIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJNYXJrZG93biIsIkljb24iLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm9uQ2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwiZWRpdGVkIiwiY29udGVudFZhbHVlIiwidG9TaG93IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiX3Nlc3Npb24iLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGlvblRleHRzIiwiYWN0aW9ucyIsInRleHRzIiwicmVxdWVzdENyZWRpdHMiLCJlcnJvcnMiLCJvbkNvbmZpcm0iLCJhbnN3ZXIiLCJzdGF0dXMiLCJjb2RlIiwiRXJyb3IiLCJhbGVydHMiLCJub0NyZWRpdHMiLCJ0ZXh0VHlwZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImlkIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwic3VidGl0bGUiLCJkaXYiLCJIdG1sV3JhcHBlciIsInBhcmFtcyIsImluc3RpdHV0aW9uIiwiRXJyb3JSZW5kZXJlciIsIkZyYWdtZW50Iiwib3duZXJEZXNjcmlwdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiaXNGb3JtIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImN1cnJlbnRUZXh0cyIsImxhbmd1YWdlcyIsImJsb2NrIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiX2RyaXZlciIsInNhdyIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN0ZXBzIiwiZm9yRWFjaCIsImRhdGFzZXQiLCJwdXNoIiwiZWxlbWVudCIsInBvcG92ZXIiLCJvYmoiLCJkcml2ZXIiLCJwb3BvdmVyQ2xhc3MiLCJvbk5leHRDbGljayIsImhhc05leHRTdGVwIiwiZGVzdHJveSIsIm1vdmVOZXh0Iiwib25EZXN0cm95U3RhcnRlZCIsImRyaXZlIiwiVXNlckRhdGEiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY2hpcC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS90ZXh0YXJlYS50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9jcmVkaXRzL2FuaW1hdGlvbnMudHN4IiwiL3RzL2NyZWRpdHMvY29pbnMtbW9kYWwudHN4IiwiL3RzL2NyZWRpdHMvaW1hZ2UudHN4IiwiL3RzL2NyZWRpdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZW50aXR5LWltYWdlLnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1jb25mZXR0aS50c3giLCIvdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL2xvYWRlcnMvbG9hZGVyLnRzeCIsIi90cy9sb2FkZXJzL3ByZS1sb2FkLnRzeCIsIi90cy9wYWdlL2xvYWRlci50c3giLCIvdHMvcGFnZS9wYWdlLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcHJvY2Vzcy1idXR0b24udHN4IiwiL3RzL3JhZGlvL2luZGV4LnRzeCIsIi90cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvc2tlbGV0b24tdGV4dC50c3giLCIvdHMvdGhlbWUtc3dpdGNoZXIudHN4IiwiL3RzL3RvdXIvY29udGFpbmVyLnRzeCIsIi90cy90b3VyL3RvdXItc3RlcC50c3giLCIvdHMvdG91ci91c2UtZHJpdmVyLXRvdXIudHMiLCIvdHMvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVQyxhQUFhQSxDQUFDO1lBQUVDO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFDckIsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9FLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakNSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFGLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRWIsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUNBLElBQUFVLEtBQUEsR0FBQVYsT0FBQTtV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