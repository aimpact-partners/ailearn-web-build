System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, OwnerSection, UserData, __beyond_pkg, hmr;
  _export({
    ActivityCard: void 0,
    AssignmentCard: void 0,
    BaseCard: void 0,
    BaseFooterCard: void 0,
    BaseCardHeader: void 0,
    BaseHoverFooterCard: void 0,
    ClassroomCard: void 0,
    Container: void 0,
    ModuleCardActionsFooter: void 0,
    ModuleCardFooter: void 0,
    ModuleCard: void 0,
    OrganizationCard: void 0,
    ClassroomHeader: void 0,
    OwnerSection: void 0,
    UserData: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_aimpactAilearnApp031ComponentsHooks) {
      dependency_2 = _aimpactAilearnApp031ComponentsHooks;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_3 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_4 = _aimpactAilearnApp031ComponentsUi;
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
    }, function (_pragmateUi100Beta7List) {
      dependency_10 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_11 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_12 = _pragmateUi100Beta7Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/components/module-card"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/tooltip', dependency_11], ['pragmate-ui/image', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 3111327624,
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
              href,
              children,
              classroom,
              type
            } = props;
            const attrs = href ? {
              href
            } : {};
            const Parent = href ? _components.Link : React.Fragment;
            const {
              item,
              texts,
              entity,
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
            let cls = `entity-card activity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            if (classroom) cls += ' has-classroom';
            if (screenSize === 'xs') cls += ' entity-card--xs';
            if (type) cls += ` activity-card--${type}`;
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            const picture = item?.module?.picture ?? item?.picture;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: "activity"
            }, React.createElement("figcaption", null, React.createElement("div", {
              className: "figcaption__top-content"
            }, texts?.types?.[type]))), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description"
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
              icon: "watch",
              title: texts?.actions?.link,
              href: href
            })))));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./asignment
      ***************************/

      ims.set('./asignment', {
        hash: 3689923105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentCard = AssignmentCard;
          var React = require("react");
          var _dayjs = require("dayjs");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activities = require("./sections/activities");
          var _language = require("./sections/language");
          var _classroomHeader = require("./sections/classroom-header");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("./footer/actions");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          /*bundle*/
          function AssignmentCard(props) {
            const {
              href,
              children,
              classroom
            } = props;
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
            const date = (0, _dayjs.default)(item.timeCreated).format('MM/DD/YYYY');
            const clsFooter = `entity-card__footer${className ? ` ${className}` : ''}`;
            return React.createElement(Parent, {
              ...attrs
            }, React.createElement("article", {
              className: cls
            }, React.createElement(_ui.EntityImage, {
              src: item.picture,
              entity: entity,
              alt: title,
              size: "sm",
              type: type
            }, classroom ? React.createElement("figcaption", null, React.createElement(_classroomHeader.ClassroomHeader, {
              classroom: item.classroom
            })) : null), React.createElement("section", {
              className: "entity-card__content"
            }, React.createElement("div", {
              className: "absolute-content"
            }, React.createElement(_activities.ModuleActivities, {
              types: types
            })), React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description"
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
              icon: "watch",
              title: texts?.actions?.link,
              href: href
            })))));
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
        hash: 1238338737,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClassroomCard = ClassroomCard;
          var React = require("react");
          var _card = require("../base/card");
          var _header = require("../base/header");
          var _footer = require("../base/footer");
          var _hoverFooter = require("../base/hover-footer");
          var _owner = require("../sections/owner");
          var _toast = require("pragmate-ui/toast");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function ClassroomCard(props) {
            const {
              className,
              texts,
              item
            } = props;
            const cls = className ? `classroom-card ${className}` : 'classroom-card';
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
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.OwnerSection, {
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

      /***************************
      INTERNAL MODULE: ./container
      ***************************/

      ims.set('./container', {
        hash: 1016758102,
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
          /*bundle*/
          function Container({
            item,
            audience = true,
            texts,
            children,
            entity,
            type,
            disabled,
            className
          }) {
            const title = item.title ?? item.objective;
            const description = item.description ?? texts.item.description;
            const types = item?.activities?.types ?? [];
            if (!item?.activities?.types && item.type) {
              // is an activity
              types.push(item.type);
            }
            let cls = `entity-card ${disabled ? 'entity-card--disabled' : ''}`;
            if (className) cls += ` ${className}`;
            return React.createElement("article", {
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
              types: types
            })) : null, React.createElement("h5", {
              className: "card__title"
            }, title), React.createElement("span", {
              className: "item__description"
            }, description)), children);
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

      /*************************************
      INTERNAL MODULE: ./organizations/index
      *************************************/

      ims.set('./organizations/index', {
        hash: 2803923825,
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
            }, item.name)), React.createElement(_footer.BaseFooterCard, null, React.createElement(_owner.OwnerSection, {
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
        hash: 3786105609,
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
            types
          }) {
            if (!types) return null;
            const Item = ({
              item
            }) => {
              const cls = `activity-type__icon activity--${item}`;
              return _react.default.createElement("section", {
                className: cls
              }, _react.default.createElement(_icons.AppIcon, {
                icon: item
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
        hash: 1577463777,
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
            console.log(11, classroom);
            if (!classroom) return null;
            const {
              name
            } = classroom;
            return React.createElement("div", {
              className: "classroom-data__section"
            }, React.createElement(_tooltip.Tooltip, {
              content: name
            }, React.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), React.createElement("span", {
              className: "classroom-data__name"
            }, name));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./sections/language
      ***********************************/

      ims.set('./sections/language', {
        hash: 2853467246,
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
              name: "languages-es"
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./sections/owner
      ********************************/

      ims.set('./sections/owner', {
        hash: 1005336810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerSection = OwnerSection;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          var _tooltip = require("pragmate-ui/tooltip");
          /*bundle*/
          function OwnerSection({
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            console.log(1, photoUrl);
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
        hash: 547287460,
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
        "im": "./asignment",
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
        "from": "OwnerSection",
        "name": "OwnerSection"
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
        (require || prop === 'AssignmentCard') && _export("AssignmentCard", AssignmentCard = require ? require('./asignment').AssignmentCard : value);
        (require || prop === 'BaseCard') && _export("BaseCard", BaseCard = require ? require('./base/card').BaseCard : value);
        (require || prop === 'BaseFooterCard') && _export("BaseFooterCard", BaseFooterCard = require ? require('./base/footer').BaseFooterCard : value);
        (require || prop === 'BaseCardHeader') && _export("BaseCardHeader", BaseCardHeader = require ? require('./base/header').BaseCardHeader : value);
        (require || prop === 'BaseHoverFooterCard') && _export("BaseHoverFooterCard", BaseHoverFooterCard = require ? require('./base/hover-footer').BaseHoverFooterCard : value);
        (require || prop === 'ClassroomCard') && _export("ClassroomCard", ClassroomCard = require ? require('./classrooms/index').ClassroomCard : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./container').Container : value);
        (require || prop === 'ModuleCardActionsFooter') && _export("ModuleCardActionsFooter", ModuleCardActionsFooter = require ? require('./footer/actions').ModuleCardActionsFooter : value);
        (require || prop === 'ModuleCardFooter') && _export("ModuleCardFooter", ModuleCardFooter = require ? require('./footer/index').ModuleCardFooter : value);
        (require || prop === 'ModuleCard') && _export("ModuleCard", ModuleCard = require ? require('./index').ModuleCard : value);
        (require || prop === 'OrganizationCard') && _export("OrganizationCard", OrganizationCard = require ? require('./organizations/index').OrganizationCard : value);
        (require || prop === 'ClassroomHeader') && _export("ClassroomHeader", ClassroomHeader = require ? require('./sections/classroom-header').ClassroomHeader : value);
        (require || prop === 'OwnerSection') && _export("OwnerSection", OwnerSection = require ? require('./sections/owner').OwnerSection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsImhyZWYiLCJjaGlsZHJlbiIsImNsYXNzcm9vbSIsInR5cGUiLCJhdHRycyIsIlBhcmVudCIsIkxpbmsiLCJGcmFnbWVudCIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwibW9kdWxlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJMYW5ndWFnZSIsImxhbmd1YWdlIiwiTW9kdWxlQ2FyZEFjdGlvbnNGb290ZXIiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsImFjdGlvbnMiLCJsaW5rIiwiX2NsYXNzcm9vbUhlYWRlciIsIkFzc2lnbm1lbnRDYXJkIiwiYXVkaWVuY2UiLCJDbGFzc3Jvb21IZWFkZXIiLCJfY29udGV4dCIsIkJhc2VDYXJkIiwicHJlZml4IiwiQ2FyZENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYXJkQ29udGV4dCIsInVzZUNvbnRleHQiLCJCYXNlRm9vdGVyQ2FyZCIsIkJhc2VDYXJkSGVhZGVyIiwiQmFzZUhvdmVyRm9vdGVyQ2FyZCIsIl9jYXJkIiwiX2hlYWRlciIsIl9mb290ZXIiLCJfaG92ZXJGb290ZXIiLCJfb3duZXIiLCJfdG9hc3QiLCJDbGFzc3Jvb21DYXJkIiwiY29weSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJjb3BpZWQiLCJpZCIsIm5hbWUiLCJPd25lclNlY3Rpb24iLCJkYXRhIiwib3duZXIiLCJjb2RlIiwib25DbGljayIsIkFwcEljb24iLCJfYXVkaWVuY2UiLCJDb250YWluZXIiLCJBdWRpZW5jZSIsImxlbmd0aCIsInNob3dVc2VyIiwiX3VzZXJEYXRhIiwiTW9kdWxlQ2FyZEZvb3RlciIsIm93bmVyRGF0YSIsImNyZWF0b3IiLCJVc2VyRGF0YSIsIl9jb250YWluZXIiLCJNb2R1bGVDYXJkIiwiT3JnYW5pemF0aW9uQ2FyZCIsIl9saXN0IiwiX3JlYWN0IiwiSXRlbSIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJsZXZlbCIsIl90b29sdGlwIiwiY29uc29sZSIsImxvZyIsIlRvb2x0aXAiLCJfaW1hZ2UiLCJwaG90b1VybCIsIkltYWdlIiwibGFiZWwiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpdml0eS50c3giLCIvdHMvYXNpZ25tZW50LnRzeCIsIi90cy9iYXNlL2NhcmQudHN4IiwiL3RzL2Jhc2UvY29udGV4dC50cyIsIi90cy9iYXNlL2Zvb3Rlci50c3giLCIvdHMvYmFzZS9oZWFkZXIudHN4IiwiL3RzL2Jhc2UvaG92ZXItZm9vdGVyLnRzeCIsIi90cy9jbGFzc3Jvb21zL2luZGV4LnRzeCIsIi90cy9jb250YWluZXIudHN4IiwiL3RzL2Zvb3Rlci9hY3Rpb25zLnRzeCIsIi90cy9mb290ZXIvaW5kZXgudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy9vcmdhbml6YXRpb25zL2luZGV4LnRzeCIsIi90cy9zZWN0aW9ucy9hY3Rpdml0aWVzLnRzeCIsIi90cy9zZWN0aW9ucy9hdWRpZW5jZS50c3giLCIvdHMvc2VjdGlvbnMvY2xhc3Nyb29tLWhlYWRlci50c3giLCIvdHMvc2VjdGlvbnMvbGFuZ3VhZ2UudHN4IiwiL3RzL3NlY3Rpb25zL293bmVyLnRzeCIsIi90cy9zZWN0aW9ucy91c2VyLWRhdGEudHN4IiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxHQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxNQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxXQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxLQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxRQUFBLEdBQUFOLE9BQUE7VUFDQSxJQUFBTyxXQUFBLEdBQUFQLE9BQUE7VUFDQSxJQUFBUSxTQUFBLEdBQUFSLE9BQUE7VUFHTztVQUFVLFNBQVVTLFlBQVlBLENBQUNDLEtBQXVCO1lBQzlELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLFNBQVM7Y0FBRUM7WUFBSSxDQUFFLEdBQUdKLEtBQUs7WUFDakQsTUFBTUssS0FBSyxHQUFHSixJQUFJLEdBQUc7Y0FBRUE7WUFBSSxDQUFFLEdBQUcsRUFBRTtZQUNsQyxNQUFNSyxNQUFNLEdBQUdMLElBQUksR0FBR1AsV0FBQSxDQUFBYSxJQUFJLEdBQUdaLEtBQUssQ0FBQ2EsUUFBUTtZQUMzQyxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUM7WUFBUyxDQUFFLEdBQUdi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Q3JCdEYsS0FBQSxDQUFBbUMsYUFBQSxDQUFDa0YsTUFBQSxDQUFBRSxLQUFLO2NBQUNyRyxTQUFTLEVBQUMsaUJBQWlCO2NBQUNtQixHQUFHLEVBQUVpRjtZQUFRLEVBQUksQ0FDM0MsRUFFVnRILEtBQUEsQ0FBQW1DLGFBQUEsY0FDQ25DLEtBQUEsQ0FBQW1DLGFBQUE7Y0FBTWpCLFNBQVMsRUFBQztZQUFrQixHQUFFb0UsSUFBSSxDQUFRLENBQzNDLENBQ0csQ0FDTDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBdEYsS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQTBILE1BQUEsR0FBQTFILE9BQUE7VUFDQSxJQUFBc0gsUUFBQSxHQUFBdEgsT0FBQTtVQWNPO1VBQVUsU0FBVTJHLFFBQVFBLENBQUM7WUFBRWtCLEtBQUs7WUFBRTVGLElBQUk7WUFBRTREO1VBQUksQ0FBa0Q7WUFDeEcsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU07Y0FBRThCLFFBQVE7Y0FBRWhDO1lBQUksQ0FBRSxHQUFHRSxJQUFJO1lBRS9CLE9BQ0N4RixLQUFBLENBQUFtQyxhQUFBO2NBQUtqQixTQUFTLEVBQUM7WUFBb0IsR0FDakNzRyxLQUFLLElBQUl4SCxLQUFBLENBQUFtQyxhQUFBO2NBQUlqQixTQUFTLEVBQUM7WUFBa0IsR0FBRXNHLEtBQUssQ0FBTSxFQUN2RHhILEtBQUEsQ0FBQW1DLGFBQUE7Y0FBU2pCLFNBQVMsRUFBQztZQUFtQixHQUNyQ2xCLEtBQUEsQ0FBQW1DLGFBQUEsQ0FBQzhFLFFBQUEsQ0FBQUcsT0FBTztjQUFDekMsT0FBTyxFQUFFVztZQUFJLEdBQ3JCdEYsS0FBQSxDQUFBbUMsYUFBQSxDQUFDa0YsTUFBQSxDQUFBRSxLQUFLO2NBQUNyRyxTQUFTLEVBQUMsZ0JBQWdCO2NBQUNtQixHQUFHLEVBQUVpRjtZQUFRLEVBQUksQ0FDMUMsRUFFVnRILEtBQUEsQ0FBQW1DLGFBQUEsY0FDQ25DLEtBQUEsQ0FBQW1DLGFBQUE7Y0FBTWpCLFNBQVMsRUFBQztZQUFpQixHQUFFb0UsSUFBSSxDQUFRLEVBQy9DdEYsS0FBQSxDQUFBbUMsYUFBQTtjQUFNakIsU0FBUyxFQUFDO1lBQWlCLEdBQUVVLElBQUksQ0FBUSxDQUMxQyxDQUNHLENBQ0w7VUFFUjs7Ozs7Ozs7Ozs7VUNuQ0E7O1VBRUE2RixNQUFBLENBQUFDLGNBQUEsQ0FBQWhFLE9BQUE7WUFDQUQsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119