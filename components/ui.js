System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.3.1/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.9/core", "driver.js@1.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Core) {
      dependency_17 = _beyondJsKernel019Core;
    }, function (_driverJs) {
      dependency_18 = _driverJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/form', dependency_4], ['@aimpact/ailearn-app/components/icons', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/base', dependency_7], ['framer-motion', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/widgets/markdown', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['js-confetti', dependency_14], ['@beyond-js/kernel/texts', dependency_15], ['pragmate-ui/spinner', dependency_16], ['@beyond-js/kernel/core', dependency_17], ['driver.js', dependency_18]]);
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
        hash: 2088079528,
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
        hash: 2105504038,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2VtcHR5IiwiX2ljb25zIiwiX2Zvcm0iLCJDaGF0UHJlbG9hZCIsIm9uQ2xpY2siLCJFbXB0eUNhcmQiLCJUZXh0YXJlYSIsImRpc2FibGVkIiwiSWNvbkJ1dHRvbiIsImljb24iLCJBY3Rpdml0eUhlYWRlciIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiY2xzIiwiQXBwSWNvbiIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZENvbnRhaW5lciIsImFzIiwiQ29tcG9uZW50IiwibW90aW9uIiwiYXR0cnMiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImluaXRpYWwiLCJleGl0Iiwid2lkdGgiLCJsYXlvdXQiLCJBdWRpb1BsYXllciIsInVybCIsImNvbnNvbGUiLCJ3YXJuIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiY3VycmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJJbmZpbml0eSIsImN1cnJlbnRUaW1lIiwib250aW1ldXBkYXRlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJzdHlsZSIsIkNhcmRDb250ZW50Iiwib3B0aW9uIiwic2ltcGxlIiwiQ2FyZEZvb3RlciIsIl9pbWFnZSIsIkNhcmRJbWFnZSIsImFsdCIsIkltYWdlIiwiX2VudGl0eUltYWdlIiwiQ2FyZCIsImxpbmsiLCJkYXRhIiwiaXRlbSIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJzZXRFZGl0YWJsZSIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJjb250cm9sQ2xzIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJNYXJrZG93biIsIkljb24iLCJ0ZXh0YXJlYSIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJzZXRTZWxlY3Rpb25SYW5nZSIsIm9uQ2hhbmdlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiaXNPdXRTaWRlIiwiZWRpdGVkIiwiY29udGVudFZhbHVlIiwidG9TaG93IiwiYW5pbWF0aW9ucyIsInNsaWRlRG93biIsInkiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9tb2RhbCIsIl9yZXF1ZXN0Q3JlZGl0cyIsIkNvaW5zTW9kYWwiLCJvd25lciIsImdsb2JhbFRleHRzIiwic2hvdyIsIm9uQ2xvc2UiLCJvbkNvbnN1bWUiLCJNb2RhbCIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uU3VjY2VzcyIsIm9uQ2FuY2VsIiwiT3duZXJJbWFnZSIsInBob3RvVXJsIiwiX2Vycm9yUmVuZGVyZXIiLCJfYWlCdXR0b24iLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9hbmltYXRpb25zIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwibG9nIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwiZGV0YWlsVGV4dCIsImRldGFpbCIsImludGVyYWN0aXZlIiwiZGl2Iiwic3VidGl0bGUiLCJFcnJvclJlbmRlcmVyIiwidmFyaWFudCIsIkZyYWdtZW50Iiwib3duZXJEZXNjcmlwdGlvbiIsImFjdGlvbiIsImJvcmRlcmVkIiwiY2FuY2VsIiwiY29udGludWUiLCJQcm9jZXNzQ29udGFpbmVyIiwiZGVzY3JpcHRpb24iLCJFbXB0eSIsInJhdGlvIiwiZW50aXR5Iiwic2l6ZSIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiUGFnZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0IiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3VzZURyaXZlclRvdXIiLCJfY29yZSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwiY2xvc2VDYWxsYmFjayIsInVzZURyaXZlclRvdXIiLCJjaGVja2JveCIsImxvY2FsU3RvcmFnZSIsIm1vZGFsVGV4dHMiLCJlcyIsImNsb3NlIiwiZW4iLCJjdXJyZW50VGV4dHMiLCJsYW5ndWFnZXMiLCJibG9jayIsIlRvdXJTdGVwIiwia2V5cyIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsIl9kcml2ZXIiLCJzYXciLCJnZXRJdGVtIiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL2luZGV4LnRzeCIsIi90cy9jb250ZW50LWVkaXRhYmxlL3RleHRhcmVhLnRzeCIsIi90eXBlcy50cyIsIi90cy9jb250ZW50LWVkaXRhYmxlL3VzZS1jb250YWluZXIudHN4IiwiL3RzL2NyZWRpdHMvYW5pbWF0aW9ucy50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90b3VyL2NvbnRhaW5lci50c3giLCIvdHMvdG91ci90b3VyLXN0ZXAudHN4IiwiL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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