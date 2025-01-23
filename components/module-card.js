System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@aimpact/ailearn-app@0.3.1/components/hooks", "@aimpact/ailearn-app@0.3.1/components/icons", "@aimpact/ailearn-app@0.3.1/components/ui", "dayjs@1.11.13", "pragmate-ui@1.0.0-beta.7/components", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/base", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, ActivityCard, AssignmentCard, BaseCard, BaseFooterCard, BaseCardHeader, BaseHoverFooterCard, ClassroomCard, Container, ModuleCardActionsFooter, ModuleCardFooter, ModuleCard, OrganizationCard, ClassroomHeader, CardOwnerSection, UserData, __beyond_pkg, hmr;
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
    CardOwnerSection: void 0,
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
    }, function (_pragmateUi100Beta7Modal) {
      dependency_10 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_12 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_13 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_14 = _pragmateUi100Beta7Image;
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/ailearn-app/components/hooks', dependency_2], ['@aimpact/ailearn-app/components/icons', dependency_3], ['@aimpact/ailearn-app/components/ui', dependency_4], ['dayjs', dependency_5], ['pragmate-ui/components', dependency_6], ['react', dependency_7], ['pragmate-ui/base', dependency_8], ['pragmate-ui/toast', dependency_9], ['pragmate-ui/modal', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/tooltip', dependency_13], ['pragmate-ui/image', dependency_14]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/components/module-card');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./activity
      **************************/
      ims.set('./activity', {
        hash: 2129683518,
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
            }, React.createElement(_icons.AppIcon, {
              icon: type
            }), texts?.types?.[type]))), React.createElement("section", {
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
              icon: "go",
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
        hash: 1507368364,
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
        hash: 2320852600,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX2ljb25zIiwiX3VpIiwiX2RheWpzIiwiX2NvbXBvbmVudHMiLCJSZWFjdCIsIl9hY3Rpb25zIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJBY3Rpdml0eUNhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0ZXh0cyIsImVudGl0eSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwiY2xhc3Nyb29tIiwidHlwZSIsImF0dHJzIiwiUGFyZW50IiwiTGluayIsIkZyYWdtZW50IiwidGl0bGUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsInR5cGVzIiwiYWN0aXZpdGllcyIsInNjcmVlblNpemUiLCJ1c2VNZWRpYVF1ZXJ5IiwicHVzaCIsImNscyIsImRhdGUiLCJkZWZhdWx0IiwidGltZUNyZWF0ZWQiLCJmb3JtYXQiLCJjbHNGb290ZXIiLCJwaWN0dXJlIiwibW9kdWxlIiwiY3JlYXRlRWxlbWVudCIsIkVudGl0eUltYWdlIiwic3JjIiwiYWx0Iiwic2l6ZSIsIkFwcEljb24iLCJpY29uIiwiTW9kdWxlQWN0aXZpdGllcyIsIkxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJNb2R1bGVDYXJkQWN0aW9uc0Zvb3RlciIsIkFwcEljb25CdXR0b24iLCJhY3Rpb25zIiwibGluayIsIl9jbGFzc3Jvb21IZWFkZXIiLCJBc3NpZ25tZW50Q2FyZCIsImF1ZGllbmNlIiwiQ2xhc3Nyb29tSGVhZGVyIiwiX2NvbnRleHQiLCJCYXNlQ2FyZCIsInByZWZpeCIsIkNhcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FyZENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQmFzZUZvb3RlckNhcmQiLCJCYXNlQ2FyZEhlYWRlciIsIkJhc2VIb3ZlckZvb3RlckNhcmQiLCJfY2FyZCIsIl9oZWFkZXIiLCJfZm9vdGVyIiwiX2hvdmVyRm9vdGVyIiwiX293bmVyIiwiX3RvYXN0IiwiQ2xhc3Nyb29tQ2FyZCIsImNvcHkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiY29waWVkIiwiaWQiLCJuYW1lIiwiQ2FyZE93bmVyU2VjdGlvbiIsImRhdGEiLCJvd25lciIsImNvZGUiLCJvbkNsaWNrIiwiX2F1ZGllbmNlIiwiQ29udGFpbmVyIiwiQXVkaWVuY2UiLCJsZW5ndGgiLCJzaG93VXNlciIsIl91c2VyRGF0YSIsIk1vZHVsZUNhcmRGb290ZXIiLCJvd25lckRhdGEiLCJjcmVhdG9yIiwiVXNlckRhdGEiLCJfY29udGFpbmVyIiwiTW9kdWxlQ2FyZCIsIl9yZWFjdCIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJyZWFkeSIsInVzZVRleHRzIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJDb25maXJtTW9kYWwiLCJzaG93Iiwib25DYW5jZWwiLCJPcmdhbml6YXRpb25DYXJkIiwiX2xpc3QiLCJJdGVtIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImxldmVsIiwiX3Rvb2x0aXAiLCJUb29sdGlwIiwiX2ltYWdlIiwicGhvdG9VcmwiLCJJbWFnZSIsImxhYmVsIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWN0aXZpdHkudHN4IiwiL3RzL2FzaWdubWVudC50c3giLCIvdHMvYmFzZS9jYXJkLnRzeCIsIi90cy9iYXNlL2NvbnRleHQudHMiLCIvdHMvYmFzZS9mb290ZXIudHN4IiwiL3RzL2Jhc2UvaGVhZGVyLnRzeCIsIi90cy9iYXNlL2hvdmVyLWZvb3Rlci50c3giLCIvdHMvY2xhc3Nyb29tcy9pbmRleC50c3giLCIvdHMvY29udGFpbmVyLnRzeCIsIi90cy9mb290ZXIvYWN0aW9ucy50c3giLCIvdHMvZm9vdGVyL2luZGV4LnRzeCIsIi90cy9pbmRleC50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvb3JnYW5pemF0aW9ucy9pbmRleC50c3giLCIvdHMvc2VjdGlvbnMvYWN0aXZpdGllcy50c3giLCIvdHMvc2VjdGlvbnMvYXVkaWVuY2UudHN4IiwiL3RzL3NlY3Rpb25zL2NsYXNzcm9vbS1oZWFkZXIudHN4IiwiL3RzL3NlY3Rpb25zL2xhbmd1YWdlLnRzeCIsIi90cy9zZWN0aW9ucy9vd25lci50c3giLCIvdHMvc2VjdGlvbnMvdXNlci1kYXRhLnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsR0FBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBQ0EsSUFBQUksV0FBQSxHQUFBSixPQUFBO1VBQ0EsSUFBQUssS0FBQSxHQUFBTCxPQUFBO1VBQ0EsSUFBQU0sUUFBQSxHQUFBTixPQUFBO1VBQ0EsSUFBQU8sV0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsU0FBQSxHQUFBUixPQUFBO1VBR087VUFBVSxTQUFVUyxZQUFZQSxDQUFDQyxLQUF1QjtZQUM5RCxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxNQUFNO2NBQUVDLFFBQVE7Y0FBRUMsU0FBUztjQUFFQyxJQUFJO2NBQUVDLFFB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