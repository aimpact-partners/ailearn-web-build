System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.13/config", "pragmate-ui@1.0.0-beta.6/icons", "pragmate-ui@1.0.0-beta.6/form", "@aimpact/ailearn-app@0.1.13/components/icons", "pragmate-ui@1.0.0-beta.6/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/image", "pragmate-ui@1.0.0-beta.6/base", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/empty", "pragmate-ui@1.0.0-beta.6/alert", "js-confetti@0.12.0", "driver.js@1.3.1", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.6/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, AnimatedContainer, ActivityAudio, ChatPreload, ActivityHeader, AIButton, AIIconButton, AudioPlayer, Battery, DeleteConfirmButton, DeleteConfirmIconButton, CardContent, CardFooter, CardImage, Card, ContentEditable, CoinsModal, OwnerImage, RequestCreditsForm, EmptyCard, EntityImage, ErrorRenderer, HeaderCounter, HeaderTitle, HeaderCard, useConfetti, useDriverTour, useTextsCallback, AppLoader, PreloadScreen, ConfirmDeleteElement, PageLoader, PageContainer, ProcessContainer, PageTitle, PageSubtitle, ProcessButton, ProcessIconButton, RadioButton, RadioGroup, SkeletonText, TourStep, UserData, __beyond_pkg, hmr;
  _export({
    AnimatedContainer: void 0,
    ActivityAudio: void 0,
    ChatPreload: void 0,
    ActivityHeader: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    AudioPlayer: void 0,
    Battery: void 0,
    DeleteConfirmButton: void 0,
    DeleteConfirmIconButton: void 0,
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
    ConfirmDeleteElement: void 0,
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
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_9 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Image) {
      dependency_10 = _pragmateUi100Beta6Image;
    }, function (_pragmateUi100Beta6Base) {
      dependency_11 = _pragmateUi100Beta6Base;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_12 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Empty) {
      dependency_13 = _pragmateUi100Beta6Empty;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_14 = _pragmateUi100Beta6Alert;
    }, function (_jsConfetti2) {
      dependency_15 = _jsConfetti2;
    }, function (_driverJs) {
      dependency_16 = _driverJs;
    }, function (_beyondJsKernel019Texts) {
      dependency_17 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta6Spinner) {
      dependency_18 = _pragmateUi100Beta6Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['@aimpact/ailearn-app/config', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/form', dependency_6], ['@aimpact/ailearn-app/components/icons', dependency_7], ['pragmate-ui/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/image', dependency_10], ['pragmate-ui/base', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/alert', dependency_14], ['js-confetti', dependency_15], ['driver.js', dependency_16], ['@beyond-js/kernel/texts', dependency_17], ['pragmate-ui/spinner', dependency_18]]);
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

      /****************************************
      INTERNAL MODULE: ./buttons/confirm-button
      ****************************************/

      ims.set('./buttons/confirm-button', {
        hash: 1273942985,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteConfirmButton = DeleteConfirmButton;
          var React = require("react");
          var _deleteModal = require("../modals/delete-modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DeleteConfirmButton({
            icon = 'delete',
            onConfirm,
            children,
            variant = 'primary',
            ...props
          }) {
            const [show, setShowModal] = React.useState(false);
            const toggleModal = () => setShowModal(!show);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/i18n');
            const onClick = event => {
              event.stopPropagation();
              toggleModal();
            };
            if (!ready) return React.createElement(_components.Button, {
              variant: variant,
              ...props,
              onClick: onConfirm,
              disabled: true
            }, "\u00A0\u00A0\u00A0\u00A0");
            const handleConfirm = async () => {
              await onConfirm();
            };
            const label = children || texts.actions.delete;
            return React.createElement(React.Fragment, null, React.createElement(_components.Button, {
              variant: variant,
              icon: icon,
              ...props,
              onClick: onClick
            }, label), React.createElement(_deleteModal.ConfirmDeleteElement, {
              show: show,
              onConfirm: handleConfirm,
              onClose: toggleModal
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./buttons/confirm-icon-button
      *********************************************/

      ims.set('./buttons/confirm-icon-button', {
        hash: 1387630806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteConfirmIconButton = DeleteConfirmIconButton;
          var React = require("react");
          var _deleteModal = require("../modals/delete-modal");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function DeleteConfirmIconButton({
            icon,
            onConfirm
          }) {
            const [show, setShowModal] = React.useState(false);
            const toggleModal = () => setShowModal(!show);
            const onClick = event => {
              event.stopPropagation();
              toggleModal();
            };
            const handleConfirm = async () => {
              await onConfirm();
            };
            return React.createElement(React.Fragment, null, React.createElement(_icons.IconButton, {
              className: "circle",
              icon: icon,
              onClick: onClick
            }), React.createElement(_deleteModal.ConfirmDeleteElement, {
              show: show,
              onConfirm: handleConfirm,
              onClose: toggleModal
            }));
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

      /*************************************
      INTERNAL MODULE: ./modals/delete-modal
      *************************************/

      ims.set('./modals/delete-modal', {
        hash: 3710876931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmDeleteElement = ConfirmDeleteElement;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function ConfirmDeleteElement({
            show,
            onConfirm,
            onClose
          }) {
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/i18n');
            if (!show || !ready) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onClose: onClose,
              btnCancel: {
                label: texts.actions.cancel
              },
              btnConfirm: {
                label: texts.actions.confirm
              },
              onConfirm: onConfirm,
              onCancel: onClose
            }, _react.default.createElement("h3", null, texts.deleteModal.title), _react.default.createElement("p", null, texts.deleteModal.description)));
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
        "im": "./buttons/confirm-button",
        "from": "DeleteConfirmButton",
        "name": "DeleteConfirmButton"
      }, {
        "im": "./buttons/confirm-icon-button",
        "from": "DeleteConfirmIconButton",
        "name": "DeleteConfirmIconButton"
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
        "im": "./modals/delete-modal",
        "from": "ConfirmDeleteElement",
        "name": "ConfirmDeleteElement"
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
        (require || prop === 'DeleteConfirmButton') && _export("DeleteConfirmButton", DeleteConfirmButton = require ? require('./buttons/confirm-button').DeleteConfirmButton : value);
        (require || prop === 'DeleteConfirmIconButton') && _export("DeleteConfirmIconButton", DeleteConfirmIconButton = require ? require('./buttons/confirm-icon-button').DeleteConfirmIconButton : value);
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
        (require || prop === 'ConfirmDeleteElement') && _export("ConfirmDeleteElement", ConfirmDeleteElement = require ? require('./modals/delete-modal').ConfirmDeleteElement : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiQWN0aXZpdHlBdWRpbyIsInNyYyIsImNvbnRyb2xzIiwicHJlbG9hZCIsIl9lbXB0eSIsIl9pY29ucyIsIl9mb3JtIiwiQ2hhdFByZWxvYWQiLCJvbkNsaWNrIiwiRW1wdHlDYXJkIiwiVGV4dGFyZWEiLCJkaXNhYmxlZCIsIkljb25CdXR0b24iLCJpY29uIiwiQWN0aXZpdHlIZWFkZXIiLCJ0eXBlIiwidGl0bGUiLCJjbHMiLCJBcHBJY29uIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJwcm9wcyIsIkJ1dHRvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsImF0dHJzIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInRhcmdldCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsIkJhdHRlcnkiLCJwZXJjZW50Iiwic3R5bGUiLCJSZWFjdCIsIl9kZWxldGVNb2RhbCIsIl9ob29rcyIsIkRlbGV0ZUNvbmZpcm1CdXR0b24iLCJvbkNvbmZpcm0iLCJ2YXJpYW50Iiwic2hvdyIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJyZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNvbmZpcm0iLCJsYWJlbCIsImFjdGlvbnMiLCJkZWxldGUiLCJGcmFnbWVudCIsIkNvbmZpcm1EZWxldGVFbGVtZW50Iiwib25DbG9zZSIsIkRlbGV0ZUNvbmZpcm1JY29uQnV0dG9uIiwiQ2FyZENvbnRlbnQiLCJvcHRpb24iLCJzaW1wbGUiLCJDYXJkRm9vdGVyIiwiX2ltYWdlIiwiQ2FyZEltYWdlIiwiYWx0IiwiSW1hZ2UiLCJfZW50aXR5SW1hZ2UiLCJDYXJkIiwibGluayIsImRhdGEiLCJpdGVtIiwiQ29udGFpbmVyIiwiTGluayIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiaHJlZiIsImNsc0NhcmQiLCJnbG9iYWxUaGlzIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiRW50aXR5SW1hZ2UiLCJwaWN0dXJlIiwiX3VzZUNvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY29udGVudCIsInBsYWNlaG9sZGVyIiwibGluZUJyZWFrIiwiZWRpdGFibGUiLCJuYW1lIiwiQ29udHJvbCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudFJlZiIsInZhbHVlIiwidXNlQ2xpY2tDb250YWluZXIiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiY29udHJvbENscyIsIm9yaWdpbmFsIiwic2V0T3JpZ2luYWwiLCJoYW5kbGVQYXN0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4ZWNDb21tYW5kIiwiaGFuZGxlS2V5RG93biIsImtleSIsIm9uQmx1ciIsImN1cnJlbnRUYXJnZXQiLCJ0ZXh0Q29udGVudCIsInJlcGxhY2UiLCJzcGVjcyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIm9uUGFzdGUiLCJvbktleURvd24iLCJJY29uIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiaXNPdXRTaWRlIiwic2V0VmFsdWUiLCJlZGl0ZWQiLCJjb250ZW50VmFsdWUiLCJ0b1Nob3ciLCJlbnN1cmUiLCJoYW5kbGVDbGljayIsImFuaW1hdGlvbnMiLCJzbGlkZURvd24iLCJ5IiwiZmFkZUluVXBmYWRlT3V0TGVmdCIsIngiLCJfbW9kYWwiLCJfcmVxdWVzdENyZWRpdHMiLCJDb2luc01vZGFsIiwib3duZXIiLCJnbG9iYWxUZXh0cyIsIm9uQ29uc3VtZSIsIk1vZGFsIiwiUmVxdWVzdENyZWRpdHNGb3JtIiwib25TdWNjZXNzIiwib25DYW5jZWwiLCJPd25lckltYWdlIiwicGhvdG9VcmwiLCJfZXJyb3JSZW5kZXJlciIsIl9haUJ1dHRvbiIsIl9wcm9jZXNzQ29udGFpbmVyIiwiX2FuaW1hdGlvbnMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImFjdGlvblRleHRzIiwicmVxdWVzdENyZWRpdHMiLCJlcnJvcnMiLCJhbnN3ZXIiLCJzdGF0dXMiLCJjb2RlIiwiRXJyb3IiLCJsb2ciLCJhbGVydHMiLCJub0NyZWRpdHMiLCJkZXRhaWxUZXh0IiwiZGV0YWlsIiwiaW50ZXJhY3RpdmUiLCJkaXYiLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJvd25lckRlc2NyaXB0aW9uIiwiYWN0aW9uIiwiYm9yZGVyZWQiLCJjYW5jZWwiLCJjb250aW51ZSIsIlByb2Nlc3NDb250YWluZXIiLCJkZXNjcmlwdGlvbiIsIkVtcHR5IiwicmF0aW8iLCJlbnRpdHkiLCJzaXplIiwiX2FsZXJ0IiwiQWxlcnQiLCJIZWFkZXJDb3VudGVySXRlbSIsImluZGV4IiwiU3RhdHVzSGVhZGVyQ29udGVudCIsIkhlYWRlckNvdW50ZXIiLCJsaXN0IiwicmVuZGVyZWRJdGVtcyIsIm1hcCIsIkhlYWRlclRpdGxlIiwiX2hlYWRlckNvdW50ZXIiLCJfaGVhZGVyVGl0bGUiLCJIZWFkZXJDYXJkIiwiaW1hZ2UiLCJfanNDb25mZXR0aSIsInVzZUNvbmZldHRpIiwiY29uZmV0dGlOdW1iZXIiLCJjb25mZXR0aUNvbG9ycyIsImVtb2ppcyIsImVtb2ppU2l6ZSIsImpzQ29uZmV0dGkiLCJhZGRDb25mZXR0aSIsIl9kcml2ZXIiLCJ1c2VEcml2ZXJUb3VyIiwic2F3IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsInN0ZXBzIiwiZm9yRWFjaCIsImRhdGFzZXQiLCJwdXNoIiwiZWxlbWVudCIsInBvcG92ZXIiLCJvYmoiLCJkcml2ZXIiLCJwb3BvdmVyQ2xhc3MiLCJvbk5leHRDbGljayIsImhhc05leHRTdGVwIiwiZGVzdHJveSIsIm1vdmVOZXh0IiwiZHJpdmUiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsIm9uIiwiaXNSZWFkeSIsIkFwcExvYWRlciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb25maXJtTW9kYWwiLCJidG5DYW5jZWwiLCJidG5Db25maXJtIiwiY29uZmlybSIsImRlbGV0ZU1vZGFsIiwiX2xvYWRlciIsIlBhZ2VMb2FkZXIiLCJQYWdlQ29udGFpbmVyIiwiU0laRVMiLCJzbSIsImNsc1NpemUiLCJfc2tlbGV0b25UZXh0IiwiUGFnZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0IiwiUGFnZVN1YnRpdGxlIiwiUHJvY2Vzc0J1dHRvbiIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwiUHJvY2Vzc0ljb25CdXR0b24iLCJBcHBJY29uQnV0dG9uIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsInJlc3QiLCJpbnB1dFJlZiIsImhhbmRsZUxhYmVsQ2hhbmdlIiwiY2hhbmdlRXZlbnQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGlzcGF0Y2hFdmVudCIsInNjYWxlIiwiY2hlY2tlZCIsIlJhZGlvR3JvdXAiLCJDaGlsZHJlbiIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJyYWRpbyIsImRpc3BsYXkiLCJzdG9wQW5pbWF0aW9uIiwiVG91clN0ZXAiLCJrZXlzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleE9mIiwiVXNlckRhdGEiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdGllcy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9hY3Rpdml0aWVzL2F1ZGlvLnRzeCIsIi90cy9hY3Rpdml0aWVzL2NoYXQtcHJlbG9hZC50c3giLCIvdHMvYWN0aXZpdGllcy9oZWFkZXIudHN4IiwiL3RzL2FpLWJ1dHRvbi50c3giLCIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvYXVkaW8tcGxheWVyLnRzeCIsIi90cy9iYXR0ZXJ5LnRzeCIsIi90cy9idXR0b25zL2NvbmZpcm0tYnV0dG9uLnRzeCIsIi90cy9idXR0b25zL2NvbmZpcm0taWNvbi1idXR0b24udHN4IiwiL3RzL2NhcmQvY29udGVudC50c3giLCIvdHMvY2FyZC9mb290ZXIudHN4IiwiL3RzL2NhcmQvaW1hZ2UudHN4IiwiL3RzL2NhcmQvaW5kZXgudHN4IiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvaW5kZXgudHN4IiwiL3R5cGVzLnRzIiwiL3RzL2NvbnRlbnQtZWRpdGFibGUvdXNlLWNvbnRhaW5lci50c3giLCIvdHMvY3JlZGl0cy9haS1idXR0b24udHN4IiwiL3RzL2NyZWRpdHMvYW5pbWF0aW9ucy50c3giLCIvdHMvY3JlZGl0cy9jb2lucy1tb2RhbC50c3giLCIvdHMvY3JlZGl0cy9pbWFnZS50c3giLCIvdHMvY3JlZGl0cy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL2VtcHR5LnRzeCIsIi90cy9lbnRpdHktaW1hZ2UudHN4IiwiL3RzL2Vycm9yLXJlbmRlcmVyLnRzeCIsIi90cy9oZWFkZXItY2FyZC9oZWFkZXItY291bnRlci50c3giLCIvdHMvaGVhZGVyLWNhcmQvaGVhZGVyLXRpdGxlLnRzeCIsIi90cy9oZWFkZXItY2FyZC9pbmRleC50c3giLCIvdHMvaG9va3MvdXNlLWNvbmZldHRpLnRzeCIsIi90cy9ob29rcy91c2UtZHJpdmVyLXRvdXIgY29weS50cyIsIi90cy9ob29rcy91c2UtZHJpdmVyLXRvdXIudHMiLCIvdHMvaG9va3MvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL2xvYWRlcnMvbG9hZGVyLnRzeCIsIi90cy9sb2FkZXJzL3ByZS1sb2FkLnRzeCIsIi90cy9tb2RhbHMvZGVsZXRlLW1vZGFsLnRzeCIsIi90cy9wYWdlL2xvYWRlci50c3giLCIvdHMvcGFnZS9wYWdlLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcGFnZS90aXRsZS50c3giLCIvdHMvcHJvY2Vzcy1idXR0b24udHN4IiwiL3RzL3JhZGlvL2luZGV4LnRzeCIsIi90cy9yYWRpby9yYWRpby1ncm91cC50c3giLCIvdHMvc2tlbGV0b24tdGV4dC50c3giLCIvdHMvdG91ci1zdGVwLnRzeCIsIi90cy91c2VyLWRhdGEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1PO1VBQVcsU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUN6RyxNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsU0FBVWtCLGFBQWFBLENBQUM7WUFBRUM7VUFBRyxDQUFFO1lBQy9DLElBQUksQ0FBQ0EsR0FBRyxFQUFFLE9BQU8sSUFBSTtZQUNyQixPQUNDcEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWMsR0FDNUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU9XLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDO1lBQVUsR0FDakN0QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRVSxHQUFHLEVBQUVBO1lBQUcsRUFBSSxFLG1EQUViLENBQ0g7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQSxJQUFBcEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNCLE1BQUEsR0FBQXRCLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUF3QixLQUFBLEdBQUF4QixPQUFBO1VBRU87VUFBVSxTQUFVeUIsV0FBV0EsQ0FBQztZQUFFQztVQUFPLENBQUU7WUFDakQsT0FDQzNCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF5QixHQUN2Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsTUFBQSxDQUFBSyxTQUFTO2NBQUN4QixTQUFTLEVBQUM7WUFBMEIsRUFBRyxFQUNsREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDLGtCQUFrQjtjQUFDdUIsT0FBTyxFQUFFQTtZQUFPLEdBQ2pEM0IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlCLEdBQ2hDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZSxLQUFBLENBQUFJLFFBQVE7Y0FBQ0MsUUFBUTtjQUFDMUIsU0FBUyxFQUFDO1lBQWlCLEVBQUcsRUFDakRKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1OLFNBQVMsRUFBQztZQUFpQyxHQUNoREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBTyxVQUFVO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNGLFFBQVEsRUFBRTtZQUFJLEVBQUksQ0FDcEMsQ0FDRCxDQUNGLENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTlCLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRU87VUFBVSxTQUFVZ0MsY0FBY0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDLEtBQUs7WUFBRUgsSUFBSTtZQUFFM0I7VUFBUSxDQUFFO1lBQ3hFLE1BQU0rQixHQUFHLEdBQUcsb0NBQW9DRixJQUFJLEVBQUU7WUFDdEQsT0FDQ2xDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFrQixHQUNoQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFFZ0M7WUFBRyxHQUNyQnBDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1OLFNBQVMsRUFBQztZQUFlLEdBQzlCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxNQUFBLENBQUFhLE9BQU87Y0FBQ0wsSUFBSSxFQUFFQTtZQUFJLEVBQUksRUFDdkJoQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUIsS0FBSyxDQUFNLENBQ1YsRUFDTjlCLFFBQVEsQ0FDRCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUFxQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQXNDLE9BQUEsR0FBQXRDLE9BQUE7VUFFTztVQUFVLFNBQVV1QyxRQUFRQSxDQUFDO1lBQUVuQyxRQUFRO1lBQUUsR0FBR29DO1VBQUssQ0FBRTtZQUN6RCxPQUNDekMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQUksTUFBTTtjQUFBLEdBQUtELEtBQUs7Y0FBRVQsSUFBSSxFQUFFUixNQUFBLENBQUFtQixLQUFLLENBQUNDO1lBQU8sR0FDcEN2QyxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVXdDLFlBQVlBLENBQUM7WUFBRXhDLFFBQVE7WUFBRXNCLE9BQU87WUFBRSxHQUFHYztVQUFLLENBQUU7WUFDdEU7WUFDQSxPQUNDekMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzZCLE9BQUEsQ0FBQVIsVUFBVTtjQUFBLEdBQUtVLEtBQUs7Y0FBRVQsSUFBSSxFQUFFUixNQUFBLENBQUFtQixLQUFLLENBQUNDO1lBQU8sR0FDeEN2QyxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU87VUFBVSxTQUFVRSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEVBQUUsR0FBRyxNQUFNO1lBQUUsR0FBR21DO1VBQUssQ0FBMEI7WUFDbEgsTUFBTWxDLFNBQVMsR0FBRyxJQUFBTCxhQUFBLENBQUFNLE1BQU0sRUFBQ0YsRUFBRSxDQUFDO1lBQzVCLE1BQU13QyxLQUFLLEdBQUc7Y0FDYmhDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RKLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREksSUFBSSxFQUFFO2dCQUNMRixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiRSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RMLE9BQU8sRUFBRTtlQUNUO2NBQ0QsR0FBRzRCO2FBQ0g7WUFDRCxPQUNDekMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsU0FBUztjQUFDSSxNQUFNO2NBQUNQLFNBQVMsRUFBRUEsU0FBUztjQUFBLEdBQU0wQztZQUFLLEdBQy9DekMsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUVPLGFBSFA7O1VBR21CLFNBQVU4QyxXQUFXQSxDQUFDO1lBQUUzQixHQUFHO1lBQUU0QjtVQUFHLENBQUU7WUFDcEQsSUFBSSxDQUFDNUIsR0FBRyxJQUFJLENBQUM0QixHQUFHLEVBQUU7Y0FDakJDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2NBQ3BDLE9BQU8sSUFBSTs7WUFHWjlCLEdBQUcsR0FBRzRCLEdBQUcsSUFBSUcsR0FBRyxDQUFDQyxlQUFlLENBQUNoQyxHQUFHLENBQUM7WUFDckMsTUFBTWlDLEdBQUcsR0FBR3JELE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUU5QnRELE1BQUEsQ0FBQVMsT0FBSyxDQUFDOEMsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsTUFBTSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FDMUJELE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsZ0JBQWdCLEVBQUUsTUFBSztnQkFDOUMsSUFBSUYsTUFBTSxDQUFDeEMsUUFBUSxLQUFLMkMsUUFBUSxFQUFFO2tCQUNqQ0gsTUFBTSxDQUFDSSxXQUFXLEdBQUcsS0FBSztrQkFDMUJKLE1BQU0sQ0FBQ0ssWUFBWSxHQUFHLE1BQUs7b0JBQzFCTCxNQUFNLENBQUNLLFlBQVksR0FBRyxJQUFJO29CQUMxQkwsTUFBTSxDQUFDSSxXQUFXLEdBQUcsQ0FBQztrQkFDdkIsQ0FBQzs7Y0FFSCxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQ3hDLEdBQUcsQ0FBQyxDQUFDO1lBRVQsSUFBSSxDQUFDQSxHQUFHLEVBQUUsT0FBTyxJQUFJO1lBRXJCLE9BQ0NwQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYyxHQUM1QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBT1csUUFBUTtjQUFDQyxPQUFPLEVBQUM7WUFBVSxHQUNqQ3RCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFVLEdBQUcsRUFBRUEsR0FBRztjQUFFYyxJQUFJLEVBQUMsWUFBWTtjQUFDbUIsR0FBRyxFQUFFQTtZQUFHLEVBQUksRSxtREFFekMsQ0FDSDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBckQsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVSxTQUFVNkQsT0FBT0EsQ0FBQztZQUFFQyxPQUFPLEdBQUc7VUFBRSxDQUFFO1lBQ2xELE1BQU1WLEdBQUcsR0FBR3JELE1BQUEsQ0FBQVMsT0FBSyxDQUFDNkMsTUFBTSxDQUFpQixJQUFJLENBQUM7WUFFOUN0RCxNQUFBLENBQUFTLE9BQUssQ0FBQzhDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCRixHQUFHLENBQUNJLE9BQU8sQ0FBQ08sS0FBSyxDQUFDOUMsS0FBSyxHQUFHLEdBQUc2QyxPQUFPLEdBQUc7WUFDeEMsQ0FBQyxFQUFFLENBQUNBLE9BQU8sQ0FBQyxDQUFDO1lBQ2IsTUFBTTNCLEdBQUcsR0FBRyxjQUFjMkIsT0FBTyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUdBLE9BQU8sR0FBRyxFQUFFLEdBQUcsUUFBUSxHQUFHLE1BQU0sRUFBRTtZQUVuRixPQUNDL0QsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQW1CLEdBQ2pDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBTyxHQUNyQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBSzJDLEdBQUcsRUFBRUEsR0FBRztjQUFFakQsU0FBUyxFQUFFZ0M7WUFBRyxFQUV2QixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkEsSUFBQTZCLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUUsWUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFrRSxNQUFBLEdBQUFsRSxPQUFBO1VBQ0EsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFFTztVQUFVLFNBQVVtRSxtQkFBbUJBLENBQUM7WUFDOUNwQyxJQUFJLEdBQUcsUUFBUTtZQUNmcUMsU0FBUztZQUNUaEUsUUFBUTtZQUNSaUUsT0FBTyxHQUFHLFNBQVM7WUFDbkIsR0FBRzdCO1VBQUssQ0FDUjtZQUNBLE1BQU0sQ0FBQzhCLElBQUksRUFBRUMsWUFBWSxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNsRCxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUYsWUFBWSxDQUFDLENBQUNELElBQUksQ0FBQztZQUM3QyxNQUFNLENBQUNJLEtBQUssRUFBRUMsS0FBSyxDQUFDLEdBQUcsSUFBQVQsTUFBQSxDQUFBVSxRQUFRLEVBQUMsMkJBQTJCLENBQUM7WUFFNUQsTUFBTWxELE9BQU8sR0FBR21ELEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJMLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFFRCxJQUFJLENBQUNDLEtBQUssRUFDVCxPQUNDVixLQUFBLENBQUF2RCxhQUFBLENBQUM0QixXQUFBLENBQUFJLE1BQU07Y0FBQzRCLE9BQU8sRUFBRUEsT0FBTztjQUFBLEdBQU03QixLQUFLO2NBQUVkLE9BQU8sRUFBRTBDLFNBQVM7Y0FBRXZDLFFBQVE7WUFBQSw4QkFFeEQ7WUFHWCxNQUFNa0QsYUFBYSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUNoQyxNQUFNWCxTQUFTLEVBQUU7WUFDbEIsQ0FBQztZQUNELE1BQU1ZLEtBQUssR0FBRzVFLFFBQVEsSUFBSXVFLEtBQUssQ0FBQ00sT0FBTyxDQUFDQyxNQUFNO1lBRTlDLE9BQ0NsQixLQUFBLENBQUF2RCxhQUFBLENBQUF1RCxLQUFBLENBQUFtQixRQUFBLFFBQ0NuQixLQUFBLENBQUF2RCxhQUFBLENBQUM0QixXQUFBLENBQUFJLE1BQU07Y0FBQzRCLE9BQU8sRUFBRUEsT0FBTztjQUFFdEMsSUFBSSxFQUFFQSxJQUFJO2NBQUEsR0FBTVMsS0FBSztjQUFFZCxPQUFPLEVBQUVBO1lBQU8sR0FDL0RzRCxLQUFLLENBQ0UsRUFDVGhCLEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ3dELFlBQUEsQ0FBQW1CLG9CQUFvQjtjQUFDZCxJQUFJLEVBQUVBLElBQUk7Y0FBRUYsU0FBUyxFQUFFVyxhQUFhO2NBQUVNLE9BQU8sRUFBRVo7WUFBVyxFQUFJLENBQ2xGO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFULEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUUsWUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRU87VUFBVSxTQUFVc0YsdUJBQXVCQSxDQUFDO1lBQUV2RCxJQUFJO1lBQUVxQztVQUFTLENBQUU7WUFDckUsTUFBTSxDQUFDRSxJQUFJLEVBQUVDLFlBQVksQ0FBQyxHQUFHUCxLQUFLLENBQUNRLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbEQsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLFlBQVksQ0FBQyxDQUFDRCxJQUFJLENBQUM7WUFDN0MsTUFBTTVDLE9BQU8sR0FBR21ELEtBQUssSUFBRztjQUN2QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJMLFdBQVcsRUFBRTtZQUNkLENBQUM7WUFDRCxNQUFNTSxhQUFhLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ2hDLE1BQU1YLFNBQVMsRUFBRTtZQUNsQixDQUFDO1lBQ0QsT0FDQ0osS0FBQSxDQUFBdkQsYUFBQSxDQUFBdUQsS0FBQSxDQUFBbUIsUUFBQSxRQUNDbkIsS0FBQSxDQUFBdkQsYUFBQSxDQUFDYyxNQUFBLENBQUFPLFVBQVU7Y0FBQzNCLFNBQVMsRUFBQyxRQUFRO2NBQUM0QixJQUFJLEVBQUVBLElBQUk7Y0FBRUwsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDL0RzQyxLQUFBLENBQUF2RCxhQUFBLENBQUN3RCxZQUFBLENBQUFtQixvQkFBb0I7Y0FBQ2QsSUFBSSxFQUFFQSxJQUFJO2NBQUVGLFNBQVMsRUFBRVcsYUFBYTtjQUFFTSxPQUFPLEVBQUVaO1lBQVcsRUFBSSxDQUNsRjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBMUUsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVdUYsV0FBV0EsQ0FBQztZQUFFbkYsUUFBUTtZQUFFRCxTQUFTO1lBQUVxRixNQUFNLEdBQUcsS0FBSztZQUFFQztVQUFNLENBQUU7WUFDdEYsTUFBTXRELEdBQUcsR0FBRyx5QkFBeUJxRCxNQUFNLElBQUlyRixTQUFTLElBQUksSUFBSUEsU0FBUyxFQUFFLElBQUlzRixNQUFNLElBQUksWUFBWSxFQUFFO1lBRXZHLE9BQU8xRixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQztZQUFHLEdBQUcvQixRQUFRLENBQU87VUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBVyxTQUFVMEYsVUFBVUEsQ0FBQztZQUFFdEYsUUFBUTtZQUFFRCxTQUFTO1lBQUVzRjtVQUFNLENBQUU7WUFDckUsTUFBTXRELEdBQUcsR0FBRyxnQkFBZ0JoQyxTQUFTLElBQUksSUFBSUEsU0FBUyxFQUFFLElBQUlzRixNQUFNLElBQUksWUFBWSxFQUFFO1lBQ3BGLE9BQU8xRixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUVnQztZQUFHLEdBQUcvQixRQUFRLENBQVU7VUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEEsSUFBQXVGLE1BQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFPTztVQUFVLFNBQVU0RixTQUFTQSxDQUFDO1lBQUV6RSxHQUFHO1lBQUVoQixTQUFTO1lBQUUwRixHQUFHO1lBQUV6RjtVQUFRLENBQWU7WUFDbEYsTUFBTStCLEdBQUcsR0FBRyxhQUFhaEMsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUUzRCxPQUNDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0YsTUFBQSxDQUFBRyxLQUFLO2NBQUMzRSxHQUFHLEVBQUVBLEdBQUc7Y0FBRTBFLEdBQUcsRUFBRUEsR0FBRztjQUFFMUYsU0FBUyxFQUFFZ0M7WUFBRyxHQUN2Qy9CLFFBQVEsQ0FDRjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFpQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStGLFlBQUEsR0FBQS9GLE9BQUE7VUFFTztVQUFVLFNBQVVnRyxJQUFJQSxDQUFDO1lBQUVDLElBQUk7WUFBRUMsSUFBSSxFQUFFQyxJQUFJO1lBQUUvRixRQUFRO1lBQUV5QixRQUFRO1lBQUU0RCxNQUFNO1lBQUV0RixTQUFTO1lBQUU4QjtVQUFJLENBQUU7WUFDaEcsTUFBTW1FLFNBQVMsR0FBRyxDQUFDdkUsUUFBUSxJQUFJb0UsSUFBSSxHQUFHNUQsV0FBQSxDQUFBZ0UsSUFBSSxHQUFHLE1BQU07WUFDbkQsTUFBTXhELEtBQUssR0FBR2hCLFFBQVEsSUFBSSxDQUFDeUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUc7Y0FBRU8sSUFBSSxFQUFFUCxJQUFJO2NBQUU5RixTQUFTLEVBQUU7WUFBVSxDQUFFO1lBQzNHLElBQUlzRyxPQUFPLEdBQUcsUUFBUXRHLFNBQVMsRUFBRTtZQUVqQyxJQUFJMEIsUUFBUSxFQUFFNEUsT0FBTyxJQUFJLGNBQWM7WUFDdkMsSUFBSWhCLE1BQU0sRUFBRWdCLE9BQU8sSUFBSSxZQUFZO1lBQ25DLE1BQU0vRSxPQUFPLEdBQUdBLENBQUEsS0FBSztjQUNwQmdGLFVBQVUsRUFBRUMsY0FBYyxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO1lBQzlELENBQUM7WUFFRCxPQUNDN0csTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLFNBQVM7Y0FBQSxHQUFLdkQsS0FBSztjQUFFbkIsT0FBTyxFQUFFQTtZQUFPLEdBQ3JDM0IsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFc0c7WUFBTyxHQUNyQk4sSUFBSSxJQUFJcEcsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NGLFlBQUEsQ0FBQWMsV0FBVztjQUFDMUcsU0FBUyxFQUFDLFdBQVc7Y0FBQ2dCLEdBQUcsRUFBRWdGLElBQUksQ0FBQ1csT0FBTztjQUFFakIsR0FBRyxFQUFFTSxJQUFJLENBQUNqRSxLQUFLO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzdGN0IsUUFBUSxDQUNKLENBQ0s7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXVCLE1BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBK0csYUFBQSxHQUFBL0csT0FBQTtVQUdPO1VBQVcsTUFBTWdILGVBQWUsR0FBb0NBLENBQUM7WUFDM0VDLE1BQU07WUFDTkMsUUFBUSxHQUFHLEtBQUs7WUFDaEI3RyxFQUFFLEdBQUcsS0FBSztZQUNWRixTQUFTO1lBQ1RnSCxPQUFPO1lBQ1BDLFdBQVc7WUFDWEMsU0FBUyxHQUFHLElBQUk7WUFDaEJDLFFBQVEsR0FBRyxJQUFJO1lBQ2ZDO1VBQUksQ0FDSixLQUFJO1lBQ0osTUFBTUMsT0FBTyxHQUFHbkgsRUFBRSxJQUFJNkcsUUFBUTtZQUM5QixNQUFNLENBQUNPLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQTNILE1BQUEsQ0FBQXlFLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFFbkQsTUFBTTtjQUFFcEIsR0FBRyxFQUFFdUUsVUFBVTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBYixhQUFBLENBQUFjLGlCQUFpQixFQUFDVixPQUFPLEVBQUVDLFdBQVcsRUFBRUssVUFBVSxDQUFDO1lBRXRGLElBQUksQ0FBQ0gsUUFBUSxFQUFFO2NBQ2QsT0FBT3ZILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxPQUFPO2dCQUFDcEUsR0FBRyxFQUFFdUU7Y0FBVSxHQUFHQyxLQUFLLENBQVc7O1lBR25ELE1BQU1FLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCSixhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO2NBQzFCLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2dCQUNoQk0sVUFBVSxDQUFDLE1BQUs7a0JBQ2YsTUFBTUMsRUFBRSxHQUFHTCxVQUFVLENBQUNuRSxPQUFPO2tCQUU3QixJQUFJd0UsRUFBRSxFQUFFO29CQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7b0JBQ3BDRixLQUFLLENBQUNHLGtCQUFrQixDQUFDSixFQUFFLENBQUM7b0JBQzVCQyxLQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUV2QixNQUFNQyxTQUFTLEdBQUc1QixVQUFVLENBQUM2QixZQUFZLEVBQUU7b0JBRTNDLElBQUlELFNBQVMsRUFBRTtzQkFDZEEsU0FBUyxDQUFDRSxlQUFlLEVBQUU7c0JBQzNCRixTQUFTLENBQUNHLFFBQVEsQ0FBQ1IsS0FBSyxDQUFDOztvQkFHMUJELEVBQUUsQ0FBQ1UsS0FBSyxFQUFFOztnQkFFWixDQUFDLEVBQUUsQ0FBQyxDQUFDOztZQUVQLENBQUM7WUFFRCxNQUFNdkcsR0FBRyxHQUFHLHVCQUF1QmhDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsTUFBTTRCLElBQUksR0FBRzBGLFVBQVUsR0FBRyxNQUFNLEdBQUcsTUFBTTtZQUN6QyxNQUFNa0IsVUFBVSxHQUFHbEIsVUFBVSxHQUFHLHVCQUF1QixHQUFHLEVBQUU7WUFDNUQsTUFBTTVFLEtBQUssR0FBRztjQUFFbkIsT0FBTyxFQUFFLENBQUMrRixVQUFVLEdBQUdLLFVBQVUsR0FBR3hCO1lBQVMsQ0FBRTtZQUMvRCxNQUFNLENBQUNzQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHOUksTUFBQSxDQUFBUyxPQUFLLENBQUNnRSxRQUFRLENBQUMyQyxPQUFPLENBQUM7WUFDdkQsTUFBTTJCLFdBQVcsR0FBSUMsQ0FBdUIsSUFBSTtjQUMvQ0EsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHRixDQUFDLENBQUNHLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQztjQUNsRGpCLFFBQVEsQ0FBQ2tCLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFSCxJQUFJLENBQUM7WUFDaEQsQ0FBQztZQUVELE1BQU1JLGFBQWEsR0FBSU4sQ0FBc0IsSUFBSTtjQUNoRCxJQUFJMUIsU0FBUyxJQUFJMEIsQ0FBQyxDQUFDTyxHQUFHLEtBQUssT0FBTyxFQUFFO2dCQUNuQ1AsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7Z0JBQ2xCO2dCQUNBOztZQUVGLENBQUM7WUFFRCxNQUFNTyxNQUFNLEdBQUcsTUFBTzFFLEtBQXVCLElBQUk7Y0FDaERBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1xQyxPQUFPLEdBQUd0QyxLQUFLLENBQUMyRSxhQUFhLENBQUNDLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUM7Y0FFNUVoQyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBRXBCLElBQUlQLE9BQU8sS0FBS3lCLFFBQVEsRUFBRTtjQUUxQixNQUFNMUMsSUFBSSxHQUFHO2dCQUNacUIsSUFBSTtnQkFDSkssS0FBSyxFQUFFVDtlQUNQO2NBQ0QsTUFBTXdDLEtBQUssR0FBaUI7Z0JBQzNCcEcsTUFBTSxFQUFFMkMsSUFBSTtnQkFDWnNELGFBQWEsRUFBRXREO2VBQ2Y7Y0FDRDJDLFdBQVcsQ0FBQzFCLE9BQU8sQ0FBQztjQUNwQixNQUFNRixNQUFNLENBQUMwQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztZQUVELE9BQ0M1SixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQyxHQUFHO2NBQUEsR0FBTVUsS0FBSztjQUFFMEcsTUFBTSxFQUFFQTtZQUFNLEdBQzdDeEosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQytHLE9BQU87Y0FDUHBFLEdBQUcsRUFBRXVFLFVBQVU7Y0FDZnhILFNBQVMsRUFBRXdJLFVBQVU7Y0FDckJpQixlQUFlLEVBQUVuQyxVQUFVO2NBQzNCb0MsOEJBQThCLEVBQUUsSUFBSTtjQUNwQ0MsT0FBTyxFQUFFckMsVUFBVSxHQUFHcUIsV0FBVyxHQUFHeEMsU0FBUztjQUM3Q3lELFNBQVMsRUFBRXRDLFVBQVUsR0FBRzRCLGFBQWEsR0FBRy9DO1lBQVMsR0FFaERzQixLQUFLLENBQ0csRUFDVjdILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUErQixHQUM3Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBeUksSUFBSTtjQUFDakksSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixDQUNEO1VBRVIsQ0FBQztVQUFDa0ksT0FBQSxDQUFBakQsZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7OztVQ3pHRjs7VUFFQWtELE1BQUEsQ0FBQUMsY0FBQSxDQUFBRixPQUFBO1lBQ0FyQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQTdILE1BQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVU2SCxpQkFBaUJBLENBQUNWLE9BQU8sRUFBRUMsV0FBVyxFQUFFSyxVQUFVLEdBQUcsS0FBSztZQUN6RSxNQUFNckUsR0FBRyxHQUFHckQsTUFBQSxDQUFBUyxPQUFLLENBQUM2QyxNQUFNLENBQWlCLElBQUksQ0FBQztZQUM5QyxNQUFNLENBQUMrRyxTQUFTLENBQUMsR0FBR3JLLE1BQUEsQ0FBQVMsT0FBSyxDQUFDZ0UsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6QyxNQUFNLENBQUNvRCxLQUFLLEVBQUV5QyxRQUFRLENBQUMsR0FBR3RLLE1BQUEsQ0FBQVMsT0FBSyxDQUFDZ0UsUUFBUSxDQUF1QztjQUFFOEYsTUFBTSxFQUFFLEtBQUs7Y0FBRW5ELE9BQU8sRUFBRTtZQUFFLENBQUUsQ0FBQztZQUM5RyxNQUFNb0QsWUFBWSxHQUFHM0MsS0FBSyxFQUFFMEMsTUFBTSxHQUFHMUMsS0FBSyxDQUFDVCxPQUFPLEdBQUdBLE9BQU87WUFFNUQsSUFBSXFELE1BQU0sR0FBRy9DLFVBQVUsR0FDcEI4QyxZQUFZLEdBQ1hBLFlBQVksR0FDWixFQUFFLEdBQ0hBLFlBQVksS0FBSyxFQUFFLElBQUlBLFlBQVksS0FBS2pFLFNBQVMsR0FDakRjLFdBQVcsR0FDWG1ELFlBQVksSUFBSW5ELFdBQVcsSUFBSSxFQUFFO1lBRXBDLE9BQU87Y0FBRWhFLEdBQUc7Y0FBRWdILFNBQVM7Y0FBRXhDLEtBQUssRUFBRTRDLE1BQU07Y0FBRUg7WUFBUSxDQUFFO1VBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQXRLLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXFDLFdBQUEsR0FBQXJDLE9BQUE7VUFFQSxJQUFBc0MsT0FBQSxHQUFBdEMsT0FBQTtVQVFPO1VBQVUsU0FBVXVDLFFBQVFBLENBQUM7WUFBRW5DLFFBQVE7WUFBRXNCLE9BQU87WUFBRStJLE1BQU07WUFBRSxHQUFHakk7VUFBSyxJQUFxQjtZQUFFaUksTUFBTSxFQUFFO1VBQUksQ0FBRTtZQUM3RyxNQUFNQyxXQUFXLEdBQUdoSixPQUFPO1lBRTNCLE9BQ0MzQixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFVCxJQUFJLEVBQUVSLE1BQUEsQ0FBQW1CLEtBQUssQ0FBQ0MsT0FBTztjQUFFakIsT0FBTyxFQUFFZ0o7WUFBVyxHQUMxRHRLLFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVd0MsWUFBWUEsQ0FBQztZQUFFeEMsUUFBUTtZQUFFc0IsT0FBTztZQUFFK0ksTUFBTTtZQUFFLEdBQUdqSTtVQUFLLElBQXFCO1lBQUVpSSxNQUFNLEVBQUU7VUFBSSxDQUFFO1lBQ2pILE1BQU1DLFdBQVcsR0FBR2hKLE9BQU87WUFDM0IsT0FDQzNCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2QixPQUFBLENBQUFSLFVBQVU7Y0FBQSxHQUFLVSxLQUFLO2NBQUVULElBQUksRUFBRVIsTUFBQSxDQUFBbUIsS0FBSyxDQUFDQyxPQUFPO2NBQUVqQixPQUFPLEVBQUVnSjtZQUFXLEdBQzlEdEssUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JPLE1BQU11SyxVQUFVLEdBQUFWLE9BQUEsQ0FBQVUsVUFBQSxHQUFHO1lBQ3pCQyxTQUFTLEVBQUU7Y0FDVmpLLE9BQU8sRUFBRTtnQkFBRWtLLENBQUMsRUFBRSxNQUFNO2dCQUFFakssT0FBTyxFQUFFO2NBQUMsQ0FBRTtjQUNsQ0MsT0FBTyxFQUFFO2dCQUFFZ0ssQ0FBQyxFQUFFLENBQUM7Z0JBQUVqSyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRSxDQUFFO2NBQzVEQyxJQUFJLEVBQUU7Z0JBQUU2SixDQUFDLEVBQUUsS0FBSztnQkFBRWpLLE9BQU8sRUFBRSxDQUFDO2dCQUFFRSxVQUFVLEVBQUU7a0JBQUVDLFFBQVEsRUFBRTtnQkFBRztjQUFFO2FBQzNEO1lBRURQLE9BQU8sRUFBRTtjQUNSRyxPQUFPLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDdkJDLE9BQU8sRUFBRTtnQkFBRWdLLENBQUMsRUFBRSxDQUFDO2dCQUFFakssT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFNkosQ0FBQyxFQUFFLEtBQUs7Z0JBQUVqSyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTthQUMzRDtZQUNEK0osbUJBQW1CLEVBQUU7Y0FDcEJuSyxPQUFPLEVBQUU7Z0JBQUVrSyxDQUFDLEVBQUUsTUFBTTtnQkFBRWpLLE9BQU8sRUFBRTtjQUFDLENBQUU7Y0FDbENDLE9BQU8sRUFBRTtnQkFBRWdLLENBQUMsRUFBRSxDQUFDO2dCQUFFakssT0FBTyxFQUFFLENBQUM7Z0JBQUVFLFVBQVUsRUFBRTtrQkFBRUMsUUFBUSxFQUFFO2dCQUFHO2NBQUUsQ0FBRTtjQUM1REMsSUFBSSxFQUFFO2dCQUFFK0osQ0FBQyxFQUFFLEtBQUs7Z0JBQUVuSyxPQUFPLEVBQUUsQ0FBQztnQkFBRUUsVUFBVSxFQUFFO2tCQUFFQyxRQUFRLEVBQUU7Z0JBQUc7Y0FBRTs7V0FFNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJELElBQUFoQixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0wsTUFBQSxHQUFBaEwsT0FBQTtVQUVBLElBQUFpTCxlQUFBLEdBQUFqTCxPQUFBO1VBWU8sV0FiUDs7VUFhaUIsU0FBVWtMLFVBQVVBLENBQUM7WUFDckNDLEtBQUs7WUFDTEMsV0FBVztZQUNYOUcsSUFBSTtZQUNKZSxPQUFPO1lBQ1BnRyxTQUFTO1lBQ1RwSixJQUFJLEdBQUc7VUFBWSxDQUNEO1lBQ2xCLElBQUksQ0FBQ3FDLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsT0FDQ3ZFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN1SyxNQUFBLENBQUFNLEtBQUs7Y0FBQ2hILElBQUk7Y0FBQ25FLFNBQVMsRUFBQyx5QkFBeUI7Y0FBQ2tGLE9BQU8sRUFBRUE7WUFBTyxHQUMvRHRGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3SyxlQUFBLENBQUFNLGtCQUFrQjtjQUNsQkMsU0FBUyxFQUFFbkcsT0FBTztjQUNsQkEsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCb0csUUFBUSxFQUFFcEcsT0FBTztjQUNqQmdHLFNBQVMsRUFBRUEsU0FBUztjQUNwQnBKLElBQUksRUFBRUEsSUFBSTtjQUNWbUosV0FBVyxFQUFFQSxXQUFXO2NBQ3hCRCxLQUFLLEVBQUVBO1lBQUssRUFDWCxDQUNLO1VBRVY7VUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDRCxJQUFBcEwsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQTJGLE1BQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBdUIsTUFBQSxHQUFBdkIsT0FBQTtVQUVPO1VBQVUsU0FBVTBMLFVBQVVBLENBQUM7WUFBRVA7VUFBSyxDQUFpRDtZQUM3RixJQUFJLENBQUNBLEtBQUssRUFBRVEsUUFBUSxFQUFFO2NBQ3JCLE9BQU81TCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDYyxNQUFBLENBQUFhLE9BQU87Z0JBQUNMLElBQUksRUFBQyxRQUFRO2dCQUFDNUIsU0FBUyxFQUFDO2NBQVcsRUFBRzs7WUFFdkQsT0FBT0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tGLE1BQUEsQ0FBQUcsS0FBSztjQUFDM0UsR0FBRyxFQUFFZ0ssS0FBSyxDQUFDUSxRQUFRO2NBQUV4TCxTQUFTLEVBQUM7WUFBUSxFQUFHO1VBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBLElBQUFKLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE0TCxjQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQTZMLFNBQUEsR0FBQTdMLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUE4TCxpQkFBQSxHQUFBOUwsT0FBQTtVQUNBLElBQUEyRixNQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQStMLFdBQUEsR0FBQS9MLE9BQUE7VUFXTztVQUFVLFNBQVV1TCxrQkFBa0JBLENBQUM7WUFDN0NsRyxPQUFPO1lBQ1ArRixXQUFXO1lBQ1hELEtBQUs7WUFDTEUsU0FBUztZQUNUSSxRQUFRO1lBQ1J4SixJQUFJLEdBQUcsWUFBWTtZQUNuQnVKO1VBQVMsQ0FDaUI7WUFDMUIsTUFBTSxDQUFDUSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbE0sTUFBQSxDQUFBUyxPQUFLLENBQUNnRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQzBILEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdwTSxNQUFBLENBQUFTLE9BQUssQ0FBQ2dFLFFBQVEsRUFBRTtZQUUxQyxNQUFNNEgsV0FBVyxHQUFHaEIsV0FBVyxDQUFDbkcsT0FBTztZQUN2QyxNQUFNTixLQUFLLEdBQUd5RyxXQUFXLENBQUNpQixjQUFjO1lBQ3hDLE1BQU1DLE1BQU0sR0FBR2xCLFdBQVcsQ0FBQ2tCLE1BQU07WUFDakNiLFFBQVEsR0FBR0EsUUFBUSxJQUFJcEcsT0FBTztZQUU5QjtZQUNBLE1BQU1qQixTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0g2SCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNTSxNQUFNLEdBQUcsTUFBTWxCLFNBQVMsRUFBRTtnQkFFaEMsSUFBSSxDQUFDa0IsTUFBTSxDQUFDQyxNQUFNLEVBQUU7a0JBQ25CLElBQUlELE1BQU0sQ0FBQ0wsS0FBSyxDQUFDTyxJQUFJLEtBQUssRUFBRSxFQUFFO29CQUM3QjtvQkFDQWpCLFNBQVMsRUFBRTs7a0JBRVo7a0JBRUEsTUFBTSxJQUFJa0IsS0FBSyxDQUFDSixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7O2dCQUV0QyxJQUFJZCxTQUFTLEVBQUVBLFNBQVMsRUFBRTtlQUMxQixDQUFDLE9BQU96QyxDQUFDLEVBQUU7Z0JBQ1gvRixPQUFPLENBQUMySixHQUFHLENBQUM1RCxDQUFDLENBQUM7Z0JBQ2RvRCxRQUFRLENBQUN4SCxLQUFLLENBQUNpSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztlQUNoQyxTQUFTO2dCQUNUWixXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsTUFBTWEsVUFBVSxHQUFHbkksS0FBSyxDQUFDb0ksTUFBTSxDQUFDOUssSUFBSSxDQUFDLElBQUkwQyxLQUFLLENBQUNvSSxNQUFNLENBQUNDLFdBQVc7WUFDakUsT0FDQ2pOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNSLGFBQUEsQ0FBQU0sTUFBTSxDQUFDME0sR0FBRztjQUFBLEdBQUtsQixXQUFBLENBQUFwQixVQUFVLENBQUNuSyxPQUFPO2NBQUVMLFNBQVMsRUFBQztZQUE0QyxHQUN6RkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUtrRSxLQUFLLENBQUN6QyxLQUFLLENBQU0sRUFDdEJuQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxlQUFPa0UsS0FBSyxDQUFDdUksUUFBUSxDQUFRLENBQ3JCLEVBQ1RuTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUwsY0FBQSxDQUFBdUIsYUFBYTtjQUFDakIsS0FBSyxFQUFFQSxLQUFLO2NBQUU3SCxPQUFPLEVBQUM7WUFBUyxFQUFHLEVBQ2hEOEcsS0FBSyxJQUNMcEwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUEyRSxRQUFBLFFBQ0NwRixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBK0IsR0FDN0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRixNQUFBLENBQUErRixVQUFVO2NBQUNQLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzVCcEwsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQVksR0FDMUJKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU8wSyxLQUFLLENBQUM1RCxJQUFJLENBQVEsRUFDekJ4SCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxlQUFPa0UsS0FBSyxDQUFDeUksZ0JBQWdCLENBQVEsQ0FDaEMsQ0FDRCxDQUVQLEVBRURyTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLa0UsS0FBSyxDQUFDMEksTUFBTSxDQUFNLEVBQ3ZCdE4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQW9CLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUM0QixPQUFPLEVBQUMsU0FBUztjQUFDaUosUUFBUTtjQUFDNUwsT0FBTyxFQUFFK0o7WUFBUSxHQUNsRFcsV0FBVyxDQUFDbUIsTUFBTSxDQUNYLEVBQ1R4TixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0wsU0FBQSxDQUFBdEosUUFBUTtjQUFDOEIsT0FBTyxFQUFDLFNBQVM7Y0FBQzNDLE9BQU8sRUFBRTBDO1lBQVMsR0FDNUNnSSxXQUFXLENBQUNvQixRQUFRLENBQ1gsQ0FDRixFQUNWek4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWtCLEdBQ2hDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBWSxHQUFFMk0sVUFBVSxDQUFRLENBQzNDLEVBQ04vTSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUwsaUJBQUEsQ0FBQTJCLGdCQUFnQjtjQUFDekIsUUFBUSxFQUFFQSxRQUFRO2NBQUUxQyxHQUFHLEVBQUM7WUFBWSxFQUFHLENBQzdDO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUZBLElBQUF2SixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBc0IsTUFBQSxHQUFBdEIsT0FBQTtVQVVPO1VBQVcsU0FBVTJCLFNBQVNBLENBQUM7WUFDckNzSCxJQUFJO1lBRUo5SSxTQUFTO1lBQ1R1TixXQUFXO1lBQ1h0TjtVQUFRLENBQ0s7WUFDYixNQUFNK0IsR0FBRyxHQUFHLDJCQUEyQmhDLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFekUsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2EsTUFBQSxDQUFBcU0sS0FBSztjQUFDeE4sU0FBUyxFQUFFZ0M7WUFBRyxHQUNwQnBDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUt3SSxJQUFJLENBQU0sRUFDZmxKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUdOLFNBQVMsRUFBQztZQUFJLEdBQUV1TixXQUFXLENBQUssRUFDbEN0TixRQUFRLENBQ0Y7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJGLE1BQUEsR0FBQTNGLE9BQUE7VUFXTztVQUFVLFNBQVU2RyxXQUFXQSxDQUFDO1lBQ3RDMUYsR0FBRztZQUNIeU0sS0FBSztZQUNML0gsR0FBRyxHQUFHLEVBQUU7WUFDUmdJLE1BQU0sR0FBRyxVQUFVO1lBQ25CNUwsSUFBSTtZQUNKNkwsSUFBSSxHQUFHLElBQUk7WUFDWHpNLE9BQU87WUFDUGxCO1VBQVMsQ0FDVTtZQUNuQixJQUFJZ0MsR0FBRyxHQUFHLGdCQUFnQmhDLFNBQVMsSUFBSSxFQUFFLElBQUkwTixNQUFNLEVBQUU7WUFFckQsSUFBSUQsS0FBSyxFQUFFekwsR0FBRyxJQUFJLFNBQVN5TCxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDek0sR0FBRyxJQUFJQSxHQUFHLEtBQUssRUFBRSxFQUFFO2NBQ3ZCQSxHQUFHLEdBQUcsMkJBQTJCME0sTUFBTSxJQUFJNUwsSUFBSSxHQUFHLEdBQUdBLElBQUksR0FBRyxHQUFHLEVBQUUsU0FBUzs7WUFHM0UsSUFBSVosT0FBTyxFQUFFLE9BQU90QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUUsR0FBR2dDLEdBQUc7WUFBd0IsRUFBSTtZQUV0RSxPQUFPcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tGLE1BQUEsQ0FBQUcsS0FBSztjQUFDM0UsR0FBRyxFQUFFLEdBQUdBLEdBQUcsU0FBUzJNLElBQUksRUFBRTtjQUFFakksR0FBRyxFQUFFQSxHQUFHO2NBQUUxRixTQUFTLEVBQUVnQztZQUFHLEVBQUk7VUFDdkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaENBLElBQUFwQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK04sTUFBQSxHQUFBL04sT0FBQTtVQUVPO1VBQVcsU0FBVW1OLGFBQWFBLENBQUM7WUFDekNqQixLQUFLO1lBQ0w3SCxPQUFPLEdBQUc7VUFBTyxDQUlqQjtZQUNBLElBQUksQ0FBQzZILEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsT0FBT25NLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNzTixNQUFBLENBQUFDLEtBQUs7Y0FBQy9MLElBQUksRUFBRW9DO1lBQU8sR0FBRzZILEtBQUssQ0FBUztVQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBM0ssTUFBQSxHQUFBdkIsT0FBQTtVQUNBLElBQUFxQyxXQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBRUE7Ozs7O1VBS0EsTUFBTWlPLGlCQUFpQixHQUFHQSxDQUFDO1lBQUU5SCxJQUFJO1lBQUUrSDtVQUFLLENBQUUsS0FBSTtZQUM3QyxNQUFNQyxtQkFBbUIsR0FBR0EsQ0FBQztjQUFFM0I7WUFBTSxDQUFFLEtBQUk7Y0FDMUMsUUFBUUEsTUFBTTtnQkFDYixLQUFLLE1BQU07a0JBQ1YsT0FBT3pNLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO29CQUFLTixTQUFTLEVBQUM7a0JBQWtDLEdBQUUrTixLQUFLLENBQU87Z0JBRXZFLEtBQUssU0FBUztrQkFDYixPQUFPbk8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7b0JBQUtOLFNBQVMsRUFBQztrQkFBcUMsR0FBRStOLEtBQUssQ0FBTztnQkFFMUUsS0FBSyxTQUFTO2tCQUNiLE9BQU9uTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtvQkFBS04sU0FBUyxFQUFDO2tCQUFxQyxHQUFFK04sS0FBSyxDQUFPO2dCQUUxRTtrQkFDQyxPQUFPbk8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2MsTUFBQSxDQUFBeUksSUFBSTtvQkFBQzdKLFNBQVMsRUFBQyxJQUFJO29CQUFDNEIsSUFBSSxFQUFFO2tCQUFTLEVBQUk7O1lBRWxELENBQUM7WUFFRCxPQUNDaEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQWdFLElBQUk7Y0FBQ2xHLFNBQVMsRUFBQyxVQUFVO2NBQUNxRyxJQUFJLEVBQUVMLElBQUksQ0FBQ3BEO1lBQUcsR0FDeENoRCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDME4sbUJBQW1CO2NBQUMzQixNQUFNLEVBQUVyRyxJQUFJLENBQUNxRztZQUFNLEVBQUksQ0FDdEM7VUFFVCxDQUFDO1VBRU07VUFBVyxTQUFVNEIsYUFBYUEsQ0FBQztZQUFFQyxJQUFJO1lBQUVsTztVQUFTLENBQUU7WUFDNUQsTUFBTWdDLEdBQUcsR0FBRyw2QkFBNkJoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNFLE1BQU1tTyxhQUFhLEdBQUdELElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNwSSxJQUFJLEVBQUUrSCxLQUFLLEtBQUtuTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd04saUJBQWlCO2NBQUM5SCxJQUFJLEVBQUVBLElBQUk7Y0FBRW1ELEdBQUcsRUFBRTRFLEtBQUs7Y0FBRUEsS0FBSyxFQUFFQSxLQUFLLEdBQUc7WUFBQyxFQUFJLENBQUM7WUFDaEgsT0FBT25PLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FBR21NLGFBQWEsQ0FBTztVQUNsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0EsSUFBQXZPLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVXdPLFdBQVdBLENBQUM7WUFBRXRNO1VBQUssQ0FBRTtZQUMvQyxPQUNDbkMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQThCLEdBQ2hESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFJTixTQUFTLEVBQUM7WUFBNEIsR0FBRStCLEtBQUssQ0FBTSxDQUM5QztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUF1TSxjQUFBLEdBQUF6TyxPQUFBO1VBQ0EsSUFBQTBPLFlBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBMkYsTUFBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsU0FBVTJPLFVBQVVBLENBQUM7WUFBRXhPLFNBQVM7WUFBRUMsUUFBUTtZQUFFd08sS0FBSztZQUFFL0ksR0FBRztZQUFFTCxNQUFNLEdBQUcsTUFBTTtZQUFFdEQsS0FBSztZQUFFbU07VUFBSSxDQUFFO1lBQ3RHLE1BQU1sTSxHQUFHLEdBQUcsaUNBQWlDcUQsTUFBTSxHQUFHckYsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RixPQUNDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUVnQztZQUFHLEdBQ2xCcEMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQW1CLEdBQ3BDK0IsS0FBSyxJQUFJbkMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lPLFlBQUEsQ0FBQUYsV0FBVztjQUFDdE0sS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDdkNuQyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBc0IsR0FBRUMsUUFBUSxDQUFXLENBQ3JELEVBQ1RpTyxJQUFJLElBQUl0TyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ08sY0FBQSxDQUFBTCxhQUFhO2NBQUNDLElBQUksRUFBRUEsSUFBSTtjQUFFbE8sU0FBUyxFQUFDO1lBQXNCLEVBQUcsRUFDdEV5TyxLQUFLLElBQUk3TyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0YsTUFBQSxDQUFBRyxLQUFLO2NBQUMzRSxHQUFHLEVBQUV5TixLQUFLO2NBQUUvSSxHQUFHLEVBQUVBLEdBQUc7Y0FBRTFGLFNBQVMsRUFBQztZQUFvQixFQUFHLENBQ25FO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUEwTyxXQUFBLEdBQUE3TyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ087VUFBVSxTQUFVOE8sV0FBV0EsQ0FBQ3RNLEtBQUs7WUFDM0MsTUFBTW1ILEtBQUssR0FBRztjQUNib0YsY0FBYyxFQUFFLEdBQUc7Y0FDbkJDLGNBQWMsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDO2NBQ2xGQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO2NBQ3BCQyxTQUFTLEVBQUU7YUFDWDtZQUNEblAsTUFBQSxDQUFBUyxPQUFLLENBQUM4QyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNNkwsVUFBVSxHQUFHLElBQUlOLFdBQUEsQ0FBQXJPLE9BQVUsRUFBRTtjQUNuQzJPLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDO2dCQUFFLEdBQUd6RixLQUFLO2dCQUFFLEdBQUduSDtjQUFLLENBQUUsQ0FBQztZQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1VBQ1A7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFFQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVBLElBQUF6QyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcVAsT0FBQSxHQUFBclAsT0FBQTtVQUVPO1VBQVUsU0FBVXNQLGFBQWFBLENBQUMvSCxJQUFJLEVBQUU3QyxLQUFLLEVBQUVsQyxLQUFLLEdBQUcsRUFBRTtZQUMvRCxNQUFNWSxHQUFHLEdBQUdyRCxNQUFBLENBQUFTLE9BQUssQ0FBQzZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTWlHLEdBQUcsR0FBRyxXQUFXL0IsSUFBSSxPQUFPO1lBQ2xDLE1BQU1nSSxHQUFHLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDbkcsR0FBRyxDQUFDO1lBRXJDdkosTUFBQSxDQUFBUyxPQUFLLENBQUM4QyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFJLENBQUNvQixLQUFLLElBQUk2SyxHQUFHLEVBQUU7Y0FDbkIsTUFBTUcsS0FBSyxHQUFHdE0sR0FBRyxDQUFDSSxPQUFPLENBQUNtTSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7Y0FFekQsTUFBTUMsS0FBSyxHQUFHLEVBQUU7Y0FDaEJGLEtBQUssRUFBRUcsT0FBTyxDQUFFMUosSUFBaUIsSUFBSTtnQkFDcEMsTUFBTTtrQkFBRWpFLEtBQUs7a0JBQUV3TDtnQkFBVyxDQUFFLEdBQUd2SCxJQUFJLENBQUMySixPQUFPO2dCQUMzQ0YsS0FBSyxDQUFDRyxJQUFJLENBQUM7a0JBQ1ZDLE9BQU8sRUFBRTdKLElBQUk7a0JBQ2I4SixPQUFPLEVBQUU7b0JBQ1IvTixLQUFLO29CQUNMd0w7O2lCQUVELENBQUM7Y0FDSCxDQUFDLENBQUM7Y0FDRixNQUFNd0MsR0FBRyxHQUFHLElBQUFiLE9BQUEsQ0FBQWMsTUFBTSxFQUFDO2dCQUNsQkMsWUFBWSxFQUFFLGtCQUFrQjtnQkFDaENSLEtBQUs7Z0JBRUxTLFdBQVcsRUFBRUEsQ0FBQSxLQUFLO2tCQUNqQixJQUFJLENBQUNILEdBQUcsQ0FBQ0ksV0FBVyxFQUFFLEVBQUU7b0JBQ3ZCZCxZQUFZLENBQUM1SSxPQUFPLENBQUMwQyxHQUFHLEVBQUUsTUFBTSxDQUFDO29CQUNqQzRHLEdBQUcsQ0FBQ0ssT0FBTyxFQUFFO29CQUNiOztrQkFFREwsR0FBRyxDQUFDTSxRQUFRLEVBQUU7a0JBQ2QsT0FBTyxJQUFJO2dCQUNaLENBQUM7Z0JBRUQsR0FBR2hPO2VBQ0gsQ0FBQztjQUNGME4sR0FBRyxDQUFDTyxLQUFLLEVBQUU7WUFDWixDQUFDLEVBQUUsQ0FBQy9MLEtBQUssQ0FBQyxDQUFDO1lBRVgsT0FBTztjQUFFdEI7WUFBRyxDQUFFO1VBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFZLEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBMFEsTUFBQSxHQUFBMVEsT0FBQTtVQUVPO1VBQVUsU0FBVTJRLGdCQUFnQkEsQ0FBQ0MsU0FBUyxFQUFFQyxRQUFRO1lBQzlELE1BQU0sQ0FBQ25NLEtBQUssRUFBRW9NLFFBQVEsQ0FBQyxHQUFHOU0sS0FBSyxDQUFDUSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0csS0FBSyxFQUFFb00sUUFBUSxDQUFDLEdBQUcvTSxLQUFLLENBQUNRLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUNSLEtBQUssQ0FBQ1YsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTTBOLFVBQVUsR0FBRyxJQUFJTixNQUFBLENBQUFPLFlBQVksQ0FBQ0wsU0FBUyxDQUFDO2NBQzlDLE1BQU1NLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QixJQUFJdEosS0FBSyxHQUFHb0osVUFBVSxDQUFDcEosS0FBSztnQkFDNUJtSixRQUFRLENBQUNuSixLQUFLLENBQUM7Z0JBQ2ZrSixRQUFRLENBQUNFLFVBQVUsQ0FBQ3RNLEtBQUssQ0FBQztnQkFDMUIsSUFBSXNNLFVBQVUsQ0FBQ3RNLEtBQUssRUFBRW1NLFFBQVEsQ0FBQ2pKLEtBQUssQ0FBQztjQUN0QyxDQUFDO2NBQ0RvSixVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYRixVQUFVLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUVELFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU1FLE9BQU8sR0FBRzFNLEtBQUssSUFBSSxDQUFDLENBQUNDLEtBQUs7WUFDaEMsT0FBTyxDQUFDeU0sT0FBTyxFQUFFek0sS0FBSyxDQUFDO1VBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBNUUsTUFBQSxHQUFBQyxPQUFBO1VBQ087VUFBVSxTQUFVcVIsU0FBU0EsQ0FBQTtZQUNuQyxPQUNDdFIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWlCLEdBQy9CSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBUSxFQUFPLEVBQzlCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBUSxFQUFPLEVBQzlCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYSxFQUFPLEVBQ25DSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYyxFQUFPLEVBQ3BDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBUSxFQUFPLEVBQzlCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYSxFQUFPLEVBQ25DSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYyxFQUFPLEVBQ3BDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBUyxFQUFPLEVBQy9CSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBYSxFQUFPLENBQzlCO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXNSLFFBQUEsR0FBQXRSLE9BQUE7VUFDTztVQUFZLFNBQVV1UixhQUFhQSxDQUFBO1lBQ3pDLE9BQ0N4UixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBdUIsR0FDckNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2USxRQUFBLENBQUFFLE9BQU87Y0FBQ0MsTUFBTTtjQUFDeFAsSUFBSSxFQUFDO1lBQVMsRUFBRyxDQUM1QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1JBLElBQUErSSxNQUFBLEdBQUFoTCxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWtFLE1BQUEsR0FBQWxFLE9BQUE7VUFFTztVQUFVLFNBQVVvRixvQkFBb0JBLENBQUM7WUFBRWQsSUFBSTtZQUFFRixTQUFTO1lBQUVpQjtVQUFPLENBQUU7WUFDM0UsTUFBTSxDQUFDWCxLQUFLLEVBQUVDLEtBQUssQ0FBQyxHQUFHLElBQUFULE1BQUEsQ0FBQVUsUUFBUSxFQUFDLDJCQUEyQixDQUFDO1lBRTVELElBQUksQ0FBQ04sSUFBSSxJQUFJLENBQUNJLEtBQUssRUFBRSxPQUFPLElBQUk7WUFFaEMsT0FDQzNFLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUFWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBMkUsUUFBQSxRQUNDcEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VLLE1BQUEsQ0FBQTBHLFlBQVk7Y0FDWnBOLElBQUk7Y0FDSmUsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCc00sU0FBUyxFQUFFO2dCQUFFM00sS0FBSyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQ3NJO2NBQU0sQ0FBRTtjQUMxQ3FFLFVBQVUsRUFBRTtnQkFBRTVNLEtBQUssRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUM0TTtjQUFPLENBQUU7Y0FDNUN6TixTQUFTLEVBQUVBLFNBQVM7Y0FDcEJxSCxRQUFRLEVBQUVwRztZQUFPLEdBRWpCdEYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS2tFLEtBQUssQ0FBQ21OLFdBQVcsQ0FBQzVQLEtBQUssQ0FBTSxFQUNsQ25DLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLFlBQUlrRSxLQUFLLENBQUNtTixXQUFXLENBQUNwRSxXQUFXLENBQUssQ0FDeEIsQ0FDYjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBM04sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStSLE9BQUEsR0FBQS9SLE9BQUE7VUFFTztVQUFXLFNBQVVnUyxVQUFVQSxDQUFDO1lBQUU1UixRQUFRO1lBQUVELFNBQVM7WUFBRTZMO1VBQVEsQ0FBRTtZQUN2RSxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFFMUIsTUFBTTdKLEdBQUcsR0FBRyx3QkFBd0JoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ3RFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDakI2SixRQUFRLElBQ1JqTSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMkIsR0FDekNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNzUixPQUFBLENBQUFWLFNBQVMsT0FBRyxFQUNaalIsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNPO1VBQVcsU0FBVWlTLGFBQWFBLENBQUM7WUFBRTdSLFFBQVE7WUFBRUQsU0FBUztZQUFFNkwsUUFBUTtZQUFFOEIsSUFBSSxHQUFHeEg7VUFBUyxDQUFFO1lBQzVGLE1BQU00TCxLQUFLLEdBQUc7Y0FDYkMsRUFBRSxFQUFFLGNBQWM7Y0FDbEIzUixPQUFPLEVBQUU7YUFDVDtZQUNELE1BQU00UixPQUFPLEdBQUdGLEtBQUssQ0FBQ3BFLElBQUksQ0FBQyxJQUFJb0UsS0FBSyxDQUFDMVIsT0FBTztZQUM1QyxNQUFNMkIsR0FBRyxHQUFHLG1CQUFtQmlRLE9BQU8sR0FBR2pTLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFM0UsT0FDQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFZ0M7WUFBRyxHQUNqQi9CLFFBQVEsRUFDUjRMLFFBQVEsSUFDUmpNLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUEyQixHQUN6Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzRCLFdBQUEsQ0FBQW1QLE9BQU87Y0FBQ0MsTUFBTSxFQUFFLElBQUk7Y0FBRTNELElBQUksRUFBQztZQUFJLEVBQUcsQ0FFcEMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBL04sTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStSLE9BQUEsR0FBQS9SLE9BQUE7VUFPTztVQUFXLFNBQVV5TixnQkFBZ0JBLENBQUM7WUFBRXJOLFFBQVE7WUFBRUQsU0FBUztZQUFFNkw7VUFBUSxDQUEwQjtZQUNyRyxJQUFJLENBQUNBLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTTdKLEdBQUcsR0FBRyxvQkFBb0JoQyxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRWdDO1lBQUcsR0FDakI2SixRQUFRLElBQ1JqTSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMkIsR0FDekNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNzUixPQUFBLENBQUFWLFNBQVMsT0FBRyxFQUNaalIsUUFBUSxDQUNKLENBRVAsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQUwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQXFTLGFBQUEsR0FBQXJTLE9BQUE7VUFFTztVQUFVLFNBQVVzUyxTQUFTQSxDQUFDO1lBQUVqUixPQUFPO1lBQUVhLEtBQUs7WUFBRTlCLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQUksQ0FBRTtZQUMzRSxNQUFNbUgsT0FBTyxHQUFHbkgsRUFBdUI7WUFFdkMsSUFBSWdCLE9BQU8sRUFBRTtjQUNaLE9BQ0N0QixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUU4sU0FBUyxFQUFDO2NBQXFCLEdBQ3RDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNFIsYUFBQSxDQUFBRSxZQUFZO2dCQUFDQyxNQUFNLEVBQUMsS0FBSztnQkFBQ3ZSLEtBQUssRUFBQztjQUFPLEVBQUcsRUFDMUNiLFFBQVEsQ0FDRDs7WUFHWCxPQUNDTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUM7WUFBcUIsR0FDdENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxPQUFPLFFBQUV0RixLQUFLLENBQVcsRUFDekI5QixRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVXFTLFlBQVlBLENBQUM7WUFBRXJTO1VBQVEsQ0FBRTtZQUNuRCxPQUFPTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNTixTQUFTLEVBQUM7WUFBWSxHQUFFQyxRQUFRLENBQVE7VUFDdEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBTCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBcUMsV0FBQSxHQUFBckMsT0FBQTtVQUNBLElBQUF1QixNQUFBLEdBQUF2QixPQUFBO1VBRU87VUFBVSxTQUFVMFMsYUFBYUEsQ0FBQztZQUFFdFMsUUFBUTtZQUFFc0IsT0FBTztZQUFFRyxRQUFRO1lBQUUsR0FBR1c7VUFBSyxDQUFFO1lBQ2pGLE1BQU0sQ0FBQ21RLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc3UyxNQUFBLENBQUFTLE9BQUssQ0FBQ2dFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTWtHLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUJrSSxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU1sUixPQUFPLEVBQUU7Y0FDZmtSLGFBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsQ0FBQztZQUVELE9BQ0M3UyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBSSxNQUFNO2NBQUEsR0FBS0QsS0FBSztjQUFFZCxPQUFPLEVBQUVnSixXQUFXO2NBQUU3SSxRQUFRLEVBQUVBLFFBQVEsSUFBSThRO1lBQVUsR0FDdkV2UyxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVXlTLGlCQUFpQkEsQ0FBQztZQUFFelMsUUFBUTtZQUFFeUIsUUFBUTtZQUFFMUIsU0FBUztZQUFFdUIsT0FBTztZQUFFLEdBQUdjO1VBQUssQ0FBRTtZQUNoRyxNQUFNLENBQUNtUSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHN1MsTUFBQSxDQUFBUyxPQUFLLENBQUNnRSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU1rRyxXQUFXLEdBQUcsTUFBTTdGLEtBQUssSUFBRztjQUNqQ0EsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkI4TixhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ25CLE1BQU1sUixPQUFPLEVBQUU7Y0FFZnFHLFVBQVUsQ0FBQyxNQUFLO2dCQUNmNkssYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNyQixDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ1IsQ0FBQztZQUNELElBQUlELFVBQVUsRUFBRTtjQUNmLE9BQ0M1UyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtnQkFBUU4sU0FBUyxFQUFDO2NBQXlDLEdBQzFESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEIsV0FBQSxDQUFBbVAsT0FBTztnQkFBQ0MsTUFBTTtnQkFBQ3hQLElBQUksRUFBQztjQUFTLEVBQUcsQ0FDekI7O1lBR1gsTUFBTUUsR0FBRyxHQUFHaEMsU0FBUyxHQUFHLEdBQUdBLFNBQVMsaUJBQWlCLEdBQUcsZ0JBQWdCO1lBQ3hFLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNjLE1BQUEsQ0FBQXVSLGFBQWE7Y0FBQzNTLFNBQVMsRUFBRWdDLEdBQUc7Y0FBQSxHQUFNSyxLQUFLO2NBQUVkLE9BQU8sRUFBRWdKLFdBQVc7Y0FBRTdJLFFBQVEsRUFBRUEsUUFBUSxJQUFJOFE7WUFBVSxHQUM5RnZTLFFBQVEsQ0FDTTtVQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQTRELEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFPTyxXQVRQOztVQVNpQixTQUFVK1MsV0FBV0EsQ0FBQztZQUFFL04sS0FBSztZQUFFZ08sUUFBUTtZQUFFLEdBQUdDO1VBQUksQ0FBcUI7WUFDckYsTUFBTUMsUUFBUSxHQUFHbFAsS0FBSyxDQUFDWCxNQUFNLENBQW1CLElBQUksQ0FBQztZQUVyRCxNQUFNOFAsaUJBQWlCLEdBQUl0TyxLQUEwQyxJQUFJO2NBQ3hFLElBQUlxTyxRQUFRLENBQUMxUCxPQUFPLEVBQUU7Z0JBQ3JCLE1BQU00UCxXQUFXLEdBQUcsSUFBSUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtrQkFDdkNDLE9BQU8sRUFBRSxJQUFJO2tCQUNiQyxVQUFVLEVBQUU7aUJBQ1osQ0FBQztnQkFDRkwsUUFBUSxDQUFDMVAsT0FBTyxDQUFDZ1EsYUFBYSxDQUFDSixXQUFXLENBQUM7O1lBRTdDLENBQUM7WUFFRCxPQUNDcFAsS0FBQSxDQUFBdkQsYUFBQTtjQUFPTixTQUFTLEVBQUMsY0FBYztjQUFDNlMsUUFBUSxFQUFFRztZQUFpQixHQUMxRG5QLEtBQUEsQ0FBQXZELGFBQUEsZUFDQ3VELEtBQUEsQ0FBQXZELGFBQUE7Y0FBT3dCLElBQUksRUFBQyxPQUFPO2NBQUNtQixHQUFHLEVBQUU4UCxRQUFRO2NBQUVGLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU1DO1lBQUksRUFBSSxFQUNuRWpQLEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ1IsYUFBQSxDQUFBTSxNQUFNLENBQUMwTSxHQUFHO2NBQ1Y5TSxTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDVSxPQUFPLEVBQUU7Z0JBQUU0UyxLQUFLLEVBQUVSLElBQUksQ0FBQ1MsT0FBTyxHQUFHLEdBQUcsR0FBRztjQUFDLENBQUU7Y0FDMUM1UyxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRTtjQUFHO1lBQUUsR0FFNUJrUyxJQUFJLENBQUNTLE9BQU8sSUFBSTFQLEtBQUEsQ0FBQXZELGFBQUEsQ0FBQ1IsYUFBQSxDQUFBTSxNQUFNLENBQUMwTSxHQUFHO2NBQUM5TSxTQUFTLEVBQUMscUJBQXFCO2NBQUNPLE1BQU07WUFBQSxFQUFHLENBQzFELENBQ1AsRUFDTnNFLEtBQUssQ0FDQztVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBaEIsS0FBQSxHQUFBaEUsT0FBQTtVQWFPLFdBZFA7O1VBY2lCLFNBQVUyVCxVQUFVQSxDQUFDO1lBQUV2VCxRQUFRO1lBQUV3SCxLQUFLO1lBQUVvTDtVQUFRLENBQW9CO1lBQ3BGLE9BQ0NoUCxLQUFBLENBQUF2RCxhQUFBLGNBQ0V1RCxLQUFLLENBQUM0UCxRQUFRLENBQUNyRixHQUFHLENBQUNuTyxRQUFRLEVBQUV5VCxLQUFLLElBQUc7Y0FDckM7Y0FDQSxJQUFJN1AsS0FBSyxDQUFDOFAsY0FBYyxDQUFvQkQsS0FBSyxDQUFDLElBQUksT0FBT0EsS0FBSyxDQUFDclIsS0FBSyxDQUFDb0YsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDNUY7Z0JBQ0EsT0FBTzVELEtBQUssQ0FBQytQLFlBQVksQ0FBQ0YsS0FBSyxFQUFFO2tCQUNoQ0gsT0FBTyxFQUFFRyxLQUFLLENBQUNyUixLQUFLLENBQUNvRixLQUFLLEtBQUtBLEtBQUs7a0JBQ3BDb0wsUUFBUSxFQUFFQSxDQUFBLEtBQU1BLFFBQVEsQ0FBQ2EsS0FBSyxDQUFDclIsS0FBSyxDQUFDb0YsS0FBSztpQkFDMUMsQ0FBQzs7Y0FFSCxPQUFPaU0sS0FBSztZQUNiLENBQUMsQ0FBQyxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUE5VCxNQUFBLEdBQUFDLE9BQUE7VUFVTztVQUFVLFNBQVV1UyxZQUFZQSxDQUFDL1AsS0FBeUI7WUFDaEUsT0FDQ3pDLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQ0NOLFNBQVMsRUFBQyxlQUFlO2NBQ3pCNEQsS0FBSyxFQUFFO2dCQUNOOUMsS0FBSyxFQUFFdUIsS0FBSyxDQUFDdkIsS0FBSyxJQUFJLE1BQU07Z0JBQzVCdVIsTUFBTSxFQUFFaFEsS0FBSyxDQUFDZ1EsTUFBTSxJQUFJLE1BQU07Z0JBQzlCd0IsVUFBVSxFQUFFeFIsS0FBSyxDQUFDeVIsS0FBSyxJQUFJLEVBQUU7Z0JBQzdCQyxZQUFZLEVBQUUxUixLQUFLLENBQUMyUixLQUFLLElBQUk7O1lBQzdCLEdBRURwVSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFNc0QsS0FBSyxFQUFFO2dCQUFFcVEsT0FBTyxFQUFFNVIsS0FBSyxDQUFDNlIsYUFBYSxHQUFHLE1BQU0sR0FBRztjQUFPO1lBQUUsRUFBUyxDQUNuRTtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBdFUsTUFBQSxHQUFBQyxPQUFBO1VBV087VUFBVSxTQUFVc1UsUUFBUUEsQ0FBQztZQUFFblUsU0FBUztZQUFFb0gsSUFBSTtZQUFFMkcsS0FBSztZQUFFdkosS0FBSztZQUFFdkUsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUFpQjtZQUMxRyxNQUFNa1UsSUFBSSxHQUFHckssTUFBTSxDQUFDcUssSUFBSSxDQUFDNVAsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQ0EsS0FBSyxDQUFDNlAsY0FBYyxDQUFDak4sSUFBSSxDQUFDLElBQUksQ0FBQ2dOLElBQUksRUFBRTtjQUN6Q3ZSLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFlBQVlzRSxJQUFJLHFDQUFxQyxFQUFFNUMsS0FBSyxDQUFDO2NBQzFFLE9BQU8sSUFBSTs7WUFFWnVKLEtBQUssR0FBR0EsS0FBSyxJQUFJcUcsSUFBSSxDQUFDRSxPQUFPLENBQUNsTixJQUFJLENBQUM7WUFFbkMsTUFBTUMsT0FBTyxHQUFHbkgsRUFBRTtZQUNsQixNQUFNOEIsR0FBRyxHQUFHLGFBQWFoQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQ0NKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxPQUFPO2NBQ1BySCxTQUFTLEVBQUVnQyxHQUFHO2NBQUEsb0JBQ0l3QyxLQUFLLENBQUM0QyxJQUFJLENBQUMsQ0FBQ21HLFdBQVc7Y0FBQSxjQUM3Qi9JLEtBQUssQ0FBQzRDLElBQUksQ0FBQyxDQUFDckYsS0FBSztjQUFBLGFBQ2xCZ00sS0FBSztjQUFBLGNBQ0pBO1lBQUssR0FFaEI5TixRQUFRLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQ0EsSUFBQTRELEtBQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBMkYsTUFBQSxHQUFBM0YsT0FBQTtVQWNPO1VBQVUsU0FBVTBVLFFBQVFBLENBQUM7WUFBRTFQLEtBQUs7WUFBRWtCO1VBQUksQ0FBa0M7WUFDbEYsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXlGLFFBQVE7Y0FBRXBFO1lBQUksQ0FBRSxHQUFHckIsSUFBSTtZQUMvQixPQUNDbEMsS0FBQSxDQUFBdkQsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBb0IsR0FDakM2RSxLQUFLLElBQUloQixLQUFBLENBQUF2RCxhQUFBO2NBQUlOLFNBQVMsRUFBQztZQUFrQixHQUFFNkUsS0FBSyxDQUFNLEVBQ3ZEaEIsS0FBQSxDQUFBdkQsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBbUIsR0FDckM2RCxLQUFBLENBQUF2RCxhQUFBLENBQUNrRixNQUFBLENBQUFHLEtBQUs7Y0FBQzNGLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQ2dCLEdBQUcsRUFBRXdLO1lBQVEsRUFBSSxFQUNuRDNILEtBQUEsQ0FBQXZELGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWlCLEdBQUVvSCxJQUFJLENBQVEsQ0FDdEMsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119