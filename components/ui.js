System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-16/config", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-16/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.1.1/spinner", "@beyond-js/kernel@0.1.9/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, CardContent, CardFooter, CardImage, Card, ConfirmAction, ContentEditable, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, ListContainer, NotFound, PageContainer, ProcessContainer, PageTitle, PageSubtitle, PreloadScreen, ProcessButton, ProcessIconButton, RotatingMessage, SkeletonText, SubDivider, useTextsCallback, __beyond_pkg, hmr;
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
    ConfirmAction: void 0,
    ContentEditable: void 0,
    EmptyCard: void 0,
    EntityImage: void 0,
    ErrorRenderer: void 0,
    HeaderCounter: void 0,
    HeaderTitle: void 0,
    HeaderCard: void 0,
    ListContainer: void 0,
    NotFound: void 0,
    PageContainer: void 0,
    ProcessContainer: void 0,
    PageTitle: void 0,
    PageSubtitle: void 0,
    PreloadScreen: void 0,
    ProcessButton: void 0,
    ProcessIconButton: void 0,
    RotatingMessage: void 0,
    SkeletonText: void 0,
    SubDivider: void 0,
    useTextsCallback: void 0
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
    }, function (_aimpactAilearnApp0046Dev16Config) {
      dependency_4 = _aimpactAilearnApp0046Dev16Config;
    }, function (_pragmateUi011Icons) {
      dependency_5 = _pragmateUi011Icons;
    }, function (_pragmateUi011Form) {
      dependency_6 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0046Dev16ComponentsIcons) {
      dependency_7 = _aimpactAilearnApp0046Dev16ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_8 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_9 = _pragmateUi011Image;
    }, function (_pragmateUi011Toast) {
      dependency_10 = _pragmateUi011Toast;
    }, function (_pragmateUi011Modal) {
      dependency_11 = _pragmateUi011Modal;
    }, function (_pragmateUi011Empty) {
      dependency_12 = _pragmateUi011Empty;
    }, function (_pragmateUi011Alert) {
      dependency_13 = _pragmateUi011Alert;
    }, function (_pragmateUi011Link) {
      dependency_14 = _pragmateUi011Link;
    }, function (_pragmateUi011List) {
      dependency_15 = _pragmateUi011List;
    }, function (_aimpactChat101SharedComponents) {
      dependency_16 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi011Spinner) {
      dependency_17 = _pragmateUi011Spinner;
    }, function (_beyondJsKernel019Texts) {
      dependency_18 = _beyondJsKernel019Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-16"], ["@aimpact/ailearn-app", "0.0.46.dev-16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-16/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['pragmate-ui/toast', dependency_10], ['pragmate-ui/modal', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/link', dependency_14], ['pragmate-ui/list', dependency_15], ['@aimpact/chat/shared/components', dependency_16], ['pragmate-ui/spinner', dependency_17], ['@beyond-js/kernel/texts', dependency_18]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-16/components/ui');
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
        hash: 823467044,
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
        hash: 2632451254,
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
            return _react.default.createElement("div", {
              className: "battery-component"
            }, _react.default.createElement("div", {
              className: "level"
            }, _react.default.createElement("div", {
              ref: ref,
              className: "percentage"
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

      /********************************
      INTERNAL MODULE: ./confirm-action
      ********************************/

      ims.set('./confirm-action', {
        hash: 460923979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _modal = require("pragmate-ui/modal");
          /*bundle */
          function ConfirmAction({
            textPopUp = '',
            onConfirm,
            icon = 'delete',
            className = 'circle',
            toastText = {
              success: 'Module Deleted Successfully!',
              error: 'Error Deleting Module. Please try again.'
            },
            modalText = {
              title: 'Confirm Deletion',
              description: 'Are you sure you want to delete this?'
            }
          }) {
            const [show, setShow] = _react.default.useState(false);
            function handleModal() {
              setShow(!show);
            }
            const handleConfirm = async event => {
              try {
                event?.stopPropagation();
                await onConfirm();
                _toast.toast.success(toastText.success);
                setShow(!show);
              } catch (error) {
                _toast.toast.error(toastText.error);
                console.error(error);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              title: textPopUp,
              icon: icon,
              onClick: handleModal,
              className: className
            }), show && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "beauty-modal",
              title: modalText.title,
              text: modalText.description,
              onClose: handleModal,
              onCancel: handleModal,
              onConfirm: handleConfirm
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./content-editable/index
      ****************************************/

      ims.set('./content-editable/index', {
        hash: 1786066771,
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
              setIsEditable(false);
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
        hash: 841117553,
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
            _react.default.useEffect(() => {
              const onInput = () => {
                setValue({
                  edited: true,
                  content: ref.current?.textContent
                });
                const range = document.createRange();
                range.selectNodeContents(ref.current);
                range.collapse(false);
                const selection = window.getSelection();
                if (selection) {
                  selection.removeAllRanges();
                  selection.addRange(range);
                }
              };
              ref.current?.addEventListener('input', onInput);
              const el = ref?.current;
              el.addEventListener('keyup', onInput);
              el.addEventListener('paste', onInput);
              return () => {
                ref.current?.removeEventListener('input', onInput);
                el.removeEventListener('keyup', onInput);
                el.removeEventListener('paste', onInput);
              };
            }, []);
            return {
              ref,
              isOutSide,
              value: toShow,
              setValue
            };
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
        hash: 1614160234,
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
              src: src,
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
        hash: 1509422675,
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
            texts,
            variant = 'error'
          }) {
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
        hash: 2611877207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderCounter = HeaderCounter;
          var _icons = require("pragmate-ui/icons");
          var _link = require("pragmate-ui/link");
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
            return _react.default.createElement(_link.Link, {
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

      /********************************
      INTERNAL MODULE: ./list-container
      ********************************/

      ims.set('./list-container', {
        hash: 1008288713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListContainer = ListContainer;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function ListContainer({
            className,
            items,
            control
          }) {
            const cls = `list__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_list.List, {
              className: cls,
              items: items,
              control: control
            });
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./not-found
      ***************************/

      ims.set('./not-found', {
        hash: 2782054676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _alert = require("pragmate-ui/alert");
          var _image = require("pragmate-ui/image");
          var _components = require("@aimpact/chat/shared/components");
          var _react = require("react");
          /*bundle */
          function NotFound({
            texts,
            textsReady
          }) {
            if (!textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const {
              title,
              subtitle,
              description
            } = texts.notFound;
            return _react.default.createElement("article", {
              className: "container__error place-center"
            }, _react.default.createElement("div", {
              className: "container-top__error"
            }, _react.default.createElement("div", {
              className: "panel-top__text"
            }, _react.default.createElement("h3", {
              className: "h2 mb-15"
            }, title), _react.default.createElement("span", {
              className: "h4"
            }, subtitle)), _react.default.createElement(_image.Image, {
              src: "https://res.cloudinary.com/versus/image/upload/f_auto,q_auto,w_200/v1/AImpact/fujhhbk2li36uxgyaipn",
              alt: "Sad Explorer"
            })), _react.default.createElement("div", {
              className: "container-bot__error"
            }, _react.default.createElement(_alert.Alert, {
              type: "info"
            }, description)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./page/container
      ********************************/

      ims.set('./page/container', {
        hash: 4150814031,
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
              className: cls,
              as: "main"
            }, children, fetching && _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement(_components.Spinner, {
              active: true,
              size: "xl"
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/loader
      *****************************/

      ims.set('./page/loader', {
        hash: 3078422322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loader = Loader;
          var _react = require("react");
          function Loader() {
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

      /****************************************
      INTERNAL MODULE: ./page/process-container
      ****************************************/

      ims.set('./page/process-container', {
        hash: 1682709248,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _loader = require("./loader");
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
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.Loader, null), children)));
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

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
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

      /**********************************
      INTERNAL MODULE: ./rotating-message
      **********************************/

      ims.set('./rotating-message', {
        hash: 3462340237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RotatingMessage = RotatingMessage;
          var _react = require("react");
          /*bundle*/
          function RotatingMessage({
            content,
            time = 2000
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const text = ref.current;
              let intervalDots;
              let i = 0;
              const interval = globalThis.setInterval(() => {
                text.classList.remove('fade-in-up');
                text.classList.add('fade-out-up');
                setTimeout(() => {
                  text.innerHTML = content[i];
                  text.classList.remove('fade-out-up');
                  text.classList.add('fade-in-up');
                }, time / 2);
                let dots = '.';
                if (i === content.length - 1) i = 0;
                i++;
              }, time);
            }, []);
            return _react.default.createElement("span", {
              ref: ref,
              className: "rotating-message"
            }, content[0]);
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

      /*****************************
      INTERNAL MODULE: ./sub-divider
      *****************************/

      ims.set('./sub-divider', {
        hash: 1862752652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SubDivider = SubDivider;
          var _react = require("react");
          /*bundle*/ /**
                      *
                      * @param param0
                      * @returns
                      *
                      *
                      */
          function SubDivider({
            title,
            children
          }) {
            return _react.default.createElement("div", {
              className: "subdivider__container"
            }, _react.default.createElement("h3", null, title), children);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./use-texts-callback
      ************************************/

      ims.set('./use-texts-callback', {
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
        "im": "./confirm-action",
        "from": "ConfirmAction",
        "name": "ConfirmAction"
      }, {
        "im": "./content-editable/index",
        "from": "ContentEditable",
        "name": "ContentEditable"
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
        "im": "./list-container",
        "from": "ListContainer",
        "name": "ListContainer"
      }, {
        "im": "./not-found",
        "from": "NotFound",
        "name": "NotFound"
      }, {
        "im": "./page/container",
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
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./process-button",
        "from": "ProcessButton",
        "name": "ProcessButton"
      }, {
        "im": "./process-button",
        "from": "ProcessIconButton",
        "name": "ProcessIconButton"
      }, {
        "im": "./rotating-message",
        "from": "RotatingMessage",
        "name": "RotatingMessage"
      }, {
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
      }, {
        "im": "./sub-divider",
        "from": "SubDivider",
        "name": "SubDivider"
      }, {
        "im": "./use-texts-callback",
        "from": "useTextsCallback",
        "name": "useTextsCallback"
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
        (require || prop === 'ConfirmAction') && _export("ConfirmAction", ConfirmAction = require ? require('./confirm-action').ConfirmAction : value);
        (require || prop === 'ContentEditable') && _export("ContentEditable", ContentEditable = require ? require('./content-editable/index').ContentEditable : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./empty').EmptyCard : value);
        (require || prop === 'EntityImage') && _export("EntityImage", EntityImage = require ? require('./entity-image').EntityImage : value);
        (require || prop === 'ErrorRenderer') && _export("ErrorRenderer", ErrorRenderer = require ? require('./error-renderer').ErrorRenderer : value);
        (require || prop === 'HeaderCounter') && _export("HeaderCounter", HeaderCounter = require ? require('./header-card/header-counter').HeaderCounter : value);
        (require || prop === 'HeaderTitle') && _export("HeaderTitle", HeaderTitle = require ? require('./header-card/header-title').HeaderTitle : value);
        (require || prop === 'HeaderCard') && _export("HeaderCard", HeaderCard = require ? require('./header-card/index').HeaderCard : value);
        (require || prop === 'ListContainer') && _export("ListContainer", ListContainer = require ? require('./list-container').ListContainer : value);
        (require || prop === 'NotFound') && _export("NotFound", NotFound = require ? require('./not-found').NotFound : value);
        (require || prop === 'PageContainer') && _export("PageContainer", PageContainer = require ? require('./page/container').PageContainer : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./page/process-container').ProcessContainer : value);
        (require || prop === 'PageTitle') && _export("PageTitle", PageTitle = require ? require('./page/title').PageTitle : value);
        (require || prop === 'PageSubtitle') && _export("PageSubtitle", PageSubtitle = require ? require('./page/title').PageSubtitle : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'ProcessButton') && _export("ProcessButton", ProcessButton = require ? require('./process-button').ProcessButton : value);
        (require || prop === 'ProcessIconButton') && _export("ProcessIconButton", ProcessIconButton = require ? require('./process-button').ProcessIconButton : value);
        (require || prop === 'RotatingMessage') && _export("RotatingMessage", RotatingMessage = require ? require('./rotating-message').RotatingMessage : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
        (require || prop === 'SubDivider') && _export("SubDivider", SubDivider = require ? require('./sub-divider').SubDivider : value);
        (require || prop === 'useTextsCallback') && _export("useTextsCallback", useTextsCallback = require ? require('./use-texts-callback').useTextsCallback : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJDYXJkQ29udGVudCIsIm9wdGlvbiIsInNpbXBsZSIsIkNhcmRGb290ZXIiLCJfaW1hZ2UiLCJDYXJkSW1hZ2UiLCJhbHQiLCJJbWFnZSIsIl9lbnRpdHlJbWFnZSIsIkNhcmQiLCJsaW5rIiwiZGF0YSIsIml0ZW0iLCJDb250YWluZXIiLCJMaW5rIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJocmVmIiwiY2xzQ2FyZCIsImdsb2JhbFRoaXMiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJFbnRpdHlJbWFnZSIsInBpY3R1cmUiLCJfdG9hc3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwidGV4dFBvcFVwIiwib25Db25maXJtIiwidG9hc3RUZXh0Iiwic3VjY2VzcyIsImVycm9yIiwibW9kYWxUZXh0IiwiZGVzY3JpcHRpb24iLCJzaG93Iiwic2V0U2hvdyIsInVzZVN0YXRlIiwiaGFuZGxlTW9kYWwiLCJoYW5kbGVDb25maXJtIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2FzdCIsIkZyYWdtZW50IiwiQ29uZmlybU1vZGFsIiwidGV4dCIsIm9uQ2xvc2UiLCJvbkNhbmNlbCIsIl91c2VDb250YWluZXIiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsImNvbnRlbnQiLCJwbGFjZWhvbGRlciIsImxpbmVCcmVhayIsImVkaXRhYmxlIiwibmFtZSIsIkNvbnRyb2wiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnRSZWYiLCJ2YWx1ZSIsInVzZUNsaWNrQ29udGFpbmVyIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImNvbnRyb2xDbHMiLCJvcmlnaW5hbCIsInNldE9yaWdpbmFsIiwiaGFuZGxlUGFzdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsInNwZWNzIiwiY3VycmVudFRhcmdldCIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJvbklucHV0IiwidGV4dENvbnRlbnQiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRW1wdHkiLCJyYXRpbyIsImVudGl0eSIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ0ZXh0cyIsInZhcmlhbnQiLCJBbGVydCIsIl9saW5rIiwiSGVhZGVyQ291bnRlckl0ZW0iLCJpbmRleCIsIlN0YXR1c0hlYWRlckNvbnRlbnQiLCJzdGF0dXMiLCJIZWFkZXJDb3VudGVyIiwibGlzdCIsInJlbmRlcmVkSXRlbXMiLCJtYXAiLCJIZWFkZXJUaXRsZSIsIl9oZWFkZXJDb3VudGVyIiwiX2hlYWRlclRpdGxlIiwiSGVhZGVyQ2FyZCIsImltYWdlIiwiX2xpc3QiLCJMaXN0Q29udGFpbmVyIiwiaXRlbXMiLCJjb250cm9sIiwiTGlzdCIsIk5vdEZvdW5kIiwidGV4dHNSZWFkeSIsIlByZWxvYWRTY3JlZW4iLCJzdWJ0aXRsZSIsIm5vdEZvdW5kIiwiUGFnZUNvbnRhaW5lciIsImZldGNoaW5nIiwic2l6ZSIsIlNJWkVTIiwic20iLCJjbHNTaXplIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxvYWRlciIsIl9sb2FkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiX3NrZWxldG9uVGV4dCIsIlBhZ2VUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIlBhZ2VTdWJ0aXRsZSIsIl9zcGlubmVyIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiaGFuZGxlQ2xpY2siLCJQcm9jZXNzSWNvbkJ1dHRvbiIsIkFwcEljb25CdXR0b24iLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiaW50ZXJ2YWxEb3RzIiwiaSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckhUTUwiLCJkb3RzIiwibGVuZ3RoIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iLCJkaXNwbGF5Iiwic3RvcEFuaW1hdGlvbiIsIlN1YkRpdmlkZXIiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInJlYWR5Iiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJvbiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9jYXJkL2NvbnRlbnQudHN4IiwiL3RzL2NhcmQvZm9vdGVyLnRzeCIsIi90cy9jYXJkL2ltYWdlLnRzeCIsIi90cy9jYXJkL2luZGV4LnRzeCIsIi90cy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvY29udGVudC1lZGl0YWJsZS9pbmRleC50c3giLCIvdHlwZXMudHMiLCIvdHMvY29udGVudC1lZGl0YWJsZS91c2UtY29udGFpbmVyLnRzeCIsIi90cy9lbXB0eS50c3giLCIvdHMvZW50aXR5LWltYWdlLnRzeCIsIi90cy9lcnJvci1yZW5kZXJlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLWNvdW50ZXIudHN4IiwiL3RzL2hlYWRlci1jYXJkL2hlYWRlci10aXRsZS50c3giLCIvdHMvaGVhZGVyLWNhcmQvaW5kZXgudHN4IiwiL3RzL2xpc3QtY29udGFpbmVyLnRzeCIsIi90cy9ub3QtZm91bmQudHN4IiwiL3RzL3BhZ2UvY29udGFpbmVyLnRzeCIsIi90cy9wYWdlL2xvYWRlci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcHJlLWxvYWQudHN4IiwiL3RzL3Byb2Nlc3MtYnV0dG9uLnRzeCIsIi90cy9yb3RhdGluZy1tZXNzYWdlLnRzeCIsIi90cy9za2VsZXRvbi10ZXh0LnRzeCIsIi90cy9zdWItZGl2aWRlci50c3giLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVyxTQUFVRSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEVBQUUsR0FBRztVQUFNLENBQTBCO1lBQ3pHLE1BQU1DLFNBQVMsR0FBRyxJQUFBTCxhQUFBLENBQUFNLE1BQU0sRUFBQ0YsRUFBRSxDQUFDO1lBQzVCLE9BQ0NOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNILFNBQVM7Y0FDVEksTUFBTTtjQUNOUCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJRLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNS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