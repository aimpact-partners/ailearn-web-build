System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/core", "driver.js@1.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Empty) {
      dependency_12 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_13 = _pragmateUi100Beta7Alert;
    }, function (_jsConfetti2) {
      dependency_14 = _jsConfetti2;
    }, function (_beyondJsKernel019Texts) {
      dependency_15 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta7Spinner) {
      dependency_16 = _pragmateUi100Beta7Spinner;
    }, function (_beyondJsWidgets111Render) {
      dependency_17 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_driverJs) {
      dependency_19 = _driverJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/base', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['js-confetti', dependency_14], ['@beyond-js/kernel/texts', dependency_15], ['pragmate-ui/spinner', dependency_16], ['@beyond-js/widgets/render', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['driver.js', dependency_19]]);
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
        hash: 3790196272,
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
                console.log(e);
                setError(texts.alerts.noCredits);
              } finally {
                setFetching(false);
              }
            };
            const detailText = texts.detail[type] ?? texts.detail.interactive;
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.default,
              className: "modal__form request__container text-center"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_errorRenderer.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), owner && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("span", null, owner.name), _react.default.createElement("span", null, texts.ownerDescription)))), _react.default.createElement("h6", null, texts.action), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actionTexts.cancel), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue)), _react.default.createElement("div", {
              className: "mt-2 text-center"
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
        hash: 2596455397,
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
            children
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls
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
        hash: 3814645958,
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
            size = undefined
          }) {
            const SIZES = {
              sm: 'container-sm',
              default: ''
            };
            const clsSize = SIZES[size] || SIZES.default;
            const cls = `page__container ${clsSize}${className ? ` ${className}` : ''}`;
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
        hash: 3309909397,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSubtitle = PageSubtitle;
          exports.PageTitle = PageTitle;
          var _react = require("react");
          var _skeletonText = require("../skeleton-text");
          /*bundle*/
          function PageTitle({
            preload,
            title,
            children,
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
            return _react.default.createElement("header", {
              className: "page-title__section"
            }, _react.default.createElement(Control, null, title), children);
          }
          /*bundle*/
          function PageSubtitle({
            children
          }) {
            return _react.default.createElement("span", {
              className: "post-title"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2VtcHR5IiwiX2ljb25zIiwiX2Zvcm0iLCJDaGF0UHJlbG9hZCIsIm9uQ2xpY2siLCJFbXB0eUNhcmQiLCJUZXh0YXJlYSIsImRpc2FibGVkIiwiSWNvbkJ1dHRvbiIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xzIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluaXRpYWwiLCJleGl0Iiwid2lkdGgiLCJsYXlvdXQiLCJBdWRpb1BsYXllciIsInVybCIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsImFsdCIsIkltYWdlIiwiX2VudGl0eUltYWdlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJzZXRFZGl0YWJsZSIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJNYXJrZG93biIsIkljb24iLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm9uQ2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwiZWRpdGVkIiwiY29udGVudFZhbHVlIiwidG9TaG93IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwibG9nIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwiZGl2Iiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwiRnJhZ21lbnQiLCJvd25lckRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIlByb2Nlc3NDb250YWluZXIiLCJkZXNjcmlwdGlvbiIsIkVtcHR5IiwicmF0aW8iLCJlbnRpdHkiLCJzaXplIiwiX2FsZXJ0IiwiQWxlcnQiLCJIZWFkZXJDb3VudGVySXRlbSIsImluZGV4IiwiU3RhdHVzSGVhZGVyQ29udGVudCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfanNDb25mZXR0aSIsInVzZUNvbmZldHRpIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsImpzQ29uZmV0dGkiLCJhZGRDb25mZXR0aSIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwicmVhZHkiLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsIkFwcExvYWRlciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfbG9hZGVyIiwiUGFnZUxvYWRlciIsIlBhZ2VDb250YWluZXIiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSYWRpb0J1dHRvbiIsImxhYmVsIiwicmVzdCIsImlucHV0UmVmIiwiaGFuZGxlTGFiZWxDaGFuZ2UiLCJjaGFuZ2VFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkaXNwYXRjaEV2ZW50Iiwic2NhbGUiLCJjaGVja2VkIiwiUmFkaW9Hcm91cCIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInJhZGlvIiwiZGlzcGxheSIsInN0b3BBbmltYXRpb24iLCJfcmVuZGVyIiwiVGhlbWVTd2l0Y2giLCJ0aGVtZSIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGhlbWVTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlZmF1bHRUaGVtZSIsInVzZXJUaGVtZSIsInNldEljb24iLCJoYW5kbGVDaGFuZ2UiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJ3aWRnZXRzIiwiYXR0cmlidXRlcyIsImFkZCIsIl91c2VEcml2ZXJUb3VyIiwiX2NvcmUiLCJEcml2ZXJUb3VyQ29udGFpbmVyIiwic2hvd0NvbmZpcm0iLCJzZXRTaG93Q29uZmlybSIsImNsb3NlQ2FsbGJhY2siLCJ1c2VEcml2ZXJUb3VyIiwiY2hlY2tib3giLCJtb2RhbFRleHRzIiwiZXMiLCJjbG9zZSIsImVuIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2F3IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9jaGlwLnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3RleHRhcmVhLnRzeCIsIi90eXBlcy50cyIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2NyZWRpdHMvYW5pbWF0aW9ucy50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90aGVtZS1zd2l0Y2hlci50c3giLCIvdHMvdG91ci9jb250YWluZXIudHN4IiwiL3RzL3RvdXIvdG91ci1zdGVwLnRzeCIsIi90cy90b3VyL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBQ3JCLE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPRSxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUViLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBUyxNQUFBLEdBQUFULE9BQUE7VUFDQSxJQUFBVSxLQUFBLEdBQUFWLE9BQUE7VUFFTztVQUFVLFNBQVVXLFdBQVdBLENBQUM7WUFBRUM7VUFBTyxDQUFFO1lBQ2pELE9BQ0NiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q04sTUFBQSxDQUFB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