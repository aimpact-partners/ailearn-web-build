System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.2.1/main-layout.widget", "@aimpact/ailearn-app@0.2.1/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "@aimpact/ailearn-app@0.2.1/components/ui", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/ailearn-app@0.2.1/components/module-card", "@aimpact/ailearn-app@0.2.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.2.1/i18n.ts", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.2.1/config", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/tabs", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp021MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp021MainLayoutWidget;
    }, function (_aimpactAilearnApp021WidgetsBase) {
      dependency_5 = _aimpactAilearnApp021WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactAilearnApp021ComponentsUi) {
      dependency_8 = _aimpactAilearnApp021ComponentsUi;
    }, function (_pragmateUi100Beta6List) {
      dependency_9 = _pragmateUi100Beta6List;
    }, function (_aimpactAilearnApp021ComponentsModuleCard) {
      dependency_10 = _aimpactAilearnApp021ComponentsModuleCard;
    }, function (_aimpactAilearnApp021ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp021ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp021I18nTs) {
      dependency_13 = _aimpactAilearnApp021I18nTs;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_14 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_15 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_16 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_17 = _pragmateUi100Beta6Components;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_18 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_19 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp021Config) {
      dependency_20 = _aimpactAilearnApp021Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.1"], ["@aimpact/ailearn-app", "0.2.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.1/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['@aimpact/ailearn-app/components/ui', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/module-card', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['@aimpact/ailearn-app/i18n.ts', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/form/react-select', dependency_16], ['pragmate-ui/components', dependency_17], ['pragmate-ui/toast', dependency_18], ['pragmate-ui/icons', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/tabs', dependency_22], ['@aimpact/chat-sdk/session', dependency_23], ['pragmate-ui/image', dependency_24], ['framer-motion', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.2.1/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.1/classrooms/view.widget');
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
        hash: 4235423094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AssignmentItem = AssignmentItem;
          var React = require("react");
          var _moduleCard = require("@aimpact/ailearn-app/components/module-card");
          var _context = require("../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function AssignmentItem({
            item
          }) {
            const {
              texts,
              globalTexts,
              store
            } = (0, _context.useModuleContext)();
            const href = `/assignments/${item.id}`;
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
              href: href
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
        hash: 1667473923,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfdWkiLCJfY29udGV4dCIsIkVtcHR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsImVtcHR5IiwiYXNzaWdubWVudHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5Q2FyZCIsInRleHQiLCJ0aXRsZSIsImljb24iLCJSZWFjdCIsIl9saXN0IiwiX2l0ZW0iLCJfZW1wdHkiLCJBc3NzaWdubWVudHMiLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiQXNzaWdubWVudEl0ZW0iLCJfbW9kdWxlQ2FyZCIsIl9pY29ucyIsIml0ZW0iLCJnbG9iYWxUZXh0cyIsImhyZWYiLCJGcmFnbWVudCIsIk1vZHVsZUNhcmQiLCJhdWRpZW5jZSIsInNob3dEYXRlIiwiTW9kdWxlQ2FyZEZvb3RlciIsInNob3dVc2VyIiwiQXBwSWNvbkJ1dHRvbiIsInBsYXlncm91bmQiLCJhc3NpZ25tZW50IiwidGFyZ2V0IiwiYWN0aW9ucyIsInRlc3QiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwib25DbG9zZSIsImFjdGlvbiIsInJvbGVTZWxlY3RlZCIsInNldFJvbGVTZWxlY3RlZCIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvYXN0Iiwic3VjY2VzcyIsIm1lc3NhZ2VzIiwiYXBwcm92YWwiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInJvbGVzIiwibWVtYmVyIiwibWFuYWdlciIsImhhbmRsZVJvbGVDaGFuZ2UiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsImRlc2NyaXB0aW9uIiwiRXJyb3JSZW5kZXJlciIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJmb3JtIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ0eXBlIiwidmFyaWFudCIsIm9uQ2xpY2siLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsInN5c3RlbSIsImludml0ZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwic2V0VmFsdWVzIiwiaGFuZGxlQ2xvc2UiLCJyZXNwb25zZSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJjdXJyZW50VmFsdWUiLCJtYXAiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwib3BlbiIsInNldE9wZW4iLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9uV2F0Y2giLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIndhdGNoIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib3duZXIiLCJvcmdhbml6YXRpb24iLCJ0ZWFjaGVyIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiVXNlckRhdGEiLCJkYXRhIiwiX2hvb2tzIiwiX2hlYWRlciIsIl90YWJzIiwiX2Fzc2lnbm1lbnRzIiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIlRhYnNDb250YWluZXIiLCJUYWJzIiwiVGFiIiwiZW50aXRpZXMiLCJwZW9wbGUiLCJQYW5lcyIsIk1lbWJlcnMiLCJwZW5kaW5nIiwicm9sIiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJpZGVudGlmaWVyIiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwibGlzdCIsIkl0ZW0iLCJfZWRpdGlvbiIsIl9zZXNzaW9uIiwiSXRlbUFjdGlvbnMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ0b2dnbGVEZWxldGVNb2RhbCIsIm9uRGVsZXRlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwic3R5bGUiLCJ3aWR0aCIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJDb25maXJtQWN0aW9uIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50cy9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxXQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFxQixJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNqQztZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFD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QUFDO2NBQ3hDNkwsV0FBVyxFQUFFO1lBQ2QsQ0FBQztZQUVELE9BQ0N6TCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFJVyxTQUFTLEVBQUM7WUFBd0IsR0FDckNwQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBb0IsR0FDbENwQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd00sTUFBQSxDQUFBUSxLQUFLO2NBQUNyTSxTQUFTLEVBQUMsV0FBVztjQUFDMkgsR0FBRyxFQUFFckgsSUFBSSxFQUFFZ007WUFBUSxFQUFJLEVBQ3BEMU4sTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBTVcsU0FBUyxFQUFDO1lBQUksR0FBRU0sSUFBSSxDQUFDNEUsSUFBSSxDQUFRLENBQ2xDLEVBQ050RyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBYyxHQUM1QnBCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUMwTixjQUFBLENBQUFILGFBQWE7Y0FBQ3RNLElBQUksRUFBRUE7WUFBSSxFQUFJLEVBQzdCMUIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJOLFFBQUEsQ0FBQUYsY0FBYztjQUFDeE0sSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDekIsRUFDTGtNLE1BQU0sSUFDTjVOLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBLENBQUNtQyxNQUFBLENBQUE4QyxZQUFZO2NBQ1o5RSxLQUFLLEVBQUVSLEtBQUssQ0FBQzJFLEtBQUssQ0FBQ2dJLE1BQU0sQ0FBQ25NLEtBQUs7Y0FDL0JqRCxJQUFJO2NBQ0prUCxTQUFTLEVBQUVQLFFBQVE7Y0FDbkIvSixPQUFPLEVBQUU7Z0JBQ1J1SyxPQUFPLEVBQUU7a0JBQ1J4SSxLQUFLLEVBQUUzQyxXQUFXLENBQUNZLE9BQU8sQ0FBQ3VLLE9BQU87a0JBQ2xDckgsT0FBTyxFQUFFNkcsUUFBUTtrQkFDakJsTCxTQUFTLEVBQUU7aUJBQ1g7Z0JBQ0QyTCxNQUFNLEVBQUU7a0JBQ1B6SSxLQUFLLEVBQUUzQyxXQUFXLENBQUNZLE9BQU8sQ0FBQ3dLLE1BQU07a0JBQ2pDdEgsT0FBTyxFQUFFZ0csV0FBVztrQkFDcEJySyxTQUFTLEVBQUU7OztZQUVaLEdBRURwQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxlQUFPTCxLQUFLLENBQUMyRSxLQUFLLENBQUNnSSxNQUFNLENBQUMvSCxXQUFXLENBQVEsQ0FFOUMsQ0FDRztVQUVQIiwiaWdub3JlTGlzdCI6W119