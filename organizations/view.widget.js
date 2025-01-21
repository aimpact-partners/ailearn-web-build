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
        hash: 3030068794,
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
            console.log(12, store.model.getProperties());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsaXN0IiwibWVtYmVycyIsIm1hbmFnZXJzIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJlbWFpbCIsInNldFZhbHVlcyIsImhhbmRsZUNsb3NlIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiY3VycmVudFZhbHVlIiwibWFwIiwicm9sZXMiLCJJbnB1dCIsInJlcXVpcmVkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMiLCJfY29uZmlnIiwiQ29kZVNlY3Rpb24iLCJqb2luU3BlY3MiLCJjb3B5VG9DbGlwYm9hcmQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJwYXJhbXMiLCJiYXNlVXJsIiwibWVzc2FnZXMiLCJjb3B5IiwiZXJyIiwiY29weUVycm9yIiwib3JnQ29kZSIsIkljb25CdXR0b24iLCJfY29kZVNlY3Rpb24iLCJfcm91dGluZyIsIkhlYWRlckNvbnRhaW5lciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJsb2ciLCJnZXRQcm9wZXJ0aWVzIiwiQXBwSWNvbiIsIkFwcEljb25CdXR0b24iLCJfaG9va3MiLCJfaGVhZGVyIiwiX2NvaW5zIiwiX2xpc3QiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiaGFzQWNjZXNzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTWVtYmVycyIsIkVtcHR5TGlzdCIsImVtcHR5IiwicGVuZGluZyIsInJvbCIsIkVtcHR5Q2FyZCIsInRleHQiLCJGaWx0ZXJzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNpemUiLCJ1c2VNZWRpYVF1ZXJ5Iiwia2V5cyIsImlkZW50aWZpZXIiLCJlbnRpdHkiLCJ0b3RhbCIsInBlbmRpbmdzIiwibGVuZ3RoIiwia2V5IiwiQnV0dG9uR3JvdXAiLCJvcmllbnRhdGlvbiIsIl9pdGVtIiwiX2VtcHR5IiwiX2ludml0ZSIsIl9maWx0ZXJzIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIkZyYWdtZW50IiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkl0ZW0iLCJfZWRpdGlvbiIsIl9zZXNzaW9uIiwiSXRlbUFjdGlvbnMiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJ0b2dnbGVEZWxldGVNb2RhbCIsIm9uRGVsZXRlIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZGVsZXRlIiwic2l6aW5nIiwib25Db25maXJtIiwiY29uZmlybSIsImNhbmNlbCIsIl9pbWFnZSIsIl9pbnZpdGVkIiwiX3BlbmRpbmciLCJfYWN0aW9ucyIsImludml0ZWQiLCJJbnZpdGVkSXRlbSIsImF1dGhvcml6ZWQiLCJQZW5kaW5nSXRlbSIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJfZnJhbWVyTW90aW9uIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2FuY2VsSW52aXRhdGlvbiIsIm1vdGlvbiIsImxpIiwiUmVqZWN0UGVuZGluZyIsIl9hcHByb3ZlIiwiQ29uZmlybVBlbmRpbmciLCJfUmVqZWN0UGVuZGluZyIsIl9jb25maXJtIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29pbnMudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybXMvYXBwcm92ZS50c3giLCIvdHMvdmlld3MvZm9ybXMvY29uZmlybS50c3giLCIvdHMvdmlld3MvZm9ybXMvZWRpdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybXMvaW52aXRlLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9jb2RlLXNlY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9saXN0L2ZpbHRlcnMudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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