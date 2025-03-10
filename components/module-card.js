System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.20/components/hooks", "@aimpact/ailearn-app@0.3.20/components/icons", "@aimpact/ailearn-app@0.3.20/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.20/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp0320ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp0320ComponentsHooks;
    }, function (_aimpactAilearnApp0320ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0320ComponentsIcons;
    }, function (_aimpactAilearnApp0320ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0320ComponentsUi;
    }, function (_dayjs2) {
      dependency_5 = _dayjs2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Base) {
      dependency_8 = _pragmateUi100Beta7Base;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_9 = _pragmateUi100Beta7Toast;
    }, function (_aimpactAilearnApp0320ModelWrapper) {
      dependency_10 = _aimpactAilearnApp0320ModelWrapper;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_13 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_14 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_15 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_16 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.20"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.20/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.20/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 436988623,
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
          var _activities = require("./sections/activities");
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
        hash: 3350541299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentActionsCard = AssignmentActionsCard;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var React = require("react");
          var _actions = require("../footer/actions");
          /*bundle*/
          function AssignmentActionsCard(props) {
            const {
              texts,
              mode,
              id
            } = props;
            return React.createElement(_actions.ModuleCardActionsFooter, null, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              title: texts?.actions?.link,
              href: `/assignments/${id}`
            }), mode === 'teacher' && React.createElement(_icons.AppIconButton, {
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
        hash: 1914241138,
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

      /*************************************
      INTERNAL MODULE: ./sections/activities
      *************************************/

      ims.set('./sections/activities', {
        hash: 2568294999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          function ModuleActivities({
            types,
            texts
          }) {
            if (!types) return null;
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
            return _react.default.createElement(_list.List, {
              className: "activity-types__list",
              items: types,
              control: Item
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIkFzc2lnbm1lbnRBY3Rpb25zQ2FyZCIsIm1vZGUiLCJpZCIsImFyY2hpdmVkIiwicmVzdG9yZSIsIm9uQ2xpY2siLCJfYXVkaWVuY2UiLCJfY2xhc3Nyb29tSGVhZGVyIiwiQXNzaWdubWVudEZpZ2NhcHRpb25DYXJkIiwiY29uc29sZSIsIndhcm4iLCJhdWRpZW5jZSIsIkNsYXNzcm9vbUhlYWRlciIsIkF1ZGllbmNlIiwiX2ZpZ2NhcHRpb24iLCJBc3NpZ25tZW50Q2FyZCIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX3RvYXN0IiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIl93cmFwcGVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwibmFtZSIsIkNhcmRPd25lclNlY3Rpb24iLCJkYXRhIiwib3duZXIiLCJjb2RlIiwiY2xhc3Nyb29tcyIsImRlbGV0ZSIsIl9mcmFtZXJNb3Rpb24iLCJDb250YWluZXIiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiYXJ0aWNsZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwibGVuZ3RoIiwiRHJhZnRDYXJkIiwiZHJhZnRUaXRsZSIsInNob3dVc2VyIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsIm93bmVyRGF0YSIsImNyZWF0b3IiLCJVc2VyRGF0YSIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93Iiwib25DYW5jZWwiLCJPcmdhbml6YXRpb25DYXJkIiwiX2xpc3QiLCJJdGVtIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImxldmVsIiwiX3Rvb2x0aXAiLCJUb29sdGlwIiwiX2ltYWdlIiwicGhvdG9VcmwiLCJJbWFnZSIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2Fzc2lnbm1lbnQvYWN0aW9ucy50c3giLCIvdHMvYXNzaWdubWVudC9maWdjYXB0aW9uLnRzeCIsIi90cy9hc3NpZ25tZW50L2luZGV4LnRzeCIsIi90cy9iYXNlL2NhcmQudHN4IiwiL3RzL2Jhc2UvY29udGV4dC50cyIsIi90cy9iYXNlL2Zvb3Rlci50c3giLCIvdHMvYmFzZS9oZWFkZXIudHN4IiwiL3RzL2Jhc2UvaG92ZXItZm9vdGVyLnRzeCIsIi90cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2RyYWZ0LnRzeCIsIi90cy9mb290ZXIvYWN0aW9ucy50c3giLCIvdHMvZm9vdGVyL2luZGV4LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9pbmRleC50c3giLCIvdHMvc2VjdGlvbnMvYWN0aXZpdGllcy50c3giLCIvdHMvc2VjdGlvbnMvYXVkaWVuY2UudHN4IiwiL3RzL3NlY3Rpb25zL2NsYXNzcm9vbS1oZWFkZXIudHN4IiwiL3RzL3NlY3Rpb25zL2xhbmd1YWdlLnRzeCIsIi90cy9zZWN0aW9ucy9vd25lci50c3giLCIvdHMvc2VjdGlvbnMvdXNlci1kYXRhLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3Mi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VTtZQUFJLEdBQ3JCdEcsS0FBQSxDQUFBa0MsYUFBQSxDQUFDNEgsTUFBQSxDQUFBRSxLQUFLO2NBQUN0SixTQUFTLEVBQUMsaUJBQWlCO2NBQUMwQixHQUFHLEVBQUUySDtZQUFRLEVBQUksQ0FDM0MsRUFFVi9KLEtBQUEsQ0FBQWtDLGFBQUEsY0FDQ2xDLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFrQixHQUFFNEYsSUFBSSxDQUFRLENBQzNDLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBdEcsS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQW1LLE1BQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBaUssUUFBQSxHQUFBakssT0FBQTtVQWNPO1VBQVUsU0FBVXlJLFFBQVFBLENBQUM7WUFBRTZCLEtBQUs7WUFBRXJJLElBQUk7WUFBRTRFO1VBQUksQ0FBa0Q7WUFDeEcsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRXVELFFBQVE7Y0FBRXpEO1lBQUksQ0FBRSxHQUFHRSxJQUFJO1lBRS9CLE9BQ0N4RyxLQUFBLENBQUFrQyxhQUFBO2NBQUt4QixTQUFTLEVBQUM7WUFBb0IsR0FDakN1SixLQUFLLElBQUlqSyxLQUFBLENBQUFrQyxhQUFBO2NBQUl4QixTQUFTLEVBQUM7WUFBa0IsR0FBRXVKLEtBQUssQ0FBTSxFQUN2RGpLLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBU3hCLFNBQVMsRUFBQztZQUFtQixHQUNyQ1YsS0FBQSxDQUFBa0MsYUFBQSxDQUFDMEgsUUFBQSxDQUFBQyxPQUFPO2NBQUNqRSxPQUFPLEVBQUVVO1lBQUksR0FDckJ0RyxLQUFBLENBQUFrQyxhQUFBLENBQUM0SCxNQUFBLENBQUFFLEtBQUs7Y0FBQ3RKLFNBQVMsRUFBQyxnQkFBZ0I7Y0FBQzBCLEdBQUcsRUFBRTJIO1lBQVEsRUFBSSxDQUMxQyxFQUVWL0osS0FBQSxDQUFBa0MsYUFBQSxjQUNDbEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQWlCLEdBQUU0RixJQUFJLENBQVEsRUFDL0N0RyxLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBaUIsR0FBRWtCLElBQUksQ0FBUSxDQUMxQyxDQUNHLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7VUNuQ0E7O1VBRUFzSSxNQUFBLENBQUFDLGNBQUEsQ0FBQTdGLE9BQUE7WUFDQUQsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119