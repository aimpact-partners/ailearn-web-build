System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-app@0.3.1/main-layout.widget", "@aimpact/ailearn-app@0.3.1/stores/base", "@aimpact/ailearn-sdk@1.0.0/entities/organizations", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/form/react-select", "pragmate-ui@1.0.0-beta.7/components", "@aimpact/ailearn-app@0.3.1/components/ui", "pragmate-ui@1.0.0-beta.7/toast", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/ailearn-app@0.3.1/config", "@aimpact/ailearn-app@0.3.1/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.3/hooks", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/badge", "@aimpact/chat-sdk@1.4.1/session", "pragmate-ui@1.0.0-beta.7/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_2 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnApp031MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp031MainLayoutWidget;
    }, function (_aimpactAilearnApp031StoresBase) {
      dependency_4 = _aimpactAilearnApp031StoresBase;
    }, function (_aimpactAilearnSdk100EntitiesOrganizations) {
      dependency_5 = _aimpactAilearnSdk100EntitiesOrganizations;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_7 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_8 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_9 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7FormReactSelect) {
      dependency_10 = _pragmateUi100Beta7FormReactSelect;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_aimpactAilearnApp031ComponentsUi) {
      dependency_12 = _aimpactAilearnApp031ComponentsUi;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_13 = _pragmateUi100Beta7Toast;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_aimpactAilearnApp031Config) {
      dependency_15 = _aimpactAilearnApp031Config;
    }, function (_aimpactAilearnApp031ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp031ComponentsIcons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_18 = _beyondJsReact18Widgets113Hooks;
    }, function (_pragmateUi100Beta7List) {
      dependency_19 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Badge) {
      dependency_20 = _pragmateUi100Beta7Badge;
    }, function (_aimpactChatSdk141Session) {
      dependency_21 = _aimpactChatSdk141Session;
    }, function (_pragmateUi100Beta7Image) {
      dependency_22 = _pragmateUi100Beta7Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['@aimpact/ailearn-app/stores/base', dependency_4], ['@aimpact/ailearn-sdk/entities/organizations', dependency_5], ['react', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/modal', dependency_8], ['pragmate-ui/form', dependency_9], ['pragmate-ui/form/react-select', dependency_10], ['pragmate-ui/components', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/toast', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/badge', dependency_20], ['@aimpact/chat-sdk/session', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23]]);
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
        hash: 4243089792,
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
              className: "profile-coins__section"
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

      /*******************************************
      INTERNAL MODULE: ./views/forms/approve-field
      *******************************************/

      ims.set('./views/forms/approve-field', {
        hash: 2384418648,
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
        hash: 4020851176,
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
              setSelected(value === 'all' ? 'people' : value);
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
        hash: 3730289000,
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
            const [selected, setSelected] = _react.default.useState('people');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9vcmdhbml6YXRpb25zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiT3JnYW5pemF0aW9uIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJtZXNzYWdlcyIsImFwcHJvdmFsIiwiZXJyb3JzIiwiY29kZSIsInRvU3RyaW5nIiwib3B0aW9ucyIsInZhbHVlIiwibGlzdCIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsImhhbmRsZVJvbGVDaGFuZ2UiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkZvcm0iLCJmb3JtcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJFcnJvclJlbmRlcmVyIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsImZvcm0iLCJvbkNoYW5nZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJzeXN0ZW0iLCJpbnZpdGUiLCJDb25maXJtTW9kYWwiLCJzZWxlY3RSb2xlIiwic2V0U2VsZWN0Um9sZSIsImVkaXRGb3JtIiwiaW5mbyIsImRlZmF1bHRWYWx1ZSIsInNhdmUiLCJSb2xlTW9kYWwiLCJJbnZpdGF0aW9uRm9ybSIsImRlZmF1bHRWYWx1ZXMiLCJuYW1lIiwiZW1haWwiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsInJvbGVzIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyYW1zIiwiYmFzZVVybCIsImNvcHkiLCJlcnIiLCJjb3B5RXJyb3IiLCJvcmdDb2RlIiwiSWNvbkJ1dHRvbiIsIl9jb2RlU2VjdGlvbiIsIl9yb3V0aW5nIiwiSGVhZGVyQ29udGFpbmVyIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIkFwcEljb24iLCJBcHBJY29uQnV0dG9uIiwiX2hvb2tzIiwiX2hlYWRlciIsIl9jb2lucyIsIl9saXN0IiwicmVhZHkiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsImhhc0FjY2VzcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIk1lbWJlcnMiLCJFbXB0eUxpc3QiLCJlbXB0eSIsInBlbmRpbmciLCJyb2wiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiRmlsdGVycyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJzaXplIiwidXNlTWVkaWFRdWVyeSIsImtleXMiLCJpZGVudGlmaWVyIiwiZW50aXR5IiwidG90YWwiLCJwZW5kaW5ncyIsImxlbmd0aCIsImtleSIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJfaXRlbSIsIl9lbXB0eSIsIl9pbnZpdGUiLCJfZmlsdGVycyIsInNldFNob3ciLCJ0b2dnbGVNb2RhbCIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwicGVyZm9ybWFuY2UiLCJub3ciLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJJdGVtIiwiX2VkaXRpb24iLCJfc2Vzc2lvbiIsIkl0ZW1BY3Rpb25zIiwic2hvd0RlbGV0ZU1vZGFsIiwic2V0U2hvd0RlbGV0ZU1vZGFsIiwidG9nZ2xlRGVsZXRlTW9kYWwiLCJvbkRlbGV0ZSIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImRlbGV0ZSIsInNpemluZyIsIm9uQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJfaW1hZ2UiLCJfaW52aXRlZCIsIl9wZW5kaW5nIiwiX2FjdGlvbnMiLCJpbnZpdGVkIiwiSW52aXRlZEl0ZW0iLCJhdXRob3JpemVkIiwiUGVuZGluZ0l0ZW0iLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiX2ZyYW1lck1vdGlvbiIsImlzT3BlbiIsInNldElzT3BlbiIsImNhbmNlbEludml0YXRpb24iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUtZmllbGQudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW52aXRlZC50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvUmVqZWN0UGVuZGluZy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvY29uZmlybS50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL3BlbmRpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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