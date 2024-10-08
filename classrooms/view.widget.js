System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.13/main-layout.widget", "@aimpact/ailearn-app@0.1.13/widgets/base", "@aimpact/ailearn-sdk@1.0.0/entities/classrooms", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/alert", "pragmate-ui@1.0.0-beta.6/modal", "pragmate-ui@1.0.0-beta.6/form", "pragmate-ui@1.0.0-beta.6/form/react-select", "pragmate-ui@1.0.0-beta.6/components", "@aimpact/ailearn-app@0.1.13/components/ui", "pragmate-ui@1.0.0-beta.6/toast", "pragmate-ui@1.0.0-beta.6/icons", "@aimpact/ailearn-app@0.1.13/config", "@aimpact/ailearn-app@0.1.13/components/icons", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.6/list", "@aimpact/chat-sdk@1.3.0/session", "pragmate-ui@1.0.0-beta.6/image", "framer-motion@10.18.0"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100EntitiesClassrooms) {
      dependency_6 = _aimpactAilearnSdk100EntitiesClassrooms;
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
    }, function (_aimpactChatSdk130Session) {
      dependency_21 = _aimpactChatSdk130Session;
    }, function (_pragmateUi100Beta6Image) {
      dependency_22 = _pragmateUi100Beta6Image;
    }, function (_framerMotion2) {
      dependency_23 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.13"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['@aimpact/ailearn-app/widgets/base', dependency_5], ['@aimpact/ailearn-sdk/entities/classrooms', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/modal', dependency_9], ['pragmate-ui/form', dependency_10], ['pragmate-ui/form/react-select', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/toast', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/config', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/list', dependency_20], ['@aimpact/chat-sdk/session', dependency_21], ['pragmate-ui/image', dependency_22], ['framer-motion', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-classrooms-view",
        "vspecifier": "@aimpact/ailearn-app@0.1.13/classrooms/view.widget",
        "is": "page",
        "route": "/classrooms/view/${id}",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.13/classrooms/view.widget');
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
        hash: 956506259,
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
                await navigator.clipboard.writeText(`${_config.default.params.baseUrl}/classrooms/join?code=${code}`);
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
        hash: 3911763608,
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
            return _react.default.createElement("header", {
              className: "page-container__header mb-1"
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
        hash: 1138499143,
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
              className: "app-classroom-creation-page",
              fetching: store.fetching
            }, _react.default.createElement(_header.HeaderContainer, null), _react.default.createElement(_list.Members, null)));
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
        hash: 3001366701,
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
        hash: 2456437675,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfbWFpbkxheW91dCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwibG9hZCIsInVyaSIsInZhcnMiLCJnZXQiLCJMYXlvdXRCcm9rZXIiLCJyZWZyZXNoIiwiaGlkZSIsImV4cG9ydHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIl9jbGFzc3Jvb21zIiwiVmlld1N0b3JlTWFuYWdlciIsImlzQWRtaW4iLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiQ2xhc3Nyb29tIiwiZGVmaW5lUmVhY3RpdmVQcm9wcyIsImFwcHJvdmUiLCJ1aWQiLCJyb2xlIiwiZmV0Y2hpbmciLCJyZXMiLCJpZCIsInN0YXR1cyIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInJlamVjdCIsImNhbmNlbEludml0YXRpb24iLCJlbWFpbCIsInVwZGF0ZVJvbGUiLCJ2YWx1ZXMiLCJyZW1vdmVNZW1iZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9hbGVydCIsIkVudGl0eUNvaW5zIiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0IiwiY29pbnMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidHlwZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiYXNzaWdubWVudHMiLCJjb3VudCIsIm1vZHVsZXMiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbW9kYWwiLCJfZm9ybSIsIl9yZWFjdFNlbGVjdCIsIl9jb21wb25lbnRzIiwiX3VpIiwiX3RvYXN0IiwiQXBwcm92ZU1vZGFsIiwiaXRlbSIsIm9uQ2xvc2UiLCJhY3Rpb24iLCJyb2xlU2VsZWN0ZWQiLCJzZXRSb2xlU2VsZWN0ZWQiLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzeXN0ZW0iLCJpbnZpdGUiLCJlcnJvcnMiLCJjb2RlIiwidG9TdHJpbmciLCJvcHRpb25zIiwidmFsdWUiLCJsaXN0IiwibWVtYmVycyIsIm1hbmFnZXJzIiwiaGFuZGxlUm9sZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRm9ybSIsImZvcm1zIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkVycm9yUmVuZGVyZXIiLCJSZWFjdFNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsIm9uQ2hhbmdlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsIkNvbmZpcm1Nb2RhbCIsInNlbGVjdFJvbGUiLCJzZXRTZWxlY3RSb2xlIiwiZWRpdEZvcm0iLCJpbmZvIiwiZGVmYXVsdFZhbHVlIiwic2F2ZSIsIlJvbGVNb2RhbCIsIkludml0YXRpb25Gb3JtIiwiZGVmYXVsdFZhbHVlcyIsIm5hbWUiLCJzZXRWYWx1ZXMiLCJoYW5kbGVDbG9zZSIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImN1cnJlbnRWYWx1ZSIsIm1hcCIsInJvbGVzIiwiSW5wdXQiLCJyZXF1aXJlZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX2NvbmZpZyIsIkNvZGVTZWN0aW9uIiwiam9pblNwZWNzIiwiY29weVRvQ2xpcGJvYXJkIiwic3RvcFByb3BhZ2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwicGFyYW1zIiwiYmFzZVVybCIsIm1lc3NhZ2VzIiwiY29weSIsImVyciIsImNvcHlFcnJvciIsIm9yZ0NvZGUiLCJJY29uQnV0dG9uIiwiX2NvZGVTZWN0aW9uIiwiX3JvdXRpbmciLCJIZWFkZXJDb250YWluZXIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiRW50aXR5SW1hZ2UiLCJzcmMiLCJwaWN0dXJlIiwiZW50aXR5IiwiQXBwSWNvbkJ1dHRvbiIsIl9ob29rcyIsIl9oZWFkZXIiLCJfbGlzdCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJoYXNBY2Nlc3MiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNZW1iZXJzIiwiRW1wdHlMaXN0IiwiZW1wdHkiLCJwZW5kaW5nIiwicm9sIiwiRW1wdHlDYXJkIiwidGV4dCIsIkZpbHRlcnMiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2l6ZSIsInVzZU1lZGlhUXVlcnkiLCJrZXlzIiwiaWRlbnRpZmllciIsInRvdGFsIiwicGVuZGluZ3MiLCJsZW5ndGgiLCJrZXkiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiX2l0ZW0iLCJfZW1wdHkiLCJfaW52aXRlIiwiX2ZpbHRlcnMiLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJ1cGRhdGVkIiwic2V0VXBkYXRlZCIsInBlcmZvcm1hbmNlIiwibm93IiwiRnJhZ21lbnQiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9lZGl0aW9uIiwiX3Nlc3Npb24iLCJJdGVtQWN0aW9ucyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsInRvZ2dsZURlbGV0ZU1vZGFsIiwib25EZWxldGUiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJkZWxldGUiLCJzaXppbmciLCJvbkNvbmZpcm0iLCJjb25maXJtIiwiY2FuY2VsIiwiQ29uZmlybUFjdGlvbiIsIm9wZW4iLCJzZXRPcGVuIiwiX2ltYWdlIiwiX2ludml0ZWQiLCJfcGVuZGluZyIsIl9hY3Rpb25zIiwiaW52aXRlZCIsIkludml0ZWRJdGVtIiwiYXV0aG9yaXplZCIsIlBlbmRpbmdJdGVtIiwiSW1hZ2UiLCJwaG90b1VybCIsIl9mcmFtZXJNb3Rpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtb3Rpb24iLCJsaSIsIlJlamVjdFBlbmRpbmciLCJfYXBwcm92ZSIsIkNvbmZpcm1QZW5kaW5nIiwiX1JlamVjdFBlbmRpbmciLCJfY29uZmlybSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvaW5zLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Zvcm1zL2FwcHJvdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2VkaXRpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm1zL2ludml0ZS50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvY29kZS1zZWN0aW9uLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGlzdC9lbXB0eS50c3giLCIvdHMvdmlld3MvbGlzdC9maWx0ZXJzLnRzeCIsIi90cy92aWV3cy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbGlzdC9pdGVtL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xpc3QvaXRlbS9pbnZpdGVkLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9SZWplY3RQZW5kaW5nLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9jb25maXJtLnRzeCIsIi90cy92aWV3cy9saXN0L2l0ZW0vcGVuZGluZy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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