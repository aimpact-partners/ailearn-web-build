System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.29/components/hooks", "@aimpact/ailearn-app@0.3.29/components/icons", "@aimpact/ailearn-app@0.3.29/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "@aimpact/ailearn-app@0.3.29/model/wrapper", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0329ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp0329ComponentsHooks;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_4 = _aimpactAilearnApp0329ComponentsUi;
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
    }, function (_aimpactAilearnApp0329ModelWrapper) {
      dependency_10 = _aimpactAilearnApp0329ModelWrapper;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/toast', dependency_9], ['@aimpact/ailearn-app/model/wrapper', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/tooltip', dependency_15], ['pragmate-ui/image', dependency_16]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/components/module-card');
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
        hash: 450411109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIkFzc2lnbm1lbnRBY3Rpb25zQ2FyZCIsIm1vZGUiLCJpZCIsImFyY2hpdmVkIiwicmVzdG9yZSIsIm9uQ2xpY2siLCJfYXVkaWVuY2UiLCJfY2xhc3Nyb29tSGVhZGVyIiwiQXNzaWdubWVudEZpZ2NhcHRpb25DYXJkIiwiY29uc29sZSIsIndhcm4iLCJhdWRpZW5jZSIsIkNsYXNzcm9vbUhlYWRlciIsIkF1ZGllbmNlIiwiX2ZpZ2NhcHRpb24iLCJBc3NpZ25tZW50Q2FyZCIsIl9jb250ZXh0IiwiQmFzZUNhcmQiLCJwcmVmaXgiLCJDYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNhcmRDb250ZXh0IiwidXNlQ29udGV4dCIsIkJhc2VGb290ZXJDYXJkIiwiQmFzZUNhcmRIZWFkZXIiLCJCYXNlSG92ZXJGb290ZXJDYXJkIiwiX3RvYXN0IiwiX2NhcmQiLCJfZm9vdGVyIiwiX2hlYWRlciIsIl9ob3ZlckZvb3RlciIsIl9vd25lciIsIl93cmFwcGVyIiwiQ2xhc3Nyb29tQ2FyZCIsImlzTW9iaWxlIiwiaW5jbHVkZXMiLCJBaUxlYXJuV3JhcHBlciIsImRldmljZSIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwibmFtZSIsIkNhcmRPd25lclNlY3Rpb24iLCJkYXRhIiwib3duZXIiLCJjb2RlIiwiY2xhc3Nyb29tcyIsImRlbGV0ZSIsIl9mcmFtZXJNb3Rpb24iLCJDb250YWluZXIiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiYXJ0aWNsZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwibGVuZ3RoIiwiRHJhZnRDYXJkIiwiZHJhZnRUaXRsZSIsInNob3dVc2VyIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsIm93bmVyRGF0YSIsImNyZWF0b3IiLCJVc2VyRGF0YSIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiX3JlYWN0IiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwib3BlbiIsInNldE9wZW4iLCJyZWFkeSIsInVzZVRleHRzIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93Iiwib25DYW5jZWwiLCJPcmdhbml6YXRpb25DYXJkIiwiX2xpc3QiLCJJdGVtIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImxldmVsIiwiX3Rvb2x0aXAiLCJUb29sdGlwIiwiX2ltYWdlIiwicGhvdG9VcmwiLCJJbWFnZSIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2Fzc2lnbm1lbnQvYWN0aW9ucy50c3giLCIvdHMvYXNzaWdubWVudC9maWdjYXB0aW9uLnRzeCIsIi90cy9hc3NpZ25tZW50L2luZGV4LnRzeCIsIi90cy9iYXNlL2NhcmQudHN4IiwiL3RzL2Jhc2UvY29udGV4dC50cyIsIi90cy9iYXNlL2Zvb3Rlci50c3giLCIvdHMvYmFzZS9oZWFkZXIudHN4IiwiL3RzL2Jhc2UvaG92ZXItZm9vdGVyLnRzeCIsIi90cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2RyYWZ0LnRzeCIsIi90cy9mb290ZXIvYWN0aW9ucy50c3giLCIvdHMvZm9vdGVyL2luZGV4LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9pbmRleC50c3giLCIvdHMvc2VjdGlvbnMvYWN0aXZpdGllcy50c3giLCIvdHMvc2VjdGlvbnMvYXVkaWVuY2UudHN4IiwiL3RzL3NlY3Rpb25zL2NsYXNzcm9vbS1oZWFkZXIudHN4IiwiL3RzL3NlY3Rpb25zL2xhbmd1YWdlLnRzeCIsIi90cy9zZWN0aW9ucy9vd25lci50c3giLCIvdHMvc2VjdGlvbnMvdXNlci1kYXRhLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3Mi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QSxDQUFBQyxPQUFPO2NBQUNqRSxPQUFPLEVBQUVVO1lBQUksR0FDckJ0RyxLQUFBLENBQUFrQyxhQUFBLENBQUM0SCxNQUFBLENBQUFFLEtBQUs7Y0FBQ3RKLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQzBCLEdBQUcsRUFBRTJIO1lBQVEsRUFBSSxDQUMzQyxFQUVWL0osS0FBQSxDQUFBa0MsYUFBQSxjQUNDbEMsS0FBQSxDQUFBa0MsYUFBQTtjQUFNeEIsU0FBUyxFQUFDO1lBQWtCLEdBQUU0RixJQUFJLENBQVEsQ0FDM0MsQ0FDRyxDQUNMO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUF0RyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBbUssTUFBQSxHQUFBbkssT0FBQTtVQUNBLElBQUFpSyxRQUFBLEdBQUFqSyxPQUFBO1VBY087VUFBVSxTQUFVeUksUUFBUUEsQ0FBQztZQUFFNkIsS0FBSztZQUFFckksSUFBSTtZQUFFNEU7VUFBSSxDQUFrRDtZQUN4RyxJQUFJLENBQUNBLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTTtjQUFFdUQsUUFBUTtjQUFFekQ7WUFBSSxDQUFFLEdBQUdFLElBQUk7WUFFL0IsT0FDQ3hHLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBS3hCLFNBQVMsRUFBQztZQUFvQixHQUNqQ3VKLEtBQUssSUFBSWpLLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBSXhCLFNBQVMsRUFBQztZQUFrQixHQUFFdUosS0FBSyxDQUFNLEVBQ3ZEakssS0FBQSxDQUFBa0MsYUFBQTtjQUFTeEIsU0FBUyxFQUFDO1lBQW1CLEdBQ3JDVixLQUFBLENBQUFrQyxhQUFBLENBQUMwSCxRQUFBLENBQUFDLE9BQU87Y0FBQ2pFLE9BQU8sRUFBRVU7WUFBSSxHQUNyQnRHLEtBQUEsQ0FBQWtDLGFBQUEsQ0FBQzRILE1BQUEsQ0FBQUUsS0FBSztjQUFDdEosU0FBUyxFQUFDLGdCQUFnQjtjQUFDMEIsR0FBRyxFQUFFMkg7WUFBUSxFQUFJLENBQzFDLEVBRVYvSixLQUFBLENBQUFrQyxhQUFBLGNBQ0NsQyxLQUFBLENBQUFrQyxhQUFBO2NBQU14QixTQUFTLEVBQUM7WUFBaUIsR0FBRTRGLElBQUksQ0FBUSxFQUMvQ3RHLEtBQUEsQ0FBQWtDLGFBQUE7Y0FBTXhCLFNBQVMsRUFBQztZQUFpQixHQUFFa0IsSUFBSSxDQUFRLENBQzFDLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7OztVQ25DQTs7VUFFQXNJLE1BQUEsQ0FBQUMsY0FBQSxDQUFBN0YsT0FBQTtZQUNBRCxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=