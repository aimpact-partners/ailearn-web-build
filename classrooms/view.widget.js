System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/ailearn-app@0.2.10/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/ailearn-app@0.2.10/components/module-card", "@aimpact/ailearn-app@0.2.10/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactAilearnApp0210WidgetsBase) {
      dependency_5 = _aimpactAilearnApp0210WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_9 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_aimpactAilearnApp0210ComponentsModuleCard) {
      dependency_11 = _aimpactAilearnApp0210ComponentsModuleCard;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_12 = _aimpactAilearnApp0210I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_14 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_17 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_22 = _pragmateUi100Beta6Tabs;
    }, function (_aimpactChatSdk130Session) {
      dependency_23 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_24 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_25 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@aimpact/ailearn-app/components/module-card', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/classrooms/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2137039665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
              _mainLayout.LayoutBroker.refresh = () => this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              _mainLayout.LayoutBroker.refresh = null;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3153977744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/widgets/base");
          var _beyond_context = require("beyond_context");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classroom);
              this.defineReactiveProps(['fetching']);
            }
            async approve({
              uid,
              role
            }) {
              try {
                this.fetching = true;
                const res = await this.model.approve({
                  id: this.model.id,
                  uid,
                  role
                });
                if (!res.status) {
                  throw new Error('Error inviting user');
                }
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async reject(uid) {
              try {
                this.fetching = true;
                const res = await this.model.reject({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async cancelInvitation(email) {
              try {
                this.fetching = true;
                const res = await this.model.cancelInvitation({
                  id: this.model.id,
                  email
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async updateRole(values) {
              try {
                this.fetching = true;
                const res = await this.model.updateRole(values);
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async removeMember(uid) {
              try {
                this.fetching = true;
                const res = await this.model.removeMember({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/empty
      *****************************************/

      ims.set('./views/assignments/empty', {
        hash: 1224010999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.empty.assignments;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/index
      *****************************************/

      ims.set('./views/assignments/index', {
        hash: 3524772600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Asssignments = Asssignments;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          var _item = require("./item");
          var _empty = require("./empty");
          function Asssignments() {
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!store.model.assignments) {
              return React.createElement(_empty.EmptyList, null);
            }
            return React.createElement("div", null, React.createElement(_list.List, {
              className: "entity__list",
              items: store.model.assignments,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assignments/item
      ****************************************/

      ims.set('./views/assignments/item', {
        hash: 820846694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _context = require("../context");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const href = store.isAdmin ? `/dashboard/${item.id}` : `/assignments/${item.id}`;
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              audience: false,
              item: item.module,
              showDate: true,
              texts: texts,
              href: href
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module,
              showUser: false
            }, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              href: `/assignments/${item.id}`,
              title: texts.viewAssignment
            }), store.isAdmin && React.createElement(_icons.AppIconButton, {
              href: `/dashboard/${item.id}`,
              title: "Dashboard",
              icon: "dashboard"
            }), item?.playground?.assignment && React.createElement("a", {
              target: "_blank",
              href: item.playground.assignment,
              className: "right-action btn btn-primary outline"
            }, globalTexts.actions.test)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2074456393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 3854165243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApproveModal = ApproveModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          function ApproveModal({
            item,
            show,
            onClose,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(null);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
                onClose();
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.forms.approve.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.forms.approve.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 3805124601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = ConfirmModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function ConfirmModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: selectRole,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            const disabled = selectRole === item.role || loading || !selectRole;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 800445425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleModal = RoleModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function RoleModal({
            item,
            show,
            onClose,
            role,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = roleSelected === item.role || loading || !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              value: role,
              options: options,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 3863855759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts,
              globalTexts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.model.invite({
                ...values
              });
              if (!response.status) {
                // setError(response.error);
                _toast.toast.success(error);
              }
              _toast.toast.success(texts.system.invite.success);
              handleClose();
            };
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            if (!show) return null;
            const options = ['manager', 'member'].map(item => ({
              value: item,
              label: texts.roles[item].title
            }));
            const {
              name,
              email
            } = values;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
              placeholder: texts.form.role.placeholder,
              options: options,
              onChange: handleChange
            }), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.form.name.label,
              type: "text",
              name: "name",
              value: name,
              variant: "floating",
              onChange: handleChange,
              placeholder: texts.form.name.placeholder,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.form.email.placeholder,
              label: texts.form.email.label,
              type: "email",
              variant: "floating",
              name: "email",
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: loading,
              label: globalTexts.actions.invite
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 2142904461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 4074797701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeSection = CodeSection;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _modal = require("pragmate-ui/modal");
          function CodeSection() {
            const {
              store,
              globalTexts,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const [open, setOpen] = _react.default.useState(false);
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const onWatch = event => setOpen(!open);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement("div", {
              className: "group-code__actions"
            }, _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: globalTexts.actions.copy,
              className: "copy__button circle",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }), _react.default.createElement(_icons2.AppIconButton, {
              className: "circle",
              title: globalTexts.actions.watch,
              icon: "watch",
              onClick: onWatch
            }))), open && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "code-modal"
            }, _react.default.createElement("h2", null, code, " ")));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 1095594501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _codeSection = require("./code-section");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _routing = require("@beyond-js/kernel/routing");
          //@ts-ignore

          function HeaderContainer() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const onClick = () => _routing.routing.pushState(`/classrooms/management?id=${store.model.id}`);
            const owner = store.model.owner?.organization ?? store.model.owner.teacher;
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_ui.EntityImage, {
              src: store.model.picture,
              entity: "institution"
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, store.model.name), _react.default.createElement(_ui.UserData, {
              data: owner,
              type: store.model.owner.organization ? 'organization' : 'teacher'
            }))), _react.default.createElement(_icons.AppIconButton, {
              className: "btn-header__edit-action",
              icon: "edit",
              onClick: onClick
            }), _react.default.createElement(_codeSection.CodeSection, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3451936216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _header = require("./header/header");
          var _tabs = require("pragmate-ui/tabs");
          var _list = require("./list");
          var _assignments = require("./assignments");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts,
              globalTexts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts,
              globalTexts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_tabs.TabsContainer, {
              className: "pui-page-tabs-container"
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.assignments), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_assignments.Asssignments, null), _react.default.createElement(_list.Members, null)))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1165083918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList(role) {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = role === 'pending' ? texts.empty.pending : texts.empty.rol;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/list/filters
      ************************************/

      ims.set('./views/list/filters', {
        hash: 1324387920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = Filters;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function Filters({
            selected,
            setSelected
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setSelected(value === 'all' ? 'authorizedPeople' : value);
            };
            const size = (0, _components.useMediaQuery)();
            if (size === 'xs') {
              const options = Object.keys(texts.roles).map(item => {
                return {
                  value: texts.roles[item].identifier,
                  label: texts.roles[item].entity
                };
              });
              return _react.default.createElement(_reactSelect.ReactSelect, {
                value: selected,
                name: "owner",
                options: options,
                onChange: onChange
              });
            }
            const options = Object.keys(texts.roles).map(item => {
              const total = store.model.pendings.length;
              return _react.default.createElement(_components.Button, {
                variant: "default",
                key: item,
                value: texts.roles[item].identifier
              }, _react.default.createElement("div", null, texts.roles[item].entity, item === 'pending' && total > 0 && _react.default.createElement("i", {
                className: "button-group__badge"
              }, store.model.pendings.length)));
            });
            return _react.default.createElement(_components.ButtonGroup, {
              onChange: onChange,
              selected: 0,
              orientation: "column",
              size: "tall",
              variant: "default"
            }, options);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2157262076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Members = Members;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " ", store.isAdmin && _react.default.createElement(_components.Button, {
              icon: "add",
              label: globalTexts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
              role: selected
            }) : _react.default.createElement(_list.List, {
              className: "people-list__container",
              items: list,
              control: _item.Item
            }), _react.default.createElement(_invite.InvitationForm, {
              show: show,
              onClose: toggleModal,
              role: selected
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/actions
      *****************************************/

      ims.set('./views/list/item/actions', {
        hash: 4275951537,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _edition = require("../../forms/edition");
          var _modal = require("pragmate-ui/modal");
          var _session = require("@aimpact/chat-sdk/session");
          function ItemActions({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return _react.default.createElement("div", {
              style: {
                width: '30px'
              }
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.delete,
              onClick: toggleDeleteModal,
              icon: "delete",
              variant: "default",
              sizing: "sm",
              className: "circle"
            })), show && _react.default.createElement(_edition.RoleModal, {
              item: item,
              show: show,
              onClose: toggleModal,
              role: item.role
            }), showDeleteModal && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.delete.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/confirm-action
      ************************************************/

      ims.set('./views/list/item/confirm-action', {
        hash: 1946251026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          function ConfirmAction({
            item
          }) {
            const [open, setOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 3935924595,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _invited = require("./invited");
          var _pending = require("./pending");
          var _actions = require("./actions");
          // import { ItemActions } from './actions';
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            if (item.invited) return _react.default.createElement(_invited.InvitedItem, {
              item: item
            });
            if (item.authorized === false) return _react.default.createElement(_pending.PendingItem, {
              item: item
            });
            const role = item.role ?? 'member';
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "flex-container flex-end gap-1"
            }, _react.default.createElement("span", {
              className: "role"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 2256157460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitedItem = InvitedItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          // import { ItemActions } from './actions';

          function InvitedItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_framerMotion.motion.li, {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/list/item/pending/RejectPending
      *******************************************************/

      ims.set('./views/list/item/pending/RejectPending', {
        hash: 2278963035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              if (item.invited) {
                await store.model.cancelInvitation({
                  email: item.email
                });
              } else {
                await store.model.reject({
                  uid: item.id
                });
              }
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/item/pending/confirm
      *************************************************/

      ims.set('./views/list/item/pending/confirm', {
        hash: 2739061646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _approve = require("../../../forms/approve");
          // import { ItemActions } from './actions';

          function ConfirmPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
              item: item,
              show: isOpen,
              onClose: toggleModal
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 729149669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _RejectPending = require("./RejectPending");
          var _confirm = require("./confirm");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_RejectPending.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              item: item
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJnbG9iYWxUZXh0cyIsImhyZWYiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJhdWRpZW5jZSIsInNob3dEYXRlIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwiQXBwSWNvbkJ1dHRvbiIsInZpZXdBc3NpZ25tZW50IiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJ0YXJnZXQiLCJhY3Rpb25zIiwidGVzdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9mb3JtIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJfdG9hc3QiLCJBcHByb3ZlTW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9uIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhcHByb3ZhbCIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwicm9sZXMiLCJtZW1iZXIiLCJtYW5hZ2VyIiwiaGFuZGxlUm9sZUNoYW5nZSIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInR5cGUiLCJ2YXJpYW50Iiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic3lzdGVtIiwiaW52aXRlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsIklucHV0IiwicmVxdWlyZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJvcGVuIiwic2V0T3BlbiIsImNvcHlUb0NsaXBib2FyZCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInBhcmFtcyIsImJhc2VVcmwiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib25XYXRjaCIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwid2F0Y2giLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvd25lciIsIm9yZ2FuaXphdGlvbiIsInRlYWNoZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJlbnRpdGllcyIsInBlb3BsZSIsIlBhbmVzIiwiTWVtYmVycyIsInBlbmRpbmciLCJyb2wiLCJGaWx0ZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwia2V5cyIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwibGVuZ3RoIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm1vdGlvbiIsImxpIiwiUmVqZWN0UGVuZGluZyIsIl9hcHByb3ZlIiwiQ29uZmlybVBlbmRpbmciLCJfUmVqZWN0UGVuZGluZyIsIl9jb25maXJtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FB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System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.10/main-layout.widget", "@aimpact/ailearn-app@0.2.10/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.2.10/components/ui", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.10/components/icons", "@aimpact/ailearn-app@0.2.10/components/module-card", "@aimpact/ailearn-app@0.2.10/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.10/config", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0210MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0210MainLayoutWidget;
    }, function (_aimpactAilearnApp0210WidgetsBase) {
      dependency_5 = _aimpactAilearnApp0210WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp0210ComponentsUi) {
      dependency_8 = _aimpactAilearnApp0210ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_9 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp0210ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0210ComponentsIcons;
    }, function (_aimpactAilearnApp0210ComponentsModuleCard) {
      dependency_11 = _aimpactAilearnApp0210ComponentsModuleCard;
    }, function (_aimpactAilearnApp0210I18nTs) {
      dependency_12 = _aimpactAilearnApp0210I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_13 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_14 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_15 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_16 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_17 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_18 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0210Config) {
      dependency_19 = _aimpactAilearnApp0210Config;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6Tabs) {
      dependency_22 = _pragmateUi100Beta6Tabs;
    }, function (_aimpactChatSdk130Session) {
      dependency_23 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_24 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_25 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.10"], ["@aimpact/ailearn-app", "0.2.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.10/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['@aimpact/ailearn-app/components/module-card', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/form/react-select', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.2.10/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.10/classrooms/view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2137039665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
              _mainLayout.LayoutBroker.refresh = () => this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              _mainLayout.LayoutBroker.refresh = null;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3153977744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/widgets/base");
          var _beyond_context = require("beyond_context");
          var _classrooms = require("@aimpact/ailearn-sdk/entities/classrooms");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _classrooms.Classroom);
              this.defineReactiveProps(['fetching']);
            }
            async approve({
              uid,
              role
            }) {
              try {
                this.fetching = true;
                const res = await this.model.approve({
                  id: this.model.id,
                  uid,
                  role
                });
                if (!res.status) {
                  throw new Error('Error inviting user');
                }
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async reject(uid) {
              try {
                this.fetching = true;
                const res = await this.model.reject({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async cancelInvitation(email) {
              try {
                this.fetching = true;
                const res = await this.model.cancelInvitation({
                  id: this.model.id,
                  email
                });
                return res;
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
            }
            async updateRole(values) {
              try {
                this.fetching = true;
                const res = await this.model.updateRole(values);
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async removeMember(uid) {
              try {
                this.fetching = true;
                const res = await this.model.removeMember({
                  id: this.model.id,
                  uid
                });
                return res;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/empty
      *****************************************/

      ims.set('./views/assignments/empty', {
        hash: 1224010999,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList() {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = texts.empty.assignments;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/assignments/index
      *****************************************/

      ims.set('./views/assignments/index', {
        hash: 3524772600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Asssignments = Asssignments;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          var _item = require("./item");
          var _empty = require("./empty");
          function Asssignments() {
            const {
              store
            } = (0, _context.useModuleContext)();
            if (!store.model.assignments) {
              return React.createElement(_empty.EmptyList, null);
            }
            return React.createElement("div", null, React.createElement(_list.List, {
              className: "entity__list",
              items: store.model.assignments,
              control: _item.AssignmentItem
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/assignments/item
      ****************************************/

      ims.set('./views/assignments/item', {
        hash: 820846694,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var React = require("react");
          var _context = require("../context");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const href = store.isAdmin ? `/dashboard/${item.id}` : `/assignments/${item.id}`;
            return React.createElement(React.Fragment, null, React.createElement(_moduleCard.ModuleCard, {
              audience: false,
              item: item.module,
              showDate: true,
              texts: texts,
              href: href
            }, React.createElement(_moduleCard.ModuleCardFooter, {
              item: item.module,
              showUser: false
            }, React.createElement("div", {
              className: "flex-container gap-05 flex-end"
            }, React.createElement(_icons.AppIconButton, {
              icon: "watch",
              href: `/assignments/${item.id}`,
              title: texts.viewAssignment
            }), store.isAdmin && React.createElement(_icons.AppIconButton, {
              href: `/dashboard/${item.id}`,
              title: "Dashboard",
              icon: "dashboard"
            }), item?.playground?.assignment && React.createElement("a", {
              target: "_blank",
              href: item.playground.assignment,
              className: "right-action btn btn-primary outline"
            }, globalTexts.actions.test)))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2074456393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/approve
      *************************************/

      ims.set('./views/forms/approve', {
        hash: 3854165243,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApproveModal = ApproveModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _toast = require("pragmate-ui/toast");
          function ApproveModal({
            item,
            show,
            onClose,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(null);
            const [error, setError] = _react.default.useState(null);
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.model.approve({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.messages.approval.success);
                onClose();
              } catch (e) {
                setError(texts.errors[e.code.toString()]);
                console.error(e.code);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'member',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.forms.approve.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.forms.approve.description)), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              placeholder: texts.form.role.placeholder,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 3805124601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = ConfirmModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function ConfirmModal({
            item,
            show,
            onClose
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selectRole, setSelectRole] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: selectRole,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setSelectRole(event.target.value);
            };
            const disabled = selectRole === item.role || loading || !selectRole;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              options: options,
              defaultValue: selectRole,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 800445425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RoleModal = RoleModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          function RoleModal({
            item,
            show,
            onClose,
            role,
            action = 'update'
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [roleSelected, setRoleSelected] = _react.default.useState(item.role || 'teacher');
            const [loading, setLoading] = _react.default.useState(false);
            if (!show) return null;
            const onSubmit = async event => {
              event.preventDefault();
              try {
                setLoading(true);
                await store.updateRole({
                  role: roleSelected,
                  uid: item.uid
                });
                _toast.toast.success(texts.system.invite.success);
              } catch (e) {
                _toast.toast.error('Error: Updating role');
                console.error(e);
              } finally {
                setLoading(false);
              }
            };
            const options = [{
              value: 'teacher',
              label: texts.roles.member.title
            }, {
              value: 'manager',
              label: texts.roles.manager.title
            }];
            const handleRoleChange = event => {
              setRoleSelected(event.target.value);
            };
            const disabled = roleSelected === item.role || loading || !roleSelected;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-form",
              onClose: onClose,
              closeBackdrop: false
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement("div", {
              className: "header-text"
            }, _react.default.createElement("h4", null, texts.editForm.title), _react.default.createElement("span", {
              className: "p2"
            }, texts.editForm.info)), _react.default.createElement(_reactSelect.ReactSelect, {
              value: role,
              options: options,
              onChange: handleRoleChange
            }), _react.default.createElement("footer", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              disabled: disabled,
              type: "submit",
              variant: "primary",
              icon: "paperPlane",
              loading: loading,
              onClick: onSubmit
            }, globalTexts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 3863855759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitationForm = InvitationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _toast = require("pragmate-ui/toast");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function InvitationForm({
            show,
            onClose,
            role
          }) {
            const {
              store,
              texts,
              globalTexts
            } = (0, _context.useModuleContext)();
            const [loading, setLoading] = _react.default.useState(false);
            const [error, setError] = _react.default.useState('');
            const defaultValues = {
              name: '',
              email: ''
            };
            const [values, setValues] = _react.default.useState(defaultValues);
            const handleClose = () => {
              setValues(defaultValues);
              setError('');
              setLoading(false);
              onClose();
            };
            const onSubmit = async event => {
              event.preventDefault();
              setLoading(true);
              const response = await store.model.invite({
                ...values
              });
              if (!response.status) {
                // setError(response.error);
                _toast.toast.success(error);
              }
              _toast.toast.success(texts.system.invite.success);
              handleClose();
            };
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            if (!show) return null;
            const options = ['manager', 'member'].map(item => ({
              value: item,
              label: texts.roles[item].title
            }));
            const {
              name,
              email
            } = values;
            return _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              className: "modal-form",
              onClose: handleClose
            }, _react.default.createElement("header", {
              className: "modal-form__header"
            }, _react.default.createElement("h3", null, texts.form.title)), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "role",
              placeholder: texts.form.role.placeholder,
              options: options,
              onChange: handleChange
            }), _react.default.createElement(_form.Form, {
              className: "mt-15",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.form.name.label,
              type: "text",
              name: "name",
              value: name,
              variant: "floating",
              onChange: handleChange,
              placeholder: texts.form.name.placeholder,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.form.email.placeholder,
              label: texts.form.email.label,
              type: "email",
              variant: "floating",
              name: "email",
              onChange: handleChange,
              required: true
            }), _react.default.createElement("div", {
              className: "form-actions flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              variant: "primary",
              loading: loading,
              label: globalTexts.actions.invite
            }))));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 2142904461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/header/code-section
      *******************************************/

      ims.set('./views/header/code-section', {
        hash: 4074797701,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeSection = CodeSection;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _modal = require("pragmate-ui/modal");
          function CodeSection() {
            const {
              store,
              globalTexts,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const [open, setOpen] = _react.default.useState(false);
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            const onWatch = event => setOpen(!open);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement("div", {
              className: "group-code__actions"
            }, _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: globalTexts.actions.copy,
              className: "copy__button circle",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }), _react.default.createElement(_icons2.AppIconButton, {
              className: "circle",
              title: globalTexts.actions.watch,
              icon: "watch",
              onClick: onWatch
            }))), open && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "code-modal"
            }, _react.default.createElement("h2", null, code, " ")));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 1095594501,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _codeSection = require("./code-section");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _routing = require("@beyond-js/kernel/routing");
          //@ts-ignore

          function HeaderContainer() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const onClick = () => _routing.routing.pushState(`/classrooms/management?id=${store.model.id}`);
            const owner = store.model.owner?.organization ?? store.model.owner.teacher;
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_ui.EntityImage, {
              src: store.model.picture,
              entity: "institution"
            }), _react.default.createElement("div", null, _react.default.createElement("h1", null, store.model.name), _react.default.createElement(_ui.UserData, {
              data: owner,
              type: store.model.owner.organization ? 'organization' : 'teacher'
            }))), _react.default.createElement(_icons.AppIconButton, {
              className: "btn-header__edit-action",
              icon: "edit",
              onClick: onClick
            }), _react.default.createElement(_codeSection.CodeSection, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3451936216,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _header = require("./header/header");
          var _tabs = require("pragmate-ui/tabs");
          var _list = require("./list");
          var _assignments = require("./assignments");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts,
              globalTexts
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (store.model.found && !store.model.hasAccess) {
              return _react.default.createElement("app-not-allowed", null);
            }
            if (!store.model.found) return _react.default.createElement("app-missing-control", null);
            const value = {
              store,
              fetching: store.fetching,
              texts,
              globalTexts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-classroom-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_tabs.TabsContainer, {
              className: "pui-page-tabs-container"
            }, _react.default.createElement(_tabs.Tabs, {
              className: "page__tabs"
            }, _react.default.createElement(_tabs.Tab, null, store.globalTexts.entities.assignments), _react.default.createElement(_tabs.Tab, null, store.texts.people)), _react.default.createElement(_tabs.Panes, null, _react.default.createElement(_assignments.Asssignments, null), _react.default.createElement(_list.Members, null)))));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/empty
      **********************************/

      ims.set('./views/list/empty', {
        hash: 1165083918,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyList = EmptyList;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          function EmptyList(role) {
            let {
              texts
            } = (0, _context.useModuleContext)();
            texts = role === 'pending' ? texts.empty.pending : texts.empty.rol;
            return _react.default.createElement(_ui.EmptyCard, {
              text: texts.title,
              icon: "info"
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/list/filters
      ************************************/

      ims.set('./views/list/filters', {
        hash: 1324387920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Filters = Filters;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _reactSelect = require("pragmate-ui/form/react-select");
          function Filters({
            selected,
            setSelected
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setSelected(value === 'all' ? 'authorizedPeople' : value);
            };
            const size = (0, _components.useMediaQuery)();
            if (size === 'xs') {
              const options = Object.keys(texts.roles).map(item => {
                return {
                  value: texts.roles[item].identifier,
                  label: texts.roles[item].entity
                };
              });
              return _react.default.createElement(_reactSelect.ReactSelect, {
                value: selected,
                name: "owner",
                options: options,
                onChange: onChange
              });
            }
            const options = Object.keys(texts.roles).map(item => {
              const total = store.model.pendings.length;
              return _react.default.createElement(_components.Button, {
                variant: "default",
                key: item,
                value: texts.roles[item].identifier
              }, _react.default.createElement("div", null, texts.roles[item].entity, item === 'pending' && total > 0 && _react.default.createElement("i", {
                className: "button-group__badge"
              }, store.model.pendings.length)));
            });
            return _react.default.createElement(_components.ButtonGroup, {
              onChange: onChange,
              selected: 0,
              orientation: "column",
              size: "tall",
              variant: "default"
            }, options);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/list/index
      **********************************/

      ims.set('./views/list/index', {
        hash: 2157262076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Members = Members;
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _empty = require("./empty");
          var _invite = require("../forms/invite");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _filters = require("./filters");
          function Members() {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('people');
            const [show, setShow] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const [updated, setUpdated] = _react.default.useState(performance.now());
            const list = store.model[selected];
            (0, _hooks.useBinder)([store.model], () => setUpdated(performance.now()));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " ", store.isAdmin && _react.default.createElement(_components.Button, {
              icon: "add",
              label: globalTexts.actions.invite,
              className: "add",
              onClick: toggleModal
            })), list.length === 0 ? _react.default.createElement(_empty.EmptyList, {
              role: selected
            }) : _react.default.createElement(_list.List, {
              className: "people-list__container",
              items: list,
              control: _item.Item
            }), _react.default.createElement(_invite.InvitationForm, {
              show: show,
              onClose: toggleModal,
              role: selected
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/actions
      *****************************************/

      ims.set('./views/list/item/actions', {
        hash: 4275951537,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemActions = ItemActions;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _edition = require("../../forms/edition");
          var _modal = require("pragmate-ui/modal");
          var _session = require("@aimpact/chat-sdk/session");
          function ItemActions({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return _react.default.createElement("div", {
              style: {
                width: '30px'
              }
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: globalTexts.actions.delete,
              onClick: toggleDeleteModal,
              icon: "delete",
              variant: "default",
              sizing: "sm",
              className: "circle"
            })), show && _react.default.createElement(_edition.RoleModal, {
              item: item,
              show: show,
              onClose: toggleModal,
              role: item.role
            }), showDeleteModal && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.delete.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/list/item/confirm-action
      ************************************************/

      ims.set('./views/list/item/confirm-action', {
        hash: 1946251026,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          function ConfirmAction({
            item
          }) {
            const [open, setOpen] = _react.default.useState(false);
            return _react.default.createElement(_react.default.Fragment, null);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 3935924595,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _invited = require("./invited");
          var _pending = require("./pending");
          var _actions = require("./actions");
          // import { ItemActions } from './actions';
          function Item({
            item
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            if (item.invited) return _react.default.createElement(_invited.InvitedItem, {
              item: item
            });
            if (item.authorized === false) return _react.default.createElement(_pending.PendingItem, {
              item: item
            });
            const role = item.role ?? 'member';
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "flex-container flex-end gap-1"
            }, _react.default.createElement("span", {
              className: "role"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 2256157460,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InvitedItem = InvitedItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          // import { ItemActions } from './actions';

          function InvitedItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_framerMotion.motion.li, {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "item-name"
            }, item.name), _react.default.createElement("span", {
              className: "item-email"
            }, item.email))), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/list/item/pending/RejectPending
      *******************************************************/

      ims.set('./views/list/item/pending/RejectPending', {
        hash: 2278963035,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RejectPending = RejectPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          // import { ItemActions } from './actions';

          function RejectPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              if (item.invited) {
                await store.model.cancelInvitation({
                  email: item.email
                });
              } else {
                await store.model.reject({
                  uid: item.id
                });
              }
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/list/item/pending/confirm
      *************************************************/

      ims.set('./views/list/item/pending/confirm', {
        hash: 2739061646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmPending = ConfirmPending;
          var _react = require("react");
          var _context = require("../../../context");
          var _components = require("pragmate-ui/components");
          var _approve = require("../../../forms/approve");
          // import { ItemActions } from './actions';

          function ConfirmPending({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, globalTexts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
              item: item,
              show: isOpen,
              onClose: toggleModal
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/list/item/pending/index
      ***********************************************/

      ims.set('./views/list/item/pending/index', {
        hash: 729149669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PendingItem = PendingItem;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../../context");
          var _modal = require("pragmate-ui/modal");
          var _RejectPending = require("./RejectPending");
          var _confirm = require("./confirm");
          // import { ItemActions } from './actions';

          function PendingItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement("li", {
              className: "person-item__container"
            }, _react.default.createElement("div", {
              className: "user-personal-info"
            }, _react.default.createElement(_image.Image, {
              className: "user__img",
              src: item?.photoUrl
            }), _react.default.createElement("span", {
              className: "h5"
            }, item.name)), _react.default.createElement("div", {
              className: "item-actions"
            }, _react.default.createElement(_RejectPending.RejectPending, {
              item: item
            }), _react.default.createElement(_confirm.ConfirmPending, {
              item: item
            })), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: globalTexts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: globalTexts.actions.cancel,
                  onClick: toggleModal,
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.cancel.description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfaWNvbnMiLCJfbW9kdWxlQ2FyZCIsIml0ZW0iLCJnbG9iYWxUZXh0cyIsImhyZWYiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJhdWRpZW5jZSIsInNob3dEYXRlIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwiQXBwSWNvbkJ1dHRvbiIsInZpZXdBc3NpZ25tZW50IiwicGxheWdyb3VuZCIsImFzc2lnbm1lbnQiLCJ0YXJnZXQiLCJhY3Rpb25zIiwidGVzdCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9tb2RhbCIsIl9mb3JtIiwiX3JlYWN0U2VsZWN0IiwiX2NvbXBvbmVudHMiLCJfdG9hc3QiLCJBcHByb3ZlTW9kYWwiLCJvbkNsb3NlIiwiYWN0aW9uIiwicm9sZVNlbGVjdGVkIiwic2V0Um9sZVNlbGVjdGVkIiwidXNlU3RhdGUiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZXMiLCJhcHByb3ZhbCIsImVycm9ycyIsImNvZGUiLCJ0b1N0cmluZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwicm9sZXMiLCJtZW1iZXIiLCJtYW5hZ2VyIiwiaGFuZGxlUm9sZUNoYW5nZSIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInR5cGUiLCJ2YXJpYW50Iiwib25DbGljayIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwic3lzdGVtIiwiaW52aXRlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsIklucHV0IiwicmVxdWlyZWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJvcGVuIiwic2V0T3BlbiIsImNvcHlUb0NsaXBib2FyZCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInBhcmFtcyIsImJhc2VVcmwiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib25XYXRjaCIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwid2F0Y2giLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvd25lciIsIm9yZ2FuaXphdGlvbiIsInRlYWNoZXIiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJVc2VyRGF0YSIsImRhdGEiLCJfaG9va3MiLCJfaGVhZGVyIiwiX3RhYnMiLCJfYXNzaWdubWVudHMiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiVGFic0NvbnRhaW5lciIsIlRhYnMiLCJUYWIiLCJlbnRpdGllcyIsInBlb3BsZSIsIlBhbmVzIiwiTWVtYmVycyIsInBlbmRpbmciLCJyb2wiLCJGaWx0ZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwia2V5cyIsImlkZW50aWZpZXIiLCJ0b3RhbCIsInBlbmRpbmdzIiwibGVuZ3RoIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJsaXN0IiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJzdHlsZSIsIndpZHRoIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIkNvbmZpcm1BY3Rpb24iLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm1vdGlvbiIsImxpIiwiUmVqZWN0UGVuZGluZyIsIl9hcHByb3ZlIiwiQ29uZmlybVBlbmRpbmciLCJfUmVqZWN0UGVuZGluZyIsIl9jb25maXJtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYXNzaWdubWVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFdBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQXFCLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ2pDO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FB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