System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/config", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/badge", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_5 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_6 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_8 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_9 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_10 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_11 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_13 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_14 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031Config) {
      dependency_16 = _aimpactAilearnApp031Config;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_20 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Badge) {
      dependency_21 = _pragmateUi100Beta7Badge;
    }, function (_aimpactChatSdk141Session) {
      dependency_22 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_23 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_24 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/organizations/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/stores/base', dependency_5], ['@aimpact/ailearn-sdk/entities/organizations', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/badge', dependency_21], ['@aimpact/chat-sdk/session', dependency_22], ['pragmate-ui/image', dependency_23], ['framer-motion', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-organizations-view",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/organizations/view.widget",
        "is": "page",
        "route": "/organizations/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/organizations/view.widget');
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
        hash: 2128826852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/ailearn-app/stores/base");
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
        hash: 1119146497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HeaderContainer = HeaderContainer;
          var _react = require("react");
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
            }, _react.default.createElement("div", {
              className: "group-entity__icon"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            })), _react.default.createElement("span", null, _react.default.createElement("h1", null, store.model.name))), _react.default.createElement(_icons.AppIconButton, {
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
        hash: 3760364316,
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
            }, _react.default.createElement("div", {
              className: "filters__container"
            }, _react.default.createElement(_filters.Filters, {
              selected: selected,
              setSelected: setSelected
            }), " "), store.isAdmin && _react.default.createElement(_components.Button, {
              variant: "primary",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsaXN0IiwibWVtYmVycyIsIm1hbmFnZXJzIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJlbWFpbCIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwicm9sZXMiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJBcHBJY29uIiwiQXBwSWNvbkJ1dHRvbiIsIl9ob29rcyIsIl9oZWFkZXIiLCJfY29pbnMiLCJfbGlzdCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiaWRlbnRpZmllciIsImVudGl0eSIsInRvdGFsIiwicGVuZGluZ3MiLCJsZW5ndGgiLCJrZXkiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiX2l0ZW0iLCJfZW1wdHkiLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwiRnJhZ21lbnQiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkZWxldGUiLCJzaXppbmciLCJvbkNvbmZpcm0iLCJjb25maXJtIiwiY2FuY2VsIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjYW5jZWxJbnZpdGF0aW9uIiwibW90aW9uIiwibGkiLCJSZWplY3RQZW5kaW5nIiwiX2FwcHJvdmUiLCJDb25maXJtUGVuZGluZyIsIl9SZWplY3RQZW5kaW5nIiwiX2NvbmZpcm0iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb2lucy50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3Jtcy9hcHByb3ZlLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9lZGl0aW9uLnRzeCIsIi90cy92aWV3cy9mb3Jtcy9pbnZpdGUudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2NvZGUtc2VjdGlvbi50c3giLCIvdHMvdmlld3MvaGVhZGVyL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2xpc3QvZmlsdGVycy50c3giLCIvdHMvdmlld3MvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2ludml0ZWQudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL1JlamVjdFBlbmRpbmcudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9wZW5kaW5nL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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