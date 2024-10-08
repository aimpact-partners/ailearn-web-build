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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdXNlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjb250ZW50IiwicGxhY2Vob2xkZXIiLCJsaW5lQnJlYWsiLCJlZGl0YWJsZSIsIm5hbWUiLCJDb250cm9sIiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJ1c2VTdGF0ZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleGVjQ29tbWFuZCIsImhhbmRsZUtleURvd24iLCJrZXkiLCJvbkJsdXIiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJlbnN1cmUiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsInNob3ciLCJvbkNsb3NlIiwib25Db25zdW1lIiwiTW9kYWwiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvblN1Y2Nlc3MiLCJvbkNhbmNlbCIsIk93bmVySW1hZ2UiLCJwaG90b1VybCIsIl9lcnJvclJlbmRlcmVyIiwiX2FpQnV0dG9uIiwiX3Byb2Nlc3NDb250YWluZXIiLCJfYW5pbWF0aW9ucyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJlcnJvciIsInNldEVycm9yIiwiYWN0aW9uVGV4dHMiLCJhY3Rpb25zIiwidGV4dHMiLCJyZXF1ZXN0Q3JlZGl0cyIsImVycm9ycyIsIm9uQ29uZmlybSIsImFuc3dlciIsInN0YXR1cyIsImNvZGUiLCJFcnJvciIsImxvZyIsImFsZXJ0cyIsIm5vQ3JlZGl0cyIsImRldGFpbFRleHQiLCJkZXRhaWwiLCJpbnRlcmFjdGl2ZSIsImRpdiIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsInZhcmlhbnQiLCJGcmFnbWVudCIsIm93bmVyRGVzY3JpcHRpb24iLCJhY3Rpb24iLCJib3JkZXJlZCIsImNhbmNlbCIsImNvbnRpbnVlIiwiUHJvY2Vzc0NvbnRhaW5lciIsImRlc2NyaXB0aW9uIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsInNpemUiLCJfYWxlcnQiLCJBbGVydCIsIkhlYWRlckNvdW50ZXJJdGVtIiwiaW5kZXgiLCJTdGF0dXNIZWFkZXJDb250ZW50IiwiSGVhZGVyQ291bnRlciIsImxpc3QiLCJyZW5kZXJlZEl0ZW1zIiwibWFwIiwiSGVhZGVyVGl0bGUiLCJfaGVhZGVyQ291bnRlciIsIl9oZWFkZXJUaXRsZSIsIkhlYWRlckNhcmQiLCJpbWFnZSIsIl9qc0NvbmZldHRpIiwidXNlQ29uZmV0dGkiLCJjb25mZXR0aU51bWJlciIsImNvbmZldHRpQ29sb3JzIiwiZW1vamlzIiwiZW1vamlTaXplIiwianNDb25mZXR0aSIsImFkZENvbmZldHRpIiwiX2RyaXZlciIsInVzZURyaXZlclRvdXIiLCJyZWFkeSIsInNhdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGVwcyIsImZvckVhY2giLCJkYXRhc2V0IiwicHVzaCIsImVsZW1lbnQiLCJwb3BvdmVyIiwib2JqIiwiZHJpdmVyIiwicG9wb3ZlckNsYXNzIiwib25OZXh0Q2xpY2siLCJoYXNOZXh0U3RlcCIsImRlc3Ryb3kiLCJtb3ZlTmV4dCIsImRyaXZlIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsIkFwcExvYWRlciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJfbG9hZGVyIiwiUGFnZUxvYWRlciIsIlBhZ2VDb250YWluZXIiLCJTSVpFUyIsInNtIiwiY2xzU2l6ZSIsIl9za2VsZXRvblRleHQiLCJQYWdlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJQYWdlU3VidGl0bGUiLCJQcm9jZXNzQnV0dG9uIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSYWRpb0J1dHRvbiIsImxhYmVsIiwib25DaGFuZ2UiLCJyZXN0IiwiaW5wdXRSZWYiLCJoYW5kbGVMYWJlbENoYW5nZSIsImNoYW5nZUV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRpc3BhdGNoRXZlbnQiLCJzY2FsZSIsImNoZWNrZWQiLCJSYWRpb0dyb3VwIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIlRvdXJTdGVwIiwia2V5cyIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsIlVzZXJEYXRhIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXRpZXMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYWN0aXZpdGllcy9hdWRpby50c3giLCIvdHMvYWN0aXZpdGllcy9jaGF0LXByZWxvYWQudHN4IiwiL3RzL2FjdGl2aXRpZXMvaGVhZGVyLnRzeCIsIi90cy9haS1idXR0b24udHN4IiwiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvYmF0dGVyeS50c3giLCIvdHMvY2FyZC9jb250ZW50LnRzeCIsIi90cy9jYXJkL2Zvb3Rlci50c3giLCIvdHMvY2FyZC9pbWFnZS50c3giLCIvdHMvY2FyZC9pbmRleC50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9jcmVkaXRzL2FpLWJ1dHRvbi50c3giLCIvdHMvY3JlZGl0cy9hbmltYXRpb25zLnRzeCIsIi90cy9jcmVkaXRzL2NvaW5zLW1vZGFsLnRzeCIsIi90cy9jcmVkaXRzL2ltYWdlLnRzeCIsIi90cy9jcmVkaXRzL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvZW1wdHkudHN4IiwiL3RzL2VudGl0eS1pbWFnZS50c3giLCIvdHMvZXJyb3ItcmVuZGVyZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci1jb3VudGVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItdGl0bGUudHN4IiwiL3RzL2hlYWRlci1jYXJkL2luZGV4LnRzeCIsIi90cy9ob29rcy91c2UtY29uZmV0dGkudHN4IiwiL3RzL2hvb2tzL3VzZS1kcml2ZXItdG91ciBjb3B5LnRzIiwiL3RzL2hvb2tzL3VzZS1kcml2ZXItdG91ci50cyIsIi90cy9ob29rcy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvbG9hZGVycy9sb2FkZXIudHN4IiwiL3RzL2xvYWRlcnMvcHJlLWxvYWQudHN4IiwiL3RzL3BhZ2UvbG9hZGVyLnRzeCIsIi90cy9wYWdlL3BhZ2UtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL3RpdGxlLnRzeCIsIi90cy9wcm9jZXNzLWJ1dHRvbi50c3giLCIvdHMvcmFkaW8vaW5kZXgudHN4IiwiL3RzL3JhZGlvL3JhZGlvLWdyb3VwLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy90b3VyLXN0ZXAudHN4IiwiL3RzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FB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O1lBQy9CLElBQUksQ0FBQ0EsS0FBSyxDQUFDcUksY0FBYyxDQUFDek4sSUFBSSxDQUFDLElBQUksQ0FBQ3dOLElBQUksRUFBRTtjQUN6Q3hRLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFlBQVkrQyxJQUFJLHFDQUFxQyxFQUFFb0YsS0FBSyxDQUFDO2NBQzFFLE9BQU8sSUFBSTs7WUFFWmlDLEtBQUssR0FBR0EsS0FBSyxJQUFJbUcsSUFBSSxDQUFDRSxPQUFPLENBQUMxTixJQUFJLENBQUM7WUFFbkMsTUFBTUMsT0FBTyxHQUFHNUYsRUFBRTtZQUNsQixNQUFNOEIsR0FBRyxHQUFHLGFBQWFoQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3RixPQUFPO2NBQ1A5RixTQUFTLEVBQUVnQyxHQUFHO2NBQUEsb0JBQ0lpSixLQUFLLENBQUNwRixJQUFJLENBQUMsQ0FBQzZHLFdBQVc7Y0FBQSxjQUM3QnpCLEtBQUssQ0FBQ3BGLElBQUksQ0FBQyxDQUFDOUQsS0FBSztjQUFBLGFBQ2xCbUwsS0FBSztjQUFBLGNBQ0pBO1lBQUssR0FFaEJqTixRQUFRLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQTBQLEtBQUEsR0FBQTlQLE9BQUE7VUFDQSxJQUFBb0UsTUFBQSxHQUFBcEUsT0FBQTtVQWNPO1VBQVUsU0FBVTJULFFBQVFBLENBQUM7WUFBRTNCLEtBQUs7WUFBRXJOO1VBQUksQ0FBa0M7WUFDbEYsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRThGLFFBQVE7Y0FBRXpFO1lBQUksQ0FBRSxHQUFHckIsSUFBSTtZQUMvQixPQUNDbUwsS0FBQSxDQUFBclAsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBb0IsR0FDakM2UixLQUFLLElBQUlsQyxLQUFBLENBQUFyUCxhQUFBO2NBQUlOLFNBQVMsRUFBQztZQUFrQixHQUFFNlIsS0FBSyxDQUFNLEVBQ3ZEbEMsS0FBQSxDQUFBclAsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBbUIsR0FDckMyUCxLQUFBLENBQUFyUCxhQUFBLENBQUMyRCxNQUFBLENBQUFHLEtBQUs7Y0FBQ3BFLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dCLEdBQUcsRUFBRXNKO1lBQVEsRUFBSSxFQUNuRHFGLEtBQUEsQ0FBQXJQLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlCLEdBQUU2RixJQUFJLENBQVEsQ0FDdEMsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119