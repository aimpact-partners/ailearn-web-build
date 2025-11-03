System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@aimpact/ailearn-app@0.7.0/shared/hooks", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/ailearn-app@0.7.0/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.8/components", "react@18.3.1", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/toast", "pragmate-ui@1.0.8/base", "framer-motion@10.18.0", "pragmate-ui@1.0.8/modal", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/tooltip", "pragmate-ui@1.0.8/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentActionsCard, AssignmentFigcaptionCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, SectionCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
  _export({
    ActivityCard: void 0,
    AssignmentActionsCard: void 0,
    AssignmentFigcaptionCard: void 0,
    AssignmentCard: void 0,
    BaseCard: void 0,
    BaseFooterCard: void 0,
    BaseCardHeader: void 0,
    BaseHoverFooterCard: void 0,
    ClassroomCard: void 0,
    Container: void 0,
    DraftCard: void 0,
    ModuleCardActionsFooter: void 0,
    ModuleCardFooter: void 0,
    ModuleCard: void 0,
    OrganizationCard: void 0,
    SectionCard: void 0,
    ClassroomHeader: void 0,
    CardOwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_aimpactAilearnApp070SharedHooks) {
      dependency_2 = _aimpactAilearnApp070SharedHooks;
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_4 = _aimpactAilearnApp070ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_8 = _aimpactAilearnApp070ModelWrapper;
    }, function (_pragmateUi108Toast) {
      dependency_9 = _pragmateUi108Toast;
    }, function (_pragmateUi108Base) {
      dependency_10 = _pragmateUi108Base;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi108Modal) {
      dependency_12 = _pragmateUi108Modal;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_13 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108List) {
      dependency_14 = _pragmateUi108List;
    }, function (_pragmateUi108Tooltip) {
      dependency_15 = _pragmateUi108Tooltip;
    }, function (_pragmateUi108Image) {
      dependency_16 = _pragmateUi108Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/shared/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/base', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 2544710784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCard = ActivityCard;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _actions = require("./footer/actions");
          var _language = require("./sections/language");
          /*bundle*/
          function ActivityCard(props) {
            const {
              item,
              texts,
              entity,
              disabled,
              className,
              href,
              children,
              classroom,
              type
            } = props;
            const attrs = href && !disabled ? {
              href
            } : {};
            const Parent = href && !disabled ? _components.Link : React.Fragment;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card activity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (type) cls += ` activity-card--${type}`;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            const picture = item?.picture;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: picture,
              entity: entity,
              alt: title,
              size: "sm"
            }, React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top-content"
            }, React.createElement(_icons.AppIcon, {
              icon: type
            }), texts?.types?.[type]))), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "go",
              title: texts?.actions?.link,
              href: href
            })))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./assignment/actions
      ************************************/

      ims.set('./assignment/actions', {
        hash: 178668737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActionsCard = AssignmentActionsCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _actions = require("../footer/actions");
          /*bundle*/
          function AssignmentActionsCard(props) {
            const {
              texts,
              mode,
              id
            } = props;
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_wrapper.settings.baseUrl}/assignments/${id}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const goAction = mode === 'teacher' ? 'watch' : 'frontArrow';
            return React.createElement(_actions.ModuleCardActionsFooter, null, mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "copy",
              title: texts?.actions?.copy,
              onClick: copyToClipboard
            }), React.createElement(_icons.AppIconButton, {
              icon: goAction,
              title: texts?.actions?.link,
              href: `/assignments/${id}`
            }), !props.archived && mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "dashboard",
              title: texts?.actions?.link,
              href: `/dashboard/${id}`
            }), props.archived && React.createElement(_icons.AppIconButton, {
              icon: "restore",
              title: texts?.actions?.restore,
              onClick: props.actions.restore
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./assignment/figcaption
      ***************************************/

      ims.set('./assignment/figcaption', {
        hash: 1965672428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentFigcaptionCard = AssignmentFigcaptionCard;
          var React = require("react");
          var _audience = require("../sections/audience");
          var _classroomHeader = require("../sections/classroom-header");
          /*bundle*/
          function AssignmentFigcaptionCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const {
              item,
              audience = true
            } = props;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            if (!classroom && !audience) return null;
            return React.createElement("figcaption", null, classroom ? React.createElement(_classroomHeader.ClassroomHeader, {
              classroom: classroom
            }) : null, audience ? React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            })) : null);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./assignment/index
      **********************************/

      ims.set('./assignment/index', {
        hash: 4179463776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _activities = require("../sections/activities");
          var _language = require("../sections/language");
          var _actions = require("./actions");
          var _figcaption = require("./figcaption");
          /*bundle*/
          function AssignmentCard(props) {
            const {
              href,
              children,
              classroom,
              mode = 'student'
            } = props;
            if (!props.id) {
              console.warn('AssignmentCard: id is required', props);
            }
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const screenSize = (0, _hooks.useMediaQuery)();
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card assignments-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (props.archived) cls += ' entity-card--archived';
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              "data-id": props.id,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, React.createElement(_figcaption.AssignmentFigcaptionCard, {
              ...props
            })), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children, React.createElement("footer", {
              className: clsFooter
            }, React.createElement("div", {
              className: "normal__footer"
            }, React.createElement("span", {
              className: "footer-detail"
            }, date), React.createElement("div", {
              className: "show-on-normal"
            }, React.createElement(_language.Language, {
              language: item.language
            }))), React.createElement(_actions.AssignmentActionsCard, {
              ...props
            }))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./base/card
      ***************************/

      ims.set('./base/card', {
        hash: 1671780138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCard = BaseCard;
          var React = require("react");
          var _context = require("./context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function BaseCard(props) {
            const {
              className,
              children,
              prefix,
              href
            } = props;
            const cls = className ? `${prefix}-card ${className}` : `${prefix}-card`;
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : 'div';
            if (href) {
              attrs.className = `card--link ${className}`;
            }
            return React.createElement(_context.CardContext.Provider, {
              value: {
                prefix: props.prefix ? props.prefix : 'base-card'
              }
            }, React.createElement(Parent, {
              ...attrs
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./base/context
      ******************************/

      ims.set('./base/context', {
        hash: 3221221966,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCardContext = exports.CardContext = void 0;
          var React = require("react");
          const CardContext = exports.CardContext = React.createContext({});
          const useCardContext = () => React.useContext(CardContext);
          exports.useCardContext = useCardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/footer
      *****************************/

      ims.set('./base/footer', {
        hash: 1972849629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFooterCard = BaseFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__footer ${className}` : `${prefix}-card__footer`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./base/header
      *****************************/

      ims.set('./base/header', {
        hash: 2168355870,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseCardHeader = BaseCardHeader;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseCardHeader(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            const cls = className ? `${prefix}-card__header ${className}` : `${prefix}-card__header`;
            return React.createElement("div", {
              className: cls
            }, children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./base/hover-footer
      ***********************************/

      ims.set('./base/hover-footer', {
        hash: 3959746808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseHoverFooterCard = BaseHoverFooterCard;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function BaseHoverFooterCard(props) {
            const {
              className,
              children
            } = props;
            const {
              prefix
            } = (0, _context.useCardContext)();
            return React.createElement("div", {
              className: "footer-on-hover"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./classrooms/index
      **********************************/

      ims.set('./classrooms/index', {
        hash: 3829472711,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCard = ClassroomCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _card = require("../base/card");
          var _footer = require("../base/footer");
          var _header = require("../base/header");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function ClassroomCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = className ? `classroom-card ${className}` : 'classroom-card';
            if (isMobile) cls += ' mobile-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "classroom",
              href: `/classrooms/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIconButton, {
              name: "copy",
              title: texts.actions.copy,
              className: "circle"
            }), React.createElement("div", {
              className: "copy-content"
            }, React.createElement("span", null, texts.classrooms?.code), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, props.actions?.delete && React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
              onClick: props.actions.delete,
              title: texts.actions.delete
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 3812461961,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Container = Container;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function Container({
            item,
            audience = true,
            texts,
            children,
            entity,
            type,
            onClick,
            disabled,
            archived,
            className
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            if (archived) cls += ' entity-card--archived';
            return React.createElement(_framerMotion.motion.article, {
              onClick: onClick,
              initial: !hasMounted ? {
                opacity: 0,
                y: 15
              } : false,
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.25,
                ease: 'easeOut'
              },
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              texts: texts,
              types: types
            })) : null, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description p2"
            }, description)), children);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./draft
      ***********************/

      ims.set('./draft', {
        hash: 4085276206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftCard = DraftCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _audience = require("./sections/audience");
          var _language = require("./sections/language");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function DraftCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const [hasMounted, setHasMounted] = React.useState(false);
            React.useEffect(() => {
              setHasMounted(true);
            }, []);
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            const {
              item,
              audience = true,
              texts,
              entity,
              type,
              onClick,
              disabled,
              className
            } = props;
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (isMobile) cls += ' mobile-card';
            return React.createElement(_components.Link, {
              ...attrs
            }, React.createElement("article", {
              onClick: onClick,
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, audience ? React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top"
            }, React.createElement(_audience.Audience, {
              audience: item.audience
            }), React.createElement(_language.Language, {
              language: item.language
            }))) : null), React.createElement("section", {
              className: "entity-card__content"
            }, types?.length > 0 ? React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types,
              texts: texts
            })) : null, React.createElement("header", null, React.createElement("span", {
              className: "p3 primary-text"
            }, texts.item.draftTitle), React.createElement("h5", {
              className: "card__title"
            }, title)), React.createElement("span", {
              className: "item__description p2"
            }, description)), children));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./footer/actions
      ********************************/

      ims.set('./footer/actions', {
        hash: 4146059452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardActionsFooter = ModuleCardActionsFooter;
          var React = require("react");
          /*bundle*/
          function ModuleCardActionsFooter({
            children
          } = {
            showUser: true
          }) {
            return React.createElement("div", {
              className: "actions-container hover__footer"
            }, React.createElement(React.Fragment, null, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./footer/index
      ******************************/

      ims.set('./footer/index', {
        hash: 3790137842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCardFooter = ModuleCardFooter;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _userData = require("../sections/user-data");
          /*bundle*/
          function ModuleCardFooter({
            item,
            className,
            showUser = true,
            children
          } = {
            showUser: true
          }) {
            const ownerData = item.owner ?? item.creator;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const cls = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement("footer", {
              className: cls
            }, React.createElement("div", {
              className: "normal__footer"
            }, showUser && React.createElement(_userData.UserData, {
              data: ownerData,
              date: date
            })), React.createElement(React.Fragment, null, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3263317803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleCard = ModuleCard;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _container = require("./container");
          /*bundle*/
          function ModuleCard({
            href,
            children,
            ...props
          }) {
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            if (href) {
              attrs.className = `card--link ${attrs.className}`;
            }
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement(_container.Container, {
              ...props
            }, children));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./organizations/confirm-action
      **********************************************/

      ims.set('./organizations/confirm-action', {
        hash: 152144149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function ConfirmAction({
            icon,
            callback,
            title,
            description
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const [ready, texts] = (0, _hooks.useTexts)('@aimpact/ailearn-app/l18n');
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: onClickButton
            }), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("p", null, description))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./organizations/index
      *************************************/

      ims.set('./organizations/index', {
        hash: 2742523097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OrganizationCard = OrganizationCard;
          var React = require("react");
          var _card = require("../base/card");
          var _header = require("../base/header");
          var _footer = require("../base/footer");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OrganizationCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            const cls = className ? `organization-card ${className}` : 'organization-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "organization",
              href: `/organizations/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIcon, {
              name: "copy"
            }), React.createElement("div", null, React.createElement("span", null, "Codigo del Aula"), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "delete"
            })))));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./sections
      **************************/

      ims.set('./sections', {
        hash: 2436272387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SectionCard = SectionCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _toast = require("pragmate-ui/toast");
          var React = require("react");
          var _card = require("./base/card");
          var _footer = require("./base/footer");
          var _header = require("./base/header");
          var _hoverFooter = require("./base/hover-footer");
          var _owner = require("./sections/owner");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /*bundle*/
          function SectionCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            let isMobile = ['xs', 'sm'].includes(_wrapper.AiLearnWrapper.device);
            let cls = className ? `classroom-card ${className}` : 'classroom-card';
            if (isMobile) cls += ' mobile-card';
            const copy = event => {
              event.stopPropagation();
              const content = event.currentTarget.dataset.copy;
              navigator.clipboard.writeText(content);
              _toast.toast.success(texts.messages.copied);
            };
            return React.createElement(_card.BaseCard, {
              className: cls,
              prefix: "classroom",
              href: `/kb/sections/view/${item.id}`
            }, React.createElement(_header.BaseCardHeader, null, React.createElement("h3", {
              className: "card__title"
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.CardOwnerSection, {
              data: item.owner
            }), React.createElement(_hoverFooter.BaseHoverFooterCard, null, item.code ? React.createElement("div", {
              onClick: copy,
              "data-copy": item.code,
              className: "footer__code-container footer--copy-container"
            }, React.createElement(_icons.AppIconButton, {
              name: "copy",
              title: texts.actions.copy,
              className: "circle"
            }), React.createElement("div", {
              className: "copy-content"
            }, React.createElement("span", null, texts.classrooms?.code), React.createElement("div", null, item.code))) : React.createElement("div", null), React.createElement("div", {
              className: "footer__actions"
            }, props.actions?.delete && React.createElement(_icons.AppIconButton, {
              className: "circle",
              icon: "trash",
              onClick: props.actions.delete,
              title: texts.actions.delete
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 732547299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _react = require("react");
          function ModuleActivities({
            types,
            texts
          }) {
            if (!types) return null;
            const TOTAL_ACTIVITIES = 5;
            const [plus, setPlus] = _react.default.useState(types.length > TOTAL_ACTIVITIES);
            if (types.length > TOTAL_ACTIVITIES) {}
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("li", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item,
                title: item
              }));
            };
            return _react.default.createElement("ul", {
              className: "activity-types__list"
            }, types.slice(0, 4).map((item, index) => _react.default.createElement(Item, {
              key: `${item}-${index}`,
              item: item
            })), plus ? _react.default.createElement("li", null, _react.default.createElement("div", {
              className: "activity-types__number"
            }, " +", types.length - TOTAL_ACTIVITIES)) : null);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/audience
      ***********************************/

      ims.set('./sections/audience', {
        hash: 2996597710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Audience = Audience;
          var React = require("react");
          function Audience({
            audience
          }) {
            if (!audience) return null;
            return React.createElement("span", {
              className: "card__chip card__chip-right"
            }, audience?.level);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./sections/classroom-header
      *******************************************/

      ims.set('./sections/classroom-header', {
        hash: 4096292498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomHeader = ClassroomHeader;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          var React = require("react");
          /*bundle*/
          function ClassroomHeader({
            classroom
          }) {
            if (!classroom) return null;
            const {
              name
            } = classroom;
            return React.createElement("div", {
              className: "classroom-data__section"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement("div", {
              className: "icon__container"
            }, React.createElement(_icons.AppIcon, {
              icon: "classroom"
            }))), React.createElement("span", {
              className: "classroom-data__name p3"
            }, name));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/language
      ***********************************/

      ims.set('./sections/language', {
        hash: 3594550563,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Language = Language;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function Language({
            language
          }) {
            if (!language) return null;
            return React.createElement("span", {
              className: "card__chip text-upper"
            }, language, " ", React.createElement(_icons.AppIcon, {
              name: `languages-${language}`
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./sections/owner
      ********************************/

      ims.set('./sections/owner', {
        hash: 1694535384,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CardOwnerSection = CardOwnerSection;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function CardOwnerSection({
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "owner-data__section"
            }, React.createElement("section", {
              className: "owner-data__detail"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "owner-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "owner-data__name"
            }, name))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./sections/user-data
      ************************************/

      ims.set('./sections/user-data', {
        hash: 869122493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function UserData({
            label,
            date,
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
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            })), React.createElement("div", null, React.createElement("span", {
              className: "user-data__name"
            }, name), React.createElement("span", {
              className: "user-data__date"
            }, date))));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1920801957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity",
        "from": "ActivityCard",
        "name": "ActivityCard"
      }, {
        "im": "./assignment/actions",
        "from": "AssignmentActionsCard",
        "name": "AssignmentActionsCard"
      }, {
        "im": "./assignment/figcaption",
        "from": "AssignmentFigcaptionCard",
        "name": "AssignmentFigcaptionCard"
      }, {
        "im": "./assignment/index",
        "from": "AssignmentCard",
        "name": "AssignmentCard"
      }, {
        "im": "./base/card",
        "from": "BaseCard",
        "name": "BaseCard"
      }, {
        "im": "./base/footer",
        "from": "BaseFooterCard",
        "name": "BaseFooterCard"
      }, {
        "im": "./base/header",
        "from": "BaseCardHeader",
        "name": "BaseCardHeader"
      }, {
        "im": "./base/hover-footer",
        "from": "BaseHoverFooterCard",
        "name": "BaseHoverFooterCard"
      }, {
        "im": "./classrooms/index",
        "from": "ClassroomCard",
        "name": "ClassroomCard"
      }, {
        "im": "./container",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./draft",
        "from": "DraftCard",
        "name": "DraftCard"
      }, {
        "im": "./footer/actions",
        "from": "ModuleCardActionsFooter",
        "name": "ModuleCardActionsFooter"
      }, {
        "im": "./footer/index",
        "from": "ModuleCardFooter",
        "name": "ModuleCardFooter"
      }, {
        "im": "./index",
        "from": "ModuleCard",
        "name": "ModuleCard"
      }, {
        "im": "./organizations/index",
        "from": "OrganizationCard",
        "name": "OrganizationCard"
      }, {
        "im": "./sections",
        "from": "SectionCard",
        "name": "SectionCard"
      }, {
        "im": "./sections/classroom-header",
        "from": "ClassroomHeader",
        "name": "ClassroomHeader"
      }, {
        "im": "./sections/owner",
        "from": "CardOwnerSection",
        "name": "CardOwnerSection"
      }, {
        "im": "./sections/user-data",
        "from": "UserData",
        "name": "UserData"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityCard') && _export("ActivityCard", ActivityCard = require ? require('./activity').ActivityCard : value);
        (require || prop === 'AssignmentActionsCard') && _export("AssignmentActionsCard", AssignmentActionsCard = require ? require('./assignment/actions').AssignmentActionsCard : value);
        (require || prop === 'AssignmentFigcaptionCard') && _export("AssignmentFigcaptionCard", AssignmentFigcaptionCard = require ? require('./assignment/figcaption').AssignmentFigcaptionCard : value);
        (require || prop === 'AssignmentCard') && _export("AssignmentCard", AssignmentCard = require ? require('./assignment/index').AssignmentCard : value);
        (require || prop === 'BaseCard') && _export("BaseCard", BaseCard = require ? require('./base/card').BaseCard : value);
        (require || prop === 'BaseFooterCard') && _export("BaseFooterCard", BaseFooterCard = require ? require('./base/footer').BaseFooterCard : value);
        (require || prop === 'BaseCardHeader') && _export("BaseCardHeader", BaseCardHeader = require ? require('./base/header').BaseCardHeader : value);
        (require || prop === 'BaseHoverFooterCard') && _export("BaseHoverFooterCard", BaseHoverFooterCard = require ? require('./base/hover-footer').BaseHoverFooterCard : value);
        (require || prop === 'ClassroomCard') && _export("ClassroomCard", ClassroomCard = require ? require('./classrooms/index').ClassroomCard : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./container').Container : value);
        (require || prop === 'DraftCard') && _export("DraftCard", DraftCard = require ? require('./draft').DraftCard : value);
        (require || prop === 'ModuleCardActionsFooter') && _export("ModuleCardActionsFooter", ModuleCardActionsFooter = require ? require('./footer/actions').ModuleCardActionsFooter : value);
        (require || prop === 'ModuleCardFooter') && _export("ModuleCardFooter", ModuleCardFooter = require ? require('./footer/index').ModuleCardFooter : value);
        (require || prop === 'ModuleCard') && _export("ModuleCard", ModuleCard = require ? require('./index').ModuleCard : value);
        (require || prop === 'OrganizationCard') && _export("OrganizationCard", OrganizationCard = require ? require('./organizations/index').OrganizationCard : value);
        (require || prop === 'SectionCard') && _export("SectionCard", SectionCard = require ? require('./sections').SectionCard : value);
        (require || prop === 'ClassroomHeader') && _export("ClassroomHeader", ClassroomHeader = require ? require('./sections/classroom-header').ClassroomHeader : value);
        (require || prop === 'CardOwnerSection') && _export("CardOwnerSection", CardOwnerSection = require ? require('./sections/owner').CardOwnerSection : value);
        (require || prop === 'UserData') && _export("UserData", UserData = require ? require('./sections/user-data').UserData : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2xhbmd1YWdlIiwiQWN0aXZpdHlDYXJkIiwicHJvcHMiLCJpdGVtIiwidGV4dHMiLCJlbnRpdHkiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhyZWYiLCJjaGlsZHJlbiIsImNsYXNzcm9vbSIsInR5cGUiLCJhdHRycyIsIlBhcmVudCIsIkxpbmsiLCJGcmFnbWVudCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJ0eXBlcyIsImFjdGl2aXRpZXMiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsInB1c2giLCJjbHMiLCJkYXRlIiwiZGVmYXVsdCIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiY2xzRm9vdGVyIiwicGljdHVyZSIsImNyZWF0ZUVsZW1lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsImFsdCIsInNpemUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl93cmFwcGVyIiwiX3RvYXN0IiwiQXNzaWdubWVudEFjdGlvbnNDYXJkIiwibW9kZSIsImlkIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5RXJyb3IiLCJnb0FjdGlvbiIsIm9uQ2xpY2siLCJhcmNoaXZlZCIsInJlc3RvcmUiLCJfYXVkaWVuY2UiLCJfY2xhc3Nyb29tSGVhZGVyIiwiQXNzaWdubWVudEZpZ2NhcHRpb25DYXJkIiwid2FybiIsImF1ZGllbmNlIiwiQ2xhc3Nyb29tSGVhZGVyIiwiQXVkaWVuY2UiLCJfYWN0aXZpdGllcyIsIl9maWdjYXB0aW9uIiwiQXNzaWdubWVudENhcmQiLCJNb2R1bGVBY3Rpdml0aWVzIiwiX2NvbnRleHQiLCJCYXNlQ2FyZCIsInByZWZpeCIsIkNhcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FyZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmFzZUZvb3RlckNhcmQiLCJCYXNlQ2FyZEhlYWRlciIsIkJhc2VIb3ZlckZvb3RlckNhcmQiLCJfY2FyZCIsIl9mb290ZXIiLCJfaGVhZGVyIiwiX2hvdmVyRm9vdGVyIiwiX293bmVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImNvcGllZCIsIm5hbWUiLCJDYXJkT3duZXJTZWN0aW9uIiwiZGF0YSIsIm93bmVyIiwiY29kZSIsImNsYXNzcm9vbXMiLCJkZWxldGUiLCJfZnJhbWVyTW90aW9uIiwiQ29udGFpbmVyIiwiaGFzTW91bnRlZCIsInNldEhhc01vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsImFydGljbGUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImxlbmd0aCIsIkRyYWZ0Q2FyZCIsImRyYWZ0VGl0bGUiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwicmVhZHkiLCJ1c2VUZXh0cyIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiQ29uZmlybU1vZGFsIiwic2hvdyIsIm9uQ2FuY2VsIiwiT3JnYW5pemF0aW9uQ2FyZCIsIlNlY3Rpb25DYXJkIiwiVE9UQUxfQUNUSVZJVElFUyIsInBsdXMiLCJzZXRQbHVzIiwiSXRlbSIsInNsaWNlIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJsZXZlbCIsIl90b29sdGlwIiwiVG9vbHRpcCIsIl9pbWFnZSIsInBob3RvVXJsIiwiSW1hZ2UiLCJsYWJlbCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LnRzeCIsIi90cy9hc3NpZ25tZW50L2FjdGlvbnMudHN4IiwiL3RzL2Fzc2lnbm1lbnQvZmlnY2FwdGlvbi50c3giLCIvdHMvYXNzaWdubWVudC9pbmRleC50c3giLCIvdHMvYmFzZS9jYXJkLnRzeCIsIi90cy9iYXNlL2NvbnRleHQudHMiLCIvdHMvYmFzZS9mb290ZXIudHN4IiwiL3RzL2Jhc2UvaGVhZGVyLnRzeCIsIi90cy9iYXNlL2hvdmVyLWZvb3Rlci50c3giLCIvdHMvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9kcmFmdC50c3giLCIvdHMvZm9vdGVyL2FjdGlvbnMudHN4IiwiL3RzL2Zvb3Rlci9pbmRleC50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL29yZ2FuaXphdGlvbnMvaW5kZXgudHN4IiwiL3RzL3NlY3Rpb25zLnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sUUFBQSxHQUFBTixPQUFBO1VBRUEsSUFBQU8sU0FBQSxHQUFBUCxPQUFBO1VBR087VUFBVSxTQUFVUSxZQUFZQSxDQUFDQyxLQUF1QjtZQUM5RCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFQyxJQUFJO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFQztZQUFJLENBQUUsR0FBR1QsS0FBSztZQUMzRixNQUFNVSxLQUFLLEdBQUdKLElBQUksSUFBSSxDQUFDRixRQUFRLEdBQUc7Y0FBRUU7WUFBSSxDQUFFLEdBQUcsRUFBRTtZQUMvQyxNQUFNSyxNQUFNLEdBQUdMLElBQUksSUFBSSxDQUFDRixRQUFRLEdBQUdULFdBQUEsQ0FBQWlCLElBQUksR0FBR2hCLEtBQUssQ0FBQ2lCLFFBQVE7WUFDeEQsTUFBTUMsS0FBSyxHQUFHYixJQUFJLENBQUNhLEtBQUssSUFBSWIsSUFBSSxDQUFDYyxTQUFTO1lBQzFDLE1BQU1DLFdBQVcsR0FBR2YsSUFBSSxDQUFDZSxXQUFXLElBQUlkLEtBQUssQ0FBQ0QsSUFB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