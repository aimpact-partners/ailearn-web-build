System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/base", "pragmate-ui@1.0.2/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.2/image", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/modal", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.2/empty", "pragmate-ui@1.0.2/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "clsx@2.1.1", "pragmate-ui@1.0.2/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.6"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, ZoomableImage, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_pragmateUi102Components) {
      dependency_4 = _pragmateUi102Components;
    }, function (_pragmateUi102Base) {
      dependency_5 = _pragmateUi102Base;
    }, function (_pragmateUi102Icons) {
      dependency_6 = _pragmateUi102Icons;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi102Image) {
      dependency_8 = _pragmateUi102Image;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102Form) {
      dependency_10 = _pragmateUi102Form;
    }, function (_pragmateUi102Modal) {
      dependency_11 = _pragmateUi102Modal;
    }, function (_aimpactChatSdk154Session) {
      dependency_12 = _aimpactChatSdk154Session;
    }, function (_pragmateUi102Empty) {
      dependency_13 = _pragmateUi102Empty;
    }, function (_pragmateUi102Alert) {
      dependency_14 = _pragmateUi102Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_16 = _beyondJsKernel0112Texts;
    }, function (_clsx2) {
      dependency_17 = _clsx2;
    }, function (_pragmateUi102Spinner) {
      dependency_18 = _pragmateUi102Spinner;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.3"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5], ['pragmate-ui/icons', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['clsx', dependency_17], ['pragmate-ui/spinner', dependency_18], ['@beyond-js/kernel/routing', dependency_19], ['@beyond-js/widgets/render', dependency_20], ['@beyond-js/kernel/core', dependency_21], ['driver.js', dependency_22]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwib25TdWNjZXNzIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJwcm9jZXNzZWRTcmMiLCJoYXNRdWVyeVN0cmluZyIsInNlcGFyYXRvciIsIl9hbGVydCIsIkFsZXJ0IiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2pzQ29uZmV0dGkiLCJ1c2VDb25mZXR0aSIsImNvbmZldHRpTnVtYmVyIiwiY29uZmV0dGlDb2xvcnMiLCJlbW9qaXMiLCJlbW9qaVNpemUiLCJqc0NvbmZldHRpIiwiYWRkQ29uZmV0dGkiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiLCJfY2xzeCIsIlpvb21hYmxlSW1hZ2UiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsInJvbGUiLCJ0YWJJbmRleCIsIm9uS2V5UHJlc3MiLCJBcHBMb2FkZXIiLCJfc3Bpbm5lciIsIlByZWxvYWRTY3JlZW4iLCJTcGlubmVyIiwiYWN0aXZlIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiaXNGb3JtIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiX3JvdXRpbmciLCJQYWdlVGl0bGUiLCJoZWlnaHQiLCJTa2VsZXRvblRleHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJsYWJlbCIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwidGhlbWUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInRoZW1lU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJzZXRJY29uIiwiaGFuZGxlQ2hhbmdlIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJfdXNlRHJpdmVyVG91ciIsIl9jb3JlIiwiRHJpdmVyVG91ckNvbnRhaW5lciIsInNob3dDb25maXJtIiwic2V0U2hvd0NvbmZpcm0iLCJjbG9zZUNhbGxiYWNrIiwidXNlRHJpdmVyVG91ciIsImNoZWNrYm94IiwibW9kYWxUZXh0cyIsImVzIiwiY2xvc2UiLCJlbiIsImRlIiwiY3VycmVudFRleHRzIiwibGFuZ3VhZ2VzIiwiYmxvY2siLCJUb3VyU3RlcCIsImtleXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJfZHJpdmVyIiwic2Vzc2lvbktleSIsInNhdyIsInNlc3Npb25TYXciLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImZvckVhY2giLCJkYXRhc2V0IiwicHVzaCIsImVsZW1lbnQiLCJwb3BvdmVyIiwib2JqIiwiZHJpdmVyIiwicG9wb3ZlckNsYXNzIiwib25OZXh0Q2xpY2siLCJoYXNOZXh0U3RlcCIsImRlc3Ryb3kiLCJtb3ZlTmV4dCIsIm9uRGVzdHJveVN0YXJ0ZWQiLCJkcml2ZSIsIlVzZXJEYXRhIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYXVkaW8udHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY2hpcC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS90ZXh0YXJlYS50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9jcmVkaXRzL2FuaW1hdGlvbnMudHN4IiwiL3RzL2NyZWRpdHMvY29pbnMtbW9kYWwudHN4IiwiL3RzL2NyZWRpdHMvaW1hZ2UudHN4IiwiL3RzL2NyZWRpdHMvcmVxdWVzdC1jcmVkaXRzLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZW50aXR5LWltYWdlLnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2hvb2tzL3VzZS1jb25mZXR0aS50c3giLCIvdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL2ltYWdlL3pvb21hYmxlLnRzeCIsIi90cy9sb2FkZXJzL2xvYWRlci50c3giLCIvdHMvbG9hZGVycy9wcmUtbG9hZC50c3giLCIvdHMvcGFnZS9sb2FkZXIudHN4IiwiL3RzL3BhZ2UvcGFnZS1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yYWRpby9pbmRleC50c3giLCIvdHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3NrZWxldG9uLXRleHQudHN4IiwiL3RzL3RoZW1lLXN3aXRjaGVyLnRzeCIsIi90cy90b3VyL2NvbnRhaW5lci50c3giLCIvdHMvdG91ci90b3VyLXN0ZXAudHN4IiwiL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVQyxhQUFhQSxDQUFDO1lBQUVDO1VBQUcsQ0FBRTtZQUMvQyxJQUFJLENBQUNBLEdBQUcsRUFBRSxPQUFPLElBQUk7WUFDckIsT0FDQ0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9FLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakNSLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFGLEdBQUcsRUFBRUE7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