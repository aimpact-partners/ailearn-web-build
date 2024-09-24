System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@aimpact/ailearn-app@0.1.13/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "pragmate-ui@1.0.0-beta.6/badge", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0113MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0113MainLayoutWidget;
    }, function (_aimpactAilearnApp0113WidgetsBase) {
      dependency_5 = _aimpactAilearnApp0113WidgetsBase;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta6Alert) {
      dependency_8 = _pragmateUi100Beta6Alert;
    }, function (_pragmateUi100Beta6Modal) {
      dependency_9 = _pragmateUi100Beta6Modal;
    }, function (_pragmateUi100Beta6Form) {
      dependency_10 = _pragmateUi100Beta6Form;
    }, function (_pragmateUi100Beta6FormReactSelect) {
      dependency_11 = _pragmateUi100Beta6FormReactSelect;
    }, function (_pragmateUi100Beta6Components) {
      dependency_12 = _pragmateUi100Beta6Components;
    }, function (_aimpactAilearnApp0113ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0113ComponentsUi;
    }, function (_pragmateUi100Beta6Toast) {
      dependency_14 = _pragmateUi100Beta6Toast;
    }, function (_pragmateUi100Beta6Icons) {
      dependency_15 = _pragmateUi100Beta6Icons;
    }, function (_aimpactAilearnApp0113Config) {
      dependency_16 = _aimpactAilearnApp0113Config;
    }, function (_aimpactAilearnApp0113ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0113ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta6List) {
      dependency_20 = _pragmateUi100Beta6List;
    }, function (_pragmateUi100Beta6Badge) {
      dependency_21 = _pragmateUi100Beta6Badge;
    }, function (_aimpactChatSdk130Session) {
      dependency_22 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_23 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/badge', dependency_21], ['@aimpact/chat-sdk/session', dependency_22], ['pragmate-ui/image', dependency_23], ['framer-motion', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/organizations/view.widget');
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
        hash: 4176018375,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/widgets/base");
          var _beyond_context = require("beyond_context");
          var _organizations = require("@aimpact/ailearn-sdk/entities/organizations");
          /*bundle*/
          class StoreManager extends _base.ViewStoreManager {
            get isAdmin() {
              return !!this.model?.isAdmin;
            }
            constructor() {
              super(_beyond_context.module.specifier, _organizations.Organization);
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

      /*****************************
      INTERNAL MODULE: ./views/coins
      *****************************/

      ims.set('./views/coins', {
        hash: 3348126422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EntityCoins = EntityCoins;
          var _react = require("react");
          var _context = require("./context");
          var _alert = require("pragmate-ui/alert");
          function EntityCoins() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            if (!model.coins || !store.isAdmin) return null;
            return _react.default.createElement(_alert.Alert, {
              type: "info",
              className: "profile-coins__section mt-15"
            }, _react.default.createElement("h3", null, texts.coins.label), _react.default.createElement("div", {
              className: "coins-detail__container"
            }, _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.assignments), _react.default.createElement("span", null, model.coins.assignments.count)), _react.default.createElement("div", {
              className: "coins-section__item"
            }, _react.default.createElement("span", null, texts.coins.modules), _react.default.createElement("span", null, model.coins.modules.count))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 631431152,
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
        hash: 289435250,
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
                _toast.toast.success(texts.system.invite.success);
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.approve))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/confirm
      *************************************/

      ims.set('./views/forms/confirm', {
        hash: 2229487128,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.save))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/forms/edition
      *************************************/

      ims.set('./views/forms/edition', {
        hash: 633720687,
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
              label: texts.list.members.role
            }, {
              value: 'manager',
              label: texts.list.managers.role
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
            }, texts.actions.save))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/forms/invite
      ************************************/

      ims.set('./views/forms/invite', {
        hash: 3826441221,
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
              texts
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
              label: texts.actions.invite
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
        hash: 395258689,
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
          var _config = require("@aimpact/ailearn-app/config");
          function CodeSection() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const {
              code
            } = store.model.joinSpecs;
            const copyToClipboard = async event => {
              try {
                event.stopPropagation();
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/organizations/join?code=${code}`);
                _toast.toast.success(texts.messages.copy);
              } catch (err) {
                console.error(texts.copyError, err);
              }
            };
            return _react.default.createElement("div", {
              className: "group-code__container"
            }, _react.default.createElement("section", {
              className: "code-content"
            }, _react.default.createElement("span", {
              className: "code__label"
            }, texts.orgCode), _react.default.createElement("span", {
              className: "code__text"
            }, code)), _react.default.createElement(_icons.IconButton, {
              "data-text": store.model.joinSpecs?.code,
              title: texts.actions.copy,
              className: "copy__button",
              icon: "link",
              disabled: !store.model.joinSpecs?.code,
              onClick: copyToClipboard
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/header/header
      *************************************/

      ims.set('./views/header/header', {
        hash: 3281903638,
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
            const onClick = () => _routing.routing.pushState(`/organizations/management?id=${store.model.id}`);
            return _react.default.createElement("header", {
              className: "page-container__header"
            }, _react.default.createElement("div", {
              className: "cover-content__container bg-primary"
            }, _react.default.createElement(_ui.EntityImage, {
              src: store.model.picture,
              entity: "institution"
            }), _react.default.createElement("span", null, _react.default.createElement("h1", null, store.model.name))), _react.default.createElement(_icons.AppIconButton, {
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
        hash: 1012381499,
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
          var _coins = require("./coins");
          var _list = require("./list");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const {
              texts
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
              texts
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, {
              className: "app-organization-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_coins.EntityCoins, null), _react.default.createElement(_list.Members, null)));
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
        hash: 2800895589,
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
        hash: 3694158578,
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
              store
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState('authorizedPeople');
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
              label: texts.actions.invite,
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
        hash: 1222758772,
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
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [showDeleteModal, setShowDeleteModal] = _react.default.useState(false);
            const toggleModal = () => setShow(!show);
            const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
            const onDelete = () => store.removeMember(item.uid);
            if (!store.model.isAdmin || item.id === _session.sessionWrapper.user.id) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: "item-actions"
            }, _react.default.createElement(_icons.AppIconButton, {
              title: texts.actions.delete,
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
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  onClick: () => setShowDeleteModal(false),
                  className: 'btn-secondary'
                }
              }
            }, _react.default.createElement("span", null, texts.forms.delete.description)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/list/item/index
      ***************************************/

      ims.set('./views/list/item/index', {
        hash: 233032695,
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
            }, item.name)), _react.default.createElement("span", {
              className: "role"
            }, texts.roles[role]?.title), _react.default.createElement(_actions.ItemActions, {
              item: item
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/list/item/invited
      *****************************************/

      ims.set('./views/list/item/invited', {
        hash: 1840860296,
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
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.model.cancelInvitation({
                id: store.model.id,
                email: item.email
              });
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
            }, texts.actions.cancel)), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
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
        hash: 2392877374,
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
            }, texts.actions.reject), isOpen && _react.default.createElement(_modal.ConfirmModal, {
              title: texts.forms.cancel.title,
              show: true,
              onConfirm: onDelete,
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
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
        hash: 1858777722,
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
              store
            } = (0, _context.useModuleContext)();
            const [isOpen, setIsOpen] = _react.default.useState(false);
            const toggleModal = () => setIsOpen(!isOpen);
            const onDelete = async () => {
              await store.cancelInvitation(item.email);
              toggleModal();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, texts.actions.approve), isOpen && _react.default.createElement(_approve.ApproveModal, {
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
        hash: 2509603142,
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
                  label: texts.actions.confirm,
                  onClick: onDelete,
                  className: 'btn-primary'
                },
                cancel: {
                  label: texts.actions.cancel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsaXN0IiwibWVtYmVycyIsIm1hbmFnZXJzIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJlbWFpbCIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwicm9sZXMiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJFbnRpdHlJbWFnZSIsInNyYyIsInBpY3R1cmUiLCJlbnRpdHkiLCJBcHBJY29uQnV0dG9uIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb2lucyIsIl9saXN0IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIk1lbWJlcnMiLCJFbXB0eUxpc3QiLCJlbXB0eSIsInBlbmRpbmciLCJyb2wiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJpZGVudGlmaWVyIiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaXRlbSIsIl9lbXB0eSIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNhbmNlbEludml0YXRpb24iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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