System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.2.11/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.2.11/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.3.0/widgets/markdown", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.9/core", "driver.js@1.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
    ChatPreload: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    CardContent: void 0,
    CardFooter: void 0,
    CardImage: void 0,
    Card: void 0,
    ContentEditable: void 0,
    Textarea: void 0,
    CoinsModal: void 0,
    OwnerImage: void 0,
    RequestCreditsForm: void 0,
    EmptyCard: void 0,
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
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_aimpactAilearnApp0211Config) {
      dependency_4 = _aimpactAilearnApp0211Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_5 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Form) {
      dependency_6 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp0211ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0211ComponentsIcons;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk130WidgetsMarkdown) {
      dependency_10 = _aimpactChatSdk130WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Base) {
      dependency_11 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
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
    }, function (_beyondJsKernel019Core) {
      dependency_18 = _beyondJsKernel019Core;
    }, function (_driverJs) {
      dependency_19 = _driverJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.11"], ["@aimpact/ailearn-app", "0.2.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.11/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/base', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/core', dependency_18], ['driver.js', dependency_19]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.11/components/ui');
      ims = new Map();
      /************************************************
      INTERNAL MODULE: ./activities/animation-container
      ************************************************/
      ims.set('./activities/animation-container', {
        hash: 584485339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          /*bundle */
          function AnimatedContainer({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./activities/audio
      **********************************/

      ims.set('./activities/audio', {
        hash: 2399738441,
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
        hash: 1599479576,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityHeader = ActivityHeader;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
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
        hash: 3147089097,
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
            ...props
          }) {
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            // const handleClick = () => LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/

      ims.set('./animation-container', {
        hash: 584318629,
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

      /***********************************
      INTERNAL MODULE: ./credits/ai-button
      ***********************************/

      ims.set('./credits/ai-button', {
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
        hash: 3482662785,
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
        hash: 2883688133,
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
            const onConfirm = async () => {
              try {
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

      /***********************
      INTERNAL MODULE: ./empty
      ***********************/

      ims.set('./empty', {
        hash: 941402273,
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
        hash: 2944989194,
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
            size = 'sm',
            preload,
            className
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
              src: `${src}?size=${size}`,
              alt: alt,
              className: cls
            });
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
        hash: 1583197324,
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
        hash: 2975860987,
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
        hash: 1304239518,
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
        "im": "./activities/animation-container",
        "from": "AnimatedContainer",
        "name": "AnimatedContainer"
      }, {
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
        "im": "./content-editable/index",
        "from": "ContentEditable",
        "name": "ContentEditable"
      }, {
        "im": "./content-editable/textarea",
        "from": "Textarea",
        "name": "Textarea"
      }, {
        "im": "./credits/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./credits/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
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
        (require || prop === 'AnimatedContainer') && _export("AnimatedContainer", AnimatedContainer = require ? require('./activities/animation-container').AnimatedContainer : value);
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
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./content-editable/textarea').Textarea : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./credits/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./credits/ai-button').AIIconButton : value);
        (require || prop === 'CoinsModal') && _export("CoinsModal", CoinsModal = require ? require('./credits/coins-modal').CoinsModal : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./credits/image').OwnerImage : value);
        (require || prop === 'RequestCreditsForm') && _export("RequestCreditsForm", RequestCreditsForm = require ? require('./credits/request-credits').RequestCreditsForm : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdXNlQ29udGFpbmVyIiwiX3RleHRhcmVhIiwiX21hcmtkb3duIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjb250ZW50IiwicGxhY2Vob2xkZXIiLCJsaW5lQnJlYWsiLCJlZGl0YWJsZSIsIm5hbWUiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInVzZVN0YXRlIiwib3JpZ2luYWwiLCJzZXRPcmlnaW5hbCIsIkNvbnRyb2wiLCJjb250ZW50UmVmIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwic2V0RWRpdGFibGUiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiY29udHJvbENscyIsImhhbmRsZVBhc3RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhlY0NvbW1hbmQiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwib25CbHVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwidGV4dENvbnRlbnQiLCJyZXBsYWNlIiwic3BlY3MiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvblBhc3RlIiwib25LZXlEb3duIiwiTWFya2Rvd24iLCJJY29uIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImVuc3VyZSIsImhhbmRsZUNsaWNrIiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwibG9nIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwiZGl2Iiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIkZyYWdtZW50Iiwib3duZXJEZXNjcmlwdGlvbiIsImFjdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiUGFnZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0IiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3VzZURyaXZlclRvdXIiLCJfY29yZSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwiY2xvc2VDYWxsYmFjayIsInVzZURyaXZlclRvdXIiLCJjaGVja2JveCIsImxvY2FsU3RvcmFnZSIsIm1vZGFsVGV4dHMiLCJlcyIsImNsb3NlIiwiZW4iLCJjdXJyZW50VGV4dHMiLCJsYW5ndWFnZXMiLCJibG9jayIsIlRvdXJTdGVwIiwia2V5cyIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsIl9kcml2ZXIiLCJzYXciLCJnZXRJdGVtIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2FjdGl2aXRpZXMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvY2hhdC1wcmVsb2FkLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9haS1idXR0b24udHN4IiwiL3RzL2NyZWRpdHMvYW5pbWF0aW9ucy50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90b3VyL2NvbnRhaW5lci50c3giLCIvdHMvdG91ci90b3VyLXN0ZXAudHN4IiwiL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVyxTQUFVRSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEVBQUUsR0FBRztVQUFNLENBQTBCO1lBQ3pHLE1BQU1DLFNBQVMsR0FBRyxJQUFBTCxhQUFBLENBQUFNLE1BQU0sRUFBQ0YsRUFBRSxDQUFDO1lBQzVCLE9BQ0NOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNILFNBQVM7Y0FDVEksTUFBTTtjQUNOUCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJRLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREMsSUFBSSxFQUFFO2dCQUNMRixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiRSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RMLE9BQU8sRUFBRTs7WUFDVCxHQUVBUixRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxTQUFVa0IsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBQ3JCLE9BQ0NwQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYyxHQUM1QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBT1csUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3RCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFVLEdBQUcsRUFBRUE7WUFBRyxFQUFJLEUsbURBRWIsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUFwQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLEtBQUEsR0FBQXhCLE9BQUE7VUFFTztVQUFVLFNBQVV5QixXQUFXQSxDQUFDO1lBQUVDO1VBQU8sQ0FBRTtZQUNqRCxPQUNDM0IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYSxNQUFBLENBQUFLLFNBQVM7Y0FBQ3hCLFNBQVMsRUFBQztZQUEwQixFQUFHLEVBQ2xESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUMsa0JBQWtCO2NBQUN1QixPQUFPLEVBQUVBO1lBQU8sR0FDakQzQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBaUIsR0FDaENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNlLEtBQUEsQ0FBQUksUUFBUTtjQUFDQyxRQUFRO2NBQUMxQixTQUFTLEVBQUM7WUFBaUIsRUFBRyxFQUNqREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlDLEdBQ2hESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxNQUFBLENBQUFPLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0YsUUFBUSxFQUFFO1lBQUksRUFBSSxDQUNwQyxDQUNELENBQ0YsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBOUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFFTztVQUFVLFNBQVVnQyxjQUFjQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFSCxJQUFJO1lBQUUzQjtVQUFRLENBQUU7WUFDeEUsTUFBTStCLEdBQUcsR0FBRyxvQ0FBb0NGLElBQUksRUFBRTtZQUN0RCxPQUNDbEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWtCLEdBQ2hDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUVnQztZQUFHLEdBQ3JCcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWUsR0FDOUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQWEsT0FBTztjQUFDTCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUN2QmhDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUt5QixLQUFLLENBQU0sQ0FDVixFQUNOOUIsUUFBUSxDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFDQSxJQUFBc0MsT0FBQSxHQUFBdEMsT0FBQTtVQUVPO1VBQVUsU0FBVXVDLFFBQVFBLENBQUM7WUFBRW5DLFFBQVE7WUFBRSxHQUFHb0M7VUFBSyxDQUFFO1lBQ3pELE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0M7WUFBTyxHQUNwQ3ZDLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVd0MsWUFBWUEsQ0FBQztZQUFFeEMsUUFBUTtZQUFFc0IsT0FBTztZQUFFLEdBQUdjO1VBQUssQ0FBRTtZQUN0RTtZQUNBLE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkIsT0FBQSxDQUFBUixVQUFVO2NBQUEsR0FBS1UsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0M7WUFBTyxHQUN4Q3ZDLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFNTztVQUFVLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHLE1BQU07WUFBRSxHQUFHbUM7VUFBSyxDQUEwQjtZQUNsSCxNQUFNbEMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsTUFBTXdDLEtBQUssR0FBRztjQUNiaEMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREosT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNESSxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFO2VBQ1Q7Y0FDRCxHQUFHNEI7YUFDSDtZQUNELE9BQ0N6QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQUNJLE1BQU07Y0FBQ1AsU0FBUyxFQUFFQSxTQUFTO2NBQUEsR0FBTTBDO1lBQUssR0FDL0N6QyxRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVThDLFdBQVdBLENBQUM7WUFBRTNCLEdBQUc7WUFBRTRCO1VBQUcsQ0FBRTtZQUNwRCxJQUFJLENBQUM1QixHQUFHLElBQUksQ0FBQzRCLEdBQUcsRUFBRTtjQUNqQkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaOUIsR0FBRyxHQUFHNEIsR0FBRyxJQUFJRyxHQUFHLENBQUNDLGVBQWUsQ0FBQ2hDLEdBQUcsQ0FBQztZQUNyQyxNQUFNaUMsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCdEQsTUFBQSxDQUFBUyxPQUFLLENBQUM4QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUMxQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJRixNQUFNLENBQUN4QyxRQUFRLEtBQUsyQyxRQUFRLEVBQUU7a0JBQ2pDSCxNQUFNLENBQUNJLFdBQVcsR0FBRyxLQUFLO2tCQUMxQkosTUFBTSxDQUFDSyxZQUFZLEdBQUcsTUFBSztvQkFDMUJMLE1BQU0sQ0FBQ0ssWUFBWSxHQUFHLElBQUk7b0JBQzFCTCxNQUFNLENBQUNJLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDeEMsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ3BCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFjLEdBQzVCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPVyxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDdEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUVUsR0FBRyxFQUFFQSxHQUFHO2NBQUVjLElBQUksRUFBQyxZQUFZO2NBQUNtQixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV6QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFyRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVU2RCxPQUFPQSxDQUFDO1lBQUVDLE9BQU8sR0FBRztVQUFFLENBQUU7WUFDbEQsTUFBTVYsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUU5Q3RELE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxLQUFLLENBQUM5QyxLQUFLLEdBQUcsR0FBRzZDLE9BQU8sR0FBRztZQUN4QyxDQUFDLEVBQUUsQ0FBQ0EsT0FBTyxDQUFDLENBQUM7WUFDYixNQUFNM0IsR0FBRyxHQUFHLGNBQWMyQixPQUFPLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBR0EsT0FBTyxHQUFHLEVBQUUsR0FBRyxRQUFRLEdBQUcsTUFBTSxFQUFFO1lBRW5GLE9BQ0MvRCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBbUIsR0FDakNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFPLEdBQ3JCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLMkMsR0FBRyxFQUFFQSxHQUFHO2NBQUVqRCxTQUFTLEVBQUVnQztZQUFHLEVBRXZCLENBQ0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBcEMsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVZ0UsV0FBV0EsQ0FBQztZQUFFNUQsUUFBUTtZQUFFRCxTQUFTO1lBQUU4RCxNQUFNLEdBQUcsS0FBSztZQUFFQztVQUFNLENBQUU7WUFDdEYsTUFBTS9CLEdBQUcsR0FBRyx5QkFBeUI4QixNQUFNLElBQUk5RCxTQUFTLElBQUksSUFBSUEsU0FBUyxFQUFFLElBQUkrRCxNQUFNLElBQUksWUFBWSxFQUFFO1lBRXZHLE9BQU9uRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQztZQUFHLEdBQUcvQixRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVbUUsVUFBVUEsQ0FBQztZQUFFL0QsUUFBUTtZQUFFRCxTQUFTO1lBQUUrRDtVQUFNLENBQUU7WUFDckUsTUFBTS9CLEdBQUcsR0FBRyxnQkFBZ0JoQyxTQUFTLElBQUksSUFBSUEsU0FBUyxFQUFFLElBQUkrRCxNQUFNLElBQUksWUFBWSxFQUFFO1lBQ3BGLE9BQU9uRSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUVnQztZQUFHLEdBQUcvQixRQUFRLENBQVU7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQWdFLE1BQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFVLFNBQVVxRSxTQUFTQSxDQUFDO1lBQUVsRCxHQUFHO1lBQUVoQixTQUFTO1lBQUVtRSxHQUFHO1lBQUVsRTtVQUFRLENBQWU7WUFDbEYsTUFBTStCLEdBQUcsR0FBRyxhQUFhaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUzRCxPQUNDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkQsTUFBQSxDQUFBRyxLQUFLO2NBQUNwRCxHQUFHLEVBQUVBLEdBQUc7Y0FBRW1ELEdBQUcsRUFBRUEsR0FBRztjQUFFbkUsU0FBUyxFQUFFZ0M7WUFBRyxHQUN2Qy9CLFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFpQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdFLFlBQUEsR0FBQXhFLE9BQUE7VUFFTztVQUFVLFNBQVV5RSxJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsSUFBSSxFQUFFQyxJQUFJO1lBQUV4RSxRQUFRO1lBQUV5QixRQUFRO1lBQUVxQyxNQUFNO1lBQUUvRCxTQUFTO1lBQUU4QjtVQUFJLENBQUU7WUFDaEcsTUFBTTRDLFNBQVMsR0FBRyxDQUFDaEQsUUFBUSxJQUFJNkMsSUFBSSxHQUFHckMsV0FBQSxDQUFBeUMsSUFBSSxHQUFHLE1BQU07WUFDbkQsTUFBTWpDLEtBQUssR0FBR2hCLFFBQVEsSUFBSSxDQUFDa0QsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7Y0FBRU8sSUFBSSxFQUFFUCxJQUFJO2NBQUV2RSxTQUFTLEVBQUU7WUFBVSxDQUFFO1lBQzNHLElBQUkrRSxPQUFPLEdBQUcsUUFBUS9FLFNBQVMsRUFBRTtZQUVqQyxJQUFJMEIsUUFBUSxFQUFFcUQsT0FBTyxJQUFJLGNBQWM7WUFDdkMsSUFBSWhCLE1BQU0sRUFBRWdCLE9BQU8sSUFBSSxZQUFZO1lBQ25DLE1BQU14RCxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQnlELFVBQVUsRUFBRUMsY0FBYyxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDdEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29FLFNBQVM7Y0FBQSxHQUFLaEMsS0FBSztjQUFFbkIsT0FBTyxFQUFFQTtZQUFPLEdBQ3JDM0IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFK0U7WUFBTyxHQUNyQk4sSUFBSSxJQUFJN0UsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytELFlBQUEsQ0FBQWMsV0FBVztjQUFDbkYsU0FBUyxFQUFDLFdBQVc7Y0FBQ2dCLEdBQUcsRUFBRXlELElBQUksQ0FBQ1csT0FBTztjQUFFakIsR0FBRyxFQUFFTSxJQUFJLENBQUMxQyxLQUFLO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzdGN0IsUUFBUSxDQUNKLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQW1CLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBd0YsYUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF5RixTQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBGLFNBQUEsR0FBQTFGLE9BQUE7VUFDTztVQUFVLFNBQVUyRixlQUFlQSxDQUFDbkQsS0FBNEI7WUFDdEUsTUFBTTtjQUNMb0QsTUFBTTtjQUNOQyxRQUFRLEdBQUcsS0FBSztjQUNoQnhGLEVBQUUsR0FBRyxLQUFLO2NBQ1ZGLFNBQVM7Y0FDVDJGLE9BQU87Y0FDUDdELElBQUksR0FBRyxPQUFPO2NBQ2Q4RCxXQUFXO2NBQ1hDLFNBQVMsR0FBRyxJQUFJO2NBQ2hCQyxRQUFRLEdBQUcsSUFBSTtjQUNmQztZQUFJLENBQ0osR0FBRzFELEtBQUs7WUFDVCxNQUFNLENBQUMyRCxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUFyRyxNQUFBLENBQUFzRyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR3hHLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkYsUUFBUSxDQUFDUCxPQUFPLENBQUM7WUFFdkQsTUFBTVUsT0FBTyxHQUFHbkcsRUFBRSxJQUFJd0YsUUFBUTtZQUM5QixNQUFNO2NBQUV6QyxHQUFHLEVBQUVxRCxVQUFVO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQW5CLGFBQUEsQ0FBQW9CLGlCQUFpQixFQUFDZCxPQUFPLEVBQUVDLFdBQVcsRUFBRUksVUFBVSxDQUFDO1lBRWhHLElBQUksQ0FBQ0YsUUFBUSxFQUFFO2NBQ2QsT0FBT2xHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixPQUFPO2dCQUFDcEQsR0FBRyxFQUFFcUQ7Y0FBVSxHQUFHQyxLQUFLLENBQVc7O1lBR25ELElBQUlQLFVBQVUsSUFBSWxFLElBQUksS0FBSyxVQUFVLEVBQ3BDLE9BQ0NsQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0YsU0FBQSxDQUFBN0QsUUFBUTtjQUNSMEUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCQyxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJNLFdBQVcsRUFBRVQsYUFBYTtjQUFBLEdBQ3RCNUQsS0FBSztjQUNUa0UsS0FBSyxFQUFFQTtZQUFLLEVBQ1g7WUFHSixNQUFNSSxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QlYsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztjQUMxQixJQUFJLENBQUNBLFVBQVUsRUFBRTtnQkFDaEJZLFVBQVUsQ0FBQyxNQUFLO2tCQUNmLE1BQU1DLEVBQUUsR0FBR1AsVUFBVSxDQUFDakQsT0FBTztrQkFFN0IsSUFBSXdELEVBQUUsRUFBRTtvQkFDUCxNQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsV0FBVyxFQUFFO29CQUNwQ0YsS0FBSyxDQUFDRyxrQkFBa0IsQ0FBQ0osRUFBRSxDQUFDO29CQUM1QkMsS0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFFdkIsTUFBTUMsU0FBUyxHQUFHbkMsVUFBVSxDQUFDb0MsWUFBWSxFQUFFO29CQUUzQyxJQUFJRCxTQUFTLEVBQUU7c0JBQ2RBLFNBQVMsQ0FBQ0UsZUFBZSxFQUFFO3NCQUMzQkYsU0FBUyxDQUFDRyxRQUFRLENBQUNSLEtBQUssQ0FBQzs7b0JBRzFCRCxFQUFFLENBQUNVLEtBQUssRUFBRTs7Z0JBRVosQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFFUCxDQUFDO1lBRUQsTUFBTXZGLEdBQUcsR0FBRyx1QkFBdUJoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3JFLE1BQU00QixJQUFJLEdBQUdvRSxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTXdCLFVBQVUsR0FBR3hCLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBQzVELE1BQU10RCxLQUFLLEdBQUc7Y0FBRW5CLE9BQU8sRUFBRSxDQUFDeUUsVUFBVSxHQUFHVyxVQUFVLEdBQUcvQjtZQUFTLENBQUU7WUFFL0QsTUFBTTZDLFdBQVcsR0FBSUMsQ0FBdUIsSUFBSTtjQUMvQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNHLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQztjQUNsRGYsUUFBUSxDQUFDZ0IsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUVILElBQUksQ0FBQztZQUNoRCxDQUFDO1lBRUQsTUFBTUksYUFBYSxHQUFJTixDQUFzQixJQUFJO2NBQ2hELElBQUk3QixTQUFTLElBQUk2QixDQUFDLENBQUNPLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ25DUCxDQUFDLENBQUNDLGNBQWMsRUFBRTtnQkFDbEI7Z0JBQ0E7O1lBRUYsQ0FBQztZQUVELE1BQU1PLE1BQU0sR0FBRyxNQUFPQyxLQUF1QixJQUFJO2NBQ2hEQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QixNQUFNekMsT0FBTyxHQUFHd0MsS0FBSyxDQUFDRSxhQUFhLENBQUNDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7Y0FFNUV0QyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBRXBCLElBQUlOLE9BQU8sS0FBS1EsUUFBUSxFQUFFO2NBRTFCLE1BQU0zQixJQUFJLEdBQUc7Z0JBQ1p1QixJQUFJO2dCQUNKUSxLQUFLLEVBQUVaO2VBQ1A7Y0FDRCxNQUFNNkMsS0FBSyxHQUFpQjtnQkFDM0JwRixNQUFNLEVBQUVvQixJQUFJO2dCQUNaNkQsYUFBYSxFQUFFN0Q7ZUFDZjtjQUNENEIsV0FBVyxDQUFDVCxPQUFPLENBQUM7Y0FDcEIsTUFBTUYsTUFBTSxDQUFDK0MsS0FBSyxDQUFDO1lBQ3BCLENBQUM7WUFFRCxPQUNDNUksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0MsR0FBRztjQUFBLEdBQU1VLEtBQUs7Y0FBRXdGLE1BQU0sRUFBRUE7WUFBTSxHQUM3Q3RJLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixPQUFPO2NBQ1BwRCxHQUFHLEVBQUVxRCxVQUFVO2NBQ2Z0RyxTQUFTLEVBQUV3SCxVQUFVO2NBQ3JCaUIsZUFBZSxFQUFFekMsVUFBVTtjQUMzQjBDLDhCQUE4QixFQUFFLElBQUk7Y0FDcENDLE9BQU8sRUFBRTNDLFVBQVUsR0FBR3lCLFdBQVcsR0FBRzdDLFNBQVM7Y0FDN0NnRSxTQUFTLEVBQUU1QyxVQUFVLEdBQUdnQyxhQUFhLEdBQUdwRDtZQUFTLEdBRWhEb0IsVUFBVSxHQUFHTyxLQUFLLEdBQUczRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUYsU0FBQSxDQUFBc0QsUUFBUTtjQUFDbEQsT0FBTyxFQUFFWTtZQUFLLEVBQUksQ0FDekMsRUFDVjNHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUErQixHQUM3Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBMEgsSUFBSTtjQUFDbEgsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkhBLElBQUFoQyxNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBd0IsS0FBQSxHQUFBeEIsT0FBQTtVQUNPO1VBQVUsU0FBVTRCLFFBQVFBLENBQUM7WUFDbkNnRSxNQUFNO1lBQ056RixTQUFTO1lBQ1QyRixPQUFPO1lBQ1BJLElBQUk7WUFDSkQsUUFBUTtZQUNSSyxRQUFRO1lBQ1JDLFdBQVc7WUFDWE07VUFBVyxDQUNjO1lBQ3pCLE1BQU16RCxHQUFHLEdBQUdyRCxNQUFBLENBQUFTLE9BQUssQ0FBQzZDLE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBRTlDO1lBRUEsTUFBTXlELFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCRCxXQUFXLENBQUMsQ0FBQ1osUUFBUSxDQUFDO2NBQ3RCLElBQUksQ0FBQ0EsUUFBUSxFQUFFO2dCQUNkYyxVQUFVLENBQUMsTUFBSztrQkFDZixNQUFNQyxFQUFFLEdBQUc1RCxHQUFHLENBQUNJLE9BQU87a0JBRXRCLElBQUl3RCxFQUFFLEVBQUU7b0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtvQkFDcENGLEtBQUssQ0FBQ0csa0JBQWtCLENBQUNKLEVBQUUsQ0FBQztvQkFDNUJDLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXZCLE1BQU1DLFNBQVMsR0FBR25DLFVBQVUsQ0FBQ29DLFlBQVksRUFBRTtvQkFFM0MsSUFBSUQsU0FBUyxFQUFFO3NCQUNkQSxTQUFTLENBQUNFLGVBQWUsRUFBRTtzQkFDM0JGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDUixLQUFLLENBQUM7O29CQUcxQkQsRUFBRSxDQUFDVSxLQUFLLEVBQUU7O2dCQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRVAsQ0FBQztZQUVELE1BQU12RixHQUFHLEdBQUcsc0RBQXNEaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUVwRyxNQUFNLENBQUN1RyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHNUcsTUFBQSxDQUFBUyxPQUFLLENBQUM2RixRQUFRLENBQUNQLE9BQU8sQ0FBQztZQUNqRCxNQUFNakQsS0FBSyxHQUFHLEVBQUU7WUFFaEI5QyxNQUFBLENBQUFTLE9BQUssQ0FBQzhDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCeUQsVUFBVSxDQUFDLE1BQUs7Z0JBQ2YsTUFBTW1DLFFBQVEsR0FBRzlGLEdBQUcsQ0FBQ0ksT0FBTyxFQUFFMkYsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDdkQsSUFBSUQsUUFBUSxFQUFFO2tCQUNiQSxRQUFRLENBQUN4QixLQUFLLEVBQUU7a0JBQ2hCLE1BQU0wQixNQUFNLEdBQUdGLFFBQVEsQ0FBQ3hDLEtBQUssQ0FBQzBDLE1BQU07a0JBQ3BDRixRQUFRLENBQUNHLGlCQUFpQixDQUFDRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2NBRTlDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTWYsTUFBTSxHQUFHLE1BQU9DLEtBQXVCLElBQUk7Y0FDaERBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0ExQixXQUFXLENBQUMsS0FBSyxDQUFDO2NBRWxCLElBQUlILEtBQUssS0FBS0osUUFBUSxFQUFFO2NBRXhCLE1BQU0zQixJQUFJLEdBQUc7Z0JBQUV1QixJQUFJO2dCQUFFUTtjQUFLLENBQUU7Y0FDNUIsTUFBTWlDLEtBQUssR0FBaUI7Z0JBQzNCcEYsTUFBTSxFQUFFb0IsSUFBSTtnQkFDWjZELGFBQWEsRUFBRTdEO2VBQ2Y7Y0FFRDRCLFdBQVcsQ0FBQ0csS0FBSyxDQUFDO2NBQ2xCLE1BQU1kLE1BQU0sQ0FBQytDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsTUFBTVcsUUFBUSxHQUFJekIsQ0FBeUMsSUFBSTtjQUM5RGxCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ3RFLE1BQU0sQ0FBQ21ELEtBQUssQ0FBQztZQUN6QixDQUFDO1lBQ0QsT0FDQzNHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUsyQyxHQUFHLEVBQUVBLEdBQUc7Y0FBRWpELFNBQVMsRUFBRWdDLEdBQUc7Y0FBQSxHQUFNVSxLQUFLO2NBQUV3RixNQUFNLEVBQUVBO1lBQU0sR0FDdkR0SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxLQUFBLENBQUFJLFFBQVc7Y0FBQ3NFLElBQUksRUFBRUEsSUFBSTtjQUFFb0QsUUFBUSxFQUFFQSxRQUFRO2NBQUU1QyxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUV4RDtVQUVSOzs7Ozs7Ozs7OztVQ3JGQTs7VUFFQTZDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0EvQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTNHLE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVU0RyxpQkFBaUJBLENBQUNkLE9BQU8sRUFBRUMsV0FBVyxFQUFFSSxVQUFVLEdBQUcsS0FBSztZQUN6RSxNQUFNL0MsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUM5QyxNQUFNLENBQUNxRyxTQUFTLENBQUMsR0FBRzNKLE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUNLLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUc1RyxNQUFBLENBQUFTLE9BQUssQ0FBQzZGLFFBQVEsQ0FBdUM7Y0FBRXNELE1BQU0sRUFBRSxLQUFLO2NBQUU3RCxPQUFPLEVBQUU7WUFBRSxDQUFFLENBQUM7WUFDOUcsTUFBTThELFlBQVksR0FBR2xELEtBQUssRUFBRWlELE1BQU0sR0FBR2pELEtBQUssQ0FBQ1osT0FBTyxHQUFHQSxPQUFPO1lBRTVELElBQUkrRCxNQUFNLEdBQUcxRCxVQUFVLEdBQ3BCeUQsWUFBWSxHQUNYQSxZQUFZLEdBQ1osRUFBRSxHQUNIQSxZQUFZLEtBQUssRUFBRSxJQUFJQSxZQUFZLEtBQUs3RSxTQUFTLEdBQ2pEZ0IsV0FBVyxHQUNYNkQsWUFBWSxJQUFJN0QsV0FBVyxJQUFJLEVBQUU7WUFFcEMsT0FBTztjQUFFM0MsR0FBRztjQUFFc0csU0FBUztjQUFFaEQsS0FBSyxFQUFFbUQsTUFBTTtjQUFFbEQ7WUFBUSxDQUFFO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQTVHLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFFQSxJQUFBc0MsT0FBQSxHQUFBdEMsT0FBQTtVQVFPO1VBQVUsU0FBVXVDLFFBQVFBLENBQUM7WUFBRW5DLFFBQVE7WUFBRXNCLE9BQU87WUFBRW9JLE1BQU07WUFBRSxHQUFHdEg7VUFBSyxJQUFxQjtZQUFFc0gsTUFBTSxFQUFFO1VBQUksQ0FBRTtZQUM3RyxNQUFNQyxXQUFXLEdBQUdySSxPQUFPO1lBRTNCLE9BQ0MzQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0MsT0FBTztjQUFFakIsT0FBTyxFQUFFcUk7WUFBVyxHQUMxRDNKLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVd0MsWUFBWUEsQ0FBQztZQUFFeEMsUUFBUTtZQUFFc0IsT0FBTztZQUFFb0ksTUFBTTtZQUFFLEdBQUd0SDtVQUFLLElBQXFCO1lBQUVzSCxNQUFNLEVBQUU7VUFBSSxDQUFFO1lBQ2pILE1BQU1DLFdBQVcsR0FBR3JJLE9BQU87WUFDM0IsT0FDQzNCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixPQUFBLENBQUFSLFVBQVU7Y0FBQSxHQUFLVSxLQUFLO2NBQUVULElBQUksRUFBRVIsTUFBQSxDQUFBbUIsS0FBSyxDQUFDQyxPQUFPO2NBQUVqQixPQUFPLEVBQUVxSTtZQUFXLEdBQzlEM0osUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JPLE1BQU00SixVQUFVLEdBQUFQLE9BQUEsQ0FBQU8sVUFBQSxHQUFHO1lBQ3pCQyxTQUFTLEVBQUU7Y0FDVnRKLE9BQU8sRUFBRTtnQkFBRXVKLENBQUMsRUFBRSxNQUFNO2dCQUFFdEosT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFcUosQ0FBQyxFQUFFLENBQUM7Z0JBQUV0SixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUVrSixDQUFDLEVBQUUsS0FBSztnQkFBRXRKLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBRURQLE9BQU8sRUFBRTtjQUNSRyxPQUFPLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDdkJDLE9BQU8sRUFBRTtnQkFBRXFKLENBQUMsRUFBRSxDQUFDO2dCQUFFdEosT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFa0osQ0FBQyxFQUFFLEtBQUs7Z0JBQUV0SixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNEb0osbUJBQW1CLEVBQUU7Y0FDcEJ4SixPQUFPLEVBQUU7Z0JBQUV1SixDQUFDLEVBQUUsTUFBTTtnQkFBRXRKLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDbENDLE9BQU8sRUFBRTtnQkFBRXFKLENBQUMsRUFBRSxDQUFDO2dCQUFFdEosT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFb0osQ0FBQyxFQUFFLEtBQUs7Z0JBQUV4SixPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTs7V0FFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFoQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUssTUFBQSxHQUFBckssT0FBQTtVQUVBLElBQUFzSyxlQUFBLEdBQUF0SyxPQUFBO1VBWU8sV0FiUDs7VUFhaUIsU0FBVXVLLFVBQVVBLENBQUM7WUFDckNDLEtBQUs7WUFDTEMsV0FBVztZQUNYQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsU0FBUztZQUNUM0ksSUFBSSxHQUFHO1VBQVksQ0FDRDtZQUNsQixJQUFJLENBQUN5SSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE9BQ0MzSyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEosTUFBQSxDQUFBUSxLQUFLO2NBQUNILElBQUk7Y0FBQ3ZLLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ3dLLE9BQU8sRUFBRUE7WUFBTyxHQUMvRDVLLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2SixlQUFBLENBQUFRLGtCQUFrQjtjQUNsQkMsU0FBUyxFQUFFSixPQUFPO2NBQ2xCQSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJLLFFBQVEsRUFBRUwsT0FBTztjQUNqQkMsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCM0ksSUFBSSxFQUFFQSxJQUFJO2NBQ1Z3SSxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJELEtBQUssRUFBRUE7WUFBSyxFQUNYLENBQ0s7VUFFVjtVQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNELElBQUF6SyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRU87VUFBVSxTQUFVaUwsVUFBVUEsQ0FBQztZQUFFVDtVQUFLLENBQWlEO1lBQzdGLElBQUksQ0FBQ0EsS0FBSyxFQUFFVSxRQUFRLEVBQUU7Y0FDckIsT0FBT25MLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQWEsT0FBTztnQkFBQ0wsSUFBSSxFQUFDLFFBQVE7Z0JBQUM1QixTQUFTLEVBQUM7Y0FBVyxFQUFHOztZQUV2RCxPQUFPSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMkQsTUFBQSxDQUFBRyxLQUFLO2NBQUNwRCxHQUFHLEVBQUVxSixLQUFLLENBQUNVLFFBQVE7Y0FBRS9LLFNBQVMsRUFBQztZQUFRLEVBQUc7VUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1MLGNBQUEsR0FBQW5MLE9BQUE7VUFDQSxJQUFBb0wsU0FBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFxQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQXFMLGlCQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQW9FLE1BQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBc0wsV0FBQSxHQUFBdEwsT0FBQTtVQVdPO1VBQVUsU0FBVThLLGtCQUFrQkEsQ0FBQztZQUM3Q0gsT0FBTztZQUNQRixXQUFXO1lBQ1hELEtBQUs7WUFDTEksU0FBUztZQUNUSSxRQUFRO1lBQ1IvSSxJQUFJLEdBQUcsWUFBWTtZQUNuQjhJO1VBQVMsQ0FDaUI7WUFDMUIsTUFBTSxDQUFDUSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHekwsTUFBQSxDQUFBUyxPQUFLLENBQUM2RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ29GLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUczTCxNQUFBLENBQUFTLE9BQUssQ0FBQzZGLFFBQVEsRUFBRTtZQUUxQyxNQUFNc0YsV0FBVyxHQUFHbEIsV0FBVyxDQUFDbUIsT0FBTztZQUN2QyxNQUFNQyxLQUFLLEdBQUdwQixXQUFXLENBQUNxQixjQUFjO1lBQ3hDLE1BQU1DLE1BQU0sR0FBR3RCLFdBQVcsQ0FBQ3NCLE1BQU07WUFDakNmLFFBQVEsR0FBR0EsUUFBUSxJQUFJTCxPQUFPO1lBRTlCO1lBQ0EsTUFBTXFCLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSFIsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTVMsTUFBTSxHQUFHLE1BQU1yQixTQUFTLEVBQUU7Z0JBRWhDLElBQUksQ0FBQ3FCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO2tCQUNuQixJQUFJRCxNQUFNLENBQUNSLEtBQUssQ0FBQ1UsSUFBSSxLQUFLLEVBQUUsRUFBRTtvQkFDN0I7b0JBQ0FwQixTQUFTLEVBQUU7O2tCQUVaO2tCQUVBLE1BQU0sSUFBSXFCLEtBQUssQ0FBQ0wsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztnQkFFdEMsSUFBSWhCLFNBQVMsRUFBRUEsU0FBUyxFQUFFO2VBQzFCLENBQUMsT0FBT2xELENBQUMsRUFBRTtnQkFDWDdFLE9BQU8sQ0FBQ3FKLEdBQUcsQ0FBQ3hFLENBQUMsQ0FBQztnQkFDZDZELFFBQVEsQ0FBQ0csS0FBSyxDQUFDUyxNQUFNLENBQUNDLFNBQVMsQ0FBQztlQUNoQyxTQUFTO2dCQUNUZixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTWdCLFVBQVUsR0FBR1gsS0FBSyxDQUFDWSxNQUFNLENBQUN4SyxJQUFJLENBQUMsSUFBSTRKLEtBQUssQ0FBQ1ksTUFBTSxDQUFDQyxXQUFXO1lBQ2pFLE9BQ0MzTSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUixhQUFBLENBQUFNLE1BQU0sQ0FBQ29NLEdBQUc7Y0FBQSxHQUFLckIsV0FBQSxDQUFBdEIsVUFBVSxDQUFDeEosT0FBTztjQUFFTCxTQUFTLEVBQUM7WUFBNEMsR0FDekZKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGlCQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLb0wsS0FBSyxDQUFDM0osS0FBSyxDQUFNLEVBQ3RCbkMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZUFBT29MLEtBQUssQ0FBQ2UsUUFBUSxDQUFRLENBQ3JCLEVBQ1Q3TSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEssY0FBQSxDQUFBMEIsYUFBYTtjQUFDcEIsS0FBSyxFQUFFQSxLQUFLO2NBQUVxQixPQUFPLEVBQUM7WUFBUyxFQUFHLEVBQ2hEdEMsS0FBSyxJQUNMekssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUF1TSxRQUFBLFFBQ0NoTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBK0IsR0FDN0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxNQUFBLENBQUE2RyxVQUFVO2NBQUNULEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzVCekssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVksR0FDMUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU8rSixLQUFLLENBQUN0RSxJQUFJLENBQVEsRUFDekJuRyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxlQUFPb0wsS0FBSyxDQUFDbUIsZ0JBQWdCLENBQVEsQ0FDaEMsQ0FDRCxDQUVQLEVBRURqTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLb0wsS0FBSyxDQUFDb0IsTUFBTSxDQUFNLEVBQ3ZCbE4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQW9CLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUNxSyxPQUFPLEVBQUMsU0FBUztjQUFDSSxRQUFRO2NBQUN4TCxPQUFPLEVBQUVzSjtZQUFRLEdBQ2xEVyxXQUFXLENBQUN3QixNQUFNLENBQ1gsRUFDVHBOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMySyxTQUFBLENBQUE3SSxRQUFRO2NBQUN1SyxPQUFPLEVBQUMsU0FBUztjQUFDcEwsT0FBTyxFQUFFc0s7WUFBUyxHQUM1Q0wsV0FBVyxDQUFDeUIsUUFBUSxDQUNYLENBQ0YsRUFDVnJOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFrQixHQUNoQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQVksR0FBRXFNLFVBQVUsQ0FBUSxDQUMzQyxFQUNOek0sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRLLGlCQUFBLENBQUFnQyxnQkFBZ0I7Y0FBQzlCLFFBQVEsRUFBRUEsUUFBUTtjQUFFbkQsR0FBRyxFQUFDO1lBQVksRUFBRyxDQUM3QztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlGQSxJQUFBckksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFVTztVQUFXLFNBQVUyQixTQUFTQSxDQUFDO1lBQ3JDb0csSUFBSTtZQUVKNUgsU0FBUztZQUNUbU4sV0FBVztZQUNYbE47VUFBUSxDQUNLO1lBQ2IsTUFBTStCLEdBQUcsR0FBRywyQkFBMkJoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXpFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNhLE1BQUEsQ0FBQWlNLEtBQUs7Y0FBQ3BOLFNBQVMsRUFBRWdDO1lBQUcsR0FDcEJwQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLc0gsSUFBSSxDQUFNLEVBQ2ZoSSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFHTixTQUFTLEVBQUM7WUFBSSxHQUFFbU4sV0FBVyxDQUFLLEVBQ2xDbE4sUUFBUSxDQUNGO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBV087VUFBVSxTQUFVc0YsV0FBV0EsQ0FBQztZQUN0Q25FLEdBQUc7WUFDSHFNLEtBQUs7WUFDTGxKLEdBQUcsR0FBRyxFQUFFO1lBQ1JtSixNQUFNLEdBQUcsVUFBVTtZQUNuQnhMLElBQUk7WUFDSnlMLElBQUksR0FBRyxJQUFJO1lBQ1hyTSxPQUFPO1lBQ1BsQjtVQUFTLENBQ1U7WUFDbkIsSUFBSWdDLEdBQUcsR0FBRyxnQkFBZ0JoQyxTQUFTLElBQUksRUFBRSxJQUFJc04sTUFBTSxFQUFFO1lBRXJELElBQUlELEtBQUssRUFBRXJMLEdBQUcsSUFBSSxTQUFTcUwsS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQ3JNLEdBQUcsSUFBSUEsR0FBRyxLQUFLLEVBQUUsRUFBRTtjQUN2QkEsR0FBRyxHQUFHLDJCQUEyQnNNLE1BQU0sSUFBSXhMLElBQUksR0FBRyxHQUFHQSxJQUFJLEdBQUcsR0FBRyxFQUFFLFNBQVM7O1lBRzNFLElBQUlaLE9BQU8sRUFBRSxPQUFPdEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFLEdBQUdnQyxHQUFHO1lBQXdCLEVBQUk7WUFFdEUsT0FBT3BDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyRCxNQUFBLENBQUFHLEtBQUs7Y0FBQ3BELEdBQUcsRUFBRSxHQUFHQSxHQUFHLFNBQVN1TSxJQUFJLEVBQUU7Y0FBRXBKLEdBQUcsRUFBRUEsR0FBRztjQUFFbkUsU0FBUyxFQUFFZ0M7WUFBRyxFQUFJO1VBQ3ZFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBcEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJOLE1BQUEsR0FBQTNOLE9BQUE7VUFFTztVQUFXLFNBQVU2TSxhQUFhQSxDQUFDO1lBQ3pDcEIsS0FBSztZQUNMcUIsT0FBTyxHQUFHO1VBQU8sQ0FJakI7WUFDQSxJQUFJLENBQUNyQixLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE9BQU8xTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa04sTUFBQSxDQUFBQyxLQUFLO2NBQUMzTCxJQUFJLEVBQUU2SztZQUFPLEdBQUdyQixLQUFLLENBQVM7VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkEsSUFBQWxLLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVBOzs7OztVQUtBLE1BQU02TixpQkFBaUIsR0FBR0EsQ0FBQztZQUFFakosSUFBSTtZQUFFa0o7VUFBSyxDQUFFLEtBQUk7WUFDN0MsTUFBTUMsbUJBQW1CLEdBQUdBLENBQUM7Y0FBRTdCO1lBQU0sQ0FBRSxLQUFJO2NBQzFDLFFBQVFBLE1BQU07Z0JBQ2IsS0FBSyxNQUFNO2tCQUNWLE9BQU9uTSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtvQkFBS04sU0FBUyxFQUFDO2tCQUFrQyxHQUFFMk4sS0FBSyxDQUFPO2dCQUV2RSxLQUFLLFNBQVM7a0JBQ2IsT0FBTy9OLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO29CQUFLTixTQUFTLEVBQUM7a0JBQXFDLEdBQUUyTixLQUFLLENBQU87Z0JBRTFFLEtBQUssU0FBUztrQkFDYixPQUFPL04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7b0JBQUtOLFNBQVMsRUFBQztrQkFBcUMsR0FBRTJOLEtBQUssQ0FBTztnQkFFMUU7a0JBQ0MsT0FBTy9OLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQTBILElBQUk7b0JBQUM5SSxTQUFTLEVBQUMsSUFBSTtvQkFBQzRCLElBQUksRUFBRTtrQkFBUyxFQUFJOztZQUVsRCxDQUFDO1lBRUQsT0FDQ2hDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM0QixXQUFBLENBQUF5QyxJQUFJO2NBQUMzRSxTQUFTLEVBQUMsVUFBVTtjQUFDOEUsSUFBSSxFQUFFTCxJQUFJLENBQUM3QjtZQUFHLEdBQ3hDaEQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NOLG1CQUFtQjtjQUFDN0IsTUFBTSxFQUFFdEgsSUFBSSxDQUFDc0g7WUFBTSxFQUFJLENBQ3RDO1VBRVQsQ0FBQztVQUVNO1VBQVcsU0FBVThCLGFBQWFBLENBQUM7WUFBRUMsSUFBSTtZQUFFOU47VUFBUyxDQUFFO1lBQzVELE1BQU1nQyxHQUFHLEdBQUcsNkJBQTZCaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMzRSxNQUFNK04sYUFBYSxHQUFHRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxDQUFDdkosSUFBSSxFQUFFa0osS0FBSyxLQUFLL04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29OLGlCQUFpQjtjQUFDakosSUFBSSxFQUFFQSxJQUFJO2NBQUV3RCxHQUFHLEVBQUUwRixLQUFLO2NBQUVBLEtBQUssRUFBRUEsS0FBSyxHQUFHO1lBQUMsRUFBSSxDQUFDO1lBQ2hILE9BQU8vTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQztZQUFHLEdBQUcrTCxhQUFhLENBQU87VUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFuTyxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVvTyxXQUFXQSxDQUFDO1lBQUVsTTtVQUFLLENBQUU7WUFDL0MsT0FDQ25DLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUE4QixHQUNoREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBSU4sU0FBUyxFQUFDO1lBQTRCLEdBQUUrQixLQUFLLENBQU0sQ0FDOUM7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBbU0sY0FBQSxHQUFBck8sT0FBQTtVQUNBLElBQUFzTyxZQUFBLEdBQUF0TyxPQUFBO1VBQ0EsSUFBQW9FLE1BQUEsR0FBQXBFLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVV1TyxVQUFVQSxDQUFDO1lBQUVwTyxTQUFTO1lBQUVDLFFBQVE7WUFBRW9PLEtBQUs7WUFBRWxLLEdBQUc7WUFBRUwsTUFBTSxHQUFHLE1BQU07WUFBRS9CLEtBQUs7WUFBRStMO1VBQUksQ0FBRTtZQUN0RyxNQUFNOUwsR0FBRyxHQUFHLGlDQUFpQzhCLE1BQU0sR0FBRzlELFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDeEYsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUNsQnBDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUFtQixHQUNwQytCLEtBQUssSUFBSW5DLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2TixZQUFBLENBQUFGLFdBQVc7Y0FBQ2xNLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3ZDbkMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQXNCLEdBQUVDLFFBQVEsQ0FBVyxDQUNyRCxFQUNUNk4sSUFBSSxJQUFJbE8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzROLGNBQUEsQ0FBQUwsYUFBYTtjQUFDQyxJQUFJLEVBQUVBLElBQUk7Y0FBRTlOLFNBQVMsRUFBQztZQUFzQixFQUFHLEVBQ3RFcU8sS0FBSyxJQUFJek8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQUcsS0FBSztjQUFDcEQsR0FBRyxFQUFFcU4sS0FBSztjQUFFbEssR0FBRyxFQUFFQSxHQUFHO2NBQUVuRSxTQUFTLEVBQUM7WUFBb0IsRUFBRyxDQUNuRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQSxJQUFBc08sV0FBQSxHQUFBek8sT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVUsU0FBVTBPLFdBQVdBLENBQUNsTSxLQUFLO1lBQzNDLE1BQU1tRyxLQUFLLEdBQUc7Y0FDYmdHLGNBQWMsRUFBRSxHQUFHO2NBQ25CQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztjQUNsRkMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztjQUNwQkMsU0FBUyxFQUFFO2FBQ1g7WUFDRC9PLE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXlMLFVBQVUsR0FBRyxJQUFJTixXQUFBLENBQUFqTyxPQUFVLEVBQUU7Y0FDbkN1TyxVQUFVLENBQUNDLFdBQVcsQ0FBQztnQkFBRSxHQUFHckcsS0FBSztnQkFBRSxHQUFHbkc7Y0FBSyxDQUFFLENBQUM7WUFDL0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztVQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUF5TSxLQUFBLEdBQUFqUCxPQUFBO1VBQ0EsSUFBQWtQLE1BQUEsR0FBQWxQLE9BQUE7VUFFTztVQUFVLFNBQVVtUCxnQkFBZ0JBLENBQUNDLFNBQVMsRUFBRUMsUUFBUTtZQUM5RCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdOLEtBQUssQ0FBQzVJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDd0YsS0FBSyxFQUFFMkQsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQzVJLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUM0SSxLQUFLLENBQUMzTCxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNbU0sVUFBVSxHQUFHLElBQUlQLE1BQUEsQ0FBQVEsWUFBWSxDQUFDTixTQUFTLENBQUM7Y0FDOUMsTUFBTU8sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUlqSixLQUFLLEdBQUcrSSxVQUFVLENBQUMvSSxLQUFLO2dCQUM1QjhJLFFBQVEsQ0FBQzlJLEtBQUssQ0FBQztnQkFDZjZJLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDSCxLQUFLLENBQUM7Z0JBQzFCLElBQUlHLFVBQVUsQ0FBQ0gsS0FBSyxFQUFFRCxRQUFRLENBQUMzSSxLQUFLLENBQUM7Y0FDdEMsQ0FBQztjQUNEK0ksVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNRSxPQUFPLEdBQUdQLEtBQUssSUFBSSxDQUFDLENBQUN6RCxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ2dFLE9BQU8sRUFBRWhFLEtBQUssQ0FBQztVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQTlMLE1BQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVUsU0FBVThQLFNBQVNBLENBQUE7WUFDbkMsT0FDQy9QLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWEsRUFBTyxFQUNuQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWMsRUFBTyxFQUNwQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWEsRUFBTyxFQUNuQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWMsRUFBTyxFQUNwQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVMsRUFBTyxFQUMvQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWEsRUFBTyxDQUM5QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErUCxRQUFBLEdBQUEvUCxPQUFBO1VBQ087VUFBWSxTQUFVZ1EsYUFBYUEsQ0FBQTtZQUN6QyxPQUNDalEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQXVCLEdBQ3JDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc1AsUUFBQSxDQUFBRSxPQUFPO2NBQUNDLE1BQU07Y0FBQ2pPLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDNUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBbEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1RLE9BQUEsR0FBQW5RLE9BQUE7VUFFTztVQUFXLFNBQVVvUSxVQUFVQSxDQUFDO1lBQUVoUSxRQUFRO1lBQUVELFNBQVM7WUFBRW9MO1VBQVEsQ0FBRTtZQUN2RSxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTXBKLEdBQUcsR0FBRyx3QkFBd0JoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3RFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDakJvSixRQUFRLElBQ1J4TCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMkIsR0FDekNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxPQUFBLENBQUFMLFNBQVMsT0FBRyxFQUNaMVAsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNPO1VBQVcsU0FBVXFRLGFBQWFBLENBQUM7WUFBRWpRLFFBQVE7WUFBRUQsU0FBUztZQUFFb0wsUUFBUTtZQUFFbUMsSUFBSSxHQUFHM0k7VUFBUyxDQUFFO1lBQzVGLE1BQU11TCxLQUFLLEdBQUc7Y0FDYkMsRUFBRSxFQUFFLGNBQWM7Y0FDbEIvUCxPQUFPLEVBQUU7YUFDVDtZQUNELE1BQU1nUSxPQUFPLEdBQUdGLEtBQUssQ0FBQzVDLElBQUksQ0FBQyxJQUFJNEMsS0FBSyxDQUFDOVAsT0FBTztZQUM1QyxNQUFNMkIsR0FBRyxHQUFHLG1CQUFtQnFPLE9BQU8sR0FBR3JRLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFM0UsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUNqQi9CLFFBQVEsRUFDUm1MLFFBQVEsSUFDUnhMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUEyQixHQUN6Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQTROLE9BQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRXhDLElBQUksRUFBQztZQUFJLEVBQUcsQ0FFcEMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBM04sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1RLE9BQUEsR0FBQW5RLE9BQUE7VUFPTztVQUFXLFNBQVVxTixnQkFBZ0JBLENBQUM7WUFBRWpOLFFBQVE7WUFBRUQsU0FBUztZQUFFb0w7VUFBUSxDQUEwQjtZQUNyRyxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTXBKLEdBQUcsR0FBRyxvQkFBb0JoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDakJvSixRQUFRLElBQ1J4TCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMkIsR0FDekNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxPQUFBLENBQUFMLFNBQVMsT0FBRyxFQUNaMVAsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXlRLGFBQUEsR0FBQXpRLE9BQUE7VUFFTztVQUFVLFNBQVUwUSxTQUFTQSxDQUFDO1lBQUVyUCxPQUFPO1lBQUVhLEtBQUs7WUFBRTlCLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQUksQ0FBRTtZQUMzRSxNQUFNbUcsT0FBTyxHQUFHbkcsRUFBdUI7WUFFdkMsSUFBSWdCLE9BQU8sRUFBRTtjQUNaLE9BQ0N0QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUU4sU0FBUyxFQUFDO2NBQXFCLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1EsYUFBQSxDQUFBRSxZQUFZO2dCQUFDQyxNQUFNLEVBQUMsS0FBSztnQkFBQzNQLEtBQUssRUFBQztjQUFPLEVBQUcsRUFDMUNiLFFBQVEsQ0FDRDs7WUFHWCxPQUNDTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUM7WUFBcUIsR0FDdENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixPQUFPLFFBQUV0RSxLQUFLLENBQVcsRUFDekI5QixRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVXlRLFlBQVlBLENBQUM7WUFBRXpRO1VBQVEsQ0FBRTtZQUNuRCxPQUFPTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBWSxHQUFFQyxRQUFRLENBQVE7VUFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRU87VUFBVSxTQUFVOFEsYUFBYUEsQ0FBQztZQUFFMVEsUUFBUTtZQUFFc0IsT0FBTztZQUFFRyxRQUFRO1lBQUUsR0FBR1c7VUFBSyxDQUFFO1lBQ2pGLE1BQU0sQ0FBQ3VPLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdqUixNQUFBLENBQUFTLE9BQUssQ0FBQzZGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTBELFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUJpSCxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU10UCxPQUFPLEVBQUU7Y0FDZnNQLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE9BQ0NqUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFZCxPQUFPLEVBQUVxSSxXQUFXO2NBQUVsSSxRQUFRLEVBQUVBLFFBQVEsSUFBSWtQO1lBQVUsR0FDdkUzUSxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVTZRLGlCQUFpQkEsQ0FBQztZQUFFN1EsUUFBUTtZQUFFeUIsUUFBUTtZQUFFMUIsU0FBUztZQUFFdUIsT0FBTztZQUFFLEdBQUdjO1VBQUssQ0FBRTtZQUNoRyxNQUFNLENBQUN1TyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHalIsTUFBQSxDQUFBUyxPQUFLLENBQUM2RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU0wRCxXQUFXLEdBQUcsTUFBTXpCLEtBQUssSUFBRztjQUNqQ0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJ5SSxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU10UCxPQUFPLEVBQUU7Y0FFZnFGLFVBQVUsQ0FBQyxNQUFLO2dCQUNmaUssYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUNELElBQUlELFVBQVUsRUFBRTtjQUNmLE9BQ0NoUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUU4sU0FBUyxFQUFDO2NBQXlDLEdBQzFESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBNE4sT0FBTztnQkFBQ0MsTUFBTTtnQkFBQ2pPLElBQUksRUFBQztjQUFTLEVBQUcsQ0FDekI7O1lBR1gsTUFBTUUsR0FBRyxHQUFHaEMsU0FBUyxHQUFHLEdBQUdBLFNBQVMsaUJBQWlCLEdBQUcsZ0JBQWdCO1lBQ3hFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQTJQLGFBQWE7Y0FBQy9RLFNBQVMsRUFBRWdDLEdBQUc7Y0FBQSxHQUFNSyxLQUFLO2NBQUVkLE9BQU8sRUFBRXFJLFdBQVc7Y0FBRWxJLFFBQVEsRUFBRUEsUUFBUSxJQUFJa1A7WUFBVSxHQUM5RjNRLFFBQVEsQ0FDTTtVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTZPLEtBQUEsR0FBQWpQLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFPTyxXQVRQOztVQVNpQixTQUFVbVIsV0FBV0EsQ0FBQztZQUFFQyxLQUFLO1lBQUU5SCxRQUFRO1lBQUUsR0FBRytIO1VBQUksQ0FBcUI7WUFDckYsTUFBTUMsUUFBUSxHQUFHckMsS0FBSyxDQUFDNUwsTUFBTSxDQUFtQixJQUFJLENBQUM7WUFFckQsTUFBTWtPLGlCQUFpQixHQUFJakosS0FBMEMsSUFBSTtjQUN4RSxJQUFJZ0osUUFBUSxDQUFDOU4sT0FBTyxFQUFFO2dCQUNyQixNQUFNZ08sV0FBVyxHQUFHLElBQUlDLEtBQUssQ0FBQyxRQUFRLEVBQUU7a0JBQ3ZDQyxPQUFPLEVBQUUsSUFBSTtrQkFDYkMsVUFBVSxFQUFFO2lCQUNaLENBQUM7Z0JBQ0ZMLFFBQVEsQ0FBQzlOLE9BQU8sQ0FBQ29PLGFBQWEsQ0FBQ0osV0FBVyxDQUFDOztZQUU3QyxDQUFDO1lBRUQsT0FDQ3ZDLEtBQUEsQ0FBQXhPLGFBQUE7Y0FBT04sU0FBUyxFQUFDLGNBQWM7Y0FBQ21KLFFBQVEsRUFBRWlJO1lBQWlCLEdBQzFEdEMsS0FBQSxDQUFBeE8sYUFBQSxlQUNDd08sS0FBQSxDQUFBeE8sYUFBQTtjQUFPd0IsSUFBSSxFQUFDLE9BQU87Y0FBQ21CLEdBQUcsRUFBRWtPLFFBQVE7Y0FBRWhJLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU0rSDtZQUFJLEVBQUksRUFDbkVwQyxLQUFBLENBQUF4TyxhQUFBLENBQUNSLGFBQUEsQ0FBQU0sTUFBTSxDQUFDb00sR0FBRztjQUNWeE0sU0FBUyxFQUFDLHNCQUFzQjtjQUNoQ1UsT0FBTyxFQUFFO2dCQUFFZ1IsS0FBSyxFQUFFUixJQUFJLENBQUNTLE9BQU8sR0FBRyxHQUFHLEdBQUc7Y0FBQyxDQUFFO2NBQzFDaFIsVUFBVSxFQUFFO2dCQUFFQyxRQUFRLEVBQUU7Y0FBRztZQUFFLEdBRTVCc1EsSUFBSSxDQUFDUyxPQUFPLElBQUk3QyxLQUFBLENBQUF4TyxhQUFBLENBQUNSLGFBQUEsQ0FBQU0sTUFBTSxDQUFDb00sR0FBRztjQUFDeE0sU0FBUyxFQUFDLHFCQUFxQjtjQUFDTyxNQUFNO1lBQUEsRUFBRyxDQUMxRCxDQUNQLEVBQ04wUSxLQUFLLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQW5DLEtBQUEsR0FBQWpQLE9BQUE7VUFhTyxXQWRQOztVQWNpQixTQUFVK1IsVUFBVUEsQ0FBQztZQUFFM1IsUUFBUTtZQUFFc0csS0FBSztZQUFFNEM7VUFBUSxDQUFvQjtZQUNwRixPQUNDMkYsS0FBQSxDQUFBeE8sYUFBQSxjQUNFd08sS0FBSyxDQUFDK0MsUUFBUSxDQUFDN0QsR0FBRyxDQUFDL04sUUFBUSxFQUFFNlIsS0FBSyxJQUFHO2NBQ3JDO2NBQ0EsSUFBSWhELEtBQUssQ0FBQ2lELGNBQWMsQ0FBb0JELEtBQUssQ0FBQyxJQUFJLE9BQU9BLEtBQUssQ0FBQ3pQLEtBQUssQ0FBQ2tFLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzVGO2dCQUNBLE9BQU91SSxLQUFLLENBQUNrRCxZQUFZLENBQUNGLEtBQUssRUFBRTtrQkFDaENILE9BQU8sRUFBRUcsS0FBSyxDQUFDelAsS0FBSyxDQUFDa0UsS0FBSyxLQUFLQSxLQUFLO2tCQUNwQzRDLFFBQVEsRUFBRUEsQ0FBQSxLQUFNQSxRQUFRLENBQUMySSxLQUFLLENBQUN6UCxLQUFLLENBQUNrRSxLQUFLO2lCQUMxQyxDQUFDOztjQUVILE9BQU91TCxLQUFLO1lBQ2IsQ0FBQyxDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQWxTLE1BQUEsR0FBQUMsT0FBQTtVQVVPO1VBQVUsU0FBVTJRLFlBQVlBLENBQUNuTyxLQUF5QjtZQUNoRSxPQUNDekMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FDQ04sU0FBUyxFQUFDLGVBQWU7Y0FDekI0RCxLQUFLLEVBQUU7Z0JBQ045QyxLQUFLLEVBQUV1QixLQUFLLENBQUN2QixLQUFLLElBQUksTUFBTTtnQkFDNUIyUCxNQUFNLEVBQUVwTyxLQUFLLENBQUNvTyxNQUFNLElBQUksTUFBTTtnQkFDOUJ3QixVQUFVLEVBQUU1UCxLQUFLLENBQUM2UCxLQUFLLElBQUksRUFBRTtnQkFDN0JDLFlBQVksRUFBRTlQLEtBQUssQ0FBQytQLEtBQUssSUFBSTs7WUFDN0IsR0FFRHhTLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1zRCxLQUFLLEVBQUU7Z0JBQUV5TyxPQUFPLEVBQUVoUSxLQUFLLENBQUNpUSxhQUFhLEdBQUcsTUFBTSxHQUFHO2NBQU87WUFBRSxFQUFTLENBQ25FO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUExUyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBMFMsY0FBQSxHQUFBMVMsT0FBQTtVQUNBLElBQUFxSyxNQUFBLEdBQUFySyxPQUFBO1VBRUEsSUFBQTJTLEtBQUEsR0FBQTNTLE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNPO1VBQVUsU0FBVTRTLG1CQUFtQkEsQ0FBQztZQUFFMU0sSUFBSTtZQUFFL0YsU0FBUztZQUFFbVAsS0FBSztZQUFFekQsS0FBSztZQUFFekw7VUFBUSxDQUFFO1lBQ3pGLE1BQU0sQ0FBQ3lTLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUcvUyxNQUFBLENBQUFTLE9BQUssQ0FBQzZGLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsTUFBTTBNLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDaENELGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU07Y0FBRTFQLEdBQUc7Y0FBRWdGO1lBQUcsQ0FBRSxHQUFHLElBQUFzSyxjQUFBLENBQUFNLGFBQWEsRUFBQzlNLElBQUksRUFBRW9KLEtBQUssRUFBRXlELGFBQWEsRUFBRWxILEtBQUssQ0FBQztZQUNyRSxNQUFNb0gsUUFBUSxHQUFHbFQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ25DLE1BQU0ySSxTQUFTLEdBQUdBLENBQUEsS0FBSztjQUN0QjhHLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUNELE1BQU1uSSxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQixJQUFJc0ksUUFBUSxDQUFDelAsT0FBTyxDQUFDc08sT0FBTyxFQUFFO2dCQUM3Qm9CLFlBQVksQ0FBQzdOLE9BQU8sQ0FBQytDLEdBQUcsRUFBRSxNQUFNLENBQUM7O2NBR2xDMEssY0FBYyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDO1lBRUQsTUFBTUssVUFBVSxHQUFHO2NBQ2xCQyxFQUFFLEVBQUU7Z0JBQ0hsUixLQUFLLEVBQUUsZ0RBQWdEO2dCQUN2RGlMLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCa0csS0FBSyxFQUFFO2VBQ1A7Y0FDREMsRUFBRSxFQUFFO2dCQUNIcFIsS0FBSyxFQUFFLDRDQUE0QztnQkFDbkRpTCxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQmtHLEtBQUssRUFBRTs7YUFFUjtZQUNELE1BQU1FLFlBQVksR0FBR1osS0FBQSxDQUFBYSxTQUFTLENBQUNoUSxPQUFPLEtBQUssSUFBSSxHQUFHMlAsVUFBVSxDQUFDQyxFQUFFLEdBQUdELFVBQVUsQ0FBQ0csRUFBRTtZQUMvRSxPQUNDdlQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBSzJDLEdBQUcsRUFBRUEsR0FBRztjQUFFakQsU0FBUyxFQUFFQTtZQUFTLEdBQ2pDQyxRQUFRLEVBQ1J5UyxXQUFXLElBQ1g5UyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEosTUFBQSxDQUFBUSxLQUFLO2NBQUNILElBQUk7Y0FBQ3hJLEtBQUssRUFBRWlSLFVBQVUsQ0FBQ1IsS0FBQSxDQUFBYSxTQUFTLENBQUNoUSxPQUFPLENBQUMsQ0FBQ3RCLEtBQUs7Y0FBRXlJLE9BQU8sRUFBRUE7WUFBTyxHQUN2RTVLLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs4UyxZQUFZLENBQUNyUixLQUFLLENBQU0sRUFDN0JuQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBTyxHQUNyQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQXVCLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFPd0IsSUFBSSxFQUFDLFVBQVU7Y0FBQ21CLEdBQUcsRUFBRTZQO1lBQVEsRUFBSSxFQUN2Q00sWUFBWSxDQUFDcEcsTUFBTSxDQUNkLENBQ0YsRUFDTnBOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFOLFNBQVMsRUFBQztZQUFnRCxHQUNqRUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQUksTUFBTTtjQUFDcUssT0FBTyxFQUFDLFNBQVM7Y0FBQzJHLEtBQUs7Y0FBQy9SLE9BQU8sRUFBRWlKO1lBQU8sR0FDOUM0SSxZQUFZLENBQUNGLEtBQUssQ0FDWCxDQUNELENBRVYsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBdFQsTUFBQSxHQUFBQyxPQUFBO1VBV087VUFBVSxTQUFVMFQsUUFBUUEsQ0FBQztZQUFFdlQsU0FBUztZQUFFK0YsSUFBSTtZQUFFNEgsS0FBSztZQUFFakMsS0FBSztZQUFFekwsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUFpQjtZQUMxRyxNQUFNc1QsSUFBSSxHQUFHcEssTUFBTSxDQUFDb0ssSUFBSSxDQUFDOUgsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQ0EsS0FBSyxDQUFDK0gsY0FBYyxDQUFDMU4sSUFBSSxDQUFDLElBQUksQ0FBQ3lOLElBQUksRUFBRTtjQUN6QzNRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFlBQVlpRCxJQUFJLHFDQUFxQyxFQUFFMkYsS0FBSyxDQUFDO2NBQzFFLE9BQU8sSUFBSTs7WUFFWmlDLEtBQUssR0FBR0EsS0FBSyxJQUFJNkYsSUFBSSxDQUFDRSxPQUFPLENBQUMzTixJQUFJLENBQUM7WUFFbkMsTUFBTU0sT0FBTyxHQUFHbkcsRUFBRTtZQUNsQixNQUFNOEIsR0FBRyxHQUFHLGFBQWFoQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixPQUFPO2NBQ1ByRyxTQUFTLEVBQUVnQyxHQUFHO2NBQUEsb0JBQ0kwSixLQUFLLENBQUMzRixJQUFJLENBQUMsQ0FBQ29ILFdBQVc7Y0FBQSxjQUM3QnpCLEtBQUssQ0FBQzNGLElBQUksQ0FBQyxDQUFDaEUsS0FBSztjQUFBLGFBQ2xCNEwsS0FBSztjQUFBLGNBQ0pBO1lBQUssR0FFaEIxTixRQUFRLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQThULE9BQUEsR0FBQTlULE9BQUE7VUFFTztVQUFVLFNBQVVnVCxhQUFhQSxDQUFDOU0sSUFBSSxFQUFFb0osS0FBSyxFQUFFeUQsYUFBYSxFQUFFdlEsS0FBSyxHQUFHLEVBQUU7WUFDOUUsTUFBTVksR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU0rRSxHQUFHLEdBQUcsV0FBV2xDLElBQUksT0FBTztZQUNsQyxNQUFNNk4sR0FBRyxHQUFHYixZQUFZLENBQUNjLE9BQU8sQ0FBQzVMLEdBQUcsQ0FBQztZQUVyQ3JJLE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDZ00sS0FBSyxJQUFJeUUsR0FBRyxFQUFFO2NBQ25CLE1BQU1FLEtBQUssR0FBRzdRLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDMFEsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO2NBRXpELE1BQU1DLEtBQUssR0FBRyxFQUFFO2NBQ2hCRixLQUFLLEVBQUVHLE9BQU8sQ0FBRXhQLElBQWlCLElBQUk7Z0JBQ3BDLE1BQU07a0JBQUUxQyxLQUFLO2tCQUFFb0w7Z0JBQVcsQ0FBRSxHQUFHMUksSUFBSSxDQUFDeVAsT0FBTztnQkFDM0NGLEtBQUssQ0FBQ0csSUFBSSxDQUFDO2tCQUNWQyxPQUFPLEVBQUUzUCxJQUFJO2tCQUNiNFAsT0FBTyxFQUFFO29CQUNSdFMsS0FBSztvQkFDTG9MOztpQkFFRCxDQUFDO2NBQ0gsQ0FBQyxDQUFDO2NBQ0YsTUFBTW1ILEdBQUcsR0FBRyxJQUFBWCxPQUFBLENBQUFZLE1BQU0sRUFBQztnQkFDbEJDLFlBQVksRUFBRSxrQkFBa0I7Z0JBQ2hDUixLQUFLO2dCQUVMUyxXQUFXLEVBQUVBLENBQUEsS0FBSztrQkFDakIsSUFBSSxDQUFDSCxHQUFHLENBQUNJLFdBQVcsRUFBRSxFQUFFO29CQUN2QjNCLFlBQVksQ0FBQzdOLE9BQU8sQ0FBQytDLEdBQUcsRUFBRSxNQUFNLENBQUM7b0JBQ2pDcU0sR0FBRyxDQUFDSyxPQUFPLEVBQUU7b0JBQ2I7O2tCQUVETCxHQUFHLENBQUNNLFFBQVEsRUFBRTtrQkFDZCxPQUFPLElBQUk7Z0JBQ1osQ0FBQztnQkFDREMsZ0JBQWdCLEVBQUUsTUFBQUEsQ0FBQSxLQUFXO2tCQUM1QmpDLGFBQWEsRUFBRTtrQkFDZjBCLEdBQUcsQ0FBQ0ssT0FBTyxFQUFFO2dCQUNkLENBQUM7Z0JBRUQsR0FBR3RTO2VBQ0gsQ0FBQztjQUNGaVMsR0FBRyxDQUFDUSxLQUFLLEVBQUU7WUFDWixDQUFDLEVBQUUsQ0FBQzNGLEtBQUssQ0FBQyxDQUFDO1lBRVgsT0FBTztjQUFFbE0sR0FBRztjQUFFZ0Y7WUFBRyxDQUFFO1VBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBNkcsS0FBQSxHQUFBalAsT0FBQTtVQUNBLElBQUFvRSxNQUFBLEdBQUFwRSxPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUEwQk87VUFBVSxTQUFVa1YsUUFBUUEsQ0FBQztZQUFFOUQsS0FBSztZQUFFblAsSUFBSTtZQUFFMEM7VUFBSSxDQUFhO1lBQ25FLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUV1RyxRQUFRO2NBQUVoRjtZQUFJLENBQUUsR0FBR3ZCLElBQUk7WUFDL0IsT0FDQ3NLLEtBQUEsQ0FBQXhPLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQW9CLEdBQ2pDaVIsS0FBSyxJQUFJbkMsS0FBQSxDQUFBeE8sYUFBQTtjQUFJTixTQUFTLEVBQUM7WUFBa0IsR0FBRWlSLEtBQUssQ0FBTSxFQUN2RG5DLEtBQUEsQ0FBQXhPLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQW1CLEdBQ3BDOEIsSUFBSSxLQUFLLGNBQWMsR0FDdkJnTixLQUFBLENBQUF4TyxhQUFBLENBQUNjLE1BQUEsQ0FBQWEsT0FBTztjQUFDMEssT0FBTyxFQUFDLFlBQVk7Y0FBQy9LLElBQUksRUFBQyxhQUFhO2NBQUM1QixTQUFTLEVBQUM7WUFBZ0IsRUFBRyxHQUU5RThPLEtBQUEsQ0FBQXhPLGFBQUEsQ0FBQzJELE1BQUEsQ0FBQUcsS0FBSztjQUFDcEUsU0FBUyxFQUFDLGdCQUFnQjtjQUFDZ0IsR0FBRyxFQUFFK0o7WUFBUSxFQUMvQyxFQUVEK0QsS0FBQSxDQUFBeE8sYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBaUIsR0FBRStGLElBQUksQ0FBUSxDQUN0QyxDQUNMO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=