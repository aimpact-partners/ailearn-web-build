System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/alert", "js-confetti@0.12.0", "driver.js@1.3.1", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.6/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ContentEditable, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useDriverTour, useTextsCallback, AppLoader, PreloadScreen, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, TourStep, UserData, __beyond_pkg, hmr;
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
    useDriverTour: void 0,
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
    TourStep: void 0,
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
    }, function (_aimpactAilearnApp0113Config) {
      dependency_4 = _aimpactAilearnApp0113Config;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_5 = _pragmateUi100Beta6Icons;
    }, function (_pragmateUi100Beta6Form) {
      dependency_6 = _pragmateUi100Beta6Form;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_pragmateUi100Beta6Components) {
      dependency_8 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Image) {
      dependency_9 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Base) {
      dependency_10 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_11 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_12 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_13 = _pragmateUi100Beta6Alert;
    }, function (_jsConfetti2) {
      dependency_14 = _jsConfetti2;
    }, function (_driverJs) {
      dependency_15 = _driverJs;
    }, function (_beyondJsKernel019Texts) {
      dependency_16 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta6Spinner) {
      dependency_17 = _pragmateUi100Beta6Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/base', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['js-confetti', dependency_14], ['driver.js', dependency_15], ['@beyond-js/kernel/texts', dependency_16], ['pragmate-ui/spinner', dependency_17]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/components/ui');
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
        hash: 55913942,
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
            }, _react.default.createElement(_icons.AppIcon, {
              icon: icon
            }), _react.default.createElement("h1", null, title), children));
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
        hash: 2281896928,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _useContainer = require("./use-container");
          /*bundle*/
          const ContentEditable = ({
            onSave,
            selector = 'div',
            as = 'div',
            className,
            content,
            placeholder,
            lineBreak = true,
            editable = true,
            name
          }) => {
            const Control = as || selector;
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const {
              ref: contentRef,
              value
            } = (0, _useContainer.useClickContainer)(content, placeholder, isEditable);
            if (!editable) {
              return _react.default.createElement(Control, {
                ref: contentRef
              }, value);
            }
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
            const [original, setOriginal] = _react.default.useState(content);
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
            }, value), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          };
          exports.ContentEditable = ContentEditable;
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/types
      ****************************************/

      ims.set('./content-editable/types', {
        hash: 250591186,
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
        hash: 107178297,
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

      /********************************************
      INTERNAL MODULE: ./hooks/use-driver-tour copy
      ********************************************/

      ims.set('./hooks/use-driver-tour copy', {
        hash: 1020024117,
        creator: function (require, exports) {
          // import React from 'react';
          // import { driver } from 'driver.js';
          // export /*bundle*/ function useDriverTour(name, ready, props = {}) {
          // 	const ref = React.useRef(null);
          // 	const key = `ailearn.${name}.tour`;
          // 	const saw = localStorage.getItem(key);
          // 	React.useEffect(() => {
          // 		if (!ready || saw) return;
          // 		const items = ref.current.querySelectorAll('[data-tour]');
          // 		let defined = [];
          // 		const toOrder = [];
          // 		items.forEach(item => {
          // 			if (!item.dataset.step) {
          // 				toOrder.push(item);
          // 				return;
          // 			}
          // 			defined.push({ step: Number(item.dataset.step), item });
          // 		});
          // 		defined = defined.sort((a, b) => a.step - b.step);
          // 		const steps = [];
          // 		defined.forEach(({ item }) => {
          // 			const totalElements = steps.length;
          // 			if(item.step > totalElements = 1) {
          // 				const diffence = item.step - totalElements;
          // 			}
          // 			const { title, description } = item.dataset;
          // 			steps.push({
          // 				element: item,
          // 				popover: {
          // 					title,
          // 					description
          // 				}
          // 			});
          // 		});
          // 	});
          // 		items?.forEach((item: HTMLElement) => {
          // 			const { title, description } = item.dataset;
          // 			steps.push({
          // 				element: item,
          // 				popover: {
          // 					title,
          // 					description
          // 				}
          // 			});
          // 		});
          // 		const obj = driver({
          // 			popoverClass: 'pui-popover-tour',
          // 			steps,
          // 			onNextClick: () => {
          // 				if (!obj.hasNextStep()) {
          // 					localStorage.setItem(key, 'done');
          // 					obj.destroy();
          // 					return;
          // 				}
          // 				obj.moveNext();
          // 				return true;
          // 			},
          // 			...props
          // 		});
          // 		obj.drive();
          // 	}, [ready]);
          // 	return { ref };
          // }
          "use strict";
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-driver-tour
      ***************************************/

      ims.set('./hooks/use-driver-tour', {
        hash: 2915660010,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDriverTour = useDriverTour;
          var _react = require("react");
          var _driver = require("driver.js");
          /*bundle*/
          function useDriverTour(name, ready, props = {}) {
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
                ...props
              });
              obj.drive();
            }, [ready]);
            return {
              ref
            };
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

      /***************************
      INTERNAL MODULE: ./tour-step
      ***************************/

      ims.set('./tour-step', {
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

      /***************************
      INTERNAL MODULE: ./user-data
      ***************************/

      ims.set('./user-data', {
        hash: 1947842681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function UserData({
            label,
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
            }, React.createElement(_image.Image, {
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
        "im": "./hooks/use-driver-tour",
        "from": "useDriverTour",
        "name": "useDriverTour"
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
        "im": "./tour-step",
        "from": "TourStep",
        "name": "TourStep"
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
        (require || prop === 'useDriverTour') && _export("useDriverTour", useDriverTour = require ? require('./hooks/use-driver-tour').useDriverTour : value);
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
        (require || prop === 'TourStep') && _export("TourStep", TourStep = require ? require('./tour-step').TourStep : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdXNlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjb250ZW50IiwicGxhY2Vob2xkZXIiLCJsaW5lQnJlYWsiLCJlZGl0YWJsZSIsIm5hbWUiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJlbnN1cmUiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvblN1Y2Nlc3MiLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwidGV4dHMiLCJyZXF1ZXN0Q3JlZGl0cyIsImVycm9ycyIsIm9uQ29uZmlybSIsImFuc3dlciIsInN0YXR1cyIsImNvZGUiLCJFcnJvciIsImFsZXJ0cyIsIm5vQ3JlZGl0cyIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsImRpdiIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJhY3Rpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJfYWxlcnQiLCJBbGVydCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiX2RyaXZlciIsInVzZURyaXZlclRvdXIiLCJyZWFkeSIsInNhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImZvckVhY2giLCJkYXRhc2V0IiwicHVzaCIsImVsZW1lbnQiLCJwb3BvdmVyIiwib2JqIiwiZHJpdmVyIiwicG9wb3ZlckNsYXNzIiwib25OZXh0Q2xpY2siLCJoYXNOZXh0U3RlcCIsImRlc3Ryb3kiLCJtb3ZlTmV4dCIsImRyaXZlIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsIkFwcExvYWRlciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfbG9hZGVyIiwiUGFnZUxvYWRlciIsIlBhZ2VDb250YWluZXIiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSYWRpb0J1dHRvbiIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJzY2FsZSIsImNoZWNrZWQiLCJSYWRpb0dyb3VwIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIlRvdXJTdGVwIiwia2V5cyIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsIlVzZXJEYXRhIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9jcmVkaXRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtY29uZmV0dGkudHN4IiwiL3RzL2hvb2tzL3VzZS1kcml2ZXItdG91ciBjb3B5LnRzIiwiL3RzL2hvb2tzL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90b3VyLXN0ZXAudHN4IiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFB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