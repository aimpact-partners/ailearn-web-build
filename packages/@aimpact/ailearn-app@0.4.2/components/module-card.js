System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/ailearn-app@0.4.2/components/hooks", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/ailearn-app@0.4.2/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.2/components", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.2/toast", "pragmate-ui@1.0.2/base", "framer-motion@10.18.0", "pragmate-ui@1.0.2/modal", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/tooltip", "pragmate-ui@1.0.2/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentActionsCard, AssignmentFigcaptionCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, DraftCard, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
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
    ClassroomHeader: void 0,
    CardOwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_4 = _aimpactAilearnApp042ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi102Components) {
      dependency_6 = _pragmateUi102Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_8 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi102Toast) {
      dependency_9 = _pragmateUi102Toast;
    }, function (_pragmateUi102Base) {
      dependency_10 = _pragmateUi102Base;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi102Modal) {
      dependency_12 = _pragmateUi102Modal;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_13 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102List) {
      dependency_14 = _pragmateUi102List;
    }, function (_pragmateUi102Tooltip) {
      dependency_15 = _pragmateUi102Tooltip;
    }, function (_pragmateUi102Image) {
      dependency_16 = _pragmateUi102Image;
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
          "vspecifier": "@aimpact/ailearn-app@0.4.2/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/model/wrapper', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/base', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 4006710617,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityCard = ActivityCard;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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
        hash: 465163902,
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
            return React.createElement(_actions.ModuleCardActionsFooter, null, mode === 'teacher' && React.createElement(_icons.AppIconButton, {
              icon: "copy",
              title: texts?.actions?.copy,
              onClick: copyToClipboard
            }), React.createElement(_icons.AppIconButton, {
              icon: "watch",
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
        hash: 2825290827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
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

      /******************************************
      INTERNAL MODULE: ./sections/activities copy
      ******************************************/

      ims.set('./sections/activities copy', {
        hash: 990806964,
        creator: function (require, exports) {
          // import { AppIcon } from '@aimpact/ailearn-app/components/icons';
          // import { List } from 'pragmate-ui/list';
          // import React from 'react';
          // export function aModuleActivities({ types, texts }) {
          // 	const [ready, setReady] = React.useState(false);
          // 	const [displayTypes, setDisplayTypes] = React.useState(types);
          // 	const listRef = React.useRef(null);
          // 	React.useEffect(() => {
          // 		if (!types || types.length === 0) {
          // 			setReady(true);
          // 			return;
          // 		}
          // 		const calculateFit = () => {
          // 			if (!listRef.current) return;
          // 			const parentElement = listRef.current.closest('.entity-card__content');
          // 			if (!parentElement) return;
          // 			const listElement = listRef.current;
          // 			const parentWidth = parentElement.offsetWidth;
          // 			const parentHeight = parentElement.offsetHeight;
          // 			// Get all activity icons to measure their size
          // 			const tempList = document.createElement('div');
          // 			tempList.className = 'activity-types__list';
          // 			tempList.style.position = 'absolute';
          // 			tempList.style.visibility = 'hidden';
          // 			tempList.style.left = '-9999px';
          // 			document.body.appendChild(tempList);
          // 			// Create temporary items to measure
          // 			types.forEach((type, index) => {
          // 				const tempItem = document.createElement('section');
          // 				tempItem.className = `activity-type__icon activity--${type}`;
          // 				tempItem.innerHTML = `<div class="app-icon" title="${type}"></div>`;
          // 				tempList.appendChild(tempItem);
          // 			});
          // 			// Measure the first item to get approximate width
          // 			const firstItem = tempList.querySelector('.activity-type__icon');
          // 			if (!firstItem) {
          // 				document.body.removeChild(tempList);
          // 				return;
          // 			}
          // 			const itemWidth = firstItem.offsetWidth;
          // 			const itemHeight = firstItem.offsetHeight;
          // 			const availableWidth = parentWidth - 20; // Account for padding
          // 			const availableHeight = parentHeight - 20; // Account for padding
          // 			// Calculate how many items can fit
          // 			const itemsPerRow = Math.floor(availableWidth / itemWidth);
          // 			const rows = Math.floor(availableHeight / itemHeight);
          // 			const maxItems = itemsPerRow * rows;
          // 			// Clean up temporary elements
          // 			document.body.removeChild(tempList);
          // 			// If we can fit all items, use original types
          // 			if (maxItems >= types.length) {
          // 				setDisplayTypes(types);
          // 			} else {
          // 				// Calculate how many items to show and how many are hidden
          // 				const itemsToShow = Math.max(1, maxItems - 1); // Leave space for number indicator
          // 				const hiddenCount = types.length - itemsToShow;
          // 				const newTypes = [
          // 					...types.slice(0, itemsToShow),
          // 					{ type: 'total', count: hiddenCount }
          // 				];
          // 				setDisplayTypes(newTypes);
          // 			}
          // 			setReady(true);
          // 		};
          // 		// Use a small delay to ensure DOM is ready
          // 		const timer = setTimeout(calculateFit, 100);
          // 		return () => clearTimeout(timer);
          // 	}, [types]);
          // 	if (!types || !ready) return null;
          // 	const Item = ({ item }) => {
          // 		// Check if this is a number indicator
          // 		if (item && typeof item === 'object' && item.type === 'total') {
          // 			return (
          // 				<section className="activity-type__icon activities__number">
          // 					<div className="activities__number-content">
          // 						+{item.count}
          // 					</div>
          // 				</section>
          // 			);
          // 		}
          // 		// Regular activity item
          // 					_icon activity--${item}`;
          // 		return (
          // 			<section className={cls}>
          // 				<AppIcon icon={item} title={item} />
          // 			</section>
          // 		);
          // 	};
          // 	return <List ref={listRef} className="activity-types__list" items={displayTypes} control={Item} />;
          // }
          "use strict";
        }
      });

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 2868719327,
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
              return _react.default.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2xhbmd1YWdlIiwiQWN0aXZpdHlDYXJkIiwicHJvcHMiLCJpdGVtIiwidGV4dHMiLCJlbnRpdHkiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhyZWYiLCJjaGlsZHJlbiIsImNsYXNzcm9vbSIsInR5cGUiLCJhdHRycyIsIlBhcmVudCIsIkxpbmsiLCJGcmFnbWVudCIsInRpdGxlIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJ0eXBlcyIsImFjdGl2aXRpZXMiLCJzY3JlZW5TaXplIiwidXNlTWVkaWFRdWVyeSIsInB1c2giLCJjbHMiLCJkYXRlIiwiZGVmYXVsdCIsInRpbWVDcmVhdGVkIiwiZm9ybWF0IiwiY2xzRm9vdGVyIiwicGljdHVyZSIsImNyZWF0ZUVsZW1lbnQiLCJFbnRpdHlJbWFnZSIsInNyYyIsImFsdCIsInNpemUiLCJBcHBJY29uIiwiaWNvbiIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl93cmFwcGVyIiwiX3RvYXN0IiwiQXNzaWdubWVudEFjdGlvbnNDYXJkIiwibW9kZSIsImlkIiwiY29weVRvQ2xpcGJvYXJkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXR0aW5ncyIsImJhc2VVcmwiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImNvcHkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb3B5RXJyb3IiLCJvbkNsaWNrIiwiYXJjaGl2ZWQiLCJyZXN0b3JlIiwiX2F1ZGllbmNlIiwiX2NsYXNzcm9vbUhlYWRlciIsIkFzc2lnbm1lbnRGaWdjYXB0aW9uQ2FyZCIsIndhcm4iLCJhdWRpZW5jZSIsIkNsYXNzcm9vbUhlYWRlciIsIkF1ZGllbmNlIiwiX2FjdGl2aXRpZXMiLCJfZmlnY2FwdGlvbiIsIkFzc2lnbm1lbnRDYXJkIiwiTW9kdWxlQWN0aXZpdGllcyIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIkNsYXNzcm9vbUNhcmQiLCJpc01vYmlsZSIsImluY2x1ZGVzIiwiQWlMZWFybldyYXBwZXIiLCJkZXZpY2UiLCJjb250ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb3BpZWQiLCJuYW1lIiwiQ2FyZE93bmVyU2VjdGlvbiIsImRhdGEiLCJvd25lciIsImNvZGUiLCJjbGFzc3Jvb21zIiwiZGVsZXRlIiwiX2ZyYW1lck1vdGlvbiIsIkNvbnRhaW5lciIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJhcnRpY2xlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJsZW5ndGgiLCJEcmFmdENhcmQiLCJkcmFmdFRpdGxlIiwic2hvd1VzZXIiLCJfdXNlckRhdGEiLCJNb2R1bGVDYXJkRm9vdGVyIiwib3duZXJEYXRhIiwiY3JlYXRvciIsIlVzZXJEYXRhIiwiX2NvbnRhaW5lciIsIk1vZHVsZUNhcmQiLCJfcmVhY3QiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJvcGVuIiwic2V0T3BlbiIsInJlYWR5IiwidXNlVGV4dHMiLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsIkNvbmZpcm1Nb2RhbCIsInNob3ciLCJvbkNhbmNlbCIsIk9yZ2FuaXphdGlvbkNhcmQiLCJUT1RBTF9BQ1RJVklUSUVTIiwicGx1cyIsInNldFBsdXMiLCJJdGVtIiwic2xpY2UiLCJtYXAiLCJpbmRleCIsImtleSIsImxldmVsIiwiX3Rvb2x0aXAiLCJUb29sdGlwIiwiX2ltYWdlIiwicGhvdG9VcmwiLCJJbWFnZSIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2Fzc2lnbm1lbnQvYWN0aW9ucy50c3giLCIvdHMvYXNzaWdubWVudC9maWdjYXB0aW9uLnRzeCIsIi90cy9hc3NpZ25tZW50L2luZGV4LnRzeCIsIi90cy9iYXNlL2NhcmQudHN4IiwiL3RzL2Jhc2UvY29udGV4dC50cyIsIi90cy9iYXNlL2Zvb3Rlci50c3giLCIvdHMvYmFzZS9oZWFkZXIudHN4IiwiL3RzL2Jhc2UvaG92ZXItZm9vdGVyLnRzeCIsIi90cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2RyYWZ0LnRzeCIsIi90cy9mb290ZXIvYWN0aW9ucy50c3giLCIvdHMvZm9vdGVyL2luZGV4LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9pbmRleC50c3giLCIvdHMvc2VjdGlvbnMvYWN0aXZpdGllcyBjb3B5LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxHQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFFQSxJQUFBTyxTQUFBLEdBQUFQLE9BQUE7VUFHTztVQUFVLFNBQVVRLFlBQVlBLENBQUNDLEtBQXVCO1lBQzlELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLE1BQU07Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsUUFBUTtjQUFFQyxTQUFTO2NBQUVDO1lBQUksQ0FBRSxHQUFHVCxLQUFLO1lBQzNGLE1BQU1VLEtBQUssR0FBR0osSUFBSSxJQUFJLENBQUNGLFFBQVEsR0FBRztjQUFFRTtZQUFJLENBQUUsR0FBRyxFQUFFO1lBQy9DLE1BQU1LLE1BQU0sR0FBR0wsSUFBSSxJQUFJLENBQUNGLFFBQVEsR0FBR1QsV0FBQSxDQUFBaUIsSUFBSSxHQUFHaEIsS0FBSyxDQUFDaUIsUUFBUTtZQUN4RCxNQUFNQyxLQUFLLEdBQUdiLElBQUksQ0FBQ2EsS0FBSyxJQUFJYixJQUFJLENBQUNjLFNBQVM7WUFDMUMsTUFBTUMsV0FBVyxHQUFHZixJQUFJLENBQUNlLFdBQVcsSUFBSWQsS0FBSyxDQUFDRCxJQUFJLENBQUNlLFdB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