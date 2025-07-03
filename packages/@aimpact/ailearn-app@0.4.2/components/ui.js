System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/base", "pragmate-ui@1.0.2/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.2/image", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/modal", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.2/empty", "pragmate-ui@1.0.2/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "clsx@2.1.1", "pragmate-ui@1.0.2/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, ZoomableImage, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_2 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi102Components) {
      dependency_3 = _pragmateUi102Components;
    }, function (_pragmateUi102Base) {
      dependency_4 = _pragmateUi102Base;
    }, function (_pragmateUi102Icons) {
      dependency_5 = _pragmateUi102Icons;
    }, function (_framerMotion2) {
      dependency_6 = _framerMotion2;
    }, function (_pragmateUi102Image) {
      dependency_7 = _pragmateUi102Image;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_8 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102Form) {
      dependency_9 = _pragmateUi102Form;
    }, function (_pragmateUi102Modal) {
      dependency_10 = _pragmateUi102Modal;
    }, function (_aimpactChatSdk154Session) {
      dependency_11 = _aimpactChatSdk154Session;
    }, function (_pragmateUi102Empty) {
      dependency_12 = _pragmateUi102Empty;
    }, function (_pragmateUi102Alert) {
      dependency_13 = _pragmateUi102Alert;
    }, function (_jsConfetti2) {
      dependency_14 = _jsConfetti2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_15 = _beyondJsKernel0112Texts;
    }, function (_clsx2) {
      dependency_16 = _clsx2;
    }, function (_pragmateUi102Spinner) {
      dependency_17 = _pragmateUi102Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_18 = _beyondJsKernel0112Routing;
    }, function (_beyondJsWidgets112Render) {
      dependency_19 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Core) {
      dependency_20 = _beyondJsKernel0112Core;
    }, function (_driverJs) {
      dependency_21 = _driverJs;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@aimpact/ailearn-app/components/icons', dependency_2], ['pragmate-ui/components', dependency_3], ['pragmate-ui/base', dependency_4], ['pragmate-ui/icons', dependency_5], ['framer-motion', dependency_6], ['pragmate-ui/image', dependency_7], ['@aimpact/chat-sdk/widgets/markdown', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['js-confetti', dependency_14], ['@beyond-js/kernel/texts', dependency_15], ['clsx', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/widgets/render', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['driver.js', dependency_21]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/components/ui');
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
        hash: 713170515,
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
      INTERNAL MODULE: ./image/zoomable
      ********************************/

      ims.set('./image/zoomable', {
        hash: 4064165756,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwib25TdWNjZXNzIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJfYWxlcnQiLCJBbGVydCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5IiwiX2Nsc3giLCJab29tYWJsZUltYWdlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJyb2xlIiwidGFiSW5kZXgiLCJvbktleVByZXNzIiwiQXBwTG9hZGVyIiwiX3NwaW5uZXIiLCJQcmVsb2FkU2NyZWVuIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiX3NrZWxldG9uVGV4dCIsIl9yb3V0aW5nIiwiUGFnZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsIlBhZ2VTdWJ0aXRsZSIsIlByb2Nlc3NCdXR0b24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlByb2Nlc3NJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIlJhZGlvQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJzY2FsZSIsImNoZWNrZWQiLCJSYWRpb0dyb3VwIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaCIsInRoZW1lIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwiX3VzZURyaXZlclRvdXIiLCJfY29yZSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwiY2xvc2VDYWxsYmFjayIsInVzZURyaXZlclRvdXIiLCJjaGVja2JveCIsIm1vZGFsVGV4dHMiLCJlcyIsImNsb3NlIiwiZW4iLCJkZSIsImN1cnJlbnRUZXh0cyIsImxhbmd1YWdlcyIsImJsb2NrIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiX2RyaXZlciIsInNlc3Npb25LZXkiLCJzYXciLCJzZXNzaW9uU2F3IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NoaXAudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtY29uZmV0dGkudHN4IiwiL3RzL2hvb2tzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy9pbWFnZS96b29tYWJsZS50c3giLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90aGVtZS1zd2l0Y2hlci50c3giLCIvdHMvdG91ci9jb250YWluZXIudHN4IiwiL3RzL3RvdXIvdG91ci1zdGVwLnRzeCIsIi90cy90b3VyL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVDLGFBQWFBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUNyQixPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUYsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFYixDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkEsSUFBQU0sTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVUyxjQUFjQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsS0FBSztZQUFFQyxJQUFJO1lBQUVDO1VBQVEsQ0FBRTtZQUN4RSxNQUFNQyxHQUFHLEdBQUcsb0NBQW9DSixJQUFJLEVBQUU7WUFDdEQsT0FDQ1gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUVTO1lBQUcsR0FDckJmLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFlLEdBQzlCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUFPLE9BQU87Y0FBQ0gsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDdkJiLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtPLEtBQUssQ0FBTSxDQUNWLEVBQ05FLFFBQVEsQ0FDRCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQUVBLElBQUFpQixPQUFBLEdBQUFqQixPQUFBO1VBUU87VUFBVSxTQUFVa0IsUUFBUUEsQ0FBQztZQUFFTCxRQUFRO1lBQUVNLE9BQU87WUFBRUMsTUFBTTtZQUFFLEdBQUdDO1VBQUssSUFBcUI7WUFBRUQsTUFBTSxFQUFFO1VBQUksQ0FBRTtZQUM3RyxNQUFNRSxXQUFXLEdBQUdILE9BQU87WUFFM0IsT0FDQ3BCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNZLFdBQUEsQ0FBQU8sTUFBTTtjQUFBLEdBQUtGLEtBQUs7Y0FBRVQsSUFBSSxFQUFFSixNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU87Y0FBRU4sT0FBTyxFQUFFRztZQUFXLEdBQzFEVCxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVWEsWUFBWUEsQ0FBQztZQUFFYixRQUFRO1lBQUVNLE9BQU87WUFBRUMsTUFBTTtZQUFFLEdBQUdDO1VBQUssSUFBcUI7WUFBRUQsTUFBTSxFQUFFO1VBQUksQ0FBRTtZQUNqSCxNQUFNRSxXQUFXLEdBQUdILE9BQU87WUFDM0IsT0FDQ3BCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNhLE9BQUEsQ0FBQVUsVUFBVTtjQUFBLEdBQUtOLEtBQUs7Y0FBRVQsSUFBSSxFQUFFSixNQUFBLENBQUFnQixLQUFLLENBQUNDLE9BQU87Y0FBRU4sT0FBTyxFQUFFRztZQUFXLEdBQzlEVCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTRCLGFBQUEsR0FBQTVCLE9BQUE7VUFNTztVQUFVLFNBQVU2QixpQkFBaUJBLENBQUM7WUFBRXhCLFNBQVM7WUFBRVEsUUFBUTtZQUFFaUIsRUFBRSxHQUFHLE1BQU07WUFBRSxHQUFHVDtVQUFLLENBQTBCO1lBQ2xILE1BQU1VLFNBQVMsR0FBRyxJQUFBSCxhQUFBLENBQUFJLE1BQU0sRUFBQ0YsRUFBRSxDQUFzQjtZQUNqRCxNQUFNRyxLQUFLLEdBQUc7Y0FDYkMsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUUsQ0FBQztnQkFDVkMsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREMsT0FBTyxFQUFFO2dCQUNSSCxPQUFPLEVBQUU7ZUFDVDtjQUNESSxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JHLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFO2VBQ1Q7Y0FDRCxHQUFHZDthQUNIO1lBQ0QsT0FDQ3RCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyQixTQUFTO2NBQUNVLE1BQU07Y0FBQ3BDLFNBQVMsRUFBRUEsU0FBUztjQUFBLEdBQU00QjtZQUFLLEdBQy9DcEIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFkLE1BQUEsR0FBQUMsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVUwQyxXQUFXQSxDQUFDO1lBQUV4QyxHQUFHO1lBQUV5QztVQUFHLENBQUU7WUFDcEQsSUFBSSxDQUFDekMsR0FBRyxJQUFJLENBQUN5QyxHQUFHLEVBQUU7Y0FDakJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWjNDLEdBQUcsR0FBR3lDLEdBQUcsSUFBSUcsR0FBRyxDQUFDQyxlQUFlLENBQUM3QyxHQUFHLENBQUM7WUFDckMsTUFBTThDLEdBQUcsR0FBR2pELE1BQUEsQ0FBQUksT0FBSyxDQUFDOEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QmxELE1BQUEsQ0FBQUksT0FBSyxDQUFDK0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FDMUJELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSUYsTUFBTSxDQUFDZCxRQUFRLEtBQUtpQixRQUFRLEVBQUU7a0JBQ2pDSCxNQUFNLENBQUNJLFdBQVcsR0FBRyxLQUFLO2tCQUMxQkosTUFBTSxDQUFDSyxZQUFZLEdBQUcsTUFBSztvQkFDMUJMLE1BQU0sQ0FBQ0ssWUFBWSxHQUFHLElBQUk7b0JBQzFCTCxNQUFNLENBQUNJLFdBQVcsR0FBRyxDQUFDO2tCQUN2QixDQUFDOztjQUVILENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxDQUFDckQsR0FBRyxDQUFDLENBQUM7WUFFVCxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFFckIsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9FLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakNSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFGLEdBQUcsRUFBRUEsR0FBRztjQUFFUSxJQUFJLEVBQUMsWUFBWTtjQUFDc0MsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFekMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBakQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVeUQsT0FBT0EsQ0FBQztZQUFFQyxPQUFPLEdBQUc7VUFBRSxDQUFFO1lBQ2xELE1BQU1WLEdBQUcsR0FBR2pELE1BQUEsQ0FBQUksT0FBSyxDQUFDOEMsTUFBTSxDQUFpQixJQUFJLENBQUM7WUFFOUNsRCxNQUFBLENBQUFJLE9BQUssQ0FBQytDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCRixHQUFHLENBQUNJLE9BQU8sQ0FBQ08sS0FBSyxDQUFDbkIsS0FBSyxHQUFHLEdBQUdrQixPQUFPLEdBQUc7WUFDeEMsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsTUFBTTVDLEdBQUcsR0FBRyxjQUFjNEMsT0FBTyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUdBLE9BQU8sR0FBRyxFQUFFLEdBQUcsUUFBUSxHQUFHLE1BQU0sRUFBRTtZQUVuRixPQUNDM0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNyQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBSzRDLEdBQUcsRUFBRUEsR0FBRztjQUFFM0MsU0FBUyxFQUFFUztZQUFHLEVBRXZCLENBQ0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBZixNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVU0RCxXQUFXQSxDQUFDO1lBQUUvQyxRQUFRO1lBQUVSLFNBQVM7WUFBRXdELE1BQU0sR0FBRyxLQUFLO1lBQUVDO1VBQU0sQ0FBRTtZQUN0RixNQUFNaEQsR0FBRyxHQUFHLHlCQUF5QitDLE1BQU0sSUFBSXhELFNBQVMsSUFBSSxJQUFJQSxTQUFTLEVBQUUsSUFBSXlELE1BQU0sSUFBSSxZQUFZLEVBQUU7WUFFdkcsT0FBTy9ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVM7WUFBRyxHQUFHRCxRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVK0QsVUFBVUEsQ0FBQztZQUFFbEQsUUFBUTtZQUFFUixTQUFTO1lBQUV5RDtVQUFNLENBQUU7WUFDckUsTUFBTWhELEdBQUcsR0FBRyxnQkFBZ0JULFNBQVMsSUFBSSxJQUFJQSxTQUFTLEVBQUUsSUFBSXlELE1BQU0sSUFBSSxZQUFZLEVBQUU7WUFDcEYsT0FBTy9ELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBRVM7WUFBRyxHQUFHRCxRQUFRLENBQVU7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQW1ELE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFVLFNBQVVpRSxTQUFTQSxDQUFDO1lBQUUvRCxHQUFHO1lBQUVHLFNBQVM7WUFBRTZELEdBQUc7WUFBRXJEO1VBQVEsQ0FBZTtZQUNsRixNQUFNQyxHQUFHLEdBQUcsYUFBYVQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUzRCxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsTUFBQSxDQUFBRyxLQUFLO2NBQUNqRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRWdFLEdBQUcsRUFBRUEsR0FBRztjQUFFN0QsU0FBUyxFQUFFUztZQUFHLEdBQ3ZDRCxRQUFRLENBQ0Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBRyxXQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW9FLFlBQUEsR0FBQXBFLE9BQUE7VUFFTztVQUFVLFNBQVVxRSxJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsSUFBSSxFQUFFQyxJQUFJO1lBQUUzRCxRQUFRO1lBQUU0RCxRQUFRO1lBQUVYLE1BQU07WUFBRXpELFNBQVM7WUFBRUs7VUFBSSxDQUFFO1lBQ2hHLE1BQU1nRSxTQUFTLEdBQUcsQ0FBQ0QsUUFBUSxJQUFJSCxJQUFJLEdBQUd0RCxXQUFBLENBQUEyRCxJQUFJLEdBQUcsTUFBTTtZQUNuRCxNQUFNMUMsS0FBSyxHQUFHd0MsUUFBUSxJQUFJLENBQUNHLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUNDLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHO2NBQUVRLElBQUksRUFBRVIsSUFBSTtjQUFFakUsU0FBUyxFQUFFO1lBQVUsQ0FBRTtZQUMzRyxJQUFJMEUsT0FBTyxHQUFHLFFBQVExRSxTQUFTLEVBQUU7WUFFakMsSUFBSW9FLFFBQVEsRUFBRU0sT0FBTyxJQUFJLGNBQWM7WUFDdkMsSUFBSWpCLE1BQU0sRUFBRWlCLE9BQU8sSUFBSSxZQUFZO1lBQ25DLE1BQU01RCxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQjZELFVBQVUsRUFBRUMsY0FBYyxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDbkYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLFNBQVM7Y0FBQSxHQUFLekMsS0FBSztjQUFFZCxPQUFPLEVBQUVBO1lBQU8sR0FDckNwQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUUwRTtZQUFPLEdBQ3JCUCxJQUFJLElBQUl6RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0UsWUFBQSxDQUFBZSxXQUFXO2NBQUM5RSxTQUFTLEVBQUMsV0FBVztjQUFDSCxHQUFHLEVBQUVzRSxJQUFJLENBQUNZLE9BQU87Y0FBRWxCLEdBQUcsRUFBRU0sSUFBSSxDQUFDN0QsS0FBSztjQUFFRCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUM3RkcsUUFBUSxDQUNKLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBUU87VUFBVSxTQUFVcUYsSUFBSUEsQ0FBQztZQUFFQyxPQUFPO1lBQUVqRixTQUFTO1lBQUVRO1VBQVEsQ0FBYztZQUMzRSxNQUFNMEUsYUFBYSxHQUFHLE1BQU07WUFDNUIsTUFBTUMsWUFBWSxHQUFHRixPQUFPLEdBQUcsU0FBU0EsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN0RCxNQUFNRyxhQUFhLEdBQUcsQ0FBQ0YsYUFBYSxFQUFFQyxZQUFZLEVBQUVuRixTQUFTLENBQUMsQ0FBQ3FGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFFeEYsT0FBTzdGLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRW9GO1lBQWEsR0FBRzVFLFFBQVEsQ0FBTztVQUN2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBTCxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBNkYsYUFBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUE4RixTQUFBLEdBQUE5RixPQUFBO1VBQ0EsSUFBQStGLFNBQUEsR0FBQS9GLE9BQUE7VUFDTztVQUFVLFNBQVVnRyxlQUFlQSxDQUFDM0UsS0FBNEI7WUFDdEUsTUFBTTtjQUNMNEUsTUFBTTtjQUNOQyxRQUFRLEdBQUcsS0FBSztjQUNoQnBFLEVBQUUsR0FBRyxLQUFLO2NBQ1Z6QixTQUFTO2NBQ1Q4RixPQUFPO2NBQ1B6RixJQUFJLEdBQUcsT0FBTztjQUNkMEYsV0FBVztjQUNYQyxTQUFTLEdBQUcsSUFBSTtjQUNoQkMsUUFBUSxHQUFHLElBQUk7Y0FDZkM7WUFBSSxDQUNKLEdBQUdsRixLQUFLO1lBQ1QsTUFBTSxDQUFDbUYsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRyxJQUFBMUcsTUFBQSxDQUFBMkcsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUc3RyxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQ1AsT0FBTyxDQUFDO1lBRXZELE1BQU1VLE9BQU8sR0FBRy9FLEVBQUUsSUFBSW9FLFFBQVE7WUFDOUIsTUFBTTtjQUFFbEQsR0FBRyxFQUFFOEQsVUFBVTtjQUFFQyxLQUFLO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFuQixhQUFBLENBQUFvQixpQkFBaUIsRUFBQ2QsT0FBTyxFQUFFQyxXQUFXLEVBQUVJLFVBQVUsQ0FBQztZQUVoRyxJQUFJLENBQUNGLFFBQVEsRUFBRTtjQUNkLE9BQU92RyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsT0FBTztnQkFBQzdELEdBQUcsRUFBRThEO2NBQVUsR0FBR0MsS0FBSyxDQUFXOztZQUduRCxJQUFJUCxVQUFVLElBQUk5RixJQUFJLEtBQUssVUFBVSxFQUNwQyxPQUNDWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEYsU0FBQSxDQUFBb0IsUUFBUTtjQUNSUCxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJDLFdBQVcsRUFBRUEsV0FBVztjQUN4Qk8sV0FBVyxFQUFFVixhQUFhO2NBQUEsR0FDdEJwRixLQUFLO2NBQ1QwRixLQUFLLEVBQUVBO1lBQUssRUFDWDtZQUdKLE1BQU1LLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCWCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO2NBQzFCLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2dCQUNoQmEsVUFBVSxDQUFDLE1BQUs7a0JBQ2YsTUFBTUMsRUFBRSxHQUFHUixVQUFVLENBQUMxRCxPQUFPO2tCQUU3QixJQUFJa0UsRUFBRSxFQUFFO29CQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7b0JBQ3BDRixLQUFLLENBQUNHLGtCQUFrQixDQUFDSixFQUFFLENBQUM7b0JBQzVCQyxLQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUV2QixNQUFNQyxTQUFTLEdBQUc1QyxVQUFVLENBQUM2QyxZQUFZLEVBQUU7b0JBRTNDLElBQUlELFNBQVMsRUFBRTtzQkFDZEEsU0FBUyxDQUFDRSxlQUFlLEVBQUU7c0JBQzNCRixTQUFTLENBQUNHLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDOztvQkFHMUJELEVBQUUsQ0FBQ1UsS0FBSyxFQUFFOztnQkFFWixDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUVQLENBQUM7WUFFRCxNQUFNbEgsR0FBRyxHQUFHLHVCQUF1QlQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxNQUFNTyxJQUFJLEdBQUc0RixVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTXlCLFVBQVUsR0FBR3pCLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBQzVELE1BQU12RSxLQUFLLEdBQUc7Y0FBRWQsT0FBTyxFQUFFLENBQUNxRixVQUFVLEdBQUdZLFVBQVUsR0FBR3hDO1lBQVMsQ0FBRTtZQUUvRCxNQUFNc0QsV0FBVyxHQUFJQyxDQUF1QixJQUFJO2NBQy9DQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtjQUNsQixNQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0csYUFBYSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDO2NBQ2xEZixRQUFRLENBQUNnQixXQUFXLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRUgsSUFBSSxDQUFDO1lBQ2hELENBQUM7WUFFRCxNQUFNSSxhQUFhLEdBQUlOLENBQXNCLElBQUk7Y0FDaEQsSUFBSTlCLFNBQVMsSUFBSThCLENBQUMsQ0FBQ08sR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDbkNQLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2dCQUNsQjtnQkFDQTs7WUFFRixDQUFDO1lBRUQsTUFBTU8sTUFBTSxHQUFHLE1BQU9DLEtBQXVCLElBQUk7Y0FDaERBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU0xQyxPQUFPLEdBQUd5QyxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsV0FBVyxDQUFDQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQztjQUU1RXZDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Y0FFcEIsSUFBSU4sT0FBTyxLQUFLUSxRQUFRLEVBQUU7Y0FFMUIsTUFBTXBDLElBQUksR0FBRztnQkFDWmdDLElBQUk7Z0JBQ0pRLEtBQUssRUFBRVo7ZUFDUDtjQUNELE1BQU04QyxLQUFLLEdBQWlCO2dCQUMzQjlGLE1BQU0sRUFBRW9CLElBQUk7Z0JBQ1p1RSxhQUFhLEVBQUV2RTtlQUNmO2NBQ0RxQyxXQUFXLENBQUNULE9BQU8sQ0FBQztjQUNwQixNQUFNRixNQUFNLENBQUNnRCxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0NsSixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVTLEdBQUc7Y0FBQSxHQUFNbUIsS0FBSztjQUFFMEcsTUFBTSxFQUFFQTtZQUFNLEdBQzdDNUksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lHLE9BQU87Y0FDUDdELEdBQUcsRUFBRThELFVBQVU7Y0FDZnpHLFNBQVMsRUFBRTRILFVBQVU7Y0FDckJpQixlQUFlLEVBQUUxQyxVQUFVO2NBQzNCMkMsOEJBQThCLEVBQUUsSUFBSTtjQUNwQ0MsT0FBTyxFQUFFNUMsVUFBVSxHQUFHMEIsV0FBVyxHQUFHdEQsU0FBUztjQUM3Q3lFLFNBQVMsRUFBRTdDLFVBQVUsR0FBR2lDLGFBQWEsR0FBRzdEO1lBQVMsR0FFaEQ0QixVQUFVLEdBQUdPLEtBQUssR0FBR2hILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRixTQUFBLENBQUF1RCxRQUFRO2NBQUNuRCxPQUFPLEVBQUVZO1lBQUssRUFBSSxDQUN6QyxFQUNWaEgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzdDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUErSSxJQUFJO2NBQUMzSSxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNmLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2SEEsSUFBQWIsTUFBQSxHQUFBQyxPQUFBO1VBR0EsSUFBQXdKLEtBQUEsR0FBQXhKLE9BQUE7VUFDTztVQUFVLFNBQVVrSCxRQUFRQSxDQUFDO1lBQ25DakIsTUFBTTtZQUNONUYsU0FBUztZQUNUOEYsT0FBTztZQUNQSSxJQUFJO1lBQ0pELFFBQVE7WUFDUkssUUFBUTtZQUNSQyxXQUFXO1lBQ1hPO1VBQVcsQ0FDYztZQUN6QixNQUFNbkUsR0FBRyxHQUFHakQsTUFBQSxDQUFBSSxPQUFLLENBQUM4QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUU5QztZQUVBLE1BQU1tRSxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QkQsV0FBVyxDQUFDLENBQUNiLFFBQVEsQ0FBQztjQUN0QixJQUFJLENBQUNBLFFBQVEsRUFBRTtnQkFDZGUsVUFBVSxDQUFDLE1BQUs7a0JBQ2YsTUFBTUMsRUFBRSxHQUFHdEUsR0FBRyxDQUFDSSxPQUFPO2tCQUV0QixJQUFJa0UsRUFBRSxFQUFFO29CQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7b0JBQ3BDRixLQUFLLENBQUNHLGtCQUFrQixDQUFDSixFQUFFLENBQUM7b0JBQzVCQyxLQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUV2QixNQUFNQyxTQUFTLEdBQUc1QyxVQUFVLENBQUM2QyxZQUFZLEVBQUU7b0JBRTNDLElBQUlELFNBQVMsRUFBRTtzQkFDZEEsU0FBUyxDQUFDRSxlQUFlLEVBQUU7c0JBQzNCRixTQUFTLENBQUNHLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDOztvQkFHMUJELEVBQUUsQ0FBQ1UsS0FBSyxFQUFFOztnQkFFWixDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUVQLENBQUM7WUFFRCxNQUFNbEgsR0FBRyxHQUFHLHNEQUFzRFQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUVwRyxNQUFNLENBQUMwRyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakgsTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLENBQUNQLE9BQU8sQ0FBQztZQUNqRCxNQUFNbEUsS0FBSyxHQUFHLEVBQUU7WUFFaEJsQyxNQUFBLENBQUFJLE9BQUssQ0FBQytDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCbUUsVUFBVSxDQUFDLE1BQUs7Z0JBQ2YsTUFBTW9DLFFBQVEsR0FBR3pHLEdBQUcsQ0FBQ0ksT0FBTyxFQUFFc0csYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDdkQsSUFBSUQsUUFBUSxFQUFFO2tCQUNiQSxRQUFRLENBQUN6QixLQUFLLEVBQUU7a0JBQ2hCLE1BQU0yQixNQUFNLEdBQUdGLFFBQVEsQ0FBQzFDLEtBQUssQ0FBQzRDLE1BQU07a0JBQ3BDRixRQUFRLENBQUNHLGlCQUFpQixDQUFDRCxNQUFNLEVBQUVBLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2NBRTlDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTWhCLE1BQU0sR0FBRyxNQUFPQyxLQUF1QixJQUFJO2NBQ2hEQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QjtjQUNBMUIsV0FBVyxDQUFDLEtBQUssQ0FBQztjQUVsQixJQUFJSixLQUFLLEtBQUtKLFFBQVEsRUFBRTtjQUV4QixNQUFNcEMsSUFBSSxHQUFHO2dCQUFFZ0MsSUFBSTtnQkFBRVE7Y0FBSyxDQUFFO2NBQzVCLE1BQU1rQyxLQUFLLEdBQWlCO2dCQUMzQjlGLE1BQU0sRUFBRW9CLElBQUk7Z0JBQ1p1RSxhQUFhLEVBQUV2RTtlQUNmO2NBRURxQyxXQUFXLENBQUNHLEtBQUssQ0FBQztjQUNsQixNQUFNZCxNQUFNLENBQUNnRCxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE1BQU1ZLFFBQVEsR0FBSTFCLENBQXlDLElBQUk7Y0FDOURuQixRQUFRLENBQUNtQixDQUFDLENBQUNoRixNQUFNLENBQUM0RCxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUNELE9BQ0NoSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLNEMsR0FBRyxFQUFFQSxHQUFHO2NBQUUzQyxTQUFTLEVBQUVTLEdBQUc7Y0FBQSxHQUFNbUIsS0FBSztjQUFFMEcsTUFBTSxFQUFFQTtZQUFNLEdBQ3ZENUksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29KLEtBQUEsQ0FBQXRDLFFBQVc7Y0FBQ1gsSUFBSSxFQUFFQSxJQUFJO2NBQUVzRCxRQUFRLEVBQUVBLFFBQVE7Y0FBRTlDLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBRXhEO1VBRVI7Ozs7Ozs7Ozs7O1VDckZBOztVQUVBK0MsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQWpELEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBaEgsTUFBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVWlILGlCQUFpQkEsQ0FBQ2QsT0FBTyxFQUFFQyxXQUFXLEVBQUVJLFVBQVUsR0FBRyxLQUFLO1lBQ3pFLE1BQU14RCxHQUFHLEdBQUdqRCxNQUFBLENBQUFJLE9BQUssQ0FBQzhDLE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBQzlDLE1BQU0sQ0FBQ2dILFNBQVMsQ0FBQyxHQUFHbEssTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2pILE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxDQUF1QztjQUFFd0QsTUFBTSxFQUFFLEtBQUs7Y0FBRS9ELE9BQU8sRUFBRTtZQUFFLENBQUUsQ0FBQztZQUM5RyxNQUFNZ0UsWUFBWSxHQUFHcEQsS0FBSyxFQUFFbUQsTUFBTSxHQUFHbkQsS0FBSyxDQUFDWixPQUFPLEdBQUdBLE9BQU87WUFFNUQsSUFBSWlFLE1BQU0sR0FBRzVELFVBQVUsR0FDcEIyRCxZQUFZLEdBQ1hBLFlBQVksR0FDWixFQUFFLEdBQ0hBLFlBQVksS0FBSyxFQUFFLElBQUlBLFlBQVksS0FBS3ZGLFNBQVMsR0FDakR3QixXQUFXLEdBQ1grRCxZQUFZLElBQUkvRCxXQUFXLElBQUksRUFBRTtZQUVwQyxPQUFPO2NBQUVwRCxHQUFHO2NBQUVpSCxTQUFTO2NBQUVsRCxLQUFLLEVBQUVxRCxNQUFNO2NBQUVwRDtZQUFRLENBQUU7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJPLE1BQU1xRCxVQUFVLEdBQUFMLE9BQUEsQ0FBQUssVUFBQSxHQUFHO1lBQ3pCQyxTQUFTLEVBQUU7Y0FDVmhJLE9BQU8sRUFBRTtnQkFBRWlJLENBQUMsRUFBRSxNQUFNO2dCQUFFcEksT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0QsT0FBTyxFQUFFO2dCQUFFcUksQ0FBQyxFQUFFLENBQUM7Z0JBQUVwSSxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVERSxJQUFJLEVBQUU7Z0JBQUVnSSxDQUFDLEVBQUUsS0FBSztnQkFBRXBJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBRURsQyxPQUFPLEVBQUU7Y0FDUm1DLE9BQU8sRUFBRTtnQkFBRUgsT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUN2QkQsT0FBTyxFQUFFO2dCQUFFcUksQ0FBQyxFQUFFLENBQUM7Z0JBQUVwSSxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVERSxJQUFJLEVBQUU7Z0JBQUVnSSxDQUFDLEVBQUUsS0FBSztnQkFBRXBJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBQ0RtSSxtQkFBbUIsRUFBRTtjQUNwQmxJLE9BQU8sRUFBRTtnQkFBRWlJLENBQUMsRUFBRSxNQUFNO2dCQUFFcEksT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0QsT0FBTyxFQUFFO2dCQUFFcUksQ0FBQyxFQUFFLENBQUM7Z0JBQUVwSSxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVERSxJQUFJLEVBQUU7Z0JBQUVrSSxDQUFDLEVBQUUsS0FBSztnQkFBRXRJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFOztXQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkQsSUFBQXRDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEwSyxNQUFBLEdBQUExSyxPQUFBO1VBRUEsSUFBQTJLLGVBQUEsR0FBQTNLLE9BQUE7VUFHTyxXQUpQOztVQUlpQixTQUFVNEssVUFBVUEsQ0FBQztZQUNyQ0MsS0FBSztZQUNMQyxXQUFXO1lBQ1hDLElBQUk7WUFDSkMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFNBQVM7WUFDVHhLLElBQUksR0FBRztVQUFZLENBQ1E7WUFDM0IsSUFBSSxDQUFDcUssSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixPQUNDaEwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NLLE1BQUEsQ0FBQVMsS0FBSztjQUFDSixJQUFJO2NBQUMxSyxTQUFTLEVBQUMseUJBQXlCO2NBQUMySyxPQUFPLEVBQUVBO1lBQU8sR0FDL0RqTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUssZUFBQSxDQUFBUyxrQkFBa0I7Y0FDbEJGLFNBQVMsRUFBRUEsU0FBUyxJQUFJRixPQUFPO2NBQy9CQSxPQUFPLEVBQUVBLE9BQU87Y0FDaEJLLFFBQVEsRUFBRUwsT0FBTztjQUNqQkMsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCdkssSUFBSSxFQUFFQSxJQUFJO2NBQ1ZvSyxXQUFXLEVBQUVBLFdBQVc7Y0FDeEJELEtBQUssRUFBRUE7WUFBSyxFQUNYLENBQ0s7VUFFVjtVQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JELElBQUE5SyxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVPO1VBQVUsU0FBVXNMLFVBQVVBLENBQUM7WUFBRVQ7VUFBSyxDQUFpRDtZQUM3RixJQUFJLENBQUNBLEtBQUssRUFBRVUsUUFBUSxFQUFFO2NBQ3JCLE9BQU94TCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUFPLE9BQU87Z0JBQUNILElBQUksRUFBQyxRQUFRO2dCQUFDUCxTQUFTLEVBQUM7Y0FBVyxFQUFHOztZQUV2RCxPQUFPTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsTUFBQSxDQUFBRyxLQUFLO2NBQUNqRSxHQUFHLEVBQUUySyxLQUFLLENBQUNVLFFBQVE7Y0FBRWxMLFNBQVMsRUFBQztZQUFRLEVBQUc7VUFDekQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVkEsSUFBQU4sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdMLGNBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBeUwsU0FBQSxHQUFBekwsT0FBQTtVQUNBLElBQUE0QixhQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQWdCLFdBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBMEwsaUJBQUEsR0FBQTFMLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUEyTCxXQUFBLEdBQUEzTCxPQUFBO1VBRUEsSUFBQTRMLFFBQUEsR0FBQTVMLE9BQUE7VUFFTztVQUFVLFNBQVVvTCxrQkFBa0JBLENBQUM7WUFDN0NKLE9BQU87WUFDUEYsV0FBVztZQUNYRCxLQUFLO1lBQ0xJLFNBQVM7WUFDVEksUUFBUTtZQUNSM0ssSUFBSSxHQUFHLFlBQVk7WUFDbkJ3SztVQUFTLENBQzBCO1lBQ25DLE1BQU0sQ0FBQ1csUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRy9MLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNxRixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHak0sTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLEVBQUU7WUFFMUMsTUFBTXVGLFdBQVcsR0FBR25CLFdBQVcsQ0FBQ29CLE9BQU87WUFDdkMsTUFBTUMsS0FBSyxHQUFHckIsV0FBVyxDQUFDc0IsY0FBYztZQUN4QyxNQUFNQyxNQUFNLEdBQUd2QixXQUFXLENBQUN1QixNQUFNO1lBQ2pDaEIsUUFBUSxHQUFHQSxRQUFRLElBQUlMLE9BQU87WUFDOUI7WUFDQSxNQUFNc0IsU0FBUyxHQUFHLE1BQU0xRCxLQUFLLElBQUc7Y0FDL0IsSUFBSTtnQkFDSEEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBRXZCaUQsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTVMsTUFBTSxHQUFHLE1BQU10QixTQUFTLEVBQUU7Z0JBRWhDLElBQUksQ0FBQ3NCLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO2tCQUNuQixJQUFJRCxNQUFNLENBQUNSLEtBQUssQ0FBQ1UsSUFBSSxLQUFLLEVBQUUsRUFBRTtvQkFDN0I7b0JBQ0F2QixTQUFTLEVBQUU7O2tCQUVaO2tCQUVBLE1BQU0sSUFBSXdCLEtBQUssQ0FBQ0wsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOztnQkFFdEMsSUFBSW5CLFNBQVMsRUFBRUEsU0FBUyxFQUFFO2VBQzFCLENBQUMsT0FBTy9DLENBQUMsRUFBRTtnQkFDWDZELFFBQVEsQ0FBQ0csS0FBSyxDQUFDUSxNQUFNLENBQUNDLFNBQVMsQ0FBQztlQUNoQyxTQUFTO2dCQUNUZCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTWUsUUFBUSxHQUFHakIsUUFBQSxDQUFBa0IsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEVBQUUsS0FBS25DLEtBQUssRUFBRW1DLEVBQUUsR0FBRyxNQUFNLEdBQUcsS0FBSztZQUN0RSxNQUFNQyxVQUFVLEdBQUd2TSxJQUFJLEtBQUssYUFBYSxHQUFHeUwsS0FBSyxDQUFDZSxNQUFNLENBQUNDLFdBQVcsR0FBR2hCLEtBQUssQ0FBQ2UsTUFBTSxDQUFDTCxRQUFRLENBQUM7WUFDN0YsTUFBTU8sUUFBUSxHQUFHMU0sSUFBSSxLQUFLLGFBQWEsR0FBR3lMLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQ0QsV0FBVyxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUSxDQUFDUCxRQUFRLENBQUM7WUFDL0YsT0FDQzlNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN3QixhQUFBLENBQUFJLE1BQU0sQ0FBQ3FMLEdBQUc7Y0FBQSxHQUFLMUIsV0FBQSxDQUFBdEIsVUFBVSxDQUFDbEssT0FBTztjQUFFRSxTQUFTLEVBQUM7WUFBNEMsR0FDekZOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLK0wsS0FBSyxDQUFDeEwsS0FBSyxDQUFNLEVBQ3RCWixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUFzTSxXQUFXO2NBQUNDLE1BQU0sRUFBRTtnQkFBRUMsV0FBVyxFQUFFM0MsS0FBSyxFQUFFdEU7Y0FBSTtZQUFFLEdBQUc2RyxRQUFRLENBQWUsQ0FDbkUsRUFDVHJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvTCxjQUFBLENBQUFpQyxhQUFhO2NBQUMxQixLQUFLLEVBQUVBLEtBQUs7Y0FBRXpHLE9BQU8sRUFBQztZQUFTLEVBQUcsRUFDaER1RixLQUFLLElBQ0w5SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQXVOLFFBQUEsUUFDQzNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUErQixHQUM3Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQXNILFVBQVU7Y0FBQ1QsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDNUI5SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBWSxHQUMxQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBT3lLLEtBQUssQ0FBQ3RFLElBQUksQ0FBUSxFQUN6QnhHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU8rTCxLQUFLLENBQUN3QixnQkFBZ0IsQ0FBUSxDQUNoQyxDQUNELENBRVAsRUFFRDVOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFvQixHQUN0Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksV0FBQSxDQUFBTyxNQUFNO2NBQUMrRCxPQUFPLEVBQUMsU0FBUztjQUFDc0ksUUFBUTtjQUFDek0sT0FBTyxFQUFFa0s7WUFBUSxHQUNsRFksV0FBVyxDQUFDNEIsTUFBTSxDQUNYLEVBQ1Q5TixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUwsU0FBQSxDQUFBdkssUUFBUTtjQUFDb0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ25FLE9BQU8sRUFBRW1MO1lBQVMsR0FDNUNMLFdBQVcsQ0FBQzZCLFFBQVEsQ0FDWCxDQUNGLEVBQ1YvTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYSxHQUMzQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQVksR0FBRTRNLFVBQVUsQ0FBUSxDQUMzQyxFQUNObE4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NMLGlCQUFBLENBQUFxQyxnQkFBZ0I7Y0FBQ2xDLFFBQVEsRUFBRUEsUUFBUTtjQUFFbkQsR0FBRyxFQUFDO1lBQVksRUFBRyxDQUM3QztVQUVmOzs7Ozs7Ozs7OztVTHhGQTs7VUFFQW9CLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FqRCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VNSkEsSUFBQWhILE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFnTyxNQUFBLEdBQUFoTyxPQUFBO1VBVU87VUFBVyxTQUFVaU8sU0FBU0EsQ0FBQztZQUFFNUYsSUFBSTtZQUFFaEksU0FBUztZQUFFNk4sV0FBVztZQUFFck4sUUFBUTtZQUFFLEdBQUdRO1VBQUssQ0FBd0I7WUFDL0csTUFBTVAsR0FBRyxHQUFHLDJCQUEyQlQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUV6RSxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNE4sTUFBQSxDQUFBRyxLQUFLO2NBQUM5TixTQUFTLEVBQUVTLEdBQUc7Y0FBQSxHQUFNTztZQUFLLEdBQy9CdEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS2lJLElBQUksQ0FBTSxFQUNmdEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBR0MsU0FBUyxFQUFDO1lBQUksR0FBRTZOLFdBQVcsQ0FBSyxFQUNsQ3JOLFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQWVPO1VBQVUsU0FBVW1GLFdBQVdBLENBQUM7WUFDdENqRixHQUFHO1lBQ0hrTyxLQUFLO1lBQ0xsSyxHQUFHLEdBQUcsRUFBRTtZQUNSbUssTUFBTSxHQUFHLFVBQVU7WUFDbkIzTixJQUFJO1lBQ0pHLFFBQVE7WUFDUnlOLElBQUksR0FBRyxJQUFJO1lBQ1gvTixPQUFPO1lBQ1BGLFNBQVM7WUFDVCxHQUFHZ0I7VUFBSyxDQUNXO1lBQ25CLElBQUlQLEdBQUcsR0FBRyxnQkFBZ0JULFNBQVMsSUFBSSxFQUFFLElBQUlnTyxNQUFNLEVBQUU7WUFFckQsSUFBSUQsS0FBSyxFQUFFdE4sR0FBRyxJQUFJLFNBQVNzTixLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDbE8sR0FBRyxJQUFJQSxHQUFHLEtBQUssRUFBRSxFQUFFO2NBQ3ZCQSxHQUFHLEdBQUcsMkJBQTJCbU8sTUFBTSxJQUFJM04sSUFBSSxHQUFHLEdBQUdBLElBQUksR0FBRyxHQUFHLEVBQUUsVUFBVTs7WUFHNUUsSUFBSUgsT0FBTyxFQUFFLE9BQU9SLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRSxHQUFHUyxHQUFHO1lBQXdCLEVBQUk7WUFFdEUsT0FDQ2YsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQUcsS0FBSztjQUFBLEdBQUs5QyxLQUFLO2NBQUVuQixHQUFHLEVBQUUsR0FBR0EsR0FBRyxTQUFTb08sSUFBSSxFQUFFO2NBQUVwSyxHQUFHLEVBQUVBLEdBQUc7Y0FBRTdELFNBQVMsRUFBRVM7WUFBRyxHQUNwRUQsUUFBUSxDQUNGO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBLElBQUFkLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1TyxNQUFBLEdBQUF2TyxPQUFBO1VBRU87VUFBVyxTQUFVeU4sYUFBYUEsQ0FBQztZQUN6QzFCLEtBQUs7WUFDTHpHLE9BQU8sR0FBRztVQUFPLENBSWpCO1lBQ0EsSUFBSSxDQUFDeUcsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixPQUFPaE0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21PLE1BQUEsQ0FBQUMsS0FBSztjQUFDOU4sSUFBSSxFQUFFNEU7WUFBTyxHQUFHeUcsS0FBSyxDQUFTO1VBQzdDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUF2TCxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVBOzs7OztVQUtBLE1BQU15TyxpQkFBaUIsR0FBR0EsQ0FBQztZQUFFakssSUFBSTtZQUFFa0s7VUFBSyxDQUFFLEtBQUk7WUFDN0MsTUFBTUMsbUJBQW1CLEdBQUdBLENBQUM7Y0FBRW5DO1lBQU0sQ0FBRSxLQUFJO2NBQzFDLFFBQVFBLE1BQU07Z0JBQ2IsS0FBSyxNQUFNO2tCQUNWLE9BQU96TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtvQkFBS0MsU0FBUyxFQUFDO2tCQUFrQyxHQUFFcU8sS0FBSyxDQUFPO2dCQUV2RSxLQUFLLFNBQVM7a0JBQ2IsT0FBTzNPLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO29CQUFLQyxTQUFTLEVBQUM7a0JBQXFDLEdBQUVxTyxLQUFLLENBQU87Z0JBRTFFLEtBQUssU0FBUztrQkFDYixPQUFPM08sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7b0JBQUtDLFNBQVMsRUFBQztrQkFBcUMsR0FBRXFPLEtBQUssQ0FBTztnQkFFMUU7a0JBQ0MsT0FBTzNPLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNJLE1BQUEsQ0FBQStJLElBQUk7b0JBQUNsSixTQUFTLEVBQUMsSUFBSTtvQkFBQ08sSUFBSSxFQUFFO2tCQUFTLEVBQUk7O1lBRWxELENBQUM7WUFFRCxPQUNDYixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUEyRCxJQUFJO2NBQUN0RSxTQUFTLEVBQUMsVUFBVTtjQUFDeUUsSUFBSSxFQUFFTixJQUFJLENBQUM3QjtZQUFHLEdBQ3hDNUMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VPLG1CQUFtQjtjQUFDbkMsTUFBTSxFQUFFaEksSUFBSSxDQUFDZ0k7WUFBTSxFQUFJLENBQ3RDO1VBRVQsQ0FBQztVQUVNO1VBQVcsU0FBVW9DLGFBQWFBLENBQUM7WUFBRUMsSUFBSTtZQUFFeE87VUFBUyxDQUFFO1lBQzVELE1BQU1TLEdBQUcsR0FBRyw2QkFBNkJULFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0UsTUFBTXlPLGFBQWEsR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ3ZLLElBQUksRUFBRWtLLEtBQUssS0FBSzNPLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNxTyxpQkFBaUI7Y0FBQ2pLLElBQUksRUFBRUEsSUFBSTtjQUFFa0UsR0FBRyxFQUFFZ0csS0FBSztjQUFFQSxLQUFLLEVBQUVBLEtBQUssR0FBRztZQUFDLEVBQUksQ0FBQztZQUNoSCxPQUFPM08sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFUztZQUFHLEdBQUdnTyxhQUFhLENBQU87VUFDbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUEvTyxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVnUCxXQUFXQSxDQUFDO1lBQUVyTztVQUFLLENBQUU7WUFDL0MsT0FDQ1osTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQThCLEdBQ2hETixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBNEIsR0FBRU0sS0FBSyxDQUFNLENBQzlDO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQXNPLGNBQUEsR0FBQWpQLE9BQUE7VUFDQSxJQUFBa1AsWUFBQSxHQUFBbFAsT0FBQTtVQUNBLElBQUFnRSxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVbVAsVUFBVUEsQ0FBQztZQUFFOU8sU0FBUztZQUFFUSxRQUFRO1lBQUV1TyxLQUFLO1lBQUVsTCxHQUFHO1lBQUVMLE1BQU0sR0FBRyxNQUFNO1lBQUVsRCxLQUFLO1lBQUVrTztVQUFJLENBQUU7WUFDdEcsTUFBTS9OLEdBQUcsR0FBRyxpQ0FBaUMrQyxNQUFNLEdBQUd4RCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3hGLE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVM7WUFBRyxHQUNsQmYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW1CLEdBQ3BDTSxLQUFLLElBQUlaLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM4TyxZQUFBLENBQUFGLFdBQVc7Y0FBQ3JPLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQ3ZDWixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBc0IsR0FBRVEsUUFBUSxDQUFXLENBQ3JELEVBQ1RnTyxJQUFJLElBQUk5TyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNk8sY0FBQSxDQUFBTCxhQUFhO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFeE8sU0FBUyxFQUFDO1lBQXNCLEVBQUcsRUFDdEUrTyxLQUFLLElBQUlyUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsTUFBQSxDQUFBRyxLQUFLO2NBQUNqRSxHQUFHLEVBQUVrUCxLQUFLO2NBQUVsTCxHQUFHLEVBQUVBLEdBQUc7Y0FBRTdELFNBQVMsRUFBQztZQUFvQixFQUFHLENBQ25FO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFnUCxXQUFBLEdBQUFyUCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ087VUFBVSxTQUFVc1AsV0FBV0EsQ0FBQ2pPLEtBQUs7WUFDM0MsTUFBTTRILEtBQUssR0FBRztjQUNic0csY0FBYyxFQUFFLEdBQUc7Y0FDbkJDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2NBQ2xGQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2NBQ3BCQyxTQUFTLEVBQUU7YUFDWDtZQUNEM1AsTUFBQSxDQUFBSSxPQUFLLENBQUMrQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNeU0sVUFBVSxHQUFHLElBQUlOLFdBQUEsQ0FBQWxQLE9BQVUsRUFBRTtjQUNuQ3dQLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDO2dCQUFFLEdBQUczRyxLQUFLO2dCQUFFLEdBQUc1SDtjQUFLLENBQUUsQ0FBQztZQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1VBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQXdPLEtBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBOFAsTUFBQSxHQUFBOVAsT0FBQTtVQUVPO1VBQVUsU0FBVStQLGdCQUFnQkEsQ0FBQ0MsU0FBUyxFQUFFQyxRQUFRO1lBQzlELE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR04sS0FBSyxDQUFDbkosUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUN5RixLQUFLLEVBQUVpRSxRQUFRLENBQUMsR0FBR1AsS0FBSyxDQUFDbkosUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q21KLEtBQUssQ0FBQzNNLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLE1BQU1tTixVQUFVLEdBQUcsSUFBSVAsTUFBQSxDQUFBUSxZQUFZLENBQUNOLFNBQVMsQ0FBQztjQUM5QyxNQUFNTyxZQUFZLEdBQUdBLENBQUEsS0FBSztnQkFDekIsSUFBSXhKLEtBQUssR0FBR3NKLFVBQVUsQ0FBQ3RKLEtBQUs7Z0JBQzVCcUosUUFBUSxDQUFDckosS0FBSyxDQUFDO2dCQUNmb0osUUFBUSxDQUFDRSxVQUFVLENBQUNILEtBQUssQ0FBQztnQkFDMUIsSUFBSUcsVUFBVSxDQUFDSCxLQUFLLEVBQUVELFFBQVEsQ0FBQ2xKLEtBQUssQ0FBQztjQUN0QyxDQUFDO2NBQ0RzSixVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1FLE9BQU8sR0FBR1AsS0FBSyxJQUFJLENBQUMsQ0FBQy9ELEtBQUs7WUFDaEMsT0FBTyxDQUFDc0UsT0FBTyxFQUFFdEUsS0FBSyxDQUFDO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBcE0sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBMEssTUFBQSxHQUFBMUssT0FBQTtVQUNBLElBQUEwUSxLQUFBLEdBQUExUSxPQUFBO1VBUU87VUFBVSxTQUFVMlEsYUFBYUEsQ0FBQztZQUFFelEsR0FBRztZQUFFZ0UsR0FBRyxHQUFHLEVBQUU7WUFBRTdELFNBQVMsR0FBRztVQUFFLENBQXNCO1lBQzdGLE1BQU0sQ0FBQ3VRLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUcsSUFBQTlRLE1BQUEsQ0FBQTJHLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFFdkMsTUFBTW9LLFVBQVUsR0FBR0EsQ0FBQSxLQUFNRCxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3RDLE1BQU1FLFdBQVcsR0FBR0EsQ0FBQSxLQUFNRixPQUFPLENBQUMsS0FBSyxDQUFDO1lBRXhDLE9BQ0M5USxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQXVOLFFBQUEsUUFDQzNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQ0NDLFNBQVMsRUFBRSxJQUFBcVEsS0FBQSxDQUFBdlEsT0FBSSxFQUFDLGdCQUFnQixFQUFFRSxTQUFTLENBQUM7Y0FDNUNjLE9BQU8sRUFBRTJQLFVBQVU7Y0FDbkJFLElBQUksRUFBQyxRQUFRO2NBQ2JDLFFBQVEsRUFBRSxDQUFDO2NBQUEsY0FDQSxjQUFjO2NBQ3pCQyxVQUFVLEVBQUUvSSxDQUFDLElBQUc7Z0JBQ2YsSUFBSUEsQ0FBQyxDQUFDTyxHQUFHLEtBQUssT0FBTyxJQUFJUCxDQUFDLENBQUNPLEdBQUcsS0FBSyxHQUFHLEVBQUVvSSxVQUFVLEVBQUU7Y0FDckQ7WUFBQyxHQUVEL1EsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQUcsS0FBSztjQUFDakUsR0FBRyxFQUFFQSxHQUFHO2NBQUVnRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRTdELFNBQVMsRUFBQztZQUFxQixFQUFHLENBQ3hELEVBQ0x1USxJQUFJLEdBQ0o3USxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ssTUFBQSxDQUFBUyxLQUFLO2NBQUNKLElBQUksRUFBRTZGLElBQUk7Y0FBRTVGLE9BQU8sRUFBRStGLFdBQVc7Y0FBRTFRLFNBQVMsRUFBQztZQUF1QixHQUN6RU4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzdDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEQsTUFBQSxDQUFBRyxLQUFLO2NBQUNqRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRWdFLEdBQUcsRUFBRUEsR0FBRztjQUFFN0QsU0FBUyxFQUFDO1lBQTJCLEVBQUcsQ0FDOUQsQ0FDQyxHQUNMLElBQUksQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFDTztVQUFVLFNBQVVtUixTQUFTQSxDQUFBO1lBQ25DLE9BQ0NwUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEVBQU8sRUFDbkNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEVBQU8sRUFDcENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFRLEVBQU8sRUFDOUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEVBQU8sRUFDbkNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEVBQU8sRUFDcENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFTLEVBQU8sRUFDL0JOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFhLEVBQU8sQ0FDOUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQSxJQUFBTixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb1IsUUFBQSxHQUFBcFIsT0FBQTtVQUNPO1VBQVksU0FBVXFSLGFBQWFBLENBQUE7WUFDekMsT0FDQ3RSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF1QixHQUNyQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dSLFFBQUEsQ0FBQUUsT0FBTztjQUFDQyxNQUFNO2NBQUM3USxJQUFJLEVBQUM7WUFBUyxFQUFHLENBQzVCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUkEsSUFBQVgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdSLE9BQUEsR0FBQXhSLE9BQUE7VUFPTztVQUFXLFNBQVV5UixVQUFVQSxDQUFDO1lBQUU1USxRQUFRO1lBQUVSLFNBQVM7WUFBRXdMO1VBQVEsQ0FBVTtZQUMvRSxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTS9LLEdBQUcsR0FBRyx3QkFBd0JULFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEUsT0FDQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFUztZQUFHLEdBQ2pCK0ssUUFBUSxJQUNSOUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb1IsT0FBQSxDQUFBTCxTQUFTLE9BQUcsRUFDWnRRLFFBQVEsQ0FDSixDQUVQLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdCLFdBQUEsR0FBQWhCLE9BQUE7VUFTTztVQUFXLFNBQVUwUixhQUFhQSxDQUFDO1lBQ3pDN1EsUUFBUTtZQUNSUixTQUFTO1lBQ1R3TCxRQUFRO1lBQ1I4RixNQUFNLEdBQUcsS0FBSztZQUNkckQsSUFBSSxHQUFHMUo7VUFBUyxDQUNTO1lBQ3pCLE1BQU1nTixLQUFLLEdBQUc7Y0FDYkMsRUFBRSxFQUFFLGNBQWM7Y0FDbEIxUixPQUFPLEVBQUU7YUFDVDtZQUNELE1BQU0yUixPQUFPLEdBQUdGLEtBQUssQ0FBQ3RELElBQUksQ0FBQyxJQUFJc0QsS0FBSyxDQUFDelIsT0FBTztZQUM1QyxJQUFJVyxHQUFHLEdBQUcsbUJBQW1CZ1IsT0FBTyxHQUFHelIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN6RSxJQUFJc1IsTUFBTSxFQUFFN1EsR0FBRyxJQUFJLHdCQUF3QjtZQUMzQyxPQUNDZixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDakJELFFBQVEsRUFDUmdMLFFBQVEsSUFDUjlMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEyQixHQUN6Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksV0FBQSxDQUFBc1EsT0FBTztjQUFDQyxNQUFNLEVBQUUsSUFBSTtjQUFFakQsSUFBSSxFQUFDO1lBQUksRUFBRyxDQUVwQyxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUF2TyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd1IsT0FBQSxHQUFBeFIsT0FBQTtVQU9PO1VBQVcsU0FBVStOLGdCQUFnQkEsQ0FBQztZQUFFbE4sUUFBUTtZQUFFUixTQUFTO1lBQUV3TDtVQUFRLENBQTBCO1lBQ3JHLElBQUksQ0FBQ0EsUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUMxQixNQUFNL0ssR0FBRyxHQUFHLG9CQUFvQlQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsRSxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDakIrSyxRQUFRLElBQ1I5TCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvUixPQUFBLENBQUFMLFNBQVMsT0FBRyxFQUNadFEsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStSLGFBQUEsR0FBQS9SLE9BQUE7VUFDQSxJQUFBZ1MsUUFBQSxHQUFBaFMsT0FBQTtVQVdPO1VBQVUsU0FBVWlTLFNBQVNBLENBQUM7WUFBRTFSLE9BQU87WUFBRUksS0FBSztZQUFFRSxRQUFRO1lBQUVpRSxJQUFJO1lBQUVoRCxFQUFFLEdBQUc7VUFBSSxDQUFVO1lBQ3pGLE1BQU0rRSxPQUFPLEdBQUcvRSxFQUF1QjtZQUV2QyxJQUFJdkIsT0FBTyxFQUFFO2NBQ1osT0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Z0JBQVFDLFNBQVMsRUFBQztjQUFxQixHQUN0Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJSLGFBQUEsQ0FBQUcsWUFBWTtnQkFBQ0MsTUFBTSxFQUFDLEtBQUs7Z0JBQUMzUCxLQUFLLEVBQUM7Y0FBTyxFQUFHLEVBQzFDM0IsUUFBUSxDQUNEOztZQUdYLElBQUlvQixLQUFLLEdBQUc7Y0FBRWQsT0FBTyxFQUFFeUQsU0FBUztjQUFFdkUsU0FBUyxFQUFFdUU7WUFBUyxDQUFFO1lBQ3hELElBQUlFLElBQUksRUFBRTtjQUNUN0MsS0FBSyxHQUFHO2dCQUFFZCxPQUFPLEVBQUVBLENBQUEsS0FBTTZRLFFBQUEsQ0FBQUksT0FBTyxDQUFDQyxTQUFTLENBQUN2TixJQUFJLENBQUM7Z0JBQUV6RSxTQUFTLEVBQUU7Y0FBVSxDQUFFOztZQUcxRSxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBcUIsR0FDdENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxPQUFPO2NBQUEsR0FBSzVFO1lBQUssR0FBR3RCLEtBQUssQ0FBVyxFQUNwQ0UsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVV5UixZQUFZQSxDQUFDO1lBQUV6UixRQUFRO1lBQUVpRTtVQUFJLENBQUU7WUFDekQsSUFBSTdDLEtBQUssR0FBRztjQUFFZCxPQUFPLEVBQUV5RDtZQUFTLENBQUU7WUFFbEMsSUFBSUUsSUFBSSxFQUFFO2NBQ1Q3QyxLQUFLLEdBQUc7Z0JBQUVkLE9BQU8sRUFBRUEsQ0FBQSxLQUFNNlEsUUFBQSxDQUFBSSxPQUFPLENBQUNDLFNBQVMsQ0FBQ3ZOLElBQUk7Y0FBQyxDQUFFOztZQUduRCxPQUNDL0UsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDLFlBQVk7Y0FBQSxHQUFLNEI7WUFBSyxHQUNwQ3BCLFFBQVEsQ0FDSDtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqREEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWdCLFdBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFFTztVQUFVLFNBQVV1UyxhQUFhQSxDQUFDO1lBQUUxUixRQUFRO1lBQUVNLE9BQU87WUFBRXNELFFBQVE7WUFBRSxHQUFHcEQ7VUFBSyxDQUFFO1lBQ2pGLE1BQU0sQ0FBQ21SLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcxUyxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTXBGLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUJtUixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU10UixPQUFPLEVBQUU7Y0FDZnNSLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE9BQ0MxUyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUFPLE1BQU07Y0FBQSxHQUFLRixLQUFLO2NBQUVGLE9BQU8sRUFBRUcsV0FBVztjQUFFbUQsUUFBUSxFQUFFQSxRQUFRLElBQUkrTjtZQUFVLEdBQ3ZFM1IsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVU2UixpQkFBaUJBLENBQUM7WUFBRTdSLFFBQVE7WUFBRTRELFFBQVE7WUFBRXBFLFNBQVM7WUFBRWMsT0FBTztZQUFFLEdBQUdFO1VBQUssQ0FBRTtZQUNoRyxNQUFNLENBQUNtUixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMVMsTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1wRixXQUFXLEdBQUcsTUFBTXNILEtBQUssSUFBRztjQUNqQ0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkI0SixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU10UixPQUFPLEVBQUU7Y0FFZmtHLFVBQVUsQ0FBQyxNQUFLO2dCQUNmb0wsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUNELElBQUlELFVBQVUsRUFBRTtjQUNmLE9BQ0N6UyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUUMsU0FBUyxFQUFDO2NBQXlDLEdBQzFETixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUFzUSxPQUFPO2dCQUFDQyxNQUFNO2dCQUFDN1EsSUFBSSxFQUFDO2NBQVMsRUFBRyxDQUN6Qjs7WUFHWCxNQUFNSSxHQUFHLEdBQUdULFNBQVMsR0FBRyxHQUFHQSxTQUFTLGlCQUFpQixHQUFHLGdCQUFnQjtZQUN4RSxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUFtUyxhQUFhO2NBQUN0UyxTQUFTLEVBQUVTLEdBQUc7Y0FBQSxHQUFNTyxLQUFLO2NBQUVGLE9BQU8sRUFBRUcsV0FBVztjQUFFbUQsUUFBUSxFQUFFQSxRQUFRLElBQUkrTjtZQUFVLEdBQzlGM1IsUUFBUSxDQUNNO1VBRWxCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBZ1AsS0FBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUE0QixhQUFBLEdBQUE1QixPQUFBO1VBT08sV0FUUDs7VUFTaUIsU0FBVTRTLFdBQVdBLENBQUM7WUFBRUMsS0FBSztZQUFFaEosUUFBUTtZQUFFLEdBQUdpSjtVQUFJLENBQXFCO1lBQ3JGLE1BQU1DLFFBQVEsR0FBR2xELEtBQUssQ0FBQzVNLE1BQU0sQ0FBbUIsSUFBSSxDQUFDO1lBRXJELE1BQU0rUCxpQkFBaUIsR0FBSXBLLEtBQTBDLElBQUk7Y0FDeEUsSUFBSW1LLFFBQVEsQ0FBQzNQLE9BQU8sRUFBRTtnQkFDckIsTUFBTTZQLFdBQVcsR0FBRyxJQUFJQyxLQUFLLENBQUMsUUFBUSxFQUFFO2tCQUN2Q0MsT0FBTyxFQUFFLElBQUk7a0JBQ2JDLFVBQVUsRUFBRTtpQkFDWixDQUFDO2dCQUNGTCxRQUFRLENBQUMzUCxPQUFPLENBQUNpUSxhQUFhLENBQUNKLFdBQVcsQ0FBQzs7WUFFN0MsQ0FBQztZQUVELE9BQ0NwRCxLQUFBLENBQUF6UCxhQUFBO2NBQU9DLFNBQVMsRUFBQyxjQUFjO2NBQUN3SixRQUFRLEVBQUVtSjtZQUFpQixHQUMxRG5ELEtBQUEsQ0FBQXpQLGFBQUEsZUFDQ3lQLEtBQUEsQ0FBQXpQLGFBQUE7Y0FBT00sSUFBSSxFQUFDLE9BQU87Y0FBQ3NDLEdBQUcsRUFBRStQLFFBQVE7Y0FBRWxKLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU1pSjtZQUFJLEVBQUksRUFDbkVqRCxLQUFBLENBQUF6UCxhQUFBLENBQUN3QixhQUFBLENBQUFJLE1BQU0sQ0FBQ3FMLEdBQUc7Y0FDVmhOLFNBQVMsRUFBQyxzQkFBc0I7Y0FDaEM2QixPQUFPLEVBQUU7Z0JBQUVvUixLQUFLLEVBQUVSLElBQUksQ0FBQ1MsT0FBTyxHQUFHLEdBQUcsR0FBRztjQUFDLENBQUU7Y0FDMUNuUixVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRTtjQUFHO1lBQUUsR0FFNUJ5USxJQUFJLENBQUNTLE9BQU8sSUFBSTFELEtBQUEsQ0FBQXpQLGFBQUEsQ0FBQ3dCLGFBQUEsQ0FBQUksTUFBTSxDQUFDcUwsR0FBRztjQUFDaE4sU0FBUyxFQUFDLHFCQUFxQjtjQUFDb0MsTUFBTTtZQUFBLEVBQUcsQ0FDMUQsQ0FDUCxFQUNOb1EsS0FBSyxDQUNDO1VBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFoRCxLQUFBLEdBQUE3UCxPQUFBO1VBYU8sV0FkUDs7VUFjaUIsU0FBVXdULFVBQVVBLENBQUM7WUFBRTNTLFFBQVE7WUFBRWtHLEtBQUs7WUFBRThDO1VBQVEsQ0FBb0I7WUFDcEYsT0FDQ2dHLEtBQUEsQ0FBQXpQLGFBQUEsY0FDRXlQLEtBQUssQ0FBQzRELFFBQVEsQ0FBQzFFLEdBQUcsQ0FBQ2xPLFFBQVEsRUFBRTZTLEtBQUssSUFBRztjQUNyQztjQUNBLElBQUk3RCxLQUFLLENBQUM4RCxjQUFjLENBQW9CRCxLQUFLLENBQUMsSUFBSSxPQUFPQSxLQUFLLENBQUNyUyxLQUFLLENBQUMwRixLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM1RjtnQkFDQSxPQUFPOEksS0FBSyxDQUFDK0QsWUFBWSxDQUFDRixLQUFLLEVBQUU7a0JBQ2hDSCxPQUFPLEVBQUVHLEtBQUssQ0FBQ3JTLEtBQUssQ0FBQzBGLEtBQUssS0FBS0EsS0FBSztrQkFDcEM4QyxRQUFRLEVBQUVBLENBQUEsS0FBTUEsUUFBUSxDQUFDNkosS0FBSyxDQUFDclMsS0FBSyxDQUFDMEYsS0FBSztpQkFDMUMsQ0FBQzs7Y0FFSCxPQUFPMk0sS0FBSztZQUNiLENBQUMsQ0FBQyxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUEzVCxNQUFBLEdBQUFDLE9BQUE7VUFVTztVQUFVLFNBQVVrUyxZQUFZQSxDQUFDN1EsS0FBeUI7WUFDaEUsT0FDQ3RCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQ0NDLFNBQVMsRUFBQyxlQUFlO2NBQ3pCc0QsS0FBSyxFQUFFO2dCQUNObkIsS0FBSyxFQUFFbkIsS0FBSyxDQUFDbUIsS0FBSyxJQUFJLE1BQU07Z0JBQzVCMlAsTUFBTSxFQUFFOVEsS0FBSyxDQUFDOFEsTUFBTSxJQUFJLE1BQU07Z0JBQzlCMEIsVUFBVSxFQUFFeFMsS0FBSyxDQUFDeVMsS0FBSyxJQUFJLEVBQUU7Z0JBQzdCQyxZQUFZLEVBQUUxUyxLQUFLLENBQUMyUyxLQUFLLElBQUk7O1lBQzdCLEdBRURqVSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNdUQsS0FBSyxFQUFFO2dCQUFFc1EsT0FBTyxFQUFFNVMsS0FBSyxDQUFDNlMsYUFBYSxHQUFHLE1BQU0sR0FBRztjQUFPO1lBQUUsRUFBUyxDQUNuRTtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBblUsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQW1VLE9BQUEsR0FBQW5VLE9BQUE7VUFFTztVQUFVLFNBQVVvVSxXQUFXQSxDQUFDO1lBQUV2STtVQUFRLENBQUU7WUFDbEQsTUFBTXdJLEtBQUssR0FBR3JQLFVBQVUsRUFBRXNQLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDQyxPQUFPO1lBQzVFLE1BQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2xELE1BQU1DLFlBQVksR0FBV04sS0FBSyxHQUFHLE1BQU0sR0FBRyxPQUFPO1lBQ3JELE1BQU1PLFNBQVMsR0FBV0osWUFBWSxJQUFJRyxZQUFZO1lBQ3RELE1BQU0sQ0FBQy9ULElBQUksRUFBRWlVLE9BQU8sQ0FBQyxHQUFHOVUsTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLENBQVNrTyxTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFFckYsU0FBU0UsWUFBWUEsQ0FBQzNNLENBQUM7Y0FDdEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2NBRWxCLE1BQU0yTSxTQUFTLEdBQUd2TixRQUFRLENBQUNrQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hELE1BQU0ySyxLQUFLLEdBQUd6VCxJQUFJLEtBQUssS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNO2NBQy9DbVUsU0FBUyxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLEVBQUVYLEtBQUssQ0FBQztjQUNqREksWUFBWSxDQUFDdlAsT0FBTyxDQUFDLE9BQU8sRUFBRW1QLEtBQUssQ0FBQztjQUNwQ0YsT0FBQSxDQUFBYyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixFQUFFZCxLQUFLLENBQUM7Y0FFakRRLE9BQU8sQ0FBQ1IsS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNDO1lBRUF0VSxNQUFBLENBQUFJLE9BQUssQ0FBQytDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ3NSLFlBQVksRUFBRTtjQUNuQixNQUFNTyxTQUFTLEdBQUd2TixRQUFRLENBQUNrQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hEcUwsU0FBUyxDQUFDQyxZQUFZLENBQUMsa0JBQWtCLEVBQUVSLFlBQVksQ0FBQztZQUN6RCxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ3pVLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQyw2QkFBNkI7Y0FBQ2MsT0FBTyxFQUFFMlQ7WUFBWSxHQUNqRS9VLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNJLE1BQUEsQ0FBQStJLElBQUk7Y0FBQzNJLElBQUksRUFBRUEsSUFBSTtjQUFFNkQsUUFBUSxFQUFFb0gsUUFBUTtjQUFFMUssT0FBTyxFQUFFMlQ7WUFBWSxFQUFJLENBQzFEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBLElBQUEvVSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb1YsY0FBQSxHQUFBcFYsT0FBQTtVQUNBLElBQUEwSyxNQUFBLEdBQUExSyxPQUFBO1VBRUEsSUFBQXFWLEtBQUEsR0FBQXJWLE9BQUE7VUFDQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQUNPO1VBQVUsU0FBVXNWLG1CQUFtQkEsQ0FBQztZQUFFL08sSUFBSTtZQUFFbEcsU0FBUztZQUFFNlAsS0FBSztZQUFFL0QsS0FBSztZQUFFdEw7VUFBUSxDQUFFO1lBQ3pGLE1BQU0sQ0FBQzBVLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUd6VixNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsTUFBTStPLGFBQWEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDaENELGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU07Y0FBRXhTLEdBQUc7Y0FBRTBGO1lBQUcsQ0FBRSxHQUFHLElBQUEwTSxjQUFBLENBQUFNLGFBQWEsRUFBQ25QLElBQUksRUFBRTJKLEtBQUssRUFBRXVGLGFBQWEsRUFBRXRKLEtBQUssQ0FBQztZQUNyRSxNQUFNd0osUUFBUSxHQUFHNVYsTUFBQSxDQUFBSSxPQUFLLENBQUM4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRW5DLE1BQU0rSCxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQixJQUFJMkssUUFBUSxDQUFDdlMsT0FBTyxDQUFDbVEsT0FBTyxFQUFFO2dCQUM3QmtCLFlBQVksQ0FBQ3ZQLE9BQU8sQ0FBQ3dELEdBQUcsRUFBRSxNQUFNLENBQUM7O2NBR2xDOE0sY0FBYyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDO1lBRUQsTUFBTUksVUFBVSxHQUFHO2NBQ2xCQyxFQUFFLEVBQUU7Z0JBQ0hsVixLQUFLLEVBQUUsZ0RBQWdEO2dCQUN2RGtOLE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCaUksS0FBSyxFQUFFO2VBQ1A7Y0FDREMsRUFBRSxFQUFFO2dCQUNIcFYsS0FBSyxFQUFFLDRDQUE0QztnQkFDbkRrTixNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQmlJLEtBQUssRUFBRTtlQUNQO2NBQ0RFLEVBQUUsRUFBRTtnQkFDSHJWLEtBQUssRUFBRSwwQ0FBMEM7Z0JBQ2pEa04sTUFBTSxFQUFFLDRCQUE0QjtnQkFDcENpSSxLQUFLLEVBQUU7O2FBRVI7WUFDRCxNQUFNRyxZQUFZLEdBQUdaLEtBQUEsQ0FBQWEsU0FBUyxDQUFDOVMsT0FBTyxLQUFLLElBQUksR0FBR3dTLFVBQVUsQ0FBQ0MsRUFBRSxHQUFHRCxVQUFVLENBQUNHLEVBQUU7WUFDL0UsT0FDQ2hXLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUs0QyxHQUFHLEVBQUVBLEdBQUc7Y0FBRTNDLFNBQVMsRUFBRUE7WUFBUyxHQUNqQ1EsUUFBUSxFQUNSMFUsV0FBVyxJQUNYeFYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NLLE1BQUEsQ0FBQVMsS0FBSztjQUFDSixJQUFJO2NBQUNwSyxLQUFLLEVBQUVpVixVQUFVLENBQUNQLEtBQUEsQ0FBQWEsU0FBUyxDQUFDOVMsT0FBTyxDQUFDLENBQUN6QyxLQUFLO2NBQUVxSyxPQUFPLEVBQUVBO1lBQU8sR0FDdkVqTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLNlYsWUFBWSxDQUFDdFYsS0FBSyxDQUFNLEVBQzdCWixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBTyxHQUNyQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQXVCLEdBQ3RDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPTSxJQUFJLEVBQUMsVUFBVTtjQUFDc0MsR0FBRyxFQUFFMlM7WUFBUSxFQUFJLEVBQ3ZDTSxZQUFZLENBQUNwSSxNQUFNLENBQ2QsQ0FDRixFQUNOOU4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQWdELEdBQ2pFTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUFPLE1BQU07Y0FBQytELE9BQU8sRUFBQyxTQUFTO2NBQUM2USxLQUFLO2NBQUNoVixPQUFPLEVBQUU2SjtZQUFPLEdBQzlDaUwsWUFBWSxDQUFDSCxLQUFLLENBQ1gsQ0FDRCxDQUVWLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvREEsSUFBQS9WLE1BQUEsR0FBQUMsT0FBQTtVQVdPO1VBQVUsU0FBVW9XLFFBQVFBLENBQUM7WUFBRS9WLFNBQVM7WUFBRWtHLElBQUk7WUFBRW1JLEtBQUs7WUFBRXZDLEtBQUs7WUFBRXRMLFFBQVE7WUFBRWlCLEVBQUUsR0FBRztVQUFNLENBQWlCO1lBQzFHLE1BQU11VSxJQUFJLEdBQUd2TSxNQUFNLENBQUN1TSxJQUFJLENBQUNsSyxLQUFLLENBQUM7WUFDL0IsSUFBSSxDQUFDQSxLQUFLLENBQUNtSyxjQUFjLENBQUMvUCxJQUFJLENBQUMsSUFBSSxDQUFDOFAsSUFBSSxFQUFFO2NBQ3pDelQsT0FBTyxDQUFDQyxJQUFJLENBQUMsWUFBWTBELElBQUkscUNBQXFDLEVBQUU0RixLQUFLLENBQUM7Y0FDMUUsT0FBTyxJQUFJOztZQUVadUMsS0FBSyxHQUFHQSxLQUFLLElBQUkySCxJQUFJLENBQUNFLE9BQU8sQ0FBQ2hRLElBQUksQ0FBQztZQUVuQyxNQUFNTSxPQUFPLEdBQUcvRSxFQUFFO1lBQ2xCLE1BQU1oQixHQUFHLEdBQUcsYUFBYVQsU0FBUyxJQUFJLEVBQUUsRUFBRTtZQUMxQyxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsT0FBTztjQUNQeEcsU0FBUyxFQUFFUyxHQUFHO2NBQUEsb0JBQ0lxTCxLQUFLLENBQUM1RixJQUFJLENBQUMsQ0FBQzJILFdBQVc7Y0FBQSxjQUM3Qi9CLEtBQUssQ0FBQzVGLElBQUksQ0FBQyxDQUFDNUYsS0FBSztjQUFBLGFBQ2xCK04sS0FBSztjQUFBLGNBQ0pBO1lBQUssR0FFaEI3TixRQUFRLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXdXLE9BQUEsR0FBQXhXLE9BQUE7VUFFTztVQUFVLFNBQVUwVixhQUFhQSxDQUFDblAsSUFBSSxFQUFFMkosS0FBSyxFQUFFdUYsYUFBYSxFQUFFcFUsS0FBSyxHQUFHLEVBQUU7WUFDOUUsTUFBTTJCLEdBQUcsR0FBR2pELE1BQUEsQ0FBQUksT0FBSyxDQUFDOEMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM5QixNQUFNeUYsR0FBRyxHQUFHLFdBQVduQyxJQUFJLE9BQU87WUFDbEMsTUFBTWtRLFVBQVUsR0FBRyxXQUFXbFEsSUFBSSxlQUFlO1lBQ2pELE1BQU1tUSxHQUFHLEdBQUdqQyxZQUFZLENBQUNDLE9BQU8sQ0FBQ2hNLEdBQUcsQ0FBQztZQUNyQyxNQUFNaU8sVUFBVSxHQUFHMVIsY0FBYyxDQUFDeVAsT0FBTyxDQUFDK0IsVUFBVSxDQUFDO1lBRXJEMVcsTUFBQSxDQUFBSSxPQUFLLENBQUMrQyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNnTixLQUFLLElBQUl3RyxHQUFHLElBQUlDLFVBQVUsRUFBRTtjQUNqQyxNQUFNQyxLQUFLLEdBQUc1VCxHQUFHLENBQUNJLE9BQU8sQ0FBQ3lULGdCQUFnQixDQUFDLGFBQWEsQ0FBQztjQUV6RCxNQUFNQyxLQUFLLEdBQUcsRUFBRTtjQUNoQkYsS0FBSyxFQUFFRyxPQUFPLENBQUV2UyxJQUFpQixJQUFJO2dCQUNwQyxNQUFNO2tCQUFFN0QsS0FBSztrQkFBRXVOO2dCQUFXLENBQUUsR0FBRzFKLElBQUksQ0FBQ3dTLE9BQU87Z0JBQzNDRixLQUFLLENBQUNHLElBQUksQ0FBQztrQkFDVkMsT0FBTyxFQUFFMVMsSUFBSTtrQkFDYjJTLE9BQU8sRUFBRTtvQkFDUnhXLEtBQUs7b0JBQ0x1Tjs7aUJBRUQsQ0FBQztjQUNILENBQUMsQ0FBQztjQUNGLE1BQU1rSixHQUFHLEdBQUcsSUFBQVosT0FBQSxDQUFBYSxNQUFNLEVBQUM7Z0JBQ2xCQyxZQUFZLEVBQUUsa0JBQWtCO2dCQUNoQ1IsS0FBSztnQkFFTFMsV0FBVyxFQUFFQSxDQUFBLEtBQUs7a0JBQ2pCLElBQUksQ0FBQ0gsR0FBRyxDQUFDSSxXQUFXLEVBQUUsRUFBRTtvQkFDdkIvQyxZQUFZLENBQUN2UCxPQUFPLENBQUN3RCxHQUFHLEVBQUUsTUFBTSxDQUFDO29CQUNqQzBPLEdBQUcsQ0FBQ0ssT0FBTyxFQUFFO29CQUNiOztrQkFFREwsR0FBRyxDQUFDTSxRQUFRLEVBQUU7a0JBQ2QsT0FBTyxJQUFJO2dCQUNaLENBQUM7Z0JBQ0RDLGdCQUFnQixFQUFFLE1BQUFBLENBQUEsS0FBVztrQkFDNUIxUyxjQUFjLENBQUNDLE9BQU8sQ0FBQ3VSLFVBQVUsRUFBRSxNQUFNLENBQUM7a0JBQzFDaEIsYUFBYSxFQUFFO2tCQUNmMkIsR0FBRyxDQUFDSyxPQUFPLEVBQUU7Z0JBQ2QsQ0FBQztnQkFFRCxHQUFHcFc7ZUFDSCxDQUFDO2NBQ0YrVixHQUFHLENBQUNRLEtBQUssRUFBRTtZQUNaLENBQUMsRUFBRSxDQUFDMUgsS0FBSyxDQUFDLENBQUM7WUFFWCxPQUFPO2NBQUVsTixHQUFHO2NBQUUwRjtZQUFHLENBQUU7VUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFtSCxLQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUEwQk87VUFBVSxTQUFVNlgsUUFBUUEsQ0FBQztZQUFFaEYsS0FBSztZQUFFblMsSUFBSTtZQUFFNkQ7VUFBSSxDQUFhO1lBQ25FLElBQUksQ0FBQ0EsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNO2NBQUVnSCxRQUFRO2NBQUVoRjtZQUFJLENBQUUsR0FBR2hDLElBQUk7WUFDL0IsT0FDQ3NMLEtBQUEsQ0FBQXpQLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW9CLEdBQ2pDd1MsS0FBSyxJQUFJaEQsS0FBQSxDQUFBelAsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBa0IsR0FBRXdTLEtBQUssQ0FBTSxFQUN2RGhELEtBQUEsQ0FBQXpQLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW1CLEdBQ3BDSyxJQUFJLEtBQUssY0FBYyxHQUN2Qm1QLEtBQUEsQ0FBQXpQLGFBQUEsQ0FBQ0ksTUFBQSxDQUFBTyxPQUFPO2NBQUN1RSxPQUFPLEVBQUMsWUFBWTtjQUFDMUUsSUFBSSxFQUFDLGFBQWE7Y0FBQ1AsU0FBUyxFQUFDO1lBQWdCLEVBQUcsR0FFOUV3UCxLQUFBLENBQUF6UCxhQUFBLENBQUM0RCxNQUFBLENBQUFHLEtBQUs7Y0FBQzlELFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ0gsR0FBRyxFQUFFcUw7WUFBUSxFQUMvQyxFQUVEc0UsS0FBQSxDQUFBelAsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBaUIsR0FBRWtHLElBQUksQ0FBUSxDQUN0QyxDQUNMO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=