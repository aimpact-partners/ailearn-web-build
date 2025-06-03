System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/icons", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/icons", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/modal", "@aimpact/chat-sdk@1.5.4/session", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/alert", "js-confetti@0.12.0", "@beyond-js/kernel@0.1.12/texts", "pragmate-ui@1.0.0-beta.7/spinner", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/core", "driver.js@1.3.5"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, ActivityAudio, ActivityHeader, AIButton, AIIconButton, AnimatedContainer, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, Chip, ContentEditable, Textarea, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImageType, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, ThemeSwitch, DriverTourContainer, TourStep, useDriverTour, UserData, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Components) {
      dependency_4 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Base) {
      dependency_5 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_6 = _pragmateUi100Beta7Icons;
    }, function (_framerMotion2) {
      dependency_7 = _framerMotion2;
    }, function (_pragmateUi100Beta7Image) {
      dependency_8 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_9 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_11 = _pragmateUi100Beta7Modal;
    }, function (_aimpactChatSdk154Session) {
      dependency_12 = _aimpactChatSdk154Session;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_13 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_14 = _pragmateUi100Beta7Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_16 = _beyondJsKernel0112Texts;
    }, function (_pragmateUi100Beta7Spinner) {
      dependency_17 = _pragmateUi100Beta7Spinner;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.4.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5], ['pragmate-ui/icons', dependency_6], ['framer-motion', dependency_7], ['pragmate-ui/image', dependency_8], ['@aimpact/chat-sdk/widgets/markdown', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/modal', dependency_11], ['@aimpact/chat-sdk/session', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/widgets/render', dependency_19], ['@beyond-js/kernel/core', dependency_20], ['driver.js', dependency_21]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29udHJvbHMiLCJwcmVsb2FkIiwiX2ljb25zIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJpY29uIiwiY2hpbGRyZW4iLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJvbkNsaWNrIiwiZW5zdXJlIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWRDb250YWluZXIiLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImF0dHJzIiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJpbml0aWFsIiwiZXhpdCIsIndpZHRoIiwibGF5b3V0IiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJkaXNhYmxlZCIsIkNvbnRhaW5lciIsIkxpbmsiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsImhyZWYiLCJjbHNDYXJkIiwiZ2xvYmFsVGhpcyIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkVudGl0eUltYWdlIiwicGljdHVyZSIsIkNoaXAiLCJ2YXJpYW50IiwiY2hpcEJhc2VDbGFzcyIsInZhcmlhbnRDbGFzcyIsImNvbWJpbmVkQ2xhc3MiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIl91c2VDb250YWluZXIiLCJfdGV4dGFyZWEiLCJfbWFya2Rvd24iLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwidXNlU3RhdGUiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiQ29udHJvbCIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJUZXh0YXJlYSIsInNldEVkaXRhYmxlIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsInRleHRDb250ZW50IiwicmVwbGFjZSIsInNwZWNzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwib25QYXN0ZSIsIm9uS2V5RG93biIsIk1hcmtkb3duIiwiSWNvbiIsIl9mb3JtIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwibGVuZ3RoIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJvbkNoYW5nZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImlzT3V0U2lkZSIsImVkaXRlZCIsImNvbnRlbnRWYWx1ZSIsInRvU2hvdyIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvblN1Y2Nlc3MiLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsIl9zZXNzaW9uIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJhY3Rpb25UZXh0cyIsImFjdGlvbnMiLCJ0ZXh0cyIsInJlcXVlc3RDcmVkaXRzIiwiZXJyb3JzIiwib25Db25maXJtIiwiYW5zd2VyIiwic3RhdHVzIiwiY29kZSIsIkVycm9yIiwiYWxlcnRzIiwibm9DcmVkaXRzIiwidGV4dFR5cGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJpZCIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsInN1YnRpdGxlIiwiZGl2IiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJpbnN0aXR1dGlvbiIsIkVycm9yUmVuZGVyZXIiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lbXB0eSIsIkVtcHR5Q2FyZCIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJfYWxlcnQiLCJBbGVydCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJyZWFkeSIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50Iiwib24iLCJpc1JlYWR5IiwiQXBwTG9hZGVyIiwiX3NwaW5uZXIiLCJQcmVsb2FkU2NyZWVuIiwiU3Bpbm5lciIsImFjdGl2ZSIsIl9sb2FkZXIiLCJQYWdlTG9hZGVyIiwiUGFnZUNvbnRhaW5lciIsImlzRm9ybSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiX3NrZWxldG9uVGV4dCIsIl9yb3V0aW5nIiwiUGFnZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsIlBhZ2VTdWJ0aXRsZSIsIlByb2Nlc3NCdXR0b24iLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIlByb2Nlc3NJY29uQnV0dG9uIiwiQXBwSWNvbkJ1dHRvbiIsIlJhZGlvQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJzY2FsZSIsImNoZWNrZWQiLCJSYWRpb0dyb3VwIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIl9yZW5kZXIiLCJUaGVtZVN3aXRjaCIsInRoZW1lIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwic2V0SWNvbiIsImhhbmRsZUNoYW5nZSIsImNvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsIndpZGdldHMiLCJhdHRyaWJ1dGVzIiwiYWRkIiwiX3VzZURyaXZlclRvdXIiLCJfY29yZSIsIkRyaXZlclRvdXJDb250YWluZXIiLCJzaG93Q29uZmlybSIsInNldFNob3dDb25maXJtIiwiY2xvc2VDYWxsYmFjayIsInVzZURyaXZlclRvdXIiLCJjaGVja2JveCIsIm1vZGFsVGV4dHMiLCJlcyIsImNsb3NlIiwiZW4iLCJkZSIsImN1cnJlbnRUZXh0cyIsImxhbmd1YWdlcyIsImJsb2NrIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiX2RyaXZlciIsInNlc3Npb25LZXkiLCJzYXciLCJzZXNzaW9uU2F3IiwiaXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RlcHMiLCJmb3JFYWNoIiwiZGF0YXNldCIsInB1c2giLCJlbGVtZW50IiwicG9wb3ZlciIsIm9iaiIsImRyaXZlciIsInBvcG92ZXJDbGFzcyIsIm9uTmV4dENsaWNrIiwiaGFzTmV4dFN0ZXAiLCJkZXN0cm95IiwibW92ZU5leHQiLCJvbkRlc3Ryb3lTdGFydGVkIiwiZHJpdmUiLCJVc2VyRGF0YSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2hlYWRlci50c3giLCIvdHMvYWktYnV0dG9uLnRzeCIsIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hdWRpby1wbGF5ZXIudHN4IiwiL3RzL2JhdHRlcnkudHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NoaXAudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdGV4dGFyZWEudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtY29uZmV0dGkudHN4IiwiL3RzL2hvb2tzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy9sb2FkZXJzL2xvYWRlci50c3giLCIvdHMvbG9hZGVycy9wcmUtbG9hZC50c3giLCIvdHMvcGFnZS9sb2FkZXIudHN4IiwiL3RzL3BhZ2UvcGFnZS1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvcHJvY2Vzcy1jb250YWluZXIudHN4IiwiL3RzL3BhZ2UvdGl0bGUudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yYWRpby9pbmRleC50c3giLCIvdHMvcmFkaW8vcmFkaW8tZ3JvdXAudHN4IiwiL3RzL3NrZWxldG9uLXRleHQudHN4IiwiL3RzL3RoZW1lLXN3aXRjaGVyLnRzeCIsIi90cy90b3VyL2NvbnRhaW5lci50c3giLCIvdHMvdG91ci90b3VyLXN0ZXAudHN4IiwiL3RzL3RvdXIvdXNlLWRyaXZlci10b3VyLnRzIiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVUMsYUFBYUEsQ0FBQztZQUFFQztVQUFHLENBQUU7WUFDL0MsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBQ3JCLE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPRSxRQUFRO2NBQUNDLE9BQU8sRUFBQztZQUFVLEdBQ2pDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRRixHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUViLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBTSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVTLGNBQWNBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxLQUFLO1lBQUVDLElBQUk7WUFBRUM7VUFBUSxDQUFFO1lBQ3hFLE1BQU1DLEdBQUcsR0FBRyxvQ0FBb0NKLElBQUksRUFBRTtZQUN0RCxPQUNDWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBa0IsR0FDaENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBRVM7WUFBRyxHQUNyQmYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQWUsR0FDOUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNJLE1BQUEsQ0FBQU8sT0FBTztjQUFDSCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUN2QmIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBS08sS0FBSyxDQUFNLENBQ1YsRUFDTkUsUUFBUSxDQUNELENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFkLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBRUEsSUFBQWlCLE9BQUEsR0FBQWpCLE9BQUE7VUFRTztVQUFVLFNBQVVrQixRQUFRQSxDQUFDO1lBQUVMLFFBQVE7WUFBRU0sT0FBTztZQUFFQyxNQUFNO1lBQUUsR0FBR0M7VUFBSyxJQUFxQjtZQUFFRCxNQUFNLEVBQUU7VUFBSSxDQUFFO1lBQzdHLE1BQU1FLFdBQVcsR0FBR0gsT0FBTztZQUUzQixPQUNDcEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksV0FBQSxDQUFBTyxNQUFNO2NBQUEsR0FBS0YsS0FBSztjQUFFVCxJQUFJLEVBQUVKLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTztjQUFFTixPQUFPLEVBQUVHO1lBQVcsR0FDMURULFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVYSxZQUFZQSxDQUFDO1lBQUViLFFBQVE7WUFBRU0sT0FBTztZQUFFQyxNQUFNO1lBQUUsR0FBR0M7VUFBSyxJQUFxQjtZQUFFRCxNQUFNLEVBQUU7VUFBSSxDQUFFO1lBQ2pILE1BQU1FLFdBQVcsR0FBR0gsT0FBTztZQUMzQixPQUNDcEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsT0FBQSxDQUFBVSxVQUFVO2NBQUEsR0FBS04sS0FBSztjQUFFVCxJQUFJLEVBQUVKLE1BQUEsQ0FBQWdCLEtBQUssQ0FBQ0MsT0FBTztjQUFFTixPQUFPLEVBQUVHO1lBQVcsR0FDOURULFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNEIsYUFBQSxHQUFBNUIsT0FBQTtVQU1PO1VBQVUsU0FBVTZCLGlCQUFpQkEsQ0FBQztZQUFFeEIsU0FBUztZQUFFUSxRQUFRO1lBQUVpQixFQUFFLEdBQUcsTUFBTTtZQUFFLEdBQUdUO1VBQUssQ0FBMEI7WUFDbEgsTUFBTVUsU0FBUyxHQUFHLElBQUFILGFBQUEsQ0FBQUksTUFBTSxFQUFDRixFQUFFLENBQXNCO1lBQ2pELE1BQU1HLEtBQUssR0FBRztjQUNiQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRSxDQUFDO2dCQUNWQyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JILE9BQU8sRUFBRTtlQUNUO2NBQ0RJLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkcsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7ZUFDVDtjQUNELEdBQUdkO2FBQ0g7WUFDRCxPQUNDdEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJCLFNBQVM7Y0FBQ1UsTUFBTTtjQUFDcEMsU0FBUyxFQUFFQSxTQUFTO2NBQUEsR0FBTTRCO1lBQUssR0FDL0NwQixRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVTBDLFdBQVdBLENBQUM7WUFBRXhDLEdBQUc7WUFBRXlDO1VBQUcsQ0FBRTtZQUNwRCxJQUFJLENBQUN6QyxHQUFHLElBQUksQ0FBQ3lDLEdBQUcsRUFBRTtjQUNqQkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaM0MsR0FBRyxHQUFHeUMsR0FBRyxJQUFJRyxHQUFHLENBQUNDLGVBQWUsQ0FBQzdDLEdBQUcsQ0FBQztZQUNyQyxNQUFNOEMsR0FBRyxHQUFHakQsTUFBQSxDQUFBSSxPQUFLLENBQUM4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCbEQsTUFBQSxDQUFBSSxPQUFLLENBQUMrQyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxNQUFNLEdBQUdILEdBQUcsQ0FBQ0ksT0FBTztjQUMxQkQsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFLO2dCQUM5QyxJQUFJRixNQUFNLENBQUNkLFFBQVEsS0FBS2lCLFFBQVEsRUFBRTtrQkFDakNILE1BQU0sQ0FBQ0ksV0FBVyxHQUFHLEtBQUs7a0JBQzFCSixNQUFNLENBQUNLLFlBQVksR0FBRyxNQUFLO29CQUMxQkwsTUFBTSxDQUFDSyxZQUFZLEdBQUcsSUFBSTtvQkFDMUJMLE1BQU0sQ0FBQ0ksV0FBVyxHQUFHLENBQUM7a0JBQ3ZCLENBQUM7O2NBRUgsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxFQUFFLENBQUNyRCxHQUFHLENBQUMsQ0FBQztZQUVULElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUVyQixPQUNDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBYyxHQUM1Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT0UsUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUYsR0FBRyxFQUFFQSxHQUFHO2NBQUVRLElBQUksRUFBQyxZQUFZO2NBQUNzQyxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUV6QyxDQUNIO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFqRCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVV5RCxPQUFPQSxDQUFDO1lBQUVDLE9BQU8sR0FBRztVQUFFLENBQUU7WUFDbEQsTUFBTVYsR0FBRyxHQUFHakQsTUFBQSxDQUFBSSxPQUFLLENBQUM4QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUU5Q2xELE1BQUEsQ0FBQUksT0FBSyxDQUFDK0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDTyxLQUFLLENBQUNuQixLQUFLLEdBQUcsR0FBR2tCLE9BQU8sR0FBRztZQUN4QyxDQUFDLEVBQUUsQ0FBQ0EsT0FBTyxDQUFDLENBQUM7WUFDYixNQUFNNUMsR0FBRyxHQUFHLGNBQWM0QyxPQUFPLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBR0EsT0FBTyxHQUFHLEVBQUUsR0FBRyxRQUFRLEdBQUcsTUFBTSxFQUFFO1lBRW5GLE9BQ0MzRCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLNEMsR0FBRyxFQUFFQSxHQUFHO2NBQUUzQyxTQUFTLEVBQUVTO1lBQUcsRUFFdkIsQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUFmLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVcsU0FBVTRELFdBQVdBLENBQUM7WUFBRS9DLFFBQVE7WUFBRVIsU0FBUztZQUFFd0QsTUFBTSxHQUFHLEtBQUs7WUFBRUM7VUFBTSxDQUFFO1lBQ3RGLE1BQU1oRCxHQUFHLEdBQUcseUJBQXlCK0MsTUFBTSxJQUFJeEQsU0FBUyxJQUFJLElBQUlBLFNBQVMsRUFBRSxJQUFJeUQsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUV2RyxPQUFPL0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFUztZQUFHLEdBQUdELFFBQVEsQ0FBTztVQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNOQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLFNBQVUrRCxVQUFVQSxDQUFDO1lBQUVsRCxRQUFRO1lBQUVSLFNBQVM7WUFBRXlEO1VBQU0sQ0FBRTtZQUNyRSxNQUFNaEQsR0FBRyxHQUFHLGdCQUFnQlQsU0FBUyxJQUFJLElBQUlBLFNBQVMsRUFBRSxJQUFJeUQsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUNwRixPQUFPL0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUUMsU0FBUyxFQUFFUztZQUFHLEdBQUdELFFBQVEsQ0FBVTtVQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMQSxJQUFBbUQsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQU9PO1VBQVUsU0FBVWlFLFNBQVNBLENBQUM7WUFBRS9ELEdBQUc7WUFBRUcsU0FBUztZQUFFNkQsR0FBRztZQUFFckQ7VUFBUSxDQUFlO1lBQ2xGLE1BQU1DLEdBQUcsR0FBRyxhQUFhVCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRTNELE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RCxNQUFBLENBQUFHLEtBQUs7Y0FBQ2pFLEdBQUcsRUFBRUEsR0FBRztjQUFFZ0UsR0FBRyxFQUFFQSxHQUFHO2NBQUU3RCxTQUFTLEVBQUVTO1lBQUcsR0FDdkNELFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFHLFdBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBb0UsWUFBQSxHQUFBcEUsT0FBQTtVQUVPO1VBQVUsU0FBVXFFLElBQUlBLENBQUM7WUFBRUMsSUFBSTtZQUFFQyxJQUFJLEVBQUVDLElBQUk7WUFBRTNELFFBQVE7WUFBRTRELFFBQVE7WUFBRVgsTUFBTTtZQUFFekQsU0FBUztZQUFFSztVQUFJLENBQUU7WUFDaEcsTUFBTWdFLFNBQVMsR0FBRyxDQUFDRCxRQUFRLElBQUlILElBQUksR0FBR3RELFdBQUEsQ0FBQTJELElBQUksR0FBRyxNQUFNO1lBQ25ELE1BQU0xQyxLQUFLLEdBQUd3QyxRQUFRLElBQUksQ0FBQ0csU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDUCxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7Y0FBRVEsSUFBSSxFQUFFUixJQUFJO2NBQUVqRSxTQUFTLEVBQUU7WUFBVSxDQUFFO1lBQzNHLElBQUkwRSxPQUFPLEdBQUcsUUFBUTFFLFNBQVMsRUFBRTtZQUVqQyxJQUFJb0UsUUFBUSxFQUFFTSxPQUFPLElBQUksY0FBYztZQUN2QyxJQUFJakIsTUFBTSxFQUFFaUIsT0FBTyxJQUFJLFlBQVk7WUFDbkMsTUFBTTVELE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCNkQsVUFBVSxFQUFFQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7WUFDOUQsQ0FBQztZQUVELE9BQ0NuRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0UsU0FBUztjQUFBLEdBQUt6QyxLQUFLO2NBQUVkLE9BQU8sRUFBRUE7WUFBTyxHQUNyQ3BCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRTBFO1lBQU8sR0FDckJQLElBQUksSUFBSXpFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnRSxZQUFBLENBQUFlLFdBQVc7Y0FBQzlFLFNBQVMsRUFBQyxXQUFXO2NBQUNILEdBQUcsRUFBRXNFLElBQUksQ0FBQ1ksT0FBTztjQUFFbEIsR0FBRyxFQUFFTSxJQUFJLENBQUM3RCxLQUFLO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzdGRyxRQUFRLENBQ0osQ0FDSztVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFRTztVQUFVLFNBQVVxRixJQUFJQSxDQUFDO1lBQUVDLE9BQU87WUFBRWpGLFNBQVM7WUFBRVE7VUFBUSxDQUFjO1lBQzNFLE1BQU0wRSxhQUFhLEdBQUcsTUFBTTtZQUM1QixNQUFNQyxZQUFZLEdBQUdGLE9BQU8sR0FBRyxTQUFTQSxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3RELE1BQU1HLGFBQWEsR0FBRyxDQUFDRixhQUFhLEVBQUVDLFlBQVksRUFBRW5GLFNBQVMsQ0FBQyxDQUFDcUYsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUV4RixPQUFPN0YsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFFb0Y7WUFBYSxHQUFHNUUsUUFBUSxDQUFPO1VBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUFMLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUE2RixhQUFBLEdBQUE3RixPQUFBO1VBQ0EsSUFBQThGLFNBQUEsR0FBQTlGLE9BQUE7VUFDQSxJQUFBK0YsU0FBQSxHQUFBL0YsT0FBQTtVQUNPO1VBQVUsU0FBVWdHLGVBQWVBLENBQUMzRSxLQUE0QjtZQUN0RSxNQUFNO2NBQ0w0RSxNQUFNO2NBQ05DLFFBQVEsR0FBRyxLQUFLO2NBQ2hCcEUsRUFBRSxHQUFHLEtBQUs7Y0FDVnpCLFNBQVM7Y0FDVDhGLE9BQU87Y0FDUHpGLElBQUksR0FBRyxPQUFPO2NBQ2QwRixXQUFXO2NBQ1hDLFNBQVMsR0FBRyxJQUFJO2NBQ2hCQyxRQUFRLEdBQUcsSUFBSTtjQUNmQztZQUFJLENBQ0osR0FBR2xGLEtBQUs7WUFDVCxNQUFNLENBQUNtRixVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUExRyxNQUFBLENBQUEyRyxRQUFRLEVBQUMsS0FBSyxDQUFDO1lBQ25ELE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzdHLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxDQUFDUCxPQUFPLENBQUM7WUFFdkQsTUFBTVUsT0FBTyxHQUFHL0UsRUFBRSxJQUFJb0UsUUFBUTtZQUM5QixNQUFNO2NBQUVsRCxHQUFHLEVBQUU4RCxVQUFVO2NBQUVDLEtBQUs7Y0FBRUM7WUFBUSxDQUFFLEdBQUcsSUFBQW5CLGFBQUEsQ0FBQW9CLGlCQUFpQixFQUFDZCxPQUFPLEVBQUVDLFdBQVcsRUFBRUksVUFBVSxDQUFDO1lBRWhHLElBQUksQ0FBQ0YsUUFBUSxFQUFFO2NBQ2QsT0FBT3ZHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxPQUFPO2dCQUFDN0QsR0FBRyxFQUFFOEQ7Y0FBVSxHQUFHQyxLQUFLLENBQVc7O1lBR25ELElBQUlQLFVBQVUsSUFBSTlGLElBQUksS0FBSyxVQUFVLEVBQ3BDLE9BQ0NYLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMwRixTQUFBLENBQUFvQixRQUFRO2NBQ1JQLFFBQVEsRUFBRUEsUUFBUTtjQUNsQkMsV0FBVyxFQUFFQSxXQUFXO2NBQ3hCTyxXQUFXLEVBQUVWLGFBQWE7Y0FBQSxHQUN0QnBGLEtBQUs7Y0FDVDBGLEtBQUssRUFBRUE7WUFBSyxFQUNYO1lBR0osTUFBTUssVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJYLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxVQUFVLEVBQUU7Z0JBQ2hCYSxVQUFVLENBQUMsTUFBSztrQkFDZixNQUFNQyxFQUFFLEdBQUdSLFVBQVUsQ0FBQzFELE9BQU87a0JBRTdCLElBQUlrRSxFQUFFLEVBQUU7b0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtvQkFDcENGLEtBQUssQ0FBQ0csa0JBQWtCLENBQUNKLEVBQUUsQ0FBQztvQkFDNUJDLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXZCLE1BQU1DLFNBQVMsR0FBRzVDLFVBQVUsQ0FBQzZDLFlBQVksRUFBRTtvQkFFM0MsSUFBSUQsU0FBUyxFQUFFO3NCQUNkQSxTQUFTLENBQUNFLGVBQWUsRUFBRTtzQkFDM0JGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDUixLQUFLLENBQUM7O29CQUcxQkQsRUFBRSxDQUFDVSxLQUFLLEVBQUU7O2dCQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRVAsQ0FBQztZQUVELE1BQU1sSCxHQUFHLEdBQUcsdUJBQXVCVCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3JFLE1BQU1PLElBQUksR0FBRzRGLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6QyxNQUFNeUIsVUFBVSxHQUFHekIsVUFBVSxHQUFHLHVCQUF1QixHQUFHLEVBQUU7WUFDNUQsTUFBTXZFLEtBQUssR0FBRztjQUFFZCxPQUFPLEVBQUUsQ0FBQ3FGLFVBQVUsR0FBR1ksVUFBVSxHQUFHeEM7WUFBUyxDQUFFO1lBRS9ELE1BQU1zRCxXQUFXLEdBQUlDLENBQXVCLElBQUk7Y0FDL0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO2NBQ2xCLE1BQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxhQUFhLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Y0FDbERmLFFBQVEsQ0FBQ2dCLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFSCxJQUFJLENBQUM7WUFDaEQsQ0FBQztZQUVELE1BQU1JLGFBQWEsR0FBSU4sQ0FBc0IsSUFBSTtjQUNoRCxJQUFJOUIsU0FBUyxJQUFJOEIsQ0FBQyxDQUFDTyxHQUFHLEtBQUssT0FBTyxFQUFFO2dCQUNuQ1AsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Z0JBQ2xCO2dCQUNBOztZQUVGLENBQUM7WUFFRCxNQUFNTyxNQUFNLEdBQUcsTUFBT0MsS0FBdUIsSUFBSTtjQUNoREEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkIsTUFBTTFDLE9BQU8sR0FBR3lDLEtBQUssQ0FBQ0UsYUFBYSxDQUFDQyxXQUFXLENBQUNDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDO2NBRTVFdkMsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUVwQixJQUFJTixPQUFPLEtBQUtRLFFBQVEsRUFBRTtjQUUxQixNQUFNcEMsSUFBSSxHQUFHO2dCQUNaZ0MsSUFBSTtnQkFDSlEsS0FBSyxFQUFFWjtlQUNQO2NBQ0QsTUFBTThDLEtBQUssR0FBaUI7Z0JBQzNCOUYsTUFBTSxFQUFFb0IsSUFBSTtnQkFDWnVFLGFBQWEsRUFBRXZFO2VBQ2Y7Y0FDRHFDLFdBQVcsQ0FBQ1QsT0FBTyxDQUFDO2NBQ3BCLE1BQU1GLE1BQU0sQ0FBQ2dELEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsT0FDQ2xKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVMsR0FBRztjQUFBLEdBQU1tQixLQUFLO2NBQUUwRyxNQUFNLEVBQUVBO1lBQU0sR0FDN0M1SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUcsT0FBTztjQUNQN0QsR0FBRyxFQUFFOEQsVUFBVTtjQUNmekcsU0FBUyxFQUFFNEgsVUFBVTtjQUNyQmlCLGVBQWUsRUFBRTFDLFVBQVU7Y0FDM0IyQyw4QkFBOEIsRUFBRSxJQUFJO2NBQ3BDQyxPQUFPLEVBQUU1QyxVQUFVLEdBQUcwQixXQUFXLEdBQUd0RCxTQUFTO2NBQzdDeUUsU0FBUyxFQUFFN0MsVUFBVSxHQUFHaUMsYUFBYSxHQUFHN0Q7WUFBUyxHQUVoRDRCLFVBQVUsR0FBR08sS0FBSyxHQUFHaEgsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFNBQUEsQ0FBQXVELFFBQVE7Y0FBQ25ELE9BQU8sRUFBRVk7WUFBSyxFQUFJLENBQ3pDLEVBQ1ZoSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDN0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNJLE1BQUEsQ0FBQStJLElBQUk7Y0FBQzNJLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2YsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIQSxJQUFBYixNQUFBLEdBQUFDLE9BQUE7VUFHQSxJQUFBd0osS0FBQSxHQUFBeEosT0FBQTtVQUNPO1VBQVUsU0FBVWtILFFBQVFBLENBQUM7WUFDbkNqQixNQUFNO1lBQ041RixTQUFTO1lBQ1Q4RixPQUFPO1lBQ1BJLElBQUk7WUFDSkQsUUFBUTtZQUNSSyxRQUFRO1lBQ1JDLFdBQVc7WUFDWE87VUFBVyxDQUNjO1lBQ3pCLE1BQU1uRSxHQUFHLEdBQUdqRCxNQUFBLENBQUFJLE9BQUssQ0FBQzhDLE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBRTlDO1lBRUEsTUFBTW1FLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCRCxXQUFXLENBQUMsQ0FBQ2IsUUFBUSxDQUFDO2NBQ3RCLElBQUksQ0FBQ0EsUUFBUSxFQUFFO2dCQUNkZSxVQUFVLENBQUMsTUFBSztrQkFDZixNQUFNQyxFQUFFLEdBQUd0RSxHQUFHLENBQUNJLE9BQU87a0JBRXRCLElBQUlrRSxFQUFFLEVBQUU7b0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtvQkFDcENGLEtBQUssQ0FBQ0csa0JBQWtCLENBQUNKLEVBQUUsQ0FBQztvQkFDNUJDLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBRXZCLE1BQU1DLFNBQVMsR0FBRzVDLFVBQVUsQ0FBQzZDLFlBQVksRUFBRTtvQkFFM0MsSUFBSUQsU0FBUyxFQUFFO3NCQUNkQSxTQUFTLENBQUNFLGVBQWUsRUFBRTtzQkFDM0JGLFNBQVMsQ0FBQ0csUUFBUSxDQUFDUixLQUFLLENBQUM7O29CQUcxQkQsRUFBRSxDQUFDVSxLQUFLLEVBQUU7O2dCQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBRVAsQ0FBQztZQUVELE1BQU1sSCxHQUFHLEdBQUcsc0RBQXNEVCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXBHLE1BQU0sQ0FBQzBHLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdqSCxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQ1AsT0FBTyxDQUFDO1lBQ2pELE1BQU1sRSxLQUFLLEdBQUcsRUFBRTtZQUVoQmxDLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEJtRSxVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNb0MsUUFBUSxHQUFHekcsR0FBRyxDQUFDSSxPQUFPLEVBQUVzRyxhQUFhLENBQUMsVUFBVSxDQUFDO2dCQUN2RCxJQUFJRCxRQUFRLEVBQUU7a0JBQ2JBLFFBQVEsQ0FBQ3pCLEtBQUssRUFBRTtrQkFDaEIsTUFBTTJCLE1BQU0sR0FBR0YsUUFBUSxDQUFDMUMsS0FBSyxDQUFDNEMsTUFBTTtrQkFDcENGLFFBQVEsQ0FBQ0csaUJBQWlCLENBQUNELE1BQU0sRUFBRUEsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Y0FFOUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNaEIsTUFBTSxHQUFHLE1BQU9DLEtBQXVCLElBQUk7Y0FDaERBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0ExQixXQUFXLENBQUMsS0FBSyxDQUFDO2NBRWxCLElBQUlKLEtBQUssS0FBS0osUUFBUSxFQUFFO2NBRXhCLE1BQU1wQyxJQUFJLEdBQUc7Z0JBQUVnQyxJQUFJO2dCQUFFUTtjQUFLLENBQUU7Y0FDNUIsTUFBTWtDLEtBQUssR0FBaUI7Z0JBQzNCOUYsTUFBTSxFQUFFb0IsSUFBSTtnQkFDWnVFLGFBQWEsRUFBRXZFO2VBQ2Y7Y0FFRHFDLFdBQVcsQ0FBQ0csS0FBSyxDQUFDO2NBQ2xCLE1BQU1kLE1BQU0sQ0FBQ2dELEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsTUFBTVksUUFBUSxHQUFJMUIsQ0FBeUMsSUFBSTtjQUM5RG5CLFFBQVEsQ0FBQ21CLENBQUMsQ0FBQ2hGLE1BQU0sQ0FBQzRELEtBQUssQ0FBQztZQUN6QixDQUFDO1lBQ0QsT0FDQ2hILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUs0QyxHQUFHLEVBQUVBLEdBQUc7Y0FBRTNDLFNBQVMsRUFBRVMsR0FBRztjQUFBLEdBQU1tQixLQUFLO2NBQUUwRyxNQUFNLEVBQUVBO1lBQU0sR0FDdkQ1SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0osS0FBQSxDQUFBdEMsUUFBVztjQUFDWCxJQUFJLEVBQUVBLElBQUk7Y0FBRXNELFFBQVEsRUFBRUEsUUFBUTtjQUFFOUMsS0FBSyxFQUFFQTtZQUFLLEVBQUksQ0FFeEQ7VUFFUjs7Ozs7Ozs7Ozs7VUNyRkE7O1VBRUErQyxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBakQsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFoSCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVaUgsaUJBQWlCQSxDQUFDZCxPQUFPLEVBQUVDLFdBQVcsRUFBRUksVUFBVSxHQUFHLEtBQUs7WUFDekUsTUFBTXhELEdBQUcsR0FBR2pELE1BQUEsQ0FBQUksT0FBSyxDQUFDOEMsTUFBTSxDQUFpQixJQUFJLENBQUM7WUFDOUMsTUFBTSxDQUFDZ0gsU0FBUyxDQUFDLEdBQUdsSyxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekMsTUFBTSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHakgsTUFBQSxDQUFBSSxPQUFLLENBQUN1RyxRQUFRLENBQXVDO2NBQUV3RCxNQUFNLEVBQUUsS0FBSztjQUFFL0QsT0FBTyxFQUFFO1lBQUUsQ0FBRSxDQUFDO1lBQzlHLE1BQU1nRSxZQUFZLEdBQUdwRCxLQUFLLEVBQUVtRCxNQUFNLEdBQUduRCxLQUFLLENBQUNaLE9BQU8sR0FBR0EsT0FBTztZQUU1RCxJQUFJaUUsTUFBTSxHQUFHNUQsVUFBVSxHQUNwQjJELFlBQVksR0FDWEEsWUFBWSxHQUNaLEVBQUUsR0FDSEEsWUFBWSxLQUFLLEVBQUUsSUFBSUEsWUFBWSxLQUFLdkYsU0FBUyxHQUNqRHdCLFdBQVcsR0FDWCtELFlBQVksSUFBSS9ELFdBQVcsSUFBSSxFQUFFO1lBRXBDLE9BQU87Y0FBRXBELEdBQUc7Y0FBRWlILFNBQVM7Y0FBRWxELEtBQUssRUFBRXFELE1BQU07Y0FBRXBEO1lBQVEsQ0FBRTtVQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQk8sTUFBTXFELFVBQVUsR0FBQUwsT0FBQSxDQUFBSyxVQUFBLEdBQUc7WUFDekJDLFNBQVMsRUFBRTtjQUNWaEksT0FBTyxFQUFFO2dCQUFFaUksQ0FBQyxFQUFFLE1BQU07Z0JBQUVwSSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDRCxPQUFPLEVBQUU7Z0JBQUVxSSxDQUFDLEVBQUUsQ0FBQztnQkFBRXBJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURFLElBQUksRUFBRTtnQkFBRWdJLENBQUMsRUFBRSxLQUFLO2dCQUFFcEksT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDM0Q7WUFFRGxDLE9BQU8sRUFBRTtjQUNSbUMsT0FBTyxFQUFFO2dCQUFFSCxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ3ZCRCxPQUFPLEVBQUU7Z0JBQUVxSSxDQUFDLEVBQUUsQ0FBQztnQkFBRXBJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURFLElBQUksRUFBRTtnQkFBRWdJLENBQUMsRUFBRSxLQUFLO2dCQUFFcEksT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7YUFDM0Q7WUFDRG1JLG1CQUFtQixFQUFFO2NBQ3BCbEksT0FBTyxFQUFFO2dCQUFFaUksQ0FBQyxFQUFFLE1BQU07Z0JBQUVwSSxPQUFPLEVBQUU7Y0FBQyxDQUFFO2NBQ2xDRCxPQUFPLEVBQUU7Z0JBQUVxSSxDQUFDLEVBQUUsQ0FBQztnQkFBRXBJLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFLENBQUU7Y0FDNURFLElBQUksRUFBRTtnQkFBRWtJLENBQUMsRUFBRSxLQUFLO2dCQUFFdEksT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUU7O1dBRTVEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCRCxJQUFBdEMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBLLE1BQUEsR0FBQTFLLE9BQUE7VUFFQSxJQUFBMkssZUFBQSxHQUFBM0ssT0FBQTtVQUdPLFdBSlA7O1VBSWlCLFNBQVU0SyxVQUFVQSxDQUFDO1lBQ3JDQyxLQUFLO1lBQ0xDLFdBQVc7WUFDWEMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVHZLLElBQUksR0FBRztVQUFZLENBQ1E7WUFDM0IsSUFBSSxDQUFDcUssSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUV0QixPQUNDaEwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NLLE1BQUEsQ0FBQVEsS0FBSztjQUFDSCxJQUFJO2NBQUMxSyxTQUFTLEVBQUMseUJBQXlCO2NBQUMySyxPQUFPLEVBQUVBO1lBQU8sR0FDL0RqTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUssZUFBQSxDQUFBUSxrQkFBa0I7Y0FDbEJDLFNBQVMsRUFBRUosT0FBTztjQUNsQkEsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCSyxRQUFRLEVBQUVMLE9BQU87Y0FDakJDLFNBQVMsRUFBRUEsU0FBUztjQUNwQnZLLElBQUksRUFBRUEsSUFBSTtjQUNWb0ssV0FBVyxFQUFFQSxXQUFXO2NBQ3hCRCxLQUFLLEVBQUVBO1lBQUssRUFDWCxDQUNLO1VBRVY7VUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRCxJQUFBOUssTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFFTztVQUFVLFNBQVVzTCxVQUFVQSxDQUFDO1lBQUVUO1VBQUssQ0FBaUQ7WUFDN0YsSUFBSSxDQUFDQSxLQUFLLEVBQUVVLFFBQVEsRUFBRTtjQUNyQixPQUFPeEwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksTUFBQSxDQUFBTyxPQUFPO2dCQUFDSCxJQUFJLEVBQUMsUUFBUTtnQkFBQ1AsU0FBUyxFQUFDO2NBQVcsRUFBRzs7WUFFdkQsT0FBT04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQUcsS0FBSztjQUFDakUsR0FBRyxFQUFFMkssS0FBSyxDQUFDVSxRQUFRO2NBQUVsTCxTQUFTLEVBQUM7WUFBUSxFQUFHO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFOLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF3TCxjQUFBLEdBQUF4TCxPQUFBO1VBQ0EsSUFBQXlMLFNBQUEsR0FBQXpMLE9BQUE7VUFDQSxJQUFBNEIsYUFBQSxHQUFBNUIsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQTBMLGlCQUFBLEdBQUExTCxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBMkwsV0FBQSxHQUFBM0wsT0FBQTtVQUVBLElBQUE0TCxRQUFBLEdBQUE1TCxPQUFBO1VBRU87VUFBVSxTQUFVbUwsa0JBQWtCQSxDQUFDO1lBQzdDSCxPQUFPO1lBQ1BGLFdBQVc7WUFDWEQsS0FBSztZQUNMSSxTQUFTO1lBQ1RJLFFBQVE7WUFDUjNLLElBQUksR0FBRyxZQUFZO1lBQ25CMEs7VUFBUyxDQUMwQjtZQUNuQyxNQUFNLENBQUNTLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUcvTCxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDcUYsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2pNLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxFQUFFO1lBRTFDLE1BQU11RixXQUFXLEdBQUduQixXQUFXLENBQUNvQixPQUFPO1lBQ3ZDLE1BQU1DLEtBQUssR0FBR3JCLFdBQVcsQ0FBQ3NCLGNBQWM7WUFDeEMsTUFBTUMsTUFBTSxHQUFHdkIsV0FBVyxDQUFDdUIsTUFBTTtZQUNqQ2hCLFFBQVEsR0FBR0EsUUFBUSxJQUFJTCxPQUFPO1lBQzlCO1lBQ0EsTUFBTXNCLFNBQVMsR0FBRyxNQUFNMUQsS0FBSyxJQUFHO2NBQy9CLElBQUk7Z0JBQ0hBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUV2QmlELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1TLE1BQU0sR0FBRyxNQUFNdEIsU0FBUyxFQUFFO2dCQUVoQyxJQUFJLENBQUNzQixNQUFNLENBQUNDLE1BQU0sRUFBRTtrQkFDbkIsSUFBSUQsTUFBTSxDQUFDUixLQUFLLENBQUNVLElBQUksS0FBSyxFQUFFLEVBQUU7b0JBQzdCO29CQUNBckIsU0FBUyxFQUFFOztrQkFFWjtrQkFFQSxNQUFNLElBQUlzQixLQUFLLENBQUNMLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7Z0JBRXRDLElBQUlqQixTQUFTLEVBQUVBLFNBQVMsRUFBRTtlQUMxQixDQUFDLE9BQU9qRCxDQUFDLEVBQUU7Z0JBQ1g2RCxRQUFRLENBQUNHLEtBQUssQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTLENBQUM7ZUFDaEMsU0FBUztnQkFDVGQsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1lLFFBQVEsR0FBR2pCLFFBQUEsQ0FBQWtCLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxFQUFFLEtBQUtuQyxLQUFLLEVBQUVtQyxFQUFFLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDdEUsTUFBTUMsVUFBVSxHQUFHdk0sSUFBSSxLQUFLLGFBQWEsR0FBR3lMLEtBQUssQ0FBQ2UsTUFBTSxDQUFDQyxXQUFXLEdBQUdoQixLQUFLLENBQUNlLE1BQU0sQ0FBQ0wsUUFBUSxDQUFDO1lBQzdGLE1BQU1PLFFBQVEsR0FBRzFNLElBQUksS0FBSyxhQUFhLEdBQUd5TCxLQUFLLENBQUNpQixRQUFRLENBQUNELFdBQVcsR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQVEsQ0FBQ1AsUUFBUSxDQUFDO1lBQy9GLE9BQ0M5TSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsYUFBQSxDQUFBSSxNQUFNLENBQUNxTCxHQUFHO2NBQUEsR0FBSzFCLFdBQUEsQ0FBQXRCLFVBQVUsQ0FBQ2xLLE9BQU87Y0FBRUUsU0FBUyxFQUFDO1lBQTRDLEdBQ3pGTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsYUFBSytMLEtBQUssQ0FBQ3hMLEtBQUssQ0FBTSxFQUN0QlosTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksV0FBQSxDQUFBc00sV0FBVztjQUFDQyxNQUFNLEVBQUU7Z0JBQUVDLFdBQVcsRUFBRTNDLEtBQUssRUFBRXRFO2NBQUk7WUFBRSxHQUFHNkcsUUFBUSxDQUFlLENBQ25FLEVBQ1RyTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0wsY0FBQSxDQUFBaUMsYUFBYTtjQUFDMUIsS0FBSyxFQUFFQSxLQUFLO2NBQUV6RyxPQUFPLEVBQUM7WUFBUyxFQUFHLEVBQ2hEdUYsS0FBSyxJQUNMOUssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUF1TixRQUFBLFFBQ0MzTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDN0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RCxNQUFBLENBQUFzSCxVQUFVO2NBQUNULEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzVCOUssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVksR0FDMUJOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU95SyxLQUFLLENBQUN0RSxJQUFJLENBQVEsRUFDekJ4RyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxlQUFPK0wsS0FBSyxDQUFDd0IsZ0JBQWdCLENBQVEsQ0FDaEMsQ0FDRCxDQUVQLEVBRUQ1TixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBb0IsR0FDdENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNZLFdBQUEsQ0FBQU8sTUFBTTtjQUFDK0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ3NJLFFBQVE7Y0FBQ3pNLE9BQU8sRUFBRWtLO1lBQVEsR0FDbERZLFdBQVcsQ0FBQzRCLE1BQU0sQ0FDWCxFQUNUOU4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FMLFNBQUEsQ0FBQXZLLFFBQVE7Y0FBQ29FLE9BQU8sRUFBQyxTQUFTO2NBQUNuRSxPQUFPLEVBQUVtTDtZQUFTLEdBQzVDTCxXQUFXLENBQUM2QixRQUFRLENBQ1gsQ0FDRixFQUNWL04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsR0FDM0JOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFZLEdBQUU0TSxVQUFVLENBQVEsQ0FDM0MsRUFDTmxOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNzTCxpQkFBQSxDQUFBcUMsZ0JBQWdCO2NBQUNsQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRW5ELEdBQUcsRUFBQztZQUFZLEVBQUcsQ0FDN0M7VUFFZjs7Ozs7Ozs7Ozs7VUx4RkE7O1VBRUFvQixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBakQsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVTUpBLElBQUFoSCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ08sTUFBQSxHQUFBaE8sT0FBQTtVQVVPO1VBQVcsU0FBVWlPLFNBQVNBLENBQUM7WUFBRTVGLElBQUk7WUFBRWhJLFNBQVM7WUFBRTZOLFdBQVc7WUFBRXJOLFFBQVE7WUFBRSxHQUFHUTtVQUFLLENBQXdCO1lBQy9HLE1BQU1QLEdBQUcsR0FBRywyQkFBMkJULFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFekUsT0FDQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzROLE1BQUEsQ0FBQUcsS0FBSztjQUFDOU4sU0FBUyxFQUFFUyxHQUFHO2NBQUEsR0FBTU87WUFBSyxHQUMvQnRCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtpSSxJQUFJLENBQU0sRUFDZnRJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUdDLFNBQVMsRUFBQztZQUFJLEdBQUU2TixXQUFXLENBQUssRUFDbENyTixRQUFRLENBQ0Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQWQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFlTztVQUFVLFNBQVVtRixXQUFXQSxDQUFDO1lBQ3RDakYsR0FBRztZQUNIa08sS0FBSztZQUNMbEssR0FBRyxHQUFHLEVBQUU7WUFDUm1LLE1BQU0sR0FBRyxVQUFVO1lBQ25CM04sSUFBSTtZQUNKRyxRQUFRO1lBQ1J5TixJQUFJLEdBQUcsSUFBSTtZQUNYL04sT0FBTztZQUNQRixTQUFTO1lBQ1QsR0FBR2dCO1VBQUssQ0FDVztZQUNuQixJQUFJUCxHQUFHLEdBQUcsZ0JBQWdCVCxTQUFTLElBQUksRUFBRSxJQUFJZ08sTUFBTSxFQUFFO1lBRXJELElBQUlELEtBQUssRUFBRXROLEdBQUcsSUFBSSxTQUFTc04sS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQ2xPLEdBQUcsSUFBSUEsR0FBRyxLQUFLLEVBQUUsRUFBRTtjQUN2QkEsR0FBRyxHQUFHLDJCQUEyQm1PLE1BQU0sSUFBSTNOLElBQUksR0FBRyxHQUFHQSxJQUFJLEdBQUcsR0FBRyxFQUFFLFVBQVU7O1lBRzVFLElBQUlILE9BQU8sRUFBRSxPQUFPUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUUsR0FBR1MsR0FBRztZQUF3QixFQUFJO1lBRXRFLE9BQ0NmLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM0RCxNQUFBLENBQUFHLEtBQUs7Y0FBQSxHQUFLOUMsS0FBSztjQUFFbkIsR0FBRyxFQUFFLEdBQUdBLEdBQUcsU0FBU29PLElBQUksRUFBRTtjQUFFcEssR0FBRyxFQUFFQSxHQUFHO2NBQUU3RCxTQUFTLEVBQUVTO1lBQUcsR0FDcEVELFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdU8sTUFBQSxHQUFBdk8sT0FBQTtVQUVPO1VBQVcsU0FBVXlOLGFBQWFBLENBQUM7WUFDekMxQixLQUFLO1lBQ0x6RyxPQUFPLEdBQUc7VUFBTyxDQUlqQjtZQUNBLElBQUksQ0FBQ3lHLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsT0FBT2hNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNtTyxNQUFBLENBQUFDLEtBQUs7Y0FBQzlOLElBQUksRUFBRTRFO1lBQU8sR0FBR3lHLEtBQUssQ0FBUztVQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBdkwsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQWdCLFdBQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFFQTs7Ozs7VUFLQSxNQUFNeU8saUJBQWlCLEdBQUdBLENBQUM7WUFBRWpLLElBQUk7WUFBRWtLO1VBQUssQ0FBRSxLQUFJO1lBQzdDLE1BQU1DLG1CQUFtQixHQUFHQSxDQUFDO2NBQUVuQztZQUFNLENBQUUsS0FBSTtjQUMxQyxRQUFRQSxNQUFNO2dCQUNiLEtBQUssTUFBTTtrQkFDVixPQUFPek0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7b0JBQUtDLFNBQVMsRUFBQztrQkFBa0MsR0FBRXFPLEtBQUssQ0FBTztnQkFFdkUsS0FBSyxTQUFTO2tCQUNiLE9BQU8zTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtvQkFBS0MsU0FBUyxFQUFDO2tCQUFxQyxHQUFFcU8sS0FBSyxDQUFPO2dCQUUxRSxLQUFLLFNBQVM7a0JBQ2IsT0FBTzNPLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO29CQUFLQyxTQUFTLEVBQUM7a0JBQXFDLEdBQUVxTyxLQUFLLENBQU87Z0JBRTFFO2tCQUNDLE9BQU8zTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUErSSxJQUFJO29CQUFDbEosU0FBUyxFQUFDLElBQUk7b0JBQUNPLElBQUksRUFBRTtrQkFBUyxFQUFJOztZQUVsRCxDQUFDO1lBRUQsT0FDQ2IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1ksV0FBQSxDQUFBMkQsSUFBSTtjQUFDdEUsU0FBUyxFQUFDLFVBQVU7Y0FBQ3lFLElBQUksRUFBRU4sSUFBSSxDQUFDN0I7WUFBRyxHQUN4QzVDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN1TyxtQkFBbUI7Y0FBQ25DLE1BQU0sRUFBRWhJLElBQUksQ0FBQ2dJO1lBQU0sRUFBSSxDQUN0QztVQUVULENBQUM7VUFFTTtVQUFXLFNBQVVvQyxhQUFhQSxDQUFDO1lBQUVDLElBQUk7WUFBRXhPO1VBQVMsQ0FBRTtZQUM1RCxNQUFNUyxHQUFHLEdBQUcsNkJBQTZCVCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNFLE1BQU15TyxhQUFhLEdBQUdELElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUN2SyxJQUFJLEVBQUVrSyxLQUFLLEtBQUszTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcU8saUJBQWlCO2NBQUNqSyxJQUFJLEVBQUVBLElBQUk7Y0FBRWtFLEdBQUcsRUFBRWdHLEtBQUs7Y0FBRUEsS0FBSyxFQUFFQSxLQUFLLEdBQUc7WUFBQyxFQUFJLENBQUM7WUFDaEgsT0FBTzNPLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVM7WUFBRyxHQUFHZ08sYUFBYSxDQUFPO1VBQ2xEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQSxJQUFBL08sTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVZ1AsV0FBV0EsQ0FBQztZQUFFck87VUFBSyxDQUFFO1lBQy9DLE9BQ0NaLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUE4QixHQUNoRE4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQTRCLEdBQUVNLEtBQUssQ0FBTSxDQUM5QztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUFzTyxjQUFBLEdBQUFqUCxPQUFBO1VBQ0EsSUFBQWtQLFlBQUEsR0FBQWxQLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVW1QLFVBQVVBLENBQUM7WUFBRTlPLFNBQVM7WUFBRVEsUUFBUTtZQUFFdU8sS0FBSztZQUFFbEwsR0FBRztZQUFFTCxNQUFNLEdBQUcsTUFBTTtZQUFFbEQsS0FBSztZQUFFa087VUFBSSxDQUFFO1lBQ3RHLE1BQU0vTixHQUFHLEdBQUcsaUNBQWlDK0MsTUFBTSxHQUFHeEQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RixPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDbEJmLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFtQixHQUNwQ00sS0FBSyxJQUFJWixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOE8sWUFBQSxDQUFBRixXQUFXO2NBQUNyTyxLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUN2Q1osTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXNCLEdBQUVRLFFBQVEsQ0FBVyxDQUNyRCxFQUNUZ08sSUFBSSxJQUFJOU8sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzZPLGNBQUEsQ0FBQUwsYUFBYTtjQUFDQyxJQUFJLEVBQUVBLElBQUk7Y0FBRXhPLFNBQVMsRUFBQztZQUFzQixFQUFHLEVBQ3RFK08sS0FBSyxJQUFJclAsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQUcsS0FBSztjQUFDakUsR0FBRyxFQUFFa1AsS0FBSztjQUFFbEwsR0FBRyxFQUFFQSxHQUFHO2NBQUU3RCxTQUFTLEVBQUM7WUFBb0IsRUFBRyxDQUNuRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pCQSxJQUFBZ1AsV0FBQSxHQUFBclAsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVUsU0FBVXNQLFdBQVdBLENBQUNqTyxLQUFLO1lBQzNDLE1BQU00SCxLQUFLLEdBQUc7Y0FDYnNHLGNBQWMsRUFBRSxHQUFHO2NBQ25CQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztjQUNsRkMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztjQUNwQkMsU0FBUyxFQUFFO2FBQ1g7WUFDRDNQLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTXlNLFVBQVUsR0FBRyxJQUFJTixXQUFBLENBQUFsUCxPQUFVLEVBQUU7Y0FDbkN3UCxVQUFVLENBQUNDLFdBQVcsQ0FBQztnQkFBRSxHQUFHM0csS0FBSztnQkFBRSxHQUFHNUg7Y0FBSyxDQUFFLENBQUM7WUFDL0MsQ0FBQyxFQUFFLEVBQUUsQ0FBQztVQUNQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBLElBQUF3TyxLQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQThQLE1BQUEsR0FBQTlQLE9BQUE7VUFFTztVQUFVLFNBQVUrUCxnQkFBZ0JBLENBQUNDLFNBQVMsRUFBRUMsUUFBUTtZQUM5RCxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdOLEtBQUssQ0FBQ25KLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDL0MsTUFBTSxDQUFDeUYsS0FBSyxFQUFFaUUsUUFBUSxDQUFDLEdBQUdQLEtBQUssQ0FBQ25KLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUNtSixLQUFLLENBQUMzTSxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNbU4sVUFBVSxHQUFHLElBQUlQLE1BQUEsQ0FBQVEsWUFBWSxDQUFDTixTQUFTLENBQUM7Y0FDOUMsTUFBTU8sWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUl4SixLQUFLLEdBQUdzSixVQUFVLENBQUN0SixLQUFLO2dCQUM1QnFKLFFBQVEsQ0FBQ3JKLEtBQUssQ0FBQztnQkFDZm9KLFFBQVEsQ0FBQ0UsVUFBVSxDQUFDSCxLQUFLLENBQUM7Z0JBQzFCLElBQUlHLFVBQVUsQ0FBQ0gsS0FBSyxFQUFFRCxRQUFRLENBQUNsSixLQUFLLENBQUM7Y0FDdEMsQ0FBQztjQUNEc0osVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWEYsVUFBVSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7Y0FDdEMsQ0FBQztZQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixNQUFNRSxPQUFPLEdBQUdQLEtBQUssSUFBSSxDQUFDLENBQUMvRCxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ3NFLE9BQU8sRUFBRXRFLEtBQUssQ0FBQztVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXBNLE1BQUEsR0FBQUMsT0FBQTtVQUNPO1VBQVUsU0FBVTBRLFNBQVNBLENBQUE7WUFDbkMsT0FDQzNRLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsRUFBTyxFQUNuQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsRUFBTyxFQUNwQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVEsRUFBTyxFQUM5Qk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsRUFBTyxFQUNuQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsRUFBTyxFQUNwQ04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQVMsRUFBTyxFQUMvQk4sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWEsRUFBTyxDQUM5QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFOLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyUSxRQUFBLEdBQUEzUSxPQUFBO1VBQ087VUFBWSxTQUFVNFEsYUFBYUEsQ0FBQTtZQUN6QyxPQUNDN1EsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXVCLEdBQ3JDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdVEsUUFBQSxDQUFBRSxPQUFPO2NBQUNDLE1BQU07Y0FBQ3BRLElBQUksRUFBQztZQUFTLEVBQUcsQ0FDNUI7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSQSxJQUFBWCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK1EsT0FBQSxHQUFBL1EsT0FBQTtVQU9PO1VBQVcsU0FBVWdSLFVBQVVBLENBQUM7WUFBRW5RLFFBQVE7WUFBRVIsU0FBUztZQUFFd0w7VUFBUSxDQUFVO1lBQy9FLElBQUksQ0FBQ0EsUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUUxQixNQUFNL0ssR0FBRyxHQUFHLHdCQUF3QlQsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN0RSxPQUNDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUVTO1lBQUcsR0FDakIrSyxRQUFRLElBQ1I5TCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBMkIsR0FDekNOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxPQUFBLENBQUFMLFNBQVMsT0FBRyxFQUNaN1AsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQVNPO1VBQVcsU0FBVWlSLGFBQWFBLENBQUM7WUFDekNwUSxRQUFRO1lBQ1JSLFNBQVM7WUFDVHdMLFFBQVE7WUFDUnFGLE1BQU0sR0FBRyxLQUFLO1lBQ2Q1QyxJQUFJLEdBQUcxSjtVQUFTLENBQ1M7WUFDekIsTUFBTXVNLEtBQUssR0FBRztjQUNiQyxFQUFFLEVBQUUsY0FBYztjQUNsQmpSLE9BQU8sRUFBRTthQUNUO1lBQ0QsTUFBTWtSLE9BQU8sR0FBR0YsS0FBSyxDQUFDN0MsSUFBSSxDQUFDLElBQUk2QyxLQUFLLENBQUNoUixPQUFPO1lBQzVDLElBQUlXLEdBQUcsR0FBRyxtQkFBbUJ1USxPQUFPLEdBQUdoUixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3pFLElBQUk2USxNQUFNLEVBQUVwUSxHQUFHLElBQUksd0JBQXdCO1lBQzNDLE9BQ0NmLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVM7WUFBRyxHQUNqQkQsUUFBUSxFQUNSZ0wsUUFBUSxJQUNSOUwsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTJCLEdBQ3pDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxXQUFBLENBQUE2UCxPQUFPO2NBQUNDLE1BQU0sRUFBRSxJQUFJO2NBQUV4QyxJQUFJLEVBQUM7WUFBSSxFQUFHLENBRXBDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXZPLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUErUSxPQUFBLEdBQUEvUSxPQUFBO1VBT087VUFBVyxTQUFVK04sZ0JBQWdCQSxDQUFDO1lBQUVsTixRQUFRO1lBQUVSLFNBQVM7WUFBRXdMO1VBQVEsQ0FBMEI7WUFDckcsSUFBSSxDQUFDQSxRQUFRLEVBQUUsT0FBTyxJQUFJO1lBQzFCLE1BQU0vSyxHQUFHLEdBQUcsb0JBQW9CVCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBRVM7WUFBRyxHQUNqQitLLFFBQVEsSUFDUjlMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEyQixHQUN6Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsY0FDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJRLE9BQUEsQ0FBQUwsU0FBUyxPQUFHLEVBQ1o3UCxRQUFRLENBQ0osQ0FFUCxDQUNJO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc1IsYUFBQSxHQUFBdFIsT0FBQTtVQUNBLElBQUF1UixRQUFBLEdBQUF2UixPQUFBO1VBV087VUFBVSxTQUFVd1IsU0FBU0EsQ0FBQztZQUFFalIsT0FBTztZQUFFSSxLQUFLO1lBQUVFLFFBQVE7WUFBRWlFLElBQUk7WUFBRWhELEVBQUUsR0FBRztVQUFJLENBQVU7WUFDekYsTUFBTStFLE9BQU8sR0FBRy9FLEVBQXVCO1lBRXZDLElBQUl2QixPQUFPLEVBQUU7Y0FDWixPQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUUMsU0FBUyxFQUFDO2NBQXFCLEdBQ3RDTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa1IsYUFBQSxDQUFBRyxZQUFZO2dCQUFDQyxNQUFNLEVBQUMsS0FBSztnQkFBQ2xQLEtBQUssRUFBQztjQUFPLEVBQUcsRUFDMUMzQixRQUFRLENBQ0Q7O1lBR1gsSUFBSW9CLEtBQUssR0FBRztjQUFFZCxPQUFPLEVBQUV5RCxTQUFTO2NBQUV2RSxTQUFTLEVBQUV1RTtZQUFTLENBQUU7WUFDeEQsSUFBSUUsSUFBSSxFQUFFO2NBQ1Q3QyxLQUFLLEdBQUc7Z0JBQUVkLE9BQU8sRUFBRUEsQ0FBQSxLQUFNb1EsUUFBQSxDQUFBSSxPQUFPLENBQUNDLFNBQVMsQ0FBQzlNLElBQUksQ0FBQztnQkFBRXpFLFNBQVMsRUFBRTtjQUFVLENBQUU7O1lBRzFFLE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUFxQixHQUN0Q04sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lHLE9BQU87Y0FBQSxHQUFLNUU7WUFBSyxHQUFHdEIsS0FBSyxDQUFXLEVBQ3BDRSxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVWdSLFlBQVlBLENBQUM7WUFBRWhSLFFBQVE7WUFBRWlFO1VBQUksQ0FBRTtZQUN6RCxJQUFJN0MsS0FBSyxHQUFHO2NBQUVkLE9BQU8sRUFBRXlEO1lBQVMsQ0FBRTtZQUVsQyxJQUFJRSxJQUFJLEVBQUU7Y0FDVDdDLEtBQUssR0FBRztnQkFBRWQsT0FBTyxFQUFFQSxDQUFBLEtBQU1vUSxRQUFBLENBQUFJLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDOU0sSUFBSTtjQUFDLENBQUU7O1lBR25ELE9BQ0MvRSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUMsWUFBWTtjQUFBLEdBQUs0QjtZQUFLLEdBQ3BDcEIsUUFBUSxDQUNIO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBZ0IsV0FBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUVPO1VBQVUsU0FBVThSLGFBQWFBLENBQUM7WUFBRWpSLFFBQVE7WUFBRU0sT0FBTztZQUFFc0QsUUFBUTtZQUFFLEdBQUdwRDtVQUFLLENBQUU7WUFDakYsTUFBTSxDQUFDMFEsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2pTLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxNQUFNcEYsV0FBVyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM5QjBRLGFBQWEsQ0FBQyxJQUFJLENBQUM7Y0FDbkIsTUFBTTdRLE9BQU8sRUFBRTtjQUNmNlEsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBRUQsT0FDQ2pTLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNZLFdBQUEsQ0FBQU8sTUFBTTtjQUFBLEdBQUtGLEtBQUs7Y0FBRUYsT0FBTyxFQUFFRyxXQUFXO2NBQUVtRCxRQUFRLEVBQUVBLFFBQVEsSUFBSXNOO1lBQVUsR0FDdkVsUixRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVW9SLGlCQUFpQkEsQ0FBQztZQUFFcFIsUUFBUTtZQUFFNEQsUUFBUTtZQUFFcEUsU0FBUztZQUFFYyxPQUFPO1lBQUUsR0FBR0U7VUFBSyxDQUFFO1lBQ2hHLE1BQU0sQ0FBQzBRLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdqUyxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTXBGLFdBQVcsR0FBRyxNQUFNc0gsS0FBSyxJQUFHO2NBQ2pDQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2Qm1KLGFBQWEsQ0FBQyxJQUFJLENBQUM7Y0FDbkIsTUFBTTdRLE9BQU8sRUFBRTtjQUVma0csVUFBVSxDQUFDLE1BQUs7Z0JBQ2YySyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDUixDQUFDO1lBQ0QsSUFBSUQsVUFBVSxFQUFFO2NBQ2YsT0FDQ2hTLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2dCQUFRQyxTQUFTLEVBQUM7Y0FBeUMsR0FDMUROLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNZLFdBQUEsQ0FBQTZQLE9BQU87Z0JBQUNDLE1BQU07Z0JBQUNwUSxJQUFJLEVBQUM7Y0FBUyxFQUFHLENBQ3pCOztZQUdYLE1BQU1JLEdBQUcsR0FBR1QsU0FBUyxHQUFHLEdBQUdBLFNBQVMsaUJBQWlCLEdBQUcsZ0JBQWdCO1lBQ3hFLE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNJLE1BQUEsQ0FBQTBSLGFBQWE7Y0FBQzdSLFNBQVMsRUFBRVMsR0FBRztjQUFBLEdBQU1PLEtBQUs7Y0FBRUYsT0FBTyxFQUFFRyxXQUFXO2NBQUVtRCxRQUFRLEVBQUVBLFFBQVEsSUFBSXNOO1lBQVUsR0FDOUZsUixRQUFRLENBQ007VUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFnUCxLQUFBLEdBQUE3UCxPQUFBO1VBQ0EsSUFBQTRCLGFBQUEsR0FBQTVCLE9BQUE7VUFPTyxXQVRQOztVQVNpQixTQUFVbVMsV0FBV0EsQ0FBQztZQUFFQyxLQUFLO1lBQUV2SSxRQUFRO1lBQUUsR0FBR3dJO1VBQUksQ0FBcUI7WUFDckYsTUFBTUMsUUFBUSxHQUFHekMsS0FBSyxDQUFDNU0sTUFBTSxDQUFtQixJQUFJLENBQUM7WUFFckQsTUFBTXNQLGlCQUFpQixHQUFJM0osS0FBMEMsSUFBSTtjQUN4RSxJQUFJMEosUUFBUSxDQUFDbFAsT0FBTyxFQUFFO2dCQUNyQixNQUFNb1AsV0FBVyxHQUFHLElBQUlDLEtBQUssQ0FBQyxRQUFRLEVBQUU7a0JBQ3ZDQyxPQUFPLEVBQUUsSUFBSTtrQkFDYkMsVUFBVSxFQUFFO2lCQUNaLENBQUM7Z0JBQ0ZMLFFBQVEsQ0FBQ2xQLE9BQU8sQ0FBQ3dQLGFBQWEsQ0FBQ0osV0FBVyxDQUFDOztZQUU3QyxDQUFDO1lBRUQsT0FDQzNDLEtBQUEsQ0FBQXpQLGFBQUE7Y0FBT0MsU0FBUyxFQUFDLGNBQWM7Y0FBQ3dKLFFBQVEsRUFBRTBJO1lBQWlCLEdBQzFEMUMsS0FBQSxDQUFBelAsYUFBQSxlQUNDeVAsS0FBQSxDQUFBelAsYUFBQTtjQUFPTSxJQUFJLEVBQUMsT0FBTztjQUFDc0MsR0FBRyxFQUFFc1AsUUFBUTtjQUFFekksUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTXdJO1lBQUksRUFBSSxFQUNuRXhDLEtBQUEsQ0FBQXpQLGFBQUEsQ0FBQ3dCLGFBQUEsQ0FBQUksTUFBTSxDQUFDcUwsR0FBRztjQUNWaE4sU0FBUyxFQUFDLHNCQUFzQjtjQUNoQzZCLE9BQU8sRUFBRTtnQkFBRTJRLEtBQUssRUFBRVIsSUFBSSxDQUFDUyxPQUFPLEdBQUcsR0FBRyxHQUFHO2NBQUMsQ0FBRTtjQUMxQzFRLFVBQVUsRUFBRTtnQkFBRUMsUUFBUSxFQUFFO2NBQUc7WUFBRSxHQUU1QmdRLElBQUksQ0FBQ1MsT0FBTyxJQUFJakQsS0FBQSxDQUFBelAsYUFBQSxDQUFDd0IsYUFBQSxDQUFBSSxNQUFNLENBQUNxTCxHQUFHO2NBQUNoTixTQUFTLEVBQUMscUJBQXFCO2NBQUNvQyxNQUFNO1lBQUEsRUFBRyxDQUMxRCxDQUNQLEVBQ04yUCxLQUFLLENBQ0M7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQXZDLEtBQUEsR0FBQTdQLE9BQUE7VUFhTyxXQWRQOztVQWNpQixTQUFVK1MsVUFBVUEsQ0FBQztZQUFFbFMsUUFBUTtZQUFFa0csS0FBSztZQUFFOEM7VUFBUSxDQUFvQjtZQUNwRixPQUNDZ0csS0FBQSxDQUFBelAsYUFBQSxjQUNFeVAsS0FBSyxDQUFDbUQsUUFBUSxDQUFDakUsR0FBRyxDQUFDbE8sUUFBUSxFQUFFb1MsS0FBSyxJQUFHO2NBQ3JDO2NBQ0EsSUFBSXBELEtBQUssQ0FBQ3FELGNBQWMsQ0FBb0JELEtBQUssQ0FBQyxJQUFJLE9BQU9BLEtBQUssQ0FBQzVSLEtBQUssQ0FBQzBGLEtBQUssS0FBSyxRQUFRLEVBQUU7Z0JBQzVGO2dCQUNBLE9BQU84SSxLQUFLLENBQUNzRCxZQUFZLENBQUNGLEtBQUssRUFBRTtrQkFDaENILE9BQU8sRUFBRUcsS0FBSyxDQUFDNVIsS0FBSyxDQUFDMEYsS0FBSyxLQUFLQSxLQUFLO2tCQUNwQzhDLFFBQVEsRUFBRUEsQ0FBQSxLQUFNQSxRQUFRLENBQUNvSixLQUFLLENBQUM1UixLQUFLLENBQUMwRixLQUFLO2lCQUMxQyxDQUFDOztjQUVILE9BQU9rTSxLQUFLO1lBQ2IsQ0FBQyxDQUFDLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQWxULE1BQUEsR0FBQUMsT0FBQTtVQVVPO1VBQVUsU0FBVXlSLFlBQVlBLENBQUNwUSxLQUF5QjtZQUNoRSxPQUNDdEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FDQ0MsU0FBUyxFQUFDLGVBQWU7Y0FDekJzRCxLQUFLLEVBQUU7Z0JBQ05uQixLQUFLLEVBQUVuQixLQUFLLENBQUNtQixLQUFLLElBQUksTUFBTTtnQkFDNUJrUCxNQUFNLEVBQUVyUSxLQUFLLENBQUNxUSxNQUFNLElBQUksTUFBTTtnQkFDOUIwQixVQUFVLEVBQUUvUixLQUFLLENBQUNnUyxLQUFLLElBQUksRUFBRTtnQkFDN0JDLFlBQVksRUFBRWpTLEtBQUssQ0FBQ2tTLEtBQUssSUFBSTs7WUFDN0IsR0FFRHhULE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU11RCxLQUFLLEVBQUU7Z0JBQUU2UCxPQUFPLEVBQUVuUyxLQUFLLENBQUNvUyxhQUFhLEdBQUcsTUFBTSxHQUFHO2NBQU87WUFBRSxFQUFTLENBQ25FO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUExVCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBUSxNQUFBLEdBQUFSLE9BQUE7VUFDQSxJQUFBMFQsT0FBQSxHQUFBMVQsT0FBQTtVQUVPO1VBQVUsU0FBVTJULFdBQVdBLENBQUM7WUFBRTlIO1VBQVEsQ0FBRTtZQUNsRCxNQUFNK0gsS0FBSyxHQUFHNU8sVUFBVSxFQUFFNk8sVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXTixLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTU8sU0FBUyxHQUFXSixZQUFZLElBQUlHLFlBQVk7WUFDdEQsTUFBTSxDQUFDdFQsSUFBSSxFQUFFd1QsT0FBTyxDQUFDLEdBQUdyVSxNQUFBLENBQUFJLE9BQUssQ0FBQ3VHLFFBQVEsQ0FBU3lOLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUVyRixTQUFTRSxZQUFZQSxDQUFDbE0sQ0FBQztjQUN0QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FFbEIsTUFBTWtNLFNBQVMsR0FBRzlNLFFBQVEsQ0FBQ2tDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaEQsTUFBTWtLLEtBQUssR0FBR2hULElBQUksS0FBSyxLQUFLLEdBQUcsT0FBTyxHQUFHLE1BQU07Y0FDL0MwVCxTQUFTLENBQUNDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRVgsS0FBSyxDQUFDO2NBQ2pESSxZQUFZLENBQUM5TyxPQUFPLENBQUMsT0FBTyxFQUFFME8sS0FBSyxDQUFDO2NBQ3BDRixPQUFBLENBQUFjLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUVkLEtBQUssQ0FBQztjQUVqRFEsT0FBTyxDQUFDUixLQUFLLEtBQUssTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDM0M7WUFFQTdULE1BQUEsQ0FBQUksT0FBSyxDQUFDK0MsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDNlEsWUFBWSxFQUFFO2NBQ25CLE1BQU1PLFNBQVMsR0FBRzlNLFFBQVEsQ0FBQ2tDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDaEQ0SyxTQUFTLENBQUNDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRVIsWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixPQUNDaFUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDLDZCQUE2QjtjQUFDYyxPQUFPLEVBQUVrVDtZQUFZLEdBQ2pFdFUsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksTUFBQSxDQUFBK0ksSUFBSTtjQUFDM0ksSUFBSSxFQUFFQSxJQUFJO2NBQUU2RCxRQUFRLEVBQUVvSCxRQUFRO2NBQUUxSyxPQUFPLEVBQUVrVDtZQUFZLEVBQUksQ0FDMUQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXRVLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUEyVSxjQUFBLEdBQUEzVSxPQUFBO1VBQ0EsSUFBQTBLLE1BQUEsR0FBQTFLLE9BQUE7VUFFQSxJQUFBNFUsS0FBQSxHQUFBNVUsT0FBQTtVQUNBLElBQUFnQixXQUFBLEdBQUFoQixPQUFBO1VBQ087VUFBVSxTQUFVNlUsbUJBQW1CQSxDQUFDO1lBQUV0TyxJQUFJO1lBQUVsRyxTQUFTO1lBQUU2UCxLQUFLO1lBQUUvRCxLQUFLO1lBQUV0TDtVQUFRLENBQUU7WUFDekYsTUFBTSxDQUFDaVUsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR2hWLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUUzRCxNQUFNc08sYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNoQ0QsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixDQUFDO1lBRUQsTUFBTTtjQUFFL1IsR0FBRztjQUFFMEY7WUFBRyxDQUFFLEdBQUcsSUFBQWlNLGNBQUEsQ0FBQU0sYUFBYSxFQUFDMU8sSUFBSSxFQUFFMkosS0FBSyxFQUFFOEUsYUFBYSxFQUFFN0ksS0FBSyxDQUFDO1lBQ3JFLE1BQU0rSSxRQUFRLEdBQUduVixNQUFBLENBQUFJLE9BQUssQ0FBQzhDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFbkMsTUFBTStILE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2NBQ3BCLElBQUlrSyxRQUFRLENBQUM5UixPQUFPLENBQUMwUCxPQUFPLEVBQUU7Z0JBQzdCa0IsWUFBWSxDQUFDOU8sT0FBTyxDQUFDd0QsR0FBRyxFQUFFLE1BQU0sQ0FBQzs7Y0FHbENxTSxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNSSxVQUFVLEdBQUc7Y0FDbEJDLEVBQUUsRUFBRTtnQkFDSHpVLEtBQUssRUFBRSxnREFBZ0Q7Z0JBQ3ZEa04sTUFBTSxFQUFFLGlCQUFpQjtnQkFDekJ3SCxLQUFLLEVBQUU7ZUFDUDtjQUNEQyxFQUFFLEVBQUU7Z0JBQ0gzVSxLQUFLLEVBQUUsNENBQTRDO2dCQUNuRGtOLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCd0gsS0FBSyxFQUFFO2VBQ1A7Y0FDREUsRUFBRSxFQUFFO2dCQUNINVUsS0FBSyxFQUFFLDBDQUEwQztnQkFDakRrTixNQUFNLEVBQUUsNEJBQTRCO2dCQUNwQ3dILEtBQUssRUFBRTs7YUFFUjtZQUNELE1BQU1HLFlBQVksR0FBR1osS0FBQSxDQUFBYSxTQUFTLENBQUNyUyxPQUFPLEtBQUssSUFBSSxHQUFHK1IsVUFBVSxDQUFDQyxFQUFFLEdBQUdELFVBQVUsQ0FBQ0csRUFBRTtZQUMvRSxPQUNDdlYsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBSzRDLEdBQUcsRUFBRUEsR0FBRztjQUFFM0MsU0FBUyxFQUFFQTtZQUFTLEdBQ2pDUSxRQUFRLEVBQ1JpVSxXQUFXLElBQ1gvVSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDc0ssTUFBQSxDQUFBUSxLQUFLO2NBQUNILElBQUk7Y0FBQ3BLLEtBQUssRUFBRXdVLFVBQVUsQ0FBQ1AsS0FBQSxDQUFBYSxTQUFTLENBQUNyUyxPQUFPLENBQUMsQ0FBQ3pDLEtBQUs7Y0FBRXFLLE9BQU8sRUFBRUE7WUFBTyxHQUN2RWpMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtvVixZQUFZLENBQUM3VSxLQUFLLENBQU0sRUFDN0JaLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCTixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBdUIsR0FDdENOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9NLElBQUksRUFBQyxVQUFVO2NBQUNzQyxHQUFHLEVBQUVrUztZQUFRLEVBQUksRUFDdkNNLFlBQVksQ0FBQzNILE1BQU0sQ0FDZCxDQUNGLEVBQ045TixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBZ0QsR0FDakVOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNZLFdBQUEsQ0FBQU8sTUFBTTtjQUFDK0QsT0FBTyxFQUFDLFNBQVM7Y0FBQ29RLEtBQUs7Y0FBQ3ZVLE9BQU8sRUFBRTZKO1lBQU8sR0FDOUN3SyxZQUFZLENBQUNILEtBQUssQ0FDWCxDQUNELENBRVYsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQSxJQUFBdFYsTUFBQSxHQUFBQyxPQUFBO1VBV087VUFBVSxTQUFVMlYsUUFBUUEsQ0FBQztZQUFFdFYsU0FBUztZQUFFa0csSUFBSTtZQUFFbUksS0FBSztZQUFFdkMsS0FBSztZQUFFdEwsUUFBUTtZQUFFaUIsRUFBRSxHQUFHO1VBQU0sQ0FBaUI7WUFDMUcsTUFBTThULElBQUksR0FBRzlMLE1BQU0sQ0FBQzhMLElBQUksQ0FBQ3pKLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUNBLEtBQUssQ0FBQzBKLGNBQWMsQ0FBQ3RQLElBQUksQ0FBQyxJQUFJLENBQUNxUCxJQUFJLEVBQUU7Y0FDekNoVCxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFZMEQsSUFBSSxxQ0FBcUMsRUFBRTRGLEtBQUssQ0FBQztjQUMxRSxPQUFPLElBQUk7O1lBRVp1QyxLQUFLLEdBQUdBLEtBQUssSUFBSWtILElBQUksQ0FBQ0UsT0FBTyxDQUFDdlAsSUFBSSxDQUFDO1lBRW5DLE1BQU1NLE9BQU8sR0FBRy9FLEVBQUU7WUFDbEIsTUFBTWhCLEdBQUcsR0FBRyxhQUFhVCxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQ0NOLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RyxPQUFPO2NBQ1B4RyxTQUFTLEVBQUVTLEdBQUc7Y0FBQSxvQkFDSXFMLEtBQUssQ0FBQzVGLElBQUksQ0FBQyxDQUFDMkgsV0FBVztjQUFBLGNBQzdCL0IsS0FBSyxDQUFDNUYsSUFBSSxDQUFDLENBQUM1RixLQUFLO2NBQUEsYUFDbEIrTixLQUFLO2NBQUEsY0FDSkE7WUFBSyxHQUVoQjdOLFFBQVEsQ0FDQTtVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDQSxJQUFBZCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK1YsT0FBQSxHQUFBL1YsT0FBQTtVQUVPO1VBQVUsU0FBVWlWLGFBQWFBLENBQUMxTyxJQUFJLEVBQUUySixLQUFLLEVBQUU4RSxhQUFhLEVBQUUzVCxLQUFLLEdBQUcsRUFBRTtZQUM5RSxNQUFNMkIsR0FBRyxHQUFHakQsTUFBQSxDQUFBSSxPQUFLLENBQUM4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLE1BQU15RixHQUFHLEdBQUcsV0FBV25DLElBQUksT0FBTztZQUNsQyxNQUFNeVAsVUFBVSxHQUFHLFdBQVd6UCxJQUFJLGVBQWU7WUFDakQsTUFBTTBQLEdBQUcsR0FBR2pDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDdkwsR0FBRyxDQUFDO1lBQ3JDLE1BQU13TixVQUFVLEdBQUdqUixjQUFjLENBQUNnUCxPQUFPLENBQUMrQixVQUFVLENBQUM7WUFFckRqVyxNQUFBLENBQUFJLE9BQUssQ0FBQytDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ2dOLEtBQUssSUFBSStGLEdBQUcsSUFBSUMsVUFBVSxFQUFFO2NBQ2pDLE1BQU1DLEtBQUssR0FBR25ULEdBQUcsQ0FBQ0ksT0FBTyxDQUFDZ1QsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO2NBRXpELE1BQU1DLEtBQUssR0FBRyxFQUFFO2NBQ2hCRixLQUFLLEVBQUVHLE9BQU8sQ0FBRTlSLElBQWlCLElBQUk7Z0JBQ3BDLE1BQU07a0JBQUU3RCxLQUFLO2tCQUFFdU47Z0JBQVcsQ0FBRSxHQUFHMUosSUFBSSxDQUFDK1IsT0FBTztnQkFDM0NGLEtBQUssQ0FBQ0csSUFBSSxDQUFDO2tCQUNWQyxPQUFPLEVBQUVqUyxJQUFJO2tCQUNia1MsT0FBTyxFQUFFO29CQUNSL1YsS0FBSztvQkFDTHVOOztpQkFFRCxDQUFDO2NBQ0gsQ0FBQyxDQUFDO2NBQ0YsTUFBTXlJLEdBQUcsR0FBRyxJQUFBWixPQUFBLENBQUFhLE1BQU0sRUFBQztnQkFDbEJDLFlBQVksRUFBRSxrQkFBa0I7Z0JBQ2hDUixLQUFLO2dCQUVMUyxXQUFXLEVBQUVBLENBQUEsS0FBSztrQkFDakIsSUFBSSxDQUFDSCxHQUFHLENBQUNJLFdBQVcsRUFBRSxFQUFFO29CQUN2Qi9DLFlBQVksQ0FBQzlPLE9BQU8sQ0FBQ3dELEdBQUcsRUFBRSxNQUFNLENBQUM7b0JBQ2pDaU8sR0FBRyxDQUFDSyxPQUFPLEVBQUU7b0JBQ2I7O2tCQUVETCxHQUFHLENBQUNNLFFBQVEsRUFBRTtrQkFDZCxPQUFPLElBQUk7Z0JBQ1osQ0FBQztnQkFDREMsZ0JBQWdCLEVBQUUsTUFBQUEsQ0FBQSxLQUFXO2tCQUM1QmpTLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDOFEsVUFBVSxFQUFFLE1BQU0sQ0FBQztrQkFDMUNoQixhQUFhLEVBQUU7a0JBQ2YyQixHQUFHLENBQUNLLE9BQU8sRUFBRTtnQkFDZCxDQUFDO2dCQUVELEdBQUczVjtlQUNILENBQUM7Y0FDRnNWLEdBQUcsQ0FBQ1EsS0FBSyxFQUFFO1lBQ1osQ0FBQyxFQUFFLENBQUNqSCxLQUFLLENBQUMsQ0FBQztZQUVYLE9BQU87Y0FBRWxOLEdBQUc7Y0FBRTBGO1lBQUcsQ0FBRTtVQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQW1ILEtBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQTBCTztVQUFVLFNBQVVvWCxRQUFRQSxDQUFDO1lBQUVoRixLQUFLO1lBQUUxUixJQUFJO1lBQUU2RDtVQUFJLENBQWE7WUFDbkUsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRWdILFFBQVE7Y0FBRWhGO1lBQUksQ0FBRSxHQUFHaEMsSUFBSTtZQUMvQixPQUNDc0wsS0FBQSxDQUFBelAsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBb0IsR0FDakMrUixLQUFLLElBQUl2QyxLQUFBLENBQUF6UCxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFrQixHQUFFK1IsS0FBSyxDQUFNLEVBQ3ZEdkMsS0FBQSxDQUFBelAsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBbUIsR0FDcENLLElBQUksS0FBSyxjQUFjLEdBQ3ZCbVAsS0FBQSxDQUFBelAsYUFBQSxDQUFDSSxNQUFBLENBQUFPLE9BQU87Y0FBQ3VFLE9BQU8sRUFBQyxZQUFZO2NBQUMxRSxJQUFJLEVBQUMsYUFBYTtjQUFDUCxTQUFTLEVBQUM7WUFBZ0IsRUFBRyxHQUU5RXdQLEtBQUEsQ0FBQXpQLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQUcsS0FBSztjQUFDOUQsU0FBUyxFQUFDLGdCQUFnQjtjQUFDSCxHQUFHLEVBQUVxTDtZQUFRLEVBQy9DLEVBRURzRSxLQUFBLENBQUF6UCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQixHQUFFa0csSUFBSSxDQUFRLENBQ3RDLENBQ0w7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==